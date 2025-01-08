import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center ju'>
        <div className='col-6 col-md-12 col-xl-6'>
          <ProductSearch />
        </div>
        <div className={'col-6 col-md-12 col-xl-6 ' + styles.menu}>
          <nav className='navbar navbar-expand-md navbar-light'>
            <button
              className={`navbar-toggler ${styles.myBtn}`}
              type='button'
              data-toggle='collapse'
              data-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link className={`nav-link ${styles.active}`} to='/'>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/shop/furniture'>
                    Furniture
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/shop/chair'>
                    Chair
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/shop/table'>
                    Table
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/shop/sofa'>
                    Sofa
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/shop/bedroom'>
                    Bedroom
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/blog'>
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
