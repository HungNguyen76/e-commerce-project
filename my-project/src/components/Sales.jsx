import React from 'react';
import Item from './Item.jsx';
import ItemDetail from './ItemDetail.jsx';
import Title from './Title.jsx';
import { Link } from 'react-router-dom';

const Sales = ({ ifExists, endpoint: { title, items} }) => {
  return (
    <>
      <div className='nike-container'>
        <Title title={title} />
        <div
          className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${
            ifExists
              ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1'
              : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'
          }`}
        >
          {items?.map((item, i) => {
            const { id } = item;
            return (
              <div className='nike-container'>
                <Link to={`/products/${id}`}>
                  <Item {...item} key={i} ifExists={ifExists} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Sales;