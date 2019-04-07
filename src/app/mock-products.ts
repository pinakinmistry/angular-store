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
        dailyValue: .25,
      },
      {
        nutrient: 'Folates',
        dailyValue: .50,
      },
      {
        nutrient: 'Potassium',
        dailyValue: .75,
      },
      {
        nutrient: 'Vitamin C',
        dailyValue: .75,
      },
    ],
  },
  {
    id: 3,
    name: 'Grapefruit',
    description: 'Pink or red, always healthy and delicious',
    price: 12,
    image: '',
    calories: 200,
    nutrients: [
      {
        nutrient: 'Carotenoid',
        dailyValue: .25,
      },
      {
        nutrient: 'Fiber',
        dailyValue: .25,
      },
      {
        nutrient: 'Folates',
        dailyValue: .75,
      },
      {
        nutrient: 'Potassium',
        dailyValue: .75,
      },
      {
        nutrient: 'Vitamin C',
        dailyValue: 1.0,
      },
    ],
  },
  {
    id: 4,
    name: 'Papaya',
    description: 'Super popular for breakfast',
    price: 10,
    image: '',
    calories: 250,
    nutrients: [
      {
        nutrient: 'Carotenoid',
        dailyValue: .50,
      },
      {
        nutrient: 'Fiber',
        dailyValue: .25,
      },
      {
        nutrient: 'Folates',
        dailyValue: .25,
      },
      {
        nutrient: 'Potassium',
        dailyValue: .50,
      },
      {
        nutrient: 'Vitamin C',
        dailyValue: .0,
      },
    ],
  },
  {
    id: 5,
    name: 'Pineapple',
    description: 'Enjoy it (but don\'t forget to peel first)',
    price: 14,
    image: '',
    calories: 220,
    nutrients: [
      {
        nutrient: 'Carotenoid',
        dailyValue: .0,
      },
      {
        nutrient: 'Fiber',
        dailyValue: .25,
      },
      {
        nutrient: 'Folates',
        dailyValue: .25,
      },
      {
        nutrient: 'Potassium',
        dailyValue: .25,
      },
      {
        nutrient: 'Vitamin C',
        dailyValue: .75,
      },
    ],
  },
];
