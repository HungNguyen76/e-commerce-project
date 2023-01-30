import React from 'react';
import { GridView } from '../components';

const ProductList = ({ ifExists, products }) => {
  return (
    <>
      <GridView key={products.id} products={products} ifExists={ifExists}>
        product list
      </GridView>
    </>
  );
};
export default ProductList;
