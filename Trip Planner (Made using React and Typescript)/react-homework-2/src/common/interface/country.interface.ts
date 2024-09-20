export interface Country {
  name: {
    common: string;
  };
  capital: string[];
  region: string;
  area: number;
  flags: {
    svg: string;
  };
  population: number;
  landlocked: boolean;
}
