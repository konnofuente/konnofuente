export class Experience {
    position: string;
    company: string;
    startDate: Date;
    endDate?: Date;
    description: string;
  
    constructor(position: string, company: string, startDate: Date, endDate: Date, description: string) {
      this.position = position;
      this.company = company;
      this.startDate = startDate;
      this.endDate = endDate;
      this.description = description;
    }
  }