import { Product } from './product';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Apple',
    description: 'Eat one every day to keep the doctor away!',
    price: 12,
    image: '',
    calories: 90,
    nutrients: [
      {
        nutrient: 'Carotenoid',
        dailyValue: 0,
      },
      {
        nutrient: 'Fiber',
        dailyValue: .50,
      },
      {
        nutrient: 'Folates',
        dailyValue: .0,
      },
      {
        nutrient: 'Potassium',
        dailyValue: .25,
      },
      {
        nutrient: 'Vitamin C',
        dailyValue: .50,
      },
    ],
  },
  {
    id: 2,
    name: 'Grape',
    description: 'Wine is great, but grapes are even better',
    price: 8,
    image: '',
    calories: 120,
    nutrients: [
      {
        nutrient: 'Carotenoid',
        dailyValue: 0,
      },
      {
        nutrient: 'Fiber',
        dailyValue: 25,
      },
      {
        nutrient: 'Folates',
        dailyValue: 50,
      },
      {
        nutrient: 'Potassium',
        dailyValue: 0,
      },
      {
        nutrient: 'Vitamin C',
        dailyValue: 50,
      },
    ],
  },
];
