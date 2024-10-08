import { ReactNode } from "react";

export interface Item {
  plaintext: ReactNode;
  name: string;
  description: string;
  image: {
    full: string;
  };
  gold: {
    base: number;
    total: number;
    sell: number;
    purchasable: boolean;
  };
  tags: string[];
}
