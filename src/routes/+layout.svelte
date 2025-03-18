<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="my-20 px-2 md:px-14 py-4 md:py-20 max-w-5xl 2xl:max-w-7xl mx-auto rounded-lg">
	{@render children()}
</div>
