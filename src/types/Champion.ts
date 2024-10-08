export interface Champion {
  id: string;
  key: string;
  name: string;
  title: string;
  image: {
    full: string;
    sprite: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
}

export interface ChampionDetail extends Champion {
  info: any;
  lore: string;
  tags: string[];
  stats: {
    [key: string]: number;
  };
  spells: Spell[];
  passive: Passive;
}

export interface Spell {
  id: string;
  name: string;
  description: string;
  image: {
    full: string;
  };
}

export interface Passive {
  name: string;
  description: string;
  image: {
    full: string;
  };
}
