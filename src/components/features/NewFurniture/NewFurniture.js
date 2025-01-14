import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';

const NewFurniture = ({ categories, products }) => {
  const [activeCategory, setActiveCategory] = useState('bed');
  const [activePage, setActivePage] = useState(0);
  const viewportMode = useSelector(state => state.viewport || 'desktop');

  const handlePageChange = newPage => {
    setActivePage(newPage);
  };

  const handleCategoryChange = newCategory => {
    setActiveCategory(newCategory);
  };

  let productsPerRow = '';
  let numbersOfRows = 8;
  if (viewportMode === 'desktop') {
    productsPerRow = 8;
    numbersOfRows = 8;
  } else if (viewportMode === 'tablet') {
    productsPerRow = 3;
    numbersOfRows = 3;
  } else if (viewportMode === 'mediumMobile') {
    productsPerRow = 2;
    numbersOfRows = 2;
  } else {
    productsPerRow = 1;
    numbersOfRows = 4;
  }
  const categoryProducts = products.filter(item => item.category === activeCategory);
  const pagesCount = Math.ceil(categoryProducts.length / 8);

  const dots = [];
  for (let i = 0; i < pagesCount; i++) {
    dots.push(
      <li>
        <a
          onClick={() => handlePageChange(i)}
          className={i === activePage ? styles.active : ''}
        >
          page {i}
        </a>
      </li>
    );
  }

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row flex-sm-row flex-column d-flex align-items-sm-end align-items-center no-gutters align-items-end'>
            <div className={'col-auto ' + styles.heading}>
              <h3>New furniture</h3>
            </div>
            <div className={'col ' + styles.menu}>
              <ul>
                {categories.map(item => (
                  <li key={item.id}>
                    <a
                      className={item.id === activeCategory && styles.active}
                      onClick={() => handleCategoryChange(item.id)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={'col-auto ' + styles.dots}>
              <ul>{dots}</ul>
            </div>
          </div>
        </div>
        <div className='row'>
          {categoryProducts
            .slice(activePage * productsPerRow, (activePage + 1) * numbersOfRows)
            .map(item => (
              <div key={item.id} className='col-12 col-sm-6 col-md-4 col-lg-3'>
                <ProductBox {...item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
