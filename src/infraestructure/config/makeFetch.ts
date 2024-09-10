import axios from "axios";

const makeFetch = async (
  endpoint: string,
  method: string,
  body?: any
): Promise<any> => {
  try {
    const server = process.env.SERVER || "localhost:3000";
    const url = `http://${server}/${endpoint}`;
    //const url = "https://raverack-api-nodejs.onrender.com/" + endpoint;

    const configuration = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    console.log(
      "------------------------------------------------------------------"
    );
    console.log("METHOD: ", method);
    console.log("URL: ", url);
    console.log("BODY: ", JSON.stringify(body));
    console.log("HEADERS: ", configuration);

    if (method === "POST") {
      const response = await axios.post(url, JSON.stringify(body), {
        headers: configuration.headers,
      });
      return response;
    }

    if (method === "GET") {
      const response = await axios.get(url, {
        headers: configuration.headers,
      });
      return response;
    }

    if (method === "PUT") {
      const response = await axios.put(url, JSON.stringify(body), {
        headers: configuration.headers,
      });
      return response;
    }
  } catch (error: any) {
    console.log(error);

    const response = {
      status: error.response?.status || 500,
      data: error.response?.data || null,
      message: error.message || "Internal Server Error",
    };

    return response;
  }
};

export default makeFetch;
