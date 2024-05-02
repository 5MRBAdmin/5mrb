<script lang="ts">
	import { focusTrap } from '@skeletonlabs/skeleton';
	let isFocused: boolean = true;
</script>

<title>5MRB • Home</title>

<a href="/about">About</a>
<a href="/recruitment">Recruitment</a>
<!-- <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

<form use:focusTrap={isFocused}>
	<input type="text" placeholder="Name" />
	<button class="btn-filled-primary btn">Submit</button>
</form>

<style>
	a {
		padding: 1em;
	}
</style>
