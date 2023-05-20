import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import { getLatestPostsData } from '/lib/posts';

import LatestPosts from '/components/LatestPosts';
import Hero from '/components/Hero';

import css from '/styles/About.module.scss';

const BLOG = require('../blog.config');

export async function getStaticProps() {
  const postsData = await getLatestPostsData();

  return {
    props: { postsData },
    revalidate: 10, // In seconds
  };
}

const Home = ({ postsData }) => {
  return (
    <>
      <Head>
        <title>About | {`${BLOG.NAME}`}</title>
        <meta property="og:title" content="about" key="title" />
      </Head>
      <main>
        <Hero cname={css.hero}>
          <h1>About me</h1>
          <p>
            {BLOG.OWNER.FIRST_NAME} {BLOG.OWNER.LAST_NAME}.
          </p>
        </Hero>
        <section className={css.bio}>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              temporibus, consequatur obcaecati nesciunt beatae nam repellat
              soluta voluptatum adipisci aliquam pariatur ipsa maxime alias
              cupiditate minima sunt similique, hic officia!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              quibusdam fugit ipsa officiis quod explicabo non aut ex blanditiis
              sit dolorum repellat in totam, amet molestiae? Laborum corrupti id
              explicabo.
            </p>
          </div>

          <Image
            alt="example"
            src="/images/matera.webp"
            width={450}
            height={250}
          />
        </section>
        <LatestPosts posts={postsData} />
      </main>
    </>
  );
};

export default Home;
