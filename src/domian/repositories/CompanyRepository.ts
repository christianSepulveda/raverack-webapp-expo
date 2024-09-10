import { Error } from "../entities/Error";
import { Company } from "../entities/Company";

export interface CompanyRepository {
  findCompanyById(id: string): Promise<Company | Error>;
}
