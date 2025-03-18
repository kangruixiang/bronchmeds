<script>
	import { SquareChartGantt } from '@lucide/svelte';
</script>

<div class="collapse border border-base-300 bg-base-100">
	<input type="checkbox" />
	<div class="collapse-title font-semibold flex gap-x-2 items-center">
		<SquareChartGantt size={18} />Instructions
	</div>
	<div class="collapse-content prose max-w-none">
		<div class="pt-6"></div>
		Copy Medications from Epic. On inpatient view you can do this by going to Home Meds:
		<video src="inpatient.mp4" loop controls muted playsinline></video>

		On outpatient view you can do this under Orders:
		<video src="outpatient.mp4" loop controls muted playsinline></video>

		Paste the medication in the text box:
		<video src="online.mp4" loop controls muted playsinline></video>
	</div>
</div>
