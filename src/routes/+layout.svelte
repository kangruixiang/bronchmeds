<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="my-20 p-golden-md md:p-golden-xl max-w-5xl 2xl:max-w-7xl mx-auto rounded-lg">
	{@render children()}
</div>
