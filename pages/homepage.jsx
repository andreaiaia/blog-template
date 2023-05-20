import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import { getLatestPostsData } from '/lib/posts';

import LatestPosts from '/components/LatestPosts';
import Hero from '/components/Hero';
import Button from '/components/Button';

import css from '/styles/Homepage.module.scss';

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
        <title>Home | {BLOG.NAME}</title>
        <meta property="og:title" content="homepage" key="title" />
      </Head>
      <main>
        <Hero cname={css.hero} background="transparent">
          <div className={css.greetings}>
            <h1>
              Hello, my name is {BLOG.OWNER.FIRST_NAME} {BLOG.OWNER.LAST_NAME}
            </h1>
            <p>
              Your <span className={css.accent}>catchphrase</span>.
            </p>
            <div className={css.CTAs}>
              <Button className={css.homeCta}>
                <Link href="/posts">Read my Blog</Link>
              </Button>
            </div>
          </div>
          <div className={css.pic}>
            <Image
              alt="example"
              src="/images/matera.webp"
              width={450}
              height={250}
            />
          </div>
        </Hero>
        <LatestPosts posts={postsData} />
      </main>
    </>
  );
};

export default Home;
