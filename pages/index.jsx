import React from 'react';
import Head from 'next/head';

import { Post } from '/components/Thumbnails';
import Hero from '/components/Hero';

import { getSortedPostsData } from '/lib/posts';

import css from '../styles/index.module.scss';

const BLOG = require('../blog.config');

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();

  return {
    props: { allPostsData },
  };
}

const Blog = ({ allPostsData }) => {
  return (
    <>
      <Head>
        <title>{BLOG.NAME}</title>
        <meta property="og:title" content="homepage" key="title" />
      </Head>
      <main>
        <Hero cname={css.hero}>
          <div>
            <h1 className={css.title}>{BLOG.NAME}</h1>
            <p>Welcome to my brand-new blog!</p>
          </div>
        </Hero>
        <section className={css.container}>
          <ul className={css.posts}>
            {allPostsData.map(
              (
                { id, title, description, formattedDate, stats, pic },
                index
              ) => (
                <li key={index}>
                  <Post
                    slug={id}
                    title={title}
                    description={description}
                    date={formattedDate}
                    stats={stats}
                    postPic={pic}
                  />
                </li>
              )
            )}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Blog;
