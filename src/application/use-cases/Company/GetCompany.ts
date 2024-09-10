import { Company } from "../../../domian/entities/Company";
import { Error } from "../../../domian/entities/Error";
import { CompanyRepository } from "../../../domian/repositories/CompanyRepository";

export class GetCompany {
  private companyRepository: CompanyRepository;

  constructor(companyRepository: CompanyRepository) {
    this.companyRepository = companyRepository;
  }

  async execute(id: string): Promise<Company | Error> {
    if (id) {
      const company = await this.companyRepository.findCompanyById(id);
      if (!company) return { message: "Company not found", error: true };
      return company;
    }

    return { message: "Company id is required", error: true };
  }
}
