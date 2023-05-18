// Global configuration for the blog

const OWNER = {
  // Change your name
  FIRST_NAME: 'INSERT_FIRST_NAME',
  LAST_NAME: 'INSERT_LAST_NAME',
};

export const BLOG = {
  OWNER,
  // Insert a name for your blog, the default uses your first name and last name
  NAME: `${OWNER.FIRST_NAME} ${OWNER.LAST_NAME}`,
  DESCRIPTION: 'My simple blog',
  // Insert the links to the socials you want
  // Leave undefined the socials you don't want to display
  // ! IMPORTANT: insert the full link, for example https://twitter.com/yourname
  SOCIALS: {
    INSTAGRAM: undefined,
    TWITTER: undefined,
    FACEBOOK: undefined,
    GITHUB: undefined,
    DRIBBBLE: undefined,
    LINKEDIN: undefined,
  },
  // Example https://yourblog.com
  URL: 'INSERT_BLOG_URL',
};
