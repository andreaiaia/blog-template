import React from 'react';

import { PostCard } from '/components/Thumbnails';

import css from './LatestPosts.module.scss';

const LatestPosts = ({ posts, sectionTitle }) => {
  return (
    <section className={css.recentPosts}>
      <div className={css.title}>
        <h2>{sectionTitle ? sectionTitle : 'Latest posts'}</h2>
      </div>
      <div className={css.postsContainer}>
        <ul className={css.posts}>
          {posts.map(
            ({ id, title, description, formattedDate, stats, pic }, index) => (
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
  );
};

export default LatestPosts;
