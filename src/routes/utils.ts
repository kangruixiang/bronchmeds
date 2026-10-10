import type { MedList } from '$lib/medications.ts';

export function filterMedsbyDays(lowerCaseText: string, medList: MedList[]) {
	return medList
		.map(({ generic, brand, common }) => {
			if (!generic || !brand) return undefined;

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
			let matchedGeneric = genericAsList.find((b) => lowerCaseText.includes(b.toLowerCase())) || '';

			// find brand name
			const matchedBrand = brandAsList.find((b) => lowerCaseText.includes(b.toLowerCase())) || '';

			const matchedCommon = commonAsList.find((b) => lowerCaseText.includes(b.toLowerCase())) || '';

			if (!matchedGeneric && !matchedBrand && !matchedCommon) {
				return undefined;
			}

			if (matchedBrand == 'Revatio' || matchedBrand == 'Adcirca') {
				console.log('phtn meds');
				return undefined;
			}

			if (matchedGeneric == 'sildenafil' && matchedBrand != 'Viagra') {
				matchedGeneric = "sildenafil (for ED or Raynaud's; do not hold for PHTN)";
			}

			if (matchedGeneric == 'tadalafil' && matchedBrand != 'Cialis') {
				matchedGeneric = "tadalafil (for ED or Raynaud's; do not hold for PHTN)";
			}

			return {
				matchedGeneric,
				matchedBrand,
				matchedCommon
			};
		})
		.filter((med): med is NonNullable<typeof med> => med !== undefined);
}
