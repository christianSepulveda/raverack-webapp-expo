import { Company } from "../../domian/entities/Company";
import { Error } from "../../domian/entities/Error";
import { CompanyRepository } from "../../domian/repositories/CompanyRepository";
import makeFetch from "../config/makeFetch";

export class CompanyController implements CompanyRepository {
  async findCompanyById(id: string) {
    const response = await makeFetch(`company/${id}`, "GET", null);

    const error: Error = {
      error: true,
      message: "No se pudieron obtener los clientes.",
      status: response.status,
    };

    if (response.status !== 200) return error;
    return response.data as Company;
  }
}
