export interface Locations {
  id: number;
  name: string;
  city: string;
  score: number;
  createdAt: Date;
}

export const locations = [
  {
    id: 1,
    name: 'Beest boulder Den Haag',
    city: 'Den Haag',
    score: 7,
    createdAt: Math.floor(new Date().getTime() / 1000.0),
  },
];
