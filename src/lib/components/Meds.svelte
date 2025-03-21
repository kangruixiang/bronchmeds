<script lang="ts">
	import {
		oneDayMedsList,
		threeDayMedsList,
		fiveDayMedsList,
		sevenDayMedsList,
		twelveHoursMedsList,
		zeroDayMedsList,
		type MedList,
		twoDayMedsList,
		fourDayMedsList,
		longInsulinList,
		mixedInsulinList,
		fourteenDayMedsList
	} from '$lib/medications';
	import { PillBottle } from '@lucide/svelte';
</script>

{#snippet renderMeds(medlist: MedList[], days: number)}
	{#if medlist?.length > 0}
		<div class="bg-base-300 rounded-lg px-8 pb-4 pt-4 prose max-w-none">
			{#if medlist == longInsulinList}
				<h3>Long Acting Insulin</h3>
				<h4>Normal dose night prior unless known issues with hypoglycemia and NPO.</h4>
			{:else if medlist == mixedInsulinList}
				<h3>Mixed Insulin</h3>
				<h4>Hold vs 1/2 dose on morning of procedure.</h4>
			{:else if days > 1}
				<h3>
					Hold for {days} Days
				</h3>
			{:else if days == 1}
				<h3>Hold One day Before and Day of Procedure</h3>
			{:else if days == 0}
				<h3>Hold Morning of Procedure</h3>
			{:else if days == 0.5}
				<h3>Hold for 12 Hours</h3>
			{/if}
			<ul class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-x-3 mr-3">
				{#each medlist as med}
					<li class="">
						{med.generic}
						{#if med.brand}
							({med.brand}){/if}
					</li>
				{/each}
			</ul>
		</div>
	{/if}
{/snippet}

<div class="collapse border border-base-300 bg-base-200">
	<input type="checkbox" />
	<div class="collapse-title font-semibold flex gap-x-2 items-center">
		<PillBottle size={18} />List All Medications
	</div>
	<div class="collapse-content">
		<div class="pt-6"></div>
		{@render renderMeds(fourteenDayMedsList, 14)}
		<div class="divider"></div>
		{@render renderMeds(sevenDayMedsList, 7)}
		<div class="divider"></div>
		{@render renderMeds(fiveDayMedsList, 5)}
		<div class="divider"></div>
		{@render renderMeds(fourDayMedsList, 4)}
		<div class="divider"></div>
		{@render renderMeds(threeDayMedsList, 3)}
		<div class="divider"></div>
		{@render renderMeds(twoDayMedsList, 2)}
		<div class="divider"></div>
		{@render renderMeds(oneDayMedsList, 1)}
		<div class="divider"></div>
		{@render renderMeds(twelveHoursMedsList, 0.5)}
		<div class="divider"></div>
		{@render renderMeds(zeroDayMedsList, 0)}
		<div class="divider"></div>
		{@render renderMeds(longInsulinList, 0)}
		<div class="divider"></div>
		{@render renderMeds(mixedInsulinList, 0)}
		<div class="divider"></div>
		<div class="bg-base-300 rounded-lg px-8 pb-4 pt-4 prose max-w-none">
			<h3>Biologics</h3>
			<img src="biologics.png" alt="" />
		</div>
	</div>
</div>
