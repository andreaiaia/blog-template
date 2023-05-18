const { promises: fs } = require('fs');
const path = require('path');
const RSS = require('rss');
const matter = require('gray-matter');
const BLOG = require('../blog.config');

async function generate() {
  const feed = new RSS({
    title: 'Template blog',
    site_url: `${BLOG.URL}`,
    feed_url: `${BLOG.URL}/feed.xml`,
  });

  const posts = await fs.readdir(path.join(__dirname, '..', 'articles'));

  const regex = new RegExp(/\.mdx$/, 'i');

  await Promise.all(
    posts
      .filter((fileName) => regex.test(fileName))
      .map(async (name) => {
        const content = await fs.readFile(
          path.join(__dirname, '..', 'articles', name)
        );
        const frontmatter = matter(content);

        feed.item({
          title: frontmatter.data.title,
          url: '/posts/' + name.replace(/\.mdx?/, ''),
          date: frontmatter.data.date,
          description: frontmatter.data.description,
          tags: frontmatter.data.tag.split(','),
          author: `${BLOG.OWNER.FIRST_NAME} ${BLOG.OWNER.LAST_NAME}`,
        });
      })
  );

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
