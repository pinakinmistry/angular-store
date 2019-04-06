import { Nutrient } from './nutrient';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  calories: number;
  nutrients: Array<Nutrient>;
}