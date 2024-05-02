<script lang="ts">
	import '../app.pcss';
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">(icon)</svelte:fragment>

	<h1 class="h1"><span class="text-token">Welcome <br /> to <br /> 5MRB!</span></h1>

	<svelte:fragment slot="trail">(actions)</svelte:fragment>
</AppBar>
<LightSwitch />
<slot></slot>

<style lang="postcss">
	:global(html) {
		background-color: --color-surface-50;
	}
	h1 {
		text-align: center;
	}
</style>
