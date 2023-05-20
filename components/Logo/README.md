# Logo component

The logo component is a wrapper around an svg image that can be used to display the logo of your blog.

I decided to make a custom component to avoid some error that I had when I tried to simply import an svg in my project and also to make it easy to customize the colors with css.

## Usage

To change the current logo with your own you need to paste the svg of your logo inside the `index.jsx` file in this folder.

Be sure to copy and paste from your logo only the **content** of the `svg` tag, not the svg tag itself, like in this example:

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  id="canvas"
  viewBox="290.978 445.586 1394.734 304.536"
>
  <path d="the path of the svg image" stle="some style" />
</svg>
```

In the code above you should copy only the `path` tag and paste it inside the `svg` tag of the `index.jsx` file.

Also, remove any `style` tag from the path tags you will copy, the style of the logo should be defined in the `Logo.module.scss` file.
