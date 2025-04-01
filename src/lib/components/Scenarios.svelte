<script>
	import { SquareChartGantt } from '@lucide/svelte';

	const scenarios = [
		{
			input: 'losartan',
			comment: 'generic name only',
			full: '– Hold morning of procedure: losartan',
			oneLine: 'losartan (morning of)'
		},
		{
			input: 'Cozaar',
			comment: 'brand name only',
			full: '– Hold morning of procedure: Cozaar',
			oneLine: 'Cozaar (morning of)'
		},
		{
			input: 'losartan (Cozaar)',
			comment: 'generic with brand name, default options',
			full: '– Hold morning of procedure: losartan (Cozaar)',
			oneLine: 'losartan (morning of)'
		},
		{
			input: 'losartan (Cozaar)',
			comment: '"Include brand name" option off',
			full: '– Hold morning of procedure: losartan',
			oneLine: 'losartan (morning of)'
		},
		{
			input: 'losartan (Cozaar)',
			comment: '"Use common name" option off',
			full: '– Hold morning of procedure: losartan (Cozaar)',
			oneLine: 'losartan/Cozaar (morning of)'
		},
		{
			input: 'sildenafil',
			comment: 'generic PDE inhibitor',
			full: "– Hold for 5 day: sildenafil (for ED or Raynaud's; do not hold for PHTN)",
			oneLine: "sildenafil (for ED or Raynaud's; do not hold for PHTN) (5 days)"
		},
		{
			input: 'Viagra',
			comment: 'brand name PDE inhibitor',
			full: '– Hold for 5 day: Viagra',
			oneLine: 'Viagra (5 days)'
		},
		{
			input: 'sildenafil (Viagra)',
			comment: 'both generic and brand PDE inhibitor',
			full: '– Hold for 5 day: sildenafil (Viagra)',
			oneLine: 'sildenafil/Viagra (5 days)'
		},
		{
			input: 'Revatio',
			comment: 'brand name PTHN med',
			full: '– No medication to hold',
			oneLine: 'No medication to hold'
		},
		{
			input: 'sildenafil (Revatio)',
			comment: 'generic and brand name PTHN med',
			full: '– No medication to hold',
			oneLine: 'No medication to hold'
		}
	];
</script>

<div class="collapse bg-base-200 border border-base-300">
	<input type="checkbox" />
	<div class="collapse-title font-semibold flex gap-x-2 items-center">
		<SquareChartGantt size={18} />How Different Scenarios Are Handled
	</div>
	<div class="collapse-content">
		<div class="pt-6"></div>
		<div>
			<table class="table">
				<thead>
					<tr>
						<th>User Input</th>
						<th>Full Version</th>
						<th>One Line Version</th>
					</tr>
				</thead>
				<tbody>
					{#each scenarios as scenario}
						<tr class="hover:bg-base-300">
							<td>{scenario.input}<br />({scenario.comment})</td>
							<td>{scenario.full}</td>
							<td>{scenario.oneLine}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<div class="grid grid-cols-3"></div>
	</div>
</div>
