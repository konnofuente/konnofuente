import { Stack } from "../enums/Stacks";

export class Technology {
    id: number;
    stack: Stack;
    logo?: string;
  
    constructor(id: number, stack: Stack, logo?: string) {
      this.id = id;
      this.stack = stack;
      this.logo = logo;
    }
  }
  