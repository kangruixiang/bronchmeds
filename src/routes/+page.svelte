<script lang="ts">
	import Instructions from '$lib/components/Instructions.svelte';
	import Meds from '$lib/components/Meds.svelte';
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
		mixedInsulinList,
		longInsulinList,
		fourteenDayMedsList,
		biologicList
	} from '$lib/medications';
	import { Clipboard, Github, Mail } from '@lucide/svelte';

	let inputText = $state('');
	let resultText = $state();
	let includeBrand = $state(true);

	let fourteenDayMedsFound = $state<MedList[]>();
	let sevenDayMedsFound = $state<MedList[]>();
	let fiveDayMedsFound = $state<MedList[]>();
	let threeDayMedsFound = $state<MedList[]>();
	let fourDayMedsFound = $state<MedList[]>();
	let twoDayMedsFound = $state<MedList[]>();
	let oneDayMedsFound = $state<MedList[]>();
	let zeroDayMedsFound = $state<MedList[]>();
	let twelveHourMedsFound = $state<MedList[]>();
	let longInsulinMedsFound = $state<MedList[]>();
	let mixedInsulinMedsFound = $state<MedList[]>();
	let insulinPumpMedsFound = $state<MedList[]>();
	let biologicMedsFound = $state<MedList[]>();
	let medsFound = $state(true);

	function filterMedsbyDays(lowerCaseText: string, medList: MedList[]) {
		return medList
			.map(({ generic, brand }) => {
				// convert generic string to a list
				const genericAsList = generic.split(',').map((b) => b.trim().toLowerCase());

				// convert brand string to a list
				const brandAsList = brand.split(',').map((b) => b.trim().toLowerCase());

				// find generic name
				let matchedGeneric = genericAsList.find((b) => lowerCaseText.includes(b));

				// find brand name
				let matchedBrand = brandAsList.find((b) => lowerCaseText.includes(b)) || '';

				if (matchedGeneric || matchedBrand) {
					if (matchedBrand == 'revatio' || matchedBrand == 'adcirca') {
						return undefined;
					}

					if (matchedGeneric == 'sildenafil') {
						matchedGeneric = "sildenafil (for ED or Raynaud's; do not hold for PHTN)";
					}

					if (matchedGeneric == 'tadalafil') {
						matchedGeneric = "tadalafil (for ED or Raynaud's; do not hold for PHTN)";
					}

					return {
						matchedGeneric,
						matchedBrand
					};
				}
			})
			.filter(Boolean);
	}

	function parseMedications() {
		let lowerCaseText = inputText.toLowerCase();

		fourteenDayMedsFound = filterMedsbyDays(lowerCaseText, fourteenDayMedsList);
		sevenDayMedsFound = filterMedsbyDays(lowerCaseText, sevenDayMedsList);
		fiveDayMedsFound = filterMedsbyDays(lowerCaseText, fiveDayMedsList);
		fourDayMedsFound = filterMedsbyDays(lowerCaseText, fourDayMedsList);
		threeDayMedsFound = filterMedsbyDays(lowerCaseText, threeDayMedsList);
		twoDayMedsFound = filterMedsbyDays(lowerCaseText, twoDayMedsList);
		oneDayMedsFound = filterMedsbyDays(lowerCaseText, oneDayMedsList);
		zeroDayMedsFound = filterMedsbyDays(lowerCaseText, zeroDayMedsList);
		twelveHourMedsFound = filterMedsbyDays(lowerCaseText, twelveHoursMedsList);
		longInsulinMedsFound = filterMedsbyDays(lowerCaseText, longInsulinList);
		mixedInsulinMedsFound = filterMedsbyDays(lowerCaseText, mixedInsulinList);
		biologicMedsFound = filterMedsbyDays(lowerCaseText, biologicList);

		medsFound = [
			fourteenDayMedsFound,
			sevenDayMedsFound,
			fiveDayMedsFound,
			fourDayMedsFound,
			threeDayMedsFound,
			twoDayMedsFound,
			oneDayMedsFound,
			zeroDayMedsFound,
			twelveHourMedsFound,
			longInsulinMedsFound,
			mixedInsulinMedsFound,
			biologicMedsFound
		].some((list) => list.length > 0);
	}

	async function copy() {
		await navigator.clipboard.writeText(resultText.innerText);
	}
</script>

<h1 class="pb-3 text-primary font-semibold">Medications to Hold for Procedures</h1>
<p class="prose max-w-none pb-4">
	Use this page to quickly generate list of medications that need to be held for outpatient
	procedures.
</p>

<div class="flex flex-col gap-y-4">
	<textarea
		bind:value={inputText}
		oninput={parseMedications}
		class="textarea w-full textarea-primary"
		placeholder="Paste or Type Medication Names"
	></textarea>

	{#snippet renderMeds(medlist: MedList[], days: number)}
		<ul class="list-none ml-2">
			{#if medlist?.length > 0}
				<li>
					{#if medlist == longInsulinMedsFound}
						&nbsp;&nbsp;– Normal long acting insulin dose vs half dose night prior:
					{:else if medlist == mixedInsulinMedsFound}
						&nbsp;&nbsp;– Hold pre-mixed insulin vs half dose on morning of procedure:
					{:else if medlist == insulinPumpMedsFound}
						&nbsp;&nbsp;– Continue basal rate and hold bolus dosing:
					{:else if medlist == biologicMedsFound}
						&nbsp;&nbsp;– Refer to biologics section below for optimal timing:
					{:else if days > 1}
						&nbsp;&nbsp;– Hold for {days} day:
					{:else if days == 1}
						&nbsp;&nbsp;– Hold one day before and day of procedure:
					{:else if days == 0}
						&nbsp;&nbsp;– Hold morning of procedure:
					{:else if days == 0.5}
						&nbsp;&nbsp;– Hold for 12 hours:
					{/if}
					{#each medlist as med, i}
						{#if med.matchedGeneric}
							{med.matchedGeneric}{#if med.matchedBrand && includeBrand}
								&nbsp;<span class="capitalize">({med.matchedBrand})</span>
							{/if}
						{:else}
							<span class="capitalize">{med.matchedBrand}</span>
						{/if}{i < medlist.length - 1 ? ', ' : ''}
					{/each}
				</li>
			{/if}
		</ul>
	{/snippet}

	{#if inputText}
		<div bind:this={resultText} class="card p-golden-lg card-dash bg-base-200">
			{#if medsFound}
				– Medications to hold:
				{@render renderMeds(fourteenDayMedsFound, 14)}
				{@render renderMeds(sevenDayMedsFound, 7)}
				{@render renderMeds(fiveDayMedsFound, 5)}
				{@render renderMeds(fourDayMedsFound, 4)}
				{@render renderMeds(threeDayMedsFound, 3)}
				{@render renderMeds(twoDayMedsFound, 3)}
				{@render renderMeds(oneDayMedsFound, 1)}
				{@render renderMeds(zeroDayMedsFound, 0)}
				{@render renderMeds(twelveHourMedsFound, 0.5)}
				{@render renderMeds(longInsulinMedsFound, 0.5)}
				{@render renderMeds(mixedInsulinMedsFound, 0.5)}
				{@render renderMeds(biologicMedsFound, 0.5)}
			{:else}
				– No medication to hold
			{/if}
		</div>
	{/if}

	{#if inputText}
		<label for="" class="fieldset-label">
			<input
				type="checkbox"
				onchange={parseMedications}
				bind:checked={includeBrand}
				class="toggle toggle-primary"
			/>Include brand name
		</label>

		<div class="flex w-full flex-col md:flex-row gap-y-2 gap-x-2">
			<button onclick={copy} class="btn flex items-center gap-x-2 btn-primary grow"
				><Clipboard size={18} />Copy</button
			>
			<button onclick={() => (inputText = '')} class="btn grow">Clear</button>
		</div>
	{/if}
	<Instructions />
	<Meds />
</div>

<div class="mt-4 justify-end text-sm text-right flex gap-x-2">
	Made by Kang.
	<a href="mailto:kxiang.wakehealth.edu"><Mail /></a>
	<a href="https://github.com/kangruixiang/bronchmeds"><Github /></a>
</div>
