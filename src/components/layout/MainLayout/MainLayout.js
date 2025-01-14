import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setViewportMode } from '../../../redux/viewportRedux';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const updateViewportMode = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        dispatch(setViewportMode('desktop'));
      } else if (width >= 768 && width < 1024) {
        dispatch(setViewportMode('tablet'));
      } else if (width < 768 && width > 576) {
        dispatch(setViewportMode('mediumMobile'));
      } else dispatch(setViewportMode('mobile'));
    };

    updateViewportMode();
    window.addEventListener('resize', updateViewportMode);

    return () => {
      window.removeEventListener('resize', updateViewportMode);
    };
  }, [dispatch]);
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
