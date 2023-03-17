import React from 'react';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
import psale1 from '@/assets/nike-air-red.png';
import psale2 from '@/assets/nike-adapt-bb.png';
import psale3 from '@/assets/nike-adapt-bb-smart.png';

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
];

export const products_url = 'https://nestecommerce.onrender.com/api/product';

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;

const popularsales = {
  title: 'Popular Sales',
  items: [
    {
      id: '0p0x1',
      title: 'Nike Addapt BB 2.0',
      text: 'MEN Running Shoes',
      rating: '4.9',
      btn: 'Buy Now',
      img: psale2,
      price: '200',
      color: 'from-blue-600 to-blue-500',
      shadow: 'shadow-lg shadow-blue-500',
    },
    {
      id: '0p0x2',
      title: 'Nike Martine Rose',
      text: 'MEN Running Shoes',
      rating: '4.5',
      btn: 'Buy Now',
      img: psale1,
      price: '200',
      color: 'from-red-500 to-rose-500',
      shadow: 'shadow-lg shadow-rose-500',
    },
    {
      id: '0p0x3',
      title: 'Nike Smart Shoe 2.0',
      text: 'MEN Running Shoes',
      rating: '5+',
      btn: 'Buy Now',
      img: psale3,
      price: '200',
      color: 'from-violet-500 to-indigo-500',
      shadow: 'shadow-lg shadow-violet-500',
    },
  ],
};

export { popularsales };