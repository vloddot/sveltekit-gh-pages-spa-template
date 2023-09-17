<script lang="ts">
  import { page } from "$app/stores";
  import type { RouteParams } from "./$types";

  $: pageParams = $page.params as RouteParams;
</script>

{#if pageParams.id == undefined}
  <p>Hello... whoops, no ID</p>
{:else}
  <p>Hello, {pageParams.id}!</p>
{/if}

<p>
  Since this route is "dynamic" and isn't pre-rendered, a normal SvelteKit app
  on GitHub Pages should return a 404. But what happens is that the
  <code>src/404.html</code> file gets picked up by GitHub Pages which is also
  coincidentally what the app's HTML template for SvelteKit due to changing
  <code>config.kit.files.appTemplate</code> in <code>svelte.config.js</code>
  so GitHub Pages just simply relaunches the SvelteKit router.
</p>

<p>Try refreshing the page or going to the URL directly.</p>
