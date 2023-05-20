<p align="center">  
  <a href="#" style="margin: 10px">
    <img width="auto" height="100px" src="logo.png" />
  </a>
</p>

<p align="center">
  ![License GNU GPL](https://img.shields.io/github/license/andreaiaia/blog-template)
  ![Repo size badge](https://img.shields.io/github/repo-size/andreaiaia/blog-template)
  ![Open Issues](https://img.shields.io/github/issues/andreaiaia/blog-template)
  ![Version](https://img.shields.io/github/package-json/v/andreaiaia/blog-template)
  ![Last Commit](https://img.shields.io/github/last-commit/andreaiaia/blog-template)
</p>

# blog-template

The template I based my blog on.

# TODO

- update the structure to be a homepage with all the posts and an about page (remove the homepage or make it optional)
- Create a SEO component to add on top of all the pages

# Deploy your own

With this template you can start blogging in minutes, just click the button below and your blog will be available online at `https://your-blog-name.vercel.app`.

After the deploy make sure you read the [Initial setup](#initial-setup) section to customize the metadata of your blog.

[![Deploy on Vercel](https://vercel.com/button)](https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2Fandreaiaia%2Fblog-template&showOptionalTeamCreation=false)

## Initial setup

Once you've deployed your blog on vercel, you need to do some basic setup.

In the file `blog.config.js` you need to change values of the OWNER and BLOG variables, here you can also link the socials you want to display in the footer.

Now you can start writing your posts, you can find them in the `articles` folder, delete the sample post and start writing your own.

To publish a post just **push** the changes to the main branch of your repository, Vercel will automatically deploy the new version of your blog with your new post.

### Customizing the logo

The only time you will need to get your hand dirty with code is when you want to change the logo of your blog.

To customize the logo you have to add your custom `svg` image inside the Logo component, you can find it in the `components/Logo` folder.

Inside that folder you will also find another README.md file with more detailed instructions on how to customize the logo.

### Customize the color palette

To customize the color palette of your blog you need to edit the `_globals.module.scss` file in the `styles` folder.

At the top of the file you will find a list of variables that you can change to customize the colors of your blog.

### Customize the font

To customize the font of your blog you need to make two steps:

- Add the fonts you want to use in the `public/fonts` folder
- Edit the `main.scss` file in the `styles` folder.

Alternatively you can use a font from Google Fonts, in that case you just need to edit the `main.scss` file in the `styles` folder.

In the `main.scss` you just need to change the `font-family` and the `src` properties of the `@font-face` rules.

Then to apply the fonts to all the elements of the blog you need to change the `font-family` property of the `body` rule.

If you want to use different fonts for the heading tags you can change the `font-family` property of the `h1`, `h2`, `h3`, `h4`, `h5`, `h6` rules.

For more customization the scss is there waiting for you.
