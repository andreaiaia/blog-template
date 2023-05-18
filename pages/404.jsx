import React from 'react';
import Hero from '../components/Hero';
import css from '../styles/PageNotFound.module.scss';

const pageNotFound = () => {
  return (
    <main>
      <Hero cname={css.pageNotFound}>
        <div className={css.title}>
          <p>404</p>
          <h1>Page not found</h1>
        </div>
      </Hero>
    </main>
  );
};

export default pageNotFound;
