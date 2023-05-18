import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { getLatestPostsData } from '../lib/posts';

import { PostCard } from '../components/Thumbnails';
import Hero from '../components/Hero';
import Button from '../components/Button';

import css from '../styles/Home.module.scss';

import { BLOG } from '../blog.config';

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
        </Hero>
        <section className={css.recentPosts}>
          <div className={css.title}>
            <h2>Latest posts</h2>
          </div>
          <div className={css.postsContainer}>
            <ul className={css.posts}>
              {postsData.map(
                (
                  { id, title, description, formattedDate, stats, pic },
                  index
                ) => (
                  <li key={index}>
                    <PostCard
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
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
