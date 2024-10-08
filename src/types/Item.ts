export interface Item {
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
  tag: string[];
}
