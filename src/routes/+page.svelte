<script lang="ts">
  import { base } from "$app/paths";

  let id: string = '';
  $: href = `${base}/dynamic/${id}`;
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<input type="text" bind:value={id} placeholder="Choose an ID to go to." />

<p>Visit <a {href}>this dynamic route ({href})</a></p>
