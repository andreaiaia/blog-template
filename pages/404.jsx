import React from 'react';
import Hero from '/components/Hero';
import LatestPosts from '/components/LatestPosts';

import { getLatestPostsData } from '/lib/posts';

import css from '/styles/PageNotFound.module.scss';

export async function getStaticProps() {
  const postsData = await getLatestPostsData();

  return {
    props: { postsData },
    revalidate: 10, // In seconds
  };
}

const pageNotFound = ({ postsData }) => {
  return (
    <main>
      <Hero cname={css.hero}>
        <div>
          <h1 className={css.title}>404</h1>
          <p>Page not found!</p>
        </div>
      </Hero>
      <LatestPosts
        posts={postsData}
        sectionTitle="May I suggest you some readings?"
      />
    </main>
  );
};

export default pageNotFound;
