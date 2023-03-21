export interface Argument {
  id: number;
  title: string;
  description: string;
  source: string[];
  category: { [key: number]: string };
  author: { key: number, value: string };
  date: string;
}
