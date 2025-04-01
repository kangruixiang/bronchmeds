export type MedList = {
  generic: string;
  brand: string;
  common?: string;
  matchedGeneric?: string;
  matchedBrand?: string;
  matchedCommon?: string;
};

//effient both 5 and 7 days
export const fourteenDayMedsList: MedList[] = [
  {
    generic: 'agaricus mushroom',
    brand: ''
  },
  {
    generic: 'aloe',
    brand: ''
  },
  {
    generic: 'alpha-lipoic acid',
    brand: ''
  },
  {
    generic: 'ginseng',
    brand: ''
  },
  {
    generic: 'andrographisd',
    brand: ''
  },
  {
    generic: 'arnica',
    brand: ''
  },
  {
    generic: 'banaba',
    brand: ''
  },
  {
    generic: 'bitter orange',
    brand: ''
  },
  {
    generic: 'caffeine supplements',
    brand: ''
  },
  {
    generic: 'black tea',
    brand: ''
  },
  {
    generic: 'casein peptides',
    brand: ''
  },
  {
    generic: 'coenzyme Q10',
    brand: ''
  },
  {
    generic: 'echinacea',
    brand: ''
  },
  {
    generic: 'fenugreek',
    brand: ''
  },
  {
    generic: 'garlic',
    brand: ''
  },
  {
    generic: 'ginger',
    brand: ''
  },
  {
    generic: 'ginkgo',
    brand: ''
  },
  {
    generic: 'grapefruit',
    brand: ''
  },
  {
    generic: 'horny goat weed',
    brand: ''
  },
  {
    generic: 'kava',
    brand: ''
  },
  {
    generic: 'saw palmetto',
    brand: ''
  },
  {
    generic: "St. John's wort",
    brand: ''
  },
  {
    generic: 'turmeric',
    brand: ''
  }, {
    generic: 'vitamin E',
    brand: ''
  },
];
export const sevenDayMedsList: MedList[] = [
  {
    generic: 'semaglutide',
    brand: 'Ozempic, Wegovy',
    common: 'Ozempic, Wegovy'
  },
  {
    generic: 'tirzepatide',
    brand: 'Mounjaro, Zepbound',
    common: 'Mounjaro, Zepbound'
  },
  {
    generic: 'liraglutide',
    brand: 'Victoza, Saxenda'
  },
  {
    generic: 'dulaglutide',
    brand: 'Trulicity',
    common: 'Trulicity'
  },
  {
    generic: 'Exenatide',
    brand: 'Byetta, Bydureon'
  },
  {
    generic: 'lixisenatide',
    brand: 'Adlyxin'
  },
  {
    generic: 'dipyridamole-aspirin',
    brand: 'Aggrenox',
    common: 'Aggrenox'
  },
  {
    generic: 'mycophenolate',
    brand: 'CellCept',
    common: 'Cellcept'
  },
  {
    generic: 'azathioprine',
    brand: 'Azasan, Imuran, Jayempi'
  },
  {
    generic: 'cyclosporine',
    brand: 'Sandimmune, Neoral'
  },
  {
    generic: 'tacrolimus',
    brand: 'Prograf, Advagraf, Protopic',
    common: 'Prograf'
  },
];
export const fiveDayMedsList: MedList[] = [
  {
    generic: 'clopidogrel',
    brand: 'Plavix',
    common: 'Plavix'
  },
  {
    generic: 'ticagrelor',
    brand: 'Brilinta',
    common: 'Brilinta'
  },
  {
    generic: 'effient',
    brand: 'Prasugrel',
    common: 'Prasugrel'
  },
  {
    generic: 'dipyridamole',
    brand: 'Persantine'
  },
  {
    generic: 'coumadin',
    brand: 'Warfarin',
    common: 'Warfarin'
  },
  {
    generic: "sildenafil",
    brand: 'Viagra, Revatio'
  },
  {
    generic: 'avanafil',
    brand: 'Stendra'
  },
  {
    generic: 'tadalafil',
    brand: 'Cialis, Adcirca'
  },
  {
    generic: 'vardenafil',
    brand: 'Levitra'
  },
  {
    generic: 'phenteramine',
    brand: ''
  }
];
export const fourDayMedsList: MedList[] = [
  {
    generic: 'empagliflozin',
    brand: 'Jardiance',
    common: 'Jardiance'
  },
  {
    generic: 'dapagliflozin',
    brand: 'Farxiga',
    common: 'Farxiga'
  },
  {
    generic: 'ertugliflozin',
    brand: 'Steglatro'
  },
  {
    generic: 'bexagliflozin',
    brand: 'Brenzavvy, Bexacat'
  },
  {
    generic: 'canagliflozin',
    brand: 'Invokana'
  },
  {
    generic: 'sotagliflozin',
    brand: 'Inpefa'
  },
];
export const threeDayMedsList: MedList[] = [
  {
    generic: 'apixaban',
    brand: 'Eliquis',
    common: 'Eliquis'
  },
  {
    generic: 'rivaroxaban',
    brand: 'Xarelto',
    common: 'Xarelto'
  },
  {
    generic: 'dabigatran',
    brand: 'Pradaxa',
    common: 'Pradaxa'
  },
  {
    generic: 'edoxaban',
    brand: 'Savaysa'
  },
  {
    generic: 'tofacitinib',
    brand: 'Xeljanz'
  },
  {
    generic: 'baricitinib',
    brand: 'Olumiant',
    common: 'baricitinib'
  },
  {
    generic: 'upadacitinib',
    brand: 'Rinvoq'
  },
];
export const twoDayMedsList: MedList[] = [
  {
    generic: 'cilostazol',
    brand: 'Pletal',
    common: 'cilostazol'
  },
  {
    generic: 'chondroitin',
    brand: ''
  },
  {
    generic: 'glucosamine',
    brand: ''
  }
];
export const oneDayMedsList: MedList[] = [
  {
    generic: 'almotriptan',
    brand: 'Axert',
  },
  {
    generic: 'eletriptan',
    brand: 'Relpax',
  },
  {
    generic: 'frovatritan',
    brand: 'Frova',
  },
  {
    generic: 'naratriptan',
    brand: 'Amerge',
  },
  {
    generic: 'rizatriptan',
    brand: 'Maxalt',
    common: 'rizatriptan',
  },
  {
    generic: 'sumatriptan',
    brand: 'Imitrex',
    common: 'Imitrex',
  },
  {
    generic: 'zolmitriptan',
    brand: 'Zomig',
  },
  {
    generic: 'cholestyramine',
    brand: 'Questran',
    common: 'cholestyramine',
  },
  {
    generic: 'colestipol',
    brand: 'Colestid',
    common: 'colestipol'

  },
  {
    generic: 'ezetimibe',
    brand: 'Zetia',
    common: 'Zetia'
  },
  {
    generic: 'fenofibrate',
    brand: 'Tricor',
    common: 'fenofibrate'
  },
  {
    generic: 'gemfibrozil',
    brand: '',
    common: 'gemfibrozil'
  },
  {
    generic: 'niacin',
    brand: 'Vitamin B3, Niaspan, Sio-Niacin'
  },
  {
    generic: 'theophylline',
    brand: 'Theolair, Uniphyl, Elixophyllin'
  },
  {
    generic: '5-hydroxytrypophan',
    brand: ''
  },
];
export const zeroDayMedsList: MedList[] = [
  {
    generic: 'lidocaine',
    brand: 'Salonpas',
  },
  {
    generic: 'darifenacin',
    brand: 'Enablex, Emselex'
  },
  {
    generic: 'fesoterodine',
    brand: 'Fesobig, Toviaz'
  },
  {
    generic: 'flavoxate',
    brand: 'Urispas'
  },
  {
    generic: 'oxybutynin',
    brand: 'Ditropan, Gelnique',
    common: 'oxybutynin',
  },
  {
    generic: 'solifenacin',
    brand: 'Vesicare'
  },
  {
    generic: 'tolterodine',
    brand: 'Detrol, Detrusitol'
  },
  {
    generic: 'trospium',
    brand: 'Regurin, Sanctura'
  },
  {
    generic: 'amphetamine stimulants',
    brand: 'Adderall, Mydayis'
  },
  {
    generic: 'methylphenidate',
    brand: 'Ritalin, Ritalin LA, Concerta'
  },
  {
    generic: 'modafinil',
    brand: 'Provigil, Alertec, Modavigil'
  },
  {
    generic: 'metformin',
    brand: 'Glucophage',
    common: 'metformin'
  },
  {
    generic: 'pioglitazone',
    brand: 'Actos'
  },
  {
    generic: 'insulin regular',
    brand: 'Humulin R, Novolin R'
  },
  {
    generic: 'glulisine',
    brand: 'Apidra'
  },
  {
    generic: 'vildagliptin',
    brand: 'Galvus'
  },
  {
    generic: 'sitagliptin',
    brand: 'Januvia, Zituvio',
    common: 'Januvia'
  },
  {
    generic: 'saxagliptin',
    brand: 'Onglyza'
  },
  {
    generic: 'linagliptin',
    brand: 'Tradjenta, Trajenta, Trazenta'
  },
  {
    generic: 'alogliptin',
    brand: 'Nesina, Vipidia'
  },
  {
    generic: 'glipizide',
    brand: 'Glucotrol',
    common: 'glipizide'
  },
  {
    generic: 'sodium citrate',
    brand: ''
  },
  {
    generic: 'magnesium trisilicate',
    brand: ''
  },
  {
    generic: 'aluminum hydroxide',
    brand: ''
  },
  {
    generic: 'calcium carbonate',
    brand: ''
  },
  {
    generic: 'sucralfate',
    brand: 'Carafate',
    common: 'Carafate'
  },
  {
    generic: 'dicyclomine',
    brand: 'Bentyl',
    common: 'Bentyl',
  },
  {
    generic: 'hyoscyamine',
    brand: 'Anaspaz'
  },
  {
    generic: 'loperamide',
    brand: 'Imodium',
    common: 'Imodium'
  },
  {
    generic: 'diphenoxylate and atropine',
    brand: 'Lomotil',
    common: 'Lomotil'
  },
  {
    generic: 'ursodeoxycholic acid',
    brand: 'Ursodiol',
    common: 'Ursodiol'
  },
  {
    generic: 'chenodeoxycholic acid',
    brand: ''
  },
  {
    generic: 'lisdexamfetamine',
    brand: 'Vyvanse, Elvanse'
  },
  {
    generic: 'senna',
    brand: 'Ex-Lax, Senokot'
  },
  {
    generic: 'polyethylene glycol',
    brand: 'PEG, MiraLAX, Glycolax',
    common: 'MiraLax'
  },
  {
    generic: 'docusate',
    brand: 'Colace',
    common: 'Colace'
  },
  {
    generic: 'BisaCODYL',
    brand: 'Dulcolax',
    common: 'Dulcolax'
  },
  {
    generic: 'magnesium citrate',
    brand: ''
  },
  {
    generic: 'lactulose',
    brand: 'Cholac, Generlac, Constulose, Chronulac',
    common: 'lactulose'
  },
  {
    generic: 'pancreatic enzymes',
    brand: 'Creon, Pancreaze, Pertzye',
    common: 'Creon'
  },
  {
    generic: 'benazepril',
    brand: 'Lotensin',
    common: 'benazepril'
  },
  {
    generic: 'quinapril',
    brand: 'Accupril'
  },
  {
    generic: 'lisinopril',
    brand: 'Prinivil, Zestril, Qbrelis, Dapril',
    common: 'lisinopril',
  },
  {
    generic: 'enalapril',
    brand: 'Vasotec, Renitec, Enacard'
  },
  {
    generic: 'ramipril',
    brand: 'Altace',
    common: 'ramipril'
  },
  {
    generic: 'captopril',
    brand: 'Capoten',
    common: 'captopril'
  },
  {
    generic: 'fosinopril',
    brand: 'Monopril',
    common: 'fosinopril'
  },
  {
    generic: 'perindopril',
    brand: 'Aceon',
    common: 'perindopril'
  },
  {
    generic: 'trandolapril',
    brand: 'Mavik',
    common: 'trandolapril'
  },
  {
    generic: 'losartan',
    brand: 'Cozaar',
    common: 'losartan'
  },
  {
    generic: 'valsartan',
    brand: 'Diovan, Entresto',
    common: 'Entresto'
  },
  {
    generic: 'telmisartan',
    brand: 'Micardis',
    common: 'telmisartan'
  },
  {
    generic: 'irbesartan',
    brand: 'Aprovel, Avapro',
    common: 'irbesartan'
  },
  {
    generic: 'aliskiren',
    brand: 'Tekturna, Rasilez',
    common: 'aliskiren'
  },
  {
    generic: 'eplerenone',
    brand: 'Inspra',
    common: 'eplerenone'
  },
  {
    generic: 'olmesartan',
    brand: 'Benicar'
  },
  {
    generic: 'bumetanide',
    brand: 'Bumex, Burinex',
    common: 'Bumex'
  },
  {
    generic: 'furosemide',
    brand: 'Lasix',
    common: 'Lasix'
  },
  {
    generic: 'torsemide',
    brand: 'Demadex',
    common: 'torsemide'
  },
  {
    generic: 'hydrochlorothiazide',
    brand: 'Hydrodiuril',
    common: 'hydrochlorothiazide'
  },
  {
    generic: 'chlorthalidone',
    brand: 'Thalitone, Hygroton',
    common: 'chlorthalidone'
  },
  {
    generic: 'metolazone',
    brand: 'Zaroxolyn',
    common: 'metolazone'
  },
  {
    generic: 'indapamide',
    brand: 'Lozol'
  },
  {
    generic: 'triamterene',
    brand: 'Dyrenium, Dytac'
  },
  {
    generic: 'spironolactone',
    brand: 'Aldactone, Carospir',
    common: 'Aldactone'
  },
  {
    generic: 'amiloride',
    brand: 'Midamor'
  },
  {
    generic: 'ferrous sulfate',
    brand: ''
  },
  {
    generic: 'insulin aspart, insulin lispro',
    brand: 'Novolog FlexPen, Novolog, Novolog Relion, Humalog, Liprolog, Admelog, Fiasp FlexTouch'
  },
];
export const twelveHoursMedsList: MedList[] = [
  {
    generic: 'enoxaparin',
    brand: 'Lovenox',
    common: 'Lovenox'
  }
];
export const longInsulinList: MedList[] = [
  {
    generic: 'insulin glargine',
    brand: 'LANTUS SoloStar, Toujeo'
  },
  {
    generic: 'insulin degludec',
    brand: 'Tresiba'
  },
  {
    generic: 'insulin detemir',
    brand: 'Levemir'
  },
  {
    generic: 'insulin glarg-yfgn',
    brand: 'Semglee'
  },
]
export const mixedInsulinList: MedList[] = [
  {
    generic: 'insulin NPH',
    brand: 'Novolin N, Humulin N, Insulatard'
  },
  {
    generic: 'premixed insulin',
    brand: 'Novolog Mix 70/30,  Novolog 70/30,  Novolog Mix 75/25, Novolog 75/25, Humalog Mix 50/50, Humalog Mix 75/25, Humulin Mix 70/30, Novolin Mix 70/30'
  },

]
export const biologicList: MedList[] = [
  {
    generic: 'infliximab',
    brand: 'Remicade'
  },
  {
    generic: 'adalimumab',
    brand: 'Humira'
  },
  {
    generic: 'etanercept',
    brand: 'Enbrel'
  },
  {
    generic: 'abatacept',
    brand: 'Orencia'
  },
  {
    generic: 'certolizumab',
    brand: 'Cimzia'
  },
  {
    generic: 'tocilizumab',
    brand: 'Actemra'
  },
  {
    generic: 'anakinra',
    brand: 'Kineret'
  },
  {
    generic: 'secukinumab',
    brand: 'Cosentyx'
  },
  {
    generic: 'ustekinumab',
    brand: 'Stelara'
  },
  {
    generic: 'ixekizumab',
    brand: 'Taltz'
  },
  {
    generic: 'guselkumab',
    brand: 'Tremfya'
  },
  {
    generic: 'rituximab',
    brand: 'Rituxan'
  },
  {
    generic: 'belimumab',
    brand: 'Benlysta'
  },
]

