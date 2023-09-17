# sveltekit-gh-pages-spa-template

This template is built for SvelteKit SPAs on GitHub Pages, the main issue with GitHub Pages and SvelteKit SPAs
is that GitHub Pages cannot resolve dynamic routes, meaning if you have a route like `/blog/[sjug]`, if you go
to it through SvelteKit's router (by lieu of an `<a>` tag or `await goto('/blog/' + slug)`) it works fine, but if you try
refreshing the page or going to the route manually by editing the URL, GitHub Pages will return a 404.

For the TL;DR on how this works, basically, instead of using SvelteKit's default `src/app.html` file to start the router,
a `src/404.html` file is used and we set `config.kit.files.appTemplate` (which by default is `src/app.html`) to `src/404.html`.
This does two things:

1. This configures GitHub Pages in the build to create a 404 template which is coincidentally the app's router
(See [GitHub Documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site) for more details).
2. This configures the SvelteKit router to start in the `src/404.html` file instead of the `src/app.html` file.

## Demo App

There is also a demo app you can find at <https://vloddot.github.io/sveltekit-gh-pages-spa-template> which showcases this.

## Manual Steps

### Configuring the SPA

To switch a SvelteKit app to an SPA, the best way is to use `@sveltejs/adapter-static` instead of `@sveltejs/adapter-auto`.

```bash
pnpm add -D @sveltejs/adapter-static
pnpm remove @sveltejs/adapter-auto # @sveltejs/adapter-auto is pre-installed in most SvelteKit setups.
```

...Then configure it to use `@sveltejs/adapter-static` instead of `@sveltejs/adapter-auto` and add some configuration for GitHub Pages
and the `src/404.html` file:

```javascript
import adapter from '@sveltejs/adapter-static'; // edit this line
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

  kit: {
    files: {
      appTemplate: 'src/404.html' // where to start the router
    },

    paths: {
      // If you're using custom domains, this can be left out. Since GitHub Pages usually has
      // a format of `<username>.github.io/<repositoryname>`, `base` needs to be set to accomodate
      // that. Replace `sveltekit-gh-pages-spa-template` to your repository's name.
      base: process.env.NODE_ENV == 'production' ? '/sveltekit-gh-pages-spa-template' : ''
    },

    adapter: adapter({ fallback: '404.html' }) // rely on `404.html` when rending dynamic routes
  }
};

export default config;
```

You also need to create a `src/routes/+layout.ts/js` file to mark routes as prerendered and non-SSR.

```typescript
export const prerender = true;
export const ssr = false;
```

### Renaming app.html

Since we edited the `404.html` in the configuration, we also need to rename the `src/app.html` file to `src/404.html`.

### Renaming routes in your project

Now, we need to replace all t,e routes that are through `<a>` tags, `goto` or `redirect` with `{base}/{route}`.
So if you are trying to route to `/blog/[slug]`, you need to add `{base}/blog/{slug}` (and `import { base } from '$app/paths'`)
instead of `/blog/{slug}` since without the `{base}`, in production code (GitHub Pages), it will try to route to `/blog/[slug]` which
doesn't exist, what exists however is `/<repositoryname>/blog/[slug]`.
