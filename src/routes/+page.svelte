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
	import { Check, Clipboard, Github, Mail } from '@lucide/svelte';

	let inputText = $state('');
	let resultText = $state();
	let oneLineText = $state();
	let includeBrand = $state(true);
	let useCommon = $state(true);
	let notification = $state('');
	let copiedFull = $state(false);
	let copiedOneLine = $state(false);

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
			.map(({ generic, brand, common }) => {
				// convert generic string to a list
				const genericAsList = generic.split(',').map((b) => b.trim());

				// convert brand string to a list
				const brandAsList = brand.split(',').map((b) => b.trim());

				// convert common string to a list
				let commonAsList: string[] = [];
				if (common) {
					commonAsList = common.split(',').map((b) => b.trim());
				}

				// find generic name
				let matchedGeneric = genericAsList.find((b) => lowerCaseText.includes(b.toLowerCase()));

				// find brand name
				let matchedBrand = brandAsList.find((b) => lowerCaseText.includes(b.toLowerCase())) || '';

				let matchedCommon = commonAsList.find((b) => lowerCaseText.includes(b.toLowerCase())) || '';

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
						matchedBrand,
						matchedCommon
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

	async function copyFull() {
		await navigator.clipboard.writeText(resultText.innerText);
		copiedFull = true;
		setTimeout(() => {
			copiedFull = false;
		}, 1000);
	}

	async function copyOneLine() {
		const result = oneLineText.innerText.replace(/,\s*$/, '');
		await navigator.clipboard.writeText(result);
		copiedOneLine = true;
		setTimeout(() => {
			copiedOneLine = false;
		}, 1000);
	}
</script>

{#snippet renderMeds(medList: MedList[], days: number)}
	<ul class="list-none ml-2">
		{#if medList?.length > 0}
			<li>
				{#if medList == longInsulinMedsFound}
					&nbsp;&nbsp;– Normal long acting insulin dose vs half dose night prior:
				{:else if medList == mixedInsulinMedsFound}
					&nbsp;&nbsp;– Hold pre-mixed insulin vs half dose on morning of procedure:
				{:else if medList == insulinPumpMedsFound}
					&nbsp;&nbsp;– Continue basal rate and hold bolus dosing:
				{:else if medList == biologicMedsFound}
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
				{#each medList as med, i}
					{#if med.matchedGeneric}
						{med.matchedGeneric}{#if med.matchedBrand && includeBrand}
							&nbsp;({med.matchedBrand})
						{/if}
					{:else}
						{med.matchedBrand}
					{/if}{i < medList.length - 1 ? ', ' : ''}
				{/each}
			</li>
		{/if}
	</ul>
{/snippet}

{#snippet renderOneLine(medList: MedList[], days: number)}
	{#each medList as med, i}
		{#if med.matchedCommon && useCommon}
			{med.matchedCommon}
		{:else if med.matchedGeneric}
			{med.matchedGeneric}{#if med.matchedBrand}
				/{med.matchedBrand}
			{/if}
		{/if}
		{#if medList == longInsulinMedsFound}
			(normal vs 1/2 dose night before)
		{:else if medList == mixedInsulinMedsFound}
			(normal vs 1/2 dose morning of)
		{:else if medList == insulinPumpMedsFound}
			(continue basal, hold bolus morning of)
		{:else if medList == biologicMedsFound}
			(refer to biologic section)
		{:else if days > 1}
			({days} days)
		{:else if days == 1}
			(day prior+day of)
		{:else if days == 0}
			(morning of)
		{:else if days == 0.5}
			(12 hours)
		{/if}{i < medList.length - 1 ? ', ' : ''}
	{/each}{medList.length > 0 ? ', ' : ''}
{/snippet}

{#snippet copyClear(copyType: string, copyStatus: boolean, copy: () => void)}
	<div class="flex w-full flex-col md:flex-row gap-y-2 gap-x-2">
		<button
			disabled={copyStatus}
			onclick={copy}
			class="btn flex items-center gap-x-2 btn-primary grow"
			>{#if copyStatus}
				<Check size={18} />Copied
			{:else}
				<Clipboard size={18} />Copy {copyType}
			{/if}
		</button>
		<button onclick={() => (inputText = '')} class="btn grow">Clear</button>
	</div>
{/snippet}

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

	{#if inputText}
		<div class="divider"></div>
		<h3>Full Version</h3>
		<div bind:this={resultText} class="card p-golden-lg card-dash bg-base-200">
			<div>
				{#if !medsFound}
					– No medication to hold
				{:else}
					– Medications to hold:
					{@render renderMeds(fourteenDayMedsFound, 14)}
					{@render renderMeds(sevenDayMedsFound, 7)}
					{@render renderMeds(fiveDayMedsFound, 5)}
					{@render renderMeds(fourDayMedsFound, 4)}
					{@render renderMeds(threeDayMedsFound, 3)}
					{@render renderMeds(twoDayMedsFound, 2)}
					{@render renderMeds(oneDayMedsFound, 1)}
					{@render renderMeds(zeroDayMedsFound, 0)}
					{@render renderMeds(twelveHourMedsFound, 0.5)}
					{@render renderMeds(longInsulinMedsFound, 0.5)}
					{@render renderMeds(mixedInsulinMedsFound, 0.5)}
					{@render renderMeds(biologicMedsFound, 0.5)}
				{/if}
			</div>
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
		{@render copyClear('Full', copiedFull, copyFull)}
	{/if}

	{#if inputText}
		<div class="divider"></div>
		<h3>One Line Version</h3>

		<div bind:this={oneLineText} class="card p-golden-lg card-dash bg-base-200">
			<div>
				{#if !medsFound}
					– No medication to hold
				{:else}
					{@render renderOneLine(fourteenDayMedsFound, 14)}
					{@render renderOneLine(sevenDayMedsFound, 7)}
					{@render renderOneLine(fiveDayMedsFound, 5)}
					{@render renderOneLine(fourDayMedsFound, 4)}
					{@render renderOneLine(threeDayMedsFound, 3)}
					{@render renderOneLine(twoDayMedsFound, 2)}
					{@render renderOneLine(oneDayMedsFound, 1)}
					{@render renderOneLine(zeroDayMedsFound, 0)}
					{@render renderOneLine(twelveHourMedsFound, 0.5)}
					{@render renderOneLine(longInsulinMedsFound, 0.5)}
					{@render renderOneLine(mixedInsulinMedsFound, 0.5)}
					{@render renderOneLine(biologicMedsFound, 0.5)}
				{/if}
			</div>
		</div>
		<label for="" class="fieldset-label">
			<input
				type="checkbox"
				onchange={parseMedications}
				bind:checked={useCommon}
				class="toggle toggle-primary"
			/>Use common name*
		</label>
		{@render copyClear('One Line', copiedOneLine, copyOneLine)}
		<p class="prose max-w-none pb-4">
			* uses either generic or brand name, whichever is more recognizable (e.g. metformin instead of
			Glucophage, Brilinta instead of ticagrelor). If neither are common, both names will be
			included (e.g. flavoxate/Urispas).
		</p>
		<div class="divider"></div>
	{/if}

	<Instructions />
	<Meds />
</div>

<div class="mt-4 justify-end text-sm text-right flex gap-x-2">
	Made by Kang.
	<a href="mailto:kxiang.wakehealth.edu"><Mail /></a>
	<a href="https://github.com/kangruixiang/bronchmeds"><Github /></a>
</div>
