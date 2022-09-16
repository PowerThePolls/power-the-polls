export interface StateInfo {
    id: number;
    noPollWorkersNeeded?: boolean;
    /**
     * We do not support this jurisdiction.
     * (Make sure`noPollWorkersNeeded` is also set to true for these states)
     */
    notSupported?: boolean;
    partner?: boolean;
    /**
     * For Maine. see: EmailApplicationForm.tsx
     */
    usePhoneInsteadOfEmailForFormFallback?: boolean;
    name?: string;
    alpha?: string;
    pollworker_website?: string;
    is_active?: boolean;
    subdivision_name?: string;
    has_all_mail_elections?: boolean;
    notes?: string | null;
    topojson_id?: number;
    jurisdictions: Jurisdiction;
}

export interface Jurisdiction {
    cities: { [jurisdiction: string]: JurisdictionShort };
    counties: { [jurisdiction: string]: JurisdictionShort };
}

export interface JurisdictionShort {
    id: number;
    name: string;
    slug: string;
}

export interface JurisdictionInfo extends JurisdictionShort {
    state: { alpha: string; };
    disambiguation_notice?: string;
    disambiguation_link?: string;
    info_website: string;
    student_website?: string;
    online_application: string;
    telephone: string;
    email: string;
    office_address: string;
    mailing_address_if_different: string;
    registration_status: string;
    minimum_age: string;
    has_student_pollworkers: boolean;
    hours_start: string;
    hours_end: string;
    full_day_required: string;
    compensation_for_the_day: string;
    training_required: boolean;
    training_note?: string;
    must_have_email: string;
    further_notes: string;
    notes: string;
    is_the_jurisdiction_a_city: boolean;
    jurisdiction_is_fully_recruited: boolean;
    vote_by_mail_jurisdiction: boolean;
}

export const DuplicateJurisdictions: string[] = [
    "St. Albans",
    "Rutland",
    "Newport",
    "Barre",
    "Beaver Dam, Dodge County",
    "Beloit, Rock County",
    "Brookfield, Waukesha County",
    "Cedarburg, Ozaukee County",
    "Cottage Grove, Dane County",
    "Delafield, Waukesha County",
    "Delavan, Walworth County",
    "East Troy, Walworth County",
    "Fond du Lac, Fond du Lac County",
    "Grafton, Ozaukee County",
    "Hudson, St. Croix County",
    "Jackson, Washington County",
    "Janesville, Rock County",
    "Lodi, Columbia County",
    "Madison, Dane County",
    "Medford, Taylor County",
    "Menomonie, Dunn County",
    "Merrill, Lincoln County",
    "Merton, Waukesha County",
    "Middleton, Dane County",
    "Milton, Rock County",
    "Neenahnnebago County",
    "Oconomowoc, Waukesha County",
    "Onalaska, La Crosse County",
    "Oregon, Dane County",
    "Osceola, Polk County",
    "Peshtigo, Marinette County",
    "Pewaukee, Waukesha County",
    "Plymouth, Sheboygan County",
    "Rice Lake, Barron County",
    "Sheboygan, Sheboygan County",
    "Somerset, St. Croix County",
    "Sparta, Monroe County",
    "Waterford, Racine County",
    "Waukesha, Waukesha County",
    "West Bend, Washington County",
];

const data: { [state: string]: StateInfo } = {
    // Territories
    "AS": {
        "id": -1,
        "name": "American Samoa",
        "noPollWorkersNeeded": true,
        "notSupported": true,
        "jurisdictions": {
            "cities": {},
            "counties": {},
        },
    },
    "GU": {
        "id": -1,
        "name": "Guam",
        "noPollWorkersNeeded": true,
        "notSupported": true,
        "jurisdictions": {
            "cities": {},
            "counties": {},
        },
    },
    "MP": {
        "id": -1,
        "name": "Northern Mariana Islands",
        "noPollWorkersNeeded": true,
        "notSupported": true,
        "jurisdictions": {
            "cities": {},
            "counties": {},
        },
    },
    "PR": {
        "id": -1,
        "name": "Puerto Rico",
        "noPollWorkersNeeded": true,
        "notSupported": true,
        "jurisdictions": {
            "cities": {},
            "counties": {},
        },
    },
    "VI": {
        "id": -3,
        "name": "Virgin Islands",
        "noPollWorkersNeeded": true,
        "notSupported": true,
        "jurisdictions": {
            "cities": {},
            "counties": {},
        },
    },
    // states - get from ../../scripts/workelections-states
    "AL": {
        "id": 30,
        "name": "Alabama",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Baldwin": {
                    "id": 5667,
                    "name": "Baldwin",
                    "slug": "baldwin",
                },
                "Colbert": {
                    "id": 5666,
                    "name": "Colbert",
                    "slug": "colbert",
                },
                "Mobile": {
                    "id": 5665,
                    "name": "Mobile",
                    "slug": "mobile",
                },
                "Greene": {
                    "id": 5664,
                    "name": "Greene",
                    "slug": "greene",
                },
                "Autauga": {
                    "id": 5663,
                    "name": "Autauga",
                    "slug": "autauga",
                },
                "Dallas": {
                    "id": 5662,
                    "name": "Dallas",
                    "slug": "dallas",
                },
                "Madison": {
                    "id": 5661,
                    "name": "Madison",
                    "slug": "madison",
                },
                "Pickens": {
                    "id": 5660,
                    "name": "Pickens",
                    "slug": "pickens",
                },
                "Etowah": {
                    "id": 5659,
                    "name": "Etowah",
                    "slug": "etowah",
                },
                "Lee": {
                    "id": 5658,
                    "name": "Lee",
                    "slug": "lee",
                },
                "Perry": {
                    "id": 5657,
                    "name": "Perry",
                    "slug": "perry",
                },
                "Lawrence": {
                    "id": 5656,
                    "name": "Lawrence",
                    "slug": "lawrence",
                },
                "Bullock": {
                    "id": 5655,
                    "name": "Bullock",
                    "slug": "bullock",
                },
                "Dale": {
                    "id": 5654,
                    "name": "Dale",
                    "slug": "dale",
                },
                "Walker": {
                    "id": 5653,
                    "name": "Walker",
                    "slug": "walker",
                },
                "Tallapoosa": {
                    "id": 5652,
                    "name": "Tallapoosa",
                    "slug": "tallapoosa",
                },
                "Coffee": {
                    "id": 5651,
                    "name": "Coffee",
                    "slug": "coffee",
                },
                "Cherokee": {
                    "id": 5650,
                    "name": "Cherokee",
                    "slug": "cherokee",
                },
                "Bibb": {
                    "id": 5649,
                    "name": "Bibb",
                    "slug": "bibb",
                },
                "Tuscaloosa": {
                    "id": 5648,
                    "name": "Tuscaloosa",
                    "slug": "tuscaloosa",
                },
                "Randolph": {
                    "id": 5647,
                    "name": "Randolph",
                    "slug": "randolph",
                },
                "Limestone": {
                    "id": 5646,
                    "name": "Limestone",
                    "slug": "limestone",
                },
                "Lauderdale": {
                    "id": 5645,
                    "name": "Lauderdale",
                    "slug": "lauderdale",
                },
                "Henry": {
                    "id": 5644,
                    "name": "Henry",
                    "slug": "henry",
                },
                "Fayette": {
                    "id": 5643,
                    "name": "Fayette",
                    "slug": "fayette",
                },
                "Escambia": {
                    "id": 5642,
                    "name": "Escambia",
                    "slug": "escambia",
                },
                "Winston": {
                    "id": 5641,
                    "name": "Winston",
                    "slug": "winston",
                },
                "Morgan": {
                    "id": 5640,
                    "name": "Morgan",
                    "slug": "morgan",
                },
                "Marion": {
                    "id": 5639,
                    "name": "Marion",
                    "slug": "marion",
                },
                "Lamar": {
                    "id": 5638,
                    "name": "Lamar",
                    "slug": "lamar",
                },
                "Geneva": {
                    "id": 5637,
                    "name": "Geneva",
                    "slug": "geneva",
                },
                "Covington": {
                    "id": 5636,
                    "name": "Covington",
                    "slug": "covington",
                },
                "Coosa": {
                    "id": 5635,
                    "name": "Coosa",
                    "slug": "coosa",
                },
                "Cleburne": {
                    "id": 5634,
                    "name": "Cleburne",
                    "slug": "cleburne",
                },
                "Clay": {
                    "id": 5633,
                    "name": "Clay",
                    "slug": "clay",
                },
                "Chilton": {
                    "id": 5632,
                    "name": "Chilton",
                    "slug": "chilton",
                },
                "Chambers": {
                    "id": 5631,
                    "name": "Chambers",
                    "slug": "chambers",
                },
                "Franklin": {
                    "id": 5630,
                    "name": "Franklin",
                    "slug": "franklin",
                },
                "Calhoun": {
                    "id": 5629,
                    "name": "Calhoun",
                    "slug": "calhoun",
                },
                "Butler": {
                    "id": 5628,
                    "name": "Butler",
                    "slug": "butler",
                },
                "Jackson": {
                    "id": 5627,
                    "name": "Jackson",
                    "slug": "jackson",
                },
                "Washington": {
                    "id": 5626,
                    "name": "Washington",
                    "slug": "washington",
                },
                "Jefferson": {
                    "id": 5625,
                    "name": "Jefferson",
                    "slug": "jefferson",
                },
                "Lowndes": {
                    "id": 5624,
                    "name": "Lowndes",
                    "slug": "lowndes",
                },
                "Clarke": {
                    "id": 5623,
                    "name": "Clarke",
                    "slug": "clarke",
                },
                "Blount": {
                    "id": 5622,
                    "name": "Blount",
                    "slug": "blount",
                },
                "Cullman": {
                    "id": 5621,
                    "name": "Cullman",
                    "slug": "cullman",
                },
                "Monroe": {
                    "id": 5620,
                    "name": "Monroe",
                    "slug": "monroe",
                },
                "Crenshaw": {
                    "id": 5619,
                    "name": "Crenshaw",
                    "slug": "crenshaw",
                },
                "Wilcox": {
                    "id": 5618,
                    "name": "Wilcox",
                    "slug": "wilcox",
                },
                "Talladega": {
                    "id": 5617,
                    "name": "Talladega",
                    "slug": "talladega",
                },
                "Sumter": {
                    "id": 5616,
                    "name": "Sumter",
                    "slug": "sumter",
                },
                "St. Clair": {
                    "id": 5615,
                    "name": "St. Clair",
                    "slug": "st-clair",
                },
                "Montgomery": {
                    "id": 5614,
                    "name": "Montgomery",
                    "slug": "montgomery",
                },
                "Marshall": {
                    "id": 5613,
                    "name": "Marshall",
                    "slug": "marshall",
                },
                "Marengo": {
                    "id": 5612,
                    "name": "Marengo",
                    "slug": "marengo",
                },
                "Macon": {
                    "id": 5611,
                    "name": "Macon",
                    "slug": "macon",
                },
                "Houston": {
                    "id": 5610,
                    "name": "Houston",
                    "slug": "houston",
                },
                "DeKalb": {
                    "id": 5609,
                    "name": "DeKalb",
                    "slug": "dekalb",
                },
                "Shelby": {
                    "id": 5608,
                    "name": "Shelby",
                    "slug": "shelby",
                },
                "Russell": {
                    "id": 5607,
                    "name": "Russell",
                    "slug": "russell",
                },
                "Pike": {
                    "id": 5606,
                    "name": "Pike",
                    "slug": "pike",
                },
                "Hale": {
                    "id": 5605,
                    "name": "Hale",
                    "slug": "hale",
                },
                "Elmore": {
                    "id": 5604,
                    "name": "Elmore",
                    "slug": "elmore",
                },
                "Conecuh": {
                    "id": 5603,
                    "name": "Conecuh",
                    "slug": "conecuh",
                },
                "Choctaw": {
                    "id": 5602,
                    "name": "Choctaw",
                    "slug": "choctaw",
                },
                "Barbour": {
                    "id": 5601,
                    "name": "Barbour",
                    "slug": "barbour",
                },
            },
        },
    },
    "AK": {
        "id": 31,
        "name": "Alaska",
        "has_all_mail_elections": false,
        "subdivision_name": "Region",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Region 1 - Juneau (Southeast Alaska, Prince William Sound, Kodiak and Kenai Peninsula)": {
                    "id": 5672,
                    "name": "Region 1 - Juneau (Southeast Alaska, Prince William Sound, Kodiak and Kenai Peninsula)",
                    "slug": "region-1-juneau-southeast-alaska-prince-william-sound-kodiak-and-kenai-peninsula",
                },
                "Region 4 - Nome (Northern, Western and Southwest Alaska, Aleutian Chain)": {
                    "id": 5671,
                    "name": "Region 4 - Nome (Northern, Western and Southwest Alaska, Aleutian Chain)",
                    "slug": "region-4-nome-northern-western-and-southwest-alaska-aleutian-chain",
                },
                "Region 3 - Fairbanks (Fairbanks, Interior, Eastern Matanuska-Susitna Borough, Valdez)": {
                    "id": 5670,
                    "name": "Region 3 - Fairbanks (Fairbanks, Interior, Eastern Matanuska-Susitna Borough, Valdez)",
                    "slug": "region-3-fairbanks-fairbanks-interior-eastern-matanuska-susitna-borough-valdez",
                },
                "Region 2 - Anchorage (Municipality of Anchorage)": {
                    "id": 5669,
                    "name": "Region 2 - Anchorage (Municipality of Anchorage)",
                    "slug": "region-2-anchorage-municipality-of-anchorage",
                },
                "Region 5 - Matanuska-Susitna Borough": {
                    "id": 5668,
                    "name": "Region 5 - Matanuska-Susitna Borough",
                    "slug": "region-5-matanuska-susitna-borough",
                },
            },
        },
    },
    "AZ": {
        "id": 32,
        "name": "Arizona",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Yuma": {
                    "id": 5687,
                    "name": "Yuma",
                    "slug": "yuma",
                },
                "Yavapai": {
                    "id": 5686,
                    "name": "Yavapai",
                    "slug": "yavapai",
                },
                "Santa Cruz": {
                    "id": 5685,
                    "name": "Santa Cruz",
                    "slug": "santa-cruz",
                },
                "Pinal": {
                    "id": 5684,
                    "name": "Pinal",
                    "slug": "pinal",
                },
                "Pima": {
                    "id": 5683,
                    "name": "Pima",
                    "slug": "pima",
                },
                "Navajo": {
                    "id": 5682,
                    "name": "Navajo",
                    "slug": "navajo",
                },
                "Mohave": {
                    "id": 5681,
                    "name": "Mohave",
                    "slug": "mohave",
                },
                "Maricopa": {
                    "id": 5680,
                    "name": "Maricopa",
                    "slug": "maricopa",
                },
                "La Paz": {
                    "id": 5679,
                    "name": "La Paz",
                    "slug": "la-paz",
                },
                "Greenlee": {
                    "id": 5678,
                    "name": "Greenlee",
                    "slug": "greenlee",
                },
                "Graham": {
                    "id": 5677,
                    "name": "Graham",
                    "slug": "graham",
                },
                "Gila": {
                    "id": 5676,
                    "name": "Gila",
                    "slug": "gila",
                },
                "Coconino": {
                    "id": 5675,
                    "name": "Coconino",
                    "slug": "coconino",
                },
                "Cochise": {
                    "id": 5674,
                    "name": "Cochise",
                    "slug": "cochise",
                },
                "Apache": {
                    "id": 5673,
                    "name": "Apache",
                    "slug": "apache",
                },
            },
        },
    },
    "AR": {
        "id": 33,
        "name": "Arkansas",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Pulaski": {
                    "id": 5762,
                    "name": "Pulaski",
                    "slug": "pulaski",
                },
                "Ouachita": {
                    "id": 5761,
                    "name": "Ouachita",
                    "slug": "ouachita",
                },
                "Faulkner": {
                    "id": 5760,
                    "name": "Faulkner",
                    "slug": "faulkner",
                },
                "Pike": {
                    "id": 5759,
                    "name": "Pike",
                    "slug": "pike-2",
                },
                "Union": {
                    "id": 5758,
                    "name": "Union",
                    "slug": "union",
                },
                "Madison": {
                    "id": 5757,
                    "name": "Madison",
                    "slug": "madison-2",
                },
                "Crittenden": {
                    "id": 5756,
                    "name": "Crittenden",
                    "slug": "crittenden",
                },
                "Poinsett": {
                    "id": 5755,
                    "name": "Poinsett",
                    "slug": "poinsett",
                },
                "Washington": {
                    "id": 5754,
                    "name": "Washington",
                    "slug": "washington-2",
                },
                "Polk": {
                    "id": 5753,
                    "name": "Polk",
                    "slug": "polk",
                },
                "Hot Spring": {
                    "id": 5752,
                    "name": "Hot Spring",
                    "slug": "hot-spring",
                },
                "Montgomery": {
                    "id": 5751,
                    "name": "Montgomery",
                    "slug": "montgomery-2",
                },
                "Columbia": {
                    "id": 5750,
                    "name": "Columbia",
                    "slug": "columbia",
                },
                "Saline": {
                    "id": 5749,
                    "name": "Saline",
                    "slug": "saline",
                },
                "Crawford": {
                    "id": 5748,
                    "name": "Crawford",
                    "slug": "crawford",
                },
                "Little River": {
                    "id": 5747,
                    "name": "Little River",
                    "slug": "little-river",
                },
                "Greene": {
                    "id": 5746,
                    "name": "Greene",
                    "slug": "greene-2",
                },
                "Garland": {
                    "id": 5745,
                    "name": "Garland",
                    "slug": "garland",
                },
                "Franklin": {
                    "id": 5744,
                    "name": "Franklin",
                    "slug": "franklin-2",
                },
                "Cross": {
                    "id": 5743,
                    "name": "Cross",
                    "slug": "cross",
                },
                "Craighead": {
                    "id": 5742,
                    "name": "Craighead",
                    "slug": "craighead",
                },
                "Cleburne": {
                    "id": 5741,
                    "name": "Cleburne",
                    "slug": "cleburne-2",
                },
                "Van Buren": {
                    "id": 5740,
                    "name": "Van Buren",
                    "slug": "van-buren",
                },
                "Stone": {
                    "id": 5739,
                    "name": "Stone",
                    "slug": "stone",
                },
                "Scott": {
                    "id": 5738,
                    "name": "Scott",
                    "slug": "scott",
                },
                "St. Francis": {
                    "id": 5737,
                    "name": "St. Francis",
                    "slug": "st-francis",
                },
                "Marion": {
                    "id": 5736,
                    "name": "Marion",
                    "slug": "marion-2",
                },
                "Logan": {
                    "id": 5735,
                    "name": "Logan",
                    "slug": "logan",
                },
                "Lincoln": {
                    "id": 5734,
                    "name": "Lincoln",
                    "slug": "lincoln",
                },
                "Johnson": {
                    "id": 5733,
                    "name": "Johnson",
                    "slug": "johnson",
                },
                "Izard": {
                    "id": 5732,
                    "name": "Izard",
                    "slug": "izard",
                },
                "Yell": {
                    "id": 5731,
                    "name": "Yell",
                    "slug": "yell",
                },
                "Sharp": {
                    "id": 5730,
                    "name": "Sharp",
                    "slug": "sharp",
                },
                "Searcy": {
                    "id": 5729,
                    "name": "Searcy",
                    "slug": "searcy",
                },
                "Pope": {
                    "id": 5728,
                    "name": "Pope",
                    "slug": "pope",
                },
                "Perry": {
                    "id": 5727,
                    "name": "Perry",
                    "slug": "perry-2",
                },
                "Newton": {
                    "id": 5726,
                    "name": "Newton",
                    "slug": "newton",
                },
                "Lee": {
                    "id": 5725,
                    "name": "Lee",
                    "slug": "lee-2",
                },
                "Grant": {
                    "id": 5724,
                    "name": "Grant",
                    "slug": "grant",
                },
                "Fulton": {
                    "id": 5723,
                    "name": "Fulton",
                    "slug": "fulton",
                },
                "Drew": {
                    "id": 5722,
                    "name": "Drew",
                    "slug": "drew",
                },
                "Boone": {
                    "id": 5721,
                    "name": "Boone",
                    "slug": "boone",
                },
                "Baxter": {
                    "id": 5720,
                    "name": "Baxter",
                    "slug": "baxter",
                },
                "Phillips": {
                    "id": 5719,
                    "name": "Phillips",
                    "slug": "phillips",
                },
                "Jefferson": {
                    "id": 5718,
                    "name": "Jefferson",
                    "slug": "jefferson-2",
                },
                "Lonoke": {
                    "id": 5717,
                    "name": "Lonoke",
                    "slug": "lonoke",
                },
                "Dallas": {
                    "id": 5716,
                    "name": "Dallas",
                    "slug": "dallas-2",
                },
                "Desha": {
                    "id": 5715,
                    "name": "Desha",
                    "slug": "desha",
                },
                "Chicot": {
                    "id": 5714,
                    "name": "Chicot",
                    "slug": "chicot",
                },
                "Lafayette": {
                    "id": 5713,
                    "name": "Lafayette",
                    "slug": "lafayette",
                },
                "White": {
                    "id": 5712,
                    "name": "White",
                    "slug": "white",
                },
                "Hempstead": {
                    "id": 5711,
                    "name": "Hempstead",
                    "slug": "hempstead",
                },
                "Conway": {
                    "id": 5710,
                    "name": "Conway",
                    "slug": "conway",
                },
                "Arkansas": {
                    "id": 5709,
                    "name": "Arkansas",
                    "slug": "arkansas",
                },
                "Woodruff": {
                    "id": 5708,
                    "name": "Woodruff",
                    "slug": "woodruff",
                },
                "Sevier": {
                    "id": 5707,
                    "name": "Sevier",
                    "slug": "sevier",
                },
                "Sebastian": {
                    "id": 5706,
                    "name": "Sebastian",
                    "slug": "sebastian",
                },
                "Prairie": {
                    "id": 5705,
                    "name": "Prairie",
                    "slug": "prairie",
                },
                "Nevada": {
                    "id": 5704,
                    "name": "Nevada",
                    "slug": "nevada",
                },
                "Monroe": {
                    "id": 5703,
                    "name": "Monroe",
                    "slug": "monroe-2",
                },
                "Mississippi": {
                    "id": 5702,
                    "name": "Mississippi",
                    "slug": "mississippi",
                },
                "Lawrence": {
                    "id": 5701,
                    "name": "Lawrence",
                    "slug": "lawrence-2",
                },
                "Howard": {
                    "id": 5700,
                    "name": "Howard",
                    "slug": "howard",
                },
                "Clay": {
                    "id": 5699,
                    "name": "Clay",
                    "slug": "clay-2",
                },
                "Calhoun": {
                    "id": 5698,
                    "name": "Calhoun",
                    "slug": "calhoun-2",
                },
                "Benton": {
                    "id": 5697,
                    "name": "Benton",
                    "slug": "benton",
                },
                "Ashley": {
                    "id": 5696,
                    "name": "Ashley",
                    "slug": "ashley",
                },
                "Randolph": {
                    "id": 5695,
                    "name": "Randolph",
                    "slug": "randolph-2",
                },
                "Miller": {
                    "id": 5694,
                    "name": "Miller",
                    "slug": "miller",
                },
                "Jackson": {
                    "id": 5693,
                    "name": "Jackson",
                    "slug": "jackson-2",
                },
                "Independence": {
                    "id": 5692,
                    "name": "Independence",
                    "slug": "independence",
                },
                "Cleveland": {
                    "id": 5691,
                    "name": "Cleveland",
                    "slug": "cleveland",
                },
                "Clark": {
                    "id": 5690,
                    "name": "Clark",
                    "slug": "clark",
                },
                "Carroll": {
                    "id": 5689,
                    "name": "Carroll",
                    "slug": "carroll",
                },
                "Bradley": {
                    "id": 5688,
                    "name": "Bradley",
                    "slug": "bradley",
                },
            },
        },
    },
    "CA": {
        "id": 34,
        "name": "California",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Yuba": {
                    "id": 5820,
                    "name": "Yuba",
                    "slug": "yuba",
                },
                "Yolo": {
                    "id": 5819,
                    "name": "Yolo",
                    "slug": "yolo",
                },
                "Ventura": {
                    "id": 5818,
                    "name": "Ventura",
                    "slug": "ventura",
                },
                "Tuolumne": {
                    "id": 5817,
                    "name": "Tuolumne",
                    "slug": "tuolumne",
                },
                "Tulare": {
                    "id": 5816,
                    "name": "Tulare",
                    "slug": "tulare",
                },
                "Trinity": {
                    "id": 5815,
                    "name": "Trinity",
                    "slug": "trinity",
                },
                "Tehama": {
                    "id": 5814,
                    "name": "Tehama",
                    "slug": "tehama",
                },
                "Sutter": {
                    "id": 5813,
                    "name": "Sutter",
                    "slug": "sutter",
                },
                "Stanislaus": {
                    "id": 5812,
                    "name": "Stanislaus",
                    "slug": "stanislaus",
                },
                "Sonoma": {
                    "id": 5811,
                    "name": "Sonoma",
                    "slug": "sonoma",
                },
                "Solano": {
                    "id": 5810,
                    "name": "Solano",
                    "slug": "solano",
                },
                "Siskiyou": {
                    "id": 5809,
                    "name": "Siskiyou",
                    "slug": "siskiyou",
                },
                "Sierra": {
                    "id": 5808,
                    "name": "Sierra",
                    "slug": "sierra",
                },
                "Shasta": {
                    "id": 5807,
                    "name": "Shasta",
                    "slug": "shasta",
                },
                "Santa Cruz": {
                    "id": 5806,
                    "name": "Santa Cruz",
                    "slug": "santa-cruz-2",
                },
                "Santa Clara": {
                    "id": 5805,
                    "name": "Santa Clara",
                    "slug": "santa-clara",
                },
                "Santa Barbara": {
                    "id": 5804,
                    "name": "Santa Barbara",
                    "slug": "santa-barbara",
                },
                "San Mateo": {
                    "id": 5803,
                    "name": "San Mateo",
                    "slug": "san-mateo",
                },
                "San Luis Obispo": {
                    "id": 5802,
                    "name": "San Luis Obispo",
                    "slug": "san-luis-obispo",
                },
                "San Joaquin": {
                    "id": 5801,
                    "name": "San Joaquin",
                    "slug": "san-joaquin",
                },
                "San Francisco": {
                    "id": 5800,
                    "name": "San Francisco",
                    "slug": "san-francisco",
                },
                "San Diego": {
                    "id": 5799,
                    "name": "San Diego",
                    "slug": "san-diego",
                },
                "San Bernardino": {
                    "id": 5798,
                    "name": "San Bernardino",
                    "slug": "san-bernardino",
                },
                "San Benito": {
                    "id": 5797,
                    "name": "San Benito",
                    "slug": "san-benito",
                },
                "Sacramento": {
                    "id": 5796,
                    "name": "Sacramento",
                    "slug": "sacramento",
                },
                "Riverside": {
                    "id": 5795,
                    "name": "Riverside",
                    "slug": "riverside",
                },
                "Plumas": {
                    "id": 5794,
                    "name": "Plumas",
                    "slug": "plumas",
                },
                "Placer": {
                    "id": 5793,
                    "name": "Placer",
                    "slug": "placer",
                },
                "Orange": {
                    "id": 5792,
                    "name": "Orange",
                    "slug": "orange",
                },
                "Nevada": {
                    "id": 5791,
                    "name": "Nevada",
                    "slug": "nevada-2",
                },
                "Napa": {
                    "id": 5790,
                    "name": "Napa",
                    "slug": "napa",
                },
                "Monterey": {
                    "id": 5789,
                    "name": "Monterey",
                    "slug": "monterey",
                },
                "Mono": {
                    "id": 5788,
                    "name": "Mono",
                    "slug": "mono",
                },
                "Modoc": {
                    "id": 5787,
                    "name": "Modoc",
                    "slug": "modoc",
                },
                "Merced": {
                    "id": 5786,
                    "name": "Merced",
                    "slug": "merced",
                },
                "Mendocino": {
                    "id": 5785,
                    "name": "Mendocino",
                    "slug": "mendocino",
                },
                "Mariposa": {
                    "id": 5784,
                    "name": "Mariposa",
                    "slug": "mariposa",
                },
                "Marin": {
                    "id": 5783,
                    "name": "Marin",
                    "slug": "marin",
                },
                "Madera": {
                    "id": 5782,
                    "name": "Madera",
                    "slug": "madera",
                },
                "Los Angeles": {
                    "id": 5781,
                    "name": "Los Angeles",
                    "slug": "los-angeles",
                },
                "Lassen": {
                    "id": 5780,
                    "name": "Lassen",
                    "slug": "lassen",
                },
                "Lake": {
                    "id": 5779,
                    "name": "Lake",
                    "slug": "lake",
                },
                "Kings": {
                    "id": 5778,
                    "name": "Kings",
                    "slug": "kings",
                },
                "Kern": {
                    "id": 5777,
                    "name": "Kern",
                    "slug": "kern",
                },
                "Inyo": {
                    "id": 5776,
                    "name": "Inyo",
                    "slug": "inyo",
                },
                "Imperial": {
                    "id": 5775,
                    "name": "Imperial",
                    "slug": "imperial",
                },
                "Humboldt": {
                    "id": 5774,
                    "name": "Humboldt",
                    "slug": "humboldt",
                },
                "Glenn": {
                    "id": 5773,
                    "name": "Glenn",
                    "slug": "glenn",
                },
                "Fresno": {
                    "id": 5772,
                    "name": "Fresno",
                    "slug": "fresno",
                },
                "El Dorado": {
                    "id": 5771,
                    "name": "El Dorado",
                    "slug": "el-dorado",
                },
                "Del Norte": {
                    "id": 5770,
                    "name": "Del Norte",
                    "slug": "del-norte",
                },
                "Contra Costa": {
                    "id": 5769,
                    "name": "Contra Costa",
                    "slug": "contra-costa",
                },
                "Colusa": {
                    "id": 5768,
                    "name": "Colusa",
                    "slug": "colusa",
                },
                "Calaveras": {
                    "id": 5767,
                    "name": "Calaveras",
                    "slug": "calaveras",
                },
                "Butte": {
                    "id": 5766,
                    "name": "Butte",
                    "slug": "butte",
                },
                "Amador": {
                    "id": 5765,
                    "name": "Amador",
                    "slug": "amador",
                },
                "Alpine": {
                    "id": 5764,
                    "name": "Alpine",
                    "slug": "alpine",
                },
                "Alameda": {
                    "id": 5763,
                    "name": "Alameda",
                    "slug": "alameda",
                },
            },
        },
    },
    "CO": {
        "id": 35,
        "name": "Colorado",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Yuma": {
                    "id": 5884,
                    "name": "Yuma",
                    "slug": "yuma-2",
                },
                "Weld": {
                    "id": 5883,
                    "name": "Weld",
                    "slug": "weld",
                },
                "Washington": {
                    "id": 5882,
                    "name": "Washington",
                    "slug": "washington-3",
                },
                "Teller": {
                    "id": 5881,
                    "name": "Teller",
                    "slug": "teller",
                },
                "Summit": {
                    "id": 5880,
                    "name": "Summit",
                    "slug": "summit",
                },
                "Sedgwick": {
                    "id": 5879,
                    "name": "Sedgwick",
                    "slug": "sedgwick",
                },
                "San Miguel": {
                    "id": 5878,
                    "name": "San Miguel",
                    "slug": "san-miguel",
                },
                "San Juan": {
                    "id": 5877,
                    "name": "San Juan",
                    "slug": "san-juan",
                },
                "Saguache": {
                    "id": 5876,
                    "name": "Saguache",
                    "slug": "saguache",
                },
                "Routt": {
                    "id": 5875,
                    "name": "Routt",
                    "slug": "routt",
                },
                "Rio Grande": {
                    "id": 5874,
                    "name": "Rio Grande",
                    "slug": "rio-grande",
                },
                "Rio Blanco": {
                    "id": 5873,
                    "name": "Rio Blanco",
                    "slug": "rio-blanco",
                },
                "Pueblo": {
                    "id": 5872,
                    "name": "Pueblo",
                    "slug": "pueblo",
                },
                "Prowers": {
                    "id": 5871,
                    "name": "Prowers",
                    "slug": "prowers",
                },
                "Pitkin": {
                    "id": 5870,
                    "name": "Pitkin",
                    "slug": "pitkin",
                },
                "Phillips": {
                    "id": 5869,
                    "name": "Phillips",
                    "slug": "phillips-2",
                },
                "Park": {
                    "id": 5868,
                    "name": "Park",
                    "slug": "park",
                },
                "Ouray": {
                    "id": 5867,
                    "name": "Ouray",
                    "slug": "ouray",
                },
                "Otero": {
                    "id": 5866,
                    "name": "Otero",
                    "slug": "otero",
                },
                "Morgan": {
                    "id": 5865,
                    "name": "Morgan",
                    "slug": "morgan-2",
                },
                "Montrose": {
                    "id": 5864,
                    "name": "Montrose",
                    "slug": "montrose",
                },
                "Montezuma": {
                    "id": 5863,
                    "name": "Montezuma",
                    "slug": "montezuma",
                },
                "Moffat": {
                    "id": 5862,
                    "name": "Moffat",
                    "slug": "moffat",
                },
                "Mineral": {
                    "id": 5861,
                    "name": "Mineral",
                    "slug": "mineral",
                },
                "Mesa": {
                    "id": 5860,
                    "name": "Mesa",
                    "slug": "mesa",
                },
                "Logan": {
                    "id": 5859,
                    "name": "Logan",
                    "slug": "logan-2",
                },
                "Lincoln": {
                    "id": 5858,
                    "name": "Lincoln",
                    "slug": "lincoln-2",
                },
                "Las Animas": {
                    "id": 5857,
                    "name": "Las Animas",
                    "slug": "las-animas",
                },
                "Larimer": {
                    "id": 5856,
                    "name": "Larimer",
                    "slug": "larimer",
                },
                "La Plata": {
                    "id": 5855,
                    "name": "La Plata",
                    "slug": "la-plata",
                },
                "Lake": {
                    "id": 5854,
                    "name": "Lake",
                    "slug": "lake-2",
                },
                "Kit Carson": {
                    "id": 5853,
                    "name": "Kit Carson",
                    "slug": "kit-carson",
                },
                "Kiowa": {
                    "id": 5852,
                    "name": "Kiowa",
                    "slug": "kiowa",
                },
                "Jefferson": {
                    "id": 5851,
                    "name": "Jefferson",
                    "slug": "jefferson-3",
                },
                "Jackson": {
                    "id": 5850,
                    "name": "Jackson",
                    "slug": "jackson-3",
                },
                "Huerfano": {
                    "id": 5849,
                    "name": "Huerfano",
                    "slug": "huerfano",
                },
                "Hinsdale": {
                    "id": 5848,
                    "name": "Hinsdale",
                    "slug": "hinsdale",
                },
                "Gunnison": {
                    "id": 5847,
                    "name": "Gunnison",
                    "slug": "gunnison",
                },
                "Grand": {
                    "id": 5846,
                    "name": "Grand",
                    "slug": "grand",
                },
                "Gilpin": {
                    "id": 5845,
                    "name": "Gilpin",
                    "slug": "gilpin",
                },
                "Garfield": {
                    "id": 5844,
                    "name": "Garfield",
                    "slug": "garfield",
                },
                "Fremont": {
                    "id": 5843,
                    "name": "Fremont",
                    "slug": "fremont",
                },
                "El Paso": {
                    "id": 5842,
                    "name": "El Paso",
                    "slug": "el-paso",
                },
                "Elbert": {
                    "id": 5841,
                    "name": "Elbert",
                    "slug": "elbert",
                },
                "Eagle": {
                    "id": 5840,
                    "name": "Eagle",
                    "slug": "eagle",
                },
                "Douglas": {
                    "id": 5839,
                    "name": "Douglas",
                    "slug": "douglas",
                },
                "Dolores": {
                    "id": 5838,
                    "name": "Dolores",
                    "slug": "dolores",
                },
                "Denver": {
                    "id": 5837,
                    "name": "Denver",
                    "slug": "denver",
                },
                "Delta": {
                    "id": 5836,
                    "name": "Delta",
                    "slug": "delta",
                },
                "Custer": {
                    "id": 5835,
                    "name": "Custer",
                    "slug": "custer",
                },
                "Crowley": {
                    "id": 5834,
                    "name": "Crowley",
                    "slug": "crowley",
                },
                "Costilla": {
                    "id": 5833,
                    "name": "Costilla",
                    "slug": "costilla",
                },
                "Conejos": {
                    "id": 5832,
                    "name": "Conejos",
                    "slug": "conejos",
                },
                "Clear Creek": {
                    "id": 5831,
                    "name": "Clear Creek",
                    "slug": "clear-creek",
                },
                "Cheyenne": {
                    "id": 5830,
                    "name": "Cheyenne",
                    "slug": "cheyenne",
                },
                "Chaffee": {
                    "id": 5829,
                    "name": "Chaffee",
                    "slug": "chaffee",
                },
                "Broomfield": {
                    "id": 5828,
                    "name": "Broomfield",
                    "slug": "broomfield",
                },
                "Boulder": {
                    "id": 5827,
                    "name": "Boulder",
                    "slug": "boulder",
                },
                "Bent": {
                    "id": 5826,
                    "name": "Bent",
                    "slug": "bent",
                },
                "Baca": {
                    "id": 5825,
                    "name": "Baca",
                    "slug": "baca",
                },
                "Archuleta": {
                    "id": 5824,
                    "name": "Archuleta",
                    "slug": "archuleta",
                },
                "Arapahoe": {
                    "id": 5823,
                    "name": "Arapahoe",
                    "slug": "arapahoe",
                },
                "Alamosa": {
                    "id": 5822,
                    "name": "Alamosa",
                    "slug": "alamosa",
                },
                "Adams": {
                    "id": 5821,
                    "name": "Adams",
                    "slug": "adams",
                },
            },
        },
    },
    "CT": {
        "id": 36,
        "name": "Connecticut",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {
                "Woodstock": {
                    "id": 6053,
                    "name": "Woodstock",
                    "slug": "woodstock",
                },
                "Woodbury": {
                    "id": 6052,
                    "name": "Woodbury",
                    "slug": "woodbury",
                },
                "Woodbridge": {
                    "id": 6051,
                    "name": "Woodbridge",
                    "slug": "woodbridge",
                },
                "Wolcott": {
                    "id": 6050,
                    "name": "Wolcott",
                    "slug": "wolcott",
                },
                "Windsor Locks": {
                    "id": 6049,
                    "name": "Windsor Locks",
                    "slug": "windsor-locks",
                },
                "Windsor": {
                    "id": 6048,
                    "name": "Windsor",
                    "slug": "windsor",
                },
                "Windham": {
                    "id": 6047,
                    "name": "Windham",
                    "slug": "windham",
                },
                "Winchester": {
                    "id": 6046,
                    "name": "Winchester",
                    "slug": "winchester",
                },
                "Wilton": {
                    "id": 6045,
                    "name": "Wilton",
                    "slug": "wilton",
                },
                "Willington": {
                    "id": 6044,
                    "name": "Willington",
                    "slug": "willington",
                },
                "Wethersfield": {
                    "id": 6043,
                    "name": "Wethersfield",
                    "slug": "wethersfield",
                },
                "Westport": {
                    "id": 6042,
                    "name": "Westport",
                    "slug": "westport",
                },
                "Weston": {
                    "id": 6041,
                    "name": "Weston",
                    "slug": "weston",
                },
                "Westbrook": {
                    "id": 6040,
                    "name": "Westbrook",
                    "slug": "westbrook",
                },
                "West Haven": {
                    "id": 6039,
                    "name": "West Haven",
                    "slug": "west-haven",
                },
                "West Hartford": {
                    "id": 6038,
                    "name": "West Hartford",
                    "slug": "west-hartford",
                },
                "Watertown": {
                    "id": 6037,
                    "name": "Watertown",
                    "slug": "watertown",
                },
                "Waterford": {
                    "id": 6036,
                    "name": "Waterford",
                    "slug": "waterford",
                },
                "Waterbury": {
                    "id": 6035,
                    "name": "Waterbury",
                    "slug": "waterbury",
                },
                "Washington": {
                    "id": 6034,
                    "name": "Washington",
                    "slug": "washington-4",
                },
                "Warren": {
                    "id": 6033,
                    "name": "Warren",
                    "slug": "warren",
                },
                "Wallingford": {
                    "id": 6032,
                    "name": "Wallingford",
                    "slug": "wallingford",
                },
                "Voluntown": {
                    "id": 6031,
                    "name": "Voluntown",
                    "slug": "voluntown",
                },
                "Vernon": {
                    "id": 6030,
                    "name": "Vernon",
                    "slug": "vernon",
                },
                "Union": {
                    "id": 6029,
                    "name": "Union",
                    "slug": "union-2",
                },
                "Trumbull": {
                    "id": 6028,
                    "name": "Trumbull",
                    "slug": "trumbull",
                },
                "Torrington": {
                    "id": 6027,
                    "name": "Torrington",
                    "slug": "torrington",
                },
                "Tolland": {
                    "id": 6026,
                    "name": "Tolland",
                    "slug": "tolland",
                },
                "Thompson": {
                    "id": 6025,
                    "name": "Thompson",
                    "slug": "thompson",
                },
                "Thomaston": {
                    "id": 6024,
                    "name": "Thomaston",
                    "slug": "thomaston",
                },
                "Suffield": {
                    "id": 6023,
                    "name": "Suffield",
                    "slug": "suffield",
                },
                "Stratford": {
                    "id": 6022,
                    "name": "Stratford",
                    "slug": "stratford",
                },
                "Stonington": {
                    "id": 6021,
                    "name": "Stonington",
                    "slug": "stonington",
                },
                "Sterling": {
                    "id": 6020,
                    "name": "Sterling",
                    "slug": "sterling",
                },
                "Stamford": {
                    "id": 6019,
                    "name": "Stamford",
                    "slug": "stamford",
                },
                "Stafford": {
                    "id": 6018,
                    "name": "Stafford",
                    "slug": "stafford",
                },
                "Sprague": {
                    "id": 6017,
                    "name": "Sprague",
                    "slug": "sprague",
                },
                "Southington": {
                    "id": 6016,
                    "name": "Southington",
                    "slug": "southington",
                },
                "Southbury": {
                    "id": 6015,
                    "name": "Southbury",
                    "slug": "southbury",
                },
                "South Windsor": {
                    "id": 6014,
                    "name": "South Windsor",
                    "slug": "south-windsor",
                },
                "Somers": {
                    "id": 6013,
                    "name": "Somers",
                    "slug": "somers",
                },
                "Simsbury": {
                    "id": 6012,
                    "name": "Simsbury",
                    "slug": "simsbury",
                },
                "Sherman": {
                    "id": 6011,
                    "name": "Sherman",
                    "slug": "sherman",
                },
                "Shelton": {
                    "id": 6010,
                    "name": "Shelton",
                    "slug": "shelton",
                },
                "Sharon": {
                    "id": 6009,
                    "name": "Sharon",
                    "slug": "sharon",
                },
                "Seymour": {
                    "id": 6008,
                    "name": "Seymour",
                    "slug": "seymour",
                },
                "Scotland": {
                    "id": 6007,
                    "name": "Scotland",
                    "slug": "scotland",
                },
                "Salisbury": {
                    "id": 6006,
                    "name": "Salisbury",
                    "slug": "salisbury",
                },
                "Salem": {
                    "id": 6005,
                    "name": "Salem",
                    "slug": "salem",
                },
                "Roxbury": {
                    "id": 6004,
                    "name": "Roxbury",
                    "slug": "roxbury",
                },
                "Rocky Hill": {
                    "id": 6003,
                    "name": "Rocky Hill",
                    "slug": "rocky-hill",
                },
                "Ridgefield": {
                    "id": 6002,
                    "name": "Ridgefield",
                    "slug": "ridgefield",
                },
                "Redding": {
                    "id": 6001,
                    "name": "Redding",
                    "slug": "redding",
                },
                "Putnam": {
                    "id": 6000,
                    "name": "Putnam",
                    "slug": "putnam",
                },
                "Prospect": {
                    "id": 5999,
                    "name": "Prospect",
                    "slug": "prospect",
                },
                "Preston": {
                    "id": 5998,
                    "name": "Preston",
                    "slug": "preston",
                },
                "Portland": {
                    "id": 5997,
                    "name": "Portland",
                    "slug": "portland",
                },
                "Pomfret": {
                    "id": 5996,
                    "name": "Pomfret",
                    "slug": "pomfret",
                },
                "Plymouth": {
                    "id": 5995,
                    "name": "Plymouth",
                    "slug": "plymouth",
                },
                "Plainville": {
                    "id": 5994,
                    "name": "Plainville",
                    "slug": "plainville",
                },
                "Plainfield": {
                    "id": 5993,
                    "name": "Plainfield",
                    "slug": "plainfield",
                },
                "Oxford": {
                    "id": 5992,
                    "name": "Oxford",
                    "slug": "oxford",
                },
                "Orange": {
                    "id": 5991,
                    "name": "Orange",
                    "slug": "orange-2",
                },
                "Old Saybrook": {
                    "id": 5990,
                    "name": "Old Saybrook",
                    "slug": "old-saybrook",
                },
                "Old Lyme": {
                    "id": 5989,
                    "name": "Old Lyme",
                    "slug": "old-lyme",
                },
                "Norwich": {
                    "id": 5988,
                    "name": "Norwich",
                    "slug": "norwich",
                },
                "Norwalk": {
                    "id": 5987,
                    "name": "Norwalk",
                    "slug": "norwalk",
                },
                "North Stonington": {
                    "id": 5986,
                    "name": "North Stonington",
                    "slug": "north-stonington",
                },
                "North Haven": {
                    "id": 5985,
                    "name": "North Haven",
                    "slug": "north-haven",
                },
                "North Canaan": {
                    "id": 5984,
                    "name": "North Canaan",
                    "slug": "north-canaan",
                },
                "North Branford": {
                    "id": 5983,
                    "name": "North Branford",
                    "slug": "north-branford",
                },
                "Norfolk": {
                    "id": 5982,
                    "name": "Norfolk",
                    "slug": "norfolk",
                },
                "Newtown": {
                    "id": 5981,
                    "name": "Newtown",
                    "slug": "newtown",
                },
                "Newington": {
                    "id": 5980,
                    "name": "Newington",
                    "slug": "newington",
                },
                "New Milford": {
                    "id": 5979,
                    "name": "New Milford",
                    "slug": "new-milford",
                },
                "New London": {
                    "id": 5978,
                    "name": "New London",
                    "slug": "new-london",
                },
                "New Haven": {
                    "id": 5977,
                    "name": "New Haven",
                    "slug": "new-haven",
                },
                "New Hartford": {
                    "id": 5976,
                    "name": "New Hartford",
                    "slug": "new-hartford",
                },
                "New Fairfield": {
                    "id": 5975,
                    "name": "New Fairfield",
                    "slug": "new-fairfield",
                },
                "New Canaan": {
                    "id": 5974,
                    "name": "New Canaan",
                    "slug": "new-canaan",
                },
                "New Britain": {
                    "id": 5973,
                    "name": "New Britain",
                    "slug": "new-britain",
                },
                "Naugatuck": {
                    "id": 5972,
                    "name": "Naugatuck",
                    "slug": "naugatuck",
                },
                "Morris": {
                    "id": 5971,
                    "name": "Morris",
                    "slug": "morris",
                },
                "Montville": {
                    "id": 5970,
                    "name": "Montville",
                    "slug": "montville",
                },
                "Monroe": {
                    "id": 5969,
                    "name": "Monroe",
                    "slug": "monroe-3",
                },
                "Milford": {
                    "id": 5968,
                    "name": "Milford",
                    "slug": "milford",
                },
                "Middletown": {
                    "id": 5967,
                    "name": "Middletown",
                    "slug": "middletown",
                },
                "Middlefield": {
                    "id": 5966,
                    "name": "Middlefield",
                    "slug": "middlefield",
                },
                "Middlebury": {
                    "id": 5965,
                    "name": "Middlebury",
                    "slug": "middlebury",
                },
                "Meriden": {
                    "id": 5964,
                    "name": "Meriden",
                    "slug": "meriden",
                },
                "Marlborough": {
                    "id": 5963,
                    "name": "Marlborough",
                    "slug": "marlborough",
                },
                "Mansfield": {
                    "id": 5962,
                    "name": "Mansfield",
                    "slug": "mansfield",
                },
                "Manchester": {
                    "id": 5961,
                    "name": "Manchester",
                    "slug": "manchester",
                },
                "Madison": {
                    "id": 5960,
                    "name": "Madison",
                    "slug": "madison-3",
                },
                "Lyme": {
                    "id": 5959,
                    "name": "Lyme",
                    "slug": "lyme",
                },
                "Litchfield": {
                    "id": 5958,
                    "name": "Litchfield",
                    "slug": "litchfield",
                },
                "Lisbon": {
                    "id": 5957,
                    "name": "Lisbon",
                    "slug": "lisbon",
                },
                "Ledyard": {
                    "id": 5956,
                    "name": "Ledyard",
                    "slug": "ledyard",
                },
                "Lebanon": {
                    "id": 5955,
                    "name": "Lebanon",
                    "slug": "lebanon",
                },
                "Killingworth": {
                    "id": 5954,
                    "name": "Killingworth",
                    "slug": "killingworth",
                },
                "Killingly": {
                    "id": 5953,
                    "name": "Killingly",
                    "slug": "killingly",
                },
                "Kent": {
                    "id": 5952,
                    "name": "Kent",
                    "slug": "kent",
                },
                "Hebron": {
                    "id": 5951,
                    "name": "Hebron",
                    "slug": "hebron",
                },
                "Harwinton": {
                    "id": 5950,
                    "name": "Harwinton",
                    "slug": "harwinton",
                },
                "Hartland": {
                    "id": 5949,
                    "name": "Hartland",
                    "slug": "hartland",
                },
                "Hartford": {
                    "id": 5948,
                    "name": "Hartford",
                    "slug": "hartford",
                },
                "Hampton": {
                    "id": 5947,
                    "name": "Hampton",
                    "slug": "hampton",
                },
                "Hamden": {
                    "id": 5946,
                    "name": "Hamden",
                    "slug": "hamden",
                },
                "Haddam": {
                    "id": 5945,
                    "name": "Haddam",
                    "slug": "haddam",
                },
                "Guilford": {
                    "id": 5944,
                    "name": "Guilford",
                    "slug": "guilford",
                },
                "Groton": {
                    "id": 5943,
                    "name": "Groton",
                    "slug": "groton",
                },
                "Griswold": {
                    "id": 5942,
                    "name": "Griswold",
                    "slug": "griswold",
                },
                "Greenwich": {
                    "id": 5941,
                    "name": "Greenwich",
                    "slug": "greenwich",
                },
                "Granby": {
                    "id": 5940,
                    "name": "Granby",
                    "slug": "granby",
                },
                "Goshen": {
                    "id": 5939,
                    "name": "Goshen",
                    "slug": "goshen",
                },
                "Glastonbury": {
                    "id": 5938,
                    "name": "Glastonbury",
                    "slug": "glastonbury",
                },
                "Franklin": {
                    "id": 5937,
                    "name": "Franklin",
                    "slug": "franklin-3",
                },
                "Farmington": {
                    "id": 5936,
                    "name": "Farmington",
                    "slug": "farmington",
                },
                "Fairfield": {
                    "id": 5935,
                    "name": "Fairfield",
                    "slug": "fairfield",
                },
                "Essex": {
                    "id": 5934,
                    "name": "Essex",
                    "slug": "essex",
                },
                "Enfield": {
                    "id": 5933,
                    "name": "Enfield",
                    "slug": "enfield",
                },
                "Ellington": {
                    "id": 5932,
                    "name": "Ellington",
                    "slug": "ellington",
                },
                "Easton": {
                    "id": 5931,
                    "name": "Easton",
                    "slug": "easton",
                },
                "Eastford": {
                    "id": 5930,
                    "name": "Eastford",
                    "slug": "eastford",
                },
                "East Windsor": {
                    "id": 5929,
                    "name": "East Windsor",
                    "slug": "east-windsor",
                },
                "East Lyme": {
                    "id": 5928,
                    "name": "East Lyme",
                    "slug": "east-lyme",
                },
                "East Haven": {
                    "id": 5927,
                    "name": "East Haven",
                    "slug": "east-haven",
                },
                "East Hartford": {
                    "id": 5926,
                    "name": "East Hartford",
                    "slug": "east-hartford",
                },
                "East Hampton": {
                    "id": 5925,
                    "name": "East Hampton",
                    "slug": "east-hampton",
                },
                "East Haddam": {
                    "id": 5924,
                    "name": "East Haddam",
                    "slug": "east-haddam",
                },
                "East Granby": {
                    "id": 5923,
                    "name": "East Granby",
                    "slug": "east-granby",
                },
                "Durham": {
                    "id": 5922,
                    "name": "Durham",
                    "slug": "durham",
                },
                "Derby": {
                    "id": 5921,
                    "name": "Derby",
                    "slug": "derby",
                },
                "Deep River": {
                    "id": 5920,
                    "name": "Deep River",
                    "slug": "deep-river",
                },
                "Darien": {
                    "id": 5919,
                    "name": "Darien",
                    "slug": "darien",
                },
                "Danbury": {
                    "id": 5918,
                    "name": "Danbury",
                    "slug": "danbury",
                },
                "Cromwell": {
                    "id": 5917,
                    "name": "Cromwell",
                    "slug": "cromwell",
                },
                "Coventry": {
                    "id": 5916,
                    "name": "Coventry",
                    "slug": "coventry",
                },
                "Cornwall": {
                    "id": 5915,
                    "name": "Cornwall",
                    "slug": "cornwall",
                },
                "Columbia": {
                    "id": 5914,
                    "name": "Columbia",
                    "slug": "columbia-2",
                },
                "Colebrook": {
                    "id": 5913,
                    "name": "Colebrook",
                    "slug": "colebrook",
                },
                "Colchester": {
                    "id": 5912,
                    "name": "Colchester",
                    "slug": "colchester",
                },
                "Clinton": {
                    "id": 5911,
                    "name": "Clinton",
                    "slug": "clinton",
                },
                "Chester": {
                    "id": 5910,
                    "name": "Chester",
                    "slug": "chester",
                },
                "Cheshire": {
                    "id": 5909,
                    "name": "Cheshire",
                    "slug": "cheshire",
                },
                "Chaplin": {
                    "id": 5908,
                    "name": "Chaplin",
                    "slug": "chaplin",
                },
                "Canton": {
                    "id": 5907,
                    "name": "Canton",
                    "slug": "canton",
                },
                "Canterbury": {
                    "id": 5906,
                    "name": "Canterbury",
                    "slug": "canterbury",
                },
                "Canaan": {
                    "id": 5905,
                    "name": "Canaan",
                    "slug": "canaan",
                },
                "Burlington": {
                    "id": 5904,
                    "name": "Burlington",
                    "slug": "burlington",
                },
                "": {
                    "id": 5903,
                    "name": "",
                    "slug": "brooklyn",
                },
                "Brookfield": {
                    "id": 5902,
                    "name": "Brookfield",
                    "slug": "brookfield",
                },
                "Bristol": {
                    "id": 5901,
                    "name": "Bristol",
                    "slug": "bristol",
                },
                "Bridgewater": {
                    "id": 5900,
                    "name": "Bridgewater",
                    "slug": "bridgewater",
                },
                "Bridgeport": {
                    "id": 5899,
                    "name": "Bridgeport",
                    "slug": "bridgeport",
                },
                "Branford": {
                    "id": 5898,
                    "name": "Branford",
                    "slug": "branford",
                },
                "Bozrah": {
                    "id": 5897,
                    "name": "Bozrah",
                    "slug": "bozrah",
                },
                "Bolton": {
                    "id": 5896,
                    "name": "Bolton",
                    "slug": "bolton",
                },
                "Bloomfield": {
                    "id": 5895,
                    "name": "Bloomfield",
                    "slug": "bloomfield",
                },
                "Bethlehem": {
                    "id": 5894,
                    "name": "Bethlehem",
                    "slug": "bethlehem",
                },
                "Bethel": {
                    "id": 5893,
                    "name": "Bethel",
                    "slug": "bethel",
                },
                "Bethany": {
                    "id": 5892,
                    "name": "Bethany",
                    "slug": "bethany",
                },
                "Berlin": {
                    "id": 5891,
                    "name": "Berlin",
                    "slug": "berlin",
                },
                "Beacon Falls": {
                    "id": 5890,
                    "name": "Beacon Falls",
                    "slug": "beacon-falls",
                },
                "Barkhamsted": {
                    "id": 5889,
                    "name": "Barkhamsted",
                    "slug": "barkhamsted",
                },
                "Avon": {
                    "id": 5888,
                    "name": "Avon",
                    "slug": "avon",
                },
                "Ashford": {
                    "id": 5887,
                    "name": "Ashford",
                    "slug": "ashford",
                },
                "Ansonia": {
                    "id": 5886,
                    "name": "Ansonia",
                    "slug": "ansonia",
                },
                "Andover": {
                    "id": 5885,
                    "name": "Andover",
                    "slug": "andover",
                },
            },
            "counties": {},
        },
    },
    "DE": {
        "id": 37,
        "name": "Delaware",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Kent": {
                    "id": 6056,
                    "name": "Kent",
                    "slug": "kent-2",
                },
                "New Castle": {
                    "id": 6055,
                    "name": "New Castle",
                    "slug": "new-castle",
                },
                "Sussex": {
                    "id": 6054,
                    "name": "Sussex",
                    "slug": "sussex",
                },
            },
        },
    },
    "DC": {
        "id": 38,
        "name": "District of Columbia",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {
                "Washington": {
                    "id": 6057,
                    "name": "Washington",
                    "slug": "washington-5",
                },
            },
            "counties": {},
        },
    },
    "FL": {
        "id": 39,
        "name": "Florida",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Washington": {
                    "id": 6124,
                    "name": "Washington",
                    "slug": "washington-6",
                },
                "Walton": {
                    "id": 6123,
                    "name": "Walton",
                    "slug": "walton",
                },
                "Wakulla": {
                    "id": 6122,
                    "name": "Wakulla",
                    "slug": "wakulla",
                },
                "Volusia": {
                    "id": 6121,
                    "name": "Volusia",
                    "slug": "volusia",
                },
                "Union": {
                    "id": 6120,
                    "name": "Union",
                    "slug": "union-3",
                },
                "Taylor": {
                    "id": 6119,
                    "name": "Taylor",
                    "slug": "taylor",
                },
                "Suwannee": {
                    "id": 6118,
                    "name": "Suwannee",
                    "slug": "suwannee",
                },
                "Sumter": {
                    "id": 6117,
                    "name": "Sumter",
                    "slug": "sumter-2",
                },
                "St. Lucie": {
                    "id": 6116,
                    "name": "St. Lucie",
                    "slug": "st-lucie",
                },
                "St. Johns": {
                    "id": 6115,
                    "name": "St. Johns",
                    "slug": "st-johns",
                },
                "Seminole": {
                    "id": 6114,
                    "name": "Seminole",
                    "slug": "seminole",
                },
                "Sarasota": {
                    "id": 6113,
                    "name": "Sarasota",
                    "slug": "sarasota",
                },
                "Santa Rosa": {
                    "id": 6112,
                    "name": "Santa Rosa",
                    "slug": "santa-rosa",
                },
                "Putnam": {
                    "id": 6111,
                    "name": "Putnam",
                    "slug": "putnam-2",
                },
                "Polk": {
                    "id": 6110,
                    "name": "Polk",
                    "slug": "polk-2",
                },
                "Pinellas": {
                    "id": 6109,
                    "name": "Pinellas",
                    "slug": "pinellas",
                },
                "Pasco": {
                    "id": 6108,
                    "name": "Pasco",
                    "slug": "pasco",
                },
                "Palm Beach": {
                    "id": 6107,
                    "name": "Palm Beach",
                    "slug": "palm-beach",
                },
                "Osceola": {
                    "id": 6106,
                    "name": "Osceola",
                    "slug": "osceola",
                },
                "Orange": {
                    "id": 6105,
                    "name": "Orange",
                    "slug": "orange-3",
                },
                "Okeechobee": {
                    "id": 6104,
                    "name": "Okeechobee",
                    "slug": "okeechobee",
                },
                "Okaloosa": {
                    "id": 6103,
                    "name": "Okaloosa",
                    "slug": "okaloosa",
                },
                "Nassau": {
                    "id": 6102,
                    "name": "Nassau",
                    "slug": "nassau",
                },
                "Monroe": {
                    "id": 6101,
                    "name": "Monroe",
                    "slug": "monroe-4",
                },
                "Miami-Dade": {
                    "id": 6100,
                    "name": "Miami-Dade",
                    "slug": "miami-dade",
                },
                "Martin": {
                    "id": 6099,
                    "name": "Martin",
                    "slug": "martin",
                },
                "Marion": {
                    "id": 6098,
                    "name": "Marion",
                    "slug": "marion-3",
                },
                "Manatee": {
                    "id": 6097,
                    "name": "Manatee",
                    "slug": "manatee",
                },
                "Madison": {
                    "id": 6096,
                    "name": "Madison",
                    "slug": "madison-4",
                },
                "Liberty": {
                    "id": 6095,
                    "name": "Liberty",
                    "slug": "liberty",
                },
                "Levy": {
                    "id": 6094,
                    "name": "Levy",
                    "slug": "levy",
                },
                "Leon": {
                    "id": 6093,
                    "name": "Leon",
                    "slug": "leon",
                },
                "Lee": {
                    "id": 6092,
                    "name": "Lee",
                    "slug": "lee-3",
                },
                "Lake": {
                    "id": 6091,
                    "name": "Lake",
                    "slug": "lake-3",
                },
                "Lafayette": {
                    "id": 6090,
                    "name": "Lafayette",
                    "slug": "lafayette-2",
                },
                "Jefferson": {
                    "id": 6089,
                    "name": "Jefferson",
                    "slug": "jefferson-4",
                },
                "Jackson": {
                    "id": 6088,
                    "name": "Jackson",
                    "slug": "jackson-4",
                },
                "Indian River": {
                    "id": 6087,
                    "name": "Indian River",
                    "slug": "indian-river",
                },
                "Holmes": {
                    "id": 6086,
                    "name": "Holmes",
                    "slug": "holmes",
                },
                "Hillsborough": {
                    "id": 6085,
                    "name": "Hillsborough",
                    "slug": "hillsborough",
                },
                "Highlands": {
                    "id": 6084,
                    "name": "Highlands",
                    "slug": "highlands",
                },
                "Hernando": {
                    "id": 6083,
                    "name": "Hernando",
                    "slug": "hernando",
                },
                "Hendry": {
                    "id": 6082,
                    "name": "Hendry",
                    "slug": "hendry",
                },
                "Hardee": {
                    "id": 6081,
                    "name": "Hardee",
                    "slug": "hardee",
                },
                "Hamilton": {
                    "id": 6080,
                    "name": "Hamilton",
                    "slug": "hamilton",
                },
                "Gulf": {
                    "id": 6079,
                    "name": "Gulf",
                    "slug": "gulf",
                },
                "Glades": {
                    "id": 6078,
                    "name": "Glades",
                    "slug": "glades",
                },
                "Gilchrist": {
                    "id": 6077,
                    "name": "Gilchrist",
                    "slug": "gilchrist",
                },
                "Gadsden": {
                    "id": 6076,
                    "name": "Gadsden",
                    "slug": "gadsden",
                },
                "Franklin": {
                    "id": 6075,
                    "name": "Franklin",
                    "slug": "franklin-4",
                },
                "Flagler": {
                    "id": 6074,
                    "name": "Flagler",
                    "slug": "flagler",
                },
                "Escambia": {
                    "id": 6073,
                    "name": "Escambia",
                    "slug": "escambia-2",
                },
                "Duval": {
                    "id": 6072,
                    "name": "Duval",
                    "slug": "duval",
                },
                "Dixie": {
                    "id": 6071,
                    "name": "Dixie",
                    "slug": "dixie",
                },
                "DeSoto": {
                    "id": 6070,
                    "name": "DeSoto",
                    "slug": "desoto",
                },
                "Columbia": {
                    "id": 6069,
                    "name": "Columbia",
                    "slug": "columbia-3",
                },
                "Collier": {
                    "id": 6068,
                    "name": "Collier",
                    "slug": "collier",
                },
                "Clay": {
                    "id": 6067,
                    "name": "Clay",
                    "slug": "clay-3",
                },
                "Citrus": {
                    "id": 6066,
                    "name": "Citrus",
                    "slug": "citrus",
                },
                "Charlotte": {
                    "id": 6065,
                    "name": "Charlotte",
                    "slug": "charlotte",
                },
                "Calhoun": {
                    "id": 6064,
                    "name": "Calhoun",
                    "slug": "calhoun-3",
                },
                "Broward": {
                    "id": 6063,
                    "name": "Broward",
                    "slug": "broward",
                },
                "Brevard": {
                    "id": 6062,
                    "name": "Brevard",
                    "slug": "brevard",
                },
                "Bradford": {
                    "id": 6061,
                    "name": "Bradford",
                    "slug": "bradford",
                },
                "Bay": {
                    "id": 6060,
                    "name": "Bay",
                    "slug": "bay",
                },
                "Baker": {
                    "id": 6059,
                    "name": "Baker",
                    "slug": "baker",
                },
                "Alachua": {
                    "id": 6058,
                    "name": "Alachua",
                    "slug": "alachua",
                },
            },
        },
    },
    "GA": {
        "id": 40,
        "name": "Georgia",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Taylor": {
                    "id": 6283,
                    "name": "Taylor",
                    "slug": "taylor-2",
                },
                "Charlton": {
                    "id": 6282,
                    "name": "Charlton",
                    "slug": "charlton",
                },
                "Oglethorpe": {
                    "id": 6281,
                    "name": "Oglethorpe",
                    "slug": "oglethorpe",
                },
                "Elbert": {
                    "id": 6280,
                    "name": "Elbert",
                    "slug": "elbert-2",
                },
                "Wheeler": {
                    "id": 6279,
                    "name": "Wheeler",
                    "slug": "wheeler",
                },
                "Long": {
                    "id": 6278,
                    "name": "Long",
                    "slug": "long",
                },
                "Camden": {
                    "id": 6277,
                    "name": "Camden",
                    "slug": "camden",
                },
                "Newton": {
                    "id": 6276,
                    "name": "Newton",
                    "slug": "newton-2",
                },
                "Greene": {
                    "id": 6275,
                    "name": "Greene",
                    "slug": "greene-3",
                },
                "Wilcox": {
                    "id": 6274,
                    "name": "Wilcox",
                    "slug": "wilcox-2",
                },
                "Montgomery": {
                    "id": 6273,
                    "name": "Montgomery",
                    "slug": "montgomery-3",
                },
                "Fulton": {
                    "id": 6272,
                    "name": "Fulton",
                    "slug": "fulton-2",
                },
                "Telfair": {
                    "id": 6271,
                    "name": "Telfair",
                    "slug": "telfair",
                },
                "Hancock": {
                    "id": 6270,
                    "name": "Hancock",
                    "slug": "hancock",
                },
                "Meriwether": {
                    "id": 6269,
                    "name": "Meriwether",
                    "slug": "meriwether",
                },
                "Franklin": {
                    "id": 6268,
                    "name": "Franklin",
                    "slug": "franklin-5",
                },
                "Glascock": {
                    "id": 6267,
                    "name": "Glascock",
                    "slug": "glascock",
                },
                "Dougherty": {
                    "id": 6266,
                    "name": "Dougherty",
                    "slug": "dougherty",
                },
                "Cobb": {
                    "id": 6265,
                    "name": "Cobb",
                    "slug": "cobb",
                },
                "Brantley": {
                    "id": 6264,
                    "name": "Brantley",
                    "slug": "brantley",
                },
                "Walton": {
                    "id": 6263,
                    "name": "Walton",
                    "slug": "walton-2",
                },
                "Terrell": {
                    "id": 6262,
                    "name": "Terrell",
                    "slug": "terrell",
                },
                "Towns": {
                    "id": 6261,
                    "name": "Towns",
                    "slug": "towns",
                },
                "Irwin": {
                    "id": 6260,
                    "name": "Irwin",
                    "slug": "irwin",
                },
                "Douglas": {
                    "id": 6259,
                    "name": "Douglas",
                    "slug": "douglas-2",
                },
                "Decatur": {
                    "id": 6258,
                    "name": "Decatur",
                    "slug": "decatur",
                },
                "Carroll": {
                    "id": 6257,
                    "name": "Carroll",
                    "slug": "carroll-2",
                },
                "Bacon": {
                    "id": 6256,
                    "name": "Bacon",
                    "slug": "bacon",
                },
                "Lanier": {
                    "id": 6255,
                    "name": "Lanier",
                    "slug": "lanier",
                },
                "Grady": {
                    "id": 6254,
                    "name": "Grady",
                    "slug": "grady",
                },
                "Ben Hill": {
                    "id": 6253,
                    "name": "Ben Hill",
                    "slug": "ben-hill",
                },
                "Crisp": {
                    "id": 6252,
                    "name": "Crisp",
                    "slug": "crisp",
                },
                "Rockdale": {
                    "id": 6251,
                    "name": "Rockdale",
                    "slug": "rockdale",
                },
                "Glynn": {
                    "id": 6250,
                    "name": "Glynn",
                    "slug": "glynn",
                },
                "Tift": {
                    "id": 6249,
                    "name": "Tift",
                    "slug": "tift",
                },
                "Seminole": {
                    "id": 6248,
                    "name": "Seminole",
                    "slug": "seminole-2",
                },
                "Paulding": {
                    "id": 6247,
                    "name": "Paulding",
                    "slug": "paulding",
                },
                "Macon": {
                    "id": 6246,
                    "name": "Macon",
                    "slug": "macon-2",
                },
                "Jenkins": {
                    "id": 6245,
                    "name": "Jenkins",
                    "slug": "jenkins",
                },
                "Crawford": {
                    "id": 6244,
                    "name": "Crawford",
                    "slug": "crawford-2",
                },
                "Worth": {
                    "id": 6243,
                    "name": "Worth",
                    "slug": "worth",
                },
                "Webster": {
                    "id": 6242,
                    "name": "Webster",
                    "slug": "webster",
                },
                "Ware": {
                    "id": 6241,
                    "name": "Ware",
                    "slug": "ware",
                },
                "Upson": {
                    "id": 6240,
                    "name": "Upson",
                    "slug": "upson",
                },
                "Troup": {
                    "id": 6239,
                    "name": "Troup",
                    "slug": "troup",
                },
                "Thomas": {
                    "id": 6238,
                    "name": "Thomas",
                    "slug": "thomas",
                },
                "Stewart": {
                    "id": 6237,
                    "name": "Stewart",
                    "slug": "stewart",
                },
                "Spalding": {
                    "id": 6236,
                    "name": "Spalding",
                    "slug": "spalding",
                },
                "Schley": {
                    "id": 6235,
                    "name": "Schley",
                    "slug": "schley",
                },
                "Pulaski": {
                    "id": 6234,
                    "name": "Pulaski",
                    "slug": "pulaski-2",
                },
                "Pike": {
                    "id": 6233,
                    "name": "Pike",
                    "slug": "pike-3",
                },
                "Peach": {
                    "id": 6232,
                    "name": "Peach",
                    "slug": "peach",
                },
                "Morgan": {
                    "id": 6231,
                    "name": "Morgan",
                    "slug": "morgan-3",
                },
                "Monroe": {
                    "id": 6230,
                    "name": "Monroe",
                    "slug": "monroe-5",
                },
                "Miller": {
                    "id": 6229,
                    "name": "Miller",
                    "slug": "miller-2",
                },
                "Lumpkin": {
                    "id": 6228,
                    "name": "Lumpkin",
                    "slug": "lumpkin",
                },
                "Lee": {
                    "id": 6227,
                    "name": "Lee",
                    "slug": "lee-4",
                },
                "Jeff Davis": {
                    "id": 6226,
                    "name": "Jeff Davis",
                    "slug": "jeff-davis",
                },
                "Hart": {
                    "id": 6225,
                    "name": "Hart",
                    "slug": "hart",
                },
                "Candler": {
                    "id": 6224,
                    "name": "Candler",
                    "slug": "candler",
                },
                "Butts": {
                    "id": 6223,
                    "name": "Butts",
                    "slug": "butts",
                },
                "Bartow": {
                    "id": 6222,
                    "name": "Bartow",
                    "slug": "bartow",
                },
                "Gordon": {
                    "id": 6221,
                    "name": "Gordon",
                    "slug": "gordon",
                },
                "Floyd": {
                    "id": 6220,
                    "name": "Floyd",
                    "slug": "floyd",
                },
                "Banks": {
                    "id": 6219,
                    "name": "Banks",
                    "slug": "banks",
                },
                "Evans": {
                    "id": 6218,
                    "name": "Evans",
                    "slug": "evans",
                },
                "Echols": {
                    "id": 6217,
                    "name": "Echols",
                    "slug": "echols",
                },
                "Early": {
                    "id": 6216,
                    "name": "Early",
                    "slug": "early",
                },
                "Dodge": {
                    "id": 6215,
                    "name": "Dodge",
                    "slug": "dodge",
                },
                "Lamar": {
                    "id": 6214,
                    "name": "Lamar",
                    "slug": "lamar-2",
                },
                "DeKalb": {
                    "id": 6213,
                    "name": "DeKalb",
                    "slug": "dekalb-2",
                },
                "Dawson": {
                    "id": 6212,
                    "name": "Dawson",
                    "slug": "dawson",
                },
                "Colquitt": {
                    "id": 6211,
                    "name": "Colquitt",
                    "slug": "colquitt",
                },
                "Clinch": {
                    "id": 6210,
                    "name": "Clinch",
                    "slug": "clinch",
                },
                "Clay": {
                    "id": 6209,
                    "name": "Clay",
                    "slug": "clay-4",
                },
                "Cherokee": {
                    "id": 6208,
                    "name": "Cherokee",
                    "slug": "cherokee-2",
                },
                "Chattooga": {
                    "id": 6207,
                    "name": "Chattooga",
                    "slug": "chattooga",
                },
                "Laurens": {
                    "id": 6206,
                    "name": "Laurens",
                    "slug": "laurens",
                },
                "Johnson": {
                    "id": 6205,
                    "name": "Johnson",
                    "slug": "johnson-2",
                },
                "Catoosa": {
                    "id": 6204,
                    "name": "Catoosa",
                    "slug": "catoosa",
                },
                "Walker": {
                    "id": 6203,
                    "name": "Walker",
                    "slug": "walker-2",
                },
                "Turner": {
                    "id": 6202,
                    "name": "Turner",
                    "slug": "turner",
                },
                "Stephens": {
                    "id": 6201,
                    "name": "Stephens",
                    "slug": "stephens",
                },
                "Randolph": {
                    "id": 6200,
                    "name": "Randolph",
                    "slug": "randolph-3",
                },
                "Quitman": {
                    "id": 6199,
                    "name": "Quitman",
                    "slug": "quitman",
                },
                "Polk": {
                    "id": 6198,
                    "name": "Polk",
                    "slug": "polk-3",
                },
                "Marion": {
                    "id": 6197,
                    "name": "Marion",
                    "slug": "marion-4",
                },
                "Jones": {
                    "id": 6196,
                    "name": "Jones",
                    "slug": "jones",
                },
                "Jasper": {
                    "id": 6195,
                    "name": "Jasper",
                    "slug": "jasper",
                },
                "Harris": {
                    "id": 6194,
                    "name": "Harris",
                    "slug": "harris",
                },
                "Forsyth": {
                    "id": 6193,
                    "name": "Forsyth",
                    "slug": "forsyth",
                },
                "Clarke": {
                    "id": 6192,
                    "name": "Clarke",
                    "slug": "clarke-2",
                },
                "Chattahoochee": {
                    "id": 6191,
                    "name": "Chattahoochee",
                    "slug": "chattahoochee",
                },
                "Calhoun": {
                    "id": 6190,
                    "name": "Calhoun",
                    "slug": "calhoun-4",
                },
                "Bleckley": {
                    "id": 6189,
                    "name": "Bleckley",
                    "slug": "bleckley",
                },
                "Atkinson": {
                    "id": 6188,
                    "name": "Atkinson",
                    "slug": "atkinson",
                },
                "Fannin": {
                    "id": 6187,
                    "name": "Fannin",
                    "slug": "fannin",
                },
                "Dooly": {
                    "id": 6186,
                    "name": "Dooly",
                    "slug": "dooly",
                },
                "Dade": {
                    "id": 6185,
                    "name": "Dade",
                    "slug": "dade",
                },
                "Coffee": {
                    "id": 6184,
                    "name": "Coffee",
                    "slug": "coffee-2",
                },
                "Clayton": {
                    "id": 6183,
                    "name": "Clayton",
                    "slug": "clayton",
                },
                "Rabun": {
                    "id": 6182,
                    "name": "Rabun",
                    "slug": "rabun",
                },
                "Jackson": {
                    "id": 6181,
                    "name": "Jackson",
                    "slug": "jackson-5",
                },
                "Coweta": {
                    "id": 6180,
                    "name": "Coweta",
                    "slug": "coweta",
                },
                "Bulloch": {
                    "id": 6179,
                    "name": "Bulloch",
                    "slug": "bulloch",
                },
                "Berrien": {
                    "id": 6178,
                    "name": "Berrien",
                    "slug": "berrien",
                },
                "Putnam": {
                    "id": 6177,
                    "name": "Putnam",
                    "slug": "putnam-3",
                },
                "Murray": {
                    "id": 6176,
                    "name": "Murray",
                    "slug": "murray",
                },
                "Lowndes": {
                    "id": 6175,
                    "name": "Lowndes",
                    "slug": "lowndes-2",
                },
                "Houston": {
                    "id": 6174,
                    "name": "Houston",
                    "slug": "houston-2",
                },
                "Oconee": {
                    "id": 6173,
                    "name": "Oconee",
                    "slug": "oconee",
                },
                "Burke": {
                    "id": 6172,
                    "name": "Burke",
                    "slug": "burke",
                },
                "Taliaferro": {
                    "id": 6171,
                    "name": "Taliaferro",
                    "slug": "taliaferro",
                },
                "Emanuel": {
                    "id": 6170,
                    "name": "Emanuel",
                    "slug": "emanuel",
                },
                "Warren": {
                    "id": 6169,
                    "name": "Warren",
                    "slug": "warren-2",
                },
                "Talbot": {
                    "id": 6168,
                    "name": "Talbot",
                    "slug": "talbot",
                },
                "Muscogee": {
                    "id": 6167,
                    "name": "Muscogee",
                    "slug": "muscogee",
                },
                "Washington": {
                    "id": 6166,
                    "name": "Washington",
                    "slug": "washington-7",
                },
                "Screven": {
                    "id": 6165,
                    "name": "Screven",
                    "slug": "screven",
                },
                "Jefferson": {
                    "id": 6164,
                    "name": "Jefferson",
                    "slug": "jefferson-5",
                },
                "Baker": {
                    "id": 6163,
                    "name": "Baker",
                    "slug": "baker-2",
                },
                "White": {
                    "id": 6162,
                    "name": "White",
                    "slug": "white-2",
                },
                "Gwinnett": {
                    "id": 6161,
                    "name": "Gwinnett",
                    "slug": "gwinnett",
                },
                "Appling": {
                    "id": 6160,
                    "name": "Appling",
                    "slug": "appling",
                },
                "Wilkes": {
                    "id": 6159,
                    "name": "Wilkes",
                    "slug": "wilkes",
                },
                "Whitfield": {
                    "id": 6158,
                    "name": "Whitfield",
                    "slug": "whitfield",
                },
                "Twiggs": {
                    "id": 6157,
                    "name": "Twiggs",
                    "slug": "twiggs",
                },
                "Treutlen": {
                    "id": 6156,
                    "name": "Treutlen",
                    "slug": "treutlen",
                },
                "Toombs": {
                    "id": 6155,
                    "name": "Toombs",
                    "slug": "toombs",
                },
                "Sumter": {
                    "id": 6154,
                    "name": "Sumter",
                    "slug": "sumter-3",
                },
                "Richmond": {
                    "id": 6153,
                    "name": "Richmond",
                    "slug": "richmond",
                },
                "Pickens": {
                    "id": 6152,
                    "name": "Pickens",
                    "slug": "pickens-2",
                },
                "Madison": {
                    "id": 6151,
                    "name": "Madison",
                    "slug": "madison-5",
                },
                "McIntosh": {
                    "id": 6150,
                    "name": "McIntosh",
                    "slug": "mcintosh",
                },
                "Lincoln": {
                    "id": 6149,
                    "name": "Lincoln",
                    "slug": "lincoln-3",
                },
                "Henry": {
                    "id": 6148,
                    "name": "Henry",
                    "slug": "henry-2",
                },
                "Haralson": {
                    "id": 6147,
                    "name": "Haralson",
                    "slug": "haralson",
                },
                "Hall": {
                    "id": 6146,
                    "name": "Hall",
                    "slug": "hall",
                },
                "Habersham": {
                    "id": 6145,
                    "name": "Habersham",
                    "slug": "habersham",
                },
                "Gilmer": {
                    "id": 6144,
                    "name": "Gilmer",
                    "slug": "gilmer",
                },
                "Fayette": {
                    "id": 6143,
                    "name": "Fayette",
                    "slug": "fayette-2",
                },
                "Cook": {
                    "id": 6142,
                    "name": "Cook",
                    "slug": "cook",
                },
                "Chatham": {
                    "id": 6141,
                    "name": "Chatham",
                    "slug": "chatham",
                },
                "Bryan": {
                    "id": 6140,
                    "name": "Bryan",
                    "slug": "bryan",
                },
                "Bibb": {
                    "id": 6139,
                    "name": "Bibb",
                    "slug": "bibb-2",
                },
                "Wilkinson": {
                    "id": 6138,
                    "name": "Wilkinson",
                    "slug": "wilkinson",
                },
                "Wayne": {
                    "id": 6137,
                    "name": "Wayne",
                    "slug": "wayne",
                },
                "Union": {
                    "id": 6136,
                    "name": "Union",
                    "slug": "union-4",
                },
                "Tattnall": {
                    "id": 6135,
                    "name": "Tattnall",
                    "slug": "tattnall",
                },
                "Pierce": {
                    "id": 6134,
                    "name": "Pierce",
                    "slug": "pierce",
                },
                "Mitchell": {
                    "id": 6133,
                    "name": "Mitchell",
                    "slug": "mitchell",
                },
                "McDuffie": {
                    "id": 6132,
                    "name": "McDuffie",
                    "slug": "mcduffie",
                },
                "Liberty": {
                    "id": 6131,
                    "name": "Liberty",
                    "slug": "liberty-2",
                },
                "Heard": {
                    "id": 6130,
                    "name": "Heard",
                    "slug": "heard",
                },
                "Effingham": {
                    "id": 6129,
                    "name": "Effingham",
                    "slug": "effingham",
                },
                "Columbia": {
                    "id": 6128,
                    "name": "Columbia",
                    "slug": "columbia-4",
                },
                "Brooks": {
                    "id": 6127,
                    "name": "Brooks",
                    "slug": "brooks",
                },
                "Barrow": {
                    "id": 6126,
                    "name": "Barrow",
                    "slug": "barrow",
                },
                "Baldwin": {
                    "id": 6125,
                    "name": "Baldwin",
                    "slug": "baldwin-2",
                },
            },
        },
    },
    "HI": {
        "id": 41,
        "name": "Hawaii",
        "has_all_mail_elections": true,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Kalawao": {
                    "id": 6288,
                    "name": "Kalawao",
                    "slug": "kalawao",
                },
                "Honolulu": {
                    "id": 6287,
                    "name": "Honolulu",
                    "slug": "honolulu",
                },
                "Maui": {
                    "id": 6286,
                    "name": "Maui",
                    "slug": "maui",
                },
                "Hawaii": {
                    "id": 6285,
                    "name": "Hawaii",
                    "slug": "hawaii",
                },
                "Kauai": {
                    "id": 6284,
                    "name": "Kauai",
                    "slug": "kauai",
                },
            },
        },
    },
    "ID": {
        "id": 42,
        "name": "Idaho",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Adams": {
                    "id": 6332,
                    "name": "Adams",
                    "slug": "adams-2",
                },
                "Blaine": {
                    "id": 6331,
                    "name": "Blaine",
                    "slug": "blaine",
                },
                "Butte": {
                    "id": 6330,
                    "name": "Butte",
                    "slug": "butte-2",
                },
                "Idaho": {
                    "id": 6329,
                    "name": "Idaho",
                    "slug": "idaho",
                },
                "Camas": {
                    "id": 6328,
                    "name": "Camas",
                    "slug": "camas",
                },
                "Bonner": {
                    "id": 6327,
                    "name": "Bonner",
                    "slug": "bonner",
                },
                "Latah": {
                    "id": 6326,
                    "name": "Latah",
                    "slug": "latah",
                },
                "Minidoka": {
                    "id": 6325,
                    "name": "Minidoka",
                    "slug": "minidoka",
                },
                "Bingham": {
                    "id": 6324,
                    "name": "Bingham",
                    "slug": "bingham",
                },
                "Kootenai": {
                    "id": 6323,
                    "name": "Kootenai",
                    "slug": "kootenai",
                },
                "Gooding": {
                    "id": 6322,
                    "name": "Gooding",
                    "slug": "gooding",
                },
                "Teton": {
                    "id": 6321,
                    "name": "Teton",
                    "slug": "teton",
                },
                "Oneida": {
                    "id": 6320,
                    "name": "Oneida",
                    "slug": "oneida",
                },
                "Lincoln": {
                    "id": 6319,
                    "name": "Lincoln",
                    "slug": "lincoln-4",
                },
                "Jerome": {
                    "id": 6318,
                    "name": "Jerome",
                    "slug": "jerome",
                },
                "Ada": {
                    "id": 6317,
                    "name": "Ada",
                    "slug": "ada",
                },
                "Payette": {
                    "id": 6316,
                    "name": "Payette",
                    "slug": "payette",
                },
                "Benewah": {
                    "id": 6315,
                    "name": "Benewah",
                    "slug": "benewah",
                },
                "Madison": {
                    "id": 6314,
                    "name": "Madison",
                    "slug": "madison-6",
                },
                "Jefferson": {
                    "id": 6313,
                    "name": "Jefferson",
                    "slug": "jefferson-6",
                },
                "Gem": {
                    "id": 6312,
                    "name": "Gem",
                    "slug": "gem",
                },
                "Clark": {
                    "id": 6311,
                    "name": "Clark",
                    "slug": "clark-2",
                },
                "Boundary": {
                    "id": 6310,
                    "name": "Boundary",
                    "slug": "boundary",
                },
                "Bonneville": {
                    "id": 6309,
                    "name": "Bonneville",
                    "slug": "bonneville",
                },
                "Caribou": {
                    "id": 6308,
                    "name": "Caribou",
                    "slug": "caribou",
                },
                "Nez Perce": {
                    "id": 6307,
                    "name": "Nez Perce",
                    "slug": "nez-perce",
                },
                "Clearwater": {
                    "id": 6306,
                    "name": "Clearwater",
                    "slug": "clearwater",
                },
                "Bear Lake": {
                    "id": 6305,
                    "name": "Bear Lake",
                    "slug": "bear-lake",
                },
                "Cassia": {
                    "id": 6304,
                    "name": "Cassia",
                    "slug": "cassia__trashed",
                },
                "Shoshone": {
                    "id": 6303,
                    "name": "Shoshone",
                    "slug": "shoshone",
                },
                "Franklin": {
                    "id": 6302,
                    "name": "Franklin",
                    "slug": "franklin-6",
                },
                "Washington": {
                    "id": 6301,
                    "name": "Washington",
                    "slug": "washington-8",
                },
                "Power": {
                    "id": 6300,
                    "name": "Power",
                    "slug": "power",
                },
                "Owyhee": {
                    "id": 6299,
                    "name": "Owyhee",
                    "slug": "owyhee",
                },
                "Lemhi": {
                    "id": 6298,
                    "name": "Lemhi",
                    "slug": "lemhi",
                },
                "Bannock": {
                    "id": 6297,
                    "name": "Bannock",
                    "slug": "bannock",
                },
                "Valley": {
                    "id": 6296,
                    "name": "Valley",
                    "slug": "valley",
                },
                "Twin Falls": {
                    "id": 6295,
                    "name": "Twin Falls",
                    "slug": "twin-falls",
                },
                "Lewis": {
                    "id": 6294,
                    "name": "Lewis",
                    "slug": "lewis",
                },
                "Fremont": {
                    "id": 6293,
                    "name": "Fremont",
                    "slug": "fremont-2",
                },
                "Elmore": {
                    "id": 6292,
                    "name": "Elmore",
                    "slug": "elmore-2",
                },
                "Custer": {
                    "id": 6291,
                    "name": "Custer",
                    "slug": "custer-2",
                },
                "Canyon": {
                    "id": 6290,
                    "name": "Canyon",
                    "slug": "canyon",
                },
                "Boise": {
                    "id": 6289,
                    "name": "Boise",
                    "slug": "boise",
                },
            },
        },
    },
    "IL": {
        "id": 43,
        "name": "Illinois",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {
                "Rockford": {
                    "id": 6440,
                    "name": "Rockford",
                    "slug": "rockford",
                },
                "Galesburg": {
                    "id": 6439,
                    "name": "Galesburg",
                    "slug": "galesburg",
                },
                "East St. Louis": {
                    "id": 6438,
                    "name": "East St. Louis",
                    "slug": "east-st-louis",
                },
                "Danville": {
                    "id": 6437,
                    "name": "Danville",
                    "slug": "danville",
                },
                "Bloomington": {
                    "id": 6436,
                    "name": "Bloomington",
                    "slug": "bloomington",
                },
                "Chicago": {
                    "id": 6435,
                    "name": "Chicago",
                    "slug": "chicago",
                },
            },
            "counties": {
                "Pulaski": {
                    "id": 6434,
                    "name": "Pulaski",
                    "slug": "pulaski-3",
                },
                "Jefferson": {
                    "id": 6433,
                    "name": "Jefferson",
                    "slug": "jefferson-7",
                },
                "Rock Island": {
                    "id": 6432,
                    "name": "Rock Island",
                    "slug": "rock-island",
                },
                "DuPage": {
                    "id": 6431,
                    "name": "DuPage",
                    "slug": "dupage",
                },
                "Putnam": {
                    "id": 6430,
                    "name": "Putnam",
                    "slug": "putnam-4",
                },
                "Madison": {
                    "id": 6429,
                    "name": "Madison",
                    "slug": "madison-7",
                },
                "Schuyler": {
                    "id": 6428,
                    "name": "Schuyler",
                    "slug": "schuyler",
                },
                "Jasper": {
                    "id": 6427,
                    "name": "Jasper",
                    "slug": "jasper-2",
                },
                "Edgar": {
                    "id": 6426,
                    "name": "Edgar",
                    "slug": "edgar",
                },
                "Winnebago": {
                    "id": 6425,
                    "name": "Winnebago",
                    "slug": "winnebago",
                },
                "Williamson": {
                    "id": 6424,
                    "name": "Williamson",
                    "slug": "williamson",
                },
                "Peoria": {
                    "id": 6423,
                    "name": "Peoria",
                    "slug": "peoria",
                },
                "Massac": {
                    "id": 6422,
                    "name": "Massac",
                    "slug": "massac",
                },
                "Kendall": {
                    "id": 6421,
                    "name": "Kendall",
                    "slug": "kendall",
                },
                "Hamilton": {
                    "id": 6420,
                    "name": "Hamilton",
                    "slug": "hamilton-2",
                },
                "Boone": {
                    "id": 6419,
                    "name": "Boone",
                    "slug": "boone-2",
                },
                "DeKalb": {
                    "id": 6418,
                    "name": "DeKalb",
                    "slug": "dekalb-3",
                },
                "Lawrence": {
                    "id": 6417,
                    "name": "Lawrence",
                    "slug": "lawrence-3",
                },
                "Cumberland": {
                    "id": 6416,
                    "name": "Cumberland",
                    "slug": "cumberland",
                },
                "White": {
                    "id": 6415,
                    "name": "White",
                    "slug": "white-3",
                },
                "Moultrie": {
                    "id": 6414,
                    "name": "Moultrie",
                    "slug": "moultrie",
                },
                "McHenry": {
                    "id": 6413,
                    "name": "McHenry",
                    "slug": "mchenry",
                },
                "Jersey": {
                    "id": 6412,
                    "name": "Jersey",
                    "slug": "jersey",
                },
                "Effingham": {
                    "id": 6411,
                    "name": "Effingham",
                    "slug": "effingham-2",
                },
                "Clay": {
                    "id": 6410,
                    "name": "Clay",
                    "slug": "clay-5",
                },
                "St. Clair": {
                    "id": 6409,
                    "name": "St. Clair",
                    "slug": "st-clair-2",
                },
                "Johnson": {
                    "id": 6408,
                    "name": "Johnson",
                    "slug": "johnson-3",
                },
                "De Witt": {
                    "id": 6407,
                    "name": "De Witt",
                    "slug": "de-witt",
                },
                "Adams": {
                    "id": 6406,
                    "name": "Adams",
                    "slug": "adams-3",
                },
                "Macoupin": {
                    "id": 6405,
                    "name": "Macoupin",
                    "slug": "macoupin",
                },
                "Knox": {
                    "id": 6404,
                    "name": "Knox",
                    "slug": "knox",
                },
                "Jackson": {
                    "id": 6403,
                    "name": "Jackson",
                    "slug": "jackson-6",
                },
                "Kane": {
                    "id": 6402,
                    "name": "Kane",
                    "slug": "kane",
                },
                "Jo Daviess": {
                    "id": 6401,
                    "name": "Jo Daviess",
                    "slug": "jo-daviess",
                },
                "Iroquois": {
                    "id": 6400,
                    "name": "Iroquois",
                    "slug": "iroquois",
                },
                "Henderson": {
                    "id": 6399,
                    "name": "Henderson",
                    "slug": "henderson",
                },
                "Hardin": {
                    "id": 6398,
                    "name": "Hardin",
                    "slug": "hardin",
                },
                "Greene": {
                    "id": 6397,
                    "name": "Greene",
                    "slug": "greene-4",
                },
                "Fulton": {
                    "id": 6396,
                    "name": "Fulton",
                    "slug": "fulton-3",
                },
                "Franklin": {
                    "id": 6395,
                    "name": "Franklin",
                    "slug": "franklin-7",
                },
                "Fayette": {
                    "id": 6394,
                    "name": "Fayette",
                    "slug": "fayette-3",
                },
                "Douglas": {
                    "id": 6393,
                    "name": "Douglas",
                    "slug": "douglas-3",
                },
                "Crawford": {
                    "id": 6392,
                    "name": "Crawford",
                    "slug": "crawford-3",
                },
                "Clark": {
                    "id": 6391,
                    "name": "Clark",
                    "slug": "clark-3",
                },
                "Champaign": {
                    "id": 6390,
                    "name": "Champaign",
                    "slug": "champaign",
                },
                "Calhoun": {
                    "id": 6389,
                    "name": "Calhoun",
                    "slug": "calhoun-5",
                },
                "Brown": {
                    "id": 6388,
                    "name": "Brown",
                    "slug": "brown",
                },
                "Woodford": {
                    "id": 6387,
                    "name": "Woodford",
                    "slug": "woodford",
                },
                "Whiteside": {
                    "id": 6386,
                    "name": "Whiteside",
                    "slug": "whiteside",
                },
                "Wayne": {
                    "id": 6385,
                    "name": "Wayne",
                    "slug": "wayne-2",
                },
                "Union": {
                    "id": 6384,
                    "name": "Union",
                    "slug": "union-5",
                },
                "Tazewell": {
                    "id": 6383,
                    "name": "Tazewell",
                    "slug": "tazewell",
                },
                "Sangamon": {
                    "id": 6382,
                    "name": "Sangamon",
                    "slug": "sangamon",
                },
                "Saline": {
                    "id": 6381,
                    "name": "Saline",
                    "slug": "saline-2",
                },
                "Randolph": {
                    "id": 6380,
                    "name": "Randolph",
                    "slug": "randolph-4",
                },
                "Pope": {
                    "id": 6379,
                    "name": "Pope",
                    "slug": "pope-2",
                },
                "Piatt": {
                    "id": 6378,
                    "name": "Piatt",
                    "slug": "piatt",
                },
                "Ogle": {
                    "id": 6377,
                    "name": "Ogle",
                    "slug": "ogle",
                },
                "Morgan": {
                    "id": 6376,
                    "name": "Morgan",
                    "slug": "morgan-4",
                },
                "Monroe": {
                    "id": 6375,
                    "name": "Monroe",
                    "slug": "monroe-6",
                },
                "Marshall": {
                    "id": 6374,
                    "name": "Marshall",
                    "slug": "marshall-2",
                },
                "McLean": {
                    "id": 6373,
                    "name": "McLean",
                    "slug": "mclean",
                },
                "Livingston": {
                    "id": 6372,
                    "name": "Livingston",
                    "slug": "livingston",
                },
                "Lee": {
                    "id": 6371,
                    "name": "Lee",
                    "slug": "lee-5",
                },
                "LaSalle": {
                    "id": 6370,
                    "name": "LaSalle",
                    "slug": "lasalle",
                },
                "Kankakee": {
                    "id": 6369,
                    "name": "Kankakee",
                    "slug": "kankakee",
                },
                "Henry": {
                    "id": 6368,
                    "name": "Henry",
                    "slug": "henry-3",
                },
                "Hancock": {
                    "id": 6367,
                    "name": "Hancock",
                    "slug": "hancock-2",
                },
                "Grundy": {
                    "id": 6366,
                    "name": "Grundy",
                    "slug": "grundy",
                },
                "Gallatin": {
                    "id": 6365,
                    "name": "Gallatin",
                    "slug": "gallatin",
                },
                "Ford": {
                    "id": 6364,
                    "name": "Ford",
                    "slug": "ford",
                },
                "Coles": {
                    "id": 6363,
                    "name": "Coles",
                    "slug": "coles",
                },
                "Christian": {
                    "id": 6362,
                    "name": "Christian",
                    "slug": "christian",
                },
                "Carroll": {
                    "id": 6361,
                    "name": "Carroll",
                    "slug": "carroll-3",
                },
                "Bureau": {
                    "id": 6360,
                    "name": "Bureau",
                    "slug": "bureau",
                },
                "Bond": {
                    "id": 6359,
                    "name": "Bond",
                    "slug": "bond",
                },
                "Warren": {
                    "id": 6358,
                    "name": "Warren",
                    "slug": "warren-3",
                },
                "Vermilion": {
                    "id": 6357,
                    "name": "Vermilion",
                    "slug": "vermilion",
                },
                "Stephenson": {
                    "id": 6356,
                    "name": "Stephenson",
                    "slug": "stephenson",
                },
                "Shelby": {
                    "id": 6355,
                    "name": "Shelby",
                    "slug": "shelby-2",
                },
                "Richland": {
                    "id": 6354,
                    "name": "Richland",
                    "slug": "richland",
                },
                "Pike": {
                    "id": 6353,
                    "name": "Pike",
                    "slug": "pike-4",
                },
                "Perry": {
                    "id": 6352,
                    "name": "Perry",
                    "slug": "perry-3",
                },
                "Montgomery": {
                    "id": 6351,
                    "name": "Montgomery",
                    "slug": "montgomery-4",
                },
                "Mercer": {
                    "id": 6350,
                    "name": "Mercer",
                    "slug": "mercer",
                },
                "Marion": {
                    "id": 6349,
                    "name": "Marion",
                    "slug": "marion-5",
                },
                "Macon": {
                    "id": 6348,
                    "name": "Macon",
                    "slug": "macon-3",
                },
                "Washington": {
                    "id": 6347,
                    "name": "Washington",
                    "slug": "washington-9",
                },
                "Alexander": {
                    "id": 6346,
                    "name": "Alexander",
                    "slug": "alexander",
                },
                "Cass": {
                    "id": 6345,
                    "name": "Cass",
                    "slug": "cass",
                },
                "Scott": {
                    "id": 6344,
                    "name": "Scott",
                    "slug": "scott-2",
                },
                "Mason": {
                    "id": 6343,
                    "name": "Mason",
                    "slug": "mason",
                },
                "Wabash": {
                    "id": 6342,
                    "name": "Wabash",
                    "slug": "wabash",
                },
                "Stark": {
                    "id": 6341,
                    "name": "Stark",
                    "slug": "stark",
                },
                "Menard": {
                    "id": 6340,
                    "name": "Menard",
                    "slug": "menard",
                },
                "McDonough": {
                    "id": 6339,
                    "name": "McDonough",
                    "slug": "mcdonough",
                },
                "Edwards": {
                    "id": 6338,
                    "name": "Edwards",
                    "slug": "edwards",
                },
                "Cook": {
                    "id": 6337,
                    "name": "Cook",
                    "slug": "cook-2",
                },
                "Clinton": {
                    "id": 6336,
                    "name": "Clinton",
                    "slug": "clinton-2",
                },
                "Will": {
                    "id": 6335,
                    "name": "Will",
                    "slug": "will",
                },
                "Logan": {
                    "id": 6334,
                    "name": "Logan",
                    "slug": "logan-3",
                },
                "Lake": {
                    "id": 6333,
                    "name": "Lake",
                    "slug": "lake-4",
                },
            },
        },
    },
    "IN": {
        "id": 44,
        "name": "Indiana",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Shelby": {
                    "id": 6532,
                    "name": "Shelby",
                    "slug": "shelby-3",
                },
                "Allen": {
                    "id": 6531,
                    "name": "Allen",
                    "slug": "allen",
                },
                "Spencer": {
                    "id": 6530,
                    "name": "Spencer",
                    "slug": "spencer",
                },
                "Johnson": {
                    "id": 6529,
                    "name": "Johnson",
                    "slug": "johnson-4",
                },
                "Hendricks": {
                    "id": 6528,
                    "name": "Hendricks",
                    "slug": "hendricks",
                },
                "Clinton": {
                    "id": 6527,
                    "name": "Clinton",
                    "slug": "clinton-3",
                },
                "Whitley": {
                    "id": 6526,
                    "name": "Whitley",
                    "slug": "whitley",
                },
                "Sullivan": {
                    "id": 6525,
                    "name": "Sullivan",
                    "slug": "sullivan",
                },
                "Steuben": {
                    "id": 6524,
                    "name": "Steuben",
                    "slug": "steuben",
                },
                "Noble": {
                    "id": 6523,
                    "name": "Noble",
                    "slug": "noble",
                },
                "LaGrange": {
                    "id": 6522,
                    "name": "LaGrange",
                    "slug": "lagrange",
                },
                "Brown": {
                    "id": 6521,
                    "name": "Brown",
                    "slug": "brown-2",
                },
                "Grant": {
                    "id": 6520,
                    "name": "Grant",
                    "slug": "grant-2",
                },
                "Crawford": {
                    "id": 6519,
                    "name": "Crawford",
                    "slug": "crawford-4",
                },
                "Union": {
                    "id": 6518,
                    "name": "Union",
                    "slug": "union-6",
                },
                "Montgomery": {
                    "id": 6517,
                    "name": "Montgomery",
                    "slug": "montgomery-5",
                },
                "Lake": {
                    "id": 6516,
                    "name": "Lake",
                    "slug": "lake-5",
                },
                "Vigo": {
                    "id": 6515,
                    "name": "Vigo",
                    "slug": "vigo",
                },
                "Ripley": {
                    "id": 6514,
                    "name": "Ripley",
                    "slug": "ripley",
                },
                "Orange": {
                    "id": 6513,
                    "name": "Orange",
                    "slug": "orange-4",
                },
                "Randolph": {
                    "id": 6512,
                    "name": "Randolph",
                    "slug": "randolph-5",
                },
                "Boone": {
                    "id": 6511,
                    "name": "Boone",
                    "slug": "boone-3",
                },
                "Monroe": {
                    "id": 6510,
                    "name": "Monroe",
                    "slug": "monroe-7",
                },
                "Lawrence": {
                    "id": 6509,
                    "name": "Lawrence",
                    "slug": "lawrence-4",
                },
                "Jennings": {
                    "id": 6508,
                    "name": "Jennings",
                    "slug": "jennings",
                },
                "Franklin": {
                    "id": 6507,
                    "name": "Franklin",
                    "slug": "franklin-8",
                },
                "Warrick": {
                    "id": 6506,
                    "name": "Warrick",
                    "slug": "warrick",
                },
                "Vermillion": {
                    "id": 6505,
                    "name": "Vermillion",
                    "slug": "vermillion",
                },
                "Vanderburgh": {
                    "id": 6504,
                    "name": "Vanderburgh",
                    "slug": "vanderburgh",
                },
                "Wabash": {
                    "id": 6503,
                    "name": "Wabash",
                    "slug": "wabash-2",
                },
                "Switzerland": {
                    "id": 6502,
                    "name": "Switzerland",
                    "slug": "switzerland",
                },
                "Starke": {
                    "id": 6501,
                    "name": "Starke",
                    "slug": "starke",
                },
                "St. Joseph": {
                    "id": 6500,
                    "name": "St. Joseph",
                    "slug": "st-joseph",
                },
                "Rush": {
                    "id": 6499,
                    "name": "Rush",
                    "slug": "rush",
                },
                "Pulaski": {
                    "id": 6498,
                    "name": "Pulaski",
                    "slug": "pulaski-4",
                },
                "Porter": {
                    "id": 6497,
                    "name": "Porter",
                    "slug": "porter",
                },
                "Jefferson": {
                    "id": 6496,
                    "name": "Jefferson",
                    "slug": "jefferson-8",
                },
                "Jasper": {
                    "id": 6495,
                    "name": "Jasper",
                    "slug": "jasper-3",
                },
                "Huntington": {
                    "id": 6494,
                    "name": "Huntington",
                    "slug": "huntington",
                },
                "Hancock": {
                    "id": 6493,
                    "name": "Hancock",
                    "slug": "hancock-3",
                },
                "Hamilton": {
                    "id": 6492,
                    "name": "Hamilton",
                    "slug": "hamilton-3",
                },
                "Fulton": {
                    "id": 6491,
                    "name": "Fulton",
                    "slug": "fulton-4",
                },
                "Fountain": {
                    "id": 6490,
                    "name": "Fountain",
                    "slug": "fountain",
                },
                "Floyd": {
                    "id": 6489,
                    "name": "Floyd",
                    "slug": "floyd-2",
                },
                "Elkhart": {
                    "id": 6488,
                    "name": "Elkhart",
                    "slug": "elkhart",
                },
                "DeKalb": {
                    "id": 6487,
                    "name": "DeKalb",
                    "slug": "dekalb-4",
                },
                "Dearborn": {
                    "id": 6486,
                    "name": "Dearborn",
                    "slug": "dearborn",
                },
                "Clark": {
                    "id": 6485,
                    "name": "Clark",
                    "slug": "clark-4",
                },
                "Carroll": {
                    "id": 6484,
                    "name": "Carroll",
                    "slug": "carroll-4",
                },
                "Bartholomew": {
                    "id": 6483,
                    "name": "Bartholomew",
                    "slug": "bartholomew",
                },
                "Adams": {
                    "id": 6482,
                    "name": "Adams",
                    "slug": "adams-4",
                },
                "Parke": {
                    "id": 6481,
                    "name": "Parke",
                    "slug": "parke",
                },
                "Owen": {
                    "id": 6480,
                    "name": "Owen",
                    "slug": "owen",
                },
                "Ohio": {
                    "id": 6479,
                    "name": "Ohio",
                    "slug": "ohio",
                },
                "Newton": {
                    "id": 6478,
                    "name": "Newton",
                    "slug": "newton-3",
                },
                "Morgan": {
                    "id": 6477,
                    "name": "Morgan",
                    "slug": "morgan-5",
                },
                "Martin": {
                    "id": 6476,
                    "name": "Martin",
                    "slug": "martin-2",
                },
                "Marshall": {
                    "id": 6475,
                    "name": "Marshall",
                    "slug": "marshall-3",
                },
                "Marion": {
                    "id": 6474,
                    "name": "Marion",
                    "slug": "marion-6",
                },
                "Madison": {
                    "id": 6473,
                    "name": "Madison",
                    "slug": "madison-8",
                },
                "LaPorte": {
                    "id": 6472,
                    "name": "LaPorte",
                    "slug": "laporte",
                },
                "Kosciusko": {
                    "id": 6471,
                    "name": "Kosciusko",
                    "slug": "kosciusko",
                },
                "Jay": {
                    "id": 6470,
                    "name": "Jay",
                    "slug": "jay",
                },
                "Henry": {
                    "id": 6469,
                    "name": "Henry",
                    "slug": "henry-4",
                },
                "Greene": {
                    "id": 6468,
                    "name": "Greene",
                    "slug": "greene-5",
                },
                "Fayette": {
                    "id": 6467,
                    "name": "Fayette",
                    "slug": "fayette-4",
                },
                "Dubois": {
                    "id": 6466,
                    "name": "Dubois",
                    "slug": "dubois",
                },
                "White": {
                    "id": 6465,
                    "name": "White",
                    "slug": "white-4",
                },
                "Wayne": {
                    "id": 6464,
                    "name": "Wayne",
                    "slug": "wayne-3",
                },
                "Warren": {
                    "id": 6463,
                    "name": "Warren",
                    "slug": "warren-4",
                },
                "Scott": {
                    "id": 6462,
                    "name": "Scott",
                    "slug": "scott-3",
                },
                "Putnam": {
                    "id": 6461,
                    "name": "Putnam",
                    "slug": "putnam-5",
                },
                "Posey": {
                    "id": 6460,
                    "name": "Posey",
                    "slug": "posey",
                },
                "Decatur": {
                    "id": 6459,
                    "name": "Decatur",
                    "slug": "decatur-2",
                },
                "Cass": {
                    "id": 6458,
                    "name": "Cass",
                    "slug": "cass-2",
                },
                "Jackson": {
                    "id": 6457,
                    "name": "Jackson",
                    "slug": "jackson-7",
                },
                "Gibson": {
                    "id": 6456,
                    "name": "Gibson",
                    "slug": "gibson",
                },
                "Wells": {
                    "id": 6455,
                    "name": "Wells",
                    "slug": "wells",
                },
                "Clay": {
                    "id": 6454,
                    "name": "Clay",
                    "slug": "clay-6",
                },
                "Pike": {
                    "id": 6453,
                    "name": "Pike",
                    "slug": "pike-5",
                },
                "Tipton": {
                    "id": 6452,
                    "name": "Tipton",
                    "slug": "tipton",
                },
                "Knox": {
                    "id": 6451,
                    "name": "Knox",
                    "slug": "knox-2",
                },
                "Howard": {
                    "id": 6450,
                    "name": "Howard",
                    "slug": "howard-2",
                },
                "Delaware": {
                    "id": 6449,
                    "name": "Delaware",
                    "slug": "delaware",
                },
                "Blackford": {
                    "id": 6448,
                    "name": "Blackford",
                    "slug": "blackford",
                },
                "Washington": {
                    "id": 6447,
                    "name": "Washington",
                    "slug": "washington-10",
                },
                "Tippecanoe": {
                    "id": 6446,
                    "name": "Tippecanoe",
                    "slug": "tippecanoe",
                },
                "Perry": {
                    "id": 6445,
                    "name": "Perry",
                    "slug": "perry-4",
                },
                "Miami": {
                    "id": 6444,
                    "name": "Miami",
                    "slug": "miami",
                },
                "Harrison": {
                    "id": 6443,
                    "name": "Harrison",
                    "slug": "harrison",
                },
                "Daviess": {
                    "id": 6442,
                    "name": "Daviess",
                    "slug": "daviess",
                },
                "Benton": {
                    "id": 6441,
                    "name": "Benton",
                    "slug": "benton-2",
                },
            },
        },
    },
    "IA": {
        "id": 45,
        "name": "Iowa",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Scott": {
                    "id": 6631,
                    "name": "Scott",
                    "slug": "scott-4",
                },
                "Audubon": {
                    "id": 6630,
                    "name": "Audubon",
                    "slug": "audubon",
                },
                "Mills": {
                    "id": 6629,
                    "name": "Mills",
                    "slug": "mills",
                },
                "Harrison": {
                    "id": 6628,
                    "name": "Harrison",
                    "slug": "harrison-2",
                },
                "Davis": {
                    "id": 6627,
                    "name": "Davis",
                    "slug": "davis",
                },
                "Adams": {
                    "id": 6626,
                    "name": "Adams",
                    "slug": "adams-5",
                },
                "Benton": {
                    "id": 6625,
                    "name": "Benton",
                    "slug": "benton-3",
                },
                "Van Buren": {
                    "id": 6624,
                    "name": "Van Buren",
                    "slug": "van-buren-2",
                },
                "Plymouth": {
                    "id": 6623,
                    "name": "Plymouth",
                    "slug": "plymouth-2",
                },
                "Lyon": {
                    "id": 6622,
                    "name": "Lyon",
                    "slug": "lyon",
                },
                "Humboldt": {
                    "id": 6621,
                    "name": "Humboldt",
                    "slug": "humboldt-2",
                },
                "Cerro Gordo": {
                    "id": 6620,
                    "name": "Cerro Gordo",
                    "slug": "cerro-gordo",
                },
                "Pottawattamie": {
                    "id": 6619,
                    "name": "Pottawattamie",
                    "slug": "pottawattamie",
                },
                "Cedar": {
                    "id": 6618,
                    "name": "Cedar",
                    "slug": "cedar",
                },
                "Woodbury": {
                    "id": 6617,
                    "name": "Woodbury",
                    "slug": "woodbury-2",
                },
                "Page": {
                    "id": 6616,
                    "name": "Page",
                    "slug": "page",
                },
                "Keokuk": {
                    "id": 6615,
                    "name": "Keokuk",
                    "slug": "keokuk",
                },
                "Franklin": {
                    "id": 6614,
                    "name": "Franklin",
                    "slug": "franklin-9",
                },
                "Buena Vista": {
                    "id": 6613,
                    "name": "Buena Vista",
                    "slug": "buena-vista",
                },
                "Boone": {
                    "id": 6612,
                    "name": "Boone",
                    "slug": "boone-4",
                },
                "Wapello": {
                    "id": 6611,
                    "name": "Wapello",
                    "slug": "wapello",
                },
                "Pocahontas": {
                    "id": 6610,
                    "name": "Pocahontas",
                    "slug": "pocahontas",
                },
                "Madison": {
                    "id": 6609,
                    "name": "Madison",
                    "slug": "madison-9",
                },
                "Mahaska": {
                    "id": 6608,
                    "name": "Mahaska",
                    "slug": "mahaska",
                },
                "Ida": {
                    "id": 6607,
                    "name": "Ida",
                    "slug": "ida",
                },
                "Fayette": {
                    "id": 6606,
                    "name": "Fayette",
                    "slug": "fayette-5",
                },
                "Washington": {
                    "id": 6605,
                    "name": "Washington",
                    "slug": "washington-11",
                },
                "Dickinson": {
                    "id": 6604,
                    "name": "Dickinson",
                    "slug": "dickinson",
                },
                "Decatur": {
                    "id": 6603,
                    "name": "Decatur",
                    "slug": "decatur-3",
                },
                "Crawford": {
                    "id": 6602,
                    "name": "Crawford",
                    "slug": "crawford-5",
                },
                "Clayton": {
                    "id": 6601,
                    "name": "Clayton",
                    "slug": "clayton-2",
                },
                "Chickasaw": {
                    "id": 6600,
                    "name": "Chickasaw",
                    "slug": "chickasaw",
                },
                "Cass": {
                    "id": 6599,
                    "name": "Cass",
                    "slug": "cass-3",
                },
                "Butler": {
                    "id": 6598,
                    "name": "Butler",
                    "slug": "butler-2",
                },
                "Buchanan": {
                    "id": 6597,
                    "name": "Buchanan",
                    "slug": "buchanan",
                },
                "Black Hawk": {
                    "id": 6596,
                    "name": "Black Hawk",
                    "slug": "black-hawk",
                },
                "Allamakee": {
                    "id": 6595,
                    "name": "Allamakee",
                    "slug": "allamakee",
                },
                "Wright": {
                    "id": 6594,
                    "name": "Wright",
                    "slug": "wright",
                },
                "Worth": {
                    "id": 6593,
                    "name": "Worth",
                    "slug": "worth-2",
                },
                "Winneshiek": {
                    "id": 6592,
                    "name": "Winneshiek",
                    "slug": "winneshiek",
                },
                "Wayne": {
                    "id": 6591,
                    "name": "Wayne",
                    "slug": "wayne-4",
                },
                "Warren": {
                    "id": 6590,
                    "name": "Warren",
                    "slug": "warren-5",
                },
                "Taylor": {
                    "id": 6589,
                    "name": "Taylor",
                    "slug": "taylor-3",
                },
                "Tama": {
                    "id": 6588,
                    "name": "Tama",
                    "slug": "tama",
                },
                "Sioux": {
                    "id": 6587,
                    "name": "Sioux",
                    "slug": "sioux",
                },
                "Sac": {
                    "id": 6586,
                    "name": "Sac",
                    "slug": "sac",
                },
                "Poweshiek": {
                    "id": 6585,
                    "name": "Poweshiek",
                    "slug": "poweshiek",
                },
                "Polk": {
                    "id": 6584,
                    "name": "Polk",
                    "slug": "polk-4",
                },
                "Osceola": {
                    "id": 6583,
                    "name": "Osceola",
                    "slug": "osceola-2",
                },
                "Muscatine": {
                    "id": 6582,
                    "name": "Muscatine",
                    "slug": "muscatine",
                },
                "Montgomery": {
                    "id": 6581,
                    "name": "Montgomery",
                    "slug": "montgomery-6",
                },
                "Monona": {
                    "id": 6580,
                    "name": "Monona",
                    "slug": "monona",
                },
                "Louisa": {
                    "id": 6579,
                    "name": "Louisa",
                    "slug": "louisa",
                },
                "Linn": {
                    "id": 6578,
                    "name": "Linn",
                    "slug": "linn",
                },
                "Kossuth": {
                    "id": 6577,
                    "name": "Kossuth",
                    "slug": "kossuth",
                },
                "Jones": {
                    "id": 6576,
                    "name": "Jones",
                    "slug": "jones-2",
                },
                "Jefferson": {
                    "id": 6575,
                    "name": "Jefferson",
                    "slug": "jefferson-9",
                },
                "Jasper": {
                    "id": 6574,
                    "name": "Jasper",
                    "slug": "jasper-4",
                },
                "Iowa": {
                    "id": 6573,
                    "name": "Iowa",
                    "slug": "iowa",
                },
                "Howard": {
                    "id": 6572,
                    "name": "Howard",
                    "slug": "howard-3",
                },
                "Hancock": {
                    "id": 6571,
                    "name": "Hancock",
                    "slug": "hancock-4",
                },
                "Guthrie": {
                    "id": 6570,
                    "name": "Guthrie",
                    "slug": "guthrie",
                },
                "Fremont": {
                    "id": 6569,
                    "name": "Fremont",
                    "slug": "fremont-3",
                },
                "Floyd": {
                    "id": 6568,
                    "name": "Floyd",
                    "slug": "floyd-3",
                },
                "Dubuque": {
                    "id": 6567,
                    "name": "Dubuque",
                    "slug": "dubuque",
                },
                "Des Moines": {
                    "id": 6566,
                    "name": "Des Moines",
                    "slug": "des-moines",
                },
                "Winnebago": {
                    "id": 6565,
                    "name": "Winnebago",
                    "slug": "winnebago-2",
                },
                "Union": {
                    "id": 6564,
                    "name": "Union",
                    "slug": "union-7",
                },
                "Story": {
                    "id": 6563,
                    "name": "Story",
                    "slug": "story",
                },
                "Shelby": {
                    "id": 6562,
                    "name": "Shelby",
                    "slug": "shelby-4",
                },
                "Ringgold": {
                    "id": 6561,
                    "name": "Ringgold",
                    "slug": "ringgold",
                },
                "OBrien": {
                    "id": 6560,
                    "name": "OBrien",
                    "slug": "obrien",
                },
                "Mitchell": {
                    "id": 6559,
                    "name": "Mitchell",
                    "slug": "mitchell-2",
                },
                "Marshall": {
                    "id": 6558,
                    "name": "Marshall",
                    "slug": "marshall-4",
                },
                "Lucas": {
                    "id": 6557,
                    "name": "Lucas",
                    "slug": "lucas",
                },
                "Johnson": {
                    "id": 6556,
                    "name": "Johnson",
                    "slug": "johnson-5",
                },
                "Jackson": {
                    "id": 6555,
                    "name": "Jackson",
                    "slug": "jackson-8",
                },
                "Hardin": {
                    "id": 6554,
                    "name": "Hardin",
                    "slug": "hardin-2",
                },
                "Hamilton": {
                    "id": 6553,
                    "name": "Hamilton",
                    "slug": "hamilton-4",
                },
                "Greene": {
                    "id": 6552,
                    "name": "Greene",
                    "slug": "greene-6",
                },
                "Delaware": {
                    "id": 6551,
                    "name": "Delaware",
                    "slug": "delaware-2",
                },
                "Dallas": {
                    "id": 6550,
                    "name": "Dallas",
                    "slug": "dallas-3",
                },
                "Calhoun": {
                    "id": 6549,
                    "name": "Calhoun",
                    "slug": "calhoun-6",
                },
                "Bremer": {
                    "id": 6548,
                    "name": "Bremer",
                    "slug": "bremer",
                },
                "Appanoose": {
                    "id": 6547,
                    "name": "Appanoose",
                    "slug": "appanoose",
                },
                "Adair": {
                    "id": 6546,
                    "name": "Adair",
                    "slug": "adair",
                },
                "Emmet": {
                    "id": 6545,
                    "name": "Emmet",
                    "slug": "emmet",
                },
                "Henry": {
                    "id": 6544,
                    "name": "Henry",
                    "slug": "henry-5",
                },
                "Cherokee": {
                    "id": 6543,
                    "name": "Cherokee",
                    "slug": "cherokee-3",
                },
                "Clarke": {
                    "id": 6542,
                    "name": "Clarke",
                    "slug": "clarke-3",
                },
                "Webster": {
                    "id": 6541,
                    "name": "Webster",
                    "slug": "webster-2",
                },
                "Palo Alto": {
                    "id": 6540,
                    "name": "Palo Alto",
                    "slug": "palo-alto",
                },
                "Marion": {
                    "id": 6539,
                    "name": "Marion",
                    "slug": "marion-7",
                },
                "Grundy": {
                    "id": 6538,
                    "name": "Grundy",
                    "slug": "grundy-2",
                },
                "Carroll": {
                    "id": 6537,
                    "name": "Carroll",
                    "slug": "carroll-5",
                },
                "Monroe": {
                    "id": 6536,
                    "name": "Monroe",
                    "slug": "monroe-8",
                },
                "Lee": {
                    "id": 6535,
                    "name": "Lee",
                    "slug": "lee-6",
                },
                "Clinton": {
                    "id": 6534,
                    "name": "Clinton",
                    "slug": "clinton-4",
                },
                "Clay": {
                    "id": 6533,
                    "name": "Clay",
                    "slug": "clay-7",
                },
            },
        },
    },
    "KS": {
        "id": 46,
        "name": "Kansas",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Wichita": {
                    "id": 6736,
                    "name": "Wichita",
                    "slug": "wichita",
                },
                "Ness": {
                    "id": 6735,
                    "name": "Ness",
                    "slug": "ness",
                },
                "Pottawatomie": {
                    "id": 6734,
                    "name": "Pottawatomie",
                    "slug": "pottawatomie",
                },
                "Clark": {
                    "id": 6733,
                    "name": "Clark",
                    "slug": "clark-5",
                },
                "Edwards": {
                    "id": 6732,
                    "name": "Edwards",
                    "slug": "edwards-2",
                },
                "Dickinson": {
                    "id": 6731,
                    "name": "Dickinson",
                    "slug": "dickinson-2",
                },
                "Bourbon": {
                    "id": 6730,
                    "name": "Bourbon",
                    "slug": "bourbon",
                },
                "Rawlins": {
                    "id": 6729,
                    "name": "Rawlins",
                    "slug": "rawlins",
                },
                "Meade": {
                    "id": 6728,
                    "name": "Meade",
                    "slug": "meade",
                },
                "Stanton": {
                    "id": 6727,
                    "name": "Stanton",
                    "slug": "stanton",
                },
                "Neosho": {
                    "id": 6726,
                    "name": "Neosho",
                    "slug": "neosho",
                },
                "Geary": {
                    "id": 6725,
                    "name": "Geary",
                    "slug": "geary",
                },
                "Reno": {
                    "id": 6724,
                    "name": "Reno",
                    "slug": "reno",
                },
                "Linn": {
                    "id": 6723,
                    "name": "Linn",
                    "slug": "linn-2",
                },
                "Harvey": {
                    "id": 6722,
                    "name": "Harvey",
                    "slug": "harvey",
                },
                "Chautauqua": {
                    "id": 6721,
                    "name": "Chautauqua",
                    "slug": "chautauqua",
                },
                "Rush": {
                    "id": 6720,
                    "name": "Rush",
                    "slug": "rush-2",
                },
                "Marion": {
                    "id": 6719,
                    "name": "Marion",
                    "slug": "marion-8",
                },
                "Labette": {
                    "id": 6718,
                    "name": "Labette",
                    "slug": "labette",
                },
                "Decatur": {
                    "id": 6717,
                    "name": "Decatur",
                    "slug": "decatur-4",
                },
                "Cowley": {
                    "id": 6716,
                    "name": "Cowley",
                    "slug": "cowley",
                },
                "Woodson": {
                    "id": 6715,
                    "name": "Woodson",
                    "slug": "woodson",
                },
                "Sheridan": {
                    "id": 6714,
                    "name": "Sheridan",
                    "slug": "sheridan",
                },
                "Miami": {
                    "id": 6713,
                    "name": "Miami",
                    "slug": "miami-2",
                },
                "Leavenworth": {
                    "id": 6712,
                    "name": "Leavenworth",
                    "slug": "leavenworth",
                },
                "Kearny": {
                    "id": 6711,
                    "name": "Kearny",
                    "slug": "kearny",
                },
                "Haskell": {
                    "id": 6710,
                    "name": "Haskell",
                    "slug": "haskell",
                },
                "Atchison": {
                    "id": 6709,
                    "name": "Atchison",
                    "slug": "atchison",
                },
                "Barber": {
                    "id": 6708,
                    "name": "Barber",
                    "slug": "barber",
                },
                "Wabaunsee": {
                    "id": 6707,
                    "name": "Wabaunsee",
                    "slug": "wabaunsee",
                },
                "Greeley": {
                    "id": 6706,
                    "name": "Greeley",
                    "slug": "greeley",
                },
                "Pawnee": {
                    "id": 6705,
                    "name": "Pawnee",
                    "slug": "pawnee",
                },
                "Hamilton": {
                    "id": 6704,
                    "name": "Hamilton",
                    "slug": "hamilton-5",
                },
                "Douglas": {
                    "id": 6703,
                    "name": "Douglas",
                    "slug": "douglas-4",
                },
                "Crawford": {
                    "id": 6702,
                    "name": "Crawford",
                    "slug": "crawford-6",
                },
                "Coffey": {
                    "id": 6701,
                    "name": "Coffey",
                    "slug": "coffey",
                },
                "Clay": {
                    "id": 6700,
                    "name": "Clay",
                    "slug": "clay-8",
                },
                "Cheyenne": {
                    "id": 6699,
                    "name": "Cheyenne",
                    "slug": "cheyenne-2",
                },
                "Cherokee": {
                    "id": 6698,
                    "name": "Cherokee",
                    "slug": "cherokee-4",
                },
                "Chase": {
                    "id": 6697,
                    "name": "Chase",
                    "slug": "chase",
                },
                "Brown": {
                    "id": 6696,
                    "name": "Brown",
                    "slug": "brown-3",
                },
                "Wyandotte": {
                    "id": 6695,
                    "name": "Wyandotte",
                    "slug": "wyandotte",
                },
                "Wilson": {
                    "id": 6694,
                    "name": "Wilson",
                    "slug": "wilson",
                },
                "Washington": {
                    "id": 6693,
                    "name": "Washington",
                    "slug": "washington-12",
                },
                "Sumner": {
                    "id": 6692,
                    "name": "Sumner",
                    "slug": "sumner",
                },
                "Stafford": {
                    "id": 6691,
                    "name": "Stafford",
                    "slug": "stafford-2",
                },
                "Sherman": {
                    "id": 6690,
                    "name": "Sherman",
                    "slug": "sherman-2",
                },
                "Shawnee": {
                    "id": 6689,
                    "name": "Shawnee",
                    "slug": "shawnee",
                },
                "Sedgwick": {
                    "id": 6688,
                    "name": "Sedgwick",
                    "slug": "sedgwick-2",
                },
                "Russell": {
                    "id": 6687,
                    "name": "Russell",
                    "slug": "russell-2",
                },
                "Rooks": {
                    "id": 6686,
                    "name": "Rooks",
                    "slug": "rooks",
                },
                "Republic": {
                    "id": 6685,
                    "name": "Republic",
                    "slug": "republic",
                },
                "Pratt": {
                    "id": 6684,
                    "name": "Pratt",
                    "slug": "pratt",
                },
                "Phillips": {
                    "id": 6683,
                    "name": "Phillips",
                    "slug": "phillips-3",
                },
                "Osage": {
                    "id": 6682,
                    "name": "Osage",
                    "slug": "osage",
                },
                "Norton": {
                    "id": 6681,
                    "name": "Norton",
                    "slug": "norton",
                },
                "Morton": {
                    "id": 6680,
                    "name": "Morton",
                    "slug": "morton",
                },
                "Morris": {
                    "id": 6679,
                    "name": "Morris",
                    "slug": "morris-2",
                },
                "Mitchell": {
                    "id": 6678,
                    "name": "Mitchell",
                    "slug": "mitchell-3",
                },
                "Marshall": {
                    "id": 6677,
                    "name": "Marshall",
                    "slug": "marshall-5",
                },
                "Gray": {
                    "id": 6676,
                    "name": "Gray",
                    "slug": "gray",
                },
                "Graham": {
                    "id": 6675,
                    "name": "Graham",
                    "slug": "graham-2",
                },
                "Franklin": {
                    "id": 6674,
                    "name": "Franklin",
                    "slug": "franklin-10",
                },
                "Ellis": {
                    "id": 6673,
                    "name": "Ellis",
                    "slug": "ellis",
                },
                "Nemaha": {
                    "id": 6672,
                    "name": "Nemaha",
                    "slug": "nemaha",
                },
                "Thomas": {
                    "id": 6671,
                    "name": "Thomas",
                    "slug": "thomas-2",
                },
                "Stevens": {
                    "id": 6670,
                    "name": "Stevens",
                    "slug": "stevens",
                },
                "Smith": {
                    "id": 6669,
                    "name": "Smith",
                    "slug": "smith",
                },
                "Seward": {
                    "id": 6668,
                    "name": "Seward",
                    "slug": "seward",
                },
                "Saline": {
                    "id": 6667,
                    "name": "Saline",
                    "slug": "saline-3",
                },
                "Rice": {
                    "id": 6666,
                    "name": "Rice",
                    "slug": "rice",
                },
                "Osborne": {
                    "id": 6665,
                    "name": "Osborne",
                    "slug": "osborne",
                },
                "Jackson": {
                    "id": 6664,
                    "name": "Jackson",
                    "slug": "jackson-9",
                },
                "Harper": {
                    "id": 6663,
                    "name": "Harper",
                    "slug": "harper",
                },
                "Greenwood": {
                    "id": 6662,
                    "name": "Greenwood",
                    "slug": "greenwood",
                },
                "Gove": {
                    "id": 6661,
                    "name": "Gove",
                    "slug": "gove",
                },
                "Ford": {
                    "id": 6660,
                    "name": "Ford",
                    "slug": "ford-2",
                },
                "Ellsworth": {
                    "id": 6659,
                    "name": "Ellsworth",
                    "slug": "ellsworth",
                },
                "Elk": {
                    "id": 6658,
                    "name": "Elk",
                    "slug": "elk",
                },
                "Doniphan": {
                    "id": 6657,
                    "name": "Doniphan",
                    "slug": "doniphan",
                },
                "Cloud": {
                    "id": 6656,
                    "name": "Cloud",
                    "slug": "cloud",
                },
                "Butler": {
                    "id": 6655,
                    "name": "Butler",
                    "slug": "butler-3",
                },
                "Barton": {
                    "id": 6654,
                    "name": "Barton",
                    "slug": "barton",
                },
                "Allen": {
                    "id": 6653,
                    "name": "Allen",
                    "slug": "allen-2",
                },
                "Montgomery": {
                    "id": 6652,
                    "name": "Montgomery",
                    "slug": "montgomery-7",
                },
                "McPherson": {
                    "id": 6651,
                    "name": "McPherson",
                    "slug": "mcpherson",
                },
                "Lyon": {
                    "id": 6650,
                    "name": "Lyon",
                    "slug": "lyon-2",
                },
                "Logan": {
                    "id": 6649,
                    "name": "Logan",
                    "slug": "logan-4",
                },
                "Lincoln": {
                    "id": 6648,
                    "name": "Lincoln",
                    "slug": "lincoln-5",
                },
                "Lane": {
                    "id": 6647,
                    "name": "Lane",
                    "slug": "lane",
                },
                "Kiowa": {
                    "id": 6646,
                    "name": "Kiowa",
                    "slug": "kiowa-2",
                },
                "Johnson": {
                    "id": 6645,
                    "name": "Johnson",
                    "slug": "johnson-6",
                },
                "Jewell": {
                    "id": 6644,
                    "name": "Jewell",
                    "slug": "jewell",
                },
                "Jefferson": {
                    "id": 6643,
                    "name": "Jefferson",
                    "slug": "jefferson-10",
                },
                "Anderson": {
                    "id": 6642,
                    "name": "Anderson",
                    "slug": "anderson",
                },
                "Trego": {
                    "id": 6641,
                    "name": "Trego",
                    "slug": "trego",
                },
                "Riley": {
                    "id": 6640,
                    "name": "Riley",
                    "slug": "riley",
                },
                "Hodgeman": {
                    "id": 6639,
                    "name": "Hodgeman",
                    "slug": "hodgeman",
                },
                "Comanche": {
                    "id": 6638,
                    "name": "Comanche",
                    "slug": "comanche",
                },
                "Scott": {
                    "id": 6637,
                    "name": "Scott",
                    "slug": "scott-5",
                },
                "Ottawa": {
                    "id": 6636,
                    "name": "Ottawa",
                    "slug": "ottawa",
                },
                "Finney": {
                    "id": 6635,
                    "name": "Finney",
                    "slug": "finney",
                },
                "Wallace": {
                    "id": 6634,
                    "name": "Wallace",
                    "slug": "wallace",
                },
                "Kingman": {
                    "id": 6633,
                    "name": "Kingman",
                    "slug": "kingman",
                },
                "Grant": {
                    "id": 6632,
                    "name": "Grant",
                    "slug": "grant-3",
                },
            },
        },
    },
    "KY": {
        "id": 47,
        "name": "Kentucky",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Breckinridge": {
                    "id": 6856,
                    "name": "Breckinridge",
                    "slug": "breckinridge",
                },
                "Washington": {
                    "id": 6855,
                    "name": "Washington",
                    "slug": "washington-13",
                },
                "Clay": {
                    "id": 6854,
                    "name": "Clay",
                    "slug": "clay-9",
                },
                "Woodford": {
                    "id": 6853,
                    "name": "Woodford",
                    "slug": "woodford-2",
                },
                "Powell": {
                    "id": 6852,
                    "name": "Powell",
                    "slug": "powell",
                },
                "Livingston": {
                    "id": 6851,
                    "name": "Livingston",
                    "slug": "livingston-2",
                },
                "Rowan": {
                    "id": 6850,
                    "name": "Rowan",
                    "slug": "rowan",
                },
                "Laurel": {
                    "id": 6849,
                    "name": "Laurel",
                    "slug": "laurel",
                },
                "Owsley": {
                    "id": 6848,
                    "name": "Owsley",
                    "slug": "owsley",
                },
                "Hardin": {
                    "id": 6847,
                    "name": "Hardin",
                    "slug": "hardin-3",
                },
                "Leslie": {
                    "id": 6846,
                    "name": "Leslie",
                    "slug": "leslie",
                },
                "Ballard": {
                    "id": 6845,
                    "name": "Ballard",
                    "slug": "ballard",
                },
                "Franklin": {
                    "id": 6844,
                    "name": "Franklin",
                    "slug": "franklin-11",
                },
                "Trigg": {
                    "id": 6843,
                    "name": "Trigg",
                    "slug": "trigg",
                },
                "McCracken": {
                    "id": 6842,
                    "name": "McCracken",
                    "slug": "mccracken",
                },
                "Jefferson": {
                    "id": 6841,
                    "name": "Jefferson",
                    "slug": "jefferson-11",
                },
                "Cumberland": {
                    "id": 6840,
                    "name": "Cumberland",
                    "slug": "cumberland-2",
                },
                "Bracken": {
                    "id": 6839,
                    "name": "Bracken",
                    "slug": "bracken",
                },
                "Calloway": {
                    "id": 6838,
                    "name": "Calloway",
                    "slug": "calloway",
                },
                "Barren": {
                    "id": 6837,
                    "name": "Barren",
                    "slug": "barren",
                },
                "Trimble": {
                    "id": 6836,
                    "name": "Trimble",
                    "slug": "trimble",
                },
                "Spencer": {
                    "id": 6835,
                    "name": "Spencer",
                    "slug": "spencer-2",
                },
                "Meade": {
                    "id": 6834,
                    "name": "Meade",
                    "slug": "meade-2",
                },
                "Mason": {
                    "id": 6833,
                    "name": "Mason",
                    "slug": "mason-2",
                },
                "Campbell": {
                    "id": 6832,
                    "name": "Campbell",
                    "slug": "campbell",
                },
                "Webster": {
                    "id": 6831,
                    "name": "Webster",
                    "slug": "webster-3",
                },
                "Kenton": {
                    "id": 6830,
                    "name": "Kenton",
                    "slug": "kenton",
                },
                "Edmonson": {
                    "id": 6829,
                    "name": "Edmonson",
                    "slug": "edmonson",
                },
                "Hancock": {
                    "id": 6828,
                    "name": "Hancock",
                    "slug": "hancock-5",
                },
                "Marshall": {
                    "id": 6827,
                    "name": "Marshall",
                    "slug": "marshall-6",
                },
                "Oldham": {
                    "id": 6826,
                    "name": "Oldham",
                    "slug": "oldham",
                },
                "Union": {
                    "id": 6825,
                    "name": "Union",
                    "slug": "union-8",
                },
                "Todd": {
                    "id": 6824,
                    "name": "Todd",
                    "slug": "todd",
                },
                "Shelby": {
                    "id": 6823,
                    "name": "Shelby",
                    "slug": "shelby-5",
                },
                "Russell": {
                    "id": 6822,
                    "name": "Russell",
                    "slug": "russell-3",
                },
                "Robertson": {
                    "id": 6821,
                    "name": "Robertson",
                    "slug": "robertson",
                },
                "Pendleton": {
                    "id": 6820,
                    "name": "Pendleton",
                    "slug": "pendleton",
                },
                "Montgomery": {
                    "id": 6819,
                    "name": "Montgomery",
                    "slug": "montgomery-8",
                },
                "Metcalfe": {
                    "id": 6818,
                    "name": "Metcalfe",
                    "slug": "metcalfe",
                },
                "McLean": {
                    "id": 6817,
                    "name": "McLean",
                    "slug": "mclean-2",
                },
                "Lyon": {
                    "id": 6816,
                    "name": "Lyon",
                    "slug": "lyon-3",
                },
                "Lee": {
                    "id": 6815,
                    "name": "Lee",
                    "slug": "lee-7",
                },
                "Hickman": {
                    "id": 6814,
                    "name": "Hickman",
                    "slug": "hickman",
                },
                "Green": {
                    "id": 6813,
                    "name": "Green",
                    "slug": "green",
                },
                "Grant": {
                    "id": 6812,
                    "name": "Grant",
                    "slug": "grant-4",
                },
                "Gallatin": {
                    "id": 6811,
                    "name": "Gallatin",
                    "slug": "gallatin-2",
                },
                "Clinton": {
                    "id": 6810,
                    "name": "Clinton",
                    "slug": "clinton-5",
                },
                "Christian": {
                    "id": 6809,
                    "name": "Christian",
                    "slug": "christian-2",
                },
                "Carlisle": {
                    "id": 6808,
                    "name": "Carlisle",
                    "slug": "carlisle",
                },
                "Boyd": {
                    "id": 6807,
                    "name": "Boyd",
                    "slug": "boyd",
                },
                "Boone": {
                    "id": 6806,
                    "name": "Boone",
                    "slug": "boone-5",
                },
                "Adair": {
                    "id": 6805,
                    "name": "Adair",
                    "slug": "adair-2",
                },
                "Warren": {
                    "id": 6804,
                    "name": "Warren",
                    "slug": "warren-6",
                },
                "Simpson": {
                    "id": 6803,
                    "name": "Simpson",
                    "slug": "simpson",
                },
                "Pulaski": {
                    "id": 6802,
                    "name": "Pulaski",
                    "slug": "pulaski-5",
                },
                "Monroe": {
                    "id": 6801,
                    "name": "Monroe",
                    "slug": "monroe-9",
                },
                "Lincoln": {
                    "id": 6800,
                    "name": "Lincoln",
                    "slug": "lincoln-6",
                },
                "Logan": {
                    "id": 6799,
                    "name": "Logan",
                    "slug": "logan-5",
                },
                "Jessamine": {
                    "id": 6798,
                    "name": "Jessamine",
                    "slug": "jessamine",
                },
                "Henry": {
                    "id": 6797,
                    "name": "Henry",
                    "slug": "henry-6",
                },
                "Graves": {
                    "id": 6796,
                    "name": "Graves",
                    "slug": "graves",
                },
                "Fulton": {
                    "id": 6795,
                    "name": "Fulton",
                    "slug": "fulton-5",
                },
                "Casey": {
                    "id": 6794,
                    "name": "Casey",
                    "slug": "casey",
                },
                "Carroll": {
                    "id": 6793,
                    "name": "Carroll",
                    "slug": "carroll-6",
                },
                "Boyle": {
                    "id": 6792,
                    "name": "Boyle",
                    "slug": "boyle",
                },
                "Bourbon": {
                    "id": 6791,
                    "name": "Bourbon",
                    "slug": "bourbon-2",
                },
                "Ohio": {
                    "id": 6790,
                    "name": "Ohio",
                    "slug": "ohio-2",
                },
                "Henderson": {
                    "id": 6789,
                    "name": "Henderson",
                    "slug": "henderson-2",
                },
                "Whitley": {
                    "id": 6788,
                    "name": "Whitley",
                    "slug": "whitley-2",
                },
                "Greenup": {
                    "id": 6787,
                    "name": "Greenup",
                    "slug": "greenup",
                },
                "Owen": {
                    "id": 6786,
                    "name": "Owen",
                    "slug": "owen-2",
                },
                "Letcher": {
                    "id": 6785,
                    "name": "Letcher",
                    "slug": "letcher",
                },
                "Harrison": {
                    "id": 6784,
                    "name": "Harrison",
                    "slug": "harrison-3",
                },
                "Elliott": {
                    "id": 6783,
                    "name": "Elliott",
                    "slug": "elliott",
                },
                "Menifee": {
                    "id": 6782,
                    "name": "Menifee",
                    "slug": "menifee",
                },
                "Hopkins": {
                    "id": 6781,
                    "name": "Hopkins",
                    "slug": "hopkins",
                },
                "Allen": {
                    "id": 6780,
                    "name": "Allen",
                    "slug": "allen-3",
                },
                "Scott": {
                    "id": 6779,
                    "name": "Scott",
                    "slug": "scott-6",
                },
                "Larue": {
                    "id": 6778,
                    "name": "Larue",
                    "slug": "larue",
                },
                "Garrard": {
                    "id": 6777,
                    "name": "Garrard",
                    "slug": "garrard",
                },
                "Morgan": {
                    "id": 6776,
                    "name": "Morgan",
                    "slug": "morgan-6",
                },
                "McCreary": {
                    "id": 6775,
                    "name": "McCreary",
                    "slug": "mccreary",
                },
                "Crittenden": {
                    "id": 6774,
                    "name": "Crittenden",
                    "slug": "crittenden-2",
                },
                "Wayne": {
                    "id": 6773,
                    "name": "Wayne",
                    "slug": "wayne-5",
                },
                "Perry": {
                    "id": 6772,
                    "name": "Perry",
                    "slug": "perry-5",
                },
                "Nicholas": {
                    "id": 6771,
                    "name": "Nicholas",
                    "slug": "nicholas",
                },
                "Muhlenberg": {
                    "id": 6770,
                    "name": "Muhlenberg",
                    "slug": "muhlenberg",
                },
                "Mercer": {
                    "id": 6769,
                    "name": "Mercer",
                    "slug": "mercer-2",
                },
                "Martin": {
                    "id": 6768,
                    "name": "Martin",
                    "slug": "martin-3",
                },
                "Magoffin": {
                    "id": 6767,
                    "name": "Magoffin",
                    "slug": "magoffin",
                },
                "Lewis": {
                    "id": 6766,
                    "name": "Lewis",
                    "slug": "lewis-2",
                },
                "Knox": {
                    "id": 6765,
                    "name": "Knox",
                    "slug": "knox-3",
                },
                "Knott": {
                    "id": 6764,
                    "name": "Knott",
                    "slug": "knott",
                },
                "Johnson": {
                    "id": 6763,
                    "name": "Johnson",
                    "slug": "johnson-7",
                },
                "Harlan": {
                    "id": 6762,
                    "name": "Harlan",
                    "slug": "harlan",
                },
                "Grayson": {
                    "id": 6761,
                    "name": "Grayson",
                    "slug": "grayson",
                },
                "Fayette": {
                    "id": 6760,
                    "name": "Fayette",
                    "slug": "fayette-6",
                },
                "Daviess": {
                    "id": 6759,
                    "name": "Daviess",
                    "slug": "daviess-2",
                },
                "Clark": {
                    "id": 6758,
                    "name": "Clark",
                    "slug": "clark-6",
                },
                "Carter": {
                    "id": 6757,
                    "name": "Carter",
                    "slug": "carter",
                },
                "Caldwell": {
                    "id": 6756,
                    "name": "Caldwell",
                    "slug": "caldwell",
                },
                "Bullitt": {
                    "id": 6755,
                    "name": "Bullitt",
                    "slug": "bullitt",
                },
                "Breathitt": {
                    "id": 6754,
                    "name": "Breathitt",
                    "slug": "breathitt",
                },
                "Bath": {
                    "id": 6753,
                    "name": "Bath",
                    "slug": "bath",
                },
                "Anderson": {
                    "id": 6752,
                    "name": "Anderson",
                    "slug": "anderson-2",
                },
                "Wolfe": {
                    "id": 6751,
                    "name": "Wolfe",
                    "slug": "wolfe",
                },
                "Taylor": {
                    "id": 6750,
                    "name": "Taylor",
                    "slug": "taylor-4",
                },
                "Rockcastle": {
                    "id": 6749,
                    "name": "Rockcastle",
                    "slug": "rockcastle",
                },
                "Pike": {
                    "id": 6748,
                    "name": "Pike",
                    "slug": "pike-6",
                },
                "Nelson": {
                    "id": 6747,
                    "name": "Nelson",
                    "slug": "nelson",
                },
                "Marion": {
                    "id": 6746,
                    "name": "Marion",
                    "slug": "marion-9",
                },
                "Madison": {
                    "id": 6745,
                    "name": "Madison",
                    "slug": "madison-10",
                },
                "Lawrence": {
                    "id": 6744,
                    "name": "Lawrence",
                    "slug": "lawrence-5",
                },
                "Jackson": {
                    "id": 6743,
                    "name": "Jackson",
                    "slug": "jackson-10",
                },
                "Hart": {
                    "id": 6742,
                    "name": "Hart",
                    "slug": "hart-2",
                },
                "Floyd": {
                    "id": 6741,
                    "name": "Floyd",
                    "slug": "floyd-4",
                },
                "Fleming": {
                    "id": 6740,
                    "name": "Fleming",
                    "slug": "fleming",
                },
                "Estill": {
                    "id": 6739,
                    "name": "Estill",
                    "slug": "estill",
                },
                "Butler": {
                    "id": 6738,
                    "name": "Butler",
                    "slug": "butler-4",
                },
                "Bell": {
                    "id": 6737,
                    "name": "Bell",
                    "slug": "bell",
                },
            },
        },
    },
    "LA": {
        "id": 48,
        "name": "Louisiana",
        "has_all_mail_elections": false,
        "subdivision_name": "Parish",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Vermilion": {
                    "id": 6920,
                    "name": "Vermilion",
                    "slug": "vermilion-2",
                },
                "St. Mary": {
                    "id": 6919,
                    "name": "St. Mary",
                    "slug": "st-mary",
                },
                "St. Landry": {
                    "id": 6918,
                    "name": "St. Landry",
                    "slug": "st-landry",
                },
                "Bossier": {
                    "id": 6917,
                    "name": "Bossier",
                    "slug": "bossier",
                },
                "St. Bernard": {
                    "id": 6916,
                    "name": "St. Bernard",
                    "slug": "st-bernard",
                },
                "Washington": {
                    "id": 6915,
                    "name": "Washington",
                    "slug": "washington-14",
                },
                "Lafayette": {
                    "id": 6914,
                    "name": "Lafayette",
                    "slug": "lafayette-3",
                },
                "Pointe Coupee": {
                    "id": 6913,
                    "name": "Pointe Coupee",
                    "slug": "pointe-coupee",
                },
                "St. Martin": {
                    "id": 6912,
                    "name": "St. Martin",
                    "slug": "st-martin",
                },
                "Iberville": {
                    "id": 6911,
                    "name": "Iberville",
                    "slug": "iberville",
                },
                "Avoyelles": {
                    "id": 6910,
                    "name": "Avoyelles",
                    "slug": "avoyelles",
                },
                "Red River": {
                    "id": 6909,
                    "name": "Red River",
                    "slug": "red-river",
                },
                "Beauregard": {
                    "id": 6908,
                    "name": "Beauregard",
                    "slug": "beauregard",
                },
                "Calcasieu": {
                    "id": 6907,
                    "name": "Calcasieu",
                    "slug": "calcasieu",
                },
                "Lincoln": {
                    "id": 6906,
                    "name": "Lincoln",
                    "slug": "lincoln-7",
                },
                "Claiborne": {
                    "id": 6905,
                    "name": "Claiborne",
                    "slug": "claiborne",
                },
                "Assumption": {
                    "id": 6904,
                    "name": "Assumption",
                    "slug": "assumption",
                },
                "West Baton Rouge": {
                    "id": 6903,
                    "name": "West Baton Rouge",
                    "slug": "west-baton-rouge",
                },
                "St. James": {
                    "id": 6902,
                    "name": "St. James",
                    "slug": "st-james",
                },
                "St. Charles": {
                    "id": 6901,
                    "name": "St. Charles",
                    "slug": "st-charles",
                },
                "Jackson": {
                    "id": 6900,
                    "name": "Jackson",
                    "slug": "jackson-11",
                },
                "West Feliciana": {
                    "id": 6899,
                    "name": "West Feliciana",
                    "slug": "west-feliciana",
                },
                "St. John the Baptist": {
                    "id": 6898,
                    "name": "St. John the Baptist",
                    "slug": "st-john-the-baptist",
                },
                "Plaquemines": {
                    "id": 6897,
                    "name": "Plaquemines",
                    "slug": "plaquemines",
                },
                "Jefferson": {
                    "id": 6896,
                    "name": "Jefferson",
                    "slug": "jefferson-12",
                },
                "Franklin": {
                    "id": 6895,
                    "name": "Franklin",
                    "slug": "franklin-12",
                },
                "Cameron": {
                    "id": 6894,
                    "name": "Cameron",
                    "slug": "cameron",
                },
                "Caldwell": {
                    "id": 6893,
                    "name": "Caldwell",
                    "slug": "caldwell-2",
                },
                "Allen": {
                    "id": 6892,
                    "name": "Allen",
                    "slug": "allen-4",
                },
                "LaSalle": {
                    "id": 6891,
                    "name": "LaSalle",
                    "slug": "lasalle-2",
                },
                "Lafourche": {
                    "id": 6890,
                    "name": "Lafourche",
                    "slug": "lafourche",
                },
                "Ouachita": {
                    "id": 6889,
                    "name": "Ouachita",
                    "slug": "ouachita-2",
                },
                "Iberia": {
                    "id": 6888,
                    "name": "Iberia",
                    "slug": "iberia",
                },
                "Tangipahoa": {
                    "id": 6887,
                    "name": "Tangipahoa",
                    "slug": "tangipahoa",
                },
                "Madison": {
                    "id": 6886,
                    "name": "Madison",
                    "slug": "madison-11",
                },
                "West Carroll": {
                    "id": 6885,
                    "name": "West Carroll",
                    "slug": "west-carroll",
                },
                "Tensas": {
                    "id": 6884,
                    "name": "Tensas",
                    "slug": "tensas",
                },
                "Terrebonne": {
                    "id": 6883,
                    "name": "Terrebonne",
                    "slug": "terrebonne",
                },
                "St. Helena": {
                    "id": 6882,
                    "name": "St. Helena",
                    "slug": "st-helena",
                },
                "East Feliciana": {
                    "id": 6881,
                    "name": "East Feliciana",
                    "slug": "east-feliciana",
                },
                "Catahoula": {
                    "id": 6880,
                    "name": "Catahoula",
                    "slug": "catahoula",
                },
                "Ascension": {
                    "id": 6879,
                    "name": "Ascension",
                    "slug": "ascension",
                },
                "Grant": {
                    "id": 6878,
                    "name": "Grant",
                    "slug": "grant-5",
                },
                "Vernon": {
                    "id": 6877,
                    "name": "Vernon",
                    "slug": "vernon-2",
                },
                "Caddo": {
                    "id": 6876,
                    "name": "Caddo",
                    "slug": "caddo",
                },
                "Winn": {
                    "id": 6875,
                    "name": "Winn",
                    "slug": "winn",
                },
                "Union": {
                    "id": 6874,
                    "name": "Union",
                    "slug": "union-9",
                },
                "St. Tammany": {
                    "id": 6873,
                    "name": "St. Tammany",
                    "slug": "st-tammany",
                },
                "Richland": {
                    "id": 6872,
                    "name": "Richland",
                    "slug": "richland-2",
                },
                "Morehouse": {
                    "id": 6871,
                    "name": "Morehouse",
                    "slug": "morehouse",
                },
                "Livingston": {
                    "id": 6870,
                    "name": "Livingston",
                    "slug": "livingston-3",
                },
                "Jefferson Davis": {
                    "id": 6869,
                    "name": "Jefferson Davis",
                    "slug": "jefferson-davis",
                },
                "Evangeline": {
                    "id": 6868,
                    "name": "Evangeline",
                    "slug": "evangeline",
                },
                "East Carroll": {
                    "id": 6867,
                    "name": "East Carroll",
                    "slug": "east-carroll",
                },
                "Webster": {
                    "id": 6866,
                    "name": "Webster",
                    "slug": "webster-4",
                },
                "Sabine": {
                    "id": 6865,
                    "name": "Sabine",
                    "slug": "sabine",
                },
                "Rapides": {
                    "id": 6864,
                    "name": "Rapides",
                    "slug": "rapides",
                },
                "Orleans": {
                    "id": 6863,
                    "name": "Orleans",
                    "slug": "orleans",
                },
                "Natchitoches": {
                    "id": 6862,
                    "name": "Natchitoches",
                    "slug": "natchitoches",
                },
                "East Baton Rouge": {
                    "id": 6861,
                    "name": "East Baton Rouge",
                    "slug": "east-baton-rouge",
                },
                "DeSoto": {
                    "id": 6860,
                    "name": "DeSoto",
                    "slug": "desoto-2",
                },
                "Concordia": {
                    "id": 6859,
                    "name": "Concordia",
                    "slug": "concordia",
                },
                "Bienville": {
                    "id": 6858,
                    "name": "Bienville",
                    "slug": "bienville",
                },
                "Acadia": {
                    "id": 6857,
                    "name": "Acadia",
                    "slug": "acadia",
                },
            },
        },
    },
    "ME": {
        "id": 49,
        "name": "Maine",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {
                "Unity": {
                    "id": 12474,
                    "name": "Unity",
                    "slug": "unity-2",
                },
                "Beals": {
                    "id": 12472,
                    "name": "Beals",
                    "slug": "beals",
                },
                "York": {
                    "id": 7286,
                    "name": "York",
                    "slug": "york",
                },
                "Yarmouth": {
                    "id": 7285,
                    "name": "Yarmouth",
                    "slug": "yarmouth",
                },
                "Woolwich": {
                    "id": 7284,
                    "name": "Woolwich",
                    "slug": "woolwich",
                },
                "Woodstock": {
                    "id": 7283,
                    "name": "Woodstock",
                    "slug": "woodstock-2",
                },
                "Woodland": {
                    "id": 7282,
                    "name": "Woodland",
                    "slug": "woodland",
                },
                "Wiscasset": {
                    "id": 7281,
                    "name": "Wiscasset",
                    "slug": "wiscasset",
                },
                "Winthrop": {
                    "id": 7280,
                    "name": "Winthrop",
                    "slug": "winthrop",
                },
                "Winterport": {
                    "id": 7279,
                    "name": "Winterport",
                    "slug": "winterport",
                },
                "Winter Harbor": {
                    "id": 7278,
                    "name": "Winter Harbor",
                    "slug": "winter-harbor",
                },
                "Winslow": {
                    "id": 7277,
                    "name": "Winslow",
                    "slug": "winslow",
                },
                "Windsor": {
                    "id": 7275,
                    "name": "Windsor",
                    "slug": "windsor-2",
                },
                "Windham": {
                    "id": 7274,
                    "name": "Windham",
                    "slug": "windham-2",
                },
                "Wilton": {
                    "id": 7273,
                    "name": "Wilton",
                    "slug": "wilton-2",
                },
                "Whitefield": {
                    "id": 7272,
                    "name": "Whitefield",
                    "slug": "whitefield",
                },
                "Westport Island": {
                    "id": 7271,
                    "name": "Westport Island",
                    "slug": "westport-island",
                },
                "Westfield": {
                    "id": 7270,
                    "name": "Westfield",
                    "slug": "westfield",
                },
                "Westbrook": {
                    "id": 7269,
                    "name": "Westbrook",
                    "slug": "westbrook-2",
                },
                "West Paris": {
                    "id": 7268,
                    "name": "West Paris",
                    "slug": "west-paris",
                },
                "West Gardiner": {
                    "id": 7267,
                    "name": "West Gardiner",
                    "slug": "west-gardiner",
                },
                "West Bath": {
                    "id": 7266,
                    "name": "West Bath",
                    "slug": "west-bath",
                },
                "Wells": {
                    "id": 7265,
                    "name": "Wells",
                    "slug": "wells-2",
                },
                "Wayne": {
                    "id": 7264,
                    "name": "Wayne",
                    "slug": "wayne-6",
                },
                "Waterville": {
                    "id": 7263,
                    "name": "Waterville",
                    "slug": "waterville",
                },
                "Waterford": {
                    "id": 7262,
                    "name": "Waterford",
                    "slug": "waterford-2",
                },
                "Waterboro": {
                    "id": 7261,
                    "name": "Waterboro",
                    "slug": "waterboro",
                },
                "Washington": {
                    "id": 7260,
                    "name": "Washington",
                    "slug": "washington-15",
                },
                "Washburn": {
                    "id": 7259,
                    "name": "Washburn",
                    "slug": "washburn",
                },
                "Warren": {
                    "id": 7258,
                    "name": "Warren",
                    "slug": "warren-7",
                },
                "Wallagrass": {
                    "id": 7257,
                    "name": "Wallagrass",
                    "slug": "wallagrass",
                },
                "Wales": {
                    "id": 7256,
                    "name": "Wales",
                    "slug": "wales",
                },
                "Waldoboro": {
                    "id": 7255,
                    "name": "Waldoboro",
                    "slug": "waldoboro",
                },
                "Waldo": {
                    "id": 7254,
                    "name": "Waldo",
                    "slug": "waldo",
                },
                "Vinalhaven": {
                    "id": 7253,
                    "name": "Vinalhaven",
                    "slug": "vinalhaven",
                },
                "Vienna": {
                    "id": 7252,
                    "name": "Vienna",
                    "slug": "vienna",
                },
                "Verona Island": {
                    "id": 7251,
                    "name": "Verona Island",
                    "slug": "verona-island",
                },
                "Veazie": {
                    "id": 7250,
                    "name": "Veazie",
                    "slug": "veazie",
                },
                "Vassalboro": {
                    "id": 7249,
                    "name": "Vassalboro",
                    "slug": "vassalboro",
                },
                "Van Buren": {
                    "id": 7248,
                    "name": "Van Buren",
                    "slug": "van-buren-3",
                },
                "Union": {
                    "id": 7247,
                    "name": "Union",
                    "slug": "union-10",
                },
                "Turner": {
                    "id": 7246,
                    "name": "Turner",
                    "slug": "turner-2",
                },
                "Troy": {
                    "id": 7245,
                    "name": "Troy",
                    "slug": "troy",
                },
                "Trenton": {
                    "id": 7244,
                    "name": "Trenton",
                    "slug": "trenton",
                },
                "Tremont": {
                    "id": 7243,
                    "name": "Tremont",
                    "slug": "tremont",
                },
                "Topsham": {
                    "id": 7242,
                    "name": "Topsham",
                    "slug": "topsham",
                },
                "Thorndike": {
                    "id": 7241,
                    "name": "Thorndike",
                    "slug": "thorndike",
                },
                "Thomaston": {
                    "id": 7240,
                    "name": "Thomaston",
                    "slug": "thomaston-2",
                },
                "Temple": {
                    "id": 7239,
                    "name": "Temple",
                    "slug": "temple",
                },
                "Swanville": {
                    "id": 7238,
                    "name": "Swanville",
                    "slug": "swanville",
                },
                "Surry": {
                    "id": 7237,
                    "name": "Surry",
                    "slug": "surry",
                },
                "Sumner": {
                    "id": 7236,
                    "name": "Sumner",
                    "slug": "sumner-2",
                },
                "Sullivan": {
                    "id": 7235,
                    "name": "Sullivan",
                    "slug": "sullivan-2",
                },
                "Strong": {
                    "id": 7234,
                    "name": "Strong",
                    "slug": "strong",
                },
                "Stonington": {
                    "id": 7233,
                    "name": "Stonington",
                    "slug": "stonington-2",
                },
                "Stockton Springs": {
                    "id": 7232,
                    "name": "Stockton Springs",
                    "slug": "stockton-springs",
                },
                "Steuben": {
                    "id": 7231,
                    "name": "Steuben",
                    "slug": "steuben-2",
                },
                "Stetson": {
                    "id": 7230,
                    "name": "Stetson",
                    "slug": "stetson",
                },
                "Starks": {
                    "id": 7229,
                    "name": "Starks",
                    "slug": "starks",
                },
                "Standish": {
                    "id": 7228,
                    "name": "Standish",
                    "slug": "standish",
                },
                "Southwest Harbor": {
                    "id": 7227,
                    "name": "Southwest Harbor",
                    "slug": "southwest-harbor",
                },
                "Southport": {
                    "id": 7226,
                    "name": "Southport",
                    "slug": "southport",
                },
                "South Thomaston": {
                    "id": 7225,
                    "name": "South Thomaston",
                    "slug": "south-thomaston",
                },
                "South Portland": {
                    "id": 7224,
                    "name": "South Portland",
                    "slug": "south-portland",
                },
                "South Bristol": {
                    "id": 7223,
                    "name": "South Bristol",
                    "slug": "south-bristol",
                },
                "South Berwick": {
                    "id": 7222,
                    "name": "South Berwick",
                    "slug": "south-berwick",
                },
                "Somerville": {
                    "id": 7221,
                    "name": "Somerville",
                    "slug": "somerville",
                },
                "Solon": {
                    "id": 7220,
                    "name": "Solon",
                    "slug": "solon",
                },
                "Smithfield": {
                    "id": 7219,
                    "name": "Smithfield",
                    "slug": "smithfield",
                },
                "Skowhegan": {
                    "id": 7218,
                    "name": "Skowhegan",
                    "slug": "skowhegan",
                },
                "Sidney": {
                    "id": 7217,
                    "name": "Sidney",
                    "slug": "sidney",
                },
                "Sherman": {
                    "id": 7216,
                    "name": "Sherman",
                    "slug": "sherman-3",
                },
                "Shapleigh": {
                    "id": 7215,
                    "name": "Shapleigh",
                    "slug": "shapleigh",
                },
                "Sedgwick": {
                    "id": 7214,
                    "name": "Sedgwick",
                    "slug": "sedgwick-3",
                },
                "Sebec": {
                    "id": 7213,
                    "name": "Sebec",
                    "slug": "sebec",
                },
                "Sebago": {
                    "id": 7212,
                    "name": "Sebago",
                    "slug": "sebago",
                },
                "Searsport": {
                    "id": 7211,
                    "name": "Searsport",
                    "slug": "searsport",
                },
                "Searsmont": {
                    "id": 7210,
                    "name": "Searsmont",
                    "slug": "searsmont",
                },
                "Scarborough": {
                    "id": 7209,
                    "name": "Scarborough",
                    "slug": "scarborough",
                },
                "Sangerville": {
                    "id": 7208,
                    "name": "Sangerville",
                    "slug": "sangerville",
                },
                "Sanford": {
                    "id": 7207,
                    "name": "Sanford",
                    "slug": "sanford",
                },
                "Saint George": {
                    "id": 7206,
                    "name": "Saint George",
                    "slug": "saint-george",
                },
                "Saint Albans": {
                    "id": 7205,
                    "name": "Saint Albans",
                    "slug": "saint-albans",
                },
                "Saint Agatha": {
                    "id": 7204,
                    "name": "Saint Agatha",
                    "slug": "saint-agatha",
                },
                "Saco": {
                    "id": 7203,
                    "name": "Saco",
                    "slug": "saco",
                },
                "Sabattus": {
                    "id": 7202,
                    "name": "Sabattus",
                    "slug": "sabattus",
                },
                "Rumford": {
                    "id": 7201,
                    "name": "Rumford",
                    "slug": "rumford",
                },
                "Rome": {
                    "id": 7200,
                    "name": "Rome",
                    "slug": "rome",
                },
                "Rockport": {
                    "id": 7199,
                    "name": "Rockport",
                    "slug": "rockport",
                },
                "Rockland": {
                    "id": 7198,
                    "name": "Rockland",
                    "slug": "rockland",
                },
                "Robbinston": {
                    "id": 7197,
                    "name": "Robbinston",
                    "slug": "robbinston",
                },
                "Richmond": {
                    "id": 7196,
                    "name": "Richmond",
                    "slug": "richmond-2",
                },
                "Readfield": {
                    "id": 7195,
                    "name": "Readfield",
                    "slug": "readfield",
                },
                "Raymond": {
                    "id": 7194,
                    "name": "Raymond",
                    "slug": "raymond",
                },
                "Rangeley": {
                    "id": 7193,
                    "name": "Rangeley",
                    "slug": "rangeley",
                },
                "Randolph": {
                    "id": 7192,
                    "name": "Randolph",
                    "slug": "randolph-6",
                },
                "Prospect": {
                    "id": 7191,
                    "name": "Prospect",
                    "slug": "prospect-2",
                },
                "Princeton": {
                    "id": 7190,
                    "name": "Princeton",
                    "slug": "princeton",
                },
                "Presque Isle": {
                    "id": 7189,
                    "name": "Presque Isle",
                    "slug": "presque-isle",
                },
                "Pownal": {
                    "id": 7188,
                    "name": "Pownal",
                    "slug": "pownal",
                },
                "Portland": {
                    "id": 7187,
                    "name": "Portland",
                    "slug": "portland-2",
                },
                "Porter": {
                    "id": 7186,
                    "name": "Porter",
                    "slug": "porter-2",
                },
                "Poland": {
                    "id": 7185,
                    "name": "Poland",
                    "slug": "poland",
                },
                "Plymouth": {
                    "id": 7184,
                    "name": "Plymouth",
                    "slug": "plymouth-3",
                },
                "Pleasant Point": {
                    "id": 7183,
                    "name": "Pleasant Point",
                    "slug": "pleasant-point-voting-district",
                },
                "Pittston": {
                    "id": 7182,
                    "name": "Pittston",
                    "slug": "pittston",
                },
                "Pittsfield": {
                    "id": 7181,
                    "name": "Pittsfield",
                    "slug": "pittsfield",
                },
                "Phippsburg": {
                    "id": 7180,
                    "name": "Phippsburg",
                    "slug": "phippsburg",
                },
                "Phillips": {
                    "id": 7179,
                    "name": "Phillips",
                    "slug": "phillips-4",
                },
                "Peru": {
                    "id": 7178,
                    "name": "Peru",
                    "slug": "peru",
                },
                "Perry": {
                    "id": 7177,
                    "name": "Perry",
                    "slug": "perry-6",
                },
                "Penobscot Nation": {
                    "id": 7176,
                    "name": "Penobscot Nation",
                    "slug": "penobscot-nation-voting-district",
                },
                "Penobscot": {
                    "id": 7175,
                    "name": "Penobscot",
                    "slug": "penobscot",
                },
                "Pembroke": {
                    "id": 7174,
                    "name": "Pembroke",
                    "slug": "pembroke",
                },
                "Patten": {
                    "id": 7173,
                    "name": "Patten",
                    "slug": "patten",
                },
                "Parsonsfield": {
                    "id": 7172,
                    "name": "Parsonsfield",
                    "slug": "parsonsfield",
                },
                "Parkman": {
                    "id": 7171,
                    "name": "Parkman",
                    "slug": "parkman",
                },
                "Paris": {
                    "id": 7170,
                    "name": "Paris",
                    "slug": "paris",
                },
                "Palmyra": {
                    "id": 7169,
                    "name": "Palmyra",
                    "slug": "palmyra",
                },
                "Palermo": {
                    "id": 7168,
                    "name": "Palermo",
                    "slug": "palermo",
                },
                "Oxford": {
                    "id": 7167,
                    "name": "Oxford",
                    "slug": "oxford-2",
                },
                "Owls Head": {
                    "id": 7166,
                    "name": "Owls Head",
                    "slug": "owls-head",
                },
                "Otisfield": {
                    "id": 7165,
                    "name": "Otisfield",
                    "slug": "otisfield",
                },
                "Otis": {
                    "id": 7164,
                    "name": "Otis",
                    "slug": "otis",
                },
                "Orrington": {
                    "id": 7163,
                    "name": "Orrington",
                    "slug": "orrington",
                },
                "Orono": {
                    "id": 7162,
                    "name": "Orono",
                    "slug": "orono",
                },
                "Orland": {
                    "id": 7161,
                    "name": "Orland",
                    "slug": "orland",
                },
                "Old Town": {
                    "id": 7160,
                    "name": "Old Town",
                    "slug": "old-town",
                },
                "Old Orchard Beach": {
                    "id": 7159,
                    "name": "Old Orchard Beach",
                    "slug": "old-orchard-beach",
                },
                "Ogunquit": {
                    "id": 7158,
                    "name": "Ogunquit",
                    "slug": "ogunquit",
                },
                "Oakland": {
                    "id": 7157,
                    "name": "Oakland",
                    "slug": "oakland",
                },
                "Oakfield": {
                    "id": 7156,
                    "name": "Oakfield",
                    "slug": "oakfield",
                },
                "Norway": {
                    "id": 7155,
                    "name": "Norway",
                    "slug": "norway",
                },
                "Northport": {
                    "id": 7154,
                    "name": "Northport",
                    "slug": "northport",
                },
                "North Yarmouth": {
                    "id": 7153,
                    "name": "North Yarmouth",
                    "slug": "north-yarmouth",
                },
                "North Berwick": {
                    "id": 7152,
                    "name": "North Berwick",
                    "slug": "north-berwick",
                },
                "Norridgewock": {
                    "id": 7151,
                    "name": "Norridgewock",
                    "slug": "norridgewock",
                },
                "Nobleboro": {
                    "id": 7150,
                    "name": "Nobleboro",
                    "slug": "nobleboro",
                },
                "Newport": {
                    "id": 7149,
                    "name": "Newport",
                    "slug": "newport",
                },
                "Newfield": {
                    "id": 7148,
                    "name": "Newfield",
                    "slug": "newfield",
                },
                "Newcastle": {
                    "id": 7147,
                    "name": "Newcastle",
                    "slug": "newcastle",
                },
                "Newburgh": {
                    "id": 7146,
                    "name": "Newburgh",
                    "slug": "newburgh",
                },
                "New Vineyard": {
                    "id": 7145,
                    "name": "New Vineyard",
                    "slug": "new-vineyard",
                },
                "New Sweden": {
                    "id": 7144,
                    "name": "New Sweden",
                    "slug": "new-sweden",
                },
                "New Sharon": {
                    "id": 7143,
                    "name": "New Sharon",
                    "slug": "new-sharon",
                },
                "New Portland": {
                    "id": 7142,
                    "name": "New Portland",
                    "slug": "new-portland",
                },
                "New Gloucester": {
                    "id": 7141,
                    "name": "New Gloucester",
                    "slug": "new-gloucester",
                },
                "Naples": {
                    "id": 7140,
                    "name": "Naples",
                    "slug": "naples",
                },
                "Mount Vernon": {
                    "id": 7139,
                    "name": "Mount Vernon",
                    "slug": "mount-vernon",
                },
                "Mount Desert": {
                    "id": 7138,
                    "name": "Mount Desert",
                    "slug": "mount-desert",
                },
                "Moscow": {
                    "id": 7137,
                    "name": "Moscow",
                    "slug": "moscow",
                },
                "Morrill": {
                    "id": 7136,
                    "name": "Morrill",
                    "slug": "morrill",
                },
                "Montville": {
                    "id": 7135,
                    "name": "Montville",
                    "slug": "montville-2",
                },
                "Monticello": {
                    "id": 7134,
                    "name": "Monticello",
                    "slug": "monticello",
                },
                "Monson": {
                    "id": 7133,
                    "name": "Monson",
                    "slug": "monson",
                },
                "Monroe": {
                    "id": 7132,
                    "name": "Monroe",
                    "slug": "monroe-10",
                },
                "Monmouth": {
                    "id": 7131,
                    "name": "Monmouth",
                    "slug": "monmouth",
                },
                "Minot": {
                    "id": 7130,
                    "name": "Minot",
                    "slug": "minot",
                },
                "Milo": {
                    "id": 7129,
                    "name": "Milo",
                    "slug": "milo",
                },
                "Millinocket": {
                    "id": 7128,
                    "name": "Millinocket",
                    "slug": "millinocket",
                },
                "Milford": {
                    "id": 7127,
                    "name": "Milford",
                    "slug": "milford-2",
                },
                "Milbridge": {
                    "id": 7126,
                    "name": "Milbridge",
                    "slug": "milbridge",
                },
                "Mexico": {
                    "id": 7125,
                    "name": "Mexico",
                    "slug": "mexico",
                },
                "Mercer": {
                    "id": 7124,
                    "name": "Mercer",
                    "slug": "mercer-3",
                },
                "Medway": {
                    "id": 7123,
                    "name": "Medway",
                    "slug": "medway",
                },
                "Mechanic Falls": {
                    "id": 7122,
                    "name": "Mechanic Falls",
                    "slug": "mechanic-falls",
                },
                "Mattawamkeag": {
                    "id": 7121,
                    "name": "Mattawamkeag",
                    "slug": "mattawamkeag",
                },
                "Marshfield": {
                    "id": 7120,
                    "name": "Marshfield",
                    "slug": "marshfield",
                },
                "Mars Hill": {
                    "id": 7119,
                    "name": "Mars Hill",
                    "slug": "mars-hill",
                },
                "Mariaville": {
                    "id": 7118,
                    "name": "Mariaville",
                    "slug": "mariaville",
                },
                "Mapleton": {
                    "id": 7117,
                    "name": "Mapleton",
                    "slug": "mapleton",
                },
                "Manchester": {
                    "id": 7116,
                    "name": "Manchester",
                    "slug": "manchester-2",
                },
                "Madison": {
                    "id": 7115,
                    "name": "Madison",
                    "slug": "madison-12",
                },
                "Madawaska": {
                    "id": 7113,
                    "name": "Madawaska",
                    "slug": "madawaska",
                },
                "Machiasport": {
                    "id": 7112,
                    "name": "Machiasport",
                    "slug": "machiasport",
                },
                "Machias": {
                    "id": 7111,
                    "name": "Machias",
                    "slug": "machias",
                },
                "Lyman": {
                    "id": 7110,
                    "name": "Lyman",
                    "slug": "lyman",
                },
                "Lubec": {
                    "id": 7109,
                    "name": "Lubec",
                    "slug": "lubec",
                },
                "Lovell": {
                    "id": 7108,
                    "name": "Lovell",
                    "slug": "lovell",
                },
                "Livermore Falls": {
                    "id": 7107,
                    "name": "Livermore Falls",
                    "slug": "livermore-falls",
                },
                "Livermore": {
                    "id": 7106,
                    "name": "Livermore",
                    "slug": "livermore",
                },
                "Littleton": {
                    "id": 7105,
                    "name": "Littleton",
                    "slug": "littleton",
                },
                "Litchfield": {
                    "id": 7104,
                    "name": "Litchfield",
                    "slug": "litchfield-2",
                },
                "Lisbon": {
                    "id": 7103,
                    "name": "Lisbon",
                    "slug": "lisbon-2",
                },
                "Linneus": {
                    "id": 7102,
                    "name": "Linneus",
                    "slug": "linneus",
                },
                "Lincolnville": {
                    "id": 7101,
                    "name": "Lincolnville",
                    "slug": "lincolnville",
                },
                "Lincoln": {
                    "id": 7100,
                    "name": "Lincoln",
                    "slug": "lincoln-8",
                },
                "Limington": {
                    "id": 7099,
                    "name": "Limington",
                    "slug": "limington",
                },
                "Limestone": {
                    "id": 7098,
                    "name": "Limestone",
                    "slug": "limestone-2",
                },
                "Limerick": {
                    "id": 7097,
                    "name": "Limerick",
                    "slug": "limerick",
                },
                "Liberty": {
                    "id": 7096,
                    "name": "Liberty",
                    "slug": "liberty-3",
                },
                "Lewiston": {
                    "id": 7095,
                    "name": "Lewiston",
                    "slug": "lewiston",
                },
                "Levant": {
                    "id": 7094,
                    "name": "Levant",
                    "slug": "levant",
                },
                "Leeds": {
                    "id": 7093,
                    "name": "Leeds",
                    "slug": "leeds",
                },
                "Lee": {
                    "id": 7092,
                    "name": "Lee",
                    "slug": "lee-8",
                },
                "Lebanon": {
                    "id": 7091,
                    "name": "Lebanon",
                    "slug": "lebanon-2",
                },
                "Lamoine": {
                    "id": 7090,
                    "name": "Lamoine",
                    "slug": "lamoine",
                },
                "Lagrange": {
                    "id": 7089,
                    "name": "Lagrange",
                    "slug": "lagrange-2",
                },
                "Knox": {
                    "id": 7088,
                    "name": "Knox",
                    "slug": "knox-4",
                },
                "Kittery": {
                    "id": 7087,
                    "name": "Kittery",
                    "slug": "kittery",
                },
                "Kingfield": {
                    "id": 7086,
                    "name": "Kingfield",
                    "slug": "kingfield",
                },
                "Kennebunkport": {
                    "id": 7085,
                    "name": "Kennebunkport",
                    "slug": "kennebunkport",
                },
                "Kennebunk": {
                    "id": 7084,
                    "name": "Kennebunk",
                    "slug": "kennebunk",
                },
                "Kenduskeag": {
                    "id": 7083,
                    "name": "Kenduskeag",
                    "slug": "kenduskeag",
                },
                "Jonesport": {
                    "id": 7082,
                    "name": "Jonesport",
                    "slug": "jonesport",
                },
                "Jonesboro": {
                    "id": 7081,
                    "name": "Jonesboro",
                    "slug": "jonesboro",
                },
                "Jefferson": {
                    "id": 7080,
                    "name": "Jefferson",
                    "slug": "jefferson-13",
                },
                "Jay": {
                    "id": 7079,
                    "name": "Jay",
                    "slug": "jay-2",
                },
                "Jackson": {
                    "id": 7078,
                    "name": "Jackson",
                    "slug": "jackson-12",
                },
                "Jackman": {
                    "id": 7077,
                    "name": "Jackman",
                    "slug": "jackman",
                },
                "Islesboro": {
                    "id": 7076,
                    "name": "Islesboro",
                    "slug": "islesboro",
                },
                "Island Falls": {
                    "id": 7075,
                    "name": "Island Falls",
                    "slug": "island-falls",
                },
                "Industry": {
                    "id": 7074,
                    "name": "Industry",
                    "slug": "industry",
                },
                "Indian Township": {
                    "id": 7073,
                    "name": "Indian Township",
                    "slug": "indian-township",
                },
                "Hudson": {
                    "id": 7072,
                    "name": "Hudson",
                    "slug": "hudson",
                },
                "Howland": {
                    "id": 7071,
                    "name": "Howland",
                    "slug": "howland",
                },
                "Houlton": {
                    "id": 7070,
                    "name": "Houlton",
                    "slug": "houlton",
                },
                "Hope": {
                    "id": 7069,
                    "name": "Hope",
                    "slug": "hope",
                },
                "Hollis": {
                    "id": 7068,
                    "name": "Hollis",
                    "slug": "hollis",
                },
                "Holden": {
                    "id": 7067,
                    "name": "Holden",
                    "slug": "holden",
                },
                "Hodgdon": {
                    "id": 7066,
                    "name": "Hodgdon",
                    "slug": "hodgdon",
                },
                "Hiram": {
                    "id": 7065,
                    "name": "Hiram",
                    "slug": "hiram",
                },
                "Hermon": {
                    "id": 7064,
                    "name": "Hermon",
                    "slug": "hermon",
                },
                "Hebron": {
                    "id": 7063,
                    "name": "Hebron",
                    "slug": "hebron-2",
                },
                "Hartland": {
                    "id": 7062,
                    "name": "Hartland",
                    "slug": "hartland-2",
                },
                "Hartford": {
                    "id": 7061,
                    "name": "Hartford",
                    "slug": "hartford-2",
                },
                "Harrison": {
                    "id": 7060,
                    "name": "Harrison",
                    "slug": "harrison-4",
                },
                "Harrington": {
                    "id": 7059,
                    "name": "Harrington",
                    "slug": "harrington",
                },
                "Harpswell": {
                    "id": 7058,
                    "name": "Harpswell",
                    "slug": "harpswell",
                },
                "Harmony": {
                    "id": 7057,
                    "name": "Harmony",
                    "slug": "harmony",
                },
                "Hancock": {
                    "id": 7056,
                    "name": "Hancock",
                    "slug": "hancock-6",
                },
                "Hampden": {
                    "id": 7055,
                    "name": "Hampden",
                    "slug": "hampden",
                },
                "Hallowell": {
                    "id": 7054,
                    "name": "Hallowell",
                    "slug": "hallowell",
                },
                "Guilford": {
                    "id": 7053,
                    "name": "Guilford",
                    "slug": "guilford-2",
                },
                "Greenwood": {
                    "id": 7052,
                    "name": "Greenwood",
                    "slug": "greenwood-2",
                },
                "Greenville": {
                    "id": 7051,
                    "name": "Greenville",
                    "slug": "greenville",
                },
                "Greene": {
                    "id": 7050,
                    "name": "Greene",
                    "slug": "greene-7",
                },
                "Greenbush": {
                    "id": 7049,
                    "name": "Greenbush",
                    "slug": "greenbush",
                },
                "Gray": {
                    "id": 7048,
                    "name": "Gray",
                    "slug": "gray-2",
                },
                "Gouldsboro": {
                    "id": 7047,
                    "name": "Gouldsboro",
                    "slug": "gouldsboro",
                },
                "Gorham": {
                    "id": 7046,
                    "name": "Gorham",
                    "slug": "gorham",
                },
                "Glenburn": {
                    "id": 7045,
                    "name": "Glenburn",
                    "slug": "glenburn",
                },
                "Georgetown": {
                    "id": 7044,
                    "name": "Georgetown",
                    "slug": "georgetown",
                },
                "Garland": {
                    "id": 7043,
                    "name": "Garland",
                    "slug": "garland-2",
                },
                "Gardiner": {
                    "id": 7042,
                    "name": "Gardiner",
                    "slug": "gardiner",
                },
                "Fryeburg": {
                    "id": 7041,
                    "name": "Fryeburg",
                    "slug": "fryeburg",
                },
                "Friendship": {
                    "id": 7040,
                    "name": "Friendship",
                    "slug": "friendship",
                },
                "Frenchville": {
                    "id": 7039,
                    "name": "Frenchville",
                    "slug": "frenchville",
                },
                "Freeport": {
                    "id": 7038,
                    "name": "Freeport",
                    "slug": "freeport",
                },
                "Freedom": {
                    "id": 7037,
                    "name": "Freedom",
                    "slug": "freedom",
                },
                "Franklin": {
                    "id": 7036,
                    "name": "Franklin",
                    "slug": "franklin-13",
                },
                "Frankfort": {
                    "id": 7035,
                    "name": "Frankfort",
                    "slug": "frankfort",
                },
                "Fort Kent": {
                    "id": 7034,
                    "name": "Fort Kent",
                    "slug": "fort-kent",
                },
                "Fort Fairfield": {
                    "id": 7033,
                    "name": "Fort Fairfield",
                    "slug": "fort-fairfield",
                },
                "Fayette": {
                    "id": 7032,
                    "name": "Fayette",
                    "slug": "fayette-7",
                },
                "Farmington": {
                    "id": 7031,
                    "name": "Farmington",
                    "slug": "farmington-2",
                },
                "Farmingdale": {
                    "id": 7030,
                    "name": "Farmingdale",
                    "slug": "farmingdale",
                },
                "Falmouth": {
                    "id": 7029,
                    "name": "Falmouth",
                    "slug": "falmouth",
                },
                "Fairfield": {
                    "id": 7028,
                    "name": "Fairfield",
                    "slug": "fairfield-2",
                },
                "Exeter": {
                    "id": 7027,
                    "name": "Exeter",
                    "slug": "exeter",
                },
                "Eustis": {
                    "id": 7026,
                    "name": "Eustis",
                    "slug": "eustis",
                },
                "Etna": {
                    "id": 7025,
                    "name": "Etna",
                    "slug": "etna",
                },
                "Enfield": {
                    "id": 7024,
                    "name": "Enfield",
                    "slug": "enfield-2",
                },
                "Embden": {
                    "id": 7023,
                    "name": "Embden",
                    "slug": "embden",
                },
                "Ellsworth": {
                    "id": 7022,
                    "name": "Ellsworth",
                    "slug": "ellsworth-2",
                },
                "Eliot": {
                    "id": 7021,
                    "name": "Eliot",
                    "slug": "eliot",
                },
                "Edgecomb": {
                    "id": 7020,
                    "name": "Edgecomb",
                    "slug": "edgecomb",
                },
                "Eddington": {
                    "id": 7019,
                    "name": "Eddington",
                    "slug": "eddington",
                },
                "Eastport": {
                    "id": 7018,
                    "name": "Eastport",
                    "slug": "eastport",
                },
                "Easton": {
                    "id": 7017,
                    "name": "Easton",
                    "slug": "easton-2",
                },
                "East Millinocket": {
                    "id": 7016,
                    "name": "East Millinocket",
                    "slug": "east-millinocket",
                },
                "East Machias": {
                    "id": 7015,
                    "name": "East Machias",
                    "slug": "east-machias",
                },
                "Eagle Lake": {
                    "id": 7014,
                    "name": "Eagle Lake",
                    "slug": "eagle-lake",
                },
                "Durham": {
                    "id": 7013,
                    "name": "Durham",
                    "slug": "durham-2",
                },
                "Dresden": {
                    "id": 7012,
                    "name": "Dresden",
                    "slug": "dresden",
                },
                "Dover-Foxcroft": {
                    "id": 7011,
                    "name": "Dover-Foxcroft",
                    "slug": "dover-foxcroft",
                },
                "Dixmont": {
                    "id": 7010,
                    "name": "Dixmont",
                    "slug": "dixmont",
                },
                "Dixfield": {
                    "id": 7009,
                    "name": "Dixfield",
                    "slug": "dixfield",
                },
                "Dexter": {
                    "id": 7008,
                    "name": "Dexter",
                    "slug": "dexter",
                },
                "Detroit": {
                    "id": 7007,
                    "name": "Detroit",
                    "slug": "detroit",
                },
                "Denmark": {
                    "id": 7006,
                    "name": "Denmark",
                    "slug": "denmark",
                },
                "Deer Isle": {
                    "id": 7005,
                    "name": "Deer Isle",
                    "slug": "deer-isle",
                },
                "Dedham": {
                    "id": 7004,
                    "name": "Dedham",
                    "slug": "dedham",
                },
                "Dayton": {
                    "id": 7003,
                    "name": "Dayton",
                    "slug": "dayton",
                },
                "Danforth": {
                    "id": 7002,
                    "name": "Danforth",
                    "slug": "danforth",
                },
                "Damariscotta": {
                    "id": 7001,
                    "name": "Damariscotta",
                    "slug": "damariscotta",
                },
                "Cutler": {
                    "id": 7000,
                    "name": "Cutler",
                    "slug": "cutler",
                },
                "Cushing": {
                    "id": 6999,
                    "name": "Cushing",
                    "slug": "cushing",
                },
                "Cumberland": {
                    "id": 6998,
                    "name": "Cumberland",
                    "slug": "cumberland-3",
                },
                "Cornville": {
                    "id": 6996,
                    "name": "Cornville",
                    "slug": "cornville",
                },
                "Cornish": {
                    "id": 6995,
                    "name": "Cornish",
                    "slug": "cornish",
                },
                "Corinth": {
                    "id": 6994,
                    "name": "Corinth",
                    "slug": "corinth",
                },
                "Corinna": {
                    "id": 6993,
                    "name": "Corinna",
                    "slug": "corinna",
                },
                "Columbia Falls": {
                    "id": 6992,
                    "name": "Columbia Falls",
                    "slug": "columbia-falls",
                },
                "Clinton": {
                    "id": 6991,
                    "name": "Clinton",
                    "slug": "clinton-6",
                },
                "Clifton": {
                    "id": 6990,
                    "name": "Clifton",
                    "slug": "clifton",
                },
                "China": {
                    "id": 6989,
                    "name": "China",
                    "slug": "china",
                },
                "Chesterville": {
                    "id": 6988,
                    "name": "Chesterville",
                    "slug": "chesterville",
                },
                "Chester": {
                    "id": 6987,
                    "name": "Chester",
                    "slug": "chester-2",
                },
                "Cherryfield": {
                    "id": 6986,
                    "name": "Cherryfield",
                    "slug": "cherryfield",
                },
                "Chelsea": {
                    "id": 6985,
                    "name": "Chelsea",
                    "slug": "chelsea",
                },
                "Charleston": {
                    "id": 6984,
                    "name": "Charleston",
                    "slug": "charleston",
                },
                "Castine": {
                    "id": 6983,
                    "name": "Castine",
                    "slug": "castine",
                },
                "Casco": {
                    "id": 6982,
                    "name": "Casco",
                    "slug": "casco",
                },
                "Carthage": {
                    "id": 6981,
                    "name": "Carthage",
                    "slug": "carthage",
                },
                "Carrabassett Valley": {
                    "id": 6980,
                    "name": "Carrabassett Valley",
                    "slug": "carrabassett-valley",
                },
                "Carmel": {
                    "id": 6979,
                    "name": "Carmel",
                    "slug": "carmel",
                },
                "Caribou": {
                    "id": 6978,
                    "name": "Caribou",
                    "slug": "caribou-2",
                },
                "Cape Elizabeth": {
                    "id": 6977,
                    "name": "Cape Elizabeth",
                    "slug": "cape-elizabeth",
                },
                "Canton": {
                    "id": 6976,
                    "name": "Canton",
                    "slug": "canton-2",
                },
                "Canaan": {
                    "id": 6975,
                    "name": "Canaan",
                    "slug": "canaan-2",
                },
                "Camden": {
                    "id": 6974,
                    "name": "Camden",
                    "slug": "camden-2",
                },
                "Calais": {
                    "id": 6973,
                    "name": "Calais",
                    "slug": "calais",
                },
                "Buxton": {
                    "id": 6972,
                    "name": "Buxton",
                    "slug": "buxton",
                },
                "Burnham": {
                    "id": 6971,
                    "name": "Burnham",
                    "slug": "burnham",
                },
                "Bucksport": {
                    "id": 6970,
                    "name": "Bucksport",
                    "slug": "bucksport",
                },
                "Buckfield": {
                    "id": 6969,
                    "name": "Buckfield",
                    "slug": "buckfield",
                },
                "Brunswick": {
                    "id": 6968,
                    "name": "Brunswick",
                    "slug": "brunswick",
                },
                "Brownville": {
                    "id": 6967,
                    "name": "Brownville",
                    "slug": "brownville",
                },
                "Brownfield": {
                    "id": 6966,
                    "name": "Brownfield",
                    "slug": "brownfield",
                },
                "Brooksville": {
                    "id": 6965,
                    "name": "Brooksville",
                    "slug": "brooksville",
                },
                "Brooks": {
                    "id": 6964,
                    "name": "Brooks",
                    "slug": "brooks-2",
                },
                "Brooklin": {
                    "id": 6963,
                    "name": "Brooklin",
                    "slug": "brooklin",
                },
                "Bristol": {
                    "id": 6962,
                    "name": "Bristol",
                    "slug": "bristol-2",
                },
                "Bridgton": {
                    "id": 6961,
                    "name": "Bridgton",
                    "slug": "bridgton",
                },
                "Bridgewater": {
                    "id": 6960,
                    "name": "Bridgewater",
                    "slug": "bridgewater-2",
                },
                "Brewer": {
                    "id": 6959,
                    "name": "Brewer",
                    "slug": "brewer",
                },
                "Bremen": {
                    "id": 6958,
                    "name": "Bremen",
                    "slug": "bremen",
                },
                "Bradley": {
                    "id": 6957,
                    "name": "Bradley",
                    "slug": "bradley-2",
                },
                "Bradford": {
                    "id": 6956,
                    "name": "Bradford",
                    "slug": "bradford-2",
                },
                "Bowdoinham": {
                    "id": 6955,
                    "name": "Bowdoinham",
                    "slug": "bowdoinham",
                },
                "Bowdoin": {
                    "id": 6954,
                    "name": "Bowdoin",
                    "slug": "bowdoin",
                },
                "Boothbay Harbor": {
                    "id": 6953,
                    "name": "Boothbay Harbor",
                    "slug": "boothbay-harbor",
                },
                "Boothbay": {
                    "id": 6952,
                    "name": "Boothbay",
                    "slug": "boothbay",
                },
                "Blue Hill": {
                    "id": 6951,
                    "name": "Blue Hill",
                    "slug": "blue-hill",
                },
                "Blaine": {
                    "id": 6950,
                    "name": "Blaine",
                    "slug": "blaine-2",
                },
                "Bingham": {
                    "id": 6949,
                    "name": "Bingham",
                    "slug": "bingham-2",
                },
                "Biddeford": {
                    "id": 6948,
                    "name": "Biddeford",
                    "slug": "biddeford",
                },
                "Bethel": {
                    "id": 6947,
                    "name": "Bethel",
                    "slug": "bethel-2",
                },
                "Berwick": {
                    "id": 6946,
                    "name": "Berwick",
                    "slug": "berwick",
                },
                "Benton": {
                    "id": 6945,
                    "name": "Benton",
                    "slug": "benton-4",
                },
                "Belmont": {
                    "id": 6944,
                    "name": "Belmont",
                    "slug": "belmont",
                },
                "Belgrade": {
                    "id": 6943,
                    "name": "Belgrade",
                    "slug": "belgrade",
                },
                "Belfast": {
                    "id": 6942,
                    "name": "Belfast",
                    "slug": "belfast",
                },
                "Bath": {
                    "id": 6941,
                    "name": "Bath",
                    "slug": "bath-2",
                },
                "Bar Harbor": {
                    "id": 6940,
                    "name": "Bar Harbor",
                    "slug": "bar-harbor",
                },
                "Bangor": {
                    "id": 6939,
                    "name": "Bangor",
                    "slug": "bangor",
                },
                "Baldwin": {
                    "id": 6938,
                    "name": "Baldwin",
                    "slug": "baldwin-3",
                },
                "Baileyville": {
                    "id": 6937,
                    "name": "Baileyville",
                    "slug": "baileyville",
                },
                "Augusta": {
                    "id": 6936,
                    "name": "Augusta",
                    "slug": "augusta",
                },
                "Auburn": {
                    "id": 6935,
                    "name": "Auburn",
                    "slug": "auburn",
                },
                "Athens": {
                    "id": 6934,
                    "name": "Athens",
                    "slug": "athens",
                },
                "Ashland": {
                    "id": 6933,
                    "name": "Ashland",
                    "slug": "ashland",
                },
                "Arundel": {
                    "id": 6932,
                    "name": "Arundel",
                    "slug": "arundel",
                },
                "Appleton": {
                    "id": 6931,
                    "name": "Appleton",
                    "slug": "appleton",
                },
                "Anson": {
                    "id": 6930,
                    "name": "Anson",
                    "slug": "anson",
                },
                "Andover": {
                    "id": 6929,
                    "name": "Andover",
                    "slug": "andover-2",
                },
                "Alton": {
                    "id": 6928,
                    "name": "Alton",
                    "slug": "alton",
                },
                "Alna": {
                    "id": 6927,
                    "name": "Alna",
                    "slug": "alna",
                },
                "Alfred": {
                    "id": 6926,
                    "name": "Alfred",
                    "slug": "alfred",
                },
                "Albion": {
                    "id": 6925,
                    "name": "Albion",
                    "slug": "albion",
                },
                "Addison": {
                    "id": 6923,
                    "name": "Addison",
                    "slug": "addison",
                },
                "Acton": {
                    "id": 6922,
                    "name": "Acton",
                    "slug": "acton",
                },
                "Abbot": {
                    "id": 6921,
                    "name": "Abbot",
                    "slug": "abbot",
                },
            },
            "counties": {},
        },
    },
    "MD": {
        "id": 50,
        "name": "Maryland",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {
                "Baltimore": {
                    "id": 7310,
                    "name": "Baltimore",
                    "slug": "baltimore-2",
                },
            },
            "counties": {
                "Somerset": {
                    "id": 7309,
                    "name": "Somerset",
                    "slug": "somerset",
                },
                "Kent": {
                    "id": 7308,
                    "name": "Kent",
                    "slug": "kent-3",
                },
                "Prince Georges": {
                    "id": 7307,
                    "name": "Prince Georges",
                    "slug": "prince-georges",
                },
                "Queen Annes": {
                    "id": 7306,
                    "name": "Queen Annes",
                    "slug": "queen-annes",
                },
                "Harford": {
                    "id": 7305,
                    "name": "Harford",
                    "slug": "harford",
                },
                "Cecil": {
                    "id": 7304,
                    "name": "Cecil",
                    "slug": "cecil",
                },
                "Dorchester": {
                    "id": 7303,
                    "name": "Dorchester",
                    "slug": "dorchester",
                },
                "Calvert": {
                    "id": 7302,
                    "name": "Calvert",
                    "slug": "calvert",
                },
                "Howard": {
                    "id": 7301,
                    "name": "Howard",
                    "slug": "howard-4",
                },
                "Garrett": {
                    "id": 7300,
                    "name": "Garrett",
                    "slug": "garrett",
                },
                "Caroline": {
                    "id": 7299,
                    "name": "Caroline",
                    "slug": "caroline",
                },
                "St. Marys": {
                    "id": 7298,
                    "name": "St. Marys",
                    "slug": "st-marys",
                },
                "Worcester": {
                    "id": 7297,
                    "name": "Worcester",
                    "slug": "worcester",
                },
                "Wicomico": {
                    "id": 7296,
                    "name": "Wicomico",
                    "slug": "wicomico",
                },
                "Talbot": {
                    "id": 7295,
                    "name": "Talbot",
                    "slug": "talbot-2",
                },
                "Montgomery": {
                    "id": 7294,
                    "name": "Montgomery",
                    "slug": "montgomery-9",
                },
                "Frederick": {
                    "id": 7293,
                    "name": "Frederick",
                    "slug": "frederick",
                },
                "Charles": {
                    "id": 7292,
                    "name": "Charles",
                    "slug": "charles",
                },
                "Baltimore": {
                    "id": 7291,
                    "name": "Baltimore",
                    "slug": "baltimore",
                },
                "Allegany": {
                    "id": 7290,
                    "name": "Allegany",
                    "slug": "allegany",
                },
                "Washington": {
                    "id": 7289,
                    "name": "Washington",
                    "slug": "washington-16",
                },
                "Carroll": {
                    "id": 7288,
                    "name": "Carroll",
                    "slug": "carroll-7",
                },
                "Anne Arundel": {
                    "id": 7287,
                    "name": "Anne Arundel",
                    "slug": "anne-arundel",
                },
            },
        },
    },
    "MA": {
        "id": 51,
        "name": "Massachusetts",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {
                "Yarmouth": {
                    "id": 7661,
                    "name": "Yarmouth",
                    "slug": "yarmouth-2",
                },
                "Wrentham": {
                    "id": 7660,
                    "name": "Wrentham",
                    "slug": "wrentham",
                },
                "Worthington": {
                    "id": 7659,
                    "name": "Worthington",
                    "slug": "worthington",
                },
                "Worcester": {
                    "id": 7658,
                    "name": "Worcester",
                    "slug": "worcester-2",
                },
                "Woburn": {
                    "id": 7657,
                    "name": "Woburn",
                    "slug": "woburn",
                },
                "Winthrop": {
                    "id": 7656,
                    "name": "Winthrop",
                    "slug": "winthrop-2",
                },
                "Windsor": {
                    "id": 7655,
                    "name": "Windsor",
                    "slug": "windsor-3",
                },
                "Winchester": {
                    "id": 7654,
                    "name": "Winchester",
                    "slug": "winchester-2",
                },
                "Winchendon": {
                    "id": 7653,
                    "name": "Winchendon",
                    "slug": "winchendon",
                },
                "Wilmington": {
                    "id": 7652,
                    "name": "Wilmington",
                    "slug": "wilmington",
                },
                "Williamstown": {
                    "id": 7651,
                    "name": "Williamstown",
                    "slug": "williamstown",
                },
                "Williamsburg": {
                    "id": 7650,
                    "name": "Williamsburg",
                    "slug": "williamsburg",
                },
                "Wilbraham": {
                    "id": 7649,
                    "name": "Wilbraham",
                    "slug": "wilbraham",
                },
                "Whitman": {
                    "id": 7648,
                    "name": "Whitman",
                    "slug": "whitman",
                },
                "Whately": {
                    "id": 7647,
                    "name": "Whately",
                    "slug": "whately",
                },
                "Weymouth": {
                    "id": 7646,
                    "name": "Weymouth",
                    "slug": "weymouth",
                },
                "Westwood": {
                    "id": 7645,
                    "name": "Westwood",
                    "slug": "westwood",
                },
                "Westport": {
                    "id": 7644,
                    "name": "Westport",
                    "slug": "westport-2",
                },
                "Weston": {
                    "id": 7643,
                    "name": "Weston",
                    "slug": "weston-2",
                },
                "Westminster": {
                    "id": 7642,
                    "name": "Westminster",
                    "slug": "westminster",
                },
                "Westhampton": {
                    "id": 7641,
                    "name": "Westhampton",
                    "slug": "westhampton",
                },
                "Westford": {
                    "id": 7640,
                    "name": "Westford",
                    "slug": "westford",
                },
                "Westfield": {
                    "id": 7639,
                    "name": "Westfield",
                    "slug": "westfield-2",
                },
                "Westborough": {
                    "id": 7638,
                    "name": "Westborough",
                    "slug": "westborough",
                },
                "West Tisbury": {
                    "id": 7637,
                    "name": "West Tisbury",
                    "slug": "west-tisbury",
                },
                "West Stockbridge": {
                    "id": 7636,
                    "name": "West Stockbridge",
                    "slug": "west-stockbridge",
                },
                "West Springfield": {
                    "id": 7635,
                    "name": "West Springfield",
                    "slug": "west-springfield",
                },
                "West Newbury": {
                    "id": 7634,
                    "name": "West Newbury",
                    "slug": "west-newbury",
                },
                "West Brookfield": {
                    "id": 7633,
                    "name": "West Brookfield",
                    "slug": "west-brookfield",
                },
                "West Bridgewater": {
                    "id": 7632,
                    "name": "West Bridgewater",
                    "slug": "west-bridgewater",
                },
                "West Boylston": {
                    "id": 7631,
                    "name": "West Boylston",
                    "slug": "west-boylston",
                },
                "Wenham": {
                    "id": 7630,
                    "name": "Wenham",
                    "slug": "wenham",
                },
                "Wendell": {
                    "id": 7629,
                    "name": "Wendell",
                    "slug": "wendell",
                },
                "Wellfleet": {
                    "id": 7628,
                    "name": "Wellfleet",
                    "slug": "wellfleet",
                },
                "Wellesley": {
                    "id": 7627,
                    "name": "Wellesley",
                    "slug": "wellesley",
                },
                "Webster": {
                    "id": 7626,
                    "name": "Webster",
                    "slug": "webster-5",
                },
                "Wayland": {
                    "id": 7625,
                    "name": "Wayland",
                    "slug": "wayland",
                },
                "Watertown": {
                    "id": 7624,
                    "name": "Watertown",
                    "slug": "watertown-2",
                },
                "Washington": {
                    "id": 7623,
                    "name": "Washington",
                    "slug": "washington-17",
                },
                "Warwick": {
                    "id": 7622,
                    "name": "Warwick",
                    "slug": "warwick",
                },
                "Warren": {
                    "id": 7621,
                    "name": "Warren",
                    "slug": "warren-8",
                },
                "Wareham": {
                    "id": 7620,
                    "name": "Wareham",
                    "slug": "wareham",
                },
                "Ware": {
                    "id": 7619,
                    "name": "Ware",
                    "slug": "ware-2",
                },
                "Waltham": {
                    "id": 7618,
                    "name": "Waltham",
                    "slug": "waltham",
                },
                "Walpole": {
                    "id": 7617,
                    "name": "Walpole",
                    "slug": "walpole",
                },
                "Wales": {
                    "id": 7616,
                    "name": "Wales",
                    "slug": "wales-2",
                },
                "Wakefield": {
                    "id": 7615,
                    "name": "Wakefield",
                    "slug": "wakefield",
                },
                "Uxbridge": {
                    "id": 7614,
                    "name": "Uxbridge",
                    "slug": "uxbridge",
                },
                "Upton": {
                    "id": 7613,
                    "name": "Upton",
                    "slug": "upton",
                },
                "Tyringham": {
                    "id": 7612,
                    "name": "Tyringham",
                    "slug": "tyringham",
                },
                "Tyngsborough": {
                    "id": 7611,
                    "name": "Tyngsborough",
                    "slug": "tyngsborough",
                },
                "Truro": {
                    "id": 7610,
                    "name": "Truro",
                    "slug": "truro",
                },
                "Townsend": {
                    "id": 7609,
                    "name": "Townsend",
                    "slug": "townsend",
                },
                "Topsfield": {
                    "id": 7608,
                    "name": "Topsfield",
                    "slug": "topsfield",
                },
                "Tolland": {
                    "id": 7607,
                    "name": "Tolland",
                    "slug": "tolland-2",
                },
                "Tisbury": {
                    "id": 7606,
                    "name": "Tisbury",
                    "slug": "tisbury",
                },
                "Tewksbury": {
                    "id": 7605,
                    "name": "Tewksbury",
                    "slug": "tewksbury",
                },
                "Templeton": {
                    "id": 7604,
                    "name": "Templeton",
                    "slug": "templeton",
                },
                "Taunton": {
                    "id": 7603,
                    "name": "Taunton",
                    "slug": "taunton",
                },
                "Swansea": {
                    "id": 7602,
                    "name": "Swansea",
                    "slug": "swansea",
                },
                "Swampscott": {
                    "id": 7601,
                    "name": "Swampscott",
                    "slug": "swampscott",
                },
                "Sutton": {
                    "id": 7600,
                    "name": "Sutton",
                    "slug": "sutton",
                },
                "Sunderland": {
                    "id": 7599,
                    "name": "Sunderland",
                    "slug": "sunderland",
                },
                "Sudbury": {
                    "id": 7598,
                    "name": "Sudbury",
                    "slug": "sudbury",
                },
                "Sturbridge": {
                    "id": 7597,
                    "name": "Sturbridge",
                    "slug": "sturbridge",
                },
                "Stow": {
                    "id": 7596,
                    "name": "Stow",
                    "slug": "stow",
                },
                "Stoughton": {
                    "id": 7595,
                    "name": "Stoughton",
                    "slug": "stoughton",
                },
                "Stoneham": {
                    "id": 7594,
                    "name": "Stoneham",
                    "slug": "stoneham",
                },
                "Stockbridge": {
                    "id": 7593,
                    "name": "Stockbridge",
                    "slug": "stockbridge",
                },
                "Sterling": {
                    "id": 7592,
                    "name": "Sterling",
                    "slug": "sterling-2",
                },
                "Springfield": {
                    "id": 7591,
                    "name": "Springfield",
                    "slug": "springfield",
                },
                "Spencer": {
                    "id": 7590,
                    "name": "Spencer",
                    "slug": "spencer-3",
                },
                "Southwick": {
                    "id": 7589,
                    "name": "Southwick",
                    "slug": "southwick",
                },
                "Southbridge": {
                    "id": 7588,
                    "name": "Southbridge",
                    "slug": "southbridge",
                },
                "Southborough": {
                    "id": 7587,
                    "name": "Southborough",
                    "slug": "southborough",
                },
                "Southampton": {
                    "id": 7586,
                    "name": "Southampton",
                    "slug": "southampton",
                },
                "South Hadley": {
                    "id": 7585,
                    "name": "South Hadley",
                    "slug": "south-hadley",
                },
                "Somerville": {
                    "id": 7584,
                    "name": "Somerville",
                    "slug": "somerville-2",
                },
                "Somerset": {
                    "id": 7583,
                    "name": "Somerset",
                    "slug": "somerset-2",
                },
                "Shutesbury": {
                    "id": 7582,
                    "name": "Shutesbury",
                    "slug": "shutesbury",
                },
                "Shrewsbury": {
                    "id": 7581,
                    "name": "Shrewsbury",
                    "slug": "shrewsbury",
                },
                "Shirley": {
                    "id": 7580,
                    "name": "Shirley",
                    "slug": "shirley",
                },
                "Sherborn": {
                    "id": 7579,
                    "name": "Sherborn",
                    "slug": "sherborn",
                },
                "Shelburne": {
                    "id": 7578,
                    "name": "Shelburne",
                    "slug": "shelburne",
                },
                "Sheffield": {
                    "id": 7577,
                    "name": "Sheffield",
                    "slug": "sheffield",
                },
                "Sharon": {
                    "id": 7576,
                    "name": "Sharon",
                    "slug": "sharon-2",
                },
                "Seekonk": {
                    "id": 7575,
                    "name": "Seekonk",
                    "slug": "seekonk",
                },
                "Scituate": {
                    "id": 7574,
                    "name": "Scituate",
                    "slug": "scituate",
                },
                "Savoy": {
                    "id": 7573,
                    "name": "Savoy",
                    "slug": "savoy",
                },
                "Saugus": {
                    "id": 7572,
                    "name": "Saugus",
                    "slug": "saugus",
                },
                "Sandwich": {
                    "id": 7571,
                    "name": "Sandwich",
                    "slug": "sandwich",
                },
                "Sandisfield": {
                    "id": 7570,
                    "name": "Sandisfield",
                    "slug": "sandisfield",
                },
                "Salisbury": {
                    "id": 7569,
                    "name": "Salisbury",
                    "slug": "salisbury-2",
                },
                "Salem": {
                    "id": 7568,
                    "name": "Salem",
                    "slug": "salem-2",
                },
                "Rutland": {
                    "id": 7567,
                    "name": "Rutland",
                    "slug": "rutland",
                },
                "Russell": {
                    "id": 7566,
                    "name": "Russell",
                    "slug": "russell-4",
                },
                "Royalston": {
                    "id": 7565,
                    "name": "Royalston",
                    "slug": "royalston",
                },
                "Rowley": {
                    "id": 7564,
                    "name": "Rowley",
                    "slug": "rowley",
                },
                "Rowe": {
                    "id": 7563,
                    "name": "Rowe",
                    "slug": "rowe",
                },
                "Rockport": {
                    "id": 7562,
                    "name": "Rockport",
                    "slug": "rockport-2",
                },
                "Rockland": {
                    "id": 7561,
                    "name": "Rockland",
                    "slug": "rockland-2",
                },
                "Rochester": {
                    "id": 7560,
                    "name": "Rochester",
                    "slug": "rochester",
                },
                "Richmond": {
                    "id": 7559,
                    "name": "Richmond",
                    "slug": "richmond-3",
                },
                "Revere": {
                    "id": 7558,
                    "name": "Revere",
                    "slug": "revere",
                },
                "Rehoboth": {
                    "id": 7557,
                    "name": "Rehoboth",
                    "slug": "rehoboth",
                },
                "Reading": {
                    "id": 7556,
                    "name": "Reading",
                    "slug": "reading",
                },
                "Raynham": {
                    "id": 7555,
                    "name": "Raynham",
                    "slug": "raynham",
                },
                "Randolph": {
                    "id": 7554,
                    "name": "Randolph",
                    "slug": "randolph-7",
                },
                "Quincy": {
                    "id": 7553,
                    "name": "Quincy",
                    "slug": "quincy",
                },
                "Provincetown": {
                    "id": 7552,
                    "name": "Provincetown",
                    "slug": "provincetown",
                },
                "Princeton": {
                    "id": 7551,
                    "name": "Princeton",
                    "slug": "princeton-2",
                },
                "Plympton": {
                    "id": 7550,
                    "name": "Plympton",
                    "slug": "plympton",
                },
                "Plymouth": {
                    "id": 7549,
                    "name": "Plymouth",
                    "slug": "plymouth-4",
                },
                "Plainville": {
                    "id": 7548,
                    "name": "Plainville",
                    "slug": "plainville-2",
                },
                "Plainfield": {
                    "id": 7547,
                    "name": "Plainfield",
                    "slug": "plainfield-2",
                },
                "Pittsfield": {
                    "id": 7546,
                    "name": "Pittsfield",
                    "slug": "pittsfield-2",
                },
                "Phillipston": {
                    "id": 7545,
                    "name": "Phillipston",
                    "slug": "phillipston",
                },
                "Petersham": {
                    "id": 7544,
                    "name": "Petersham",
                    "slug": "petersham",
                },
                "Peru": {
                    "id": 7543,
                    "name": "Peru",
                    "slug": "peru-2",
                },
                "Pepperell": {
                    "id": 7542,
                    "name": "Pepperell",
                    "slug": "pepperell",
                },
                "Pembroke": {
                    "id": 7541,
                    "name": "Pembroke",
                    "slug": "pembroke-2",
                },
                "Pelham": {
                    "id": 7540,
                    "name": "Pelham",
                    "slug": "pelham",
                },
                "Peabody": {
                    "id": 7539,
                    "name": "Peabody",
                    "slug": "peabody",
                },
                "Paxton": {
                    "id": 7538,
                    "name": "Paxton",
                    "slug": "paxton",
                },
                "Palmer": {
                    "id": 7537,
                    "name": "Palmer",
                    "slug": "palmer",
                },
                "Oxford": {
                    "id": 7536,
                    "name": "Oxford",
                    "slug": "oxford-3",
                },
                "Otis": {
                    "id": 7535,
                    "name": "Otis",
                    "slug": "otis-2",
                },
                "Orleans": {
                    "id": 7534,
                    "name": "Orleans",
                    "slug": "orleans-2",
                },
                "Orange": {
                    "id": 7533,
                    "name": "Orange",
                    "slug": "orange-5",
                },
                "Oakham": {
                    "id": 7532,
                    "name": "Oakham",
                    "slug": "oakham",
                },
                "Oak Bluffs": {
                    "id": 7531,
                    "name": "Oak Bluffs",
                    "slug": "oak-bluffs",
                },
                "Norwood": {
                    "id": 7530,
                    "name": "Norwood",
                    "slug": "norwood",
                },
                "Norwell": {
                    "id": 7529,
                    "name": "Norwell",
                    "slug": "norwell",
                },
                "Norton": {
                    "id": 7528,
                    "name": "Norton",
                    "slug": "norton-2",
                },
                "Northfield": {
                    "id": 7527,
                    "name": "Northfield",
                    "slug": "northfield",
                },
                "Northbridge": {
                    "id": 7526,
                    "name": "Northbridge",
                    "slug": "northbridge",
                },
                "Northborough": {
                    "id": 7525,
                    "name": "Northborough",
                    "slug": "northborough",
                },
                "Northampton": {
                    "id": 7524,
                    "name": "Northampton",
                    "slug": "northampton",
                },
                "North Reading": {
                    "id": 7523,
                    "name": "North Reading",
                    "slug": "north-reading",
                },
                "North Brookfield": {
                    "id": 7522,
                    "name": "North Brookfield",
                    "slug": "north-brookfield",
                },
                "North Attleborough": {
                    "id": 7521,
                    "name": "North Attleborough",
                    "slug": "north-attleborough",
                },
                "North Andover": {
                    "id": 7520,
                    "name": "North Andover",
                    "slug": "north-andover",
                },
                "North Adams": {
                    "id": 7519,
                    "name": "North Adams",
                    "slug": "north-adams",
                },
                "Norfolk": {
                    "id": 7518,
                    "name": "Norfolk",
                    "slug": "norfolk-2",
                },
                "Newton": {
                    "id": 7517,
                    "name": "Newton",
                    "slug": "newton-4",
                },
                "Newburyport": {
                    "id": 7516,
                    "name": "Newburyport",
                    "slug": "newburyport",
                },
                "Newbury": {
                    "id": 7515,
                    "name": "Newbury",
                    "slug": "newbury",
                },
                "New Salem": {
                    "id": 7514,
                    "name": "New Salem",
                    "slug": "new-salem",
                },
                "New Marlborough": {
                    "id": 7513,
                    "name": "New Marlborough",
                    "slug": "new-marlborough",
                },
                "New Braintree": {
                    "id": 7512,
                    "name": "New Braintree",
                    "slug": "new-braintree",
                },
                "New Bedford": {
                    "id": 7511,
                    "name": "New Bedford",
                    "slug": "new-bedford",
                },
                "New Ashford": {
                    "id": 7510,
                    "name": "New Ashford",
                    "slug": "new-ashford",
                },
                "Needham": {
                    "id": 7509,
                    "name": "Needham",
                    "slug": "needham",
                },
                "Natick": {
                    "id": 7508,
                    "name": "Natick",
                    "slug": "natick",
                },
                "Nantucket": {
                    "id": 7507,
                    "name": "Nantucket",
                    "slug": "nantucket",
                },
                "Nahant": {
                    "id": 7506,
                    "name": "Nahant",
                    "slug": "nahant",
                },
                "Mount Washington": {
                    "id": 7505,
                    "name": "Mount Washington",
                    "slug": "mount-washington",
                },
                "Montgomery": {
                    "id": 7504,
                    "name": "Montgomery",
                    "slug": "montgomery-10",
                },
                "Monterey": {
                    "id": 7503,
                    "name": "Monterey",
                    "slug": "monterey-2",
                },
                "Montague": {
                    "id": 7502,
                    "name": "Montague",
                    "slug": "montague",
                },
                "Monson": {
                    "id": 7501,
                    "name": "Monson",
                    "slug": "monson-2",
                },
                "Monroe": {
                    "id": 7500,
                    "name": "Monroe",
                    "slug": "monroe-11",
                },
                "Milton": {
                    "id": 7499,
                    "name": "Milton",
                    "slug": "milton",
                },
                "Millville": {
                    "id": 7498,
                    "name": "Millville",
                    "slug": "millville",
                },
                "Millis": {
                    "id": 7497,
                    "name": "Millis",
                    "slug": "millis",
                },
                "Millbury": {
                    "id": 7496,
                    "name": "Millbury",
                    "slug": "millbury",
                },
                "Milford": {
                    "id": 7495,
                    "name": "Milford",
                    "slug": "milford-3",
                },
                "Middleton": {
                    "id": 7494,
                    "name": "Middleton",
                    "slug": "middleton",
                },
                "Middlefield": {
                    "id": 7493,
                    "name": "Middlefield",
                    "slug": "middlefield-2",
                },
                "Middleborough": {
                    "id": 7492,
                    "name": "Middleborough",
                    "slug": "middleborough",
                },
                "Methuen": {
                    "id": 7491,
                    "name": "Methuen",
                    "slug": "methuen",
                },
                "Merrimac": {
                    "id": 7490,
                    "name": "Merrimac",
                    "slug": "merrimac",
                },
                "Mendon": {
                    "id": 7489,
                    "name": "Mendon",
                    "slug": "mendon",
                },
                "Melrose": {
                    "id": 7488,
                    "name": "Melrose",
                    "slug": "melrose",
                },
                "Medway": {
                    "id": 7487,
                    "name": "Medway",
                    "slug": "medway-2",
                },
                "Medford": {
                    "id": 7486,
                    "name": "Medford",
                    "slug": "medford",
                },
                "Medfield": {
                    "id": 7485,
                    "name": "Medfield",
                    "slug": "medfield",
                },
                "Maynard": {
                    "id": 7484,
                    "name": "Maynard",
                    "slug": "maynard",
                },
                "Mattapoisett": {
                    "id": 7483,
                    "name": "Mattapoisett",
                    "slug": "mattapoisett",
                },
                "Mashpee": {
                    "id": 7482,
                    "name": "Mashpee",
                    "slug": "mashpee",
                },
                "Marshfield": {
                    "id": 7481,
                    "name": "Marshfield",
                    "slug": "marshfield-2",
                },
                "Marlborough": {
                    "id": 7480,
                    "name": "Marlborough",
                    "slug": "marlborough-2",
                },
                "Marion": {
                    "id": 7479,
                    "name": "Marion",
                    "slug": "marion-10",
                },
                "Marblehead": {
                    "id": 7478,
                    "name": "Marblehead",
                    "slug": "marblehead",
                },
                "Mansfield": {
                    "id": 7477,
                    "name": "Mansfield",
                    "slug": "mansfield-2",
                },
                "Manchester-By-The-Sea": {
                    "id": 7476,
                    "name": "Manchester-By-The-Sea",
                    "slug": "manchester-by-the-sea",
                },
                "Malden": {
                    "id": 7475,
                    "name": "Malden",
                    "slug": "malden",
                },
                "Lynnfield": {
                    "id": 7474,
                    "name": "Lynnfield",
                    "slug": "lynnfield",
                },
                "Lynn": {
                    "id": 7473,
                    "name": "Lynn",
                    "slug": "lynn",
                },
                "Lunenburg": {
                    "id": 7472,
                    "name": "Lunenburg",
                    "slug": "lunenburg",
                },
                "Ludlow": {
                    "id": 7471,
                    "name": "Ludlow",
                    "slug": "ludlow",
                },
                "Lowell": {
                    "id": 7470,
                    "name": "Lowell",
                    "slug": "lowell",
                },
                "Longmeadow": {
                    "id": 7469,
                    "name": "Longmeadow",
                    "slug": "longmeadow",
                },
                "Littleton": {
                    "id": 7468,
                    "name": "Littleton",
                    "slug": "littleton-2",
                },
                "Lincoln": {
                    "id": 7467,
                    "name": "Lincoln",
                    "slug": "lincoln-9",
                },
                "Leyden": {
                    "id": 7466,
                    "name": "Leyden",
                    "slug": "leyden",
                },
                "Lexington": {
                    "id": 7465,
                    "name": "Lexington",
                    "slug": "lexington",
                },
                "Leverett": {
                    "id": 7464,
                    "name": "Leverett",
                    "slug": "leverett",
                },
                "Leominster": {
                    "id": 7463,
                    "name": "Leominster",
                    "slug": "leominster",
                },
                "Lenox": {
                    "id": 7462,
                    "name": "Lenox",
                    "slug": "lenox",
                },
                "Leicester": {
                    "id": 7461,
                    "name": "Leicester",
                    "slug": "leicester",
                },
                "Lee": {
                    "id": 7460,
                    "name": "Lee",
                    "slug": "lee-9",
                },
                "Lawrence": {
                    "id": 7459,
                    "name": "Lawrence",
                    "slug": "lawrence-6",
                },
                "Lanesborough": {
                    "id": 7458,
                    "name": "Lanesborough",
                    "slug": "lanesborough",
                },
                "Lancaster": {
                    "id": 7457,
                    "name": "Lancaster",
                    "slug": "lancaster",
                },
                "Lakeville": {
                    "id": 7456,
                    "name": "Lakeville",
                    "slug": "lakeville",
                },
                "Kingston": {
                    "id": 7455,
                    "name": "Kingston",
                    "slug": "kingston",
                },
                "Ipswich": {
                    "id": 7454,
                    "name": "Ipswich",
                    "slug": "ipswich",
                },
                "Huntington": {
                    "id": 7453,
                    "name": "Huntington",
                    "slug": "huntington-2",
                },
                "Hull": {
                    "id": 7452,
                    "name": "Hull",
                    "slug": "hull",
                },
                "Hudson": {
                    "id": 7451,
                    "name": "Hudson",
                    "slug": "hudson-2",
                },
                "Hubbardston": {
                    "id": 7450,
                    "name": "Hubbardston",
                    "slug": "hubbardston",
                },
                "Hopkinton": {
                    "id": 7449,
                    "name": "Hopkinton",
                    "slug": "hopkinton",
                },
                "Hopedale": {
                    "id": 7448,
                    "name": "Hopedale",
                    "slug": "hopedale",
                },
                "Holyoke": {
                    "id": 7447,
                    "name": "Holyoke",
                    "slug": "holyoke",
                },
                "Holliston": {
                    "id": 7446,
                    "name": "Holliston",
                    "slug": "holliston",
                },
                "Holland": {
                    "id": 7445,
                    "name": "Holland",
                    "slug": "holland",
                },
                "Holden": {
                    "id": 7444,
                    "name": "Holden",
                    "slug": "holden-2",
                },
                "Holbrook": {
                    "id": 7443,
                    "name": "Holbrook",
                    "slug": "holbrook",
                },
                "Hinsdale": {
                    "id": 7442,
                    "name": "Hinsdale",
                    "slug": "hinsdale-2",
                },
                "Hingham": {
                    "id": 7441,
                    "name": "Hingham",
                    "slug": "hingham",
                },
                "Heath": {
                    "id": 7440,
                    "name": "Heath",
                    "slug": "heath",
                },
                "Hawley": {
                    "id": 7439,
                    "name": "Hawley",
                    "slug": "hawley",
                },
                "Haverhill": {
                    "id": 7438,
                    "name": "Haverhill",
                    "slug": "haverhill",
                },
                "Hatfield": {
                    "id": 7437,
                    "name": "Hatfield",
                    "slug": "hatfield",
                },
                "Harwich": {
                    "id": 7436,
                    "name": "Harwich",
                    "slug": "harwich",
                },
                "Harvard": {
                    "id": 7435,
                    "name": "Harvard",
                    "slug": "harvard",
                },
                "Hardwick": {
                    "id": 7434,
                    "name": "Hardwick",
                    "slug": "hardwick",
                },
                "Hanson": {
                    "id": 7433,
                    "name": "Hanson",
                    "slug": "hanson",
                },
                "Hanover": {
                    "id": 7432,
                    "name": "Hanover",
                    "slug": "hanover",
                },
                "Hancock": {
                    "id": 7431,
                    "name": "Hancock",
                    "slug": "hancock-7",
                },
                "Hampden": {
                    "id": 7430,
                    "name": "Hampden",
                    "slug": "hampden-2",
                },
                "Hamilton": {
                    "id": 7429,
                    "name": "Hamilton",
                    "slug": "hamilton-6",
                },
                "Halifax": {
                    "id": 7428,
                    "name": "Halifax",
                    "slug": "halifax",
                },
                "Hadley": {
                    "id": 7427,
                    "name": "Hadley",
                    "slug": "hadley",
                },
                "Groveland": {
                    "id": 7426,
                    "name": "Groveland",
                    "slug": "groveland",
                },
                "Groton": {
                    "id": 7425,
                    "name": "Groton",
                    "slug": "groton-2",
                },
                "Greenfield": {
                    "id": 7424,
                    "name": "Greenfield",
                    "slug": "greenfield",
                },
                "Great Barrington": {
                    "id": 7423,
                    "name": "Great Barrington",
                    "slug": "great-barrington",
                },
                "Granville": {
                    "id": 7422,
                    "name": "Granville",
                    "slug": "granville",
                },
                "Granby": {
                    "id": 7421,
                    "name": "Granby",
                    "slug": "granby-2",
                },
                "Grafton": {
                    "id": 7420,
                    "name": "Grafton",
                    "slug": "grafton",
                },
                "Gosnold": {
                    "id": 7419,
                    "name": "Gosnold",
                    "slug": "gosnold",
                },
                "Goshen": {
                    "id": 7418,
                    "name": "Goshen",
                    "slug": "goshen-2",
                },
                "Gloucester": {
                    "id": 7417,
                    "name": "Gloucester",
                    "slug": "gloucester",
                },
                "Gill": {
                    "id": 7416,
                    "name": "Gill",
                    "slug": "gill",
                },
                "Georgetown": {
                    "id": 7415,
                    "name": "Georgetown",
                    "slug": "georgetown-2",
                },
                "Gardner": {
                    "id": 7414,
                    "name": "Gardner",
                    "slug": "gardner",
                },
                "Freetown": {
                    "id": 7413,
                    "name": "Freetown",
                    "slug": "freetown",
                },
                "Franklin": {
                    "id": 7412,
                    "name": "Franklin",
                    "slug": "franklin-14",
                },
                "Framingham": {
                    "id": 7411,
                    "name": "Framingham",
                    "slug": "framingham",
                },
                "Foxborough": {
                    "id": 7410,
                    "name": "Foxborough",
                    "slug": "foxborough",
                },
                "Florida": {
                    "id": 7409,
                    "name": "Florida",
                    "slug": "florida",
                },
                "Fitchburg": {
                    "id": 7408,
                    "name": "Fitchburg",
                    "slug": "fitchburg",
                },
                "Falmouth": {
                    "id": 7407,
                    "name": "Falmouth",
                    "slug": "falmouth-2",
                },
                "Fall River": {
                    "id": 7406,
                    "name": "Fall River",
                    "slug": "fall-river",
                },
                "Fairhaven": {
                    "id": 7405,
                    "name": "Fairhaven",
                    "slug": "fairhaven",
                },
                "Everett": {
                    "id": 7404,
                    "name": "Everett",
                    "slug": "everett",
                },
                "Essex": {
                    "id": 7403,
                    "name": "Essex",
                    "slug": "essex-2",
                },
                "Erving": {
                    "id": 7402,
                    "name": "Erving",
                    "slug": "erving",
                },
                "Egremont": {
                    "id": 7401,
                    "name": "Egremont",
                    "slug": "egremont",
                },
                "Edgartown": {
                    "id": 7400,
                    "name": "Edgartown",
                    "slug": "edgartown",
                },
                "Easton": {
                    "id": 7399,
                    "name": "Easton",
                    "slug": "easton-3",
                },
                "Easthampton": {
                    "id": 7398,
                    "name": "Easthampton",
                    "slug": "easthampton",
                },
                "Eastham": {
                    "id": 7397,
                    "name": "Eastham",
                    "slug": "eastham",
                },
                "East Longmeadow": {
                    "id": 7396,
                    "name": "East Longmeadow",
                    "slug": "east-longmeadow",
                },
                "East Brookfield": {
                    "id": 7395,
                    "name": "East Brookfield",
                    "slug": "east-brookfield",
                },
                "East Bridgewater": {
                    "id": 7394,
                    "name": "East Bridgewater",
                    "slug": "east-bridgewater",
                },
                "Duxbury": {
                    "id": 7393,
                    "name": "Duxbury",
                    "slug": "duxbury",
                },
                "Dunstable": {
                    "id": 7392,
                    "name": "Dunstable",
                    "slug": "dunstable",
                },
                "Dudley": {
                    "id": 7391,
                    "name": "Dudley",
                    "slug": "dudley",
                },
                "Dracut": {
                    "id": 7390,
                    "name": "Dracut",
                    "slug": "dracut",
                },
                "Dover": {
                    "id": 7389,
                    "name": "Dover",
                    "slug": "dover",
                },
                "Douglas": {
                    "id": 7388,
                    "name": "Douglas",
                    "slug": "douglas-5",
                },
                "Dighton": {
                    "id": 7387,
                    "name": "Dighton",
                    "slug": "dighton",
                },
                "Dennis": {
                    "id": 7386,
                    "name": "Dennis",
                    "slug": "dennis",
                },
                "Deerfield": {
                    "id": 7385,
                    "name": "Deerfield",
                    "slug": "deerfield",
                },
                "Dedham": {
                    "id": 7384,
                    "name": "Dedham",
                    "slug": "dedham-2",
                },
                "Dartmouth": {
                    "id": 7383,
                    "name": "Dartmouth",
                    "slug": "dartmouth",
                },
                "Danvers": {
                    "id": 7382,
                    "name": "Danvers",
                    "slug": "danvers",
                },
                "Dalton": {
                    "id": 7381,
                    "name": "Dalton",
                    "slug": "dalton",
                },
                "Cummington": {
                    "id": 7380,
                    "name": "Cummington",
                    "slug": "cummington",
                },
                "Conway": {
                    "id": 7379,
                    "name": "Conway",
                    "slug": "conway-2",
                },
                "Concord": {
                    "id": 7378,
                    "name": "Concord",
                    "slug": "concord",
                },
                "Colrain": {
                    "id": 7377,
                    "name": "Colrain",
                    "slug": "colrain",
                },
                "Cohasset": {
                    "id": 7376,
                    "name": "Cohasset",
                    "slug": "cohasset",
                },
                "Clinton": {
                    "id": 7375,
                    "name": "Clinton",
                    "slug": "clinton-7",
                },
                "Clarksburg": {
                    "id": 7374,
                    "name": "Clarksburg",
                    "slug": "clarksburg",
                },
                "Chilmark": {
                    "id": 7373,
                    "name": "Chilmark",
                    "slug": "chilmark",
                },
                "Chicopee": {
                    "id": 7372,
                    "name": "Chicopee",
                    "slug": "chicopee",
                },
                "Chesterfield": {
                    "id": 7371,
                    "name": "Chesterfield",
                    "slug": "chesterfield",
                },
                "Chester": {
                    "id": 7370,
                    "name": "Chester",
                    "slug": "chester-3",
                },
                "Cheshire": {
                    "id": 7369,
                    "name": "Cheshire",
                    "slug": "cheshire-2",
                },
                "Chelsea": {
                    "id": 7368,
                    "name": "Chelsea",
                    "slug": "chelsea-2",
                },
                "Chelmsford": {
                    "id": 7367,
                    "name": "Chelmsford",
                    "slug": "chelmsford",
                },
                "Chatham": {
                    "id": 7366,
                    "name": "Chatham",
                    "slug": "chatham-2",
                },
                "Charlton": {
                    "id": 7365,
                    "name": "Charlton",
                    "slug": "charlton-2",
                },
                "Charlemont": {
                    "id": 7364,
                    "name": "Charlemont",
                    "slug": "charlemont",
                },
                "Carver": {
                    "id": 7363,
                    "name": "Carver",
                    "slug": "carver",
                },
                "Carlisle": {
                    "id": 7362,
                    "name": "Carlisle",
                    "slug": "carlisle-2",
                },
                "Canton": {
                    "id": 7361,
                    "name": "Canton",
                    "slug": "canton-3",
                },
                "Cambridge": {
                    "id": 7360,
                    "name": "Cambridge",
                    "slug": "cambridge",
                },
                "Burlington": {
                    "id": 7359,
                    "name": "Burlington",
                    "slug": "burlington-2",
                },
                "Buckland": {
                    "id": 7358,
                    "name": "Buckland",
                    "slug": "buckland",
                },
                "Brookline": {
                    "id": 7357,
                    "name": "Brookline",
                    "slug": "brookline",
                },
                "Brookfield": {
                    "id": 7356,
                    "name": "Brookfield",
                    "slug": "brookfield-2",
                },
                "Brockton": {
                    "id": 7355,
                    "name": "Brockton",
                    "slug": "brockton",
                },
                "Brimfield": {
                    "id": 7354,
                    "name": "Brimfield",
                    "slug": "brimfield",
                },
                "Bridgewater": {
                    "id": 7353,
                    "name": "Bridgewater",
                    "slug": "bridgewater-3",
                },
                "Brewster": {
                    "id": 7352,
                    "name": "Brewster",
                    "slug": "brewster",
                },
                "Braintree": {
                    "id": 7351,
                    "name": "Braintree",
                    "slug": "braintree",
                },
                "Boylston": {
                    "id": 7350,
                    "name": "Boylston",
                    "slug": "boylston",
                },
                "Boxford": {
                    "id": 7349,
                    "name": "Boxford",
                    "slug": "boxford",
                },
                "Boxborough": {
                    "id": 7348,
                    "name": "Boxborough",
                    "slug": "boxborough",
                },
                "Bourne": {
                    "id": 7347,
                    "name": "Bourne",
                    "slug": "bourne",
                },
                "Boston": {
                    "id": 7346,
                    "name": "Boston",
                    "slug": "boston",
                },
                "Bolton": {
                    "id": 7345,
                    "name": "Bolton",
                    "slug": "bolton-2",
                },
                "Blandford": {
                    "id": 7344,
                    "name": "Blandford",
                    "slug": "blandford",
                },
                "Blackstone": {
                    "id": 7343,
                    "name": "Blackstone",
                    "slug": "blackstone",
                },
                "Billerica": {
                    "id": 7342,
                    "name": "Billerica",
                    "slug": "billerica",
                },
                "Beverly": {
                    "id": 7341,
                    "name": "Beverly",
                    "slug": "beverly",
                },
                "Bernardston": {
                    "id": 7340,
                    "name": "Bernardston",
                    "slug": "bernardston",
                },
                "Berlin": {
                    "id": 7339,
                    "name": "Berlin",
                    "slug": "berlin-2",
                },
                "Berkley": {
                    "id": 7338,
                    "name": "Berkley",
                    "slug": "berkley",
                },
                "Belmont": {
                    "id": 7337,
                    "name": "Belmont",
                    "slug": "belmont-2",
                },
                "Bellingham": {
                    "id": 7336,
                    "name": "Bellingham",
                    "slug": "bellingham",
                },
                "Belchertown": {
                    "id": 7335,
                    "name": "Belchertown",
                    "slug": "belchertown",
                },
                "Bedford": {
                    "id": 7334,
                    "name": "Bedford",
                    "slug": "bedford",
                },
                "Becket": {
                    "id": 7333,
                    "name": "Becket",
                    "slug": "becket",
                },
                "Barre": {
                    "id": 7332,
                    "name": "Barre",
                    "slug": "barre",
                },
                "Barnstable": {
                    "id": 7331,
                    "name": "Barnstable",
                    "slug": "barnstable",
                },
                "Ayer": {
                    "id": 7330,
                    "name": "Ayer",
                    "slug": "ayer",
                },
                "Avon": {
                    "id": 7329,
                    "name": "Avon",
                    "slug": "avon-2",
                },
                "Auburn": {
                    "id": 7328,
                    "name": "Auburn",
                    "slug": "auburn-2",
                },
                "Attleboro": {
                    "id": 7327,
                    "name": "Attleboro",
                    "slug": "attleboro",
                },
                "Athol": {
                    "id": 7326,
                    "name": "Athol",
                    "slug": "athol",
                },
                "Ashland": {
                    "id": 7325,
                    "name": "Ashland",
                    "slug": "ashland-2",
                },
                "Ashfield": {
                    "id": 7324,
                    "name": "Ashfield",
                    "slug": "ashfield",
                },
                "Ashby": {
                    "id": 7323,
                    "name": "Ashby",
                    "slug": "ashby",
                },
                "Ashburnham": {
                    "id": 7322,
                    "name": "Ashburnham",
                    "slug": "ashburnham",
                },
                "Arlington": {
                    "id": 7321,
                    "name": "Arlington",
                    "slug": "arlington",
                },
                "Aquinnah": {
                    "id": 7320,
                    "name": "Aquinnah",
                    "slug": "aquinnah",
                },
                "Andover": {
                    "id": 7319,
                    "name": "Andover",
                    "slug": "andover-3",
                },
                "Amherst": {
                    "id": 7318,
                    "name": "Amherst",
                    "slug": "amherst",
                },
                "Amesbury": {
                    "id": 7317,
                    "name": "Amesbury",
                    "slug": "amesbury",
                },
                "Alford": {
                    "id": 7316,
                    "name": "Alford",
                    "slug": "alford",
                },
                "Agawam": {
                    "id": 7315,
                    "name": "Agawam",
                    "slug": "agawam",
                },
                "Adams": {
                    "id": 7314,
                    "name": "Adams",
                    "slug": "adams-6",
                },
                "Acushnet": {
                    "id": 7313,
                    "name": "Acushnet",
                    "slug": "acushnet",
                },
                "Acton": {
                    "id": 7312,
                    "name": "Acton",
                    "slug": "acton-2",
                },
                "Abington": {
                    "id": 7311,
                    "name": "Abington",
                    "slug": "abington",
                },
            },
            "counties": {},
        },
    },
    "MI": {
        "id": 52,
        "name": "Michigan",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {
                "Flat Rock": {
                    "id": 8349,
                    "name": "Flat Rock",
                    "slug": "flat-rock-city",
                },
                "Yankee Springs Township, Barry County": {
                    "id": 8348,
                    "name": "Yankee Springs Township, Barry County",
                    "slug": "yankee-springs-township-barry-county",
                },
                "Wright Township, Ottawa County": {
                    "id": 8347,
                    "name": "Wright Township, Ottawa County",
                    "slug": "wright-township-ottawa-county",
                },
                "Worth Township, Sanilac County": {
                    "id": 8346,
                    "name": "Worth Township, Sanilac County",
                    "slug": "worth-township-sanilac-county",
                },
                "Woodstock Township, Lenawee County": {
                    "id": 8345,
                    "name": "Woodstock Township, Lenawee County",
                    "slug": "woodstock-township-lenawee-county",
                },
                "Woodhull Township, Shiawassee County": {
                    "id": 8344,
                    "name": "Woodhull Township, Shiawassee County",
                    "slug": "woodhull-township-shiawassee-county",
                },
                "Williamston, Ingham County": {
                    "id": 8343,
                    "name": "Williamston, Ingham County",
                    "slug": "williamston-city-ingham-county",
                },
                "Williams Charter Township, Bay County": {
                    "id": 8342,
                    "name": "Williams Charter Township, Bay County",
                    "slug": "williams-charter-township-bay-county",
                },
                "Whitewater Township, Grand Traverse County": {
                    "id": 8341,
                    "name": "Whitewater Township, Grand Traverse County",
                    "slug": "whitewater-township-grand-traverse-county",
                },
                "Whitehall, Muskegon County": {
                    "id": 8340,
                    "name": "Whitehall, Muskegon County",
                    "slug": "whitehall-city-muskegon-county",
                },
                "Whiteford Township, Monroe County": {
                    "id": 8339,
                    "name": "Whiteford Township, Monroe County",
                    "slug": "whiteford-township-monroe-county",
                },
                "White Pigeon Township, St. Joseph County": {
                    "id": 8338,
                    "name": "White Pigeon Township, St. Joseph County",
                    "slug": "white-pigeon-township-st-joseph-county",
                },
                "Wheeler Township, Gratiot County": {
                    "id": 8337,
                    "name": "Wheeler Township, Gratiot County",
                    "slug": "wheeler-township-gratiot-county",
                },
                "West Branch Township, Ogemaw County": {
                    "id": 8336,
                    "name": "West Branch Township, Ogemaw County",
                    "slug": "west-branch-township-ogemaw-county",
                },
                "Wells Township, Delta County": {
                    "id": 8335,
                    "name": "Wells Township, Delta County",
                    "slug": "wells-township-delta-county",
                },
                "Wayne Township, Cass County": {
                    "id": 8334,
                    "name": "Wayne Township, Cass County",
                    "slug": "wayne-township-cass-county",
                },
                "Wayland Township, Allegan County": {
                    "id": 8333,
                    "name": "Wayland Township, Allegan County",
                    "slug": "wayland-township-allegan-county",
                },
                "Wayland, Allegan County": {
                    "id": 8332,
                    "name": "Wayland, Allegan County",
                    "slug": "wayland-city-allegan-county",
                },
                "Waverly Township, Van Buren County": {
                    "id": 8331,
                    "name": "Waverly Township, Van Buren County",
                    "slug": "waverly-township-van-buren-county",
                },
                "Watervliet Township, Berrien County": {
                    "id": 8330,
                    "name": "Watervliet Township, Berrien County",
                    "slug": "watervliet-township-berrien-county",
                },
                "Waterloo Township, Jackson County": {
                    "id": 8329,
                    "name": "Waterloo Township, Jackson County",
                    "slug": "waterloo-township-jackson-county",
                },
                "Wales Township, St. Clair County": {
                    "id": 8328,
                    "name": "Wales Township, St. Clair County",
                    "slug": "wales-township-st-clair-county",
                },
                "Village of Grosse Pointe Shores": {
                    "id": 8327,
                    "name": "Village of Grosse Pointe Shores",
                    "slug": "village-of-grosse-pointe-shores-city",
                },
                "Victor Township, Clinton County": {
                    "id": 8326,
                    "name": "Victor Township, Clinton County",
                    "slug": "victor-township-clinton-county",
                },
                "Vevay Township, Ingham County": {
                    "id": 8325,
                    "name": "Vevay Township, Ingham County",
                    "slug": "vevay-township-ingham-county",
                },
                "Vernon Township, Shiawassee County": {
                    "id": 8324,
                    "name": "Vernon Township, Shiawassee County",
                    "slug": "vernon-township-shiawassee-county",
                },
                "Vergennes Township, Kent County": {
                    "id": 8323,
                    "name": "Vergennes Township, Kent County",
                    "slug": "vergennes-township-kent-county",
                },
                "Venice Township, Shiawassee County": {
                    "id": 8322,
                    "name": "Venice Township, Shiawassee County",
                    "slug": "venice-township-shiawassee-county",
                },
                "Vassar Township, Tuscola County": {
                    "id": 8321,
                    "name": "Vassar Township, Tuscola County",
                    "slug": "vassar-township-tuscola-county",
                },
                "Vassar, Tuscola County": {
                    "id": 8320,
                    "name": "Vassar, Tuscola County",
                    "slug": "vassar-city-tuscola-county",
                },
                "Union Township, Branch County": {
                    "id": 8319,
                    "name": "Union Township, Branch County",
                    "slug": "union-township-branch-county",
                },
                "Unadilla Township, Livingston County": {
                    "id": 8318,
                    "name": "Unadilla Township, Livingston County",
                    "slug": "unadilla-township-livingston-county",
                },
                "Tuscarora Township, Cheboygan County": {
                    "id": 8317,
                    "name": "Tuscarora Township, Cheboygan County",
                    "slug": "tuscarora-township-cheboygan-county",
                },
                "Trowbridge Township, Allegan County": {
                    "id": 8316,
                    "name": "Trowbridge Township, Allegan County",
                    "slug": "trowbridge-township-allegan-county",
                },
                "Tompkins Township, Jackson County": {
                    "id": 8315,
                    "name": "Tompkins Township, Jackson County",
                    "slug": "tompkins-township-jackson-county",
                },
                "Tobacco Township, Gladwin County": {
                    "id": 8314,
                    "name": "Tobacco Township, Gladwin County",
                    "slug": "tobacco-township-gladwin-county",
                },
                "Taymouth Township, Saginaw County": {
                    "id": 8313,
                    "name": "Taymouth Township, Saginaw County",
                    "slug": "taymouth-township-saginaw-county",
                },
                "Sylvan Township, Washtenaw County": {
                    "id": 8312,
                    "name": "Sylvan Township, Washtenaw County",
                    "slug": "sylvan-township-washtenaw-county",
                },
                "Suttons Bay Township, Leelanau County": {
                    "id": 8311,
                    "name": "Suttons Bay Township, Leelanau County",
                    "slug": "suttons-bay-township-leelanau-county",
                },
                "Surrey Township, Clare County": {
                    "id": 8310,
                    "name": "Surrey Township, Clare County",
                    "slug": "surrey-township-clare-county",
                },
                "Summerfield Township, Monroe County": {
                    "id": 8309,
                    "name": "Summerfield Township, Monroe County",
                    "slug": "summerfield-township-monroe-county",
                },
                "Sullivan Township, Muskegon County": {
                    "id": 8308,
                    "name": "Sullivan Township, Muskegon County",
                    "slug": "sullivan-township-muskegon-county",
                },
                "Stockbridge Township, Ingham County": {
                    "id": 8307,
                    "name": "Stockbridge Township, Ingham County",
                    "slug": "stockbridge-township-ingham-county",
                },
                "St. Charles Township, Saginaw County": {
                    "id": 8306,
                    "name": "St. Charles Township, Saginaw County",
                    "slug": "st-charles-township-saginaw-county",
                },
                "Spencer Township, Kent County": {
                    "id": 8305,
                    "name": "Spencer Township, Kent County",
                    "slug": "spencer-township-kent-county",
                },
                "South Haven, Van Buren County": {
                    "id": 8304,
                    "name": "South Haven, Van Buren County",
                    "slug": "south-haven-city-van-buren-county",
                },
                "South Haven Charter Township, Van Buren County": {
                    "id": 8303,
                    "name": "South Haven Charter Township, Van Buren County",
                    "slug": "south-haven-charter-township-van-buren-county",
                },
                "Soo Township, Chippewa County": {
                    "id": 8302,
                    "name": "Soo Township, Chippewa County",
                    "slug": "soo-township-chippewa-county",
                },
                "Somerset Township, Hillsdale County": {
                    "id": 8301,
                    "name": "Somerset Township, Hillsdale County",
                    "slug": "somerset-township-hillsdale-county",
                },
                "Silver Creek Township, Cass County": {
                    "id": 8300,
                    "name": "Silver Creek Township, Cass County",
                    "slug": "silver-creek-township-cass-county",
                },
                "Sidney Township, Montcalm County": {
                    "id": 8299,
                    "name": "Sidney Township, Montcalm County",
                    "slug": "sidney-township-montcalm-county",
                },
                "Shiawassee Township, Shiawassee County": {
                    "id": 8298,
                    "name": "Shiawassee Township, Shiawassee County",
                    "slug": "shiawassee-township-shiawassee-county",
                },
                "Sherman Township, St. Joseph County": {
                    "id": 8297,
                    "name": "Sherman Township, St. Joseph County",
                    "slug": "sherman-township-st-joseph-county",
                },
                "Sherman Township, Isabella County": {
                    "id": 8296,
                    "name": "Sherman Township, Isabella County",
                    "slug": "sherman-township-isabella-county",
                },
                "Shelby Township, Oceana County": {
                    "id": 8295,
                    "name": "Shelby Township, Oceana County",
                    "slug": "shelby-township-oceana-county",
                },
                "Sebewaing Township, Huron County": {
                    "id": 8294,
                    "name": "Sebewaing Township, Huron County",
                    "slug": "sebewaing-township-huron-county",
                },
                "Saugatuck Township, Allegan County": {
                    "id": 8293,
                    "name": "Saugatuck Township, Allegan County",
                    "slug": "saugatuck-township-allegan-county",
                },
                "Sandusky, Sanilac County": {
                    "id": 8292,
                    "name": "Sandusky, Sanilac County",
                    "slug": "sandusky-sanilac-county",
                },
                "Sandstone Township, Jackson County": {
                    "id": 8291,
                    "name": "Sandstone Township, Jackson County",
                    "slug": "sandstone-township-jackson-county",
                },
                "Rutland Charter Township, Barry County": {
                    "id": 8290,
                    "name": "Rutland Charter Township, Barry County",
                    "slug": "rutland-charter-township-barry-county",
                },
                "Royalton Township, Berrien County": {
                    "id": 8289,
                    "name": "Royalton Township, Berrien County",
                    "slug": "royalton-township-berrien-county",
                },
                "Ross Township, Kalamazoo County": {
                    "id": 8288,
                    "name": "Ross Township, Kalamazoo County",
                    "slug": "ross-township-kalamazoo-county",
                },
                "Roscommon Township, Roscommon County": {
                    "id": 8287,
                    "name": "Roscommon Township, Roscommon County",
                    "slug": "roscommon-township-roscommon-county",
                },
                "Roosevelt Park, Muskegon County": {
                    "id": 8286,
                    "name": "Roosevelt Park, Muskegon County",
                    "slug": "roosevelt-park-muskegon-county",
                },
                "Rollin Township, Lenawee County": {
                    "id": 8285,
                    "name": "Rollin Township, Lenawee County",
                    "slug": "rollin-township-lenawee-county",
                },
                "Rogers City, Presque Isle County": {
                    "id": 8284,
                    "name": "Rogers City, Presque Isle County",
                    "slug": "rogers-city-presque-isle-county",
                },
                "Rockwood, Wayne County": {
                    "id": 8283,
                    "name": "Rockwood, Wayne County",
                    "slug": "rockwood-wayne-county",
                },
                "Rives Township, Jackson County": {
                    "id": 8282,
                    "name": "Rives Township, Jackson County",
                    "slug": "rives-township-jackson-county",
                },
                "Riley Township, St. Clair County": {
                    "id": 8281,
                    "name": "Riley Township, St. Clair County",
                    "slug": "riley-township-st-clair-county",
                },
                "Richmond Township, Macomb County": {
                    "id": 8280,
                    "name": "Richmond Township, Macomb County",
                    "slug": "richmond-township-macomb-county",
                },
                "Richland Township, Saginaw County": {
                    "id": 8279,
                    "name": "Richland Township, Saginaw County",
                    "slug": "richland-township-saginaw-county",
                },
                "Richland Township, Montcalm County": {
                    "id": 8278,
                    "name": "Richland Township, Montcalm County",
                    "slug": "richland-township-montcalm-county",
                },
                "Richfield Township, Roscommon County": {
                    "id": 8277,
                    "name": "Richfield Township, Roscommon County",
                    "slug": "richfield-township-roscommon-county",
                },
                "Resort Township, Emmet County": {
                    "id": 8276,
                    "name": "Resort Township, Emmet County",
                    "slug": "resort-township-emmet-county",
                },
                "Ray Township, Macomb County": {
                    "id": 8275,
                    "name": "Ray Township, Macomb County",
                    "slug": "ray-township-macomb-county",
                },
                "Ravenna Township, Muskegon County": {
                    "id": 8274,
                    "name": "Ravenna Township, Muskegon County",
                    "slug": "ravenna-township-muskegon-county",
                },
                "Quincy Township, Branch County": {
                    "id": 8273,
                    "name": "Quincy Township, Branch County",
                    "slug": "quincy-township-branch-county",
                },
                "Prairieville Township, Barry County": {
                    "id": 8272,
                    "name": "Prairieville Township, Barry County",
                    "slug": "prairieville-township-barry-county",
                },
                "Potterville, Eaton County": {
                    "id": 8271,
                    "name": "Potterville, Eaton County",
                    "slug": "potterville-city-eaton-county",
                },
                "Portsmouth Charter Township, Bay County": {
                    "id": 8270,
                    "name": "Portsmouth Charter Township, Bay County",
                    "slug": "portsmouth-charter-township-bay-county",
                },
                "Portland Township, Ionia County": {
                    "id": 8269,
                    "name": "Portland Township, Ionia County",
                    "slug": "portland-township-ionia-county",
                },
                "Portland, Ionia County": {
                    "id": 8268,
                    "name": "Portland, Ionia County",
                    "slug": "portland-city-ionia-county",
                },
                "Porter Township, Cass County": {
                    "id": 8267,
                    "name": "Porter Township, Cass County",
                    "slug": "porter-township-cass-county",
                },
                "Portage Charter Township, Houghton County": {
                    "id": 8266,
                    "name": "Portage Charter Township, Houghton County",
                    "slug": "portage-charter-township-houghton-county",
                },
                "Port Sheldon Township, Ottawa County": {
                    "id": 8265,
                    "name": "Port Sheldon Township, Ottawa County",
                    "slug": "port-sheldon-township-ottawa-county",
                },
                "Polkton Charter Township, Ottawa County": {
                    "id": 8264,
                    "name": "Polkton Charter Township, Ottawa County",
                    "slug": "polkton-charter-township-ottawa-county",
                },
                "Plainwell, Allegan County": {
                    "id": 8263,
                    "name": "Plainwell, Allegan County",
                    "slug": "plainwell-city-allegan-county",
                },
                "Plainfield Township, Iosco County": {
                    "id": 8262,
                    "name": "Plainfield Township, Iosco County",
                    "slug": "plainfield-township-iosco-county",
                },
                "Pine Grove Township, Van Buren County": {
                    "id": 8261,
                    "name": "Pine Grove Township, Van Buren County",
                    "slug": "pine-grove-township-van-buren-county",
                },
                "Pierson Township, Montcalm County": {
                    "id": 8260,
                    "name": "Pierson Township, Montcalm County",
                    "slug": "pierson-township-montcalm-county",
                },
                "Perry Township, Shiawassee County": {
                    "id": 8259,
                    "name": "Perry Township, Shiawassee County",
                    "slug": "perry-township-shiawassee-county",
                },
                "Pentland Township, Luce County": {
                    "id": 8258,
                    "name": "Pentland Township, Luce County",
                    "slug": "pentland-township-luce-county",
                },
                "Parma Township, Jackson County": {
                    "id": 8257,
                    "name": "Parma Township, Jackson County",
                    "slug": "parma-township-jackson-county",
                },
                "Park Township, St. Joseph County": {
                    "id": 8256,
                    "name": "Park Township, St. Joseph County",
                    "slug": "park-township-st-joseph-county",
                },
                "Owosso Charter Township, Shiawassee County": {
                    "id": 8255,
                    "name": "Owosso Charter Township, Shiawassee County",
                    "slug": "owosso-charter-township-shiawassee-county",
                },
                "Overisel Township, Allegan County": {
                    "id": 8254,
                    "name": "Overisel Township, Allegan County",
                    "slug": "overisel-township-allegan-county",
                },
                "Otsego Lake Township, Otsego County": {
                    "id": 8253,
                    "name": "Otsego Lake Township, Otsego County",
                    "slug": "otsego-lake-township-otsego-county",
                },
                "Otsego, Allegan County": {
                    "id": 8252,
                    "name": "Otsego, Allegan County",
                    "slug": "otsego-city-allegan-county",
                },
                "Orleans Township, Ionia County": {
                    "id": 8251,
                    "name": "Orleans Township, Ionia County",
                    "slug": "orleans-township-ionia-county",
                },
                "Orangeville Township, Barry County": {
                    "id": 8250,
                    "name": "Orangeville Township, Barry County",
                    "slug": "orangeville-township-barry-county",
                },
                "Onondaga Township, Ingham County": {
                    "id": 8249,
                    "name": "Onondaga Township, Ingham County",
                    "slug": "onondaga-township-ingham-county",
                },
                "Oneida Charter Township, Eaton County": {
                    "id": 8248,
                    "name": "Oneida Charter Township, Eaton County",
                    "slug": "oneida-charter-township-eaton-county",
                },
                "Olive Township, Clinton County": {
                    "id": 8247,
                    "name": "Olive Township, Clinton County",
                    "slug": "olive-township-clinton-county",
                },
                "Odessa Township, Ionia County": {
                    "id": 8246,
                    "name": "Odessa Township, Ionia County",
                    "slug": "odessa-township-ionia-county",
                },
                "Nottawa Township, St. Joseph County": {
                    "id": 8245,
                    "name": "Nottawa Township, St. Joseph County",
                    "slug": "nottawa-township-st-joseph-county",
                },
                "Norway, Dickinson County": {
                    "id": 8244,
                    "name": "Norway, Dickinson County",
                    "slug": "norway-city-dickinson-county",
                },
                "Norvell Township, Jackson County": {
                    "id": 8243,
                    "name": "Norvell Township, Jackson County",
                    "slug": "norvell-township-jackson-county",
                },
                "Northville": {
                    "id": 8242,
                    "name": "Northville",
                    "slug": "northville-city",
                },
                "North Muskegon, Muskegon County": {
                    "id": 8241,
                    "name": "North Muskegon, Muskegon County",
                    "slug": "north-muskegon-muskegon-county",
                },
                "North Branch Township, Lapeer County": {
                    "id": 8240,
                    "name": "North Branch Township, Lapeer County",
                    "slug": "north-branch-township-lapeer-county",
                },
                "Newton Township, Calhoun County": {
                    "id": 8239,
                    "name": "Newton Township, Calhoun County",
                    "slug": "newton-township-calhoun-county",
                },
                "Negaunee Township, Marquette County": {
                    "id": 8238,
                    "name": "Negaunee Township, Marquette County",
                    "slug": "negaunee-township-marquette-county",
                },
                "Negaunee, Marquette County": {
                    "id": 8237,
                    "name": "Negaunee, Marquette County",
                    "slug": "negaunee-city-marquette-county",
                },
                "Mussey Township, St. Clair County": {
                    "id": 8236,
                    "name": "Mussey Township, St. Clair County",
                    "slug": "mussey-township-st-clair-county",
                },
                "Munising Township, Alger County": {
                    "id": 8235,
                    "name": "Munising Township, Alger County",
                    "slug": "munising-township-alger-county",
                },
                "Mount Morris, Genesee County": {
                    "id": 8234,
                    "name": "Mount Morris, Genesee County",
                    "slug": "mount-morris-city-genesee-county",
                },
                "Morton Township, Mecosta County": {
                    "id": 8233,
                    "name": "Morton Township, Mecosta County",
                    "slug": "morton-township-mecosta-county",
                },
                "Montcalm Township, Montcalm County": {
                    "id": 8232,
                    "name": "Montcalm Township, Montcalm County",
                    "slug": "montcalm-township-montcalm-county",
                },
                "Milton Township, Cass County": {
                    "id": 8231,
                    "name": "Milton Township, Cass County",
                    "slug": "milton-township-cass-county",
                },
                "Mills Township, Ogemaw County": {
                    "id": 8230,
                    "name": "Mills Township, Ogemaw County",
                    "slug": "mills-township-ogemaw-county",
                },
                "Millington Township, Tuscola County": {
                    "id": 8229,
                    "name": "Millington Township, Tuscola County",
                    "slug": "millington-township-tuscola-county",
                },
                "Milan": {
                    "id": 8228,
                    "name": "Milan",
                    "slug": "milan-city",
                },
                "Metamora Township, Lapeer County": {
                    "id": 8227,
                    "name": "Metamora Township, Lapeer County",
                    "slug": "metamora-township-lapeer-county",
                },
                "Menominee Township, Menominee County": {
                    "id": 8226,
                    "name": "Menominee Township, Menominee County",
                    "slug": "menominee-township-menominee-county",
                },
                "Mendon Township, St. Joseph County": {
                    "id": 8225,
                    "name": "Mendon Township, St. Joseph County",
                    "slug": "mendon-township-st-joseph-county",
                },
                "Mecosta Township, Mecosta County": {
                    "id": 8224,
                    "name": "Mecosta Township, Mecosta County",
                    "slug": "mecosta-township-mecosta-county",
                },
                "Mason Township, Cass County": {
                    "id": 8223,
                    "name": "Mason Township, Cass County",
                    "slug": "mason-township-cass-county",
                },
                "Martin Township, Allegan County": {
                    "id": 8222,
                    "name": "Martin Township, Allegan County",
                    "slug": "martin-township-allegan-county",
                },
                "Marshall Township, Calhoun County": {
                    "id": 8221,
                    "name": "Marshall Township, Calhoun County",
                    "slug": "marshall-township-calhoun-county",
                },
                "Marquette Charter Township, Marquette County": {
                    "id": 8220,
                    "name": "Marquette Charter Township, Marquette County",
                    "slug": "marquette-charter-township-marquette-county",
                },
                "Marine City, St. Clair County": {
                    "id": 8219,
                    "name": "Marine City, St. Clair County",
                    "slug": "marine-city-st-clair-county",
                },
                "Marathon Township, Lapeer County": {
                    "id": 8218,
                    "name": "Marathon Township, Lapeer County",
                    "slug": "marathon-township-lapeer-county",
                },
                "Maple Grove Township, Saginaw County": {
                    "id": 8217,
                    "name": "Maple Grove Township, Saginaw County",
                    "slug": "maple-grove-township-saginaw-county",
                },
                "Manlius Township, Allegan County": {
                    "id": 8216,
                    "name": "Manlius Township, Allegan County",
                    "slug": "manlius-township-allegan-county",
                },
                "Manistique, Schoolcraft County": {
                    "id": 8215,
                    "name": "Manistique, Schoolcraft County",
                    "slug": "manistique-city-schoolcraft-county",
                },
                "Manistee Township, Manistee County": {
                    "id": 8214,
                    "name": "Manistee Township, Manistee County",
                    "slug": "manistee-township-manistee-county",
                },
                "Manchester Township, Washtenaw County": {
                    "id": 8213,
                    "name": "Manchester Township, Washtenaw County",
                    "slug": "manchester-township-washtenaw-county",
                },
                "Mancelona Township, Antrim County": {
                    "id": 8212,
                    "name": "Mancelona Township, Antrim County",
                    "slug": "mancelona-township-antrim-county",
                },
                "Lyons Township, Ionia County": {
                    "id": 8211,
                    "name": "Lyons Township, Ionia County",
                    "slug": "lyons-township-ionia-county",
                },
                "Lyndon Township, Washtenaw County": {
                    "id": 8210,
                    "name": "Lyndon Township, Washtenaw County",
                    "slug": "lyndon-township-washtenaw-county",
                },
                "Lowell, Kent County": {
                    "id": 8209,
                    "name": "Lowell, Kent County",
                    "slug": "lowell-city-kent-county",
                },
                "London Township, Monroe County": {
                    "id": 8208,
                    "name": "London Township, Monroe County",
                    "slug": "london-township-monroe-county",
                },
                "Lockport Township, St. Joseph County": {
                    "id": 8207,
                    "name": "Lockport Township, St. Joseph County",
                    "slug": "lockport-township-st-joseph-county",
                },
                "Livingston Township, Otsego County": {
                    "id": 8206,
                    "name": "Livingston Township, Otsego County",
                    "slug": "livingston-township-otsego-county",
                },
                "Littlefield Township, Emmet County": {
                    "id": 8205,
                    "name": "Littlefield Township, Emmet County",
                    "slug": "littlefield-township-emmet-county",
                },
                "Linden, Genesee County": {
                    "id": 8204,
                    "name": "Linden, Genesee County",
                    "slug": "linden-genesee-county",
                },
                "Lima Township, Washtenaw County": {
                    "id": 8203,
                    "name": "Lima Township, Washtenaw County",
                    "slug": "lima-township-washtenaw-county",
                },
                "Liberty Township, Jackson County": {
                    "id": 8202,
                    "name": "Liberty Township, Jackson County",
                    "slug": "liberty-township-jackson-county",
                },
                "Lexington Township, Sanilac County": {
                    "id": 8201,
                    "name": "Lexington Township, Sanilac County",
                    "slug": "lexington-township-sanilac-county",
                },
                "Leroy Township, Ingham County": {
                    "id": 8200,
                    "name": "Leroy Township, Ingham County",
                    "slug": "leroy-township-ingham-county",
                },
                "Leroy Township, Calhoun County": {
                    "id": 8199,
                    "name": "Leroy Township, Calhoun County",
                    "slug": "leroy-township-calhoun-county",
                },
                "Lee Township, Midland County": {
                    "id": 8198,
                    "name": "Lee Township, Midland County",
                    "slug": "lee-township-midland-county",
                },
                "Lee Township, Allegan County": {
                    "id": 8197,
                    "name": "Lee Township, Allegan County",
                    "slug": "lee-township-allegan-county",
                },
                "Lawrence Township, Van Buren County": {
                    "id": 8196,
                    "name": "Lawrence Township, Van Buren County",
                    "slug": "lawrence-township-van-buren-county",
                },
                "Lathrup Village, Oakland County": {
                    "id": 8195,
                    "name": "Lathrup Village, Oakland County",
                    "slug": "lathrup-village-city-oakland-county",
                },
                "Lake Township, Missaukee County": {
                    "id": 8194,
                    "name": "Lake Township, Missaukee County",
                    "slug": "lake-township-missaukee-county",
                },
                "Lake Charter Township, Berrien County": {
                    "id": 8193,
                    "name": "Lake Charter Township, Berrien County",
                    "slug": "lake-charter-township-berrien-county",
                },
                "LaGrange Township, Cass County": {
                    "id": 8192,
                    "name": "LaGrange Township, Cass County",
                    "slug": "lagrange-township-cass-county",
                },
                "La Salle Township, Monroe County": {
                    "id": 8191,
                    "name": "La Salle Township, Monroe County",
                    "slug": "la-salle-township-monroe-county",
                },
                "LAnse Township, Baraga County": {
                    "id": 8190,
                    "name": "LAnse Township, Baraga County",
                    "slug": "lanse-township-baraga-county",
                },
                "Kochville Township, Saginaw County": {
                    "id": 8189,
                    "name": "Kochville Township, Saginaw County",
                    "slug": "kochville-township-saginaw-county",
                },
                "Kingsford, Dickinson County": {
                    "id": 8188,
                    "name": "Kingsford, Dickinson County",
                    "slug": "kingsford-city-dickinson-county",
                },
                "Keego Harbor, Oakland County": {
                    "id": 8187,
                    "name": "Keego Harbor, Oakland County",
                    "slug": "keego-harbor-oakland-county",
                },
                "Kawkawlin Township, Bay County": {
                    "id": 8186,
                    "name": "Kawkawlin Township, Bay County",
                    "slug": "kawkawlin-township-bay-county",
                },
                "Kalkaska Township, Kalkaska County": {
                    "id": 8185,
                    "name": "Kalkaska Township, Kalkaska County",
                    "slug": "kalkaska-township-kalkaska-county",
                },
                "Johnstown Township, Barry County": {
                    "id": 8184,
                    "name": "Johnstown Township, Barry County",
                    "slug": "johnstown-township-barry-county",
                },
                "Jerome Township, Midland County": {
                    "id": 8183,
                    "name": "Jerome Township, Midland County",
                    "slug": "jerome-township-midland-county",
                },
                "Jefferson Township, Hillsdale County": {
                    "id": 8182,
                    "name": "Jefferson Township, Hillsdale County",
                    "slug": "jefferson-township-hillsdale-county",
                },
                "Jefferson Township, Cass County": {
                    "id": 8181,
                    "name": "Jefferson Township, Cass County",
                    "slug": "jefferson-township-cass-county",
                },
                "Ithaca, Gratiot County": {
                    "id": 8180,
                    "name": "Ithaca, Gratiot County",
                    "slug": "ithaca-gratiot-county",
                },
                "Ishpeming Township, Marquette County": {
                    "id": 8179,
                    "name": "Ishpeming Township, Marquette County",
                    "slug": "ishpeming-township-marquette-county",
                },
                "Irving Township, Barry County": {
                    "id": 8178,
                    "name": "Irving Township, Barry County",
                    "slug": "irving-township-barry-county",
                },
                "Ironwood, Gogebic County": {
                    "id": 8177,
                    "name": "Ironwood, Gogebic County",
                    "slug": "ironwood-city-gogebic-county",
                },
                "Iron River, Iron County": {
                    "id": 8176,
                    "name": "Iron River, Iron County",
                    "slug": "iron-river-city-iron-county",
                },
                "Iosco Township, Livingston County": {
                    "id": 8175,
                    "name": "Iosco Township, Livingston County",
                    "slug": "iosco-township-livingston-county",
                },
                "Ionia Township, Ionia County": {
                    "id": 8174,
                    "name": "Ionia Township, Ionia County",
                    "slug": "ionia-township-ionia-county",
                },
                "Ingham Township, Ingham County": {
                    "id": 8173,
                    "name": "Ingham Township, Ingham County",
                    "slug": "ingham-township-ingham-county",
                },
                "Ingersoll Township, Midland County": {
                    "id": 8172,
                    "name": "Ingersoll Township, Midland County",
                    "slug": "ingersoll-township-midland-county",
                },
                "Indianfields Township, Tuscola County": {
                    "id": 8171,
                    "name": "Indianfields Township, Tuscola County",
                    "slug": "indianfields-township-tuscola-county",
                },
                "Imlay Township, Lapeer County": {
                    "id": 8170,
                    "name": "Imlay Township, Lapeer County",
                    "slug": "imlay-township-lapeer-county",
                },
                "Imlay, Lapeer County": {
                    "id": 8169,
                    "name": "Imlay, Lapeer County",
                    "slug": "imlay-city-lapeer-county",
                },
                "Ida Township, Monroe County": {
                    "id": 8168,
                    "name": "Ida Township, Monroe County",
                    "slug": "ida-township-monroe-county",
                },
                "Hopkins Township, Allegan County": {
                    "id": 8167,
                    "name": "Hopkins Township, Allegan County",
                    "slug": "hopkins-township-allegan-county",
                },
                "Hope Township, Barry County": {
                    "id": 8166,
                    "name": "Hope Township, Barry County",
                    "slug": "hope-township-barry-county",
                },
                "Homer Township, Midland County": {
                    "id": 8165,
                    "name": "Homer Township, Midland County",
                    "slug": "homer-township-midland-county",
                },
                "Homer Township, Calhoun County": {
                    "id": 8164,
                    "name": "Homer Township, Calhoun County",
                    "slug": "homer-township-calhoun-county",
                },
                "Home Township, Montcalm County": {
                    "id": 8163,
                    "name": "Home Township, Montcalm County",
                    "slug": "home-township-montcalm-county",
                },
                "Holton Township, Muskegon County": {
                    "id": 8162,
                    "name": "Holton Township, Muskegon County",
                    "slug": "holton-township-muskegon-county",
                },
                "Henrietta Township, Jackson County": {
                    "id": 8161,
                    "name": "Henrietta Township, Jackson County",
                    "slug": "henrietta-township-jackson-county",
                },
                "Heath Township, Allegan County": {
                    "id": 8160,
                    "name": "Heath Township, Allegan County",
                    "slug": "heath-township-allegan-county",
                },
                "Hayes Township, Otsego County": {
                    "id": 8159,
                    "name": "Hayes Township, Otsego County",
                    "slug": "hayes-township-otsego-county",
                },
                "Hayes Township, Clare County": {
                    "id": 8158,
                    "name": "Hayes Township, Clare County",
                    "slug": "hayes-township-clare-county",
                },
                "Hastings Charter Township, Barry County": {
                    "id": 8157,
                    "name": "Hastings Charter Township, Barry County",
                    "slug": "hastings-charter-township-barry-county",
                },
                "Hartford Township, Van Buren County": {
                    "id": 8156,
                    "name": "Hartford Township, Van Buren County",
                    "slug": "hartford-township-van-buren-county",
                },
                "Hartford, Van Buren County": {
                    "id": 8155,
                    "name": "Hartford, Van Buren County",
                    "slug": "hartford-city-van-buren-county",
                },
                "Haring Charter Township, Wexford County": {
                    "id": 8154,
                    "name": "Haring Charter Township, Wexford County",
                    "slug": "haring-charter-township-wexford-county",
                },
                "Hanover Township, Jackson County": {
                    "id": 8153,
                    "name": "Hanover Township, Jackson County",
                    "slug": "hanover-township-jackson-county",
                },
                "Hancock, Houghton County": {
                    "id": 8152,
                    "name": "Hancock, Houghton County",
                    "slug": "hancock-houghton-county",
                },
                "Hamlin Township, Mason County": {
                    "id": 8151,
                    "name": "Hamlin Township, Mason County",
                    "slug": "hamlin-township-mason-county",
                },
                "Hamlin Township, Eaton County": {
                    "id": 8150,
                    "name": "Hamlin Township, Eaton County",
                    "slug": "hamlin-township-eaton-county",
                },
                "Hagar Township, Berrien County": {
                    "id": 8149,
                    "name": "Hagar Township, Berrien County",
                    "slug": "hagar-township-berrien-county",
                },
                "Hadley Township, Lapeer County": {
                    "id": 8148,
                    "name": "Hadley Township, Lapeer County",
                    "slug": "hadley-township-lapeer-county",
                },
                "Green Charter Township, Mecosta County": {
                    "id": 8147,
                    "name": "Green Charter Township, Mecosta County",
                    "slug": "green-charter-township-mecosta-county",
                },
                "Grattan Township, Kent County": {
                    "id": 8146,
                    "name": "Grattan Township, Kent County",
                    "slug": "grattan-township-kent-county",
                },
                "Grant Township, Oceana County": {
                    "id": 8145,
                    "name": "Grant Township, Oceana County",
                    "slug": "grant-township-oceana-county",
                },
                "Grant Township, Newaygo County": {
                    "id": 8144,
                    "name": "Grant Township, Newaygo County",
                    "slug": "grant-township-newaygo-county",
                },
                "Grant Township, Clare County": {
                    "id": 8143,
                    "name": "Grant Township, Clare County",
                    "slug": "grant-township-clare-county",
                },
                "Gladwin, Gladwin County": {
                    "id": 8142,
                    "name": "Gladwin, Gladwin County",
                    "slug": "gladwin-gladwin-county",
                },
                "Gladstone, Delta County": {
                    "id": 8141,
                    "name": "Gladstone, Delta County",
                    "slug": "gladstone-delta-county",
                },
                "Gibraltar, Wayne County": {
                    "id": 8140,
                    "name": "Gibraltar, Wayne County",
                    "slug": "gibraltar-wayne-county",
                },
                "Gerrish Township, Roscommon County": {
                    "id": 8139,
                    "name": "Gerrish Township, Roscommon County",
                    "slug": "gerrish-township-roscommon-county",
                },
                "Geneva Township, Van Buren County": {
                    "id": 8138,
                    "name": "Geneva Township, Van Buren County",
                    "slug": "geneva-township-van-buren-county",
                },
                "Gaylord, Otsego County": {
                    "id": 8137,
                    "name": "Gaylord, Otsego County",
                    "slug": "gaylord-otsego-county",
                },
                "Garfield Township, Newaygo County": {
                    "id": 8136,
                    "name": "Garfield Township, Newaygo County",
                    "slug": "garfield-township-newaygo-county",
                },
                "Ganges Township, Allegan County": {
                    "id": 8135,
                    "name": "Ganges Township, Allegan County",
                    "slug": "ganges-township-allegan-county",
                },
                "Fremont Township, Tuscola County": {
                    "id": 8134,
                    "name": "Fremont Township, Tuscola County",
                    "slug": "fremont-township-tuscola-county",
                },
                "Fremont, Newaygo County": {
                    "id": 8133,
                    "name": "Fremont, Newaygo County",
                    "slug": "fremont-city-newaygo-county",
                },
                "Fraser Township, Bay County": {
                    "id": 8132,
                    "name": "Fraser Township, Bay County",
                    "slug": "fraser-township-bay-county",
                },
                "Franklin Township, Lenawee County": {
                    "id": 8131,
                    "name": "Franklin Township, Lenawee County",
                    "slug": "franklin-township-lenawee-county",
                },
                "Frankenlust Township, Bay County": {
                    "id": 8130,
                    "name": "Frankenlust Township, Bay County",
                    "slug": "frankenlust-township-bay-county",
                },
                "Forest Township, Genesee County": {
                    "id": 8129,
                    "name": "Forest Township, Genesee County",
                    "slug": "forest-township-genesee-county",
                },
                "Fillmore Township, Allegan County": {
                    "id": 8128,
                    "name": "Fillmore Township, Allegan County",
                    "slug": "fillmore-township-allegan-county",
                },
                "Ferrysburg, Ottawa County": {
                    "id": 8127,
                    "name": "Ferrysburg, Ottawa County",
                    "slug": "ferrysburg-city-ottawa-county",
                },
                "Fabius Township, St. Joseph County": {
                    "id": 8126,
                    "name": "Fabius Township, St. Joseph County",
                    "slug": "fabius-township-st-joseph-county",
                },
                "Exeter Township, Monroe County": {
                    "id": 8125,
                    "name": "Exeter Township, Monroe County",
                    "slug": "exeter-township-monroe-county",
                },
                "Evergreen Township, Montcalm County": {
                    "id": 8124,
                    "name": "Evergreen Township, Montcalm County",
                    "slug": "evergreen-township-montcalm-county",
                },
                "Eureka Township, Montcalm County": {
                    "id": 8123,
                    "name": "Eureka Township, Montcalm County",
                    "slug": "eureka-township-montcalm-county",
                },
                "Essexville, Bay County": {
                    "id": 8122,
                    "name": "Essexville, Bay County",
                    "slug": "essexville-city-bay-county",
                },
                "Escanaba Township, Delta County": {
                    "id": 8121,
                    "name": "Escanaba Township, Delta County",
                    "slug": "escanaba-township-delta-county",
                },
                "Erie Township, Monroe County": {
                    "id": 8120,
                    "name": "Erie Township, Monroe County",
                    "slug": "erie-township-monroe-county",
                },
                "Ensley Township, Newaygo County": {
                    "id": 8119,
                    "name": "Ensley Township, Newaygo County",
                    "slug": "ensley-township-newaygo-county",
                },
                "Emmett Township, St. Clair County": {
                    "id": 8118,
                    "name": "Emmett Township, St. Clair County",
                    "slug": "emmett-township-st-clair-county",
                },
                "Elmwood Charter Township, Leelanau County": {
                    "id": 8117,
                    "name": "Elmwood Charter Township, Leelanau County",
                    "slug": "elmwood-charter-township-leelanau-county",
                },
                "Elkland Township, Tuscola County": {
                    "id": 8116,
                    "name": "Elkland Township, Tuscola County",
                    "slug": "elkland-township-tuscola-county",
                },
                "Elk Rapids Township, Antrim County": {
                    "id": 8115,
                    "name": "Elk Rapids Township, Antrim County",
                    "slug": "elk-rapids-township-antrim-county",
                },
                "Edenville Township, Midland County": {
                    "id": 8114,
                    "name": "Edenville Township, Midland County",
                    "slug": "edenville-township-midland-county",
                },
                "Eaton Township, Eaton County": {
                    "id": 8113,
                    "name": "Eaton Township, Eaton County",
                    "slug": "eaton-township-eaton-county",
                },
                "Eaton Rapids Township, Eaton County": {
                    "id": 8112,
                    "name": "Eaton Rapids Township, Eaton County",
                    "slug": "eaton-rapids-township-eaton-county",
                },
                "Easton Township, Ionia County": {
                    "id": 8111,
                    "name": "Easton Township, Ionia County",
                    "slug": "easton-township-ionia-county",
                },
                "East Tawas, Iosco County": {
                    "id": 8110,
                    "name": "East Tawas, Iosco County",
                    "slug": "east-tawas-iosco-county",
                },
                "East China Township, St. Clair County": {
                    "id": 8109,
                    "name": "East China Township, St. Clair County",
                    "slug": "east-china-township-st-clair-county",
                },
                "Eagle Township, Clinton County": {
                    "id": 8108,
                    "name": "Eagle Township, Clinton County",
                    "slug": "eagle-township-clinton-county",
                },
                "Durand, Shiawassee County": {
                    "id": 8107,
                    "name": "Durand, Shiawassee County",
                    "slug": "durand-city-shiawassee-county",
                },
                "Dryden Township, Lapeer County": {
                    "id": 8106,
                    "name": "Dryden Township, Lapeer County",
                    "slug": "dryden-township-lapeer-county",
                },
                "Dexter, Washtenaw County": {
                    "id": 8105,
                    "name": "Dexter, Washtenaw County",
                    "slug": "dexter-city-washtenaw-county",
                },
                "DeWitt, Clinton County": {
                    "id": 8104,
                    "name": "DeWitt, Clinton County",
                    "slug": "dewitt-city-clinton-county",
                },
                "Denmark Township, Tuscola County": {
                    "id": 8103,
                    "name": "Denmark Township, Tuscola County",
                    "slug": "denmark-township-tuscola-county",
                },
                "Deerfield Township, Livingston County": {
                    "id": 8102,
                    "name": "Deerfield Township, Livingston County",
                    "slug": "deerfield-township-livingston-county",
                },
                "Deerfield Township, Isabella County": {
                    "id": 8101,
                    "name": "Deerfield Township, Isabella County",
                    "slug": "deerfield-township-isabella-county",
                },
                "Decatur Township, Van Buren County": {
                    "id": 8100,
                    "name": "Decatur Township, Van Buren County",
                    "slug": "decatur-township-van-buren-county",
                },
                "Davison, Genesee County": {
                    "id": 8099,
                    "name": "Davison, Genesee County",
                    "slug": "davison-city-genesee-county",
                },
                "Danby Township, Ionia County": {
                    "id": 8098,
                    "name": "Danby Township, Ionia County",
                    "slug": "danby-township-ionia-county",
                },
                "Crystal Township, Montcalm County": {
                    "id": 8097,
                    "name": "Crystal Township, Montcalm County",
                    "slug": "crystal-township-montcalm-county",
                },
                "Croton Township, Newaygo County": {
                    "id": 8096,
                    "name": "Croton Township, Newaygo County",
                    "slug": "croton-township-newaygo-county",
                },
                "Crockery Township, Ottawa County": {
                    "id": 8095,
                    "name": "Crockery Township, Ottawa County",
                    "slug": "crockery-township-ottawa-county",
                },
                "Covert Township, Van Buren County": {
                    "id": 8094,
                    "name": "Covert Township, Van Buren County",
                    "slug": "covert-township-van-buren-county",
                },
                "Cottrellville Township, St. Clair County": {
                    "id": 8093,
                    "name": "Cottrellville Township, St. Clair County",
                    "slug": "cottrellville-township-st-clair-county",
                },
                "Corunna, Shiawassee County": {
                    "id": 8092,
                    "name": "Corunna, Shiawassee County",
                    "slug": "corunna-shiawassee-county",
                },
                "Coopersville, Ottawa County": {
                    "id": 8091,
                    "name": "Coopersville, Ottawa County",
                    "slug": "coopersville-city-ottawa-county",
                },
                "Conway Township, Livingston County": {
                    "id": 8090,
                    "name": "Conway Township, Livingston County",
                    "slug": "conway-township-livingston-county",
                },
                "Constantine Township, St. Joseph County": {
                    "id": 8089,
                    "name": "Constantine Township, St. Joseph County",
                    "slug": "constantine-township-st-joseph-county",
                },
                "Concord Township, Jackson County": {
                    "id": 8088,
                    "name": "Concord Township, Jackson County",
                    "slug": "concord-township-jackson-county",
                },
                "Columbus Township, St. Clair County": {
                    "id": 8087,
                    "name": "Columbus Township, St. Clair County",
                    "slug": "columbus-township-st-clair-county",
                },
                "Columbia Township, Van Buren County": {
                    "id": 8086,
                    "name": "Columbia Township, Van Buren County",
                    "slug": "columbia-township-van-buren-county",
                },
                "Colon Township, St. Joseph County": {
                    "id": 8085,
                    "name": "Colon Township, St. Joseph County",
                    "slug": "colon-township-st-joseph-county",
                },
                "Coloma Charter Township, Berrien County": {
                    "id": 8084,
                    "name": "Coloma Charter Township, Berrien County",
                    "slug": "coloma-charter-township-berrien-county",
                },
                "Coldwater Township, Branch County": {
                    "id": 8083,
                    "name": "Coldwater Township, Branch County",
                    "slug": "coldwater-township-branch-county",
                },
                "Cohoctah Township, Livingston County": {
                    "id": 8082,
                    "name": "Cohoctah Township, Livingston County",
                    "slug": "cohoctah-township-livingston-county",
                },
                "Coe Township, Isabella County": {
                    "id": 8081,
                    "name": "Coe Township, Isabella County",
                    "slug": "coe-township-isabella-county",
                },
                "Clinton Township, Lenawee County": {
                    "id": 8080,
                    "name": "Clinton Township, Lenawee County",
                    "slug": "clinton-township-lenawee-county",
                },
                "Climax Township, Kalamazoo County": {
                    "id": 8079,
                    "name": "Climax Township, Kalamazoo County",
                    "slug": "climax-township-kalamazoo-county",
                },
                "Clearwater Township, Kalkaska County": {
                    "id": 8078,
                    "name": "Clearwater Township, Kalkaska County",
                    "slug": "clearwater-township-kalkaska-county",
                },
                "Clare, Clare County": {
                    "id": 8077,
                    "name": "Clare, Clare County",
                    "slug": "clare-city-clare-county",
                },
                "Chippewa Township, Isabella County": {
                    "id": 8076,
                    "name": "Chippewa Township, Isabella County",
                    "slug": "chippewa-township-isabella-county",
                },
                "China Township, St. Clair County": {
                    "id": 8075,
                    "name": "China Township, St. Clair County",
                    "slug": "china-township-st-clair-county",
                },
                "Chikaming Township, Berrien County": {
                    "id": 8074,
                    "name": "Chikaming Township, Berrien County",
                    "slug": "chikaming-township-berrien-county",
                },
                "Chesaning Township, Saginaw County": {
                    "id": 8073,
                    "name": "Chesaning Township, Saginaw County",
                    "slug": "chesaning-township-saginaw-county",
                },
                "Cheboygan, Cheboygan County": {
                    "id": 8072,
                    "name": "Cheboygan, Cheboygan County",
                    "slug": "cheboygan-cheboygan-county",
                },
                "Cedar Springs, Kent County": {
                    "id": 8071,
                    "name": "Cedar Springs, Kent County",
                    "slug": "cedar-springs-city-kent-county",
                },
                "Cedar Creek Township, Muskegon County": {
                    "id": 8070,
                    "name": "Cedar Creek Township, Muskegon County",
                    "slug": "cedar-creek-township-muskegon-county",
                },
                "Cato Township, Montcalm County": {
                    "id": 8069,
                    "name": "Cato Township, Montcalm County",
                    "slug": "cato-township-montcalm-county",
                },
                "Castleton Township, Barry County": {
                    "id": 8068,
                    "name": "Castleton Township, Barry County",
                    "slug": "castleton-township-barry-county",
                },
                "Casnovia Township, Muskegon County": {
                    "id": 8067,
                    "name": "Casnovia Township, Muskegon County",
                    "slug": "casnovia-township-muskegon-county",
                },
                "Casco Township, St. Clair County": {
                    "id": 8066,
                    "name": "Casco Township, St. Clair County",
                    "slug": "casco-township-st-clair-county",
                },
                "Casco Township, Allegan County": {
                    "id": 8065,
                    "name": "Casco Township, Allegan County",
                    "slug": "casco-township-allegan-county",
                },
                "Caro, Tuscola County": {
                    "id": 8064,
                    "name": "Caro, Tuscola County",
                    "slug": "caro-tuscola-county",
                },
                "Carmel Township, Eaton County": {
                    "id": 8063,
                    "name": "Carmel Township, Eaton County",
                    "slug": "carmel-township-eaton-county",
                },
                "Caledonia Charter Township, Shiawassee County": {
                    "id": 8062,
                    "name": "Caledonia Charter Township, Shiawassee County",
                    "slug": "caledonia-charter-township-shiawassee-county",
                },
                "Burtchville Township, St. Clair County": {
                    "id": 8061,
                    "name": "Burtchville Township, St. Clair County",
                    "slug": "burtchville-township-st-clair-county",
                },
                "Burr Oak Township, St. Joseph County": {
                    "id": 8060,
                    "name": "Burr Oak Township, St. Joseph County",
                    "slug": "burr-oak-township-st-joseph-county",
                },
                "Burns Township, Shiawassee County": {
                    "id": 8059,
                    "name": "Burns Township, Shiawassee County",
                    "slug": "burns-township-shiawassee-county",
                },
                "Buchanan Township, Berrien County": {
                    "id": 8058,
                    "name": "Buchanan Township, Berrien County",
                    "slug": "buchanan-township-berrien-county",
                },
                "Buchanan, Berrien County": {
                    "id": 8057,
                    "name": "Buchanan, Berrien County",
                    "slug": "buchanan-city-berrien-county",
                },
                "Brooks Township, Newaygo County": {
                    "id": 8056,
                    "name": "Brooks Township, Newaygo County",
                    "slug": "brooks-township-newaygo-county",
                },
                "Brady Township, Kalamazoo County": {
                    "id": 8055,
                    "name": "Brady Township, Kalamazoo County",
                    "slug": "brady-township-kalamazoo-county",
                },
                "Boyne City, Charlevoix County": {
                    "id": 8054,
                    "name": "Boyne City, Charlevoix County",
                    "slug": "boyne-city-charlevoix-county",
                },
                "Bowne Township, Kent County": {
                    "id": 8053,
                    "name": "Bowne Township, Kent County",
                    "slug": "bowne-township-kent-county",
                },
                "Bloomingdale Township, Van Buren County": {
                    "id": 8052,
                    "name": "Bloomingdale Township, Van Buren County",
                    "slug": "bloomingdale-township-van-buren-county",
                },
                "Bloomfield Hills, Oakland County": {
                    "id": 8051,
                    "name": "Bloomfield Hills, Oakland County",
                    "slug": "bloomfield-hills-city-oakland-county",
                },
                "Bloomer Township, Montcalm County": {
                    "id": 8050,
                    "name": "Bloomer Township, Montcalm County",
                    "slug": "bloomer-township-montcalm-county",
                },
                "Blissfield Township, Lenawee County": {
                    "id": 8049,
                    "name": "Blissfield Township, Lenawee County",
                    "slug": "blissfield-township-lenawee-county",
                },
                "Bingham Township, Leelanau County": {
                    "id": 8048,
                    "name": "Bingham Township, Leelanau County",
                    "slug": "bingham-township-leelanau-county",
                },
                "Bingham Township, Clinton County": {
                    "id": 8047,
                    "name": "Bingham Township, Clinton County",
                    "slug": "bingham-township-clinton-county",
                },
                "Big Rapids Charter Township, Mecosta County": {
                    "id": 8046,
                    "name": "Big Rapids Charter Township, Mecosta County",
                    "slug": "big-rapids-charter-township-mecosta-county",
                },
                "Big Prairie Township, Newaygo County": {
                    "id": 8045,
                    "name": "Big Prairie Township, Newaygo County",
                    "slug": "big-prairie-township-newaygo-county",
                },
                "Big Creek Township, Oscoda County": {
                    "id": 8044,
                    "name": "Big Creek Township, Oscoda County",
                    "slug": "big-creek-township-oscoda-county",
                },
                "Bertrand Township, Berrien County": {
                    "id": 8043,
                    "name": "Bertrand Township, Berrien County",
                    "slug": "bertrand-township-berrien-county",
                },
                "Berlin Township, St. Clair County": {
                    "id": 8042,
                    "name": "Berlin Township, St. Clair County",
                    "slug": "berlin-township-st-clair-county",
                },
                "Benzonia Township, Benzie County": {
                    "id": 8041,
                    "name": "Benzonia Township, Benzie County",
                    "slug": "benzonia-township-benzie-county",
                },
                "Benton Township, Eaton County": {
                    "id": 8040,
                    "name": "Benton Township, Eaton County",
                    "slug": "benton-township-eaton-county",
                },
                "Benton Township, Cheboygan County": {
                    "id": 8039,
                    "name": "Benton Township, Cheboygan County",
                    "slug": "benton-township-cheboygan-county",
                },
                "Bennington Township, Shiawassee County": {
                    "id": 8038,
                    "name": "Bennington Township, Shiawassee County",
                    "slug": "bennington-township-shiawassee-county",
                },
                "Bellevue Township, Eaton County": {
                    "id": 8037,
                    "name": "Bellevue Township, Eaton County",
                    "slug": "bellevue-township-eaton-county",
                },
                "Belleville, Wayne County": {
                    "id": 8036,
                    "name": "Belleville, Wayne County",
                    "slug": "belleville-city-wayne-county",
                },
                "Beaver Township, Bay County": {
                    "id": 8035,
                    "name": "Beaver Township, Bay County",
                    "slug": "beaver-township-bay-county",
                },
                "Barry Township, Barry County": {
                    "id": 8034,
                    "name": "Barry Township, Barry County",
                    "slug": "barry-township-barry-county",
                },
                "Baroda Township, Berrien County": {
                    "id": 8033,
                    "name": "Baroda Township, Berrien County",
                    "slug": "baroda-township-berrien-county",
                },
                "Baraga Township, Baraga County": {
                    "id": 8032,
                    "name": "Baraga Township, Baraga County",
                    "slug": "baraga-township-baraga-county",
                },
                "Bainbridge Township, Berrien County": {
                    "id": 8031,
                    "name": "Bainbridge Township, Berrien County",
                    "slug": "bainbridge-township-berrien-county",
                },
                "Bad Axe, Huron County": {
                    "id": 8030,
                    "name": "Bad Axe, Huron County",
                    "slug": "bad-axe-huron-county",
                },
                "Aurelius Township, Ingham County": {
                    "id": 8029,
                    "name": "Aurelius Township, Ingham County",
                    "slug": "aurelius-township-ingham-county",
                },
                "Attica Township, Lapeer County": {
                    "id": 8028,
                    "name": "Attica Township, Lapeer County",
                    "slug": "attica-township-lapeer-county",
                },
                "Athens Township, Calhoun County": {
                    "id": 8027,
                    "name": "Athens Township, Calhoun County",
                    "slug": "athens-township-calhoun-county",
                },
                "Ashland Township, Newaygo County": {
                    "id": 8026,
                    "name": "Ashland Township, Newaygo County",
                    "slug": "ashland-township-newaygo-county",
                },
                "Arcadia Township, Lapeer County": {
                    "id": 8025,
                    "name": "Arcadia Township, Lapeer County",
                    "slug": "arcadia-township-lapeer-county",
                },
                "Arbela Township, Tuscola County": {
                    "id": 8024,
                    "name": "Arbela Township, Tuscola County",
                    "slug": "arbela-township-tuscola-county",
                },
                "Ann Arbor Charter Township, Washtenaw County": {
                    "id": 8023,
                    "name": "Ann Arbor Charter Township, Washtenaw County",
                    "slug": "ann-arbor-charter-township-washtenaw-county",
                },
                "Amber Township, Mason County": {
                    "id": 8022,
                    "name": "Amber Township, Mason County",
                    "slug": "amber-township-mason-county",
                },
                "Almira Township, Benzie County": {
                    "id": 8021,
                    "name": "Almira Township, Benzie County",
                    "slug": "almira-township-benzie-county",
                },
                "Allegan Township, Allegan County": {
                    "id": 8020,
                    "name": "Allegan Township, Allegan County",
                    "slug": "allegan-township-allegan-county",
                },
                "Algonac, St. Clair County": {
                    "id": 8019,
                    "name": "Algonac, St. Clair County",
                    "slug": "algonac-st-clair-county",
                },
                "Alamo Township, Kalamazoo County": {
                    "id": 8018,
                    "name": "Alamo Township, Kalamazoo County",
                    "slug": "alamo-township-kalamazoo-county",
                },
                "Alaiedon Township, Ingham County": {
                    "id": 8017,
                    "name": "Alaiedon Township, Ingham County",
                    "slug": "alaiedon-township-ingham-county",
                },
                "Adams Township, Houghton County": {
                    "id": 8016,
                    "name": "Adams Township, Houghton County",
                    "slug": "adams-township-houghton-county",
                },
                "Acme Township, Grand Traverse County": {
                    "id": 8015,
                    "name": "Acme Township, Grand Traverse County",
                    "slug": "acme-township-grand-traverse-county",
                },
                "Zeeland Charter Township, Ottawa County": {
                    "id": 8014,
                    "name": "Zeeland Charter Township, Ottawa County",
                    "slug": "zeeland-charter-township-ottawa-county",
                },
                "Marion Township, Livingston County": {
                    "id": 8013,
                    "name": "Marion Township, Livingston County",
                    "slug": "marion-township-livingston-county",
                },
                "Egelston Township, Muskegon County": {
                    "id": 8012,
                    "name": "Egelston Township, Muskegon County",
                    "slug": "egelston-township-muskegon-county",
                },
                "Algoma Township, Kent County": {
                    "id": 8011,
                    "name": "Algoma Township, Kent County",
                    "slug": "algoma-township-kent-county",
                },
                "Zeeland, Ottawa County": {
                    "id": 8010,
                    "name": "Zeeland, Ottawa County",
                    "slug": "zeeland-city-ottawa-county",
                },
                "York Charter Township, Washtenaw County": {
                    "id": 8009,
                    "name": "York Charter Township, Washtenaw County",
                    "slug": "york-charter-township-washtenaw-county",
                },
                "Windsor Charter Township, Eaton County": {
                    "id": 8008,
                    "name": "Windsor Charter Township, Eaton County",
                    "slug": "windsor-charter-township-eaton-county",
                },
                "Williamstown Township, Ingham County": {
                    "id": 8007,
                    "name": "Williamstown Township, Ingham County",
                    "slug": "williamstown-township-ingham-county",
                },
                "Webster Township, Washtenaw County": {
                    "id": 8006,
                    "name": "Webster Township, Washtenaw County",
                    "slug": "webster-township-washtenaw-county",
                },
                "Watertown Charter Township, Clinton County": {
                    "id": 8005,
                    "name": "Watertown Charter Township, Clinton County",
                    "slug": "watertown-charter-township-clinton-county",
                },
                "Walled Lake, Oakland County": {
                    "id": 8004,
                    "name": "Walled Lake, Oakland County",
                    "slug": "walled-lake-oakland-county",
                },
                "Utica, Macomb County": {
                    "id": 8003,
                    "name": "Utica, Macomb County",
                    "slug": "utica-macomb-county",
                },
                "Tyrone Township, Kent County": {
                    "id": 8002,
                    "name": "Tyrone Township, Kent County",
                    "slug": "tyrone-township-kent-county",
                },
                "Tittabawassee Township, Saginaw County": {
                    "id": 8001,
                    "name": "Tittabawassee Township, Saginaw County",
                    "slug": "tittabawassee-township-saginaw-county",
                },
                "Three Rivers, St. Joseph County": {
                    "id": 8000,
                    "name": "Three Rivers, St. Joseph County",
                    "slug": "three-rivers-st-joseph-county",
                },
                "Thornapple Township, Barry County": {
                    "id": 7999,
                    "name": "Thornapple Township, Barry County",
                    "slug": "thornapple-township-barry-county",
                },
                "Thetford Township, Genesee County": {
                    "id": 7998,
                    "name": "Thetford Township, Genesee County",
                    "slug": "thetford-township-genesee-county",
                },
                "Tecumseh, Lenawee County": {
                    "id": 7997,
                    "name": "Tecumseh, Lenawee County",
                    "slug": "tecumseh-city-lenawee-county",
                },
                "Tallmadge Charter Township, Ottawa County": {
                    "id": 7996,
                    "name": "Tallmadge Charter Township, Ottawa County",
                    "slug": "tallmadge-charter-township-ottawa-county",
                },
                "Swartz Creek, Genesee County": {
                    "id": 7995,
                    "name": "Swartz Creek, Genesee County",
                    "slug": "swartz-creek-genesee-county",
                },
                "Sumpter Township, Wayne County": {
                    "id": 7994,
                    "name": "Sumpter Township, Wayne County",
                    "slug": "sumpter-township-wayne-county",
                },
                "St. Louis, Gratiot County": {
                    "id": 7993,
                    "name": "St. Louis, Gratiot County",
                    "slug": "st-louis-gratiot-county",
                },
                "St. Joseph, Berrien County": {
                    "id": 7992,
                    "name": "St. Joseph, Berrien County",
                    "slug": "st-joseph-city-berrien-county",
                },
                "St. Johns, Clinton County": {
                    "id": 7991,
                    "name": "St. Johns, Clinton County",
                    "slug": "st-johns-clinton-county",
                },
                "St. Clair Township, St. Clair County": {
                    "id": 7990,
                    "name": "St. Clair Township, St. Clair County",
                    "slug": "st-clair-township-st-clair-county",
                },
                "St. Clair, St. Clair County": {
                    "id": 7989,
                    "name": "St. Clair, St. Clair County",
                    "slug": "st-clair-city-st-clair-county",
                },
                "Springfield, Calhoun County": {
                    "id": 7988,
                    "name": "Springfield, Calhoun County",
                    "slug": "springfield-city-calhoun-county",
                },
                "Spring Arbor Township, Jackson County": {
                    "id": 7987,
                    "name": "Spring Arbor Township, Jackson County",
                    "slug": "spring-arbor-township-jackson-county",
                },
                "Sparta Township, Kent County": {
                    "id": 7986,
                    "name": "Sparta Township, Kent County",
                    "slug": "sparta-township-kent-county",
                },
                "Solon Township, Kent County": {
                    "id": 7985,
                    "name": "Solon Township, Kent County",
                    "slug": "solon-township-kent-county",
                },
                "Schoolcraft Township, Kalamazoo County": {
                    "id": 7984,
                    "name": "Schoolcraft Township, Kalamazoo County",
                    "slug": "schoolcraft-township-kalamazoo-county",
                },
                "Saline, Washtenaw County": {
                    "id": 7983,
                    "name": "Saline, Washtenaw County",
                    "slug": "saline-city-washtenaw-county",
                },
                "Salem Township, Washtenaw County": {
                    "id": 7982,
                    "name": "Salem Township, Washtenaw County",
                    "slug": "salem-township-washtenaw-county",
                },
                "Salem Township, Allegan County": {
                    "id": 7981,
                    "name": "Salem Township, Allegan County",
                    "slug": "salem-township-allegan-county",
                },
                "Rose Township, Oakland County": {
                    "id": 7980,
                    "name": "Rose Township, Oakland County",
                    "slug": "rose-township-oakland-county",
                },
                "Rockford, Kent County": {
                    "id": 7979,
                    "name": "Rockford, Kent County",
                    "slug": "rockford-kent-county",
                },
                "Robinson Township, Ottawa County": {
                    "id": 7978,
                    "name": "Robinson Township, Ottawa County",
                    "slug": "robinson-township-ottawa-county",
                },
                "River Rouge, Wayne County": {
                    "id": 7977,
                    "name": "River Rouge, Wayne County",
                    "slug": "river-rouge-wayne-county",
                },
                "Richmond": {
                    "id": 7976,
                    "name": "Richmond",
                    "slug": "richmond-city",
                },
                "Richland Township, Kalamazoo County": {
                    "id": 7975,
                    "name": "Richland Township, Kalamazoo County",
                    "slug": "richland-township-kalamazoo-county",
                },
                "Richfield Township, Genesee County": {
                    "id": 7974,
                    "name": "Richfield Township, Genesee County",
                    "slug": "richfield-township-genesee-county",
                },
                "Reynolds Township, Montcalm County": {
                    "id": 7973,
                    "name": "Reynolds Township, Montcalm County",
                    "slug": "reynolds-township-montcalm-county",
                },
                "Raisinville Township, Monroe County": {
                    "id": 7972,
                    "name": "Raisinville Township, Monroe County",
                    "slug": "raisinville-township-monroe-county",
                },
                "Raisin Township, Lenawee County": {
                    "id": 7971,
                    "name": "Raisin Township, Lenawee County",
                    "slug": "raisin-township-lenawee-county",
                },
                "Putnam Township, Livingston County": {
                    "id": 7970,
                    "name": "Putnam Township, Livingston County",
                    "slug": "putnam-township-livingston-county",
                },
                "Plymouth, Wayne County": {
                    "id": 7969,
                    "name": "Plymouth, Wayne County",
                    "slug": "plymouth-city-wayne-county",
                },
                "Petoskey, Emmet County": {
                    "id": 7968,
                    "name": "Petoskey, Emmet County",
                    "slug": "petoskey-emmet-county",
                },
                "Pennfield Charter Township, Calhoun County": {
                    "id": 7967,
                    "name": "Pennfield Charter Township, Calhoun County",
                    "slug": "pennfield-charter-township-calhoun-county",
                },
                "Peninsula Township, Grand Traverse County": {
                    "id": 7966,
                    "name": "Peninsula Township, Grand Traverse County",
                    "slug": "peninsula-township-grand-traverse-county",
                },
                "Paw Paw Township, Van Buren County": {
                    "id": 7965,
                    "name": "Paw Paw Township, Van Buren County",
                    "slug": "paw-paw-township-van-buren-county",
                },
                "Pavilion Township, Kalamazoo County": {
                    "id": 7964,
                    "name": "Pavilion Township, Kalamazoo County",
                    "slug": "pavilion-township-kalamazoo-county",
                },
                "Paradise Township, Grand Traverse County": {
                    "id": 7963,
                    "name": "Paradise Township, Grand Traverse County",
                    "slug": "paradise-township-grand-traverse-county",
                },
                "Otsego Township, Allegan County": {
                    "id": 7962,
                    "name": "Otsego Township, Allegan County",
                    "slug": "otsego-township-allegan-county",
                },
                "Oscoda Charter Township, Iosco County": {
                    "id": 7961,
                    "name": "Oscoda Charter Township, Iosco County",
                    "slug": "oscoda-charter-township-iosco-county",
                },
                "Oronoko Charter Township, Berrien County": {
                    "id": 7960,
                    "name": "Oronoko Charter Township, Berrien County",
                    "slug": "oronoko-charter-township-berrien-county",
                },
                "Oregon Township, Lapeer County": {
                    "id": 7959,
                    "name": "Oregon Township, Lapeer County",
                    "slug": "oregon-township-lapeer-county",
                },
                "Ontwa Township, Cass County": {
                    "id": 7958,
                    "name": "Ontwa Township, Cass County",
                    "slug": "ontwa-township-cass-county",
                },
                "Olive Township, Ottawa County": {
                    "id": 7957,
                    "name": "Olive Township, Ottawa County",
                    "slug": "olive-township-ottawa-county",
                },
                "Oakfield Township, Kent County": {
                    "id": 7956,
                    "name": "Oakfield Township, Kent County",
                    "slug": "oakfield-township-kent-county",
                },
                "Northfield Township, Washtenaw County": {
                    "id": 7955,
                    "name": "Northfield Township, Washtenaw County",
                    "slug": "northfield-township-washtenaw-county",
                },
                "Nelson Township, Kent County": {
                    "id": 7954,
                    "name": "Nelson Township, Kent County",
                    "slug": "nelson-township-kent-county",
                },
                "Napoleon Township, Jackson County": {
                    "id": 7953,
                    "name": "Napoleon Township, Jackson County",
                    "slug": "napoleon-township-jackson-county",
                },
                "Montrose Charter Township, Genesee County": {
                    "id": 7952,
                    "name": "Montrose Charter Township, Genesee County",
                    "slug": "montrose-charter-township-genesee-county",
                },
                "Menominee, Menominee County": {
                    "id": 7951,
                    "name": "Menominee, Menominee County",
                    "slug": "menominee-city-menominee-county",
                },
                "Mayfield Township, Lapeer County": {
                    "id": 7950,
                    "name": "Mayfield Township, Lapeer County",
                    "slug": "mayfield-township-lapeer-county",
                },
                "Mason, Ingham County": {
                    "id": 7949,
                    "name": "Mason, Ingham County",
                    "slug": "mason-city-ingham-county",
                },
                "Marysville, St. Clair County": {
                    "id": 7948,
                    "name": "Marysville, St. Clair County",
                    "slug": "marysville-st-clair-county",
                },
                "Marshall, Calhoun County": {
                    "id": 7947,
                    "name": "Marshall, Calhoun County",
                    "slug": "marshall-city-calhoun-county",
                },
                "Manistee, Manistee County": {
                    "id": 7946,
                    "name": "Manistee, Manistee County",
                    "slug": "manistee-city-manistee-county",
                },
                "Madison Charter Township, Lenawee County": {
                    "id": 7945,
                    "name": "Madison Charter Township, Lenawee County",
                    "slug": "madison-charter-township-lenawee-county",
                },
                "Ludington, Mason County": {
                    "id": 7944,
                    "name": "Ludington, Mason County",
                    "slug": "ludington-city-mason-county",
                },
                "Lowell Charter Township, Kent County": {
                    "id": 7943,
                    "name": "Lowell Charter Township, Kent County",
                    "slug": "lowell-charter-township-kent-county",
                },
                "Long Lake Township, Grand Traverse County": {
                    "id": 7942,
                    "name": "Long Lake Township, Grand Traverse County",
                    "slug": "long-lake-township-grand-traverse-county",
                },
                "Lodi Township, Washtenaw County": {
                    "id": 7941,
                    "name": "Lodi Township, Washtenaw County",
                    "slug": "lodi-township-washtenaw-county",
                },
                "Leighton Township, Allegan County": {
                    "id": 7940,
                    "name": "Leighton Township, Allegan County",
                    "slug": "leighton-township-allegan-county",
                },
                "Larkin Charter Township, Midland County": {
                    "id": 7939,
                    "name": "Larkin Charter Township, Midland County",
                    "slug": "larkin-charter-township-midland-county",
                },
                "Lapeer Township, Lapeer County": {
                    "id": 7938,
                    "name": "Lapeer Township, Lapeer County",
                    "slug": "lapeer-township-lapeer-county",
                },
                "Lapeer, Lapeer County": {
                    "id": 7937,
                    "name": "Lapeer, Lapeer County",
                    "slug": "lapeer-city-lapeer-county",
                },
                "Lansing Charter Township, Ingham County": {
                    "id": 7936,
                    "name": "Lansing Charter Township, Ingham County",
                    "slug": "lansing-charter-township-ingham-county",
                },
                "Laketown Township, Allegan County": {
                    "id": 7935,
                    "name": "Laketown Township, Allegan County",
                    "slug": "laketown-township-allegan-county",
                },
                "Laketon Township, Muskegon County": {
                    "id": 7934,
                    "name": "Laketon Township, Muskegon County",
                    "slug": "laketon-township-muskegon-county",
                },
                "Kinross Charter Township, Chippewa County": {
                    "id": 7933,
                    "name": "Kinross Charter Township, Chippewa County",
                    "slug": "kinross-charter-township-chippewa-county",
                },
                "Kimball Township, St. Clair County": {
                    "id": 7932,
                    "name": "Kimball Township, St. Clair County",
                    "slug": "kimball-township-st-clair-county",
                },
                "Jamestown Charter Township, Ottawa County": {
                    "id": 7931,
                    "name": "Jamestown Charter Township, Ottawa County",
                    "slug": "jamestown-charter-township-ottawa-county",
                },
                "Ishpeming, Marquette County": {
                    "id": 7930,
                    "name": "Ishpeming, Marquette County",
                    "slug": "ishpeming-city-marquette-county",
                },
                "Iron Mountain, Dickinson County": {
                    "id": 7929,
                    "name": "Iron Mountain, Dickinson County",
                    "slug": "iron-mountain-dickinson-county",
                },
                "Ira Township, St. Clair County": {
                    "id": 7928,
                    "name": "Ira Township, St. Clair County",
                    "slug": "ira-township-st-clair-county",
                },
                "Huntington Woods, Oakland County": {
                    "id": 7927,
                    "name": "Huntington Woods, Oakland County",
                    "slug": "huntington-woods-oakland-county",
                },
                "Hudsonville, Ottawa County": {
                    "id": 7926,
                    "name": "Hudsonville, Ottawa County",
                    "slug": "hudsonville-ottawa-county",
                },
                "Howell Township, Livingston County": {
                    "id": 7925,
                    "name": "Howell Township, Livingston County",
                    "slug": "howell-township-livingston-county",
                },
                "Howell, Livingston County": {
                    "id": 7924,
                    "name": "Howell, Livingston County",
                    "slug": "howell-city-livingston-county",
                },
                "Howard Township, Cass County": {
                    "id": 7923,
                    "name": "Howard Township, Cass County",
                    "slug": "howard-township-cass-county",
                },
                "Houghton, Houghton County": {
                    "id": 7922,
                    "name": "Houghton, Houghton County",
                    "slug": "houghton-city-houghton-county",
                },
                "Hillsdale, Hillsdale County": {
                    "id": 7921,
                    "name": "Hillsdale, Hillsdale County",
                    "slug": "hillsdale-city-hillsdale-county",
                },
                "Hastings, Barry County": {
                    "id": 7920,
                    "name": "Hastings, Barry County",
                    "slug": "hastings-city-barry-county",
                },
                "Handy Township, Livingston County": {
                    "id": 7919,
                    "name": "Handy Township, Livingston County",
                    "slug": "handy-township-livingston-county",
                },
                "Hampton Charter Township, Bay County": {
                    "id": 7918,
                    "name": "Hampton Charter Township, Bay County",
                    "slug": "hampton-charter-township-bay-county",
                },
                "Gun Plain Township, Allegan County": {
                    "id": 7917,
                    "name": "Gun Plain Township, Allegan County",
                    "slug": "gun-plain-township-allegan-county",
                },
                "Groveland Township, Oakland County": {
                    "id": 7916,
                    "name": "Groveland Township, Oakland County",
                    "slug": "groveland-township-oakland-county",
                },
                "Grosse Pointe Farms, Wayne County": {
                    "id": 7915,
                    "name": "Grosse Pointe Farms, Wayne County",
                    "slug": "grosse-pointe-farms-wayne-county",
                },
                "Grosse Pointe, Wayne County": {
                    "id": 7914,
                    "name": "Grosse Pointe, Wayne County",
                    "slug": "grosse-pointe-wayne-county",
                },
                "Greenville, Montcalm County": {
                    "id": 7913,
                    "name": "Greenville, Montcalm County",
                    "slug": "greenville-montcalm-county",
                },
                "Green Lake Township, Grand Traverse County": {
                    "id": 7912,
                    "name": "Green Lake Township, Grand Traverse County",
                    "slug": "green-lake-township-grand-traverse-county",
                },
                "Grayling Charter Township, Crawford County": {
                    "id": 7911,
                    "name": "Grayling Charter Township, Crawford County",
                    "slug": "grayling-charter-township-crawford-county",
                },
                "Grass Lake Charter Township, Jackson County": {
                    "id": 7910,
                    "name": "Grass Lake Charter Township, Jackson County",
                    "slug": "grass-lake-charter-township-jackson-county",
                },
                "Grand Ledge, Eaton County": {
                    "id": 7909,
                    "name": "Grand Ledge, Eaton County",
                    "slug": "grand-ledge-city-eaton-county",
                },
                "Grand Blanc, Genesee County": {
                    "id": 7908,
                    "name": "Grand Blanc, Genesee County",
                    "slug": "grand-blanc-city-genesee-county",
                },
                "Gaines Township, Genesee County": {
                    "id": 7907,
                    "name": "Gaines Township, Genesee County",
                    "slug": "gaines-township-genesee-county",
                },
                "Fruitland Township, Muskegon County": {
                    "id": 7906,
                    "name": "Fruitland Township, Muskegon County",
                    "slug": "fruitland-township-muskegon-county",
                },
                "Frankenmuth, Saginaw County": {
                    "id": 7905,
                    "name": "Frankenmuth, Saginaw County",
                    "slug": "frankenmuth-saginaw-county",
                },
                "Forsyth Township, Marquette County": {
                    "id": 7904,
                    "name": "Forsyth Township, Marquette County",
                    "slug": "forsyth-township-marquette-county",
                },
                "Flushing, Genesee County": {
                    "id": 7903,
                    "name": "Flushing, Genesee County",
                    "slug": "flushing-city-genesee-county",
                },
                "Elba Township, Lapeer County": {
                    "id": 7902,
                    "name": "Elba Township, Lapeer County",
                    "slug": "elba-township-lapeer-county",
                },
                "Ecorse, Wayne County": {
                    "id": 7901,
                    "name": "Ecorse, Wayne County",
                    "slug": "ecorse-wayne-county",
                },
                "Eaton Rapids, Eaton County": {
                    "id": 7900,
                    "name": "Eaton Rapids, Eaton County",
                    "slug": "eaton-rapids-city-eaton-county",
                },
                "Dundee Township, Monroe County": {
                    "id": 7899,
                    "name": "Dundee Township, Monroe County",
                    "slug": "dundee-township-monroe-county",
                },
                "Dowagiac, Cass County": {
                    "id": 7898,
                    "name": "Dowagiac, Cass County",
                    "slug": "dowagiac-city-cass-county",
                },
                "Dorr Township, Allegan County": {
                    "id": 7897,
                    "name": "Dorr Township, Allegan County",
                    "slug": "dorr-township-allegan-county",
                },
                "Dexter Township, Washtenaw County": {
                    "id": 7896,
                    "name": "Dexter Township, Washtenaw County",
                    "slug": "dexter-township-washtenaw-county",
                },
                "Denton Township, Roscommon County": {
                    "id": 7895,
                    "name": "Denton Township, Roscommon County",
                    "slug": "denton-township-roscommon-county",
                },
                "Deerfield Township, Lapeer County": {
                    "id": 7894,
                    "name": "Deerfield Township, Lapeer County",
                    "slug": "deerfield-township-lapeer-county",
                },
                "Dalton Township, Muskegon County": {
                    "id": 7893,
                    "name": "Dalton Township, Muskegon County",
                    "slug": "dalton-township-muskegon-county",
                },
                "Courtland Township, Kent County": {
                    "id": 7892,
                    "name": "Courtland Township, Kent County",
                    "slug": "courtland-township-kent-county",
                },
                "Columbia Township, Jackson County": {
                    "id": 7891,
                    "name": "Columbia Township, Jackson County",
                    "slug": "columbia-township-jackson-county",
                },
                "Clyde Township, St. Clair County": {
                    "id": 7890,
                    "name": "Clyde Township, St. Clair County",
                    "slug": "clyde-township-st-clair-county",
                },
                "Clayton Charter Township, Genesee County": {
                    "id": 7889,
                    "name": "Clayton Charter Township, Genesee County",
                    "slug": "clayton-charter-township-genesee-county",
                },
                "Clay Township, St. Clair County": {
                    "id": 7888,
                    "name": "Clay Township, St. Clair County",
                    "slug": "clay-township-st-clair-county",
                },
                "Chocolay Charter Township, Marquette County": {
                    "id": 7887,
                    "name": "Chocolay Charter Township, Marquette County",
                    "slug": "chocolay-charter-township-marquette-county",
                },
                "Chelsea, Washtenaw County": {
                    "id": 7886,
                    "name": "Chelsea, Washtenaw County",
                    "slug": "chelsea-washtenaw-county",
                },
                "Charlotte, Eaton County": {
                    "id": 7885,
                    "name": "Charlotte, Eaton County",
                    "slug": "charlotte-city-eaton-county",
                },
                "Center Line, Macomb County": {
                    "id": 7884,
                    "name": "Center Line, Macomb County",
                    "slug": "center-line-city-macomb-county",
                },
                "Carrollton Township, Saginaw County": {
                    "id": 7883,
                    "name": "Carrollton Township, Saginaw County",
                    "slug": "carrollton-township-saginaw-county",
                },
                "Cambridge Township, Lenawee County": {
                    "id": 7882,
                    "name": "Cambridge Township, Lenawee County",
                    "slug": "cambridge-township-lenawee-county",
                },
                "Calumet Charter Township, Houghton County": {
                    "id": 7881,
                    "name": "Calumet Charter Township, Houghton County",
                    "slug": "calumet-charter-township-houghton-county",
                },
                "Buena Vista Charter Township, Saginaw County": {
                    "id": 7880,
                    "name": "Buena Vista Charter Township, Saginaw County",
                    "slug": "buena-vista-charter-township-saginaw-county",
                },
                "Bruce Township, Macomb County": {
                    "id": 7879,
                    "name": "Bruce Township, Macomb County",
                    "slug": "bruce-township-macomb-county",
                },
                "Brighton, Livingston County": {
                    "id": 7878,
                    "name": "Brighton, Livingston County",
                    "slug": "brighton-city-livingston-county",
                },
                "Breitung Charter Township, Dickinson County": {
                    "id": 7877,
                    "name": "Breitung Charter Township, Dickinson County",
                    "slug": "breitung-charter-township-dickinson-county",
                },
                "Boston Township, Ionia County": {
                    "id": 7876,
                    "name": "Boston Township, Ionia County",
                    "slug": "boston-township-ionia-county",
                },
                "Blendon Township, Ottawa County": {
                    "id": 7875,
                    "name": "Blendon Township, Ottawa County",
                    "slug": "blendon-township-ottawa-county",
                },
                "Blair Township, Grand Traverse County": {
                    "id": 7874,
                    "name": "Blair Township, Grand Traverse County",
                    "slug": "blair-township-grand-traverse-county",
                },
                "Birch Run Township, Saginaw County": {
                    "id": 7873,
                    "name": "Birch Run Township, Saginaw County",
                    "slug": "birch-run-township-saginaw-county",
                },
                "Berrien Township, Berrien County": {
                    "id": 7872,
                    "name": "Berrien Township, Berrien County",
                    "slug": "berrien-township-berrien-county",
                },
                "Berlin Charter Township, Monroe County": {
                    "id": 7871,
                    "name": "Berlin Charter Township, Monroe County",
                    "slug": "berlin-charter-township-monroe-county",
                },
                "Belding, Ionia County": {
                    "id": 7870,
                    "name": "Belding, Ionia County",
                    "slug": "belding-city-ionia-county",
                },
                "Bedford Charter Township, Calhoun County": {
                    "id": 7869,
                    "name": "Bedford Charter Township, Calhoun County",
                    "slug": "bedford-charter-township-calhoun-county",
                },
                "Bear Creek Township, Emmet County": {
                    "id": 7868,
                    "name": "Bear Creek Township, Emmet County",
                    "slug": "bear-creek-township-emmet-county",
                },
                "Bagley Township, Otsego County": {
                    "id": 7867,
                    "name": "Bagley Township, Otsego County",
                    "slug": "bagley-township-otsego-county",
                },
                "Augusta Charter Township, Washtenaw County": {
                    "id": 7866,
                    "name": "Augusta Charter Township, Washtenaw County",
                    "slug": "augusta-charter-township-washtenaw-county",
                },
                "Atlas Township, Genesee County": {
                    "id": 7865,
                    "name": "Atlas Township, Genesee County",
                    "slug": "atlas-township-genesee-county",
                },
                "Ash Township, Monroe County": {
                    "id": 7864,
                    "name": "Ash Township, Monroe County",
                    "slug": "ash-township-monroe-county",
                },
                "Armada Township, Macomb County": {
                    "id": 7863,
                    "name": "Armada Township, Macomb County",
                    "slug": "armada-township-macomb-county",
                },
                "Argentine Township, Genesee County": {
                    "id": 7862,
                    "name": "Argentine Township, Genesee County",
                    "slug": "argentine-township-genesee-county",
                },
                "Alpena Township, Alpena County": {
                    "id": 7861,
                    "name": "Alpena Township, Alpena County",
                    "slug": "alpena-township-alpena-county",
                },
                "Almont Township, Lapeer County": {
                    "id": 7860,
                    "name": "Almont Township, Lapeer County",
                    "slug": "almont-township-lapeer-county",
                },
                "Almena Township, Van Buren County": {
                    "id": 7859,
                    "name": "Almena Township, Van Buren County",
                    "slug": "almena-township-van-buren-county",
                },
                "Alma, Gratiot County": {
                    "id": 7858,
                    "name": "Alma, Gratiot County",
                    "slug": "alma-gratiot-county",
                },
                "Allegan, Allegan County": {
                    "id": 7857,
                    "name": "Allegan, Allegan County",
                    "slug": "allegan-city-allegan-county",
                },
                "Albion, Calhoun County": {
                    "id": 7856,
                    "name": "Albion, Calhoun County",
                    "slug": "albion-city-calhoun-county",
                },
                "Adrian Township, Lenawee County": {
                    "id": 7855,
                    "name": "Adrian Township, Lenawee County",
                    "slug": "adrian-township-lenawee-county",
                },
                "Addison Township, Oakland County": {
                    "id": 7854,
                    "name": "Addison Township, Oakland County",
                    "slug": "addison-township-oakland-county",
                },
                "Tyrone Township, Livingston County": {
                    "id": 7853,
                    "name": "Tyrone Township, Livingston County",
                    "slug": "tyrone-township-livingston-county",
                },
                "St. Joseph Charter Township, Berrien County": {
                    "id": 7852,
                    "name": "St. Joseph Charter Township, Berrien County",
                    "slug": "st-joseph-charter-township-berrien-county",
                },
                "Benton Harbor, Berrien County": {
                    "id": 7851,
                    "name": "Benton Harbor, Berrien County",
                    "slug": "benton-harbor-city-berrien-county",
                },
                "Cooper Charter Township, Kalamazoo County": {
                    "id": 7850,
                    "name": "Cooper Charter Township, Kalamazoo County",
                    "slug": "cooper-charter-township-kalamazoo-county",
                },
                "Cadillac, Wexford County": {
                    "id": 7849,
                    "name": "Cadillac, Wexford County",
                    "slug": "cadillac-wexford-county",
                },
                "Grosse Ile Township, Wayne County": {
                    "id": 7848,
                    "name": "Grosse Ile Township, Wayne County",
                    "slug": "grosse-ile-township-wayne-county",
                },
                "Farmington, Oakland County": {
                    "id": 7847,
                    "name": "Farmington, Oakland County",
                    "slug": "farmington-oakland-county",
                },
                "Grand Haven, Ottawa County": {
                    "id": 7846,
                    "name": "Grand Haven, Ottawa County",
                    "slug": "grand-haven-city-ottawa-county",
                },
                "Lenox Township, Macomb County": {
                    "id": 7845,
                    "name": "Lenox Township, Macomb County",
                    "slug": "lenox-township-macomb-county",
                },
                "Alpena, Alpena County": {
                    "id": 7844,
                    "name": "Alpena, Alpena County",
                    "slug": "alpena-city-alpena-county",
                },
                "Bridgeport Charter Township, Saginaw County": {
                    "id": 7843,
                    "name": "Bridgeport Charter Township, Saginaw County",
                    "slug": "bridgeport-charter-township-saginaw-county",
                },
                "Big Rapids, Mecosta County": {
                    "id": 7842,
                    "name": "Big Rapids, Mecosta County",
                    "slug": "big-rapids-city-mecosta-county",
                },
                "Flushing Charter Township, Genesee County": {
                    "id": 7841,
                    "name": "Flushing Charter Township, Genesee County",
                    "slug": "flushing-charter-township-genesee-county",
                },
                "Port Huron Charter Township, St. Clair County": {
                    "id": 7840,
                    "name": "Port Huron Charter Township, St. Clair County",
                    "slug": "port-huron-charter-township-st-clair-county",
                },
                "East Bay Township, Grand Traverse County": {
                    "id": 7839,
                    "name": "East Bay Township, Grand Traverse County",
                    "slug": "east-bay-township-grand-traverse-county",
                },
                "East Grand Rapids, Kent County": {
                    "id": 7838,
                    "name": "East Grand Rapids, Kent County",
                    "slug": "east-grand-rapids-kent-county",
                },
                "Melvindale, Wayne County": {
                    "id": 7837,
                    "name": "Melvindale, Wayne County",
                    "slug": "melvindale-wayne-county",
                },
                "Monitor Charter Township, Bay County": {
                    "id": 7836,
                    "name": "Monitor Charter Township, Bay County",
                    "slug": "monitor-charter-township-bay-county",
                },
                "Muskegon Heights, Muskegon County": {
                    "id": 7835,
                    "name": "Muskegon Heights, Muskegon County",
                    "slug": "muskegon-heights-muskegon-county",
                },
                "Coldwater, Branch County": {
                    "id": 7834,
                    "name": "Coldwater, Branch County",
                    "slug": "coldwater-city-branch-county",
                },
                "Sturgis, St. Joseph County": {
                    "id": 7833,
                    "name": "Sturgis, St. Joseph County",
                    "slug": "sturgis-city-st-joseph-county",
                },
                "Fort Gratiot Charter Township, St. Clair County": {
                    "id": 7832,
                    "name": "Fort Gratiot Charter Township, St. Clair County",
                    "slug": "fort-gratiot-charter-township-st-clair-county",
                },
                "South Lyon, Oakland County": {
                    "id": 7831,
                    "name": "South Lyon, Oakland County",
                    "slug": "south-lyon-oakland-county",
                },
                "Holly Township, Oakland County": {
                    "id": 7830,
                    "name": "Holly Township, Oakland County",
                    "slug": "holly-township-oakland-county",
                },
                "Ionia, Ionia County": {
                    "id": 7829,
                    "name": "Ionia, Ionia County",
                    "slug": "ionia-city-ionia-county",
                },
                "Grosse Pointe Park, Wayne County": {
                    "id": 7828,
                    "name": "Grosse Pointe Park, Wayne County",
                    "slug": "grosse-pointe-park-wayne-county",
                },
                "Bath Charter Township, Clinton County": {
                    "id": 7827,
                    "name": "Bath Charter Township, Clinton County",
                    "slug": "bath-charter-township-clinton-county",
                },
                "Niles": {
                    "id": 7826,
                    "name": "Niles",
                    "slug": "niles-city",
                },
                "Fenton": {
                    "id": 7825,
                    "name": "Fenton",
                    "slug": "fenton-city",
                },
                "Emmett Charter Township, Calhoun County": {
                    "id": 7824,
                    "name": "Emmett Charter Township, Calhoun County",
                    "slug": "emmett-charter-township-calhoun-county",
                },
                "Highland Park, Wayne County": {
                    "id": 7823,
                    "name": "Highland Park, Wayne County",
                    "slug": "highland-park-wayne-county",
                },
                "Clawson, Oakland County": {
                    "id": 7822,
                    "name": "Clawson, Oakland County",
                    "slug": "clawson-oakland-county",
                },
                "Oceola Township, Livingston County": {
                    "id": 7821,
                    "name": "Oceola Township, Livingston County",
                    "slug": "oceola-township-livingston-county",
                },
                "Thomas Township, Saginaw County": {
                    "id": 7820,
                    "name": "Thomas Township, Saginaw County",
                    "slug": "thomas-township-saginaw-county",
                },
                "New Baltimore, Macomb County": {
                    "id": 7819,
                    "name": "New Baltimore, Macomb County",
                    "slug": "new-baltimore-macomb-county",
                },
                "Antwerp Township, Van Buren County": {
                    "id": 7818,
                    "name": "Antwerp Township, Van Buren County",
                    "slug": "antwerp-township-van-buren-county",
                },
                "Caledonia Township, Kent County": {
                    "id": 7817,
                    "name": "Caledonia Township, Kent County",
                    "slug": "caledonia-township-kent-county",
                },
                "Riverview, Wayne County": {
                    "id": 7816,
                    "name": "Riverview, Wayne County",
                    "slug": "riverview-wayne-county",
                },
                "Escanaba, Delta County": {
                    "id": 7815,
                    "name": "Escanaba, Delta County",
                    "slug": "escanaba-city-delta-county",
                },
                "Rochester, Oakland County": {
                    "id": 7814,
                    "name": "Rochester, Oakland County",
                    "slug": "rochester-oakland-county",
                },
                "Woodhaven, Wayne County": {
                    "id": 7813,
                    "name": "Woodhaven, Wayne County",
                    "slug": "woodhaven-wayne-county",
                },
                "Union Charter Township, Isabella County": {
                    "id": 7812,
                    "name": "Union Charter Township, Isabella County",
                    "slug": "union-charter-township-isabella-county",
                },
                "Superior Charter Township, Washtenaw County": {
                    "id": 7811,
                    "name": "Superior Charter Township, Washtenaw County",
                    "slug": "superior-charter-township-washtenaw-county",
                },
                "Ada Township, Kent County": {
                    "id": 7810,
                    "name": "Ada Township, Kent County",
                    "slug": "ada-township-kent-county",
                },
                "Vienna Charter Township, Genesee County": {
                    "id": 7809,
                    "name": "Vienna Charter Township, Genesee County",
                    "slug": "vienna-charter-township-genesee-county",
                },
                "Cannon Township, Kent County": {
                    "id": 7808,
                    "name": "Cannon Township, Kent County",
                    "slug": "cannon-township-kent-county",
                },
                "Alpine Township, Kent County": {
                    "id": 7807,
                    "name": "Alpine Township, Kent County",
                    "slug": "alpine-township-kent-county",
                },
                "Wixom, Oakland County": {
                    "id": 7806,
                    "name": "Wixom, Oakland County",
                    "slug": "wixom-oakland-county",
                },
                "Fruitport Charter Township, Muskegon County": {
                    "id": 7805,
                    "name": "Fruitport Charter Township, Muskegon County",
                    "slug": "fruitport-charter-township-muskegon-county",
                },
                "Leoni Township, Jackson County": {
                    "id": 7804,
                    "name": "Leoni Township, Jackson County",
                    "slug": "leoni-township-jackson-county",
                },
                "Springfield Charter Township, Oakland County": {
                    "id": 7803,
                    "name": "Springfield Charter Township, Oakland County",
                    "slug": "springfield-charter-township-oakland-county",
                },
                "Sault Ste. Marie, Chippewa County": {
                    "id": 7802,
                    "name": "Sault Ste. Marie, Chippewa County",
                    "slug": "sault-ste-marie-chippewa-county",
                },
                "Niles Township, Berrien County": {
                    "id": 7801,
                    "name": "Niles Township, Berrien County",
                    "slug": "niles-township-berrien-county",
                },
                "Harper Woods, Wayne County": {
                    "id": 7800,
                    "name": "Harper Woods, Wayne County",
                    "slug": "harper-woods-wayne-county",
                },
                "Spring Lake Township, Ottawa County": {
                    "id": 7799,
                    "name": "Spring Lake Township, Ottawa County",
                    "slug": "spring-lake-township-ottawa-county",
                },
                "DeWitt Charter Township, Clinton County": {
                    "id": 7798,
                    "name": "DeWitt Charter Township, Clinton County",
                    "slug": "dewitt-charter-township-clinton-county",
                },
                "Fraser, Macomb County": {
                    "id": 7797,
                    "name": "Fraser, Macomb County",
                    "slug": "fraser-city-macomb-county",
                },
                "Lyon Charter Township, Oakland County": {
                    "id": 7796,
                    "name": "Lyon Charter Township, Oakland County",
                    "slug": "lyon-charter-township-oakland-county",
                },
                "Southfield Township, Oakland County": {
                    "id": 7795,
                    "name": "Southfield Township, Oakland County",
                    "slug": "southfield-township-oakland-county",
                },
                "Monroe Charter Township, Monroe County": {
                    "id": 7794,
                    "name": "Monroe Charter Township, Monroe County",
                    "slug": "monroe-charter-township-monroe-county",
                },
                "Bangor Charter Township, Bay County": {
                    "id": 7793,
                    "name": "Bangor Charter Township, Bay County",
                    "slug": "bangor-charter-township-bay-county",
                },
                "Hartland Township, Livingston County": {
                    "id": 7792,
                    "name": "Hartland Township, Livingston County",
                    "slug": "hartland-township-livingston-county",
                },
                "Traverse City": {
                    "id": 7791,
                    "name": "Traverse City",
                    "slug": "traverse-city",
                },
                "Lincoln Charter Township, Berrien County": {
                    "id": 7790,
                    "name": "Lincoln Charter Township, Berrien County",
                    "slug": "lincoln-charter-township-berrien-county",
                },
                "Texas Charter Township, Kalamazoo County": {
                    "id": 7789,
                    "name": "Texas Charter Township, Kalamazoo County",
                    "slug": "texas-charter-township-kalamazoo-county",
                },
                "Benton Charter Township, Berrien County": {
                    "id": 7788,
                    "name": "Benton Charter Township, Berrien County",
                    "slug": "benton-charter-township-berrien-county",
                },
                "Comstock Charter Township, Kalamazoo County": {
                    "id": 7787,
                    "name": "Comstock Charter Township, Kalamazoo County",
                    "slug": "comstock-charter-township-kalamazoo-county",
                },
                "Berkley, Oakland County": {
                    "id": 7786,
                    "name": "Berkley, Oakland County",
                    "slug": "berkley-oakland-county",
                },
                "Mundy Township, Genesee County": {
                    "id": 7785,
                    "name": "Mundy Township, Genesee County",
                    "slug": "mundy-township-genesee-county",
                },
                "Brandon Charter Township, Oakland County": {
                    "id": 7784,
                    "name": "Brandon Charter Township, Oakland County",
                    "slug": "brandon-charter-township-oakland-county",
                },
                "Grand Haven Charter Township, Ottawa County": {
                    "id": 7783,
                    "name": "Grand Haven Charter Township, Ottawa County",
                    "slug": "grand-haven-charter-township-ottawa-county",
                },
                "Owosso, Shiawassee County": {
                    "id": 7782,
                    "name": "Owosso, Shiawassee County",
                    "slug": "owosso-city-shiawassee-county",
                },
                "Grandville, Kent County": {
                    "id": 7781,
                    "name": "Grandville, Kent County",
                    "slug": "grandville-kent-county",
                },
                "Fenton Charter Township, Genesee County": {
                    "id": 7780,
                    "name": "Fenton Charter Township, Genesee County",
                    "slug": "fenton-charter-township-genesee-county",
                },
                "Milford Charter Township, Oakland County": {
                    "id": 7779,
                    "name": "Milford Charter Township, Oakland County",
                    "slug": "milford-charter-township-oakland-county",
                },
                "Huron Charter Township, Wayne County": {
                    "id": 7778,
                    "name": "Huron Charter Township, Wayne County",
                    "slug": "huron-charter-township-wayne-county",
                },
                "Grosse Pointe Woods, Wayne County": {
                    "id": 7777,
                    "name": "Grosse Pointe Woods, Wayne County",
                    "slug": "grosse-pointe-woods-wayne-county",
                },
                "Garfield Charter Township, Grand Traverse County": {
                    "id": 7776,
                    "name": "Garfield Charter Township, Grand Traverse County",
                    "slug": "garfield-charter-township-grand-traverse-county",
                },
                "Mount Clemens, Macomb County": {
                    "id": 7775,
                    "name": "Mount Clemens, Macomb County",
                    "slug": "mount-clemens-macomb-county",
                },
                "Hazel Park, Oakland County": {
                    "id": 7774,
                    "name": "Hazel Park, Oakland County",
                    "slug": "hazel-park-oakland-county",
                },
                "Grand Rapids Charter Township, Kent County": {
                    "id": 7773,
                    "name": "Grand Rapids Charter Township, Kent County",
                    "slug": "grand-rapids-charter-township-kent-county",
                },
                "Oakland Charter Township, Oakland County": {
                    "id": 7772,
                    "name": "Oakland Charter Township, Oakland County",
                    "slug": "oakland-charter-township-oakland-county",
                },
                "Cascade Charter Township, Kent County": {
                    "id": 7771,
                    "name": "Cascade Charter Township, Kent County",
                    "slug": "cascade-charter-township-kent-county",
                },
                "Green Oak Charter Township, Livingston County": {
                    "id": 7770,
                    "name": "Green Oak Charter Township, Livingston County",
                    "slug": "green-oak-township-livingston-county",
                },
                "Wayne, Wayne County": {
                    "id": 7769,
                    "name": "Wayne, Wayne County",
                    "slug": "wayne-city-wayne-county",
                },
                "Brighton Township, Livingston County": {
                    "id": 7768,
                    "name": "Brighton Township, Livingston County",
                    "slug": "brighton-township-livingston-county",
                },
                "Park Township, Ottawa County": {
                    "id": 7767,
                    "name": "Park Township, Ottawa County",
                    "slug": "park-township-ottawa-county",
                },
                "Muskegon Charter Township, Muskegon County": {
                    "id": 7766,
                    "name": "Muskegon Charter Township, Muskegon County",
                    "slug": "muskegon-charter-township-muskegon-county",
                },
                "Trenton, Wayne County": {
                    "id": 7765,
                    "name": "Trenton, Wayne County",
                    "slug": "trenton-wayne-county",
                },
                "Highland Charter Township, Oakland County": {
                    "id": 7764,
                    "name": "Highland Charter Township, Oakland County",
                    "slug": "highland-charter-township-oakland-county",
                },
                "Ypsilanti, Washtenaw County": {
                    "id": 7763,
                    "name": "Ypsilanti, Washtenaw County",
                    "slug": "ypsilanti-city-washtenaw-county",
                },
                "Davison Township, Genesee County": {
                    "id": 7762,
                    "name": "Davison Township, Genesee County",
                    "slug": "davison-township-genesee-county",
                },
                "Genoa Township, Livingston County": {
                    "id": 7761,
                    "name": "Genoa Township, Livingston County",
                    "slug": "genoa-township-livingston-county",
                },
                "Ferndale, Oakland County": {
                    "id": 7760,
                    "name": "Ferndale, Oakland County",
                    "slug": "ferndale-oakland-county",
                },
                "Scio Township, Washtenaw County": {
                    "id": 7759,
                    "name": "Scio Township, Washtenaw County",
                    "slug": "scio-township-washtenaw-county",
                },
                "Birmingham, Oakland County": {
                    "id": 7758,
                    "name": "Birmingham, Oakland County",
                    "slug": "birmingham-oakland-county",
                },
                "Byron Township, Kent County": {
                    "id": 7757,
                    "name": "Byron Township, Kent County",
                    "slug": "byron-township-kent-county",
                },
                "Frenchtown Township, Monroe County": {
                    "id": 7756,
                    "name": "Frenchtown Township, Monroe County",
                    "slug": "frenchtown-township-monroe-county",
                },
                "Oxford Charter Township, Oakland County": {
                    "id": 7755,
                    "name": "Oxford Charter Township, Oakland County",
                    "slug": "oxford-charter-township-oakland-county",
                },
                "Allendale Charter Township, Ottawa County": {
                    "id": 7754,
                    "name": "Allendale Charter Township, Ottawa County",
                    "slug": "allendale-charter-township-ottawa-county",
                },
                "Monroe, Monroe County": {
                    "id": 7753,
                    "name": "Monroe, Monroe County",
                    "slug": "monroe-city-monroe-county",
                },
                "Adrian, Lenawee County": {
                    "id": 7752,
                    "name": "Adrian, Lenawee County",
                    "slug": "adrian-city-lenawee-county",
                },
                "Hamburg Township, Livingston County": {
                    "id": 7751,
                    "name": "Hamburg Township, Livingston County",
                    "slug": "hamburg-township-livingston-county",
                },
                "Marquette, Marquette County": {
                    "id": 7750,
                    "name": "Marquette, Marquette County",
                    "slug": "marquette-city-marquette-county",
                },
                "Auburn Hills, Oakland County": {
                    "id": 7749,
                    "name": "Auburn Hills, Oakland County",
                    "slug": "auburn-hills-oakland-county",
                },
                "Mount Morris Township, Genesee County": {
                    "id": 7748,
                    "name": "Mount Morris Township, Genesee County",
                    "slug": "mount-morris-township-genesee-county",
                },
                "Genesee Charter Township, Genesee County": {
                    "id": 7747,
                    "name": "Genesee Charter Township, Genesee County",
                    "slug": "genesee-charter-township-genesee-county",
                },
                "Oshtemo Charter Township, Kalamazoo County": {
                    "id": 7746,
                    "name": "Oshtemo Charter Township, Kalamazoo County",
                    "slug": "oshtemo-charter-township-kalamazoo-county",
                },
                "Kalamazoo Charter Township, Kalamazoo County": {
                    "id": 7745,
                    "name": "Kalamazoo Charter Township, Kalamazoo County",
                    "slug": "kalamazoo-charter-township-kalamazoo-county",
                },
                "Hamtramck, Wayne County": {
                    "id": 7744,
                    "name": "Hamtramck, Wayne County",
                    "slug": "hamtramck-wayne-county",
                },
                "Summit Township, Jackson County": {
                    "id": 7743,
                    "name": "Summit Township, Jackson County",
                    "slug": "summit-township-jackson-county",
                },
                "Walker, Kent County": {
                    "id": 7742,
                    "name": "Walker, Kent County",
                    "slug": "walker-city-kent-county",
                },
                "Romulus, Wayne County": {
                    "id": 7741,
                    "name": "Romulus, Wayne County",
                    "slug": "romulus-wayne-county",
                },
                "Norton Shores, Muskegon County": {
                    "id": 7740,
                    "name": "Norton Shores, Muskegon County",
                    "slug": "norton-shores-muskegon-county",
                },
                "Blackman Charter Township, Jackson County": {
                    "id": 7739,
                    "name": "Blackman Charter Township, Jackson County",
                    "slug": "blackman-charter-township-jackson-county",
                },
                "Harrison Charter Township, Macomb County": {
                    "id": 7738,
                    "name": "Harrison Charter Township, Macomb County",
                    "slug": "harrison-charter-township-macomb-county",
                },
                "Washington Township, Macomb County": {
                    "id": 7737,
                    "name": "Washington Township, Macomb County",
                    "slug": "washington-township-macomb-county",
                },
                "Gaines Charter Township, Kent County": {
                    "id": 7736,
                    "name": "Gaines Charter Township, Kent County",
                    "slug": "gaines-charter-township-kent-county",
                },
                "Inkster, Wayne County": {
                    "id": 7735,
                    "name": "Inkster, Wayne County",
                    "slug": "inkster-wayne-county",
                },
                "Delhi Charter Township, Ingham County": {
                    "id": 7734,
                    "name": "Delhi Charter Township, Ingham County",
                    "slug": "delhi-charter-township-ingham-county",
                },
                "Wyandotte, Wayne County": {
                    "id": 7733,
                    "name": "Wyandotte, Wayne County",
                    "slug": "wyandotte-wayne-county",
                },
                "Mount Pleasant, Isabella County": {
                    "id": 7732,
                    "name": "Mount Pleasant, Isabella County",
                    "slug": "mount-pleasant-isabella-county",
                },
                "Plymouth Charter Township, Wayne County": {
                    "id": 7731,
                    "name": "Plymouth Charter Township, Wayne County",
                    "slug": "plymouth-charter-township-wayne-county",
                },
                "Garden City, Wayne County": {
                    "id": 7730,
                    "name": "Garden City, Wayne County",
                    "slug": "garden-city-wayne-county",
                },
                "Allen Park, Wayne County": {
                    "id": 7729,
                    "name": "Allen Park, Wayne County",
                    "slug": "allen-park-wayne-county",
                },
                "Northville Township, Wayne County": {
                    "id": 7728,
                    "name": "Northville Township, Wayne County",
                    "slug": "northville-township-wayne-county",
                },
                "Van Buren Charter Township, Wayne County": {
                    "id": 7727,
                    "name": "Van Buren Charter Township, Wayne County",
                    "slug": "van-buren-charter-township-wayne-county",
                },
                "Oak Park, Oakland County": {
                    "id": 7726,
                    "name": "Oak Park, Oakland County",
                    "slug": "oak-park-oakland-county",
                },
                "Madison Heights, Oakland County": {
                    "id": 7725,
                    "name": "Madison Heights, Oakland County",
                    "slug": "madison-heights-oakland-county",
                },
                "Burton, Genesee County": {
                    "id": 7724,
                    "name": "Burton, Genesee County",
                    "slug": "burton-genesee-county",
                },
                "White Lake Charter Township, Oakland County": {
                    "id": 7723,
                    "name": "White Lake Charter Township, Oakland County",
                    "slug": "white-lake-charter-township-oakland-county",
                },
                "Southgate, Wayne County": {
                    "id": 7722,
                    "name": "Southgate, Wayne County",
                    "slug": "southgate-wayne-county",
                },
                "Port Huron, St. Clair County": {
                    "id": 7721,
                    "name": "Port Huron, St. Clair County",
                    "slug": "port-huron-city-st-clair-county",
                },
                "Brownstown Charter Township, Wayne County": {
                    "id": 7720,
                    "name": "Brownstown Charter Township, Wayne County",
                    "slug": "brownstown-charter-township-wayne-county",
                },
                "Plainfield Charter Township, Kent County": {
                    "id": 7719,
                    "name": "Plainfield Charter Township, Kent County",
                    "slug": "plainfield-charter-township-kent-county",
                },
                "Bedford Township, Monroe County": {
                    "id": 7718,
                    "name": "Bedford Township, Monroe County",
                    "slug": "bedford-township-monroe-county",
                },
                "Flint Charter Township, Genesee County": {
                    "id": 7717,
                    "name": "Flint Charter Township, Genesee County",
                    "slug": "flint-charter-township-genesee-county",
                },
                "Delta Charter Township, Eaton County": {
                    "id": 7716,
                    "name": "Delta Charter Township, Eaton County",
                    "slug": "delta-charter-township-eaton-county",
                },
                "Eastpointe, Macomb County": {
                    "id": 7715,
                    "name": "Eastpointe, Macomb County",
                    "slug": "eastpointe-macomb-county",
                },
                "Holland": {
                    "id": 7714,
                    "name": "Holland",
                    "slug": "holland-city",
                },
                "Jackson, Jackson County": {
                    "id": 7713,
                    "name": "Jackson, Jackson County",
                    "slug": "jackson-jackson-county",
                },
                "Pittsfield Charter Township, Washtenaw County": {
                    "id": 7712,
                    "name": "Pittsfield Charter Township, Washtenaw County",
                    "slug": "pittsfield-charter-township-washtenaw-county",
                },
                "Independence Charter Township, Oakland County": {
                    "id": 7711,
                    "name": "Independence Charter Township, Oakland County",
                    "slug": "independence-charter-township-oakland-county",
                },
                "Bay City, Bay County": {
                    "id": 7710,
                    "name": "Bay City, Bay County",
                    "slug": "bay-city-bay-county",
                },
                "Orion Charter Township, Oakland County": {
                    "id": 7709,
                    "name": "Orion Charter Township, Oakland County",
                    "slug": "orion-charter-township-oakland-county",
                },
                "Holland Charter Township, Ottawa County": {
                    "id": 7708,
                    "name": "Holland Charter Township, Ottawa County",
                    "slug": "holland-charter-township-ottawa-county",
                },
                "Grand Blanc Charter Township, Genesee County": {
                    "id": 7707,
                    "name": "Grand Blanc Charter Township, Genesee County",
                    "slug": "grand-blanc-charter-township-genesee-county",
                },
                "Lincoln Park, Wayne County": {
                    "id": 7706,
                    "name": "Lincoln Park, Wayne County",
                    "slug": "lincoln-park-city-wayne-county",
                },
                "Muskegon, Muskegon County": {
                    "id": 7705,
                    "name": "Muskegon, Muskegon County",
                    "slug": "muskegon-city-muskegon-county",
                },
                "Meridian Charter Township, Ingham County": {
                    "id": 7704,
                    "name": "Meridian Charter Township, Ingham County",
                    "slug": "meridian-charter-township-ingham-county",
                },
                "Commerce Charter Township, Oakland County": {
                    "id": 7703,
                    "name": "Commerce Charter Township, Oakland County",
                    "slug": "commerce-charter-township-oakland-county",
                },
                "Saginaw Charter Township, Saginaw County": {
                    "id": 7702,
                    "name": "Saginaw Charter Township, Saginaw County",
                    "slug": "saginaw-charter-township-saginaw-county",
                },
                "Bloomfield Charter Township, Oakland County": {
                    "id": 7701,
                    "name": "Bloomfield Charter Township, Oakland County",
                    "slug": "bloomfield-charter-township-oakland-county",
                },
                "Midland": {
                    "id": 7700,
                    "name": "Midland",
                    "slug": "midland-city",
                },
                "Chesterfield Township, Macomb County": {
                    "id": 7699,
                    "name": "Chesterfield Township, Macomb County",
                    "slug": "chesterfield-township-macomb-county",
                },
                "Portage, Kalamazoo County": {
                    "id": 7698,
                    "name": "Portage, Kalamazoo County",
                    "slug": "portage-city-kalamazoo-county",
                },
                "Georgetown Charter Township, Ottawa County": {
                    "id": 7697,
                    "name": "Georgetown Charter Township, Ottawa County",
                    "slug": "georgetown-charter-township-ottawa-county",
                },
                "Roseville, Macomb County": {
                    "id": 7696,
                    "name": "Roseville, Macomb County",
                    "slug": "roseville-city-macomb-county",
                },
                "Redford Charter Township, Wayne County": {
                    "id": 7695,
                    "name": "Redford Charter Township, Wayne County",
                    "slug": "redford-charter-township-wayne-county",
                },
                "East Lansing": {
                    "id": 7694,
                    "name": "East Lansing",
                    "slug": "east-lansing",
                },
                "Kentwood, Kent County": {
                    "id": 7693,
                    "name": "Kentwood, Kent County",
                    "slug": "kentwood-kent-county",
                },
                "Saginaw, Saginaw County": {
                    "id": 7692,
                    "name": "Saginaw, Saginaw County",
                    "slug": "saginaw-city-saginaw-county",
                },
                "Battle Creek, Calhoun County": {
                    "id": 7691,
                    "name": "Battle Creek, Calhoun County",
                    "slug": "battle-creek-calhoun-county",
                },
                "Ypsilanti Charter Township, Washtenaw County": {
                    "id": 7690,
                    "name": "Ypsilanti Charter Township, Washtenaw County",
                    "slug": "ypsilanti-charter-township-washtenaw-county",
                },
                "Novi, Oakland County": {
                    "id": 7689,
                    "name": "Novi, Oakland County",
                    "slug": "novi-city-oakland-county",
                },
                "Royal Oak, Oakland County": {
                    "id": 7688,
                    "name": "Royal Oak, Oakland County",
                    "slug": "royal-oak-city-oakland-county",
                },
                "Dearborn Heights, Wayne County": {
                    "id": 7687,
                    "name": "Dearborn Heights, Wayne County",
                    "slug": "dearborn-heights-wayne-county",
                },
                "Pontiac, Oakland County": {
                    "id": 7686,
                    "name": "Pontiac, Oakland County",
                    "slug": "pontiac-oakland-county",
                },
                "St. Clair Shores, Macomb County": {
                    "id": 7685,
                    "name": "St. Clair Shores, Macomb County",
                    "slug": "st-clair-shores-macomb-county",
                },
                "Taylor, Wayne County": {
                    "id": 7684,
                    "name": "Taylor, Wayne County",
                    "slug": "taylor-wayne-county",
                },
                "West Bloomfield Charter Township, Oakland County": {
                    "id": 7683,
                    "name": "West Bloomfield Charter Township, Oakland County",
                    "slug": "west-bloomfield-charter-township-oakland-county",
                },
                "Rochester Hills, Oakland County": {
                    "id": 7682,
                    "name": "Rochester Hills, Oakland County",
                    "slug": "rochester-hills-oakland-county",
                },
                "Waterford Charter Township, Oakland County": {
                    "id": 7681,
                    "name": "Waterford Charter Township, Oakland County",
                    "slug": "waterford-charter-township-oakland-county",
                },
                "Southfield, Oakland County": {
                    "id": 7680,
                    "name": "Southfield, Oakland County",
                    "slug": "southfield-city-oakland-county",
                },
                "Wyoming, Kent County": {
                    "id": 7679,
                    "name": "Wyoming, Kent County",
                    "slug": "wyoming-kent-county",
                },
                "Shelby Charter Township, Macomb County": {
                    "id": 7678,
                    "name": "Shelby Charter Township, Macomb County",
                    "slug": "shelby-charter-township-macomb-county",
                },
                "Kalamazoo, Kalamazoo County": {
                    "id": 7677,
                    "name": "Kalamazoo, Kalamazoo County",
                    "slug": "kalamazoo-city-kalamazoo-county",
                },
                "Macomb Township, Macomb County": {
                    "id": 7676,
                    "name": "Macomb Township, Macomb County",
                    "slug": "macomb-township-macomb-county",
                },
                "Farmington Hills, Oakland County": {
                    "id": 7675,
                    "name": "Farmington Hills, Oakland County",
                    "slug": "farmington-hills-oakland-county",
                },
                "Troy, Oakland County": {
                    "id": 7674,
                    "name": "Troy, Oakland County",
                    "slug": "troy-city-oakland-county",
                },
                "Westland, Wayne County": {
                    "id": 7673,
                    "name": "Westland, Wayne County",
                    "slug": "westland-wayne-county",
                },
                "Canton Charter Township, Wayne County": {
                    "id": 7672,
                    "name": "Canton Charter Township, Wayne County",
                    "slug": "canton-charter-township-wayne-county",
                },
                "Clinton Charter Township, Macomb County": {
                    "id": 7671,
                    "name": "Clinton Charter Township, Macomb County",
                    "slug": "clinton-charter-township-macomb-county",
                },
                "Livonia, Wayne County": {
                    "id": 7670,
                    "name": "Livonia, Wayne County",
                    "slug": "livonia-wayne-county",
                },
                "Dearborn, Wayne County": {
                    "id": 7669,
                    "name": "Dearborn, Wayne County",
                    "slug": "dearborn-wayne-county",
                },
                "Flint, Genesee County": {
                    "id": 7668,
                    "name": "Flint, Genesee County",
                    "slug": "flint-city-genesee-county",
                },
                "Ann Arbor, Washtenaw County": {
                    "id": 7667,
                    "name": "Ann Arbor, Washtenaw County",
                    "slug": "ann-arbor-city-washtenaw-county",
                },
                "Lansing": {
                    "id": 7666,
                    "name": "Lansing",
                    "slug": "lansing-city",
                },
                "Sterling Heights, Macomb County": {
                    "id": 7665,
                    "name": "Sterling Heights, Macomb County",
                    "slug": "sterling-heights-macomb-county",
                },
                "Warren, Macomb County": {
                    "id": 7664,
                    "name": "Warren, Macomb County",
                    "slug": "warren-city-macomb-county",
                },
                "Grand Rapids, Kent County": {
                    "id": 7663,
                    "name": "Grand Rapids, Kent County",
                    "slug": "grand-rapids-city-kent-county",
                },
                "Detroit, Wayne County": {
                    "id": 7662,
                    "name": "Detroit, Wayne County",
                    "slug": "detroit-wayne-county",
                },
            },
            "counties": {},
        },
    },
    "MN": {
        "id": 53,
        "name": "Minnesota",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Stearns": {
                    "id": 8436,
                    "name": "Stearns",
                    "slug": "stearns",
                },
                "Saint Louis": {
                    "id": 8435,
                    "name": "Saint Louis",
                    "slug": "saint-louis",
                },
                "Olmsted": {
                    "id": 8434,
                    "name": "Olmsted",
                    "slug": "olmsted",
                },
                "Morrison": {
                    "id": 8433,
                    "name": "Morrison",
                    "slug": "morrison",
                },
                "Clay": {
                    "id": 8432,
                    "name": "Clay",
                    "slug": "clay-10",
                },
                "Hennepin": {
                    "id": 8431,
                    "name": "Hennepin",
                    "slug": "hennepin",
                },
                "Kandiyohi": {
                    "id": 8430,
                    "name": "Kandiyohi",
                    "slug": "kandiyohi",
                },
                "Yellow Medicine": {
                    "id": 8429,
                    "name": "Yellow Medicine",
                    "slug": "yellow-medicine",
                },
                "Nicollet": {
                    "id": 8428,
                    "name": "Nicollet",
                    "slug": "nicollet",
                },
                "Waseca": {
                    "id": 8427,
                    "name": "Waseca",
                    "slug": "waseca",
                },
                "Itasca": {
                    "id": 8426,
                    "name": "Itasca",
                    "slug": "itasca",
                },
                "Anoka": {
                    "id": 8425,
                    "name": "Anoka",
                    "slug": "anoka",
                },
                "Dakota": {
                    "id": 8424,
                    "name": "Dakota",
                    "slug": "dakota",
                },
                "Watonwan": {
                    "id": 8423,
                    "name": "Watonwan",
                    "slug": "watonwan",
                },
                "Otter Tail": {
                    "id": 8422,
                    "name": "Otter Tail",
                    "slug": "otter-tail",
                },
                "Le Sueur": {
                    "id": 8421,
                    "name": "Le Sueur",
                    "slug": "le-sueur",
                },
                "Chisago": {
                    "id": 8420,
                    "name": "Chisago",
                    "slug": "chisago",
                },
                "Stevens": {
                    "id": 8419,
                    "name": "Stevens",
                    "slug": "stevens-2",
                },
                "Nobles": {
                    "id": 8418,
                    "name": "Nobles",
                    "slug": "nobles",
                },
                "Hubbard": {
                    "id": 8417,
                    "name": "Hubbard",
                    "slug": "hubbard",
                },
                "Benton": {
                    "id": 8416,
                    "name": "Benton",
                    "slug": "benton-5",
                },
                "Sibley": {
                    "id": 8415,
                    "name": "Sibley",
                    "slug": "sibley",
                },
                "Pine": {
                    "id": 8414,
                    "name": "Pine",
                    "slug": "pine",
                },
                "Jackson": {
                    "id": 8413,
                    "name": "Jackson",
                    "slug": "jackson-13",
                },
                "Dodge": {
                    "id": 8412,
                    "name": "Dodge",
                    "slug": "dodge-2",
                },
                "Freeborn": {
                    "id": 8411,
                    "name": "Freeborn",
                    "slug": "freeborn",
                },
                "Goodhue": {
                    "id": 8410,
                    "name": "Goodhue",
                    "slug": "goodhue",
                },
                "Fillmore": {
                    "id": 8409,
                    "name": "Fillmore",
                    "slug": "fillmore",
                },
                "Douglas": {
                    "id": 8408,
                    "name": "Douglas",
                    "slug": "douglas-6",
                },
                "Crow Wing": {
                    "id": 8407,
                    "name": "Crow Wing",
                    "slug": "crow-wing",
                },
                "Carlton": {
                    "id": 8406,
                    "name": "Carlton",
                    "slug": "carlton",
                },
                "Winona": {
                    "id": 8405,
                    "name": "Winona",
                    "slug": "winona",
                },
                "Wadena": {
                    "id": 8404,
                    "name": "Wadena",
                    "slug": "wadena",
                },
                "Traverse": {
                    "id": 8403,
                    "name": "Traverse",
                    "slug": "traverse",
                },
                "Swift": {
                    "id": 8402,
                    "name": "Swift",
                    "slug": "swift",
                },
                "Steele": {
                    "id": 8401,
                    "name": "Steele",
                    "slug": "steele",
                },
                "Sherburne": {
                    "id": 8400,
                    "name": "Sherburne",
                    "slug": "sherburne",
                },
                "Roseau": {
                    "id": 8399,
                    "name": "Roseau",
                    "slug": "roseau",
                },
                "Rice": {
                    "id": 8398,
                    "name": "Rice",
                    "slug": "rice-2",
                },
                "Ramsey": {
                    "id": 8397,
                    "name": "Ramsey",
                    "slug": "ramsey",
                },
                "Pope": {
                    "id": 8396,
                    "name": "Pope",
                    "slug": "pope-3",
                },
                "Pipestone": {
                    "id": 8395,
                    "name": "Pipestone",
                    "slug": "pipestone",
                },
                "Mower": {
                    "id": 8394,
                    "name": "Mower",
                    "slug": "mower",
                },
                "Meeker": {
                    "id": 8393,
                    "name": "Meeker",
                    "slug": "meeker",
                },
                "McLeod": {
                    "id": 8392,
                    "name": "McLeod",
                    "slug": "mcleod",
                },
                "Lyon": {
                    "id": 8391,
                    "name": "Lyon",
                    "slug": "lyon-4",
                },
                "Kanabec": {
                    "id": 8390,
                    "name": "Kanabec",
                    "slug": "kanabec",
                },
                "Isanti": {
                    "id": 8389,
                    "name": "Isanti",
                    "slug": "isanti",
                },
                "Houston": {
                    "id": 8388,
                    "name": "Houston",
                    "slug": "houston-3",
                },
                "Beltrami": {
                    "id": 8387,
                    "name": "Beltrami",
                    "slug": "beltrami",
                },
                "Aitkin": {
                    "id": 8386,
                    "name": "Aitkin",
                    "slug": "aitkin",
                },
                "Wabasha": {
                    "id": 8385,
                    "name": "Wabasha",
                    "slug": "wabasha",
                },
                "Todd": {
                    "id": 8384,
                    "name": "Todd",
                    "slug": "todd-2",
                },
                "Rock": {
                    "id": 8383,
                    "name": "Rock",
                    "slug": "rock",
                },
                "Red Lake": {
                    "id": 8382,
                    "name": "Red Lake",
                    "slug": "red-lake",
                },
                "Mille Lacs": {
                    "id": 8381,
                    "name": "Mille Lacs",
                    "slug": "mille-lacs",
                },
                "Martin": {
                    "id": 8380,
                    "name": "Martin",
                    "slug": "martin-4",
                },
                "Lincoln": {
                    "id": 8379,
                    "name": "Lincoln",
                    "slug": "lincoln-10",
                },
                "Koochiching": {
                    "id": 8378,
                    "name": "Koochiching",
                    "slug": "koochiching",
                },
                "Faribault": {
                    "id": 8377,
                    "name": "Faribault",
                    "slug": "faribault",
                },
                "Cottonwood": {
                    "id": 8376,
                    "name": "Cottonwood",
                    "slug": "cottonwood",
                },
                "Clearwater": {
                    "id": 8375,
                    "name": "Clearwater",
                    "slug": "clearwater-2",
                },
                "Carver": {
                    "id": 8374,
                    "name": "Carver",
                    "slug": "carver-2",
                },
                "Becker": {
                    "id": 8373,
                    "name": "Becker",
                    "slug": "becker",
                },
                "Norman": {
                    "id": 8372,
                    "name": "Norman",
                    "slug": "norman",
                },
                "Kittson": {
                    "id": 8371,
                    "name": "Kittson",
                    "slug": "kittson",
                },
                "Wilkin": {
                    "id": 8370,
                    "name": "Wilkin",
                    "slug": "wilkin",
                },
                "Polk": {
                    "id": 8369,
                    "name": "Polk",
                    "slug": "polk-5",
                },
                "Grant": {
                    "id": 8368,
                    "name": "Grant",
                    "slug": "grant-6",
                },
                "Mahnomen": {
                    "id": 8367,
                    "name": "Mahnomen",
                    "slug": "mahnomen",
                },
                "Brown": {
                    "id": 8366,
                    "name": "Brown",
                    "slug": "brown-4",
                },
                "Cass": {
                    "id": 8365,
                    "name": "Cass",
                    "slug": "cass-4",
                },
                "Wright": {
                    "id": 8364,
                    "name": "Wright",
                    "slug": "wright-2",
                },
                "Redwood": {
                    "id": 8363,
                    "name": "Redwood",
                    "slug": "redwood",
                },
                "Pennington": {
                    "id": 8362,
                    "name": "Pennington",
                    "slug": "pennington",
                },
                "Marshall": {
                    "id": 8361,
                    "name": "Marshall",
                    "slug": "marshall-7",
                },
                "Lake": {
                    "id": 8360,
                    "name": "Lake",
                    "slug": "lake-6",
                },
                "Lac qui Parle": {
                    "id": 8359,
                    "name": "Lac qui Parle",
                    "slug": "lac-qui-parle",
                },
                "Cook": {
                    "id": 8358,
                    "name": "Cook",
                    "slug": "cook-3",
                },
                "Blue Earth": {
                    "id": 8357,
                    "name": "Blue Earth",
                    "slug": "blue-earth",
                },
                "Big Stone": {
                    "id": 8356,
                    "name": "Big Stone",
                    "slug": "big-stone",
                },
                "Washington": {
                    "id": 8355,
                    "name": "Washington",
                    "slug": "washington-18",
                },
                "Scott": {
                    "id": 8354,
                    "name": "Scott",
                    "slug": "scott-7",
                },
                "Renville": {
                    "id": 8353,
                    "name": "Renville",
                    "slug": "renville",
                },
                "Murray": {
                    "id": 8352,
                    "name": "Murray",
                    "slug": "murray-2",
                },
                "Lake of the Woods": {
                    "id": 8351,
                    "name": "Lake of the Woods",
                    "slug": "lake-of-the-woods",
                },
                "Chippewa": {
                    "id": 8350,
                    "name": "Chippewa",
                    "slug": "chippewa",
                },
            },
        },
    },
    "MS": {
        "id": 54,
        "name": "Mississippi",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Tunica": {
                    "id": 8518,
                    "name": "Tunica",
                    "slug": "tunica",
                },
                "Bolivar": {
                    "id": 8517,
                    "name": "Bolivar",
                    "slug": "bolivar",
                },
                "Issaquena": {
                    "id": 8516,
                    "name": "Issaquena",
                    "slug": "issaquena",
                },
                "Attala": {
                    "id": 8515,
                    "name": "Attala",
                    "slug": "attala",
                },
                "Marshall": {
                    "id": 8514,
                    "name": "Marshall",
                    "slug": "marshall-8",
                },
                "Stone": {
                    "id": 8513,
                    "name": "Stone",
                    "slug": "stone-2",
                },
                "Benton": {
                    "id": 8512,
                    "name": "Benton",
                    "slug": "benton-6",
                },
                "Coahoma": {
                    "id": 8511,
                    "name": "Coahoma",
                    "slug": "coahoma",
                },
                "Quitman": {
                    "id": 8510,
                    "name": "Quitman",
                    "slug": "quitman-2",
                },
                "Walthall": {
                    "id": 8509,
                    "name": "Walthall",
                    "slug": "walthall",
                },
                "Perry": {
                    "id": 8508,
                    "name": "Perry",
                    "slug": "perry-7",
                },
                "Leake": {
                    "id": 8507,
                    "name": "Leake",
                    "slug": "leake",
                },
                "Tippah": {
                    "id": 8506,
                    "name": "Tippah",
                    "slug": "tippah",
                },
                "Lee": {
                    "id": 8505,
                    "name": "Lee",
                    "slug": "lee-10",
                },
                "Itawamba": {
                    "id": 8504,
                    "name": "Itawamba",
                    "slug": "itawamba",
                },
                "Carroll": {
                    "id": 8503,
                    "name": "Carroll",
                    "slug": "carroll-8",
                },
                "Neshoba": {
                    "id": 8502,
                    "name": "Neshoba",
                    "slug": "neshoba",
                },
                "Chickasaw": {
                    "id": 8501,
                    "name": "Chickasaw",
                    "slug": "chickasaw-2",
                },
                "Scott": {
                    "id": 8500,
                    "name": "Scott",
                    "slug": "scott-8",
                },
                "Alcorn": {
                    "id": 8499,
                    "name": "Alcorn",
                    "slug": "alcorn",
                },
                "Hancock": {
                    "id": 8498,
                    "name": "Hancock",
                    "slug": "hancock-8",
                },
                "Webster": {
                    "id": 8497,
                    "name": "Webster",
                    "slug": "webster-6",
                },
                "Union": {
                    "id": 8496,
                    "name": "Union",
                    "slug": "union-11",
                },
                "Tallahatchie": {
                    "id": 8495,
                    "name": "Tallahatchie",
                    "slug": "tallahatchie",
                },
                "Simpson": {
                    "id": 8494,
                    "name": "Simpson",
                    "slug": "simpson-2",
                },
                "Sharkey": {
                    "id": 8493,
                    "name": "Sharkey",
                    "slug": "sharkey",
                },
                "Prentiss": {
                    "id": 8492,
                    "name": "Prentiss",
                    "slug": "prentiss",
                },
                "Pike": {
                    "id": 8491,
                    "name": "Pike",
                    "slug": "pike-7",
                },
                "Panola": {
                    "id": 8490,
                    "name": "Panola",
                    "slug": "panola",
                },
                "Newton": {
                    "id": 8489,
                    "name": "Newton",
                    "slug": "newton-5",
                },
                "Montgomery": {
                    "id": 8488,
                    "name": "Montgomery",
                    "slug": "montgomery-11",
                },
                "Lawrence": {
                    "id": 8487,
                    "name": "Lawrence",
                    "slug": "lawrence-7",
                },
                "Lamar": {
                    "id": 8486,
                    "name": "Lamar",
                    "slug": "lamar-3",
                },
                "Kemper": {
                    "id": 8485,
                    "name": "Kemper",
                    "slug": "kemper",
                },
                "Jefferson Davis": {
                    "id": 8484,
                    "name": "Jefferson Davis",
                    "slug": "jefferson-davis-2",
                },
                "Jefferson": {
                    "id": 8483,
                    "name": "Jefferson",
                    "slug": "jefferson-14",
                },
                "Jackson": {
                    "id": 8482,
                    "name": "Jackson",
                    "slug": "jackson-14",
                },
                "George": {
                    "id": 8481,
                    "name": "George",
                    "slug": "george",
                },
                "Forrest": {
                    "id": 8480,
                    "name": "Forrest",
                    "slug": "forrest",
                },
                "Covington": {
                    "id": 8479,
                    "name": "Covington",
                    "slug": "covington-2",
                },
                "Clay": {
                    "id": 8478,
                    "name": "Clay",
                    "slug": "clay-11",
                },
                "Choctaw": {
                    "id": 8477,
                    "name": "Choctaw",
                    "slug": "choctaw-2",
                },
                "Amite": {
                    "id": 8476,
                    "name": "Amite",
                    "slug": "amite",
                },
                "Yalobusha": {
                    "id": 8475,
                    "name": "Yalobusha",
                    "slug": "yalobusha",
                },
                "Winston": {
                    "id": 8474,
                    "name": "Winston",
                    "slug": "winston-2",
                },
                "Wayne": {
                    "id": 8473,
                    "name": "Wayne",
                    "slug": "wayne-7",
                },
                "Sunflower": {
                    "id": 8472,
                    "name": "Sunflower",
                    "slug": "sunflower",
                },
                "Smith": {
                    "id": 8471,
                    "name": "Smith",
                    "slug": "smith-2",
                },
                "Pontotoc": {
                    "id": 8470,
                    "name": "Pontotoc",
                    "slug": "pontotoc",
                },
                "Monroe": {
                    "id": 8469,
                    "name": "Monroe",
                    "slug": "monroe-12",
                },
                "Marion": {
                    "id": 8468,
                    "name": "Marion",
                    "slug": "marion-11",
                },
                "Lincoln": {
                    "id": 8467,
                    "name": "Lincoln",
                    "slug": "lincoln-11",
                },
                "Lauderdale": {
                    "id": 8466,
                    "name": "Lauderdale",
                    "slug": "lauderdale-2",
                },
                "Lafayette": {
                    "id": 8465,
                    "name": "Lafayette",
                    "slug": "lafayette-4",
                },
                "Jones": {
                    "id": 8464,
                    "name": "Jones",
                    "slug": "jones-3",
                },
                "Harrison": {
                    "id": 8463,
                    "name": "Harrison",
                    "slug": "harrison-5",
                },
                "Greene": {
                    "id": 8462,
                    "name": "Greene",
                    "slug": "greene-8",
                },
                "Franklin": {
                    "id": 8461,
                    "name": "Franklin",
                    "slug": "franklin-15",
                },
                "Clarke": {
                    "id": 8460,
                    "name": "Clarke",
                    "slug": "clarke-4",
                },
                "Calhoun": {
                    "id": 8459,
                    "name": "Calhoun",
                    "slug": "calhoun-7",
                },
                "Hinds": {
                    "id": 8458,
                    "name": "Hinds",
                    "slug": "hinds",
                },
                "Holmes": {
                    "id": 8457,
                    "name": "Holmes",
                    "slug": "holmes-2",
                },
                "Tate": {
                    "id": 8456,
                    "name": "Tate",
                    "slug": "tate",
                },
                "Humphreys": {
                    "id": 8455,
                    "name": "Humphreys",
                    "slug": "humphreys",
                },
                "Claiborne": {
                    "id": 8454,
                    "name": "Claiborne",
                    "slug": "claiborne-2",
                },
                "Jasper": {
                    "id": 8453,
                    "name": "Jasper",
                    "slug": "jasper-5",
                },
                "Pearl River": {
                    "id": 8452,
                    "name": "Pearl River",
                    "slug": "pearl-river",
                },
                "Madison": {
                    "id": 8451,
                    "name": "Madison",
                    "slug": "madison-13",
                },
                "Washington": {
                    "id": 8450,
                    "name": "Washington",
                    "slug": "washington-19",
                },
                "Warren": {
                    "id": 8449,
                    "name": "Warren",
                    "slug": "warren-9",
                },
                "Tishomingo": {
                    "id": 8448,
                    "name": "Tishomingo",
                    "slug": "tishomingo",
                },
                "Rankin": {
                    "id": 8447,
                    "name": "Rankin",
                    "slug": "rankin",
                },
                "Noxubee": {
                    "id": 8446,
                    "name": "Noxubee",
                    "slug": "noxubee",
                },
                "Lowndes": {
                    "id": 8445,
                    "name": "Lowndes",
                    "slug": "lowndes-3",
                },
                "Leflore": {
                    "id": 8444,
                    "name": "Leflore",
                    "slug": "leflore",
                },
                "Grenada": {
                    "id": 8443,
                    "name": "Grenada",
                    "slug": "grenada",
                },
                "Copiah": {
                    "id": 8442,
                    "name": "Copiah",
                    "slug": "copiah",
                },
                "Adams": {
                    "id": 8441,
                    "name": "Adams",
                    "slug": "adams-7",
                },
                "Yazoo": {
                    "id": 8440,
                    "name": "Yazoo",
                    "slug": "yazoo",
                },
                "Wilkinson": {
                    "id": 8439,
                    "name": "Wilkinson",
                    "slug": "wilkinson-2",
                },
                "Oktibbeha": {
                    "id": 8438,
                    "name": "Oktibbeha",
                    "slug": "oktibbeha",
                },
                "DeSoto": {
                    "id": 8437,
                    "name": "DeSoto",
                    "slug": "desoto-3",
                },
            },
        },
    },
    "MO": {
        "id": 55,
        "name": "Missouri",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {
                "Kansas City": {
                    "id": 8634,
                    "name": "Kansas City",
                    "slug": "kansas-city",
                },
                "St. Louis": {
                    "id": 8633,
                    "name": "St. Louis",
                    "slug": "st-louis-2",
                },
            },
            "counties": {
                "Worth": {
                    "id": 8632,
                    "name": "Worth",
                    "slug": "worth-3",
                },
                "Boone": {
                    "id": 8631,
                    "name": "Boone",
                    "slug": "boone-6",
                },
                "Schuyler": {
                    "id": 8630,
                    "name": "Schuyler",
                    "slug": "schuyler-2",
                },
                "Jefferson": {
                    "id": 8629,
                    "name": "Jefferson",
                    "slug": "jefferson-15",
                },
                "New Madrid": {
                    "id": 8628,
                    "name": "New Madrid",
                    "slug": "new-madrid",
                },
                "Dade": {
                    "id": 8627,
                    "name": "Dade",
                    "slug": "dade-2",
                },
                "Clinton": {
                    "id": 8626,
                    "name": "Clinton",
                    "slug": "clinton-8",
                },
                "Franklin": {
                    "id": 8625,
                    "name": "Franklin",
                    "slug": "franklin-16",
                },
                "Wright": {
                    "id": 8624,
                    "name": "Wright",
                    "slug": "wright-3",
                },
                "St. Francois": {
                    "id": 8623,
                    "name": "St. Francois",
                    "slug": "st-francois",
                },
                "Madison": {
                    "id": 8622,
                    "name": "Madison",
                    "slug": "madison-14",
                },
                "Howard": {
                    "id": 8621,
                    "name": "Howard",
                    "slug": "howard-5",
                },
                "Vernon": {
                    "id": 8620,
                    "name": "Vernon",
                    "slug": "vernon-3",
                },
                "Pike": {
                    "id": 8619,
                    "name": "Pike",
                    "slug": "pike-8",
                },
                "Cass": {
                    "id": 8618,
                    "name": "Cass",
                    "slug": "cass-5",
                },
                "Ripley": {
                    "id": 8617,
                    "name": "Ripley",
                    "slug": "ripley-2",
                },
                "Montgomery": {
                    "id": 8616,
                    "name": "Montgomery",
                    "slug": "montgomery-12",
                },
                "Howell": {
                    "id": 8615,
                    "name": "Howell",
                    "slug": "howell",
                },
                "Cooper": {
                    "id": 8614,
                    "name": "Cooper",
                    "slug": "cooper",
                },
                "Caldwell": {
                    "id": 8613,
                    "name": "Caldwell",
                    "slug": "caldwell-3",
                },
                "Audrain": {
                    "id": 8612,
                    "name": "Audrain",
                    "slug": "audrain",
                },
                "Stone": {
                    "id": 8611,
                    "name": "Stone",
                    "slug": "stone-3",
                },
                "Reynolds": {
                    "id": 8610,
                    "name": "Reynolds",
                    "slug": "reynolds",
                },
                "Phelps": {
                    "id": 8609,
                    "name": "Phelps",
                    "slug": "phelps",
                },
                "Marion": {
                    "id": 8608,
                    "name": "Marion",
                    "slug": "marion-12",
                },
                "Knox": {
                    "id": 8607,
                    "name": "Knox",
                    "slug": "knox-5",
                },
                "Gasconade": {
                    "id": 8606,
                    "name": "Gasconade",
                    "slug": "gasconade",
                },
                "Clark": {
                    "id": 8605,
                    "name": "Clark",
                    "slug": "clark-7",
                },
                "Taney": {
                    "id": 8604,
                    "name": "Taney",
                    "slug": "taney",
                },
                "Ste. Genevieve": {
                    "id": 8603,
                    "name": "Ste. Genevieve",
                    "slug": "ste-genevieve",
                },
                "Ozark": {
                    "id": 8602,
                    "name": "Ozark",
                    "slug": "ozark",
                },
                "Mercer": {
                    "id": 8601,
                    "name": "Mercer",
                    "slug": "mercer-4",
                },
                "Johnson": {
                    "id": 8600,
                    "name": "Johnson",
                    "slug": "johnson-8",
                },
                "Christian": {
                    "id": 8599,
                    "name": "Christian",
                    "slug": "christian-3",
                },
                "Benton": {
                    "id": 8598,
                    "name": "Benton",
                    "slug": "benton-7",
                },
                "Monroe": {
                    "id": 8597,
                    "name": "Monroe",
                    "slug": "monroe-13",
                },
                "Crawford": {
                    "id": 8596,
                    "name": "Crawford",
                    "slug": "crawford-7",
                },
                "Linn": {
                    "id": 8595,
                    "name": "Linn",
                    "slug": "linn-3",
                },
                "Pemiscot": {
                    "id": 8594,
                    "name": "Pemiscot",
                    "slug": "pemiscot",
                },
                "Jasper": {
                    "id": 8593,
                    "name": "Jasper",
                    "slug": "jasper-6",
                },
                "Iron": {
                    "id": 8592,
                    "name": "Iron",
                    "slug": "iron",
                },
                "Henry": {
                    "id": 8591,
                    "name": "Henry",
                    "slug": "henry-7",
                },
                "Grundy": {
                    "id": 8590,
                    "name": "Grundy",
                    "slug": "grundy-3",
                },
                "Gentry": {
                    "id": 8589,
                    "name": "Gentry",
                    "slug": "gentry",
                },
                "Dent": {
                    "id": 8588,
                    "name": "Dent",
                    "slug": "dent",
                },
                "DeKalb": {
                    "id": 8587,
                    "name": "DeKalb",
                    "slug": "dekalb-5",
                },
                "Dallas": {
                    "id": 8586,
                    "name": "Dallas",
                    "slug": "dallas-4",
                },
                "Cole": {
                    "id": 8585,
                    "name": "Cole",
                    "slug": "cole",
                },
                "Cedar": {
                    "id": 8584,
                    "name": "Cedar",
                    "slug": "cedar-2",
                },
                "Webster": {
                    "id": 8583,
                    "name": "Webster",
                    "slug": "webster-7",
                },
                "Washington": {
                    "id": 8582,
                    "name": "Washington",
                    "slug": "washington-20",
                },
                "Warren": {
                    "id": 8581,
                    "name": "Warren",
                    "slug": "warren-10",
                },
                "Texas": {
                    "id": 8580,
                    "name": "Texas",
                    "slug": "texas",
                },
                "Sullivan": {
                    "id": 8579,
                    "name": "Sullivan",
                    "slug": "sullivan-3",
                },
                "Shelby": {
                    "id": 8578,
                    "name": "Shelby",
                    "slug": "shelby-6",
                },
                "St. Clair": {
                    "id": 8577,
                    "name": "St. Clair",
                    "slug": "st-clair-3",
                },
                "Randolph": {
                    "id": 8576,
                    "name": "Randolph",
                    "slug": "randolph-8",
                },
                "Pulaski": {
                    "id": 8575,
                    "name": "Pulaski",
                    "slug": "pulaski-6",
                },
                "Platte": {
                    "id": 8574,
                    "name": "Platte",
                    "slug": "platte",
                },
                "Osage": {
                    "id": 8573,
                    "name": "Osage",
                    "slug": "osage-2",
                },
                "Nodaway": {
                    "id": 8572,
                    "name": "Nodaway",
                    "slug": "nodaway",
                },
                "Newton": {
                    "id": 8571,
                    "name": "Newton",
                    "slug": "newton-6",
                },
                "Morgan": {
                    "id": 8570,
                    "name": "Morgan",
                    "slug": "morgan-7",
                },
                "Moniteau": {
                    "id": 8569,
                    "name": "Moniteau",
                    "slug": "moniteau",
                },
                "Miller": {
                    "id": 8568,
                    "name": "Miller",
                    "slug": "miller-3",
                },
                "Macon": {
                    "id": 8567,
                    "name": "Macon",
                    "slug": "macon-4",
                },
                "Livingston": {
                    "id": 8566,
                    "name": "Livingston",
                    "slug": "livingston-4",
                },
                "Lewis": {
                    "id": 8565,
                    "name": "Lewis",
                    "slug": "lewis-3",
                },
                "Lafayette": {
                    "id": 8564,
                    "name": "Lafayette",
                    "slug": "lafayette-5",
                },
                "Oregon": {
                    "id": 8563,
                    "name": "Oregon",
                    "slug": "oregon",
                },
                "Mississippi": {
                    "id": 8562,
                    "name": "Mississippi",
                    "slug": "mississippi-2",
                },
                "Maries": {
                    "id": 8561,
                    "name": "Maries",
                    "slug": "maries",
                },
                "McDonald": {
                    "id": 8560,
                    "name": "McDonald",
                    "slug": "mcdonald",
                },
                "Lawrence": {
                    "id": 8559,
                    "name": "Lawrence",
                    "slug": "lawrence-8",
                },
                "Laclede": {
                    "id": 8558,
                    "name": "Laclede",
                    "slug": "laclede",
                },
                "Hickory": {
                    "id": 8557,
                    "name": "Hickory",
                    "slug": "hickory",
                },
                "Harrison": {
                    "id": 8556,
                    "name": "Harrison",
                    "slug": "harrison-6",
                },
                "Greene": {
                    "id": 8555,
                    "name": "Greene",
                    "slug": "greene-9",
                },
                "Douglas": {
                    "id": 8554,
                    "name": "Douglas",
                    "slug": "douglas-7",
                },
                "Daviess": {
                    "id": 8553,
                    "name": "Daviess",
                    "slug": "daviess-3",
                },
                "Clay": {
                    "id": 8552,
                    "name": "Clay",
                    "slug": "clay-12",
                },
                "Carter": {
                    "id": 8551,
                    "name": "Carter",
                    "slug": "carter-2",
                },
                "Buchanan": {
                    "id": 8550,
                    "name": "Buchanan",
                    "slug": "buchanan-2",
                },
                "Bollinger": {
                    "id": 8549,
                    "name": "Bollinger",
                    "slug": "bollinger",
                },
                "Barton": {
                    "id": 8548,
                    "name": "Barton",
                    "slug": "barton-2",
                },
                "Barry": {
                    "id": 8547,
                    "name": "Barry",
                    "slug": "barry",
                },
                "Atchison": {
                    "id": 8546,
                    "name": "Atchison",
                    "slug": "atchison-2",
                },
                "Adair": {
                    "id": 8545,
                    "name": "Adair",
                    "slug": "adair-3",
                },
                "Wayne": {
                    "id": 8544,
                    "name": "Wayne",
                    "slug": "wayne-8",
                },
                "Shannon": {
                    "id": 8543,
                    "name": "Shannon",
                    "slug": "shannon",
                },
                "Ray": {
                    "id": 8542,
                    "name": "Ray",
                    "slug": "ray",
                },
                "Ralls": {
                    "id": 8541,
                    "name": "Ralls",
                    "slug": "ralls",
                },
                "Polk": {
                    "id": 8540,
                    "name": "Polk",
                    "slug": "polk-6",
                },
                "Putnam": {
                    "id": 8539,
                    "name": "Putnam",
                    "slug": "putnam-6",
                },
                "Jackson": {
                    "id": 8538,
                    "name": "Jackson",
                    "slug": "jackson-15",
                },
                "Bates": {
                    "id": 8537,
                    "name": "Bates",
                    "slug": "bates",
                },
                "Callaway": {
                    "id": 8536,
                    "name": "Callaway",
                    "slug": "callaway",
                },
                "Andrew": {
                    "id": 8535,
                    "name": "Andrew",
                    "slug": "andrew",
                },
                "Scott": {
                    "id": 8534,
                    "name": "Scott",
                    "slug": "scott-9",
                },
                "Saline": {
                    "id": 8533,
                    "name": "Saline",
                    "slug": "saline-4",
                },
                "St. Charles": {
                    "id": 8532,
                    "name": "St. Charles",
                    "slug": "st-charles-2",
                },
                "Pettis": {
                    "id": 8531,
                    "name": "Pettis",
                    "slug": "pettis",
                },
                "Lincoln": {
                    "id": 8530,
                    "name": "Lincoln",
                    "slug": "lincoln-12",
                },
                "Holt": {
                    "id": 8529,
                    "name": "Holt",
                    "slug": "holt",
                },
                "Dunklin": {
                    "id": 8528,
                    "name": "Dunklin",
                    "slug": "dunklin",
                },
                "Chariton": {
                    "id": 8527,
                    "name": "Chariton",
                    "slug": "chariton",
                },
                "Stoddard": {
                    "id": 8526,
                    "name": "Stoddard",
                    "slug": "stoddard",
                },
                "Scotland": {
                    "id": 8525,
                    "name": "Scotland",
                    "slug": "scotland-2",
                },
                "St. Louis": {
                    "id": 8524,
                    "name": "St. Louis",
                    "slug": "st-louis",
                },
                "Perry": {
                    "id": 8523,
                    "name": "Perry",
                    "slug": "perry-8",
                },
                "Carroll": {
                    "id": 8522,
                    "name": "Carroll",
                    "slug": "carroll-9",
                },
                "Cape Girardeau": {
                    "id": 8521,
                    "name": "Cape Girardeau",
                    "slug": "cape-girardeau",
                },
                "Camden": {
                    "id": 8520,
                    "name": "Camden",
                    "slug": "camden-3",
                },
                "Butler": {
                    "id": 8519,
                    "name": "Butler",
                    "slug": "butler-5",
                },
            },
        },
    },
    "MT": {
        "id": 56,
        "name": "Montana",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Big Horn": {
                    "id": 8690,
                    "name": "Big Horn",
                    "slug": "big-horn",
                },
                "Richland": {
                    "id": 8689,
                    "name": "Richland",
                    "slug": "richland-3",
                },
                "Sanders": {
                    "id": 8688,
                    "name": "Sanders",
                    "slug": "sanders",
                },
                "Lake": {
                    "id": 8687,
                    "name": "Lake",
                    "slug": "lake-7",
                },
                "Petroleum": {
                    "id": 8686,
                    "name": "Petroleum",
                    "slug": "petroleum",
                },
                "Beaverhead": {
                    "id": 8685,
                    "name": "Beaverhead",
                    "slug": "beaverhead",
                },
                "Powell": {
                    "id": 8684,
                    "name": "Powell",
                    "slug": "powell-2",
                },
                "Hill": {
                    "id": 8683,
                    "name": "Hill",
                    "slug": "hill",
                },
                "Yellowstone": {
                    "id": 8682,
                    "name": "Yellowstone",
                    "slug": "yellowstone",
                },
                "Sheridan": {
                    "id": 8681,
                    "name": "Sheridan",
                    "slug": "sheridan-2",
                },
                "Wibaux": {
                    "id": 8680,
                    "name": "Wibaux",
                    "slug": "wibaux",
                },
                "Wheatland": {
                    "id": 8679,
                    "name": "Wheatland",
                    "slug": "wheatland",
                },
                "Treasure": {
                    "id": 8678,
                    "name": "Treasure",
                    "slug": "treasure",
                },
                "Sweet Grass": {
                    "id": 8677,
                    "name": "Sweet Grass",
                    "slug": "sweet-grass",
                },
                "Prairie": {
                    "id": 8676,
                    "name": "Prairie",
                    "slug": "prairie-2",
                },
                "Musselshell": {
                    "id": 8675,
                    "name": "Musselshell",
                    "slug": "musselshell",
                },
                "Liberty": {
                    "id": 8674,
                    "name": "Liberty",
                    "slug": "liberty-4",
                },
                "Golden Valley": {
                    "id": 8673,
                    "name": "Golden Valley",
                    "slug": "golden-valley",
                },
                "Fallon": {
                    "id": 8672,
                    "name": "Fallon",
                    "slug": "fallon",
                },
                "Dawson": {
                    "id": 8671,
                    "name": "Dawson",
                    "slug": "dawson-2",
                },
                "Custer": {
                    "id": 8670,
                    "name": "Custer",
                    "slug": "custer-3",
                },
                "Toole": {
                    "id": 8669,
                    "name": "Toole",
                    "slug": "toole",
                },
                "Stillwater": {
                    "id": 8668,
                    "name": "Stillwater",
                    "slug": "stillwater",
                },
                "Park": {
                    "id": 8667,
                    "name": "Park",
                    "slug": "park-2",
                },
                "Daniels": {
                    "id": 8666,
                    "name": "Daniels",
                    "slug": "daniels",
                },
                "Powder River": {
                    "id": 8665,
                    "name": "Powder River",
                    "slug": "powder-river",
                },
                "Lincoln": {
                    "id": 8664,
                    "name": "Lincoln",
                    "slug": "lincoln-13",
                },
                "Ravalli": {
                    "id": 8663,
                    "name": "Ravalli",
                    "slug": "ravalli",
                },
                "Jefferson": {
                    "id": 8662,
                    "name": "Jefferson",
                    "slug": "jefferson-16",
                },
                "Mineral": {
                    "id": 8661,
                    "name": "Mineral",
                    "slug": "mineral-2",
                },
                "Glacier": {
                    "id": 8660,
                    "name": "Glacier",
                    "slug": "glacier",
                },
                "Missoula": {
                    "id": 8659,
                    "name": "Missoula",
                    "slug": "missoula",
                },
                "Garfield": {
                    "id": 8658,
                    "name": "Garfield",
                    "slug": "garfield-2",
                },
                "Carbon": {
                    "id": 8657,
                    "name": "Carbon",
                    "slug": "carbon",
                },
                "Silver Bow": {
                    "id": 8656,
                    "name": "Silver Bow",
                    "slug": "silver-bow",
                },
                "Broadwater": {
                    "id": 8655,
                    "name": "Broadwater",
                    "slug": "broadwater",
                },
                "Blaine": {
                    "id": 8654,
                    "name": "Blaine",
                    "slug": "blaine-3",
                },
                "Teton": {
                    "id": 8653,
                    "name": "Teton",
                    "slug": "teton-2",
                },
                "Roosevelt": {
                    "id": 8652,
                    "name": "Roosevelt",
                    "slug": "roosevelt",
                },
                "Pondera": {
                    "id": 8651,
                    "name": "Pondera",
                    "slug": "pondera",
                },
                "Meagher": {
                    "id": 8650,
                    "name": "Meagher",
                    "slug": "meagher",
                },
                "McCone": {
                    "id": 8649,
                    "name": "McCone",
                    "slug": "mccone",
                },
                "Lewis and Clark": {
                    "id": 8648,
                    "name": "Lewis and Clark",
                    "slug": "lewis-and-clark",
                },
                "Judith Basin": {
                    "id": 8647,
                    "name": "Judith Basin",
                    "slug": "judith-basin",
                },
                "Gallatin": {
                    "id": 8646,
                    "name": "Gallatin",
                    "slug": "gallatin-3",
                },
                "Fergus": {
                    "id": 8645,
                    "name": "Fergus",
                    "slug": "fergus",
                },
                "Carter": {
                    "id": 8644,
                    "name": "Carter",
                    "slug": "carter-3",
                },
                "Valley": {
                    "id": 8643,
                    "name": "Valley",
                    "slug": "valley-2",
                },
                "Rosebud": {
                    "id": 8642,
                    "name": "Rosebud",
                    "slug": "rosebud",
                },
                "Phillips": {
                    "id": 8641,
                    "name": "Phillips",
                    "slug": "phillips-5",
                },
                "Madison": {
                    "id": 8640,
                    "name": "Madison",
                    "slug": "madison-15",
                },
                "Granite": {
                    "id": 8639,
                    "name": "Granite",
                    "slug": "granite",
                },
                "Flathead": {
                    "id": 8638,
                    "name": "Flathead",
                    "slug": "flathead",
                },
                "Anaconda-Deer Lodge": {
                    "id": 8637,
                    "name": "Anaconda-Deer Lodge",
                    "slug": "deer-lodge",
                },
                "Chouteau": {
                    "id": 8636,
                    "name": "Chouteau",
                    "slug": "chouteau",
                },
                "Cascade": {
                    "id": 8635,
                    "name": "Cascade",
                    "slug": "cascade",
                },
            },
        },
    },
    "NE": {
        "id": 57,
        "name": "Nebraska",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Logan": {
                    "id": 8783,
                    "name": "Logan",
                    "slug": "logan-6",
                },
                "Saunders": {
                    "id": 8782,
                    "name": "Saunders",
                    "slug": "saunders",
                },
                "McPherson": {
                    "id": 8781,
                    "name": "McPherson",
                    "slug": "mcpherson-2",
                },
                "Hitchcock": {
                    "id": 8780,
                    "name": "Hitchcock",
                    "slug": "hitchcock",
                },
                "Arthur": {
                    "id": 8779,
                    "name": "Arthur",
                    "slug": "arthur",
                },
                "Banner": {
                    "id": 8778,
                    "name": "Banner",
                    "slug": "banner",
                },
                "Brown": {
                    "id": 8777,
                    "name": "Brown",
                    "slug": "brown-5",
                },
                "Richardson": {
                    "id": 8776,
                    "name": "Richardson",
                    "slug": "richardson",
                },
                "Hayes": {
                    "id": 8775,
                    "name": "Hayes",
                    "slug": "hayes",
                },
                "Deuel": {
                    "id": 8774,
                    "name": "Deuel",
                    "slug": "deuel",
                },
                "Cass": {
                    "id": 8773,
                    "name": "Cass",
                    "slug": "cass-6",
                },
                "Polk": {
                    "id": 8772,
                    "name": "Polk",
                    "slug": "polk-7",
                },
                "Kearney": {
                    "id": 8771,
                    "name": "Kearney",
                    "slug": "kearney",
                },
                "Franklin": {
                    "id": 8770,
                    "name": "Franklin",
                    "slug": "franklin-17",
                },
                "Dakota": {
                    "id": 8769,
                    "name": "Dakota",
                    "slug": "dakota-2",
                },
                "Cedar": {
                    "id": 8768,
                    "name": "Cedar",
                    "slug": "cedar-3",
                },
                "Box Butte": {
                    "id": 8767,
                    "name": "Box Butte",
                    "slug": "box-butte",
                },
                "Sherman": {
                    "id": 8766,
                    "name": "Sherman",
                    "slug": "sherman-4",
                },
                "Perkins": {
                    "id": 8765,
                    "name": "Perkins",
                    "slug": "perkins",
                },
                "Knox": {
                    "id": 8764,
                    "name": "Knox",
                    "slug": "knox-6",
                },
                "Hall": {
                    "id": 8763,
                    "name": "Hall",
                    "slug": "hall-2",
                },
                "York": {
                    "id": 8762,
                    "name": "York",
                    "slug": "york-2",
                },
                "Scotts Bluff": {
                    "id": 8761,
                    "name": "Scotts Bluff",
                    "slug": "scotts-bluff",
                },
                "Nuckolls": {
                    "id": 8760,
                    "name": "Nuckolls",
                    "slug": "nuckolls",
                },
                "Kimball": {
                    "id": 8759,
                    "name": "Kimball",
                    "slug": "kimball",
                },
                "Grant": {
                    "id": 8758,
                    "name": "Grant",
                    "slug": "grant-7",
                },
                "Dawes": {
                    "id": 8757,
                    "name": "Dawes",
                    "slug": "dawes",
                },
                "Cheyenne": {
                    "id": 8756,
                    "name": "Cheyenne",
                    "slug": "cheyenne-3",
                },
                "Thayer": {
                    "id": 8755,
                    "name": "Thayer",
                    "slug": "thayer",
                },
                "Webster": {
                    "id": 8754,
                    "name": "Webster",
                    "slug": "webster-8",
                },
                "Frontier": {
                    "id": 8753,
                    "name": "Frontier",
                    "slug": "frontier",
                },
                "Johnson": {
                    "id": 8752,
                    "name": "Johnson",
                    "slug": "johnson-9",
                },
                "Red Willow": {
                    "id": 8751,
                    "name": "Red Willow",
                    "slug": "red-willow",
                },
                "Platte": {
                    "id": 8750,
                    "name": "Platte",
                    "slug": "platte-2",
                },
                "Pierce": {
                    "id": 8749,
                    "name": "Pierce",
                    "slug": "pierce-2",
                },
                "Otoe": {
                    "id": 8748,
                    "name": "Otoe",
                    "slug": "otoe",
                },
                "Nemaha": {
                    "id": 8747,
                    "name": "Nemaha",
                    "slug": "nemaha-2",
                },
                "Nance": {
                    "id": 8746,
                    "name": "Nance",
                    "slug": "nance",
                },
                "Merrick": {
                    "id": 8745,
                    "name": "Merrick",
                    "slug": "merrick",
                },
                "Loup": {
                    "id": 8744,
                    "name": "Loup",
                    "slug": "loup",
                },
                "Lincoln": {
                    "id": 8743,
                    "name": "Lincoln",
                    "slug": "lincoln-14",
                },
                "Keith": {
                    "id": 8742,
                    "name": "Keith",
                    "slug": "keith",
                },
                "Howard": {
                    "id": 8741,
                    "name": "Howard",
                    "slug": "howard-6",
                },
                "Hooker": {
                    "id": 8740,
                    "name": "Hooker",
                    "slug": "hooker",
                },
                "Harlan": {
                    "id": 8739,
                    "name": "Harlan",
                    "slug": "harlan-2",
                },
                "Greeley": {
                    "id": 8738,
                    "name": "Greeley",
                    "slug": "greeley-2",
                },
                "Gage": {
                    "id": 8737,
                    "name": "Gage",
                    "slug": "gage",
                },
                "Burt": {
                    "id": 8736,
                    "name": "Burt",
                    "slug": "burt",
                },
                "Buffalo": {
                    "id": 8735,
                    "name": "Buffalo",
                    "slug": "buffalo",
                },
                "Boyd": {
                    "id": 8734,
                    "name": "Boyd",
                    "slug": "boyd-2",
                },
                "Boone": {
                    "id": 8733,
                    "name": "Boone",
                    "slug": "boone-7",
                },
                "Adams": {
                    "id": 8732,
                    "name": "Adams",
                    "slug": "adams-8",
                },
                "Wheeler": {
                    "id": 8731,
                    "name": "Wheeler",
                    "slug": "wheeler-2",
                },
                "Wayne": {
                    "id": 8730,
                    "name": "Wayne",
                    "slug": "wayne-9",
                },
                "Valley": {
                    "id": 8729,
                    "name": "Valley",
                    "slug": "valley-3",
                },
                "Thurston": {
                    "id": 8728,
                    "name": "Thurston",
                    "slug": "thurston",
                },
                "Sioux": {
                    "id": 8727,
                    "name": "Sioux",
                    "slug": "sioux-2",
                },
                "Seward": {
                    "id": 8726,
                    "name": "Seward",
                    "slug": "seward-2",
                },
                "Rock": {
                    "id": 8725,
                    "name": "Rock",
                    "slug": "rock-2",
                },
                "Washington": {
                    "id": 8724,
                    "name": "Washington",
                    "slug": "washington-21",
                },
                "Thomas": {
                    "id": 8723,
                    "name": "Thomas",
                    "slug": "thomas-3",
                },
                "Sheridan": {
                    "id": 8722,
                    "name": "Sheridan",
                    "slug": "sheridan-3",
                },
                "Sarpy": {
                    "id": 8721,
                    "name": "Sarpy",
                    "slug": "sarpy",
                },
                "Phelps": {
                    "id": 8720,
                    "name": "Phelps",
                    "slug": "phelps-2",
                },
                "Pawnee": {
                    "id": 8719,
                    "name": "Pawnee",
                    "slug": "pawnee-2",
                },
                "Morrill": {
                    "id": 8718,
                    "name": "Morrill",
                    "slug": "morrill-2",
                },
                "Madison": {
                    "id": 8717,
                    "name": "Madison",
                    "slug": "madison-16",
                },
                "Lancaster": {
                    "id": 8716,
                    "name": "Lancaster",
                    "slug": "lancaster-2",
                },
                "Jefferson": {
                    "id": 8715,
                    "name": "Jefferson",
                    "slug": "jefferson-17",
                },
                "Holt": {
                    "id": 8714,
                    "name": "Holt",
                    "slug": "holt-2",
                },
                "Hamilton": {
                    "id": 8713,
                    "name": "Hamilton",
                    "slug": "hamilton-7",
                },
                "Garfield": {
                    "id": 8712,
                    "name": "Garfield",
                    "slug": "garfield-3",
                },
                "Furnas": {
                    "id": 8711,
                    "name": "Furnas",
                    "slug": "furnas",
                },
                "Douglas": {
                    "id": 8710,
                    "name": "Douglas",
                    "slug": "douglas-8",
                },
                "Dodge": {
                    "id": 8709,
                    "name": "Dodge",
                    "slug": "dodge-3",
                },
                "Dixon": {
                    "id": 8708,
                    "name": "Dixon",
                    "slug": "dixon",
                },
                "Dawson": {
                    "id": 8707,
                    "name": "Dawson",
                    "slug": "dawson-3",
                },
                "Custer": {
                    "id": 8706,
                    "name": "Custer",
                    "slug": "custer-4",
                },
                "Cuming": {
                    "id": 8705,
                    "name": "Cuming",
                    "slug": "cuming",
                },
                "Colfax": {
                    "id": 8704,
                    "name": "Colfax",
                    "slug": "colfax",
                },
                "Clay": {
                    "id": 8703,
                    "name": "Clay",
                    "slug": "clay-13",
                },
                "Cherry": {
                    "id": 8702,
                    "name": "Cherry",
                    "slug": "cherry",
                },
                "Chase": {
                    "id": 8701,
                    "name": "Chase",
                    "slug": "chase-2",
                },
                "Butler": {
                    "id": 8700,
                    "name": "Butler",
                    "slug": "butler-6",
                },
                "Antelope": {
                    "id": 8699,
                    "name": "Antelope",
                    "slug": "antelope",
                },
                "Gosper": {
                    "id": 8698,
                    "name": "Gosper",
                    "slug": "gosper",
                },
                "Blaine": {
                    "id": 8697,
                    "name": "Blaine",
                    "slug": "blaine-4",
                },
                "Dundy": {
                    "id": 8696,
                    "name": "Dundy",
                    "slug": "dundy",
                },
                "Saline": {
                    "id": 8695,
                    "name": "Saline",
                    "slug": "saline-5",
                },
                "Keya Paha": {
                    "id": 8694,
                    "name": "Keya Paha",
                    "slug": "keya-paha",
                },
                "Garden": {
                    "id": 8693,
                    "name": "Garden",
                    "slug": "garden",
                },
                "Stanton": {
                    "id": 8692,
                    "name": "Stanton",
                    "slug": "stanton-2",
                },
                "Fillmore": {
                    "id": 8691,
                    "name": "Fillmore",
                    "slug": "fillmore-2",
                },
            },
        },
    },
    "NV": {
        "id": 58,
        "name": "Nevada",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "White Pine": {
                    "id": 8800,
                    "name": "White Pine",
                    "slug": "white-pine",
                },
                "Washoe": {
                    "id": 8799,
                    "name": "Washoe",
                    "slug": "washoe",
                },
                "Storey": {
                    "id": 8798,
                    "name": "Storey",
                    "slug": "storey",
                },
                "Pershing": {
                    "id": 8797,
                    "name": "Pershing",
                    "slug": "pershing",
                },
                "Nye": {
                    "id": 8796,
                    "name": "Nye",
                    "slug": "nye",
                },
                "Mineral": {
                    "id": 8795,
                    "name": "Mineral",
                    "slug": "mineral-3",
                },
                "Lyon": {
                    "id": 8794,
                    "name": "Lyon",
                    "slug": "lyon-5",
                },
                "Lincoln": {
                    "id": 8793,
                    "name": "Lincoln",
                    "slug": "lincoln-15",
                },
                "Lander": {
                    "id": 8792,
                    "name": "Lander",
                    "slug": "lander",
                },
                "Humboldt": {
                    "id": 8791,
                    "name": "Humboldt",
                    "slug": "humboldt-3",
                },
                "Eureka": {
                    "id": 8790,
                    "name": "Eureka",
                    "slug": "eureka",
                },
                "Esmeralda": {
                    "id": 8789,
                    "name": "Esmeralda",
                    "slug": "esmeralda",
                },
                "Elko": {
                    "id": 8788,
                    "name": "Elko",
                    "slug": "elko",
                },
                "Douglas": {
                    "id": 8787,
                    "name": "Douglas",
                    "slug": "douglas-9",
                },
                "Clark": {
                    "id": 8786,
                    "name": "Clark",
                    "slug": "clark-8",
                },
                "Churchill": {
                    "id": 8785,
                    "name": "Churchill",
                    "slug": "churchill",
                },
                "Carson City": {
                    "id": 8784,
                    "name": "Carson City",
                    "slug": "carson-city",
                },
            },
        },
    },
    "NH": {
        "id": 59,
        "name": "New Hampshire",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {
                "Woodstock": {
                    "id": 9040,
                    "name": "Woodstock",
                    "slug": "woodstock-3",
                },
                "Wolfeboro": {
                    "id": 9039,
                    "name": "Wolfeboro",
                    "slug": "wolfeboro",
                },
                "Windsor": {
                    "id": 9038,
                    "name": "Windsor",
                    "slug": "windsor-4",
                },
                "Windham": {
                    "id": 9037,
                    "name": "Windham",
                    "slug": "windham-3",
                },
                "Winchester": {
                    "id": 9036,
                    "name": "Winchester",
                    "slug": "winchester-3",
                },
                "Wilton": {
                    "id": 9035,
                    "name": "Wilton",
                    "slug": "wilton-3",
                },
                "Wilmot": {
                    "id": 9034,
                    "name": "Wilmot",
                    "slug": "wilmot",
                },
                "Whitefield": {
                    "id": 9033,
                    "name": "Whitefield",
                    "slug": "whitefield-2",
                },
                "Westmoreland": {
                    "id": 9032,
                    "name": "Westmoreland",
                    "slug": "westmoreland",
                },
                "Wentworth": {
                    "id": 9030,
                    "name": "Wentworth",
                    "slug": "wentworth",
                },
                "Webster": {
                    "id": 9029,
                    "name": "Webster",
                    "slug": "webster-9",
                },
                "Weare": {
                    "id": 9028,
                    "name": "Weare",
                    "slug": "weare",
                },
                "Waterville Valley": {
                    "id": 9027,
                    "name": "Waterville Valley",
                    "slug": "waterville-valley",
                },
                "Washington": {
                    "id": 9026,
                    "name": "Washington",
                    "slug": "washington-22",
                },
                "Warren": {
                    "id": 9025,
                    "name": "Warren",
                    "slug": "warren-11",
                },
                "Warner": {
                    "id": 9024,
                    "name": "Warner",
                    "slug": "warner",
                },
                "Walpole": {
                    "id": 9023,
                    "name": "Walpole",
                    "slug": "walpole-2",
                },
                "Wakefield": {
                    "id": 9022,
                    "name": "Wakefield",
                    "slug": "wakefield-2",
                },
                "Unity": {
                    "id": 9021,
                    "name": "Unity",
                    "slug": "unity",
                },
                "Tuftonboro": {
                    "id": 9020,
                    "name": "Tuftonboro",
                    "slug": "tuftonboro",
                },
                "Troy": {
                    "id": 9019,
                    "name": "Troy",
                    "slug": "troy-2",
                },
                "Tilton": {
                    "id": 9018,
                    "name": "Tilton",
                    "slug": "tilton",
                },
                "Thornton": {
                    "id": 9017,
                    "name": "Thornton",
                    "slug": "thornton",
                },
                "Temple": {
                    "id": 9016,
                    "name": "Temple",
                    "slug": "temple-2",
                },
                "Tamworth": {
                    "id": 9015,
                    "name": "Tamworth",
                    "slug": "tamworth",
                },
                "Swanzey": {
                    "id": 9014,
                    "name": "Swanzey",
                    "slug": "swanzey",
                },
                "Sutton": {
                    "id": 9013,
                    "name": "Sutton",
                    "slug": "sutton-2",
                },
                "Surry": {
                    "id": 9012,
                    "name": "Surry",
                    "slug": "surry-2",
                },
                "Sunapee": {
                    "id": 9011,
                    "name": "Sunapee",
                    "slug": "sunapee",
                },
                "Sullivan": {
                    "id": 9010,
                    "name": "Sullivan",
                    "slug": "sullivan-4",
                },
                "Sugar Hill": {
                    "id": 9009,
                    "name": "Sugar Hill",
                    "slug": "sugar-hill",
                },
                "Stratham": {
                    "id": 9008,
                    "name": "Stratham",
                    "slug": "stratham",
                },
                "Stratford": {
                    "id": 9007,
                    "name": "Stratford",
                    "slug": "stratford-2",
                },
                "Strafford": {
                    "id": 9006,
                    "name": "Strafford",
                    "slug": "strafford",
                },
                "Stoddard": {
                    "id": 9005,
                    "name": "Stoddard",
                    "slug": "stoddard-2",
                },
                "Stewartstown": {
                    "id": 9004,
                    "name": "Stewartstown",
                    "slug": "stewartstown",
                },
                "Stark": {
                    "id": 9003,
                    "name": "Stark",
                    "slug": "stark-2",
                },
                "Springfield": {
                    "id": 9002,
                    "name": "Springfield",
                    "slug": "springfield-2",
                },
                "South Hampton": {
                    "id": 9001,
                    "name": "South Hampton",
                    "slug": "south-hampton",
                },
                "Somersworth": {
                    "id": 9000,
                    "name": "Somersworth",
                    "slug": "somersworth",
                },
                "Shelburne": {
                    "id": 8999,
                    "name": "Shelburne",
                    "slug": "shelburne-2",
                },
                "Sharon": {
                    "id": 8998,
                    "name": "Sharon",
                    "slug": "sharon-3",
                },
                "Seabrook": {
                    "id": 8997,
                    "name": "Seabrook",
                    "slug": "seabrook",
                },
                "Sandwich": {
                    "id": 8996,
                    "name": "Sandwich",
                    "slug": "sandwich-2",
                },
                "Sandown": {
                    "id": 8995,
                    "name": "Sandown",
                    "slug": "sandown",
                },
                "Sanbornton": {
                    "id": 8994,
                    "name": "Sanbornton",
                    "slug": "sanbornton",
                },
                "Salisbury": {
                    "id": 8993,
                    "name": "Salisbury",
                    "slug": "salisbury-3",
                },
                "Salem": {
                    "id": 8992,
                    "name": "Salem",
                    "slug": "salem-3",
                },
                "Rye": {
                    "id": 8991,
                    "name": "Rye",
                    "slug": "rye",
                },
                "Rumney": {
                    "id": 8990,
                    "name": "Rumney",
                    "slug": "rumney",
                },
                "Roxbury": {
                    "id": 8989,
                    "name": "Roxbury",
                    "slug": "roxbury-2",
                },
                "Rollinsford": {
                    "id": 8988,
                    "name": "Rollinsford",
                    "slug": "rollinsford",
                },
                "Rochester": {
                    "id": 8987,
                    "name": "Rochester",
                    "slug": "rochester-2",
                },
                "Rindge": {
                    "id": 8986,
                    "name": "Rindge",
                    "slug": "rindge",
                },
                "Richmond": {
                    "id": 8985,
                    "name": "Richmond",
                    "slug": "richmond-4",
                },
                "Raymond": {
                    "id": 8984,
                    "name": "Raymond",
                    "slug": "raymond-2",
                },
                "Randolph": {
                    "id": 8983,
                    "name": "Randolph",
                    "slug": "randolph-9",
                },
                "Portsmouth": {
                    "id": 8982,
                    "name": "Portsmouth",
                    "slug": "portsmouth",
                },
                "Plymouth": {
                    "id": 8981,
                    "name": "Plymouth",
                    "slug": "plymouth-5",
                },
                "Plaistow": {
                    "id": 8980,
                    "name": "Plaistow",
                    "slug": "plaistow",
                },
                "Plainfield": {
                    "id": 8979,
                    "name": "Plainfield",
                    "slug": "plainfield-3",
                },
                "Pittsfield": {
                    "id": 8978,
                    "name": "Pittsfield",
                    "slug": "pittsfield-3",
                },
                "Pittsburg": {
                    "id": 8977,
                    "name": "Pittsburg",
                    "slug": "pittsburg",
                },
                "Piermont": {
                    "id": 8976,
                    "name": "Piermont",
                    "slug": "piermont",
                },
                "Peterborough": {
                    "id": 8975,
                    "name": "Peterborough",
                    "slug": "peterborough",
                },
                "Pembroke": {
                    "id": 8974,
                    "name": "Pembroke",
                    "slug": "pembroke-3",
                },
                "Pelham": {
                    "id": 8973,
                    "name": "Pelham",
                    "slug": "pelham-2",
                },
                "Ossipee": {
                    "id": 8972,
                    "name": "Ossipee",
                    "slug": "ossipee",
                },
                "Orford": {
                    "id": 8971,
                    "name": "Orford",
                    "slug": "orford",
                },
                "Orange": {
                    "id": 8970,
                    "name": "Orange",
                    "slug": "orange-6",
                },
                "Nottingham": {
                    "id": 8969,
                    "name": "Nottingham",
                    "slug": "nottingham",
                },
                "Northwood": {
                    "id": 8968,
                    "name": "Northwood",
                    "slug": "northwood",
                },
                "Northumberland": {
                    "id": 8967,
                    "name": "Northumberland",
                    "slug": "northumberland",
                },
                "Northfield": {
                    "id": 8966,
                    "name": "Northfield",
                    "slug": "northfield-2",
                },
                "North Hampton": {
                    "id": 8965,
                    "name": "North Hampton",
                    "slug": "north-hampton",
                },
                "Newton": {
                    "id": 8964,
                    "name": "Newton",
                    "slug": "newton-7",
                },
                "Newport": {
                    "id": 8963,
                    "name": "Newport",
                    "slug": "newport-2",
                },
                "Newmarket": {
                    "id": 8962,
                    "name": "Newmarket",
                    "slug": "newmarket",
                },
                "Newington": {
                    "id": 8961,
                    "name": "Newington",
                    "slug": "newington-2",
                },
                "Newfields": {
                    "id": 8960,
                    "name": "Newfields",
                    "slug": "newfields",
                },
                "Newbury": {
                    "id": 8959,
                    "name": "Newbury",
                    "slug": "newbury-2",
                },
                "New London": {
                    "id": 8958,
                    "name": "New London",
                    "slug": "new-london-2",
                },
                "New Ipswich": {
                    "id": 8957,
                    "name": "New Ipswich",
                    "slug": "new-ipswich",
                },
                "New Hampton": {
                    "id": 8956,
                    "name": "New Hampton",
                    "slug": "new-hampton",
                },
                "New Durham": {
                    "id": 8955,
                    "name": "New Durham",
                    "slug": "new-durham",
                },
                "New Castle": {
                    "id": 8954,
                    "name": "New Castle",
                    "slug": "new-castle-2",
                },
                "New Boston": {
                    "id": 8953,
                    "name": "New Boston",
                    "slug": "new-boston",
                },
                "Nelson": {
                    "id": 8952,
                    "name": "Nelson",
                    "slug": "nelson-2",
                },
                "Nashua": {
                    "id": 8951,
                    "name": "Nashua",
                    "slug": "nashua",
                },
                "Moultonborough": {
                    "id": 8950,
                    "name": "Moultonborough",
                    "slug": "moultonborough",
                },
                "Mont Vernon": {
                    "id": 8949,
                    "name": "Mont Vernon",
                    "slug": "mont-vernon",
                },
                "Monroe": {
                    "id": 8948,
                    "name": "Monroe",
                    "slug": "monroe-14",
                },
                "Milton": {
                    "id": 8947,
                    "name": "Milton",
                    "slug": "milton-2",
                },
                "Milford": {
                    "id": 8945,
                    "name": "Milford",
                    "slug": "milford-4",
                },
                "Milan": {
                    "id": 8944,
                    "name": "Milan",
                    "slug": "milan",
                },
                "Middleton": {
                    "id": 8943,
                    "name": "Middleton",
                    "slug": "middleton-2",
                },
                "Merrimack": {
                    "id": 8942,
                    "name": "Merrimack",
                    "slug": "merrimack",
                },
                "Meredith": {
                    "id": 8941,
                    "name": "Meredith",
                    "slug": "meredith",
                },
                "Mason": {
                    "id": 8940,
                    "name": "Mason",
                    "slug": "mason-3",
                },
                "Marlow": {
                    "id": 8939,
                    "name": "Marlow",
                    "slug": "marlow",
                },
                "Marlborough": {
                    "id": 8938,
                    "name": "Marlborough",
                    "slug": "marlborough-3",
                },
                "Manchester": {
                    "id": 8937,
                    "name": "Manchester",
                    "slug": "manchester-3",
                },
                "Madison": {
                    "id": 8936,
                    "name": "Madison",
                    "slug": "madison-17",
                },
                "Madbury": {
                    "id": 8935,
                    "name": "Madbury",
                    "slug": "madbury",
                },
                "Lyndeborough": {
                    "id": 8934,
                    "name": "Lyndeborough",
                    "slug": "lyndeborough",
                },
                "Lyme": {
                    "id": 8933,
                    "name": "Lyme",
                    "slug": "lyme-2",
                },
                "Lyman": {
                    "id": 8932,
                    "name": "Lyman",
                    "slug": "lyman-2",
                },
                "Loudon": {
                    "id": 8931,
                    "name": "Loudon",
                    "slug": "loudon",
                },
                "Londonderry": {
                    "id": 8930,
                    "name": "Londonderry",
                    "slug": "londonderry",
                },
                "Littleton": {
                    "id": 8929,
                    "name": "Littleton",
                    "slug": "littleton-3",
                },
                "Litchfield": {
                    "id": 8928,
                    "name": "Litchfield",
                    "slug": "litchfield-3",
                },
                "Lisbon": {
                    "id": 8927,
                    "name": "Lisbon",
                    "slug": "lisbon-3",
                },
                "Lincoln": {
                    "id": 8926,
                    "name": "Lincoln",
                    "slug": "lincoln-16",
                },
                "Lempster": {
                    "id": 8925,
                    "name": "Lempster",
                    "slug": "lempster",
                },
                "Lee": {
                    "id": 8924,
                    "name": "Lee",
                    "slug": "lee-11",
                },
                "Lebanon": {
                    "id": 8923,
                    "name": "Lebanon",
                    "slug": "lebanon-3",
                },
                "Langdon": {
                    "id": 8922,
                    "name": "Langdon",
                    "slug": "langdon",
                },
                "Landaff": {
                    "id": 8921,
                    "name": "Landaff",
                    "slug": "landaff",
                },
                "Lancaster": {
                    "id": 8920,
                    "name": "Lancaster",
                    "slug": "lancaster-3",
                },
                "Laconia": {
                    "id": 8919,
                    "name": "Laconia",
                    "slug": "laconia",
                },
                "Kingston": {
                    "id": 8918,
                    "name": "Kingston",
                    "slug": "kingston-2",
                },
                "Kensington": {
                    "id": 8917,
                    "name": "Kensington",
                    "slug": "kensington",
                },
                "Keene": {
                    "id": 8916,
                    "name": "Keene",
                    "slug": "keene",
                },
                "Jefferson": {
                    "id": 8915,
                    "name": "Jefferson",
                    "slug": "jefferson-18",
                },
                "Jaffrey": {
                    "id": 8914,
                    "name": "Jaffrey",
                    "slug": "jaffrey",
                },
                "Jackson": {
                    "id": 8913,
                    "name": "Jackson",
                    "slug": "jackson-16",
                },
                "Hudson": {
                    "id": 8912,
                    "name": "Hudson",
                    "slug": "hudson-3",
                },
                "Hopkinton": {
                    "id": 8911,
                    "name": "Hopkinton",
                    "slug": "hopkinton-2",
                },
                "Hooksett": {
                    "id": 8910,
                    "name": "Hooksett",
                    "slug": "hooksett",
                },
                "Hollis": {
                    "id": 8909,
                    "name": "Hollis",
                    "slug": "hollis-2",
                },
                "Holderness": {
                    "id": 8908,
                    "name": "Holderness",
                    "slug": "holderness",
                },
                "Hinsdale": {
                    "id": 8907,
                    "name": "Hinsdale",
                    "slug": "hinsdale-3",
                },
                "Hillsborough": {
                    "id": 8906,
                    "name": "Hillsborough",
                    "slug": "hillsborough-2",
                },
                "Hill": {
                    "id": 8905,
                    "name": "Hill",
                    "slug": "hill-2",
                },
                "Henniker": {
                    "id": 8904,
                    "name": "Henniker",
                    "slug": "henniker",
                },
                "Hebron": {
                    "id": 8903,
                    "name": "Hebron",
                    "slug": "hebron-3",
                },
                "Haverhill": {
                    "id": 8902,
                    "name": "Haverhill",
                    "slug": "haverhill-2",
                },
                "Harts Location": {
                    "id": 8901,
                    "name": "Harts Location",
                    "slug": "harts-location",
                },
                "Harrisville": {
                    "id": 8900,
                    "name": "Harrisville",
                    "slug": "harrisville",
                },
                "Hanover": {
                    "id": 8899,
                    "name": "Hanover",
                    "slug": "hanover-2",
                },
                "Hancock": {
                    "id": 8898,
                    "name": "Hancock",
                    "slug": "hancock-9",
                },
                "Hampton Falls": {
                    "id": 8897,
                    "name": "Hampton Falls",
                    "slug": "hampton-falls",
                },
                "Hampton": {
                    "id": 8896,
                    "name": "Hampton",
                    "slug": "hampton-2",
                },
                "Hampstead": {
                    "id": 8895,
                    "name": "Hampstead",
                    "slug": "hampstead",
                },
                "Groton": {
                    "id": 8893,
                    "name": "Groton",
                    "slug": "groton-3",
                },
                "Greenville": {
                    "id": 8892,
                    "name": "Greenville",
                    "slug": "greenville-2",
                },
                "Greenland": {
                    "id": 8891,
                    "name": "Greenland",
                    "slug": "greenland",
                },
                "Greenfield": {
                    "id": 8890,
                    "name": "Greenfield",
                    "slug": "greenfield-2",
                },
                "Grantham": {
                    "id": 8889,
                    "name": "Grantham",
                    "slug": "grantham",
                },
                "Grafton": {
                    "id": 8888,
                    "name": "Grafton",
                    "slug": "grafton-2",
                },
                "Goshen": {
                    "id": 8887,
                    "name": "Goshen",
                    "slug": "goshen-3",
                },
                "Gorham": {
                    "id": 8886,
                    "name": "Gorham",
                    "slug": "gorham-2",
                },
                "Goffstown": {
                    "id": 8885,
                    "name": "Goffstown",
                    "slug": "goffstown",
                },
                "Gilsum": {
                    "id": 8884,
                    "name": "Gilsum",
                    "slug": "gilsum",
                },
                "Gilmanton": {
                    "id": 8883,
                    "name": "Gilmanton",
                    "slug": "gilmanton",
                },
                "Gilford": {
                    "id": 8882,
                    "name": "Gilford",
                    "slug": "gilford",
                },
                "Fremont": {
                    "id": 8881,
                    "name": "Fremont",
                    "slug": "fremont-4",
                },
                "Freedom": {
                    "id": 8880,
                    "name": "Freedom",
                    "slug": "freedom-2",
                },
                "Franklin": {
                    "id": 8879,
                    "name": "Franklin",
                    "slug": "franklin-18",
                },
                "Franconia": {
                    "id": 8878,
                    "name": "Franconia",
                    "slug": "franconia",
                },
                "Francestown": {
                    "id": 8877,
                    "name": "Francestown",
                    "slug": "francestown",
                },
                "Fitzwilliam": {
                    "id": 8876,
                    "name": "Fitzwilliam",
                    "slug": "fitzwilliam",
                },
                "Farmington": {
                    "id": 8875,
                    "name": "Farmington",
                    "slug": "farmington-3",
                },
                "Exeter": {
                    "id": 8874,
                    "name": "Exeter",
                    "slug": "exeter-2",
                },
                "Errol": {
                    "id": 8873,
                    "name": "Errol",
                    "slug": "errol",
                },
                "Epsom": {
                    "id": 8872,
                    "name": "Epsom",
                    "slug": "epsom",
                },
                "Epping": {
                    "id": 8871,
                    "name": "Epping",
                    "slug": "epping",
                },
                "Enfield": {
                    "id": 8870,
                    "name": "Enfield",
                    "slug": "enfield-3",
                },
                "Ellsworth": {
                    "id": 8869,
                    "name": "Ellsworth",
                    "slug": "ellsworth-3",
                },
                "Effingham": {
                    "id": 8868,
                    "name": "Effingham",
                    "slug": "effingham-3",
                },
                "Eaton": {
                    "id": 8867,
                    "name": "Eaton",
                    "slug": "eaton",
                },
                "Easton": {
                    "id": 8866,
                    "name": "Easton",
                    "slug": "easton-4",
                },
                "East Kingston": {
                    "id": 8865,
                    "name": "East Kingston",
                    "slug": "east-kingston",
                },
                "Durham": {
                    "id": 8864,
                    "name": "Durham",
                    "slug": "durham-3",
                },
                "Dunbarton": {
                    "id": 8863,
                    "name": "Dunbarton",
                    "slug": "dunbarton",
                },
                "Dummer": {
                    "id": 8862,
                    "name": "Dummer",
                    "slug": "dummer",
                },
                "Dublin": {
                    "id": 8861,
                    "name": "Dublin",
                    "slug": "dublin",
                },
                "Dover": {
                    "id": 8860,
                    "name": "Dover",
                    "slug": "dover-2",
                },
                "Dorchester": {
                    "id": 8859,
                    "name": "Dorchester",
                    "slug": "dorchester-2",
                },
                "Derry": {
                    "id": 8856,
                    "name": "Derry",
                    "slug": "derry",
                },
                "Deering": {
                    "id": 8855,
                    "name": "Deering",
                    "slug": "deering",
                },
                "Deerfield": {
                    "id": 8854,
                    "name": "Deerfield",
                    "slug": "deerfield-2",
                },
                "Danville": {
                    "id": 8853,
                    "name": "Danville",
                    "slug": "danville-2",
                },
                "Danbury": {
                    "id": 8852,
                    "name": "Danbury",
                    "slug": "danbury-2",
                },
                "Dalton": {
                    "id": 8851,
                    "name": "Dalton",
                    "slug": "dalton-2",
                },
                "Croydon": {
                    "id": 8850,
                    "name": "Croydon",
                    "slug": "croydon",
                },
                "Cornish": {
                    "id": 8849,
                    "name": "Cornish",
                    "slug": "cornish-2",
                },
                "Conway": {
                    "id": 8848,
                    "name": "Conway",
                    "slug": "conway-3",
                },
                "Concord": {
                    "id": 8847,
                    "name": "Concord",
                    "slug": "concord-2",
                },
                "Columbia": {
                    "id": 8846,
                    "name": "Columbia",
                    "slug": "columbia-5",
                },
                "Colebrook": {
                    "id": 8845,
                    "name": "Colebrook",
                    "slug": "colebrook-2",
                },
                "Clarksville": {
                    "id": 8844,
                    "name": "Clarksville",
                    "slug": "clarksville",
                },
                "Claremont": {
                    "id": 8843,
                    "name": "Claremont",
                    "slug": "claremont",
                },
                "Chichester": {
                    "id": 8842,
                    "name": "Chichester",
                    "slug": "chichester",
                },
                "Chesterfield": {
                    "id": 8841,
                    "name": "Chesterfield",
                    "slug": "chesterfield-2",
                },
                "Chester": {
                    "id": 8840,
                    "name": "Chester",
                    "slug": "chester-4",
                },
                "Chatham": {
                    "id": 8839,
                    "name": "Chatham",
                    "slug": "chatham-3",
                },
                "Charlestown": {
                    "id": 8838,
                    "name": "Charlestown",
                    "slug": "charlestown",
                },
                "Center Harbor": {
                    "id": 8837,
                    "name": "Center Harbor",
                    "slug": "center-harbor",
                },
                "Carroll": {
                    "id": 8836,
                    "name": "Carroll",
                    "slug": "carroll-10",
                },
                "Canterbury": {
                    "id": 8835,
                    "name": "Canterbury",
                    "slug": "canterbury-2",
                },
                "Candia": {
                    "id": 8834,
                    "name": "Candia",
                    "slug": "candia",
                },
                "Canaan": {
                    "id": 8833,
                    "name": "Canaan",
                    "slug": "canaan-3",
                },
                "Campton": {
                    "id": 8832,
                    "name": "Campton",
                    "slug": "campton",
                },
                "Brookline": {
                    "id": 8830,
                    "name": "Brookline",
                    "slug": "brookline-2",
                },
                "Brookfield": {
                    "id": 8829,
                    "name": "Brookfield",
                    "slug": "brookfield-3",
                },
                "Bristol": {
                    "id": 8828,
                    "name": "Bristol",
                    "slug": "bristol-3",
                },
                "Bridgewater": {
                    "id": 8827,
                    "name": "Bridgewater",
                    "slug": "bridgewater-4",
                },
                "Brentwood": {
                    "id": 8826,
                    "name": "Brentwood",
                    "slug": "brentwood",
                },
                "Bradford": {
                    "id": 8825,
                    "name": "Bradford",
                    "slug": "bradford-3",
                },
                "Bow": {
                    "id": 8824,
                    "name": "Bow",
                    "slug": "bow",
                },
                "Boscawen": {
                    "id": 8823,
                    "name": "Boscawen",
                    "slug": "boscawen",
                },
                "Bethlehem": {
                    "id": 8822,
                    "name": "Bethlehem",
                    "slug": "bethlehem-2",
                },
                "Berlin": {
                    "id": 8821,
                    "name": "Berlin",
                    "slug": "berlin-3",
                },
                "Benton": {
                    "id": 8820,
                    "name": "Benton",
                    "slug": "benton-8",
                },
                "Bennington": {
                    "id": 8819,
                    "name": "Bennington",
                    "slug": "bennington",
                },
                "Belmont": {
                    "id": 8818,
                    "name": "Belmont",
                    "slug": "belmont-3",
                },
                "Bedford": {
                    "id": 8817,
                    "name": "Bedford",
                    "slug": "bedford-2",
                },
                "Bath": {
                    "id": 8816,
                    "name": "Bath",
                    "slug": "bath-3",
                },
                "Bartlett": {
                    "id": 8815,
                    "name": "Bartlett",
                    "slug": "bartlett",
                },
                "Barrington": {
                    "id": 8814,
                    "name": "Barrington",
                    "slug": "barrington",
                },
                "Barnstead": {
                    "id": 8813,
                    "name": "Barnstead",
                    "slug": "barnstead",
                },
                "Auburn": {
                    "id": 8812,
                    "name": "Auburn",
                    "slug": "auburn-3",
                },
                "Atkinson": {
                    "id": 8811,
                    "name": "Atkinson",
                    "slug": "atkinson-2",
                },
                "Ashland": {
                    "id": 8810,
                    "name": "Ashland",
                    "slug": "ashland-3",
                },
                "Antrim": {
                    "id": 8809,
                    "name": "Antrim",
                    "slug": "antrim",
                },
                "Andover": {
                    "id": 8808,
                    "name": "Andover",
                    "slug": "andover-4",
                },
                "Amherst": {
                    "id": 8807,
                    "name": "Amherst",
                    "slug": "amherst-2",
                },
                "Alton": {
                    "id": 8806,
                    "name": "Alton",
                    "slug": "alton-2",
                },
                "Alstead": {
                    "id": 8805,
                    "name": "Alstead",
                    "slug": "alstead",
                },
                "Allenstown": {
                    "id": 8804,
                    "name": "Allenstown",
                    "slug": "allenstown",
                },
                "Alexandria": {
                    "id": 8803,
                    "name": "Alexandria",
                    "slug": "alexandria",
                },
                "Albany": {
                    "id": 8802,
                    "name": "Albany",
                    "slug": "albany",
                },
                "Acworth": {
                    "id": 8801,
                    "name": "Acworth",
                    "slug": "acworth",
                },
            },
            "counties": {},
        },
    },
    "NJ": {
        "id": 60,
        "name": "New Jersey",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Passaic": {
                    "id": 9061,
                    "name": "Passaic",
                    "slug": "passaic",
                },
                "Warren": {
                    "id": 9060,
                    "name": "Warren",
                    "slug": "warren-12",
                },
                "Gloucester": {
                    "id": 9059,
                    "name": "Gloucester",
                    "slug": "gloucester-2",
                },
                "Middlesex": {
                    "id": 9058,
                    "name": "Middlesex",
                    "slug": "middlesex",
                },
                "Hudson": {
                    "id": 9057,
                    "name": "Hudson",
                    "slug": "hudson-4",
                },
                "Union": {
                    "id": 9056,
                    "name": "Union",
                    "slug": "union-12",
                },
                "Sussex": {
                    "id": 9055,
                    "name": "Sussex",
                    "slug": "sussex-2",
                },
                "Salem": {
                    "id": 9054,
                    "name": "Salem",
                    "slug": "salem-4",
                },
                "Morris": {
                    "id": 9053,
                    "name": "Morris",
                    "slug": "morris-3",
                },
                "Cape May": {
                    "id": 9052,
                    "name": "Cape May",
                    "slug": "cape-may",
                },
                "Cumberland": {
                    "id": 9051,
                    "name": "Cumberland",
                    "slug": "cumberland-4",
                },
                "Somerset": {
                    "id": 9050,
                    "name": "Somerset",
                    "slug": "somerset-3",
                },
                "Ocean": {
                    "id": 9049,
                    "name": "Ocean",
                    "slug": "ocean",
                },
                "Monmouth": {
                    "id": 9048,
                    "name": "Monmouth",
                    "slug": "monmouth-2",
                },
                "Mercer": {
                    "id": 9047,
                    "name": "Mercer",
                    "slug": "mercer-5",
                },
                "Burlington": {
                    "id": 9046,
                    "name": "Burlington",
                    "slug": "burlington-3",
                },
                "Atlantic": {
                    "id": 9045,
                    "name": "Atlantic",
                    "slug": "atlantic",
                },
                "Hunterdon": {
                    "id": 9044,
                    "name": "Hunterdon",
                    "slug": "hunterdon",
                },
                "Essex": {
                    "id": 9043,
                    "name": "Essex",
                    "slug": "essex-3",
                },
                "Camden": {
                    "id": 9042,
                    "name": "Camden",
                    "slug": "camden-4",
                },
                "Bergen": {
                    "id": 9041,
                    "name": "Bergen",
                    "slug": "bergen",
                },
            },
        },
    },
    "NM": {
        "id": 61,
        "name": "New Mexico",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Valencia": {
                    "id": 9094,
                    "name": "Valencia",
                    "slug": "valencia",
                },
                "Union": {
                    "id": 9093,
                    "name": "Union",
                    "slug": "union-13",
                },
                "Torrance": {
                    "id": 9092,
                    "name": "Torrance",
                    "slug": "torrance",
                },
                "Taos": {
                    "id": 9091,
                    "name": "Taos",
                    "slug": "taos",
                },
                "Socorro": {
                    "id": 9090,
                    "name": "Socorro",
                    "slug": "socorro",
                },
                "Sierra": {
                    "id": 9089,
                    "name": "Sierra",
                    "slug": "sierra-2",
                },
                "Santa Fe": {
                    "id": 9088,
                    "name": "Santa Fe",
                    "slug": "santa-fe",
                },
                "Sandoval": {
                    "id": 9087,
                    "name": "Sandoval",
                    "slug": "sandoval",
                },
                "San Miguel": {
                    "id": 9086,
                    "name": "San Miguel",
                    "slug": "san-miguel-2",
                },
                "San Juan": {
                    "id": 9085,
                    "name": "San Juan",
                    "slug": "san-juan-2",
                },
                "Roosevelt": {
                    "id": 9084,
                    "name": "Roosevelt",
                    "slug": "roosevelt-2",
                },
                "Rio Arriba": {
                    "id": 9083,
                    "name": "Rio Arriba",
                    "slug": "rio-arriba",
                },
                "Quay": {
                    "id": 9082,
                    "name": "Quay",
                    "slug": "quay",
                },
                "Otero": {
                    "id": 9081,
                    "name": "Otero",
                    "slug": "otero-2",
                },
                "Mora": {
                    "id": 9080,
                    "name": "Mora",
                    "slug": "mora",
                },
                "McKinley": {
                    "id": 9079,
                    "name": "McKinley",
                    "slug": "mckinley",
                },
                "Luna": {
                    "id": 9078,
                    "name": "Luna",
                    "slug": "luna",
                },
                "Los Alamos": {
                    "id": 9077,
                    "name": "Los Alamos",
                    "slug": "los-alamos",
                },
                "Lincoln": {
                    "id": 9076,
                    "name": "Lincoln",
                    "slug": "lincoln-17",
                },
                "Lea": {
                    "id": 9075,
                    "name": "Lea",
                    "slug": "lea",
                },
                "Hidalgo": {
                    "id": 9074,
                    "name": "Hidalgo",
                    "slug": "hidalgo",
                },
                "Harding": {
                    "id": 9073,
                    "name": "Harding",
                    "slug": "harding",
                },
                "Guadalupe": {
                    "id": 9072,
                    "name": "Guadalupe",
                    "slug": "guadalupe",
                },
                "Grant": {
                    "id": 9071,
                    "name": "Grant",
                    "slug": "grant-8",
                },
                "Eddy": {
                    "id": 9070,
                    "name": "Eddy",
                    "slug": "eddy",
                },
                "Doña Ana": {
                    "id": 9069,
                    "name": "Doña Ana",
                    "slug": "dona-ana",
                },
                "De Baca": {
                    "id": 9068,
                    "name": "De Baca",
                    "slug": "de-baca",
                },
                "Curry": {
                    "id": 9067,
                    "name": "Curry",
                    "slug": "curry",
                },
                "Colfax": {
                    "id": 9066,
                    "name": "Colfax",
                    "slug": "colfax-2",
                },
                "Cibola": {
                    "id": 9065,
                    "name": "Cibola",
                    "slug": "cibola",
                },
                "Chaves": {
                    "id": 9064,
                    "name": "Chaves",
                    "slug": "chaves",
                },
                "Catron": {
                    "id": 9063,
                    "name": "Catron",
                    "slug": "catron",
                },
                "Bernalillo": {
                    "id": 9062,
                    "name": "Bernalillo",
                    "slug": "bernalillo",
                },
            },
        },
    },
    "NY": {
        "id": 62,
        "name": "New York",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Richmond": {
                    "id": 11704,
                    "name": "Richmond",
                    "slug": "richmond-staten-island",
                },
                "Kings": {
                    "id": 11703,
                    "name": "Kings",
                    "slug": "kings-brooklyn",
                },
                "Queens": {
                    "id": 11702,
                    "name": "Queens",
                    "slug": "queens",
                },
                "Bronx": {
                    "id": 11701,
                    "name": "Bronx",
                    "slug": "bronx",
                },
                "New York": {
                    "id": 11699,
                    "name": "New York",
                    "slug": "new-york-manhattan",
                },
                "Yates": {
                    "id": 9151,
                    "name": "Yates",
                    "slug": "yates",
                },
                "Madison": {
                    "id": 9150,
                    "name": "Madison",
                    "slug": "madison-18",
                },
                "Suffolk": {
                    "id": 9149,
                    "name": "Suffolk",
                    "slug": "suffolk",
                },
                "Erie": {
                    "id": 9148,
                    "name": "Erie",
                    "slug": "erie",
                },
                "Delaware": {
                    "id": 9147,
                    "name": "Delaware",
                    "slug": "delaware-3",
                },
                "Fulton": {
                    "id": 9146,
                    "name": "Fulton",
                    "slug": "fulton-6",
                },
                "Rensselaer": {
                    "id": 9145,
                    "name": "Rensselaer",
                    "slug": "rensselaer",
                },
                "Albany": {
                    "id": 9144,
                    "name": "Albany",
                    "slug": "albany-2",
                },
                "Wayne": {
                    "id": 9143,
                    "name": "Wayne",
                    "slug": "wayne-10",
                },
                "Rockland": {
                    "id": 9142,
                    "name": "Rockland",
                    "slug": "rockland-3",
                },
                "Cortland": {
                    "id": 9141,
                    "name": "Cortland",
                    "slug": "cortland",
                },
                "Steuben": {
                    "id": 9140,
                    "name": "Steuben",
                    "slug": "steuben-3",
                },
                "Monroe": {
                    "id": 9139,
                    "name": "Monroe",
                    "slug": "monroe-15",
                },
                "Lewis": {
                    "id": 9138,
                    "name": "Lewis",
                    "slug": "lewis-4",
                },
                "Genesee": {
                    "id": 9137,
                    "name": "Genesee",
                    "slug": "genesee",
                },
                "St. Lawrence": {
                    "id": 9136,
                    "name": "St. Lawrence",
                    "slug": "st-lawrence",
                },
                "Tompkins": {
                    "id": 9135,
                    "name": "Tompkins",
                    "slug": "tompkins",
                },
                "Seneca": {
                    "id": 9134,
                    "name": "Seneca",
                    "slug": "seneca",
                },
                "Schoharie": {
                    "id": 9133,
                    "name": "Schoharie",
                    "slug": "schoharie",
                },
                "Schenectady": {
                    "id": 9132,
                    "name": "Schenectady",
                    "slug": "schenectady",
                },
                "Hamilton": {
                    "id": 9131,
                    "name": "Hamilton",
                    "slug": "hamilton-8",
                },
                "Greene": {
                    "id": 9130,
                    "name": "Greene",
                    "slug": "greene-10",
                },
                "Dutchess": {
                    "id": 9129,
                    "name": "Dutchess",
                    "slug": "dutchess",
                },
                "Columbia": {
                    "id": 9128,
                    "name": "Columbia",
                    "slug": "columbia-6",
                },
                "Chemung": {
                    "id": 9127,
                    "name": "Chemung",
                    "slug": "chemung",
                },
                "Cayuga": {
                    "id": 9126,
                    "name": "Cayuga",
                    "slug": "cayuga",
                },
                "Broome": {
                    "id": 9125,
                    "name": "Broome",
                    "slug": "broome",
                },
                "Allegany": {
                    "id": 9124,
                    "name": "Allegany",
                    "slug": "allegany-2",
                },
                "Onondaga": {
                    "id": 9123,
                    "name": "Onondaga",
                    "slug": "onondaga",
                },
                "Montgomery": {
                    "id": 9122,
                    "name": "Montgomery",
                    "slug": "montgomery-13",
                },
                "Livingston": {
                    "id": 9121,
                    "name": "Livingston",
                    "slug": "livingston-5",
                },
                "Franklin": {
                    "id": 9120,
                    "name": "Franklin",
                    "slug": "franklin-19",
                },
                "Wyoming": {
                    "id": 9119,
                    "name": "Wyoming",
                    "slug": "wyoming",
                },
                "Tioga": {
                    "id": 9118,
                    "name": "Tioga",
                    "slug": "tioga",
                },
                "Schuyler": {
                    "id": 9117,
                    "name": "Schuyler",
                    "slug": "schuyler-3",
                },
                "Putnam": {
                    "id": 9116,
                    "name": "Putnam",
                    "slug": "putnam-7",
                },
                "Orleans": {
                    "id": 9115,
                    "name": "Orleans",
                    "slug": "orleans-3",
                },
                "Ontario": {
                    "id": 9114,
                    "name": "Ontario",
                    "slug": "ontario",
                },
                "Warren": {
                    "id": 9113,
                    "name": "Warren",
                    "slug": "warren-13",
                },
                "Nassau": {
                    "id": 9112,
                    "name": "Nassau",
                    "slug": "nassau-2",
                },
                "Chenango": {
                    "id": 9111,
                    "name": "Chenango",
                    "slug": "chenango",
                },
                "Oswego": {
                    "id": 9110,
                    "name": "Oswego",
                    "slug": "oswego",
                },
                "Ulster": {
                    "id": 9109,
                    "name": "Ulster",
                    "slug": "ulster",
                },
                "Orange": {
                    "id": 9108,
                    "name": "Orange",
                    "slug": "orange-7",
                },
                "Cattaraugus": {
                    "id": 9107,
                    "name": "Cattaraugus",
                    "slug": "cattaraugus",
                },
                "Niagara": {
                    "id": 9106,
                    "name": "Niagara",
                    "slug": "niagara",
                },
                "Westchester": {
                    "id": 9105,
                    "name": "Westchester",
                    "slug": "westchester",
                },
                "Sullivan": {
                    "id": 9104,
                    "name": "Sullivan",
                    "slug": "sullivan-5",
                },
                "Essex": {
                    "id": 9103,
                    "name": "Essex",
                    "slug": "essex-4",
                },
                "Washington": {
                    "id": 9102,
                    "name": "Washington",
                    "slug": "washington-23",
                },
                "Saratoga": {
                    "id": 9101,
                    "name": "Saratoga",
                    "slug": "saratoga",
                },
                "Otsego": {
                    "id": 9100,
                    "name": "Otsego",
                    "slug": "otsego",
                },
                "Oneida": {
                    "id": 9099,
                    "name": "Oneida",
                    "slug": "oneida-2",
                },
                "Jefferson": {
                    "id": 9098,
                    "name": "Jefferson",
                    "slug": "jefferson-19",
                },
                "Herkimer": {
                    "id": 9097,
                    "name": "Herkimer",
                    "slug": "herkimer",
                },
                "Clinton": {
                    "id": 9096,
                    "name": "Clinton",
                    "slug": "clinton-9",
                },
                "Chautauqua": {
                    "id": 9095,
                    "name": "Chautauqua",
                    "slug": "chautauqua-2",
                },
            },
        },
    },
    "NC": {
        "id": 63,
        "name": "North Carolina",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Yancey": {
                    "id": 9252,
                    "name": "Yancey",
                    "slug": "yancey",
                },
                "Yadkin": {
                    "id": 9251,
                    "name": "Yadkin",
                    "slug": "yadkin",
                },
                "Wilson": {
                    "id": 9250,
                    "name": "Wilson",
                    "slug": "wilson-2",
                },
                "Wilkes": {
                    "id": 9249,
                    "name": "Wilkes",
                    "slug": "wilkes-2",
                },
                "Wayne": {
                    "id": 9248,
                    "name": "Wayne",
                    "slug": "wayne-11",
                },
                "Watauga": {
                    "id": 9247,
                    "name": "Watauga",
                    "slug": "watauga",
                },
                "Washington": {
                    "id": 9246,
                    "name": "Washington",
                    "slug": "washington-24",
                },
                "Warren": {
                    "id": 9245,
                    "name": "Warren",
                    "slug": "warren-14",
                },
                "Wake": {
                    "id": 9244,
                    "name": "Wake",
                    "slug": "wake",
                },
                "Vance": {
                    "id": 9243,
                    "name": "Vance",
                    "slug": "vance",
                },
                "Union": {
                    "id": 9242,
                    "name": "Union",
                    "slug": "union-14",
                },
                "Tyrrell": {
                    "id": 9241,
                    "name": "Tyrrell",
                    "slug": "tyrrell",
                },
                "Transylvania": {
                    "id": 9240,
                    "name": "Transylvania",
                    "slug": "transylvania",
                },
                "Swain": {
                    "id": 9239,
                    "name": "Swain",
                    "slug": "swain",
                },
                "Surry": {
                    "id": 9238,
                    "name": "Surry",
                    "slug": "surry-3",
                },
                "Stokes": {
                    "id": 9237,
                    "name": "Stokes",
                    "slug": "stokes",
                },
                "Stanly": {
                    "id": 9236,
                    "name": "Stanly",
                    "slug": "stanly",
                },
                "Scotland": {
                    "id": 9235,
                    "name": "Scotland",
                    "slug": "scotland-3",
                },
                "Sampson": {
                    "id": 9234,
                    "name": "Sampson",
                    "slug": "sampson",
                },
                "Rutherford": {
                    "id": 9233,
                    "name": "Rutherford",
                    "slug": "rutherford",
                },
                "Rowan": {
                    "id": 9232,
                    "name": "Rowan",
                    "slug": "rowan-2",
                },
                "Rockingham": {
                    "id": 9231,
                    "name": "Rockingham",
                    "slug": "rockingham",
                },
                "Robeson": {
                    "id": 9230,
                    "name": "Robeson",
                    "slug": "robeson",
                },
                "Richmond": {
                    "id": 9229,
                    "name": "Richmond",
                    "slug": "richmond-5",
                },
                "Randolph": {
                    "id": 9228,
                    "name": "Randolph",
                    "slug": "randolph-10",
                },
                "Polk": {
                    "id": 9227,
                    "name": "Polk",
                    "slug": "polk-8",
                },
                "Pitt": {
                    "id": 9226,
                    "name": "Pitt",
                    "slug": "pitt",
                },
                "Person": {
                    "id": 9225,
                    "name": "Person",
                    "slug": "person",
                },
                "Perquimans": {
                    "id": 9224,
                    "name": "Perquimans",
                    "slug": "perquimans",
                },
                "Pender": {
                    "id": 9223,
                    "name": "Pender",
                    "slug": "pender",
                },
                "Pasquotank": {
                    "id": 9222,
                    "name": "Pasquotank",
                    "slug": "pasquotank",
                },
                "Pamlico": {
                    "id": 9221,
                    "name": "Pamlico",
                    "slug": "pamlico",
                },
                "Orange": {
                    "id": 9220,
                    "name": "Orange",
                    "slug": "orange-8",
                },
                "Onslow": {
                    "id": 9219,
                    "name": "Onslow",
                    "slug": "onslow",
                },
                "Northampton": {
                    "id": 9218,
                    "name": "Northampton",
                    "slug": "northampton-2",
                },
                "New Hanover": {
                    "id": 9217,
                    "name": "New Hanover",
                    "slug": "new-hanover",
                },
                "Nash": {
                    "id": 9216,
                    "name": "Nash",
                    "slug": "nash",
                },
                "Moore": {
                    "id": 9215,
                    "name": "Moore",
                    "slug": "moore",
                },
                "Montgomery": {
                    "id": 9214,
                    "name": "Montgomery",
                    "slug": "montgomery-14",
                },
                "Mitchell": {
                    "id": 9213,
                    "name": "Mitchell",
                    "slug": "mitchell-4",
                },
                "Mecklenburg": {
                    "id": 9212,
                    "name": "Mecklenburg",
                    "slug": "mecklenburg",
                },
                "Martin": {
                    "id": 9211,
                    "name": "Martin",
                    "slug": "martin-5",
                },
                "Madison": {
                    "id": 9210,
                    "name": "Madison",
                    "slug": "madison-19",
                },
                "Macon": {
                    "id": 9209,
                    "name": "Macon",
                    "slug": "macon-5",
                },
                "McDowell": {
                    "id": 9208,
                    "name": "McDowell",
                    "slug": "mcdowell",
                },
                "Lincoln": {
                    "id": 9207,
                    "name": "Lincoln",
                    "slug": "lincoln-18",
                },
                "Lenoir": {
                    "id": 9206,
                    "name": "Lenoir",
                    "slug": "lenoir",
                },
                "Lee": {
                    "id": 9205,
                    "name": "Lee",
                    "slug": "lee-12",
                },
                "Jones": {
                    "id": 9204,
                    "name": "Jones",
                    "slug": "jones-4",
                },
                "Johnston": {
                    "id": 9203,
                    "name": "Johnston",
                    "slug": "johnston",
                },
                "Jackson": {
                    "id": 9202,
                    "name": "Jackson",
                    "slug": "jackson-17",
                },
                "Iredell": {
                    "id": 9201,
                    "name": "Iredell",
                    "slug": "iredell",
                },
                "Hyde": {
                    "id": 9200,
                    "name": "Hyde",
                    "slug": "hyde",
                },
                "Hoke": {
                    "id": 9199,
                    "name": "Hoke",
                    "slug": "hoke",
                },
                "Hertford": {
                    "id": 9198,
                    "name": "Hertford",
                    "slug": "hertford",
                },
                "Henderson": {
                    "id": 9197,
                    "name": "Henderson",
                    "slug": "henderson-3",
                },
                "Haywood": {
                    "id": 9196,
                    "name": "Haywood",
                    "slug": "haywood",
                },
                "Harnett": {
                    "id": 9195,
                    "name": "Harnett",
                    "slug": "harnett",
                },
                "Halifax": {
                    "id": 9194,
                    "name": "Halifax",
                    "slug": "halifax-2",
                },
                "Guilford": {
                    "id": 9193,
                    "name": "Guilford",
                    "slug": "guilford-3",
                },
                "Greene": {
                    "id": 9192,
                    "name": "Greene",
                    "slug": "greene-11",
                },
                "Granville": {
                    "id": 9191,
                    "name": "Granville",
                    "slug": "granville-2",
                },
                "Graham": {
                    "id": 9190,
                    "name": "Graham",
                    "slug": "graham-3",
                },
                "Gates": {
                    "id": 9189,
                    "name": "Gates",
                    "slug": "gates",
                },
                "Gaston": {
                    "id": 9188,
                    "name": "Gaston",
                    "slug": "gaston",
                },
                "Franklin": {
                    "id": 9187,
                    "name": "Franklin",
                    "slug": "franklin-20",
                },
                "Forsyth": {
                    "id": 9186,
                    "name": "Forsyth",
                    "slug": "forsyth-2",
                },
                "Edgecombe": {
                    "id": 9185,
                    "name": "Edgecombe",
                    "slug": "edgecombe",
                },
                "Durham": {
                    "id": 9184,
                    "name": "Durham",
                    "slug": "durham-4",
                },
                "Duplin": {
                    "id": 9183,
                    "name": "Duplin",
                    "slug": "duplin",
                },
                "Davie": {
                    "id": 9182,
                    "name": "Davie",
                    "slug": "davie",
                },
                "Davidson": {
                    "id": 9181,
                    "name": "Davidson",
                    "slug": "davidson",
                },
                "Dare": {
                    "id": 9180,
                    "name": "Dare",
                    "slug": "dare",
                },
                "Currituck": {
                    "id": 9179,
                    "name": "Currituck",
                    "slug": "currituck",
                },
                "Cumberland": {
                    "id": 9178,
                    "name": "Cumberland",
                    "slug": "cumberland-5",
                },
                "Craven": {
                    "id": 9177,
                    "name": "Craven",
                    "slug": "craven",
                },
                "Columbus": {
                    "id": 9176,
                    "name": "Columbus",
                    "slug": "columbus",
                },
                "Cleveland": {
                    "id": 9175,
                    "name": "Cleveland",
                    "slug": "cleveland-2",
                },
                "Clay": {
                    "id": 9174,
                    "name": "Clay",
                    "slug": "clay-14",
                },
                "Chowan": {
                    "id": 9173,
                    "name": "Chowan",
                    "slug": "chowan",
                },
                "Cherokee": {
                    "id": 9172,
                    "name": "Cherokee",
                    "slug": "cherokee-5",
                },
                "Chatham": {
                    "id": 9171,
                    "name": "Chatham",
                    "slug": "chatham-4",
                },
                "Catawba": {
                    "id": 9170,
                    "name": "Catawba",
                    "slug": "catawba",
                },
                "Caswell": {
                    "id": 9169,
                    "name": "Caswell",
                    "slug": "caswell",
                },
                "Carteret": {
                    "id": 9168,
                    "name": "Carteret",
                    "slug": "carteret",
                },
                "Camden": {
                    "id": 9167,
                    "name": "Camden",
                    "slug": "camden-5",
                },
                "Caldwell": {
                    "id": 9166,
                    "name": "Caldwell",
                    "slug": "caldwell-4",
                },
                "Cabarrus": {
                    "id": 9165,
                    "name": "Cabarrus",
                    "slug": "cabarrus",
                },
                "Burke": {
                    "id": 9164,
                    "name": "Burke",
                    "slug": "burke-2",
                },
                "Buncombe": {
                    "id": 9163,
                    "name": "Buncombe",
                    "slug": "buncombe",
                },
                "Brunswick": {
                    "id": 9162,
                    "name": "Brunswick",
                    "slug": "brunswick-2",
                },
                "Bladen": {
                    "id": 9161,
                    "name": "Bladen",
                    "slug": "bladen",
                },
                "Bertie": {
                    "id": 9160,
                    "name": "Bertie",
                    "slug": "bertie",
                },
                "Beaufort": {
                    "id": 9159,
                    "name": "Beaufort",
                    "slug": "beaufort",
                },
                "Avery": {
                    "id": 9158,
                    "name": "Avery",
                    "slug": "avery",
                },
                "Ashe": {
                    "id": 9157,
                    "name": "Ashe",
                    "slug": "ashe",
                },
                "Anson": {
                    "id": 9156,
                    "name": "Anson",
                    "slug": "anson-2",
                },
                "Alleghany": {
                    "id": 9155,
                    "name": "Alleghany",
                    "slug": "alleghany",
                },
                "Alexander": {
                    "id": 9154,
                    "name": "Alexander",
                    "slug": "alexander-2",
                },
                "Alamance": {
                    "id": 9153,
                    "name": "Alamance",
                    "slug": "alamance",
                },
            },
        },
    },
    "ND": {
        "id": 64,
        "name": "North Dakota",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Sioux": {
                    "id": 9305,
                    "name": "Sioux",
                    "slug": "sioux-3",
                },
                "Ramsey": {
                    "id": 9304,
                    "name": "Ramsey",
                    "slug": "ramsey-2",
                },
                "Ransom": {
                    "id": 9303,
                    "name": "Ransom",
                    "slug": "ransom",
                },
                "Sheridan": {
                    "id": 9302,
                    "name": "Sheridan",
                    "slug": "sheridan-4",
                },
                "Mercer": {
                    "id": 9301,
                    "name": "Mercer",
                    "slug": "mercer-6",
                },
                "Emmons": {
                    "id": 9300,
                    "name": "Emmons",
                    "slug": "emmons",
                },
                "Steele": {
                    "id": 9299,
                    "name": "Steele",
                    "slug": "steele-2",
                },
                "Stutsman": {
                    "id": 9298,
                    "name": "Stutsman",
                    "slug": "stutsman",
                },
                "Renville": {
                    "id": 9297,
                    "name": "Renville",
                    "slug": "renville-2",
                },
                "Foster": {
                    "id": 9296,
                    "name": "Foster",
                    "slug": "foster",
                },
                "Dunn": {
                    "id": 9295,
                    "name": "Dunn",
                    "slug": "dunn",
                },
                "Pierce": {
                    "id": 9294,
                    "name": "Pierce",
                    "slug": "pierce-3",
                },
                "Hettinger": {
                    "id": 9293,
                    "name": "Hettinger",
                    "slug": "hettinger",
                },
                "Burke": {
                    "id": 9292,
                    "name": "Burke",
                    "slug": "burke-3",
                },
                "Rolette": {
                    "id": 9291,
                    "name": "Rolette",
                    "slug": "rolette",
                },
                "Slope": {
                    "id": 9290,
                    "name": "Slope",
                    "slug": "slope",
                },
                "Sargent": {
                    "id": 9289,
                    "name": "Sargent",
                    "slug": "sargent",
                },
                "Nelson": {
                    "id": 9288,
                    "name": "Nelson",
                    "slug": "nelson-3",
                },
                "McHenry": {
                    "id": 9287,
                    "name": "McHenry",
                    "slug": "mchenry-2",
                },
                "Logan": {
                    "id": 9286,
                    "name": "Logan",
                    "slug": "logan-7",
                },
                "Kidder": {
                    "id": 9285,
                    "name": "Kidder",
                    "slug": "kidder",
                },
                "Griggs": {
                    "id": 9284,
                    "name": "Griggs",
                    "slug": "griggs",
                },
                "Golden Valley": {
                    "id": 9283,
                    "name": "Golden Valley",
                    "slug": "golden-valley-2",
                },
                "Dickey": {
                    "id": 9282,
                    "name": "Dickey",
                    "slug": "dickey",
                },
                "Burleigh": {
                    "id": 9281,
                    "name": "Burleigh",
                    "slug": "burleigh",
                },
                "Bowman": {
                    "id": 9280,
                    "name": "Bowman",
                    "slug": "bowman",
                },
                "Bottineau": {
                    "id": 9279,
                    "name": "Bottineau",
                    "slug": "bottineau",
                },
                "Adams": {
                    "id": 9278,
                    "name": "Adams",
                    "slug": "adams-9",
                },
                "Wells": {
                    "id": 9277,
                    "name": "Wells",
                    "slug": "wells-3",
                },
                "Ward": {
                    "id": 9276,
                    "name": "Ward",
                    "slug": "ward",
                },
                "Towner": {
                    "id": 9275,
                    "name": "Towner",
                    "slug": "towner",
                },
                "Stark": {
                    "id": 9274,
                    "name": "Stark",
                    "slug": "stark-3",
                },
                "Oliver": {
                    "id": 9273,
                    "name": "Oliver",
                    "slug": "oliver",
                },
                "Mountrail": {
                    "id": 9272,
                    "name": "Mountrail",
                    "slug": "mountrail",
                },
                "McIntosh": {
                    "id": 9271,
                    "name": "McIntosh",
                    "slug": "mcintosh-2",
                },
                "LaMoure": {
                    "id": 9270,
                    "name": "LaMoure",
                    "slug": "lamoure",
                },
                "Eddy": {
                    "id": 9269,
                    "name": "Eddy",
                    "slug": "eddy-2",
                },
                "Divide": {
                    "id": 9268,
                    "name": "Divide",
                    "slug": "divide",
                },
                "Billings": {
                    "id": 9267,
                    "name": "Billings",
                    "slug": "billings",
                },
                "Grand Forks": {
                    "id": 9266,
                    "name": "Grand Forks",
                    "slug": "grand-forks",
                },
                "McLean": {
                    "id": 9265,
                    "name": "McLean",
                    "slug": "mclean-3",
                },
                "Barnes": {
                    "id": 9264,
                    "name": "Barnes",
                    "slug": "barnes",
                },
                "Traill": {
                    "id": 9263,
                    "name": "Traill",
                    "slug": "traill",
                },
                "Richland": {
                    "id": 9262,
                    "name": "Richland",
                    "slug": "richland-4",
                },
                "Pembina": {
                    "id": 9261,
                    "name": "Pembina",
                    "slug": "pembina",
                },
                "Morton": {
                    "id": 9260,
                    "name": "Morton",
                    "slug": "morton-2",
                },
                "McKenzie": {
                    "id": 9259,
                    "name": "McKenzie",
                    "slug": "mckenzie",
                },
                "Cavalier": {
                    "id": 9258,
                    "name": "Cavalier",
                    "slug": "cavalier",
                },
                "Benson": {
                    "id": 9257,
                    "name": "Benson",
                    "slug": "benson",
                },
                "Williams": {
                    "id": 9256,
                    "name": "Williams",
                    "slug": "williams",
                },
                "Walsh": {
                    "id": 9255,
                    "name": "Walsh",
                    "slug": "walsh",
                },
                "Grant": {
                    "id": 9254,
                    "name": "Grant",
                    "slug": "grant-9",
                },
                "Cass": {
                    "id": 9253,
                    "name": "Cass",
                    "slug": "cass-7",
                },
            },
        },
    },
    "OH": {
        "id": 65,
        "name": "Ohio",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Wyandot": {
                    "id": 9393,
                    "name": "Wyandot",
                    "slug": "wyandot",
                },
                "Wood": {
                    "id": 9392,
                    "name": "Wood",
                    "slug": "wood",
                },
                "Williams": {
                    "id": 9391,
                    "name": "Williams",
                    "slug": "williams-2",
                },
                "Wayne": {
                    "id": 9390,
                    "name": "Wayne",
                    "slug": "wayne-12",
                },
                "Washington": {
                    "id": 9389,
                    "name": "Washington",
                    "slug": "washington-25",
                },
                "Warren": {
                    "id": 9388,
                    "name": "Warren",
                    "slug": "warren-15",
                },
                "Vinton": {
                    "id": 9387,
                    "name": "Vinton",
                    "slug": "vinton",
                },
                "Van Wert": {
                    "id": 9386,
                    "name": "Van Wert",
                    "slug": "van-wert",
                },
                "Union": {
                    "id": 9385,
                    "name": "Union",
                    "slug": "union-15",
                },
                "Tuscarawas": {
                    "id": 9384,
                    "name": "Tuscarawas",
                    "slug": "tuscarawas",
                },
                "Trumbull": {
                    "id": 9383,
                    "name": "Trumbull",
                    "slug": "trumbull-2",
                },
                "Summit": {
                    "id": 9382,
                    "name": "Summit",
                    "slug": "summit-2",
                },
                "Stark": {
                    "id": 9381,
                    "name": "Stark",
                    "slug": "stark-4",
                },
                "Shelby": {
                    "id": 9380,
                    "name": "Shelby",
                    "slug": "shelby-7",
                },
                "Seneca": {
                    "id": 9379,
                    "name": "Seneca",
                    "slug": "seneca-2",
                },
                "Scioto": {
                    "id": 9378,
                    "name": "Scioto",
                    "slug": "scioto",
                },
                "Sandusky": {
                    "id": 9377,
                    "name": "Sandusky",
                    "slug": "sandusky",
                },
                "Ross": {
                    "id": 9376,
                    "name": "Ross",
                    "slug": "ross",
                },
                "Richland": {
                    "id": 9375,
                    "name": "Richland",
                    "slug": "richland-5",
                },
                "Putnam": {
                    "id": 9374,
                    "name": "Putnam",
                    "slug": "putnam-8",
                },
                "Preble": {
                    "id": 9373,
                    "name": "Preble",
                    "slug": "preble",
                },
                "Portage": {
                    "id": 9372,
                    "name": "Portage",
                    "slug": "portage",
                },
                "Pike": {
                    "id": 9371,
                    "name": "Pike",
                    "slug": "pike-9",
                },
                "Pickaway": {
                    "id": 9370,
                    "name": "Pickaway",
                    "slug": "pickaway",
                },
                "Perry": {
                    "id": 9369,
                    "name": "Perry",
                    "slug": "perry-9",
                },
                "Paulding": {
                    "id": 9368,
                    "name": "Paulding",
                    "slug": "paulding-2",
                },
                "Ottawa": {
                    "id": 9367,
                    "name": "Ottawa",
                    "slug": "ottawa-2",
                },
                "Noble": {
                    "id": 9366,
                    "name": "Noble",
                    "slug": "noble-2",
                },
                "Muskingum": {
                    "id": 9365,
                    "name": "Muskingum",
                    "slug": "muskingum",
                },
                "Morrow": {
                    "id": 9364,
                    "name": "Morrow",
                    "slug": "morrow",
                },
                "Morgan": {
                    "id": 9363,
                    "name": "Morgan",
                    "slug": "morgan-8",
                },
                "Montgomery": {
                    "id": 9362,
                    "name": "Montgomery",
                    "slug": "montgomery-15",
                },
                "Monroe": {
                    "id": 9361,
                    "name": "Monroe",
                    "slug": "monroe-16",
                },
                "Miami": {
                    "id": 9360,
                    "name": "Miami",
                    "slug": "miami-3",
                },
                "Mercer": {
                    "id": 9359,
                    "name": "Mercer",
                    "slug": "mercer-7",
                },
                "Meigs": {
                    "id": 9358,
                    "name": "Meigs",
                    "slug": "meigs",
                },
                "Medina": {
                    "id": 9357,
                    "name": "Medina",
                    "slug": "medina",
                },
                "Marion": {
                    "id": 9356,
                    "name": "Marion",
                    "slug": "marion-13",
                },
                "Mahoning": {
                    "id": 9355,
                    "name": "Mahoning",
                    "slug": "mahoning",
                },
                "Madison": {
                    "id": 9354,
                    "name": "Madison",
                    "slug": "madison-20",
                },
                "Lucas": {
                    "id": 9353,
                    "name": "Lucas",
                    "slug": "lucas-2",
                },
                "Lorain": {
                    "id": 9352,
                    "name": "Lorain",
                    "slug": "lorain",
                },
                "Logan": {
                    "id": 9351,
                    "name": "Logan",
                    "slug": "logan-8",
                },
                "Licking": {
                    "id": 9350,
                    "name": "Licking",
                    "slug": "licking",
                },
                "Lawrence": {
                    "id": 9349,
                    "name": "Lawrence",
                    "slug": "lawrence-9",
                },
                "Lake": {
                    "id": 9348,
                    "name": "Lake",
                    "slug": "lake-8",
                },
                "Knox": {
                    "id": 9347,
                    "name": "Knox",
                    "slug": "knox-7",
                },
                "Jefferson": {
                    "id": 9346,
                    "name": "Jefferson",
                    "slug": "jefferson-20",
                },
                "Jackson": {
                    "id": 9345,
                    "name": "Jackson",
                    "slug": "jackson-18",
                },
                "Huron": {
                    "id": 9344,
                    "name": "Huron",
                    "slug": "huron",
                },
                "Holmes": {
                    "id": 9343,
                    "name": "Holmes",
                    "slug": "holmes-3",
                },
                "Hocking": {
                    "id": 9342,
                    "name": "Hocking",
                    "slug": "hocking",
                },
                "Highland": {
                    "id": 9341,
                    "name": "Highland",
                    "slug": "highland",
                },
                "Henry": {
                    "id": 9340,
                    "name": "Henry",
                    "slug": "henry-8",
                },
                "Harrison": {
                    "id": 9339,
                    "name": "Harrison",
                    "slug": "harrison-7",
                },
                "Hardin": {
                    "id": 9338,
                    "name": "Hardin",
                    "slug": "hardin-4",
                },
                "Hancock": {
                    "id": 9337,
                    "name": "Hancock",
                    "slug": "hancock-10",
                },
                "Hamilton": {
                    "id": 9336,
                    "name": "Hamilton",
                    "slug": "hamilton-9",
                },
                "Guernsey": {
                    "id": 9335,
                    "name": "Guernsey",
                    "slug": "guernsey",
                },
                "Greene": {
                    "id": 9334,
                    "name": "Greene",
                    "slug": "greene-12",
                },
                "Geauga": {
                    "id": 9333,
                    "name": "Geauga",
                    "slug": "geauga",
                },
                "Gallia": {
                    "id": 9332,
                    "name": "Gallia",
                    "slug": "gallia",
                },
                "Fulton": {
                    "id": 9331,
                    "name": "Fulton",
                    "slug": "fulton-7",
                },
                "Franklin": {
                    "id": 9330,
                    "name": "Franklin",
                    "slug": "franklin-21",
                },
                "Fayette": {
                    "id": 9329,
                    "name": "Fayette",
                    "slug": "fayette-8",
                },
                "Fairfield": {
                    "id": 9328,
                    "name": "Fairfield",
                    "slug": "fairfield-3",
                },
                "Erie": {
                    "id": 9327,
                    "name": "Erie",
                    "slug": "erie-2",
                },
                "Delaware": {
                    "id": 9326,
                    "name": "Delaware",
                    "slug": "delaware-4",
                },
                "Defiance": {
                    "id": 9325,
                    "name": "Defiance",
                    "slug": "defiance",
                },
                "Darke": {
                    "id": 9324,
                    "name": "Darke",
                    "slug": "darke",
                },
                "Cuyahoga": {
                    "id": 9323,
                    "name": "Cuyahoga",
                    "slug": "cuyahoga",
                },
                "Crawford": {
                    "id": 9322,
                    "name": "Crawford",
                    "slug": "crawford-8",
                },
                "Coshocton": {
                    "id": 9321,
                    "name": "Coshocton",
                    "slug": "coshocton",
                },
                "Columbiana": {
                    "id": 9320,
                    "name": "Columbiana",
                    "slug": "columbiana",
                },
                "Clinton": {
                    "id": 9319,
                    "name": "Clinton",
                    "slug": "clinton-10",
                },
                "Clermont": {
                    "id": 9318,
                    "name": "Clermont",
                    "slug": "clermont",
                },
                "Clark": {
                    "id": 9317,
                    "name": "Clark",
                    "slug": "clark-9",
                },
                "Champaign": {
                    "id": 9316,
                    "name": "Champaign",
                    "slug": "champaign-2",
                },
                "Carroll": {
                    "id": 9315,
                    "name": "Carroll",
                    "slug": "carroll-11",
                },
                "Butler": {
                    "id": 9314,
                    "name": "Butler",
                    "slug": "butler-7",
                },
                "Brown": {
                    "id": 9313,
                    "name": "Brown",
                    "slug": "brown-6",
                },
                "Belmont": {
                    "id": 9312,
                    "name": "Belmont",
                    "slug": "belmont-4",
                },
                "Auglaize": {
                    "id": 9311,
                    "name": "Auglaize",
                    "slug": "auglaize",
                },
                "Athens": {
                    "id": 9310,
                    "name": "Athens",
                    "slug": "athens-2",
                },
                "Ashtabula": {
                    "id": 9309,
                    "name": "Ashtabula",
                    "slug": "ashtabula",
                },
                "Ashland": {
                    "id": 9308,
                    "name": "Ashland",
                    "slug": "ashland-4",
                },
                "Allen": {
                    "id": 9307,
                    "name": "Allen",
                    "slug": "allen-5",
                },
                "Adams": {
                    "id": 9306,
                    "name": "Adams",
                    "slug": "adams-10",
                },
            },
        },
    },
    "OK": {
        "id": 66,
        "name": "Oklahoma",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Le Flore": {
                    "id": 9470,
                    "name": "Le Flore",
                    "slug": "le-flore",
                },
                "Washington": {
                    "id": 9469,
                    "name": "Washington",
                    "slug": "washington-26",
                },
                "Hughes": {
                    "id": 9468,
                    "name": "Hughes",
                    "slug": "hughes",
                },
                "Coal": {
                    "id": 9467,
                    "name": "Coal",
                    "slug": "coal",
                },
                "Cimarron": {
                    "id": 9466,
                    "name": "Cimarron",
                    "slug": "cimarron",
                },
                "Grady": {
                    "id": 9465,
                    "name": "Grady",
                    "slug": "grady-2",
                },
                "Mayes": {
                    "id": 9464,
                    "name": "Mayes",
                    "slug": "mayes",
                },
                "Garvin": {
                    "id": 9463,
                    "name": "Garvin",
                    "slug": "garvin",
                },
                "Blaine": {
                    "id": 9462,
                    "name": "Blaine",
                    "slug": "blaine-5",
                },
                "Texas": {
                    "id": 9461,
                    "name": "Texas",
                    "slug": "texas-2",
                },
                "Murray": {
                    "id": 9460,
                    "name": "Murray",
                    "slug": "murray-3",
                },
                "Caddo": {
                    "id": 9459,
                    "name": "Caddo",
                    "slug": "caddo-2",
                },
                "Stephens": {
                    "id": 9458,
                    "name": "Stephens",
                    "slug": "stephens-2",
                },
                "Logan": {
                    "id": 9457,
                    "name": "Logan",
                    "slug": "logan-9",
                },
                "Harper": {
                    "id": 9456,
                    "name": "Harper",
                    "slug": "harper-2",
                },
                "Alfalfa": {
                    "id": 9455,
                    "name": "Alfalfa",
                    "slug": "alfalfa",
                },
                "Oklahoma": {
                    "id": 9454,
                    "name": "Oklahoma",
                    "slug": "oklahoma",
                },
                "Latimer": {
                    "id": 9453,
                    "name": "Latimer",
                    "slug": "latimer",
                },
                "Washita": {
                    "id": 9452,
                    "name": "Washita",
                    "slug": "washita",
                },
                "Tulsa": {
                    "id": 9451,
                    "name": "Tulsa",
                    "slug": "tulsa",
                },
                "Roger Mills": {
                    "id": 9450,
                    "name": "Roger Mills",
                    "slug": "roger-mills",
                },
                "Pontotoc": {
                    "id": 9449,
                    "name": "Pontotoc",
                    "slug": "pontotoc-2",
                },
                "Payne": {
                    "id": 9448,
                    "name": "Payne",
                    "slug": "payne",
                },
                "Ottawa": {
                    "id": 9447,
                    "name": "Ottawa",
                    "slug": "ottawa-3",
                },
                "Okmulgee": {
                    "id": 9446,
                    "name": "Okmulgee",
                    "slug": "okmulgee",
                },
                "Nowata": {
                    "id": 9445,
                    "name": "Nowata",
                    "slug": "nowata",
                },
                "McIntosh": {
                    "id": 9444,
                    "name": "McIntosh",
                    "slug": "mcintosh-3",
                },
                "Love": {
                    "id": 9443,
                    "name": "Love",
                    "slug": "love",
                },
                "Lincoln": {
                    "id": 9442,
                    "name": "Lincoln",
                    "slug": "lincoln-19",
                },
                "Kay": {
                    "id": 9441,
                    "name": "Kay",
                    "slug": "kay",
                },
                "Haskell": {
                    "id": 9440,
                    "name": "Haskell",
                    "slug": "haskell-2",
                },
                "Woodward": {
                    "id": 9439,
                    "name": "Woodward",
                    "slug": "woodward",
                },
                "Grant": {
                    "id": 9438,
                    "name": "Grant",
                    "slug": "grant-10",
                },
                "Garfield": {
                    "id": 9437,
                    "name": "Garfield",
                    "slug": "garfield-4",
                },
                "Dewey": {
                    "id": 9436,
                    "name": "Dewey",
                    "slug": "dewey",
                },
                "Custer": {
                    "id": 9435,
                    "name": "Custer",
                    "slug": "custer-5",
                },
                "Creek": {
                    "id": 9434,
                    "name": "Creek",
                    "slug": "creek",
                },
                "Cotton": {
                    "id": 9433,
                    "name": "Cotton",
                    "slug": "cotton",
                },
                "Carter": {
                    "id": 9432,
                    "name": "Carter",
                    "slug": "carter-4",
                },
                "Beckham": {
                    "id": 9431,
                    "name": "Beckham",
                    "slug": "beckham",
                },
                "Atoka": {
                    "id": 9430,
                    "name": "Atoka",
                    "slug": "atoka",
                },
                "Adair": {
                    "id": 9429,
                    "name": "Adair",
                    "slug": "adair-4",
                },
                "Woods": {
                    "id": 9428,
                    "name": "Woods",
                    "slug": "woods",
                },
                "Rogers": {
                    "id": 9427,
                    "name": "Rogers",
                    "slug": "rogers",
                },
                "Pushmataha": {
                    "id": 9426,
                    "name": "Pushmataha",
                    "slug": "pushmataha",
                },
                "Pittsburg": {
                    "id": 9425,
                    "name": "Pittsburg",
                    "slug": "pittsburg-2",
                },
                "Okfuskee": {
                    "id": 9424,
                    "name": "Okfuskee",
                    "slug": "okfuskee",
                },
                "Noble": {
                    "id": 9423,
                    "name": "Noble",
                    "slug": "noble-3",
                },
                "Major": {
                    "id": 9422,
                    "name": "Major",
                    "slug": "major",
                },
                "Johnston": {
                    "id": 9421,
                    "name": "Johnston",
                    "slug": "johnston-2",
                },
                "Ellis": {
                    "id": 9420,
                    "name": "Ellis",
                    "slug": "ellis-2",
                },
                "Delaware": {
                    "id": 9419,
                    "name": "Delaware",
                    "slug": "delaware-5",
                },
                "Craig": {
                    "id": 9418,
                    "name": "Craig",
                    "slug": "craig",
                },
                "Comanche": {
                    "id": 9417,
                    "name": "Comanche",
                    "slug": "comanche-2",
                },
                "Cherokee": {
                    "id": 9416,
                    "name": "Cherokee",
                    "slug": "cherokee-6",
                },
                "Canadian": {
                    "id": 9415,
                    "name": "Canadian",
                    "slug": "canadian",
                },
                "Beaver": {
                    "id": 9414,
                    "name": "Beaver",
                    "slug": "beaver",
                },
                "Muskogee": {
                    "id": 9413,
                    "name": "Muskogee",
                    "slug": "muskogee",
                },
                "Pawnee": {
                    "id": 9412,
                    "name": "Pawnee",
                    "slug": "pawnee-3",
                },
                "Greer": {
                    "id": 9411,
                    "name": "Greer",
                    "slug": "greer",
                },
                "Choctaw": {
                    "id": 9410,
                    "name": "Choctaw",
                    "slug": "choctaw-3",
                },
                "Tillman": {
                    "id": 9409,
                    "name": "Tillman",
                    "slug": "tillman",
                },
                "Osage": {
                    "id": 9408,
                    "name": "Osage",
                    "slug": "osage-3",
                },
                "McCurtain": {
                    "id": 9407,
                    "name": "McCurtain",
                    "slug": "mccurtain",
                },
                "Seminole": {
                    "id": 9406,
                    "name": "Seminole",
                    "slug": "seminole-3",
                },
                "Sequoyah": {
                    "id": 9405,
                    "name": "Sequoyah",
                    "slug": "sequoyah",
                },
                "Pottawatomie": {
                    "id": 9404,
                    "name": "Pottawatomie",
                    "slug": "pottawatomie-2",
                },
                "Marshall": {
                    "id": 9403,
                    "name": "Marshall",
                    "slug": "marshall-9",
                },
                "McClain": {
                    "id": 9402,
                    "name": "McClain",
                    "slug": "mcclain",
                },
                "Kiowa": {
                    "id": 9401,
                    "name": "Kiowa",
                    "slug": "kiowa-3",
                },
                "Jefferson": {
                    "id": 9400,
                    "name": "Jefferson",
                    "slug": "jefferson-21",
                },
                "Harmon": {
                    "id": 9399,
                    "name": "Harmon",
                    "slug": "harmon",
                },
                "Cleveland": {
                    "id": 9398,
                    "name": "Cleveland",
                    "slug": "cleveland-3",
                },
                "Bryan": {
                    "id": 9397,
                    "name": "Bryan",
                    "slug": "bryan-2",
                },
                "Wagoner": {
                    "id": 9396,
                    "name": "Wagoner",
                    "slug": "wagoner",
                },
                "Kingfisher": {
                    "id": 9395,
                    "name": "Kingfisher",
                    "slug": "kingfisher",
                },
                "Jackson": {
                    "id": 9394,
                    "name": "Jackson",
                    "slug": "jackson-19",
                },
            },
        },
    },
    "OR": {
        "id": 67,
        "name": "Oregon",
        "has_all_mail_elections": true,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Wasco": {
                    "id": 9506,
                    "name": "Wasco",
                    "slug": "wasco",
                },
                "Sherman": {
                    "id": 9505,
                    "name": "Sherman",
                    "slug": "sherman-5",
                },
                "Union": {
                    "id": 9504,
                    "name": "Union",
                    "slug": "union-16",
                },
                "Josephine": {
                    "id": 9503,
                    "name": "Josephine",
                    "slug": "josephine",
                },
                "Clackamas": {
                    "id": 9502,
                    "name": "Clackamas",
                    "slug": "clackamas",
                },
                "Washington": {
                    "id": 9501,
                    "name": "Washington",
                    "slug": "washington-27",
                },
                "Crook": {
                    "id": 9500,
                    "name": "Crook",
                    "slug": "crook",
                },
                "Tillamook": {
                    "id": 9499,
                    "name": "Tillamook",
                    "slug": "tillamook",
                },
                "Lake": {
                    "id": 9498,
                    "name": "Lake",
                    "slug": "lake-9",
                },
                "Wheeler": {
                    "id": 9497,
                    "name": "Wheeler",
                    "slug": "wheeler-3",
                },
                "Wallowa": {
                    "id": 9496,
                    "name": "Wallowa",
                    "slug": "wallowa",
                },
                "Polk": {
                    "id": 9495,
                    "name": "Polk",
                    "slug": "polk-9",
                },
                "Lincoln": {
                    "id": 9494,
                    "name": "Lincoln",
                    "slug": "lincoln-20",
                },
                "Jackson": {
                    "id": 9493,
                    "name": "Jackson",
                    "slug": "jackson-20",
                },
                "Yamhill": {
                    "id": 9492,
                    "name": "Yamhill",
                    "slug": "yamhill",
                },
                "Columbia": {
                    "id": 9491,
                    "name": "Columbia",
                    "slug": "columbia-7",
                },
                "Umatilla": {
                    "id": 9490,
                    "name": "Umatilla",
                    "slug": "umatilla",
                },
                "Morrow": {
                    "id": 9489,
                    "name": "Morrow",
                    "slug": "morrow-2",
                },
                "Hood River": {
                    "id": 9488,
                    "name": "Hood River",
                    "slug": "hood-river",
                },
                "Harney": {
                    "id": 9487,
                    "name": "Harney",
                    "slug": "harney",
                },
                "Coos": {
                    "id": 9486,
                    "name": "Coos",
                    "slug": "coos",
                },
                "Grant": {
                    "id": 9485,
                    "name": "Grant",
                    "slug": "grant-11",
                },
                "Marion": {
                    "id": 9484,
                    "name": "Marion",
                    "slug": "marion-14",
                },
                "Jefferson": {
                    "id": 9483,
                    "name": "Jefferson",
                    "slug": "jefferson-22",
                },
                "Benton": {
                    "id": 9482,
                    "name": "Benton",
                    "slug": "benton-9",
                },
                "Curry": {
                    "id": 9481,
                    "name": "Curry",
                    "slug": "curry-2",
                },
                "Douglas": {
                    "id": 9480,
                    "name": "Douglas",
                    "slug": "douglas-10",
                },
                "Deschutes": {
                    "id": 9479,
                    "name": "Deschutes",
                    "slug": "deschutes",
                },
                "Clatsop": {
                    "id": 9478,
                    "name": "Clatsop",
                    "slug": "clatsop",
                },
                "Multnomah": {
                    "id": 9477,
                    "name": "Multnomah",
                    "slug": "multnomah",
                },
                "Malheur": {
                    "id": 9476,
                    "name": "Malheur",
                    "slug": "malheur",
                },
                "Linn": {
                    "id": 9475,
                    "name": "Linn",
                    "slug": "linn-4",
                },
                "Lane": {
                    "id": 9474,
                    "name": "Lane",
                    "slug": "lane-2",
                },
                "Klamath": {
                    "id": 9473,
                    "name": "Klamath",
                    "slug": "klamath",
                },
                "Gilliam": {
                    "id": 9472,
                    "name": "Gilliam",
                    "slug": "gilliam",
                },
                "Baker": {
                    "id": 9471,
                    "name": "Baker",
                    "slug": "baker-3",
                },
            },
        },
    },
    "PA": {
        "id": 68,
        "name": "Pennsylvania",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Pike": {
                    "id": 9573,
                    "name": "Pike",
                    "slug": "pike-10",
                },
                "Erie": {
                    "id": 9572,
                    "name": "Erie",
                    "slug": "erie-3",
                },
                "Northampton": {
                    "id": 9571,
                    "name": "Northampton",
                    "slug": "northampton-3",
                },
                "Centre": {
                    "id": 9570,
                    "name": "Centre",
                    "slug": "centre",
                },
                "Lebanon": {
                    "id": 9569,
                    "name": "Lebanon",
                    "slug": "lebanon-4",
                },
                "Somerset": {
                    "id": 9568,
                    "name": "Somerset",
                    "slug": "somerset-4",
                },
                "Wyoming": {
                    "id": 9567,
                    "name": "Wyoming",
                    "slug": "wyoming-2",
                },
                "Montour": {
                    "id": 9566,
                    "name": "Montour",
                    "slug": "montour",
                },
                "Fulton": {
                    "id": 9565,
                    "name": "Fulton",
                    "slug": "fulton-8",
                },
                "Snyder": {
                    "id": 9564,
                    "name": "Snyder",
                    "slug": "snyder",
                },
                "Mercer": {
                    "id": 9563,
                    "name": "Mercer",
                    "slug": "mercer-8",
                },
                "Mifflin": {
                    "id": 9562,
                    "name": "Mifflin",
                    "slug": "mifflin",
                },
                "Crawford": {
                    "id": 9561,
                    "name": "Crawford",
                    "slug": "crawford-9",
                },
                "Lehigh": {
                    "id": 9560,
                    "name": "Lehigh",
                    "slug": "lehigh",
                },
                "Carbon": {
                    "id": 9559,
                    "name": "Carbon",
                    "slug": "carbon-2",
                },
                "Sullivan": {
                    "id": 9558,
                    "name": "Sullivan",
                    "slug": "sullivan-6",
                },
                "Bradford": {
                    "id": 9557,
                    "name": "Bradford",
                    "slug": "bradford-4",
                },
                "Warren": {
                    "id": 9556,
                    "name": "Warren",
                    "slug": "warren-16",
                },
                "Union": {
                    "id": 9555,
                    "name": "Union",
                    "slug": "union-17",
                },
                "Tioga": {
                    "id": 9554,
                    "name": "Tioga",
                    "slug": "tioga-2",
                },
                "Schuylkill": {
                    "id": 9553,
                    "name": "Schuylkill",
                    "slug": "schuylkill",
                },
                "Lycoming": {
                    "id": 9552,
                    "name": "Lycoming",
                    "slug": "lycoming",
                },
                "Luzerne": {
                    "id": 9551,
                    "name": "Luzerne",
                    "slug": "luzerne",
                },
                "Lackawanna": {
                    "id": 9550,
                    "name": "Lackawanna",
                    "slug": "lackawanna",
                },
                "Jefferson": {
                    "id": 9549,
                    "name": "Jefferson",
                    "slug": "jefferson-23",
                },
                "Elk": {
                    "id": 9548,
                    "name": "Elk",
                    "slug": "elk-2",
                },
                "Columbia": {
                    "id": 9547,
                    "name": "Columbia",
                    "slug": "columbia-8",
                },
                "Cambria": {
                    "id": 9546,
                    "name": "Cambria",
                    "slug": "cambria",
                },
                "Blair": {
                    "id": 9545,
                    "name": "Blair",
                    "slug": "blair",
                },
                "Bedford": {
                    "id": 9544,
                    "name": "Bedford",
                    "slug": "bedford-3",
                },
                "Beaver": {
                    "id": 9543,
                    "name": "Beaver",
                    "slug": "beaver-2",
                },
                "Venango": {
                    "id": 9542,
                    "name": "Venango",
                    "slug": "venango",
                },
                "Susquehanna": {
                    "id": 9541,
                    "name": "Susquehanna",
                    "slug": "susquehanna",
                },
                "Potter": {
                    "id": 9540,
                    "name": "Potter",
                    "slug": "potter",
                },
                "McKean": {
                    "id": 9539,
                    "name": "McKean",
                    "slug": "mckean",
                },
                "Lawrence": {
                    "id": 9538,
                    "name": "Lawrence",
                    "slug": "lawrence-10",
                },
                "Forest": {
                    "id": 9537,
                    "name": "Forest",
                    "slug": "forest",
                },
                "Butler": {
                    "id": 9536,
                    "name": "Butler",
                    "slug": "butler-8",
                },
                "Berks": {
                    "id": 9535,
                    "name": "Berks",
                    "slug": "berks",
                },
                "Adams": {
                    "id": 9534,
                    "name": "Adams",
                    "slug": "adams-11",
                },
                "Northumberland": {
                    "id": 9533,
                    "name": "Northumberland",
                    "slug": "northumberland-2",
                },
                "Dauphin": {
                    "id": 9532,
                    "name": "Dauphin",
                    "slug": "dauphin",
                },
                "Bucks": {
                    "id": 9531,
                    "name": "Bucks",
                    "slug": "bucks",
                },
                "Washington": {
                    "id": 9530,
                    "name": "Washington",
                    "slug": "washington-28",
                },
                "Franklin": {
                    "id": 9529,
                    "name": "Franklin",
                    "slug": "franklin-22",
                },
                "Cameron": {
                    "id": 9528,
                    "name": "Cameron",
                    "slug": "cameron-2",
                },
                "Westmoreland": {
                    "id": 9527,
                    "name": "Westmoreland",
                    "slug": "westmoreland-2",
                },
                "Philadelphia": {
                    "id": 9526,
                    "name": "Philadelphia",
                    "slug": "philadelphia",
                },
                "Clarion": {
                    "id": 9525,
                    "name": "Clarion",
                    "slug": "clarion",
                },
                "York": {
                    "id": 9524,
                    "name": "York",
                    "slug": "york-3",
                },
                "Wayne": {
                    "id": 9523,
                    "name": "Wayne",
                    "slug": "wayne-13",
                },
                "Perry": {
                    "id": 9522,
                    "name": "Perry",
                    "slug": "perry-10",
                },
                "Monroe": {
                    "id": 9521,
                    "name": "Monroe",
                    "slug": "monroe-17",
                },
                "Lancaster": {
                    "id": 9520,
                    "name": "Lancaster",
                    "slug": "lancaster-4",
                },
                "Huntingdon": {
                    "id": 9519,
                    "name": "Huntingdon",
                    "slug": "huntingdon",
                },
                "Fayette": {
                    "id": 9518,
                    "name": "Fayette",
                    "slug": "fayette-9",
                },
                "Delaware": {
                    "id": 9517,
                    "name": "Delaware",
                    "slug": "delaware-6",
                },
                "Cumberland": {
                    "id": 9516,
                    "name": "Cumberland",
                    "slug": "cumberland-6",
                },
                "Clearfield": {
                    "id": 9515,
                    "name": "Clearfield",
                    "slug": "clearfield",
                },
                "Allegheny": {
                    "id": 9514,
                    "name": "Allegheny",
                    "slug": "allegheny",
                },
                "Montgomery": {
                    "id": 9513,
                    "name": "Montgomery",
                    "slug": "montgomery-16",
                },
                "Juniata": {
                    "id": 9512,
                    "name": "Juniata",
                    "slug": "juniata",
                },
                "Indiana": {
                    "id": 9511,
                    "name": "Indiana",
                    "slug": "indiana",
                },
                "Greene": {
                    "id": 9510,
                    "name": "Greene",
                    "slug": "greene-13",
                },
                "Clinton": {
                    "id": 9509,
                    "name": "Clinton",
                    "slug": "clinton-11",
                },
                "Chester": {
                    "id": 9508,
                    "name": "Chester",
                    "slug": "chester-5",
                },
                "Armstrong": {
                    "id": 9507,
                    "name": "Armstrong",
                    "slug": "armstrong",
                },
            },
        },
    },
    "RI": {
        "id": 69,
        "name": "Rhode Island",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {
                "Woonsocket": {
                    "id": 9612,
                    "name": "Woonsocket",
                    "slug": "woonsocket",
                },
                "West Warwick": {
                    "id": 9611,
                    "name": "West Warwick",
                    "slug": "west-warwick",
                },
                "West Greenwich": {
                    "id": 9610,
                    "name": "West Greenwich",
                    "slug": "west-greenwich",
                },
                "Westerly": {
                    "id": 9609,
                    "name": "Westerly",
                    "slug": "westerly",
                },
                "Warwick": {
                    "id": 9608,
                    "name": "Warwick",
                    "slug": "warwick-2",
                },
                "Warren": {
                    "id": 9607,
                    "name": "Warren",
                    "slug": "warren-17",
                },
                "Tiverton": {
                    "id": 9606,
                    "name": "Tiverton",
                    "slug": "tiverton",
                },
                "South Kingstown": {
                    "id": 9605,
                    "name": "South Kingstown",
                    "slug": "south-kingstown",
                },
                "Smithfield": {
                    "id": 9604,
                    "name": "Smithfield",
                    "slug": "smithfield-2",
                },
                "Scituate": {
                    "id": 9603,
                    "name": "Scituate",
                    "slug": "scituate-2",
                },
                "Richmond": {
                    "id": 9602,
                    "name": "Richmond",
                    "slug": "richmond-6",
                },
                "Providence": {
                    "id": 9601,
                    "name": "Providence",
                    "slug": "providence",
                },
                "Portsmouth": {
                    "id": 9600,
                    "name": "Portsmouth",
                    "slug": "portsmouth-2",
                },
                "Pawtucket": {
                    "id": 9599,
                    "name": "Pawtucket",
                    "slug": "pawtucket",
                },
                "North Smithfield": {
                    "id": 9598,
                    "name": "North Smithfield",
                    "slug": "north-smithfield",
                },
                "North Providence": {
                    "id": 9597,
                    "name": "North Providence",
                    "slug": "north-providence",
                },
                "North Kingstown": {
                    "id": 9596,
                    "name": "North Kingstown",
                    "slug": "north-kingstown",
                },
                "New Shoreham": {
                    "id": 9595,
                    "name": "New Shoreham",
                    "slug": "new-shoreham",
                },
                "Newport": {
                    "id": 9594,
                    "name": "Newport",
                    "slug": "newport-3",
                },
                "Narragansett": {
                    "id": 9593,
                    "name": "Narragansett",
                    "slug": "narragansett",
                },
                "Middletown": {
                    "id": 9592,
                    "name": "Middletown",
                    "slug": "middletown-2",
                },
                "Little Compton": {
                    "id": 9591,
                    "name": "Little Compton",
                    "slug": "little-compton",
                },
                "Lincoln": {
                    "id": 9590,
                    "name": "Lincoln",
                    "slug": "lincoln-21",
                },
                "Johnston": {
                    "id": 9589,
                    "name": "Johnston",
                    "slug": "johnston-3",
                },
                "Jamestown": {
                    "id": 9588,
                    "name": "Jamestown",
                    "slug": "jamestown",
                },
                "Hopkinton": {
                    "id": 9587,
                    "name": "Hopkinton",
                    "slug": "hopkinton-3",
                },
                "Glocester": {
                    "id": 9586,
                    "name": "Glocester",
                    "slug": "glocester",
                },
                "Foster": {
                    "id": 9585,
                    "name": "Foster",
                    "slug": "foster-2",
                },
                "Exeter": {
                    "id": 9584,
                    "name": "Exeter",
                    "slug": "exeter-3",
                },
                "East Providence": {
                    "id": 9583,
                    "name": "East Providence",
                    "slug": "east-providence",
                },
                "East Greenwich": {
                    "id": 9582,
                    "name": "East Greenwich",
                    "slug": "east-greenwich",
                },
                "Cumberland": {
                    "id": 9581,
                    "name": "Cumberland",
                    "slug": "cumberland-7",
                },
                "Cranston": {
                    "id": 9580,
                    "name": "Cranston",
                    "slug": "cranston",
                },
                "Coventry": {
                    "id": 9579,
                    "name": "Coventry",
                    "slug": "coventry-2",
                },
                "Charlestown": {
                    "id": 9578,
                    "name": "Charlestown",
                    "slug": "charlestown-2",
                },
                "Central Falls": {
                    "id": 9577,
                    "name": "Central Falls",
                    "slug": "central-falls",
                },
                "Burrillville": {
                    "id": 9576,
                    "name": "Burrillville",
                    "slug": "burrillville",
                },
                "Bristol": {
                    "id": 9575,
                    "name": "Bristol",
                    "slug": "bristol-4",
                },
                "Barrington": {
                    "id": 9574,
                    "name": "Barrington",
                    "slug": "barrington-2",
                },
            },
            "counties": {},
        },
    },
    "SC": {
        "id": 70,
        "name": "South Carolina",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Cherokee": {
                    "id": 9658,
                    "name": "Cherokee",
                    "slug": "cherokee-7",
                },
                "Marion": {
                    "id": 9657,
                    "name": "Marion",
                    "slug": "marion-15",
                },
                "Charleston": {
                    "id": 9656,
                    "name": "Charleston",
                    "slug": "charleston-2",
                },
                "Darlington": {
                    "id": 9655,
                    "name": "Darlington",
                    "slug": "darlington",
                },
                "Lee": {
                    "id": 9654,
                    "name": "Lee",
                    "slug": "lee-13",
                },
                "Beaufort": {
                    "id": 9653,
                    "name": "Beaufort",
                    "slug": "beaufort-2",
                },
                "Lexington": {
                    "id": 9652,
                    "name": "Lexington",
                    "slug": "lexington-2",
                },
                "Dillon": {
                    "id": 9651,
                    "name": "Dillon",
                    "slug": "dillon",
                },
                "Williamsburg": {
                    "id": 9650,
                    "name": "Williamsburg",
                    "slug": "williamsburg-2",
                },
                "Chester": {
                    "id": 9649,
                    "name": "Chester",
                    "slug": "chester-6",
                },
                "Barnwell": {
                    "id": 9648,
                    "name": "Barnwell",
                    "slug": "barnwell",
                },
                "Edgefield": {
                    "id": 9647,
                    "name": "Edgefield",
                    "slug": "edgefield",
                },
                "Saluda": {
                    "id": 9646,
                    "name": "Saluda",
                    "slug": "saluda",
                },
                "Fairfield": {
                    "id": 9645,
                    "name": "Fairfield",
                    "slug": "fairfield-4",
                },
                "Abbeville": {
                    "id": 9644,
                    "name": "Abbeville",
                    "slug": "abbeville",
                },
                "Berkeley": {
                    "id": 9643,
                    "name": "Berkeley",
                    "slug": "berkeley",
                },
                "Spartanburg": {
                    "id": 9642,
                    "name": "Spartanburg",
                    "slug": "spartanburg",
                },
                "Newberry": {
                    "id": 9641,
                    "name": "Newberry",
                    "slug": "newberry",
                },
                "Colleton": {
                    "id": 9640,
                    "name": "Colleton",
                    "slug": "colleton",
                },
                "Oconee": {
                    "id": 9639,
                    "name": "Oconee",
                    "slug": "oconee-2",
                },
                "Union": {
                    "id": 9638,
                    "name": "Union",
                    "slug": "union-18",
                },
                "Lancaster": {
                    "id": 9637,
                    "name": "Lancaster",
                    "slug": "lancaster-5",
                },
                "Bamberg": {
                    "id": 9636,
                    "name": "Bamberg",
                    "slug": "bamberg",
                },
                "Marlboro": {
                    "id": 9635,
                    "name": "Marlboro",
                    "slug": "marlboro",
                },
                "Greenwood": {
                    "id": 9634,
                    "name": "Greenwood",
                    "slug": "greenwood-3",
                },
                "Clarendon": {
                    "id": 9633,
                    "name": "Clarendon",
                    "slug": "clarendon",
                },
                "Sumter": {
                    "id": 9632,
                    "name": "Sumter",
                    "slug": "sumter-4",
                },
                "Richland": {
                    "id": 9631,
                    "name": "Richland",
                    "slug": "richland-6",
                },
                "Orangeburg": {
                    "id": 9630,
                    "name": "Orangeburg",
                    "slug": "orangeburg",
                },
                "McCormick": {
                    "id": 9629,
                    "name": "McCormick",
                    "slug": "mccormick",
                },
                "Laurens": {
                    "id": 9628,
                    "name": "Laurens",
                    "slug": "laurens-2",
                },
                "Kershaw": {
                    "id": 9627,
                    "name": "Kershaw",
                    "slug": "kershaw",
                },
                "Horry": {
                    "id": 9626,
                    "name": "Horry",
                    "slug": "horry",
                },
                "Florence": {
                    "id": 9625,
                    "name": "Florence",
                    "slug": "florence",
                },
                "Dorchester": {
                    "id": 9624,
                    "name": "Dorchester",
                    "slug": "dorchester-3",
                },
                "Calhoun": {
                    "id": 9623,
                    "name": "Calhoun",
                    "slug": "calhoun-8",
                },
                "Anderson": {
                    "id": 9622,
                    "name": "Anderson",
                    "slug": "anderson-3",
                },
                "Aiken": {
                    "id": 9621,
                    "name": "Aiken",
                    "slug": "aiken",
                },
                "York": {
                    "id": 9620,
                    "name": "York",
                    "slug": "york-4",
                },
                "Pickens": {
                    "id": 9619,
                    "name": "Pickens",
                    "slug": "pickens-3",
                },
                "Jasper": {
                    "id": 9618,
                    "name": "Jasper",
                    "slug": "jasper-7",
                },
                "Hampton": {
                    "id": 9617,
                    "name": "Hampton",
                    "slug": "hampton-3",
                },
                "Greenville": {
                    "id": 9616,
                    "name": "Greenville",
                    "slug": "greenville-3",
                },
                "Georgetown": {
                    "id": 9615,
                    "name": "Georgetown",
                    "slug": "georgetown-3",
                },
                "Chesterfield": {
                    "id": 9614,
                    "name": "Chesterfield",
                    "slug": "chesterfield-3",
                },
                "Allendale": {
                    "id": 9613,
                    "name": "Allendale",
                    "slug": "allendale",
                },
            },
        },
    },
    "SD": {
        "id": 71,
        "name": "South Dakota",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Jackson": {
                    "id": 9724,
                    "name": "Jackson",
                    "slug": "jackson-21",
                },
                "Hamlin": {
                    "id": 9723,
                    "name": "Hamlin",
                    "slug": "hamlin",
                },
                "Tripp": {
                    "id": 9722,
                    "name": "Tripp",
                    "slug": "tripp",
                },
                "Corson": {
                    "id": 9721,
                    "name": "Corson",
                    "slug": "corson",
                },
                "Clark": {
                    "id": 9720,
                    "name": "Clark",
                    "slug": "clark-10",
                },
                "Perkins": {
                    "id": 9719,
                    "name": "Perkins",
                    "slug": "perkins-2",
                },
                "Lincoln": {
                    "id": 9718,
                    "name": "Lincoln",
                    "slug": "lincoln-22",
                },
                "Edmunds": {
                    "id": 9717,
                    "name": "Edmunds",
                    "slug": "edmunds",
                },
                "Hyde": {
                    "id": 9716,
                    "name": "Hyde",
                    "slug": "hyde-2",
                },
                "Day": {
                    "id": 9715,
                    "name": "Day",
                    "slug": "day",
                },
                "Bon Homme": {
                    "id": 9714,
                    "name": "Bon Homme",
                    "slug": "bon-homme",
                },
                "Sully": {
                    "id": 9713,
                    "name": "Sully",
                    "slug": "sully",
                },
                "Moody": {
                    "id": 9712,
                    "name": "Moody",
                    "slug": "moody",
                },
                "Hutchinson": {
                    "id": 9711,
                    "name": "Hutchinson",
                    "slug": "hutchinson",
                },
                "Campbell": {
                    "id": 9710,
                    "name": "Campbell",
                    "slug": "campbell-2",
                },
                "Walworth": {
                    "id": 9709,
                    "name": "Walworth",
                    "slug": "walworth",
                },
                "Spink": {
                    "id": 9708,
                    "name": "Spink",
                    "slug": "spink",
                },
                "Oglala Lakota": {
                    "id": 9707,
                    "name": "Oglala Lakota",
                    "slug": "oglala-lakota",
                },
                "Marshall": {
                    "id": 9706,
                    "name": "Marshall",
                    "slug": "marshall-10",
                },
                "Gregory": {
                    "id": 9705,
                    "name": "Gregory",
                    "slug": "gregory",
                },
                "Hughes": {
                    "id": 9704,
                    "name": "Hughes",
                    "slug": "hughes-2",
                },
                "Yankton": {
                    "id": 9703,
                    "name": "Yankton",
                    "slug": "yankton",
                },
                "Lawrence": {
                    "id": 9702,
                    "name": "Lawrence",
                    "slug": "lawrence-11",
                },
                "Lake": {
                    "id": 9701,
                    "name": "Lake",
                    "slug": "lake-10",
                },
                "Hanson": {
                    "id": 9700,
                    "name": "Hanson",
                    "slug": "hanson-2",
                },
                "Grant": {
                    "id": 9699,
                    "name": "Grant",
                    "slug": "grant-12",
                },
                "Fall River": {
                    "id": 9698,
                    "name": "Fall River",
                    "slug": "fall-river-2",
                },
                "Douglas": {
                    "id": 9697,
                    "name": "Douglas",
                    "slug": "douglas-11",
                },
                "Custer": {
                    "id": 9696,
                    "name": "Custer",
                    "slug": "custer-6",
                },
                "Clay": {
                    "id": 9695,
                    "name": "Clay",
                    "slug": "clay-15",
                },
                "Butte": {
                    "id": 9694,
                    "name": "Butte",
                    "slug": "butte-3",
                },
                "Buffalo": {
                    "id": 9693,
                    "name": "Buffalo",
                    "slug": "buffalo-2",
                },
                "Brown": {
                    "id": 9692,
                    "name": "Brown",
                    "slug": "brown-7",
                },
                "Bennett": {
                    "id": 9691,
                    "name": "Bennett",
                    "slug": "bennett",
                },
                "Aurora": {
                    "id": 9690,
                    "name": "Aurora",
                    "slug": "aurora",
                },
                "Codington": {
                    "id": 9689,
                    "name": "Codington",
                    "slug": "codington",
                },
                "McCook": {
                    "id": 9688,
                    "name": "McCook",
                    "slug": "mccook",
                },
                "Kingsbury": {
                    "id": 9687,
                    "name": "Kingsbury",
                    "slug": "kingsbury",
                },
                "Jerauld": {
                    "id": 9686,
                    "name": "Jerauld",
                    "slug": "jerauld",
                },
                "Harding": {
                    "id": 9685,
                    "name": "Harding",
                    "slug": "harding-2",
                },
                "Hand": {
                    "id": 9684,
                    "name": "Hand",
                    "slug": "hand",
                },
                "Faulk": {
                    "id": 9683,
                    "name": "Faulk",
                    "slug": "faulk",
                },
                "Deuel": {
                    "id": 9682,
                    "name": "Deuel",
                    "slug": "deuel-2",
                },
                "Davison": {
                    "id": 9681,
                    "name": "Davison",
                    "slug": "davison",
                },
                "Brule": {
                    "id": 9680,
                    "name": "Brule",
                    "slug": "brule",
                },
                "Brookings": {
                    "id": 9679,
                    "name": "Brookings",
                    "slug": "brookings",
                },
                "Beadle": {
                    "id": 9678,
                    "name": "Beadle",
                    "slug": "beadle",
                },
                "Turner": {
                    "id": 9677,
                    "name": "Turner",
                    "slug": "turner-3",
                },
                "Todd": {
                    "id": 9676,
                    "name": "Todd",
                    "slug": "todd-3",
                },
                "Sanborn": {
                    "id": 9675,
                    "name": "Sanborn",
                    "slug": "sanborn",
                },
                "Roberts": {
                    "id": 9674,
                    "name": "Roberts",
                    "slug": "roberts",
                },
                "Potter": {
                    "id": 9673,
                    "name": "Potter",
                    "slug": "potter-2",
                },
                "Minnehaha": {
                    "id": 9672,
                    "name": "Minnehaha",
                    "slug": "minnehaha",
                },
                "Miner": {
                    "id": 9671,
                    "name": "Miner",
                    "slug": "miner",
                },
                "McPherson": {
                    "id": 9670,
                    "name": "McPherson",
                    "slug": "mcpherson-3",
                },
                "Lyman": {
                    "id": 9669,
                    "name": "Lyman",
                    "slug": "lyman-3",
                },
                "Stanley": {
                    "id": 9668,
                    "name": "Stanley",
                    "slug": "stanley",
                },
                "Ziebach": {
                    "id": 9667,
                    "name": "Ziebach",
                    "slug": "ziebach",
                },
                "Union": {
                    "id": 9666,
                    "name": "Union",
                    "slug": "union-19",
                },
                "Jones": {
                    "id": 9665,
                    "name": "Jones",
                    "slug": "jones-5",
                },
                "Haakon": {
                    "id": 9664,
                    "name": "Haakon",
                    "slug": "haakon",
                },
                "Dewey": {
                    "id": 9663,
                    "name": "Dewey",
                    "slug": "dewey-2",
                },
                "Charles Mix": {
                    "id": 9662,
                    "name": "Charles Mix",
                    "slug": "charles-mix",
                },
                "Pennington": {
                    "id": 9661,
                    "name": "Pennington",
                    "slug": "pennington-2",
                },
                "Mellette": {
                    "id": 9660,
                    "name": "Mellette",
                    "slug": "mellette",
                },
                "Meade": {
                    "id": 9659,
                    "name": "Meade",
                    "slug": "meade-3",
                },
            },
        },
    },
    "TN": {
        "id": 72,
        "name": "Tennessee",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Scott": {
                    "id": 9819,
                    "name": "Scott",
                    "slug": "scott-10",
                },
                "Anderson": {
                    "id": 9818,
                    "name": "Anderson",
                    "slug": "anderson-4",
                },
                "Perry": {
                    "id": 9817,
                    "name": "Perry",
                    "slug": "perry-11",
                },
                "Maury": {
                    "id": 9816,
                    "name": "Maury",
                    "slug": "maury",
                },
                "Wilson": {
                    "id": 9815,
                    "name": "Wilson",
                    "slug": "wilson-3",
                },
                "White": {
                    "id": 9814,
                    "name": "White",
                    "slug": "white-5",
                },
                "Monroe": {
                    "id": 9813,
                    "name": "Monroe",
                    "slug": "monroe-18",
                },
                "Union": {
                    "id": 9812,
                    "name": "Union",
                    "slug": "union-20",
                },
                "Hamblen": {
                    "id": 9811,
                    "name": "Hamblen",
                    "slug": "hamblen",
                },
                "Lauderdale": {
                    "id": 9810,
                    "name": "Lauderdale",
                    "slug": "lauderdale-3",
                },
                "Benton": {
                    "id": 9809,
                    "name": "Benton",
                    "slug": "benton-10",
                },
                "Hancock": {
                    "id": 9808,
                    "name": "Hancock",
                    "slug": "hancock-11",
                },
                "Unicoi": {
                    "id": 9807,
                    "name": "Unicoi",
                    "slug": "unicoi",
                },
                "Pickett": {
                    "id": 9806,
                    "name": "Pickett",
                    "slug": "pickett",
                },
                "Lawrence": {
                    "id": 9805,
                    "name": "Lawrence",
                    "slug": "lawrence-12",
                },
                "Franklin": {
                    "id": 9804,
                    "name": "Franklin",
                    "slug": "franklin-23",
                },
                "Carroll": {
                    "id": 9803,
                    "name": "Carroll",
                    "slug": "carroll-12",
                },
                "Washington": {
                    "id": 9802,
                    "name": "Washington",
                    "slug": "washington-29",
                },
                "Grundy": {
                    "id": 9801,
                    "name": "Grundy",
                    "slug": "grundy-4",
                },
                "Macon": {
                    "id": 9800,
                    "name": "Macon",
                    "slug": "macon-6",
                },
                "Cannon": {
                    "id": 9799,
                    "name": "Cannon",
                    "slug": "cannon",
                },
                "Henderson": {
                    "id": 9798,
                    "name": "Henderson",
                    "slug": "henderson-4",
                },
                "Lake": {
                    "id": 9797,
                    "name": "Lake",
                    "slug": "lake-11",
                },
                "Houston": {
                    "id": 9796,
                    "name": "Houston",
                    "slug": "houston-4",
                },
                "Haywood": {
                    "id": 9795,
                    "name": "Haywood",
                    "slug": "haywood-2",
                },
                "Hardin": {
                    "id": 9794,
                    "name": "Hardin",
                    "slug": "hardin-5",
                },
                "Hardeman": {
                    "id": 9793,
                    "name": "Hardeman",
                    "slug": "hardeman",
                },
                "Fayette": {
                    "id": 9792,
                    "name": "Fayette",
                    "slug": "fayette-10",
                },
                "Clay": {
                    "id": 9791,
                    "name": "Clay",
                    "slug": "clay-16",
                },
                "Chester": {
                    "id": 9790,
                    "name": "Chester",
                    "slug": "chester-7",
                },
                "Bradley": {
                    "id": 9789,
                    "name": "Bradley",
                    "slug": "bradley-3",
                },
                "Bledsoe": {
                    "id": 9788,
                    "name": "Bledsoe",
                    "slug": "bledsoe",
                },
                "Wayne": {
                    "id": 9787,
                    "name": "Wayne",
                    "slug": "wayne-14",
                },
                "Van Buren": {
                    "id": 9786,
                    "name": "Van Buren",
                    "slug": "van-buren-4",
                },
                "Stewart": {
                    "id": 9785,
                    "name": "Stewart",
                    "slug": "stewart-2",
                },
                "Overton": {
                    "id": 9784,
                    "name": "Overton",
                    "slug": "overton",
                },
                "Obion": {
                    "id": 9783,
                    "name": "Obion",
                    "slug": "obion",
                },
                "Madison": {
                    "id": 9782,
                    "name": "Madison",
                    "slug": "madison-21",
                },
                "McNairy": {
                    "id": 9781,
                    "name": "McNairy",
                    "slug": "mcnairy",
                },
                "Lincoln": {
                    "id": 9780,
                    "name": "Lincoln",
                    "slug": "lincoln-23",
                },
                "Warren": {
                    "id": 9779,
                    "name": "Warren",
                    "slug": "warren-18",
                },
                "Trousdale": {
                    "id": 9778,
                    "name": "Trousdale",
                    "slug": "trousdale",
                },
                "Sequatchie": {
                    "id": 9777,
                    "name": "Sequatchie",
                    "slug": "sequatchie",
                },
                "Polk": {
                    "id": 9776,
                    "name": "Polk",
                    "slug": "polk-10",
                },
                "Montgomery": {
                    "id": 9775,
                    "name": "Montgomery",
                    "slug": "montgomery-17",
                },
                "Marion": {
                    "id": 9774,
                    "name": "Marion",
                    "slug": "marion-16",
                },
                "Lewis": {
                    "id": 9773,
                    "name": "Lewis",
                    "slug": "lewis-5",
                },
                "Jackson": {
                    "id": 9772,
                    "name": "Jackson",
                    "slug": "jackson-22",
                },
                "Dickson": {
                    "id": 9771,
                    "name": "Dickson",
                    "slug": "dickson",
                },
                "Decatur": {
                    "id": 9770,
                    "name": "Decatur",
                    "slug": "decatur-5",
                },
                "Williamson": {
                    "id": 9769,
                    "name": "Williamson",
                    "slug": "williamson-2",
                },
                "Morgan": {
                    "id": 9768,
                    "name": "Morgan",
                    "slug": "morgan-9",
                },
                "Blount": {
                    "id": 9767,
                    "name": "Blount",
                    "slug": "blount-2",
                },
                "Loudon": {
                    "id": 9766,
                    "name": "Loudon",
                    "slug": "loudon-2",
                },
                "Weakley": {
                    "id": 9765,
                    "name": "Weakley",
                    "slug": "weakley",
                },
                "Roane": {
                    "id": 9764,
                    "name": "Roane",
                    "slug": "roane",
                },
                "Grainger": {
                    "id": 9763,
                    "name": "Grainger",
                    "slug": "grainger",
                },
                "Robertson": {
                    "id": 9762,
                    "name": "Robertson",
                    "slug": "robertson-2",
                },
                "Jefferson": {
                    "id": 9761,
                    "name": "Jefferson",
                    "slug": "jefferson-24",
                },
                "Coffee": {
                    "id": 9760,
                    "name": "Coffee",
                    "slug": "coffee-3",
                },
                "Bedford": {
                    "id": 9759,
                    "name": "Bedford",
                    "slug": "bedford-4",
                },
                "Sullivan": {
                    "id": 9758,
                    "name": "Sullivan",
                    "slug": "sullivan-7",
                },
                "Gibson": {
                    "id": 9757,
                    "name": "Gibson",
                    "slug": "gibson-2",
                },
                "Claiborne": {
                    "id": 9756,
                    "name": "Claiborne",
                    "slug": "claiborne-3",
                },
                "Moore": {
                    "id": 9755,
                    "name": "Moore",
                    "slug": "moore-2",
                },
                "Giles": {
                    "id": 9754,
                    "name": "Giles",
                    "slug": "giles",
                },
                "Johnson": {
                    "id": 9753,
                    "name": "Johnson",
                    "slug": "johnson-10",
                },
                "Humphreys": {
                    "id": 9752,
                    "name": "Humphreys",
                    "slug": "humphreys-2",
                },
                "Tipton": {
                    "id": 9751,
                    "name": "Tipton",
                    "slug": "tipton-2",
                },
                "Sumner": {
                    "id": 9750,
                    "name": "Sumner",
                    "slug": "sumner-3",
                },
                "Shelby": {
                    "id": 9749,
                    "name": "Shelby",
                    "slug": "shelby-8",
                },
                "Sevier": {
                    "id": 9748,
                    "name": "Sevier",
                    "slug": "sevier-2",
                },
                "Rhea": {
                    "id": 9747,
                    "name": "Rhea",
                    "slug": "rhea",
                },
                "Putnam": {
                    "id": 9746,
                    "name": "Putnam",
                    "slug": "putnam-9",
                },
                "Marshall": {
                    "id": 9745,
                    "name": "Marshall",
                    "slug": "marshall-11",
                },
                "McMinn": {
                    "id": 9744,
                    "name": "McMinn",
                    "slug": "mcminn",
                },
                "Knox": {
                    "id": 9743,
                    "name": "Knox",
                    "slug": "knox-8",
                },
                "Henry": {
                    "id": 9742,
                    "name": "Henry",
                    "slug": "henry-9",
                },
                "Hamilton": {
                    "id": 9741,
                    "name": "Hamilton",
                    "slug": "hamilton-10",
                },
                "Greene": {
                    "id": 9740,
                    "name": "Greene",
                    "slug": "greene-14",
                },
                "Dyer": {
                    "id": 9739,
                    "name": "Dyer",
                    "slug": "dyer",
                },
                "DeKalb": {
                    "id": 9738,
                    "name": "DeKalb",
                    "slug": "dekalb-6",
                },
                "Davidson": {
                    "id": 9737,
                    "name": "Davidson",
                    "slug": "davidson-2",
                },
                "Cumberland": {
                    "id": 9736,
                    "name": "Cumberland",
                    "slug": "cumberland-8",
                },
                "Cheatham": {
                    "id": 9735,
                    "name": "Cheatham",
                    "slug": "cheatham",
                },
                "Campbell": {
                    "id": 9734,
                    "name": "Campbell",
                    "slug": "campbell-3",
                },
                "Smith": {
                    "id": 9733,
                    "name": "Smith",
                    "slug": "smith-3",
                },
                "Rutherford": {
                    "id": 9732,
                    "name": "Rutherford",
                    "slug": "rutherford-2",
                },
                "Meigs": {
                    "id": 9731,
                    "name": "Meigs",
                    "slug": "meigs-2",
                },
                "Hickman": {
                    "id": 9730,
                    "name": "Hickman",
                    "slug": "hickman-2",
                },
                "Hawkins": {
                    "id": 9729,
                    "name": "Hawkins",
                    "slug": "hawkins",
                },
                "Fentress": {
                    "id": 9728,
                    "name": "Fentress",
                    "slug": "fentress",
                },
                "Crockett": {
                    "id": 9727,
                    "name": "Crockett",
                    "slug": "crockett",
                },
                "Cocke": {
                    "id": 9726,
                    "name": "Cocke",
                    "slug": "cocke",
                },
                "Carter": {
                    "id": 9725,
                    "name": "Carter",
                    "slug": "carter-5",
                },
            },
        },
    },
    "TX": {
        "id": 73,
        "name": "Texas",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Martin": {
                    "id": 10073,
                    "name": "Martin",
                    "slug": "martin-6",
                },
                "Coryell": {
                    "id": 10072,
                    "name": "Coryell",
                    "slug": "coryell",
                },
                "Jack": {
                    "id": 10071,
                    "name": "Jack",
                    "slug": "jack",
                },
                "Val Verde": {
                    "id": 10070,
                    "name": "Val Verde",
                    "slug": "val-verde",
                },
                "San Saba": {
                    "id": 10069,
                    "name": "San Saba",
                    "slug": "san-saba",
                },
                "Loving": {
                    "id": 10068,
                    "name": "Loving",
                    "slug": "loving",
                },
                "Burleson": {
                    "id": 10067,
                    "name": "Burleson",
                    "slug": "burleson",
                },
                "Reeves": {
                    "id": 10066,
                    "name": "Reeves",
                    "slug": "reeves",
                },
                "Sabine": {
                    "id": 10065,
                    "name": "Sabine",
                    "slug": "sabine-2",
                },
                "Jasper": {
                    "id": 10064,
                    "name": "Jasper",
                    "slug": "jasper-8",
                },
                "Aransas": {
                    "id": 10063,
                    "name": "Aransas",
                    "slug": "aransas",
                },
                "Stonewall": {
                    "id": 10062,
                    "name": "Stonewall",
                    "slug": "stonewall",
                },
                "Maverick": {
                    "id": 10061,
                    "name": "Maverick",
                    "slug": "maverick",
                },
                "McMullen": {
                    "id": 10060,
                    "name": "McMullen",
                    "slug": "mcmullen",
                },
                "Camp": {
                    "id": 10059,
                    "name": "Camp",
                    "slug": "camp",
                },
                "Madison": {
                    "id": 10058,
                    "name": "Madison",
                    "slug": "madison-22",
                },
                "Terrell": {
                    "id": 10057,
                    "name": "Terrell",
                    "slug": "terrell-2",
                },
                "San Jacinto": {
                    "id": 10056,
                    "name": "San Jacinto",
                    "slug": "san-jacinto",
                },
                "Morris": {
                    "id": 10055,
                    "name": "Morris",
                    "slug": "morris-4",
                },
                "Hudspeth": {
                    "id": 10054,
                    "name": "Hudspeth",
                    "slug": "hudspeth",
                },
                "Comal": {
                    "id": 10053,
                    "name": "Comal",
                    "slug": "comal",
                },
                "Hardin": {
                    "id": 10052,
                    "name": "Hardin",
                    "slug": "hardin-6",
                },
                "Cherokee": {
                    "id": 10051,
                    "name": "Cherokee",
                    "slug": "cherokee-8",
                },
                "Fisher": {
                    "id": 10050,
                    "name": "Fisher",
                    "slug": "fisher",
                },
                "Bee": {
                    "id": 10049,
                    "name": "Bee",
                    "slug": "bee",
                },
                "Yoakum": {
                    "id": 10048,
                    "name": "Yoakum",
                    "slug": "yoakum",
                },
                "Throckmorton": {
                    "id": 10047,
                    "name": "Throckmorton",
                    "slug": "throckmorton",
                },
                "Menard": {
                    "id": 10046,
                    "name": "Menard",
                    "slug": "menard-2",
                },
                "King": {
                    "id": 10045,
                    "name": "King",
                    "slug": "king",
                },
                "Eastland": {
                    "id": 10044,
                    "name": "Eastland",
                    "slug": "eastland",
                },
                "Denton": {
                    "id": 10043,
                    "name": "Denton",
                    "slug": "denton",
                },
                "Somervell": {
                    "id": 10042,
                    "name": "Somervell",
                    "slug": "somervell",
                },
                "Oldham": {
                    "id": 10041,
                    "name": "Oldham",
                    "slug": "oldham-2",
                },
                "Mason": {
                    "id": 10040,
                    "name": "Mason",
                    "slug": "mason-4",
                },
                "La Salle": {
                    "id": 10039,
                    "name": "La Salle",
                    "slug": "la-salle",
                },
                "Jackson": {
                    "id": 10038,
                    "name": "Jackson",
                    "slug": "jackson-23",
                },
                "Grimes": {
                    "id": 10037,
                    "name": "Grimes",
                    "slug": "grimes",
                },
                "Bell": {
                    "id": 10036,
                    "name": "Bell",
                    "slug": "bell-2",
                },
                "Lynn": {
                    "id": 10035,
                    "name": "Lynn",
                    "slug": "lynn-2",
                },
                "Jim Hogg": {
                    "id": 10034,
                    "name": "Jim Hogg",
                    "slug": "jim-hogg",
                },
                "Hockley": {
                    "id": 10033,
                    "name": "Hockley",
                    "slug": "hockley",
                },
                "Hall": {
                    "id": 10032,
                    "name": "Hall",
                    "slug": "hall-3",
                },
                "Gonzales": {
                    "id": 10031,
                    "name": "Gonzales",
                    "slug": "gonzales",
                },
                "Childress": {
                    "id": 10030,
                    "name": "Childress",
                    "slug": "childress",
                },
                "Brooks": {
                    "id": 10029,
                    "name": "Brooks",
                    "slug": "brooks-3",
                },
                "Winkler": {
                    "id": 10028,
                    "name": "Winkler",
                    "slug": "winkler",
                },
                "Upton": {
                    "id": 10027,
                    "name": "Upton",
                    "slug": "upton-2",
                },
                "Potter": {
                    "id": 10026,
                    "name": "Potter",
                    "slug": "potter-3",
                },
                "Llano": {
                    "id": 10025,
                    "name": "Llano",
                    "slug": "llano",
                },
                "Karnes": {
                    "id": 10024,
                    "name": "Karnes",
                    "slug": "karnes",
                },
                "Hill": {
                    "id": 10023,
                    "name": "Hill",
                    "slug": "hill-3",
                },
                "Garza": {
                    "id": 10022,
                    "name": "Garza",
                    "slug": "garza",
                },
                "Floyd": {
                    "id": 10021,
                    "name": "Floyd",
                    "slug": "floyd-5",
                },
                "Edwards": {
                    "id": 10020,
                    "name": "Edwards",
                    "slug": "edwards-3",
                },
                "Callahan": {
                    "id": 10019,
                    "name": "Callahan",
                    "slug": "callahan",
                },
                "Tarrant": {
                    "id": 10018,
                    "name": "Tarrant",
                    "slug": "tarrant",
                },
                "Palo Pinto": {
                    "id": 10017,
                    "name": "Palo Pinto",
                    "slug": "palo-pinto",
                },
                "Milam": {
                    "id": 10016,
                    "name": "Milam",
                    "slug": "milam",
                },
                "Swisher": {
                    "id": 10015,
                    "name": "Swisher",
                    "slug": "swisher",
                },
                "Limestone": {
                    "id": 10014,
                    "name": "Limestone",
                    "slug": "limestone-3",
                },
                "Kerr": {
                    "id": 10013,
                    "name": "Kerr",
                    "slug": "kerr",
                },
                "Franklin": {
                    "id": 10012,
                    "name": "Franklin",
                    "slug": "franklin-24",
                },
                "Fannin": {
                    "id": 10011,
                    "name": "Fannin",
                    "slug": "fannin-2",
                },
                "Deaf Smith": {
                    "id": 10010,
                    "name": "Deaf Smith",
                    "slug": "deaf-smith",
                },
                "Blanco": {
                    "id": 10009,
                    "name": "Blanco",
                    "slug": "blanco",
                },
                "Uvalde": {
                    "id": 10008,
                    "name": "Uvalde",
                    "slug": "uvalde",
                },
                "Kendall": {
                    "id": 10007,
                    "name": "Kendall",
                    "slug": "kendall-2",
                },
                "Cottle": {
                    "id": 10006,
                    "name": "Cottle",
                    "slug": "cottle",
                },
                "Bandera": {
                    "id": 10005,
                    "name": "Bandera",
                    "slug": "bandera",
                },
                "Wilson": {
                    "id": 10004,
                    "name": "Wilson",
                    "slug": "wilson-4",
                },
                "Wilbarger": {
                    "id": 10003,
                    "name": "Wilbarger",
                    "slug": "wilbarger",
                },
                "Wheeler": {
                    "id": 10002,
                    "name": "Wheeler",
                    "slug": "wheeler-4",
                },
                "Washington": {
                    "id": 10001,
                    "name": "Washington",
                    "slug": "washington-30",
                },
                "Terry": {
                    "id": 10000,
                    "name": "Terry",
                    "slug": "terry",
                },
                "Sutton": {
                    "id": 9999,
                    "name": "Sutton",
                    "slug": "sutton-3",
                },
                "Sterling": {
                    "id": 9998,
                    "name": "Sterling",
                    "slug": "sterling-3",
                },
                "Sherman": {
                    "id": 9997,
                    "name": "Sherman",
                    "slug": "sherman-6",
                },
                "Shackelford": {
                    "id": 9996,
                    "name": "Shackelford",
                    "slug": "shackelford",
                },
                "Rockwall": {
                    "id": 9995,
                    "name": "Rockwall",
                    "slug": "rockwall",
                },
                "Randall": {
                    "id": 9994,
                    "name": "Randall",
                    "slug": "randall",
                },
                "Parmer": {
                    "id": 9993,
                    "name": "Parmer",
                    "slug": "parmer",
                },
                "Parker": {
                    "id": 9992,
                    "name": "Parker",
                    "slug": "parker",
                },
                "Ochiltree": {
                    "id": 9991,
                    "name": "Ochiltree",
                    "slug": "ochiltree",
                },
                "Nolan": {
                    "id": 9990,
                    "name": "Nolan",
                    "slug": "nolan",
                },
                "Mitchell": {
                    "id": 9989,
                    "name": "Mitchell",
                    "slug": "mitchell-5",
                },
                "Midland": {
                    "id": 9988,
                    "name": "Midland",
                    "slug": "midland",
                },
                "Medina": {
                    "id": 9987,
                    "name": "Medina",
                    "slug": "medina-2",
                },
                "McCulloch": {
                    "id": 9986,
                    "name": "McCulloch",
                    "slug": "mcculloch",
                },
                "Live Oak": {
                    "id": 9985,
                    "name": "Live Oak",
                    "slug": "live-oak",
                },
                "Lipscomb": {
                    "id": 9984,
                    "name": "Lipscomb",
                    "slug": "lipscomb",
                },
                "Scurry": {
                    "id": 9983,
                    "name": "Scurry",
                    "slug": "scurry",
                },
                "Roberts": {
                    "id": 9982,
                    "name": "Roberts",
                    "slug": "roberts-2",
                },
                "Liberty": {
                    "id": 9981,
                    "name": "Liberty",
                    "slug": "liberty-5",
                },
                "Lampasas": {
                    "id": 9980,
                    "name": "Lampasas",
                    "slug": "lampasas",
                },
                "Kinney": {
                    "id": 9979,
                    "name": "Kinney",
                    "slug": "kinney",
                },
                "Zapata": {
                    "id": 9978,
                    "name": "Zapata",
                    "slug": "zapata",
                },
                "Kimble": {
                    "id": 9977,
                    "name": "Kimble",
                    "slug": "kimble",
                },
                "Kaufman": {
                    "id": 9976,
                    "name": "Kaufman",
                    "slug": "kaufman",
                },
                "Jones": {
                    "id": 9975,
                    "name": "Jones",
                    "slug": "jones-6",
                },
                "Jim Wells": {
                    "id": 9974,
                    "name": "Jim Wells",
                    "slug": "jim-wells",
                },
                "Jeff Davis": {
                    "id": 9973,
                    "name": "Jeff Davis",
                    "slug": "jeff-davis-2",
                },
                "Irion": {
                    "id": 9972,
                    "name": "Irion",
                    "slug": "irion",
                },
                "Hutchinson": {
                    "id": 9971,
                    "name": "Hutchinson",
                    "slug": "hutchinson-2",
                },
                "Hemphill": {
                    "id": 9970,
                    "name": "Hemphill",
                    "slug": "hemphill",
                },
                "Hays": {
                    "id": 9969,
                    "name": "Hays",
                    "slug": "hays",
                },
                "Gillespie": {
                    "id": 9968,
                    "name": "Gillespie",
                    "slug": "gillespie",
                },
                "Hardeman": {
                    "id": 9967,
                    "name": "Hardeman",
                    "slug": "hardeman-2",
                },
                "Grayson": {
                    "id": 9966,
                    "name": "Grayson",
                    "slug": "grayson-2",
                },
                "Hamilton": {
                    "id": 9965,
                    "name": "Hamilton",
                    "slug": "hamilton-11",
                },
                "Bastrop": {
                    "id": 9964,
                    "name": "Bastrop",
                    "slug": "bastrop",
                },
                "Hansford": {
                    "id": 9963,
                    "name": "Hansford",
                    "slug": "hansford",
                },
                "Dickens": {
                    "id": 9962,
                    "name": "Dickens",
                    "slug": "dickens",
                },
                "DeWitt": {
                    "id": 9961,
                    "name": "DeWitt",
                    "slug": "dewitt",
                },
                "Dawson": {
                    "id": 9960,
                    "name": "Dawson",
                    "slug": "dawson-4",
                },
                "Dallam": {
                    "id": 9959,
                    "name": "Dallam",
                    "slug": "dallam",
                },
                "Concho": {
                    "id": 9958,
                    "name": "Concho",
                    "slug": "concho",
                },
                "Collingsworth": {
                    "id": 9957,
                    "name": "Collingsworth",
                    "slug": "collingsworth",
                },
                "Collin": {
                    "id": 9956,
                    "name": "Collin",
                    "slug": "collin",
                },
                "Coke": {
                    "id": 9955,
                    "name": "Coke",
                    "slug": "coke",
                },
                "Clay": {
                    "id": 9954,
                    "name": "Clay",
                    "slug": "clay-17",
                },
                "Chambers": {
                    "id": 9953,
                    "name": "Chambers",
                    "slug": "chambers-2",
                },
                "Cass": {
                    "id": 9952,
                    "name": "Cass",
                    "slug": "cass-8",
                },
                "Burnet": {
                    "id": 9951,
                    "name": "Burnet",
                    "slug": "burnet",
                },
                "Brewster": {
                    "id": 9950,
                    "name": "Brewster",
                    "slug": "brewster-2",
                },
                "Bowie": {
                    "id": 9949,
                    "name": "Bowie",
                    "slug": "bowie",
                },
                "Atascosa": {
                    "id": 9948,
                    "name": "Atascosa",
                    "slug": "atascosa",
                },
                "Archer": {
                    "id": 9947,
                    "name": "Archer",
                    "slug": "archer",
                },
                "Nueces": {
                    "id": 9946,
                    "name": "Nueces",
                    "slug": "nueces",
                },
                "Montague": {
                    "id": 9945,
                    "name": "Montague",
                    "slug": "montague-2",
                },
                "McLennan": {
                    "id": 9944,
                    "name": "McLennan",
                    "slug": "mclennan",
                },
                "Lubbock": {
                    "id": 9943,
                    "name": "Lubbock",
                    "slug": "lubbock",
                },
                "Lavaca": {
                    "id": 9942,
                    "name": "Lavaca",
                    "slug": "lavaca",
                },
                "Lamb": {
                    "id": 9941,
                    "name": "Lamb",
                    "slug": "lamb",
                },
                "Knox": {
                    "id": 9940,
                    "name": "Knox",
                    "slug": "knox-9",
                },
                "Johnson": {
                    "id": 9939,
                    "name": "Johnson",
                    "slug": "johnson-11",
                },
                "Hunt": {
                    "id": 9938,
                    "name": "Hunt",
                    "slug": "hunt",
                },
                "Howard": {
                    "id": 9937,
                    "name": "Howard",
                    "slug": "howard-7",
                },
                "Hood": {
                    "id": 9936,
                    "name": "Hood",
                    "slug": "hood",
                },
                "Hale": {
                    "id": 9935,
                    "name": "Hale",
                    "slug": "hale-2",
                },
                "Gregg": {
                    "id": 9934,
                    "name": "Gregg",
                    "slug": "gregg",
                },
                "Gray": {
                    "id": 9933,
                    "name": "Gray",
                    "slug": "gray-3",
                },
                "Gaines": {
                    "id": 9932,
                    "name": "Gaines",
                    "slug": "gaines",
                },
                "Frio": {
                    "id": 9931,
                    "name": "Frio",
                    "slug": "frio",
                },
                "Freestone": {
                    "id": 9930,
                    "name": "Freestone",
                    "slug": "freestone",
                },
                "Fayette": {
                    "id": 9929,
                    "name": "Fayette",
                    "slug": "fayette-11",
                },
                "Falls": {
                    "id": 9928,
                    "name": "Falls",
                    "slug": "falls",
                },
                "Erath": {
                    "id": 9927,
                    "name": "Erath",
                    "slug": "erath",
                },
                "Duval": {
                    "id": 9926,
                    "name": "Duval",
                    "slug": "duval-2",
                },
                "Dimmit": {
                    "id": 9925,
                    "name": "Dimmit",
                    "slug": "dimmit",
                },
                "Dallas": {
                    "id": 9924,
                    "name": "Dallas",
                    "slug": "dallas-5",
                },
                "Crosby": {
                    "id": 9923,
                    "name": "Crosby",
                    "slug": "crosby",
                },
                "Cooke": {
                    "id": 9922,
                    "name": "Cooke",
                    "slug": "cooke",
                },
                "Comanche": {
                    "id": 9921,
                    "name": "Comanche",
                    "slug": "comanche-3",
                },
                "Castro": {
                    "id": 9920,
                    "name": "Castro",
                    "slug": "castro",
                },
                "Brown": {
                    "id": 9919,
                    "name": "Brown",
                    "slug": "brown-8",
                },
                "Briscoe": {
                    "id": 9918,
                    "name": "Briscoe",
                    "slug": "briscoe",
                },
                "Bailey": {
                    "id": 9917,
                    "name": "Bailey",
                    "slug": "bailey",
                },
                "Zavala": {
                    "id": 9916,
                    "name": "Zavala",
                    "slug": "zavala",
                },
                "Wise": {
                    "id": 9915,
                    "name": "Wise",
                    "slug": "wise",
                },
                "Willacy": {
                    "id": 9914,
                    "name": "Willacy",
                    "slug": "willacy",
                },
                "Wichita": {
                    "id": 9913,
                    "name": "Wichita",
                    "slug": "wichita-2",
                },
                "Wharton": {
                    "id": 9912,
                    "name": "Wharton",
                    "slug": "wharton",
                },
                "Tom Green": {
                    "id": 9911,
                    "name": "Tom Green",
                    "slug": "tom-green",
                },
                "Taylor": {
                    "id": 9910,
                    "name": "Taylor",
                    "slug": "taylor-5",
                },
                "Smith": {
                    "id": 9909,
                    "name": "Smith",
                    "slug": "smith-4",
                },
                "Runnels": {
                    "id": 9908,
                    "name": "Runnels",
                    "slug": "runnels",
                },
                "Real": {
                    "id": 9907,
                    "name": "Real",
                    "slug": "real",
                },
                "Panola": {
                    "id": 9906,
                    "name": "Panola",
                    "slug": "panola-2",
                },
                "Haskell": {
                    "id": 9905,
                    "name": "Haskell",
                    "slug": "haskell-3",
                },
                "Fort Bend": {
                    "id": 9904,
                    "name": "Fort Bend",
                    "slug": "fort-bend",
                },
                "Carson": {
                    "id": 9903,
                    "name": "Carson",
                    "slug": "carson",
                },
                "Young": {
                    "id": 9902,
                    "name": "Young",
                    "slug": "young",
                },
                "Goliad": {
                    "id": 9901,
                    "name": "Goliad",
                    "slug": "goliad",
                },
                "Upshur": {
                    "id": 9900,
                    "name": "Upshur",
                    "slug": "upshur",
                },
                "Rusk": {
                    "id": 9899,
                    "name": "Rusk",
                    "slug": "rusk",
                },
                "Harris": {
                    "id": 9898,
                    "name": "Harris",
                    "slug": "harris-2",
                },
                "Cameron": {
                    "id": 9897,
                    "name": "Cameron",
                    "slug": "cameron-3",
                },
                "Shelby": {
                    "id": 9896,
                    "name": "Shelby",
                    "slug": "shelby-9",
                },
                "Moore": {
                    "id": 9895,
                    "name": "Moore",
                    "slug": "moore-3",
                },
                "Cochran": {
                    "id": 9894,
                    "name": "Cochran",
                    "slug": "cochran",
                },
                "Brazos": {
                    "id": 9893,
                    "name": "Brazos",
                    "slug": "brazos",
                },
                "Victoria": {
                    "id": 9892,
                    "name": "Victoria",
                    "slug": "victoria",
                },
                "Refugio": {
                    "id": 9891,
                    "name": "Refugio",
                    "slug": "refugio",
                },
                "Lamar": {
                    "id": 9890,
                    "name": "Lamar",
                    "slug": "lamar-4",
                },
                "Crockett": {
                    "id": 9889,
                    "name": "Crockett",
                    "slug": "crockett-2",
                },
                "Austin": {
                    "id": 9888,
                    "name": "Austin",
                    "slug": "austin",
                },
                "San Patricio": {
                    "id": 9887,
                    "name": "San Patricio",
                    "slug": "san-patricio",
                },
                "Rains": {
                    "id": 9886,
                    "name": "Rains",
                    "slug": "rains",
                },
                "Newton": {
                    "id": 9885,
                    "name": "Newton",
                    "slug": "newton-8",
                },
                "Harrison": {
                    "id": 9884,
                    "name": "Harrison",
                    "slug": "harrison-8",
                },
                "Ector": {
                    "id": 9883,
                    "name": "Ector",
                    "slug": "ector",
                },
                "Colorado": {
                    "id": 9882,
                    "name": "Colorado",
                    "slug": "colorado",
                },
                "Andrews": {
                    "id": 9881,
                    "name": "Andrews",
                    "slug": "andrews",
                },
                "Motley": {
                    "id": 9880,
                    "name": "Motley",
                    "slug": "motley",
                },
                "Donley": {
                    "id": 9879,
                    "name": "Donley",
                    "slug": "donley",
                },
                "Williamson": {
                    "id": 9878,
                    "name": "Williamson",
                    "slug": "williamson-3",
                },
                "Webb": {
                    "id": 9877,
                    "name": "Webb",
                    "slug": "webb",
                },
                "Waller": {
                    "id": 9876,
                    "name": "Waller",
                    "slug": "waller",
                },
                "Van Zandt": {
                    "id": 9875,
                    "name": "Van Zandt",
                    "slug": "van-zandt",
                },
                "Trinity": {
                    "id": 9874,
                    "name": "Trinity",
                    "slug": "trinity-2",
                },
                "Travis": {
                    "id": 9873,
                    "name": "Travis",
                    "slug": "travis",
                },
                "Stephens": {
                    "id": 9872,
                    "name": "Stephens",
                    "slug": "stephens-3",
                },
                "San Augustine": {
                    "id": 9871,
                    "name": "San Augustine",
                    "slug": "san-augustine",
                },
                "Red River": {
                    "id": 9870,
                    "name": "Red River",
                    "slug": "red-river-2",
                },
                "Reagan": {
                    "id": 9869,
                    "name": "Reagan",
                    "slug": "reagan",
                },
                "Presidio": {
                    "id": 9868,
                    "name": "Presidio",
                    "slug": "presidio",
                },
                "Polk": {
                    "id": 9867,
                    "name": "Polk",
                    "slug": "polk-11",
                },
                "Navarro": {
                    "id": 9866,
                    "name": "Navarro",
                    "slug": "navarro",
                },
                "Montgomery": {
                    "id": 9865,
                    "name": "Montgomery",
                    "slug": "montgomery-18",
                },
                "Matagorda": {
                    "id": 9864,
                    "name": "Matagorda",
                    "slug": "matagorda",
                },
                "Marion": {
                    "id": 9863,
                    "name": "Marion",
                    "slug": "marion-17",
                },
                "Lee": {
                    "id": 9862,
                    "name": "Lee",
                    "slug": "lee-14",
                },
                "Kleberg": {
                    "id": 9861,
                    "name": "Kleberg",
                    "slug": "kleberg",
                },
                "Kent": {
                    "id": 9860,
                    "name": "Kent",
                    "slug": "kent-4",
                },
                "Hopkins": {
                    "id": 9859,
                    "name": "Hopkins",
                    "slug": "hopkins-2",
                },
                "Hidalgo": {
                    "id": 9858,
                    "name": "Hidalgo",
                    "slug": "hidalgo-2",
                },
                "Hartley": {
                    "id": 9857,
                    "name": "Hartley",
                    "slug": "hartley",
                },
                "Guadalupe": {
                    "id": 9856,
                    "name": "Guadalupe",
                    "slug": "guadalupe-2",
                },
                "Glasscock": {
                    "id": 9855,
                    "name": "Glasscock",
                    "slug": "glasscock",
                },
                "Delta": {
                    "id": 9854,
                    "name": "Delta",
                    "slug": "delta-2",
                },
                "Culberson": {
                    "id": 9853,
                    "name": "Culberson",
                    "slug": "culberson",
                },
                "Calhoun": {
                    "id": 9852,
                    "name": "Calhoun",
                    "slug": "calhoun-9",
                },
                "Brazoria": {
                    "id": 9851,
                    "name": "Brazoria",
                    "slug": "brazoria",
                },
                "Borden": {
                    "id": 9850,
                    "name": "Borden",
                    "slug": "borden",
                },
                "Bexar": {
                    "id": 9849,
                    "name": "Bexar",
                    "slug": "bexar",
                },
                "Angelina": {
                    "id": 9848,
                    "name": "Angelina",
                    "slug": "angelina",
                },
                "Anderson": {
                    "id": 9847,
                    "name": "Anderson",
                    "slug": "anderson-5",
                },
                "Wood": {
                    "id": 9846,
                    "name": "Wood",
                    "slug": "wood-2",
                },
                "Ward": {
                    "id": 9845,
                    "name": "Ward",
                    "slug": "ward-2",
                },
                "Walker": {
                    "id": 9844,
                    "name": "Walker",
                    "slug": "walker-3",
                },
                "Tyler": {
                    "id": 9843,
                    "name": "Tyler",
                    "slug": "tyler",
                },
                "Titus": {
                    "id": 9842,
                    "name": "Titus",
                    "slug": "titus",
                },
                "Starr": {
                    "id": 9841,
                    "name": "Starr",
                    "slug": "starr",
                },
                "Schleicher": {
                    "id": 9840,
                    "name": "Schleicher",
                    "slug": "schleicher",
                },
                "Robertson": {
                    "id": 9839,
                    "name": "Robertson",
                    "slug": "robertson-3",
                },
                "Pecos": {
                    "id": 9838,
                    "name": "Pecos",
                    "slug": "pecos",
                },
                "Orange": {
                    "id": 9837,
                    "name": "Orange",
                    "slug": "orange-9",
                },
                "Nacogdoches": {
                    "id": 9836,
                    "name": "Nacogdoches",
                    "slug": "nacogdoches",
                },
                "Mills": {
                    "id": 9835,
                    "name": "Mills",
                    "slug": "mills-2",
                },
                "Leon": {
                    "id": 9834,
                    "name": "Leon",
                    "slug": "leon-2",
                },
                "Kenedy": {
                    "id": 9833,
                    "name": "Kenedy",
                    "slug": "kenedy",
                },
                "Jefferson": {
                    "id": 9832,
                    "name": "Jefferson",
                    "slug": "jefferson-25",
                },
                "Houston": {
                    "id": 9831,
                    "name": "Houston",
                    "slug": "houston-5",
                },
                "Henderson": {
                    "id": 9830,
                    "name": "Henderson",
                    "slug": "henderson-5",
                },
                "Galveston": {
                    "id": 9829,
                    "name": "Galveston",
                    "slug": "galveston",
                },
                "Foard": {
                    "id": 9828,
                    "name": "Foard",
                    "slug": "foard",
                },
                "El Paso": {
                    "id": 9827,
                    "name": "El Paso",
                    "slug": "el-paso-2",
                },
                "Ellis": {
                    "id": 9826,
                    "name": "Ellis",
                    "slug": "ellis-3",
                },
                "Crane": {
                    "id": 9825,
                    "name": "Crane",
                    "slug": "crane",
                },
                "Coleman": {
                    "id": 9824,
                    "name": "Coleman",
                    "slug": "coleman",
                },
                "Caldwell": {
                    "id": 9823,
                    "name": "Caldwell",
                    "slug": "caldwell-5",
                },
                "Bosque": {
                    "id": 9822,
                    "name": "Bosque",
                    "slug": "bosque",
                },
                "Baylor": {
                    "id": 9821,
                    "name": "Baylor",
                    "slug": "baylor",
                },
                "Armstrong": {
                    "id": 9820,
                    "name": "Armstrong",
                    "slug": "armstrong-2",
                },
            },
        },
    },
    "UT": {
        "id": 74,
        "name": "Utah",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Garfield": {
                    "id": 10102,
                    "name": "Garfield",
                    "slug": "garfield-5",
                },
                "Summit": {
                    "id": 10101,
                    "name": "Summit",
                    "slug": "summit-3",
                },
                "San Juan": {
                    "id": 10100,
                    "name": "San Juan",
                    "slug": "san-juan-3",
                },
                "Weber": {
                    "id": 10099,
                    "name": "Weber",
                    "slug": "weber",
                },
                "Rich": {
                    "id": 10098,
                    "name": "Rich",
                    "slug": "rich",
                },
                "Uintah": {
                    "id": 10097,
                    "name": "Uintah",
                    "slug": "uintah",
                },
                "Emery": {
                    "id": 10096,
                    "name": "Emery",
                    "slug": "emery",
                },
                "Davis": {
                    "id": 10095,
                    "name": "Davis",
                    "slug": "davis-2",
                },
                "Washington": {
                    "id": 10094,
                    "name": "Washington",
                    "slug": "washington-31",
                },
                "Piute": {
                    "id": 10093,
                    "name": "Piute",
                    "slug": "piute",
                },
                "Sanpete": {
                    "id": 10092,
                    "name": "Sanpete",
                    "slug": "sanpete",
                },
                "Sevier": {
                    "id": 10091,
                    "name": "Sevier",
                    "slug": "sevier-3",
                },
                "Wayne": {
                    "id": 10090,
                    "name": "Wayne",
                    "slug": "wayne-15",
                },
                "Millard": {
                    "id": 10089,
                    "name": "Millard",
                    "slug": "millard",
                },
                "Iron": {
                    "id": 10088,
                    "name": "Iron",
                    "slug": "iron-2",
                },
                "Daggett": {
                    "id": 10087,
                    "name": "Daggett",
                    "slug": "daggett",
                },
                "Juab": {
                    "id": 10086,
                    "name": "Juab",
                    "slug": "juab",
                },
                "Cache": {
                    "id": 10085,
                    "name": "Cache",
                    "slug": "cache",
                },
                "Grand": {
                    "id": 10084,
                    "name": "Grand",
                    "slug": "grand-2",
                },
                "Carbon": {
                    "id": 10083,
                    "name": "Carbon",
                    "slug": "carbon-3",
                },
                "Wasatch": {
                    "id": 10082,
                    "name": "Wasatch",
                    "slug": "wasatch",
                },
                "Tooele": {
                    "id": 10081,
                    "name": "Tooele",
                    "slug": "tooele",
                },
                "Utah": {
                    "id": 10080,
                    "name": "Utah",
                    "slug": "utah",
                },
                "Salt Lake": {
                    "id": 10079,
                    "name": "Salt Lake",
                    "slug": "salt-lake",
                },
                "Morgan": {
                    "id": 10078,
                    "name": "Morgan",
                    "slug": "morgan-10",
                },
                "Kane": {
                    "id": 10077,
                    "name": "Kane",
                    "slug": "kane-2",
                },
                "Duchesne": {
                    "id": 10076,
                    "name": "Duchesne",
                    "slug": "duchesne",
                },
                "Box Elder": {
                    "id": 10075,
                    "name": "Box Elder",
                    "slug": "box-elder",
                },
                "Beaver": {
                    "id": 10074,
                    "name": "Beaver",
                    "slug": "beaver-3",
                },
            },
        },
    },
    "VT": {
        "id": 75,
        "name": "Vermont",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {
                "Worcester": {
                    "id": 10348,
                    "name": "Worcester",
                    "slug": "worcester-3",
                },
                "Woodstock": {
                    "id": 10347,
                    "name": "Woodstock",
                    "slug": "woodstock-4",
                },
                "Woodford": {
                    "id": 10346,
                    "name": "Woodford",
                    "slug": "woodford-3",
                },
                "Woodbury": {
                    "id": 10345,
                    "name": "Woodbury",
                    "slug": "woodbury-3",
                },
                "Wolcott": {
                    "id": 10344,
                    "name": "Wolcott",
                    "slug": "wolcott-2",
                },
                "Winooski": {
                    "id": 10343,
                    "name": "Winooski",
                    "slug": "winooski",
                },
                "Winhall": {
                    "id": 10342,
                    "name": "Winhall",
                    "slug": "winhall",
                },
                "Windsor": {
                    "id": 10341,
                    "name": "Windsor",
                    "slug": "windsor-5",
                },
                "Windham": {
                    "id": 10340,
                    "name": "Windham",
                    "slug": "windham-4",
                },
                "Wilmington": {
                    "id": 10339,
                    "name": "Wilmington",
                    "slug": "wilmington-2",
                },
                "Williston": {
                    "id": 10338,
                    "name": "Williston",
                    "slug": "williston",
                },
                "Williamstown": {
                    "id": 10337,
                    "name": "Williamstown",
                    "slug": "williamstown-2",
                },
                "Whitingham": {
                    "id": 10336,
                    "name": "Whitingham",
                    "slug": "whitingham",
                },
                "Whiting": {
                    "id": 10335,
                    "name": "Whiting",
                    "slug": "whiting",
                },
                "Wheelock": {
                    "id": 10334,
                    "name": "Wheelock",
                    "slug": "wheelock",
                },
                "Weybridge": {
                    "id": 10333,
                    "name": "Weybridge",
                    "slug": "weybridge",
                },
                "Weston": {
                    "id": 10332,
                    "name": "Weston",
                    "slug": "weston-3",
                },
                "Westmore": {
                    "id": 10331,
                    "name": "Westmore",
                    "slug": "westmore",
                },
                "Westminster": {
                    "id": 10330,
                    "name": "Westminster",
                    "slug": "westminster-2",
                },
                "Westford": {
                    "id": 10329,
                    "name": "Westford",
                    "slug": "westford-2",
                },
                "Westfield": {
                    "id": 10328,
                    "name": "Westfield",
                    "slug": "westfield-3",
                },
                "West Windsor": {
                    "id": 10327,
                    "name": "West Windsor",
                    "slug": "west-windsor",
                },
                "West Rutland": {
                    "id": 10326,
                    "name": "West Rutland",
                    "slug": "west-rutland",
                },
                "West Haven": {
                    "id": 10325,
                    "name": "West Haven",
                    "slug": "west-haven-2",
                },
                "West Fairlee": {
                    "id": 10324,
                    "name": "West Fairlee",
                    "slug": "west-fairlee",
                },
                "Wells": {
                    "id": 10323,
                    "name": "Wells",
                    "slug": "wells-4",
                },
                "Weathersfield": {
                    "id": 10322,
                    "name": "Weathersfield",
                    "slug": "weathersfield",
                },
                "Waterville": {
                    "id": 10321,
                    "name": "Waterville",
                    "slug": "waterville-2",
                },
                "Waterford": {
                    "id": 10320,
                    "name": "Waterford",
                    "slug": "waterford-3",
                },
                "Waterbury": {
                    "id": 10319,
                    "name": "Waterbury",
                    "slug": "waterbury-2",
                },
                "Washington": {
                    "id": 10318,
                    "name": "Washington",
                    "slug": "washington-32",
                },
                "Warren": {
                    "id": 10317,
                    "name": "Warren",
                    "slug": "warren-town",
                },
                "Wardsboro": {
                    "id": 10316,
                    "name": "Wardsboro",
                    "slug": "wardsboro",
                },
                "Waltham": {
                    "id": 10315,
                    "name": "Waltham",
                    "slug": "waltham-2",
                },
                "Wallingford": {
                    "id": 10314,
                    "name": "Wallingford",
                    "slug": "wallingford-2",
                },
                "Walden": {
                    "id": 10313,
                    "name": "Walden",
                    "slug": "walden",
                },
                "Waitsfield": {
                    "id": 10312,
                    "name": "Waitsfield",
                    "slug": "waitsfield",
                },
                "Victory": {
                    "id": 10311,
                    "name": "Victory",
                    "slug": "victory",
                },
                "Vershire": {
                    "id": 10310,
                    "name": "Vershire",
                    "slug": "vershire",
                },
                "Vernon": {
                    "id": 10309,
                    "name": "Vernon",
                    "slug": "vernon-4",
                },
                "Vergennes": {
                    "id": 10308,
                    "name": "Vergennes",
                    "slug": "vergennes",
                },
                "Underihill": {
                    "id": 10307,
                    "name": "Underihill",
                    "slug": "underihill",
                },
                "Tunbridge": {
                    "id": 10306,
                    "name": "Tunbridge",
                    "slug": "tunbridge",
                },
                "Troy": {
                    "id": 10305,
                    "name": "Troy",
                    "slug": "troy-3",
                },
                "Townshend": {
                    "id": 10304,
                    "name": "Townshend",
                    "slug": "townshend",
                },
                "Topsham": {
                    "id": 10303,
                    "name": "Topsham",
                    "slug": "topsham-2",
                },
                "Tinmouth": {
                    "id": 10302,
                    "name": "Tinmouth",
                    "slug": "tinmouth",
                },
                "Thetford": {
                    "id": 10301,
                    "name": "Thetford",
                    "slug": "thetford",
                },
                "Swanton": {
                    "id": 10300,
                    "name": "Swanton",
                    "slug": "swanton",
                },
                "Sutton": {
                    "id": 10299,
                    "name": "Sutton",
                    "slug": "sutton-4",
                },
                "Sunderland": {
                    "id": 10298,
                    "name": "Sunderland",
                    "slug": "sunderland-2",
                },
                "Sudbury": {
                    "id": 10297,
                    "name": "Sudbury",
                    "slug": "sudbury-2",
                },
                "Stratton": {
                    "id": 10296,
                    "name": "Stratton",
                    "slug": "stratton",
                },
                "Strafford": {
                    "id": 10295,
                    "name": "Strafford",
                    "slug": "strafford-2",
                },
                "Stowe": {
                    "id": 10294,
                    "name": "Stowe",
                    "slug": "stowe",
                },
                "Stockbridge": {
                    "id": 10293,
                    "name": "Stockbridge",
                    "slug": "stockbridge-2",
                },
                "Starksboro": {
                    "id": 10292,
                    "name": "Starksboro",
                    "slug": "starksboro",
                },
                "Stannard": {
                    "id": 10291,
                    "name": "Stannard",
                    "slug": "stannard",
                },
                "Stamford": {
                    "id": 10290,
                    "name": "Stamford",
                    "slug": "stamford-2",
                },
                "Springfield": {
                    "id": 10289,
                    "name": "Springfield",
                    "slug": "springfield-3",
                },
                "South Hero": {
                    "id": 10288,
                    "name": "South Hero",
                    "slug": "south-hero",
                },
                "South Burlington": {
                    "id": 10287,
                    "name": "South Burlington",
                    "slug": "south-burlington",
                },
                "Shrewsbury": {
                    "id": 10286,
                    "name": "Shrewsbury",
                    "slug": "shrewsbury-2",
                },
                "Shoreham": {
                    "id": 10285,
                    "name": "Shoreham",
                    "slug": "shoreham",
                },
                "Sheldon": {
                    "id": 10284,
                    "name": "Sheldon",
                    "slug": "sheldon",
                },
                "Shelburne": {
                    "id": 10283,
                    "name": "Shelburne",
                    "slug": "shelburne-3",
                },
                "Sheffield": {
                    "id": 10282,
                    "name": "Sheffield",
                    "slug": "sheffield-2",
                },
                "Sharon": {
                    "id": 10281,
                    "name": "Sharon",
                    "slug": "sharon-4",
                },
                "Shaftsbury": {
                    "id": 10280,
                    "name": "Shaftsbury",
                    "slug": "shaftsbury",
                },
                "Searsburg": {
                    "id": 10279,
                    "name": "Searsburg",
                    "slug": "searsburg",
                },
                "Sandgate": {
                    "id": 10278,
                    "name": "Sandgate",
                    "slug": "sandgate",
                },
                "Salisbury": {
                    "id": 10277,
                    "name": "Salisbury",
                    "slug": "salisbury-4",
                },
                "St. Johnsbury": {
                    "id": 10276,
                    "name": "St. Johnsbury",
                    "slug": "saint-johnsbury",
                },
                "St. George": {
                    "id": 10275,
                    "name": "St. George",
                    "slug": "saint-george-2",
                },
                "St. Albans (Town)": {
                    "id": 10274,
                    "name": "St. Albans (Town)",
                    "slug": "saint-albans-town",
                },
                "St. Albans (City)": {
                    "id": 10273,
                    "name": "St. Albans (City)",
                    "slug": "saint-albans-city",
                },
                "Ryegate": {
                    "id": 10272,
                    "name": "Ryegate",
                    "slug": "ryegate",
                },
                "Rutland (Town)": {
                    "id": 10271,
                    "name": "Rutland (Town)",
                    "slug": "rutland-town",
                },
                "Rutland (City)": {
                    "id": 10270,
                    "name": "Rutland (City)",
                    "slug": "rutland-city",
                },
                "Rupert": {
                    "id": 10269,
                    "name": "Rupert",
                    "slug": "rupert",
                },
                "Royalton": {
                    "id": 10268,
                    "name": "Royalton",
                    "slug": "royalton",
                },
                "Roxbury": {
                    "id": 10267,
                    "name": "Roxbury",
                    "slug": "roxbury-3",
                },
                "Rockingham": {
                    "id": 10266,
                    "name": "Rockingham",
                    "slug": "rockingham-2",
                },
                "Rochester": {
                    "id": 10265,
                    "name": "Rochester",
                    "slug": "rochester-3",
                },
                "Ripton": {
                    "id": 10264,
                    "name": "Ripton",
                    "slug": "ripton",
                },
                "Richmond": {
                    "id": 10263,
                    "name": "Richmond",
                    "slug": "richmond-7",
                },
                "Richford": {
                    "id": 10262,
                    "name": "Richford",
                    "slug": "richford",
                },
                "Readsboro": {
                    "id": 10261,
                    "name": "Readsboro",
                    "slug": "readsboro",
                },
                "Reading": {
                    "id": 10260,
                    "name": "Reading",
                    "slug": "reading-2",
                },
                "Randolph": {
                    "id": 10259,
                    "name": "Randolph",
                    "slug": "randolph-11",
                },
                "Putney": {
                    "id": 10258,
                    "name": "Putney",
                    "slug": "putney",
                },
                "Proctor": {
                    "id": 10257,
                    "name": "Proctor",
                    "slug": "proctor",
                },
                "Pownal": {
                    "id": 10256,
                    "name": "Pownal",
                    "slug": "pownal-2",
                },
                "Poultney": {
                    "id": 10255,
                    "name": "Poultney",
                    "slug": "poultney",
                },
                "Pomfret": {
                    "id": 10254,
                    "name": "Pomfret",
                    "slug": "pomfret-2",
                },
                "Plymouth": {
                    "id": 10253,
                    "name": "Plymouth",
                    "slug": "plymouth-6",
                },
                "Plainfield": {
                    "id": 10252,
                    "name": "Plainfield",
                    "slug": "plainfield-4",
                },
                "Pittsford": {
                    "id": 10251,
                    "name": "Pittsford",
                    "slug": "pittsford",
                },
                "Pittsfield": {
                    "id": 10250,
                    "name": "Pittsfield",
                    "slug": "pittsfield-4",
                },
                "Peru": {
                    "id": 10249,
                    "name": "Peru",
                    "slug": "peru-3",
                },
                "Peacham": {
                    "id": 10248,
                    "name": "Peacham",
                    "slug": "peacham",
                },
                "Pawlet": {
                    "id": 10247,
                    "name": "Pawlet",
                    "slug": "pawlet",
                },
                "Panton": {
                    "id": 10246,
                    "name": "Panton",
                    "slug": "panton",
                },
                "Orwell": {
                    "id": 10245,
                    "name": "Orwell",
                    "slug": "orwell",
                },
                "Orange": {
                    "id": 10244,
                    "name": "Orange",
                    "slug": "orange-10",
                },
                "Norwich": {
                    "id": 10243,
                    "name": "Norwich",
                    "slug": "norwich-2",
                },
                "Norton": {
                    "id": 10242,
                    "name": "Norton",
                    "slug": "norton-3",
                },
                "Northfield": {
                    "id": 10241,
                    "name": "Northfield",
                    "slug": "northfield-3",
                },
                "North Hero": {
                    "id": 10240,
                    "name": "North Hero",
                    "slug": "north-hero",
                },
                "Newport (Town)": {
                    "id": 10239,
                    "name": "Newport (Town)",
                    "slug": "newport-town",
                },
                "Newport (City)": {
                    "id": 10238,
                    "name": "Newport (City)",
                    "slug": "newport-city",
                },
                "Newfane": {
                    "id": 10237,
                    "name": "Newfane",
                    "slug": "newfane",
                },
                "Newbury": {
                    "id": 10236,
                    "name": "Newbury",
                    "slug": "newbury-3",
                },
                "Newark": {
                    "id": 10235,
                    "name": "Newark",
                    "slug": "newark",
                },
                "New Haven": {
                    "id": 10234,
                    "name": "New Haven",
                    "slug": "new-haven-2",
                },
                "Mount Tabor": {
                    "id": 10233,
                    "name": "Mount Tabor",
                    "slug": "mount-tabor",
                },
                "Mount Holly": {
                    "id": 10232,
                    "name": "Mount Holly",
                    "slug": "mount-holly",
                },
                "Morristown": {
                    "id": 10231,
                    "name": "Morristown",
                    "slug": "morristown",
                },
                "Morgan": {
                    "id": 10230,
                    "name": "Morgan",
                    "slug": "morgan-11",
                },
                "Moretown": {
                    "id": 10229,
                    "name": "Moretown",
                    "slug": "moretown",
                },
                "Montpelier": {
                    "id": 10228,
                    "name": "Montpelier",
                    "slug": "montpelier",
                },
                "Montgomery": {
                    "id": 10227,
                    "name": "Montgomery",
                    "slug": "montgomery-19",
                },
                "Monkton": {
                    "id": 10226,
                    "name": "Monkton",
                    "slug": "monkton",
                },
                "Milton": {
                    "id": 10225,
                    "name": "Milton",
                    "slug": "milton-3",
                },
                "Middletown Springs": {
                    "id": 10224,
                    "name": "Middletown Springs",
                    "slug": "middletown-springs",
                },
                "Middlesex": {
                    "id": 10223,
                    "name": "Middlesex",
                    "slug": "middlesex-2",
                },
                "Middlebury": {
                    "id": 10222,
                    "name": "Middlebury",
                    "slug": "middlebury-2",
                },
                "Mendon": {
                    "id": 10221,
                    "name": "Mendon",
                    "slug": "mendon-2",
                },
                "Marshfield": {
                    "id": 10220,
                    "name": "Marshfield",
                    "slug": "marshfield-3",
                },
                "Marlboro": {
                    "id": 10219,
                    "name": "Marlboro",
                    "slug": "marlboro-2",
                },
                "Manchester": {
                    "id": 10218,
                    "name": "Manchester",
                    "slug": "manchester-4",
                },
                "Maidstone": {
                    "id": 10217,
                    "name": "Maidstone",
                    "slug": "maidstone",
                },
                "Lyndon": {
                    "id": 10216,
                    "name": "Lyndon",
                    "slug": "lyndon",
                },
                "Lunenburg": {
                    "id": 10215,
                    "name": "Lunenburg",
                    "slug": "lunenburg-2",
                },
                "Ludlow": {
                    "id": 10214,
                    "name": "Ludlow",
                    "slug": "ludlow-2",
                },
                "Lowell": {
                    "id": 10213,
                    "name": "Lowell",
                    "slug": "lowell-2",
                },
                "Londonderry": {
                    "id": 10212,
                    "name": "Londonderry",
                    "slug": "londonderry-2",
                },
                "Lincoln": {
                    "id": 10211,
                    "name": "Lincoln",
                    "slug": "lincoln-24",
                },
                "Lemington": {
                    "id": 10210,
                    "name": "Lemington",
                    "slug": "lemington",
                },
                "Leicester": {
                    "id": 10209,
                    "name": "Leicester",
                    "slug": "leicester-2",
                },
                "Landgrove": {
                    "id": 10208,
                    "name": "Landgrove",
                    "slug": "landgrove",
                },
                "Kirby": {
                    "id": 10207,
                    "name": "Kirby",
                    "slug": "kirby",
                },
                "Killington": {
                    "id": 10206,
                    "name": "Killington",
                    "slug": "killington",
                },
                "Johnson": {
                    "id": 10205,
                    "name": "Johnson",
                    "slug": "johnson-12",
                },
                "Jericho": {
                    "id": 10204,
                    "name": "Jericho",
                    "slug": "jericho",
                },
                "Jay": {
                    "id": 10203,
                    "name": "Jay",
                    "slug": "jay-3",
                },
                "Jamaica": {
                    "id": 10202,
                    "name": "Jamaica",
                    "slug": "jamaica",
                },
                "Isle La Motte": {
                    "id": 10201,
                    "name": "Isle La Motte",
                    "slug": "isle-la-motte",
                },
                "Irasburg": {
                    "id": 10200,
                    "name": "Irasburg",
                    "slug": "irasburg",
                },
                "Ira": {
                    "id": 10199,
                    "name": "Ira",
                    "slug": "ira",
                },
                "Hyde Park": {
                    "id": 10198,
                    "name": "Hyde Park",
                    "slug": "hyde-park",
                },
                "Huntington": {
                    "id": 10197,
                    "name": "Huntington",
                    "slug": "huntington-3",
                },
                "Hubbardton": {
                    "id": 10196,
                    "name": "Hubbardton",
                    "slug": "hubbardton",
                },
                "Holland": {
                    "id": 10195,
                    "name": "Holland",
                    "slug": "holland-2",
                },
                "Hinesburg": {
                    "id": 10194,
                    "name": "Hinesburg",
                    "slug": "hinesburg",
                },
                "Highgate": {
                    "id": 10193,
                    "name": "Highgate",
                    "slug": "highgate",
                },
                "Hartland": {
                    "id": 10192,
                    "name": "Hartland",
                    "slug": "hartland-3",
                },
                "Hartford": {
                    "id": 10191,
                    "name": "Hartford",
                    "slug": "hartford-3",
                },
                "Hardwick": {
                    "id": 10190,
                    "name": "Hardwick",
                    "slug": "hardwick-2",
                },
                "Hancock": {
                    "id": 10189,
                    "name": "Hancock",
                    "slug": "hancock-12",
                },
                "Halifax": {
                    "id": 10188,
                    "name": "Halifax",
                    "slug": "halifax-3",
                },
                "Guilford": {
                    "id": 10187,
                    "name": "Guilford",
                    "slug": "guilford-4",
                },
                "Guildhall": {
                    "id": 10186,
                    "name": "Guildhall",
                    "slug": "guildhall",
                },
                "Groton": {
                    "id": 10185,
                    "name": "Groton",
                    "slug": "groton-4",
                },
                "Greensboro": {
                    "id": 10184,
                    "name": "Greensboro",
                    "slug": "greensboro",
                },
                "Granville": {
                    "id": 10183,
                    "name": "Granville",
                    "slug": "granville-3",
                },
                "Grand Isle": {
                    "id": 10182,
                    "name": "Grand Isle",
                    "slug": "grand-isle",
                },
                "Granby": {
                    "id": 10181,
                    "name": "Granby",
                    "slug": "granby-3",
                },
                "Grafton": {
                    "id": 10180,
                    "name": "Grafton",
                    "slug": "grafton-3",
                },
                "Goshen": {
                    "id": 10179,
                    "name": "Goshen",
                    "slug": "goshen-4",
                },
                "Glover": {
                    "id": 10178,
                    "name": "Glover",
                    "slug": "glover",
                },
                "Georgia": {
                    "id": 10177,
                    "name": "Georgia",
                    "slug": "georgia",
                },
                "Franklin": {
                    "id": 10176,
                    "name": "Franklin",
                    "slug": "franklin-25",
                },
                "Fletcher": {
                    "id": 10175,
                    "name": "Fletcher",
                    "slug": "fletcher",
                },
                "Ferrisburgh": {
                    "id": 10174,
                    "name": "Ferrisburgh",
                    "slug": "ferrisburgh",
                },
                "Fayston": {
                    "id": 10173,
                    "name": "Fayston",
                    "slug": "fayston",
                },
                "Fairlee": {
                    "id": 10172,
                    "name": "Fairlee",
                    "slug": "fairlee",
                },
                "Fairfield": {
                    "id": 10171,
                    "name": "Fairfield",
                    "slug": "fairfield-5",
                },
                "Fairfax": {
                    "id": 10170,
                    "name": "Fairfax",
                    "slug": "fairfax",
                },
                "Fair Haven": {
                    "id": 10169,
                    "name": "Fair Haven",
                    "slug": "fair-haven",
                },
                "Essex": {
                    "id": 10168,
                    "name": "Essex",
                    "slug": "essex-5",
                },
                "Enosburgh": {
                    "id": 10167,
                    "name": "Enosburgh",
                    "slug": "enosburgh",
                },
                "Elmore": {
                    "id": 10166,
                    "name": "Elmore",
                    "slug": "elmore-3",
                },
                "Eden": {
                    "id": 10165,
                    "name": "Eden",
                    "slug": "eden",
                },
                "East Montpelier": {
                    "id": 10164,
                    "name": "East Montpelier",
                    "slug": "east-montpelier",
                },
                "East Haven": {
                    "id": 10163,
                    "name": "East Haven",
                    "slug": "east-haven-2",
                },
                "Duxbury": {
                    "id": 10162,
                    "name": "Duxbury",
                    "slug": "duxbury-2",
                },
                "Dummerston": {
                    "id": 10161,
                    "name": "Dummerston",
                    "slug": "dummerston",
                },
                "Dover": {
                    "id": 10160,
                    "name": "Dover",
                    "slug": "dover-3",
                },
                "Dorset": {
                    "id": 10159,
                    "name": "Dorset",
                    "slug": "dorset",
                },
                "Derby": {
                    "id": 10158,
                    "name": "Derby",
                    "slug": "derby-2",
                },
                "Danville": {
                    "id": 10157,
                    "name": "Danville",
                    "slug": "danville-3",
                },
                "Danby": {
                    "id": 10156,
                    "name": "Danby",
                    "slug": "danby",
                },
                "Craftsbury": {
                    "id": 10155,
                    "name": "Craftsbury",
                    "slug": "craftsbury",
                },
                "Coventry": {
                    "id": 10154,
                    "name": "Coventry",
                    "slug": "coventry-3",
                },
                "Cornwall": {
                    "id": 10153,
                    "name": "Cornwall",
                    "slug": "cornwall-2",
                },
                "Corinth": {
                    "id": 10152,
                    "name": "Corinth",
                    "slug": "corinth-2",
                },
                "Concord": {
                    "id": 10151,
                    "name": "Concord",
                    "slug": "concord-3",
                },
                "Colchester": {
                    "id": 10150,
                    "name": "Colchester",
                    "slug": "colchester-2",
                },
                "Clarendon": {
                    "id": 10149,
                    "name": "Clarendon",
                    "slug": "clarendon-2",
                },
                "Chittenden": {
                    "id": 10148,
                    "name": "Chittenden",
                    "slug": "chittenden",
                },
                "Chester": {
                    "id": 10147,
                    "name": "Chester",
                    "slug": "chester-8",
                },
                "Chelsea": {
                    "id": 10146,
                    "name": "Chelsea",
                    "slug": "chelsea-3",
                },
                "Charlotte": {
                    "id": 10145,
                    "name": "Charlotte",
                    "slug": "charlotte-2",
                },
                "Charleston": {
                    "id": 10144,
                    "name": "Charleston",
                    "slug": "charleston-3",
                },
                "Cavendish": {
                    "id": 10143,
                    "name": "Cavendish",
                    "slug": "cavendish",
                },
                "Castleton": {
                    "id": 10142,
                    "name": "Castleton",
                    "slug": "castleton",
                },
                "Canaan": {
                    "id": 10141,
                    "name": "Canaan",
                    "slug": "canaan-4",
                },
                "Cambridge": {
                    "id": 10140,
                    "name": "Cambridge",
                    "slug": "cambridge-3",
                },
                "Calais": {
                    "id": 10139,
                    "name": "Calais",
                    "slug": "calais-2",
                },
                "Cabot": {
                    "id": 10138,
                    "name": "Cabot",
                    "slug": "cabot",
                },
                "Burlington": {
                    "id": 10137,
                    "name": "Burlington",
                    "slug": "burlington-4",
                },
                "Burke": {
                    "id": 10136,
                    "name": "Burke",
                    "slug": "burke-4",
                },
                "Brunswick": {
                    "id": 10135,
                    "name": "Brunswick",
                    "slug": "brunswick-3",
                },
                "Brownington": {
                    "id": 10134,
                    "name": "Brownington",
                    "slug": "brownington",
                },
                "Brookline": {
                    "id": 10133,
                    "name": "Brookline",
                    "slug": "brookline-3",
                },
                "Brookfield": {
                    "id": 10132,
                    "name": "Brookfield",
                    "slug": "brookfield-4",
                },
                "Bristol": {
                    "id": 10131,
                    "name": "Bristol",
                    "slug": "bristol-5",
                },
                "Brighton": {
                    "id": 10130,
                    "name": "Brighton",
                    "slug": "brighton",
                },
                "Bridport": {
                    "id": 10129,
                    "name": "Bridport",
                    "slug": "bridport",
                },
                "Bridgewater": {
                    "id": 10128,
                    "name": "Bridgewater",
                    "slug": "bridgewater-5",
                },
                "Brattleboro": {
                    "id": 10127,
                    "name": "Brattleboro",
                    "slug": "brattleboro",
                },
                "Brandon": {
                    "id": 10126,
                    "name": "Brandon",
                    "slug": "brandon",
                },
                "Braintree": {
                    "id": 10125,
                    "name": "Braintree",
                    "slug": "braintree-2",
                },
                "Bradford": {
                    "id": 10124,
                    "name": "Bradford",
                    "slug": "bradford-5",
                },
                "Bolton": {
                    "id": 10123,
                    "name": "Bolton",
                    "slug": "bolton-3",
                },
                "Bloomfield": {
                    "id": 10122,
                    "name": "Bloomfield",
                    "slug": "bloomfield-2",
                },
                "Bethel": {
                    "id": 10121,
                    "name": "Bethel",
                    "slug": "bethel-3",
                },
                "Berlin": {
                    "id": 10120,
                    "name": "Berlin",
                    "slug": "berlin-4",
                },
                "Berkshire": {
                    "id": 10119,
                    "name": "Berkshire",
                    "slug": "berkshire",
                },
                "Benson": {
                    "id": 10118,
                    "name": "Benson",
                    "slug": "benson-2",
                },
                "Bennington": {
                    "id": 10117,
                    "name": "Bennington",
                    "slug": "bennington-2",
                },
                "Belvidere": {
                    "id": 10116,
                    "name": "Belvidere",
                    "slug": "belvidere",
                },
                "Barton": {
                    "id": 10115,
                    "name": "Barton",
                    "slug": "barton-3",
                },
                "Barre (Town)": {
                    "id": 10114,
                    "name": "Barre (Town)",
                    "slug": "barre-town",
                },
                "Barre (City)": {
                    "id": 10113,
                    "name": "Barre (City)",
                    "slug": "barre-city",
                },
                "Barnet": {
                    "id": 10112,
                    "name": "Barnet",
                    "slug": "barnet",
                },
                "Barnard": {
                    "id": 10111,
                    "name": "Barnard",
                    "slug": "barnard",
                },
                "Baltimore": {
                    "id": 10110,
                    "name": "Baltimore",
                    "slug": "baltimore-3",
                },
                "Bakersfield": {
                    "id": 10109,
                    "name": "Bakersfield",
                    "slug": "bakersfield",
                },
                "Athens": {
                    "id": 10108,
                    "name": "Athens",
                    "slug": "athens-3",
                },
                "Arlington": {
                    "id": 10107,
                    "name": "Arlington",
                    "slug": "arlington-2",
                },
                "Andover": {
                    "id": 10106,
                    "name": "Andover",
                    "slug": "andover-5",
                },
                "Alburgh": {
                    "id": 10105,
                    "name": "Alburgh",
                    "slug": "alburgh",
                },
                "Albany": {
                    "id": 10104,
                    "name": "Albany",
                    "slug": "albany-3",
                },
                "Addison": {
                    "id": 10103,
                    "name": "Addison",
                    "slug": "addison-2",
                },
            },
            "counties": {},
        },
    },
    "VA": {
        "id": 76,
        "name": "Virginia",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {
                "Manassas Park": {
                    "id": 10481,
                    "name": "Manassas Park",
                    "slug": "manassas-park",
                },
                "Winchester": {
                    "id": 10477,
                    "name": "Winchester",
                    "slug": "winchester-4",
                },
                "Williamsburg": {
                    "id": 10476,
                    "name": "Williamsburg",
                    "slug": "williamsburg-3",
                },
                "Waynesboro": {
                    "id": 10474,
                    "name": "Waynesboro",
                    "slug": "waynesboro",
                },
                "Virginia Beach": {
                    "id": 10471,
                    "name": "Virginia Beach",
                    "slug": "virginia-beach",
                },
                "Suffolk": {
                    "id": 10467,
                    "name": "Suffolk",
                    "slug": "suffolk-2",
                },
                "Staunton": {
                    "id": 10466,
                    "name": "Staunton",
                    "slug": "staunton",
                },
                "Salem": {
                    "id": 10459,
                    "name": "Salem",
                    "slug": "salem-5",
                },
                "Roanoke": {
                    "id": 10454,
                    "name": "Roanoke",
                    "slug": "roanoke",
                },
                "Richmond": {
                    "id": 10452,
                    "name": "Richmond",
                    "slug": "richmond-8",
                },
                "Radford": {
                    "id": 10450,
                    "name": "Radford",
                    "slug": "radford",
                },
                "Portsmouth": {
                    "id": 10444,
                    "name": "Portsmouth",
                    "slug": "portsmouth-3",
                },
                "Poquoson": {
                    "id": 10443,
                    "name": "Poquoson",
                    "slug": "poquoson",
                },
                "Petersburg": {
                    "id": 10441,
                    "name": "Petersburg",
                    "slug": "petersburg",
                },
                "Norton": {
                    "id": 10436,
                    "name": "Norton",
                    "slug": "norton-4",
                },
                "Norfolk": {
                    "id": 10433,
                    "name": "Norfolk",
                    "slug": "norfolk-3",
                },
                "Newport News": {
                    "id": 10432,
                    "name": "Newport News",
                    "slug": "newport-news",
                },
                "Martinsville": {
                    "id": 10425,
                    "name": "Martinsville",
                    "slug": "martinsville",
                },
                "Manassas": {
                    "id": 10424,
                    "name": "Manassas",
                    "slug": "manassas",
                },
                "Lynchburg": {
                    "id": 10422,
                    "name": "Lynchburg",
                    "slug": "lynchburg",
                },
                "Lexington": {
                    "id": 10418,
                    "name": "Lexington",
                    "slug": "lexington-3",
                },
                "Hopewell": {
                    "id": 10410,
                    "name": "Hopewell",
                    "slug": "hopewell",
                },
                "Harrisonburg": {
                    "id": 10406,
                    "name": "Harrisonburg",
                    "slug": "harrisonburg",
                },
                "Hampton": {
                    "id": 10404,
                    "name": "Hampton",
                    "slug": "hampton-4",
                },
                "Galax": {
                    "id": 10396,
                    "name": "Galax",
                    "slug": "galax",
                },
                "Fredericksburg": {
                    "id": 10395,
                    "name": "Fredericksburg",
                    "slug": "fredericksburg",
                },
                "Franklin": {
                    "id": 10392,
                    "name": "Franklin",
                    "slug": "franklin-26",
                },
                "Falls Church": {
                    "id": 10388,
                    "name": "Falls Church",
                    "slug": "falls-church",
                },
                "Fairfax": {
                    "id": 10386,
                    "name": "Fairfax",
                    "slug": "fairfax-2",
                },
                "Emporia": {
                    "id": 10384,
                    "name": "Emporia",
                    "slug": "emporia",
                },
                "Danville": {
                    "id": 10381,
                    "name": "Danville",
                    "slug": "danville-4",
                },
                "Covington": {
                    "id": 10377,
                    "name": "Covington",
                    "slug": "covington-3",
                },
                "Colonial Heights": {
                    "id": 10376,
                    "name": "Colonial Heights",
                    "slug": "colonial-heights",
                },
                "Chesapeake": {
                    "id": 10373,
                    "name": "Chesapeake",
                    "slug": "chesapeake",
                },
                "Charlottesville": {
                    "id": 10372,
                    "name": "Charlottesville",
                    "slug": "charlottesville",
                },
                "Buena Vista": {
                    "id": 10366,
                    "name": "Buena Vista",
                    "slug": "buena-vista-2",
                },
                "Bristol": {
                    "id": 10362,
                    "name": "Bristol",
                    "slug": "bristol-6",
                },
                "Alexandria": {
                    "id": 10351,
                    "name": "Alexandria",
                    "slug": "alexandria-2",
                },
            },
            "counties": {
                "York": {
                    "id": 10480,
                    "name": "York",
                    "slug": "york-5",
                },
                "Wythe": {
                    "id": 10479,
                    "name": "Wythe",
                    "slug": "wythe",
                },
                "Wise": {
                    "id": 10478,
                    "name": "Wise",
                    "slug": "wise-2",
                },
                "Westmoreland": {
                    "id": 10475,
                    "name": "Westmoreland",
                    "slug": "westmoreland-3",
                },
                "Washington": {
                    "id": 10473,
                    "name": "Washington",
                    "slug": "washington-33",
                },
                "Warren": {
                    "id": 10472,
                    "name": "Warren",
                    "slug": "warren-19",
                },
                "Tazewell": {
                    "id": 10470,
                    "name": "Tazewell",
                    "slug": "tazewell-2",
                },
                "Sussex": {
                    "id": 10469,
                    "name": "Sussex",
                    "slug": "sussex-3",
                },
                "Surry": {
                    "id": 10468,
                    "name": "Surry",
                    "slug": "surry-4",
                },
                "Stafford": {
                    "id": 10465,
                    "name": "Stafford",
                    "slug": "stafford-3",
                },
                "Spotsylvania": {
                    "id": 10464,
                    "name": "Spotsylvania",
                    "slug": "spotsylvania",
                },
                "Southampton": {
                    "id": 10463,
                    "name": "Southampton",
                    "slug": "southampton-2",
                },
                "Smyth": {
                    "id": 10462,
                    "name": "Smyth",
                    "slug": "smyth",
                },
                "Shenandoah": {
                    "id": 10461,
                    "name": "Shenandoah",
                    "slug": "shenandoah",
                },
                "Scott": {
                    "id": 10460,
                    "name": "Scott",
                    "slug": "scott-11",
                },
                "Russell": {
                    "id": 10458,
                    "name": "Russell",
                    "slug": "russell-5",
                },
                "Rockingham": {
                    "id": 10457,
                    "name": "Rockingham",
                    "slug": "rockingham-3",
                },
                "Rockbridge": {
                    "id": 10456,
                    "name": "Rockbridge",
                    "slug": "rockbridge",
                },
                "Roanoke": {
                    "id": 10455,
                    "name": "Roanoke",
                    "slug": "roanoke-2",
                },
                "Richmond": {
                    "id": 10453,
                    "name": "Richmond",
                    "slug": "richmond-9",
                },
                "Rappahannock": {
                    "id": 10451,
                    "name": "Rappahannock",
                    "slug": "rappahannock",
                },
                "Pulaski": {
                    "id": 10449,
                    "name": "Pulaski",
                    "slug": "pulaski-7",
                },
                "Prince William": {
                    "id": 10448,
                    "name": "Prince William",
                    "slug": "prince-william",
                },
                "Prince George": {
                    "id": 10447,
                    "name": "Prince George",
                    "slug": "prince-george",
                },
                "Prince Edward": {
                    "id": 10446,
                    "name": "Prince Edward",
                    "slug": "prince-edward",
                },
                "Powhatan": {
                    "id": 10445,
                    "name": "Powhatan",
                    "slug": "powhatan",
                },
                "Pittsylvania": {
                    "id": 10442,
                    "name": "Pittsylvania",
                    "slug": "pittsylvania",
                },
                "Patrick": {
                    "id": 10440,
                    "name": "Patrick",
                    "slug": "patrick",
                },
                "Page": {
                    "id": 10439,
                    "name": "Page",
                    "slug": "page-2",
                },
                "Orange": {
                    "id": 10438,
                    "name": "Orange",
                    "slug": "orange-11",
                },
                "Nottoway": {
                    "id": 10437,
                    "name": "Nottoway",
                    "slug": "nottoway",
                },
                "Northumberland": {
                    "id": 10435,
                    "name": "Northumberland",
                    "slug": "northumberland-3",
                },
                "Northampton": {
                    "id": 10434,
                    "name": "Northampton",
                    "slug": "northampton-4",
                },
                "New Kent": {
                    "id": 10431,
                    "name": "New Kent",
                    "slug": "new-kent",
                },
                "Nelson": {
                    "id": 10430,
                    "name": "Nelson",
                    "slug": "nelson-4",
                },
                "Montgomery": {
                    "id": 10429,
                    "name": "Montgomery",
                    "slug": "montgomery-20",
                },
                "Middlesex": {
                    "id": 10428,
                    "name": "Middlesex",
                    "slug": "middlesex-3",
                },
                "Mecklenburg": {
                    "id": 10427,
                    "name": "Mecklenburg",
                    "slug": "mecklenburg-2",
                },
                "Mathews": {
                    "id": 10426,
                    "name": "Mathews",
                    "slug": "mathews",
                },
                "Madison": {
                    "id": 10423,
                    "name": "Madison",
                    "slug": "madison-23",
                },
                "Lunenburg": {
                    "id": 10421,
                    "name": "Lunenburg",
                    "slug": "lunenburg-3",
                },
                "Louisa": {
                    "id": 10420,
                    "name": "Louisa",
                    "slug": "louisa-2",
                },
                "Loudoun": {
                    "id": 10419,
                    "name": "Loudoun",
                    "slug": "loudoun",
                },
                "Lee": {
                    "id": 10417,
                    "name": "Lee",
                    "slug": "lee-15",
                },
                "Lancaster": {
                    "id": 10416,
                    "name": "Lancaster",
                    "slug": "lancaster-6",
                },
                "King William": {
                    "id": 10415,
                    "name": "King William",
                    "slug": "king-william",
                },
                "King George": {
                    "id": 10414,
                    "name": "King George",
                    "slug": "king-george",
                },
                "King and Queen": {
                    "id": 10413,
                    "name": "King and Queen",
                    "slug": "king-and-queen",
                },
                "James City County": {
                    "id": 10412,
                    "name": "James City County",
                    "slug": "james-city-county",
                },
                "Isle of Wight": {
                    "id": 10411,
                    "name": "Isle of Wight",
                    "slug": "isle-of-wight",
                },
                "Highland": {
                    "id": 10409,
                    "name": "Highland",
                    "slug": "highland-2",
                },
                "Henry": {
                    "id": 10408,
                    "name": "Henry",
                    "slug": "henry-10",
                },
                "Henrico": {
                    "id": 10407,
                    "name": "Henrico",
                    "slug": "henrico",
                },
                "Hanover": {
                    "id": 10405,
                    "name": "Hanover",
                    "slug": "hanover-3",
                },
                "Halifax": {
                    "id": 10403,
                    "name": "Halifax",
                    "slug": "halifax-4",
                },
                "Greensville": {
                    "id": 10402,
                    "name": "Greensville",
                    "slug": "greensville",
                },
                "Greene": {
                    "id": 10401,
                    "name": "Greene",
                    "slug": "greene-15",
                },
                "Grayson": {
                    "id": 10400,
                    "name": "Grayson",
                    "slug": "grayson-3",
                },
                "Goochland": {
                    "id": 10399,
                    "name": "Goochland",
                    "slug": "goochland",
                },
                "Gloucester": {
                    "id": 10398,
                    "name": "Gloucester",
                    "slug": "gloucester-3",
                },
                "Giles": {
                    "id": 10397,
                    "name": "Giles",
                    "slug": "giles-2",
                },
                "Frederick": {
                    "id": 10394,
                    "name": "Frederick",
                    "slug": "frederick-2",
                },
                "Franklin": {
                    "id": 10393,
                    "name": "Franklin",
                    "slug": "franklin-27",
                },
                "Fluvanna": {
                    "id": 10391,
                    "name": "Fluvanna",
                    "slug": "fluvanna",
                },
                "Floyd": {
                    "id": 10390,
                    "name": "Floyd",
                    "slug": "floyd-6",
                },
                "Fauquier": {
                    "id": 10389,
                    "name": "Fauquier",
                    "slug": "fauquier",
                },
                "Fairfax": {
                    "id": 10387,
                    "name": "Fairfax",
                    "slug": "fairfax-3",
                },
                "Essex": {
                    "id": 10385,
                    "name": "Essex",
                    "slug": "essex-6",
                },
                "Dinwiddie": {
                    "id": 10383,
                    "name": "Dinwiddie",
                    "slug": "dinwiddie",
                },
                "Dickenson": {
                    "id": 10382,
                    "name": "Dickenson",
                    "slug": "dickenson",
                },
                "Cumberland": {
                    "id": 10380,
                    "name": "Cumberland",
                    "slug": "cumberland-9",
                },
                "Culpeper": {
                    "id": 10379,
                    "name": "Culpeper",
                    "slug": "culpeper",
                },
                "Craig": {
                    "id": 10378,
                    "name": "Craig",
                    "slug": "craig-2",
                },
                "Clarke": {
                    "id": 10375,
                    "name": "Clarke",
                    "slug": "clarke-5",
                },
                "Chesterfield": {
                    "id": 10374,
                    "name": "Chesterfield",
                    "slug": "chesterfield-4",
                },
                "Charlotte": {
                    "id": 10371,
                    "name": "Charlotte",
                    "slug": "charlotte-3",
                },
                "Charles City County": {
                    "id": 10370,
                    "name": "Charles City County",
                    "slug": "charles-city",
                },
                "Carroll": {
                    "id": 10369,
                    "name": "Carroll",
                    "slug": "carroll-13",
                },
                "Caroline": {
                    "id": 10368,
                    "name": "Caroline",
                    "slug": "caroline-2",
                },
                "Campbell": {
                    "id": 10367,
                    "name": "Campbell",
                    "slug": "campbell-4",
                },
                "Buckingham": {
                    "id": 10365,
                    "name": "Buckingham",
                    "slug": "buckingham",
                },
                "Buchanan": {
                    "id": 10364,
                    "name": "Buchanan",
                    "slug": "buchanan-3",
                },
                "Brunswick": {
                    "id": 10363,
                    "name": "Brunswick",
                    "slug": "brunswick-4",
                },
                "Botetourt": {
                    "id": 10361,
                    "name": "Botetourt",
                    "slug": "botetourt",
                },
                "Bland": {
                    "id": 10360,
                    "name": "Bland",
                    "slug": "bland",
                },
                "Bedford": {
                    "id": 10359,
                    "name": "Bedford",
                    "slug": "bedford-5",
                },
                "Bath": {
                    "id": 10358,
                    "name": "Bath",
                    "slug": "bath-4",
                },
                "Augusta": {
                    "id": 10357,
                    "name": "Augusta",
                    "slug": "augusta-2",
                },
                "Arlington": {
                    "id": 10356,
                    "name": "Arlington",
                    "slug": "arlington-3",
                },
                "Appomattox": {
                    "id": 10355,
                    "name": "Appomattox",
                    "slug": "appomattox",
                },
                "Amherst": {
                    "id": 10354,
                    "name": "Amherst",
                    "slug": "amherst-3",
                },
                "Amelia": {
                    "id": 10353,
                    "name": "Amelia",
                    "slug": "amelia",
                },
                "Alleghany": {
                    "id": 10352,
                    "name": "Alleghany",
                    "slug": "alleghany-2",
                },
                "Albemarle": {
                    "id": 10350,
                    "name": "Albemarle",
                    "slug": "albemarle",
                },
                "Accomack": {
                    "id": 10349,
                    "name": "Accomack",
                    "slug": "accomack",
                },
            },
        },
    },
    "WA": {
        "id": 77,
        "name": "Washington",
        "has_all_mail_elections": true,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Mason": {
                    "id": 10520,
                    "name": "Mason",
                    "slug": "mason-5",
                },
                "Grant": {
                    "id": 10519,
                    "name": "Grant",
                    "slug": "grant-13",
                },
                "Yakima": {
                    "id": 10518,
                    "name": "Yakima",
                    "slug": "yakima",
                },
                "Skagit": {
                    "id": 10517,
                    "name": "Skagit",
                    "slug": "skagit",
                },
                "Lincoln": {
                    "id": 10516,
                    "name": "Lincoln",
                    "slug": "lincoln-25",
                },
                "Cowlitz": {
                    "id": 10515,
                    "name": "Cowlitz",
                    "slug": "cowlitz",
                },
                "Klickitat": {
                    "id": 10514,
                    "name": "Klickitat",
                    "slug": "klickitat",
                },
                "Asotin": {
                    "id": 10513,
                    "name": "Asotin",
                    "slug": "asotin",
                },
                "Wahkiakum": {
                    "id": 10512,
                    "name": "Wahkiakum",
                    "slug": "wahkiakum",
                },
                "Garfield": {
                    "id": 10511,
                    "name": "Garfield",
                    "slug": "garfield-6",
                },
                "Pierce": {
                    "id": 10510,
                    "name": "Pierce",
                    "slug": "pierce-4",
                },
                "Spokane": {
                    "id": 10509,
                    "name": "Spokane",
                    "slug": "spokane",
                },
                "Adams": {
                    "id": 10508,
                    "name": "Adams",
                    "slug": "adams-12",
                },
                "Skamania": {
                    "id": 10507,
                    "name": "Skamania",
                    "slug": "skamania",
                },
                "Pend Oreille": {
                    "id": 10506,
                    "name": "Pend Oreille",
                    "slug": "pend-oreille",
                },
                "Lewis": {
                    "id": 10505,
                    "name": "Lewis",
                    "slug": "lewis-6",
                },
                "Kitsap": {
                    "id": 10504,
                    "name": "Kitsap",
                    "slug": "kitsap",
                },
                "Island": {
                    "id": 10503,
                    "name": "Island",
                    "slug": "island",
                },
                "Columbia": {
                    "id": 10502,
                    "name": "Columbia",
                    "slug": "columbia-9",
                },
                "San Juan": {
                    "id": 10501,
                    "name": "San Juan",
                    "slug": "san-juan-4",
                },
                "Franklin": {
                    "id": 10500,
                    "name": "Franklin",
                    "slug": "franklin-28",
                },
                "Whitman": {
                    "id": 10499,
                    "name": "Whitman",
                    "slug": "whitman-2",
                },
                "Ferry": {
                    "id": 10498,
                    "name": "Ferry",
                    "slug": "ferry",
                },
                "Thurston": {
                    "id": 10497,
                    "name": "Thurston",
                    "slug": "thurston-2",
                },
                "King": {
                    "id": 10496,
                    "name": "King",
                    "slug": "king-2",
                },
                "Clark": {
                    "id": 10495,
                    "name": "Clark",
                    "slug": "clark-11",
                },
                "Grays Harbor": {
                    "id": 10494,
                    "name": "Grays Harbor",
                    "slug": "grays-harbor",
                },
                "Whatcom": {
                    "id": 10493,
                    "name": "Whatcom",
                    "slug": "whatcom",
                },
                "Walla Walla": {
                    "id": 10492,
                    "name": "Walla Walla",
                    "slug": "walla-walla",
                },
                "Snohomish": {
                    "id": 10491,
                    "name": "Snohomish",
                    "slug": "snohomish",
                },
                "Pacific": {
                    "id": 10490,
                    "name": "Pacific",
                    "slug": "pacific",
                },
                "Okanogan": {
                    "id": 10489,
                    "name": "Okanogan",
                    "slug": "okanogan",
                },
                "Stevens": {
                    "id": 10488,
                    "name": "Stevens",
                    "slug": "stevens-3",
                },
                "Kittitas": {
                    "id": 10487,
                    "name": "Kittitas",
                    "slug": "kittitas",
                },
                "Jefferson": {
                    "id": 10486,
                    "name": "Jefferson",
                    "slug": "jefferson-26",
                },
                "Douglas": {
                    "id": 10485,
                    "name": "Douglas",
                    "slug": "douglas-12",
                },
                "Clallam": {
                    "id": 10484,
                    "name": "Clallam",
                    "slug": "clallam",
                },
                "Chelan": {
                    "id": 10483,
                    "name": "Chelan",
                    "slug": "chelan",
                },
                "Benton": {
                    "id": 10482,
                    "name": "Benton",
                    "slug": "benton-11",
                },
            },
        },
    },
    "WV": {
        "id": 78,
        "name": "West Virginia",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Wood": {
                    "id": 10575,
                    "name": "Wood",
                    "slug": "wood-3",
                },
                "Greenbrier": {
                    "id": 10574,
                    "name": "Greenbrier",
                    "slug": "greenbrier",
                },
                "Raleigh": {
                    "id": 10573,
                    "name": "Raleigh",
                    "slug": "raleigh",
                },
                "Tyler": {
                    "id": 10572,
                    "name": "Tyler",
                    "slug": "tyler-2",
                },
                "McDowell": {
                    "id": 10571,
                    "name": "McDowell",
                    "slug": "mcdowell-2",
                },
                "Ritchie": {
                    "id": 10570,
                    "name": "Ritchie",
                    "slug": "ritchie",
                },
                "Hardy": {
                    "id": 10569,
                    "name": "Hardy",
                    "slug": "hardy",
                },
                "Wetzel": {
                    "id": 10568,
                    "name": "Wetzel",
                    "slug": "wetzel",
                },
                "Gilmer": {
                    "id": 10567,
                    "name": "Gilmer",
                    "slug": "gilmer-2",
                },
                "Taylor": {
                    "id": 10566,
                    "name": "Taylor",
                    "slug": "taylor-6",
                },
                "Wirt": {
                    "id": 10565,
                    "name": "Wirt",
                    "slug": "wirt",
                },
                "Hancock": {
                    "id": 10564,
                    "name": "Hancock",
                    "slug": "hancock-13",
                },
                "Ohio": {
                    "id": 10563,
                    "name": "Ohio",
                    "slug": "ohio-3",
                },
                "Jackson": {
                    "id": 10562,
                    "name": "Jackson",
                    "slug": "jackson-24",
                },
                "Putnam": {
                    "id": 10561,
                    "name": "Putnam",
                    "slug": "putnam-10",
                },
                "Marshall": {
                    "id": 10560,
                    "name": "Marshall",
                    "slug": "marshall-12",
                },
                "Preston": {
                    "id": 10559,
                    "name": "Preston",
                    "slug": "preston-2",
                },
                "Mason": {
                    "id": 10558,
                    "name": "Mason",
                    "slug": "mason-6",
                },
                "Brooke": {
                    "id": 10557,
                    "name": "Brooke",
                    "slug": "brooke",
                },
                "Summers": {
                    "id": 10556,
                    "name": "Summers",
                    "slug": "summers",
                },
                "Monongalia": {
                    "id": 10555,
                    "name": "Monongalia",
                    "slug": "monongalia",
                },
                "Mercer": {
                    "id": 10554,
                    "name": "Mercer",
                    "slug": "mercer-9",
                },
                "Webster": {
                    "id": 10553,
                    "name": "Webster",
                    "slug": "webster-10",
                },
                "Upshur": {
                    "id": 10552,
                    "name": "Upshur",
                    "slug": "upshur-2",
                },
                "Pleasants": {
                    "id": 10551,
                    "name": "Pleasants",
                    "slug": "pleasants",
                },
                "Marion": {
                    "id": 10550,
                    "name": "Marion",
                    "slug": "marion-18",
                },
                "Clay": {
                    "id": 10549,
                    "name": "Clay",
                    "slug": "clay-18",
                },
                "Cabell": {
                    "id": 10548,
                    "name": "Cabell",
                    "slug": "cabell",
                },
                "Harrison": {
                    "id": 10547,
                    "name": "Harrison",
                    "slug": "harrison-9",
                },
                "Randolph": {
                    "id": 10546,
                    "name": "Randolph",
                    "slug": "randolph-12",
                },
                "Wyoming": {
                    "id": 10545,
                    "name": "Wyoming",
                    "slug": "wyoming-3",
                },
                "Grant": {
                    "id": 10544,
                    "name": "Grant",
                    "slug": "grant-14",
                },
                "Mingo": {
                    "id": 10543,
                    "name": "Mingo",
                    "slug": "mingo",
                },
                "Wayne": {
                    "id": 10542,
                    "name": "Wayne",
                    "slug": "wayne-16",
                },
                "Tucker": {
                    "id": 10541,
                    "name": "Tucker",
                    "slug": "tucker",
                },
                "Pocahontas": {
                    "id": 10540,
                    "name": "Pocahontas",
                    "slug": "pocahontas-2",
                },
                "Pendleton": {
                    "id": 10539,
                    "name": "Pendleton",
                    "slug": "pendleton-2",
                },
                "Morgan": {
                    "id": 10538,
                    "name": "Morgan",
                    "slug": "morgan-12",
                },
                "Mineral": {
                    "id": 10537,
                    "name": "Mineral",
                    "slug": "mineral-4",
                },
                "Lincoln": {
                    "id": 10536,
                    "name": "Lincoln",
                    "slug": "lincoln-26",
                },
                "Lewis": {
                    "id": 10535,
                    "name": "Lewis",
                    "slug": "lewis-7",
                },
                "Jefferson": {
                    "id": 10534,
                    "name": "Jefferson",
                    "slug": "jefferson-27",
                },
                "Hampshire": {
                    "id": 10533,
                    "name": "Hampshire",
                    "slug": "hampshire",
                },
                "Fayette": {
                    "id": 10532,
                    "name": "Fayette",
                    "slug": "fayette-12",
                },
                "Doddridge": {
                    "id": 10531,
                    "name": "Doddridge",
                    "slug": "doddridge",
                },
                "Calhoun": {
                    "id": 10530,
                    "name": "Calhoun",
                    "slug": "calhoun-10",
                },
                "Braxton": {
                    "id": 10529,
                    "name": "Braxton",
                    "slug": "braxton",
                },
                "Berkeley": {
                    "id": 10528,
                    "name": "Berkeley",
                    "slug": "berkeley-2",
                },
                "Roane": {
                    "id": 10527,
                    "name": "Roane",
                    "slug": "roane-2",
                },
                "Nicholas": {
                    "id": 10526,
                    "name": "Nicholas",
                    "slug": "nicholas-2",
                },
                "Monroe": {
                    "id": 10525,
                    "name": "Monroe",
                    "slug": "monroe-19",
                },
                "Logan": {
                    "id": 10524,
                    "name": "Logan",
                    "slug": "logan-10",
                },
                "Kanawha": {
                    "id": 10523,
                    "name": "Kanawha",
                    "slug": "kanawha",
                },
                "Boone": {
                    "id": 10522,
                    "name": "Boone",
                    "slug": "boone-8",
                },
                "Barbour": {
                    "id": 10521,
                    "name": "Barbour",
                    "slug": "barbour-2",
                },
            },
        },
    },
    "WI": {
        "id": 79,
        "name": "Wisconsin",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {
                "Lincoln, Vilas County": {
                    "id": 10936,
                    "name": "Lincoln, Vilas County",
                    "slug": "lincoln-vilas-county",
                },
                "Hamilton, La Crosse County": {
                    "id": 10935,
                    "name": "Hamilton, La Crosse County",
                    "slug": "hamilton-la-crosse-county",
                },
                "Fox Lake, Dodge County": {
                    "id": 10934,
                    "name": "Fox Lake, Dodge County",
                    "slug": "fox-lake-dodge-county",
                },
                "Deerfield, Dane County": {
                    "id": 10933,
                    "name": "Deerfield, Dane County",
                    "slug": "deerfield-dane-county",
                },
                "Yorkville, Racine County": {
                    "id": 10932,
                    "name": "Yorkville, Racine County",
                    "slug": "yorkville-racine-county",
                },
                "Wrightstown": {
                    "id": 10931,
                    "name": "Wrightstown",
                    "slug": "wrightstown",
                },
                "Wisconsin Dells": {
                    "id": 10930,
                    "name": "Wisconsin Dells",
                    "slug": "wisconsin-dells",
                },
                "Wilson, Sheboygan County": {
                    "id": 10929,
                    "name": "Wilson, Sheboygan County",
                    "slug": "wilson-sheboygan-county",
                },
                "Williams Bay, Walworth County": {
                    "id": 10928,
                    "name": "Williams Bay, Walworth County",
                    "slug": "williams-bay-walworth-county",
                },
                "Wheaton, Chippewa County": {
                    "id": 10927,
                    "name": "Wheaton, Chippewa County",
                    "slug": "wheaton-chippewa-county",
                },
                "Wheatland, Kenosha County": {
                    "id": 10926,
                    "name": "Wheatland, Kenosha County",
                    "slug": "wheatland-kenosha-county",
                },
                "Westport, Dane County": {
                    "id": 10925,
                    "name": "Westport, Dane County",
                    "slug": "westport-dane-county",
                },
                "West Salem, La Crosse County": {
                    "id": 10924,
                    "name": "West Salem, La Crosse County",
                    "slug": "west-salem-la-crosse-county",
                },
                "West Milwaukee, Milwaukee County": {
                    "id": 10923,
                    "name": "West Milwaukee, Milwaukee County",
                    "slug": "west-milwaukee-milwaukee-county",
                },
                "West Bend, Washington County (Town)": {
                    "id": 10922,
                    "name": "West Bend, Washington County (Town)",
                    "slug": "west-bend-washington-county-2",
                },
                "Wescott, Shawano County": {
                    "id": 10921,
                    "name": "Wescott, Shawano County",
                    "slug": "wescott-shawano-county",
                },
                "Waupaca, Waupaca County": {
                    "id": 10920,
                    "name": "Waupaca, Waupaca County",
                    "slug": "waupaca-waupaca-county",
                },
                "Waterloo, Jefferson County": {
                    "id": 10919,
                    "name": "Waterloo, Jefferson County",
                    "slug": "waterloo-jefferson-county",
                },
                "Waterford, Racine County (Town)": {
                    "id": 10918,
                    "name": "Waterford, Racine County (Town)",
                    "slug": "waterford-racine-county-2",
                },
                "Waterford, Racine County (Village)": {
                    "id": 10917,
                    "name": "Waterford, Racine County (Village)",
                    "slug": "waterford-racine-county",
                },
                "Washington, Eau Claire County": {
                    "id": 10916,
                    "name": "Washington, Eau Claire County",
                    "slug": "washington-eau-claire-county",
                },
                "Walworth, Walworth County": {
                    "id": 10915,
                    "name": "Walworth, Walworth County",
                    "slug": "walworth-walworth-county",
                },
                "Wales, Waukesha County": {
                    "id": 10914,
                    "name": "Wales, Waukesha County",
                    "slug": "wales-waukesha-county",
                },
                "Viroqua, Vernon County": {
                    "id": 10913,
                    "name": "Viroqua, Vernon County",
                    "slug": "viroqua-vernon-county",
                },
                "Union Grove, Racine County": {
                    "id": 10912,
                    "name": "Union Grove, Racine County",
                    "slug": "union-grove-racine-county",
                },
                "Union, Eau Claire County": {
                    "id": 10911,
                    "name": "Union, Eau Claire County",
                    "slug": "union-eau-claire-county",
                },
                "Twin Lakes, Kenosha County": {
                    "id": 10910,
                    "name": "Twin Lakes, Kenosha County",
                    "slug": "twin-lakes-kenosha-county",
                },
                "Troy, St. Croix County": {
                    "id": 10909,
                    "name": "Troy, St. Croix County",
                    "slug": "troy-st-croix-county",
                },
                "Trenton, Washington County": {
                    "id": 10908,
                    "name": "Trenton, Washington County",
                    "slug": "trenton-washington-county",
                },
                "Tomahawk, Lincoln County": {
                    "id": 10907,
                    "name": "Tomahawk, Lincoln County",
                    "slug": "tomahawk-lincoln-county",
                },
                "Thiensville, Ozaukee County": {
                    "id": 10906,
                    "name": "Thiensville, Ozaukee County",
                    "slug": "thiensville-ozaukee-county",
                },
                "Taycheedah, Fond du Lac County": {
                    "id": 10905,
                    "name": "Taycheedah, Fond du Lac County",
                    "slug": "taycheedah-fond-du-lac-county",
                },
                "Summit, Waukesha County": {
                    "id": 10904,
                    "name": "Summit, Waukesha County",
                    "slug": "summit-waukesha-county",
                },
                "Sugar Creek, Walworth County": {
                    "id": 10903,
                    "name": "Sugar Creek, Walworth County",
                    "slug": "sugar-creek-walworth-county",
                },
                "Sturtevant, Racine County": {
                    "id": 10902,
                    "name": "Sturtevant, Racine County",
                    "slug": "sturtevant-racine-county",
                },
                "Stockton, Portage County": {
                    "id": 10901,
                    "name": "Stockton, Portage County",
                    "slug": "stockton-portage-county",
                },
                "Stettin, Marathon County": {
                    "id": 10900,
                    "name": "Stettin, Marathon County",
                    "slug": "stettin-marathon-county",
                },
                "Stephenson, Marinette County": {
                    "id": 10899,
                    "name": "Stephenson, Marinette County",
                    "slug": "stephenson-marinette-county",
                },
                "Star Prairie, St. Croix County": {
                    "id": 10898,
                    "name": "Star Prairie, St. Croix County",
                    "slug": "star-prairie-st-croix-county",
                },
                "Stanley": {
                    "id": 10897,
                    "name": "Stanley",
                    "slug": "stanley-2",
                },
                "Stanley, Barron County": {
                    "id": 10896,
                    "name": "Stanley, Barron County",
                    "slug": "stanley-barron-county",
                },
                "St. Joseph, St. Croix County": {
                    "id": 10895,
                    "name": "St. Joseph, St. Croix County",
                    "slug": "st-joseph-st-croix-county",
                },
                "Springfield, Dane County": {
                    "id": 10894,
                    "name": "Springfield, Dane County",
                    "slug": "springfield-dane-county",
                },
                "Spooner, Washburn County": {
                    "id": 10893,
                    "name": "Spooner, Washburn County",
                    "slug": "spooner-washburn-county",
                },
                "Sparta, Monroe County (Town)": {
                    "id": 10892,
                    "name": "Sparta, Monroe County (Town)",
                    "slug": "sparta-monroe-county-2",
                },
                "Somerset, St. Croix County (Town)": {
                    "id": 10891,
                    "name": "Somerset, St. Croix County (Town)",
                    "slug": "somerset-st-croix-county-2",
                },
                "Somerset, St. Croix County (Village)": {
                    "id": 10890,
                    "name": "Somerset, St. Croix County (Village)",
                    "slug": "somerset-st-croix-county",
                },
                "Slinger, Washington County": {
                    "id": 10889,
                    "name": "Slinger, Washington County",
                    "slug": "slinger-washington-county",
                },
                "Sherwood, Calumet County": {
                    "id": 10888,
                    "name": "Sherwood, Calumet County",
                    "slug": "sherwood-calumet-county",
                },
                "Shelby, La Crosse County": {
                    "id": 10887,
                    "name": "Shelby, La Crosse County",
                    "slug": "shelby-la-crosse-county",
                },
                "Seymour, Outagamie County": {
                    "id": 10886,
                    "name": "Seymour, Outagamie County",
                    "slug": "seymour-outagamie-county",
                },
                "Seymour, Eau Claire County": {
                    "id": 10885,
                    "name": "Seymour, Eau Claire County",
                    "slug": "seymour-eau-claire-county",
                },
                "Sevastopol, Door County": {
                    "id": 10884,
                    "name": "Sevastopol, Door County",
                    "slug": "sevastopol-door-county",
                },
                "Scott, Brown County": {
                    "id": 10883,
                    "name": "Scott, Brown County",
                    "slug": "scott-brown-county",
                },
                "Saukville, Ozaukee County": {
                    "id": 10882,
                    "name": "Saukville, Ozaukee County",
                    "slug": "saukville-ozaukee-county",
                },
                "Sauk City, Sauk County": {
                    "id": 10881,
                    "name": "Sauk City, Sauk County",
                    "slug": "sauk-city-sauk-county",
                },
                "Saratoga, Wood County": {
                    "id": 10880,
                    "name": "Saratoga, Wood County",
                    "slug": "saratoga-wood-county",
                },
                "Rothschild, Marathon County": {
                    "id": 10879,
                    "name": "Rothschild, Marathon County",
                    "slug": "rothschild-marathon-county",
                },
                "Rome, Adams County": {
                    "id": 10878,
                    "name": "Rome, Adams County",
                    "slug": "rome-adams-county",
                },
                "Rock, Rock County": {
                    "id": 10877,
                    "name": "Rock, Rock County",
                    "slug": "rock-rock-county",
                },
                "Rochester, Racine County": {
                    "id": 10876,
                    "name": "Rochester, Racine County",
                    "slug": "rochester-racine-county",
                },
                "Richmond, St. Croix County": {
                    "id": 10875,
                    "name": "Richmond, St. Croix County",
                    "slug": "richmond-st-croix-county",
                },
                "Richland Center, Richland County": {
                    "id": 10874,
                    "name": "Richland Center, Richland County",
                    "slug": "richland-center-richland-county",
                },
                "Rice Lake, Barron County (Town)": {
                    "id": 10873,
                    "name": "Rice Lake, Barron County (Town)",
                    "slug": "rice-lake-barron-county-2",
                },
                "Rib Mountain, Marathon County": {
                    "id": 10872,
                    "name": "Rib Mountain, Marathon County",
                    "slug": "rib-mountain-marathon-county",
                },
                "Raymond, Racine County": {
                    "id": 10871,
                    "name": "Raymond, Racine County",
                    "slug": "raymond-racine-county",
                },
                "Randall, Kenosha County": {
                    "id": 10870,
                    "name": "Randall, Kenosha County",
                    "slug": "randall-kenosha-county",
                },
                "Pulaski": {
                    "id": 10869,
                    "name": "Pulaski",
                    "slug": "pulaski-8",
                },
                "Prescott, Pierce County": {
                    "id": 10868,
                    "name": "Prescott, Pierce County",
                    "slug": "prescott-pierce-county",
                },
                "Prairie du Sac, Sauk County": {
                    "id": 10867,
                    "name": "Prairie du Sac, Sauk County",
                    "slug": "prairie-du-sac-sauk-county",
                },
                "Prairie du Chien, Crawford County": {
                    "id": 10866,
                    "name": "Prairie du Chien, Crawford County",
                    "slug": "prairie-du-chien-crawford-county",
                },
                "Poynette, Columbia County": {
                    "id": 10865,
                    "name": "Poynette, Columbia County",
                    "slug": "poynette-columbia-county",
                },
                "Polk, Washington County": {
                    "id": 10864,
                    "name": "Polk, Washington County",
                    "slug": "polk-washington-county",
                },
                "Plymouth, Sheboygan County (Town)": {
                    "id": 10863,
                    "name": "Plymouth, Sheboygan County (Town)",
                    "slug": "plymouth-sheboygan-county-2",
                },
                "Pleasant Valley, Eau Claire County": {
                    "id": 10862,
                    "name": "Pleasant Valley, Eau Claire County",
                    "slug": "pleasant-valley-eau-claire-county",
                },
                "Pleasant Springs, Dane County": {
                    "id": 10861,
                    "name": "Pleasant Springs, Dane County",
                    "slug": "pleasant-springs-dane-county",
                },
                "Pittsfield, Brown County": {
                    "id": 10860,
                    "name": "Pittsfield, Brown County",
                    "slug": "pittsfield-brown-county",
                },
                "Pine Lake, Oneida County": {
                    "id": 10859,
                    "name": "Pine Lake, Oneida County",
                    "slug": "pine-lake-oneida-county",
                },
                "Peshtigo, Marinette County (Town)": {
                    "id": 10858,
                    "name": "Peshtigo, Marinette County (Town)",
                    "slug": "peshtigo-marinette-county-2",
                },
                "Peshtigo, Marinette County (City)": {
                    "id": 10857,
                    "name": "Peshtigo, Marinette County (City)",
                    "slug": "peshtigo-marinette-county",
                },
                "Pelican, Oneida County": {
                    "id": 10856,
                    "name": "Pelican, Oneida County",
                    "slug": "pelican-oneida-county",
                },
                "Paddock Lake, Kenosha County": {
                    "id": 10855,
                    "name": "Paddock Lake, Kenosha County",
                    "slug": "paddock-lake-kenosha-county",
                },
                "Pacific, Columbia County": {
                    "id": 10854,
                    "name": "Pacific, Columbia County",
                    "slug": "pacific-columbia-county",
                },
                "Ottawa, Waukesha County": {
                    "id": 10853,
                    "name": "Ottawa, Waukesha County",
                    "slug": "ottawa-waukesha-county",
                },
                "Osceola, Polk County (Village)": {
                    "id": 10852,
                    "name": "Osceola, Polk County (Village)",
                    "slug": "osceola-polk-county-2",
                },
                "Osceola, Polk County (Town)": {
                    "id": 10851,
                    "name": "Osceola, Polk County (Town)",
                    "slug": "osceola-polk-county",
                },
                "Oregon, Dane County (Town)": {
                    "id": 10850,
                    "name": "Oregon, Dane County (Town)",
                    "slug": "oregon-dane-county-2",
                },
                "Oostburg, Sheboygan County": {
                    "id": 10849,
                    "name": "Oostburg, Sheboygan County",
                    "slug": "oostburg-sheboygan-county",
                },
                "Oneida, Outagamie County": {
                    "id": 10848,
                    "name": "Oneida, Outagamie County",
                    "slug": "oneida-outagamie-county",
                },
                "Onalaska, La Crosse County (Town)": {
                    "id": 10847,
                    "name": "Onalaska, La Crosse County (Town)",
                    "slug": "onalaska-la-crosse-county-2",
                },
                "Omro, Winnebago County": {
                    "id": 10846,
                    "name": "Omro, Winnebago County",
                    "slug": "omro-winnebago-county",
                },
                "Oconto Falls, Oconto County": {
                    "id": 10845,
                    "name": "Oconto Falls, Oconto County",
                    "slug": "oconto-falls-oconto-county",
                },
                "Oconto, Oconto County": {
                    "id": 10844,
                    "name": "Oconto, Oconto County",
                    "slug": "oconto-oconto-county",
                },
                "Oakland, Jefferson County": {
                    "id": 10843,
                    "name": "Oakland, Jefferson County",
                    "slug": "oakland-jefferson-county",
                },
                "North Hudson, St. Croix County": {
                    "id": 10842,
                    "name": "North Hudson, St. Croix County",
                    "slug": "north-hudson-st-croix-county",
                },
                "North Fond du Lac, Fond du Lac County": {
                    "id": 10841,
                    "name": "North Fond du Lac, Fond du Lac County",
                    "slug": "north-fond-du-lac-fond-du-lac-county",
                },
                "Newbold, Oneida County": {
                    "id": 10840,
                    "name": "Newbold, Oneida County",
                    "slug": "newbold-oneida-county",
                },
                "New London": {
                    "id": 10839,
                    "name": "New London",
                    "slug": "new-london-3",
                },
                "New Lisbon, Juneau County": {
                    "id": 10838,
                    "name": "New Lisbon, Juneau County",
                    "slug": "new-lisbon-juneau-county",
                },
                "New Holstein, Calumet County": {
                    "id": 10837,
                    "name": "New Holstein, Calumet County",
                    "slug": "new-holstein-calumet-county",
                },
                "Nekoosa, Wood County": {
                    "id": 10836,
                    "name": "Nekoosa, Wood County",
                    "slug": "nekoosa-wood-county",
                },
                "Neenah, Winnebago County (Town)": {
                    "id": 10835,
                    "name": "Neenah, Winnebago County (Town)",
                    "slug": "neenah-winnebago-county-2",
                },
                "Mukwa, Waupaca County": {
                    "id": 10834,
                    "name": "Mukwa, Waupaca County",
                    "slug": "mukwa-waupaca-county",
                },
                "Mount Horeb, Dane County": {
                    "id": 10833,
                    "name": "Mount Horeb, Dane County",
                    "slug": "mount-horeb-dane-county",
                },
                "Mosinee, Marathon County": {
                    "id": 10832,
                    "name": "Mosinee, Marathon County",
                    "slug": "mosinee-marathon-county",
                },
                "Mondovi, Buffalo County": {
                    "id": 10831,
                    "name": "Mondovi, Buffalo County",
                    "slug": "mondovi-buffalo-county",
                },
                "Minocqua, Oneida County": {
                    "id": 10830,
                    "name": "Minocqua, Oneida County",
                    "slug": "minocqua-oneida-county",
                },
                "Milton, Rock County (Town)": {
                    "id": 10829,
                    "name": "Milton, Rock County (Town)",
                    "slug": "milton-rock-county-2",
                },
                "Milton, Rock County (City)": {
                    "id": 10828,
                    "name": "Milton, Rock County (City)",
                    "slug": "milton-rock-county",
                },
                "Middleton, Dane County (Town)": {
                    "id": 10827,
                    "name": "Middleton, Dane County (Town)",
                    "slug": "middleton-dane-county-2",
                },
                "Merton, Waukesha County (Village)": {
                    "id": 10826,
                    "name": "Merton, Waukesha County (Village)",
                    "slug": "merton-waukesha-county-2",
                },
                "Merrill, Lincoln County (Town)": {
                    "id": 10825,
                    "name": "Merrill, Lincoln County (Town)",
                    "slug": "merrill-lincoln-county-2",
                },
                "Menomonie, Dunn County (Town)": {
                    "id": 10824,
                    "name": "Menomonie, Dunn County (Town)",
                    "slug": "menomonie-dunn-county-2",
                },
                "Menominee, Menominee County": {
                    "id": 10823,
                    "name": "Menominee, Menominee County",
                    "slug": "menominee-menominee-county",
                },
                "Medford, Taylor County (Town)": {
                    "id": 10822,
                    "name": "Medford, Taylor County (Town)",
                    "slug": "medford-taylor-county-2",
                },
                "Medford, Taylor County (City)": {
                    "id": 10821,
                    "name": "Medford, Taylor County (City)",
                    "slug": "medford-taylor-county",
                },
                "Mayville, Dodge County": {
                    "id": 10820,
                    "name": "Mayville, Dodge County",
                    "slug": "mayville-dodge-county",
                },
                "Mauston, Juneau County": {
                    "id": 10819,
                    "name": "Mauston, Juneau County",
                    "slug": "mauston-juneau-county",
                },
                "Marshall, Dane County": {
                    "id": 10818,
                    "name": "Marshall, Dane County",
                    "slug": "marshall-dane-county",
                },
                "Maine, Marathon County": {
                    "id": 10817,
                    "name": "Maine, Marathon County",
                    "slug": "maine-marathon-county",
                },
                "Madison, Dane County (Town)": {
                    "id": 10816,
                    "name": "Madison, Dane County (Town)",
                    "slug": "madison-dane-county-2",
                },
                "Lyons, Walworth County": {
                    "id": 10815,
                    "name": "Lyons, Walworth County",
                    "slug": "lyons-walworth-county",
                },
                "Luxemburg, Kewaunee County": {
                    "id": 10814,
                    "name": "Luxemburg, Kewaunee County",
                    "slug": "luxemburg-kewaunee-county",
                },
                "Lomira, Dodge County": {
                    "id": 10813,
                    "name": "Lomira, Dodge County",
                    "slug": "lomira-dodge-county",
                },
                "Lodi, Columbia County (Town)": {
                    "id": 10812,
                    "name": "Lodi, Columbia County (Town)",
                    "slug": "lodi-columbia-county-2",
                },
                "Lodi, Columbia County (City)": {
                    "id": 10811,
                    "name": "Lodi, Columbia County (City)",
                    "slug": "lodi-columbia-county",
                },
                "Little Suamico, Oconto County": {
                    "id": 10810,
                    "name": "Little Suamico, Oconto County",
                    "slug": "little-suamico-oconto-county",
                },
                "Lima, Sheboygan County": {
                    "id": 10809,
                    "name": "Lima, Sheboygan County",
                    "slug": "lima-sheboygan-county",
                },
                "Lawrence, Brown County": {
                    "id": 10808,
                    "name": "Lawrence, Brown County",
                    "slug": "lawrence-brown-county",
                },
                "Lancaster, Grant County": {
                    "id": 10807,
                    "name": "Lancaster, Grant County",
                    "slug": "lancaster-grant-county",
                },
                "Lake Mills, Jefferson County": {
                    "id": 10806,
                    "name": "Lake Mills, Jefferson County",
                    "slug": "lake-mills-jefferson-county",
                },
                "Lake Hallie, Chippewa County": {
                    "id": 10805,
                    "name": "Lake Hallie, Chippewa County",
                    "slug": "lake-hallie-chippewa-county",
                },
                "Lake Delton, Sauk County": {
                    "id": 10804,
                    "name": "Lake Delton, Sauk County",
                    "slug": "lake-delton-sauk-county",
                },
                "Lafayette, Chippewa County": {
                    "id": 10803,
                    "name": "Lafayette, Chippewa County",
                    "slug": "lafayette-chippewa-county",
                },
                "Ladysmith, Rusk County": {
                    "id": 10802,
                    "name": "Ladysmith, Rusk County",
                    "slug": "ladysmith-rusk-county",
                },
                "Lac du Flambeau, Vilas County": {
                    "id": 10801,
                    "name": "Lac du Flambeau, Vilas County",
                    "slug": "lac-du-flambeau-vilas-county",
                },
                "Koshkonong, Jefferson County": {
                    "id": 10800,
                    "name": "Koshkonong, Jefferson County",
                    "slug": "koshkonong-jefferson-county",
                },
                "Kimberly, Outagamie County": {
                    "id": 10799,
                    "name": "Kimberly, Outagamie County",
                    "slug": "kimberly-outagamie-county",
                },
                "Kiel": {
                    "id": 10798,
                    "name": "Kiel",
                    "slug": "kiel",
                },
                "Kewaunee, Kewaunee County": {
                    "id": 10797,
                    "name": "Kewaunee, Kewaunee County",
                    "slug": "kewaunee-kewaunee-county",
                },
                "Kewaskum": {
                    "id": 10796,
                    "name": "Kewaskum",
                    "slug": "kewaskum",
                },
                "Juneau, Dodge County": {
                    "id": 10795,
                    "name": "Juneau, Dodge County",
                    "slug": "juneau-dodge-county",
                },
                "Johnson Creek, Jefferson County": {
                    "id": 10794,
                    "name": "Johnson Creek, Jefferson County",
                    "slug": "johnson-creek-jefferson-county",
                },
                "Janesville, Rock County (Town)": {
                    "id": 10793,
                    "name": "Janesville, Rock County (Town)",
                    "slug": "janesville-rock-county-2",
                },
                "Jackson, Washington County (Town)": {
                    "id": 10792,
                    "name": "Jackson, Washington County (Town)",
                    "slug": "jackson-washington-county-2",
                },
                "Jackson, Washington County (Village)": {
                    "id": 10791,
                    "name": "Jackson, Washington County (Village)",
                    "slug": "jackson-washington-county",
                },
                "Ixonia, Jefferson County": {
                    "id": 10790,
                    "name": "Ixonia, Jefferson County",
                    "slug": "ixonia-jefferson-county",
                },
                "Hull, Portage County": {
                    "id": 10789,
                    "name": "Hull, Portage County",
                    "slug": "hull-portage-county",
                },
                "Howards Grove, Sheboygan County": {
                    "id": 10788,
                    "name": "Howards Grove, Sheboygan County",
                    "slug": "howards-grove-sheboygan-county",
                },
                "Hortonville, Outagamie County": {
                    "id": 10787,
                    "name": "Hortonville, Outagamie County",
                    "slug": "hortonville-outagamie-county",
                },
                "Horicon, Dodge County": {
                    "id": 10786,
                    "name": "Horicon, Dodge County",
                    "slug": "horicon-dodge-county",
                },
                "Holland, La Crosse County": {
                    "id": 10785,
                    "name": "Holland, La Crosse County",
                    "slug": "holland-la-crosse-county",
                },
                "Hayward, Sawyer County": {
                    "id": 10784,
                    "name": "Hayward, Sawyer County",
                    "slug": "hayward-sawyer-county",
                },
                "Hartford, Washington County": {
                    "id": 10783,
                    "name": "Hartford, Washington County",
                    "slug": "hartford-washington-county",
                },
                "Harmony, Rock County": {
                    "id": 10782,
                    "name": "Harmony, Rock County",
                    "slug": "harmony-rock-county",
                },
                "Greenbush, Sheboygan County": {
                    "id": 10781,
                    "name": "Greenbush, Sheboygan County",
                    "slug": "greenbush-sheboygan-county",
                },
                "Grafton, Ozaukee County (Town)": {
                    "id": 10780,
                    "name": "Grafton, Ozaukee County (Town)",
                    "slug": "grafton-ozaukee-county-2",
                },
                "Genoa City": {
                    "id": 10779,
                    "name": "Genoa City",
                    "slug": "genoa-city",
                },
                "Geneva, Walworth County": {
                    "id": 10778,
                    "name": "Geneva, Walworth County",
                    "slug": "geneva-walworth-county",
                },
                "Genesee, Waukesha County": {
                    "id": 10777,
                    "name": "Genesee, Waukesha County",
                    "slug": "genesee-waukesha-county",
                },
                "Fulton, Rock County": {
                    "id": 10776,
                    "name": "Fulton, Rock County",
                    "slug": "fulton-rock-county",
                },
                "Friendship, Fond du Lac County": {
                    "id": 10775,
                    "name": "Friendship, Fond du Lac County",
                    "slug": "friendship-fond-du-lac-county",
                },
                "Freedom, Outagamie County": {
                    "id": 10774,
                    "name": "Freedom, Outagamie County",
                    "slug": "freedom-outagamie-county",
                },
                "Fox Point, Milwaukee County": {
                    "id": 10773,
                    "name": "Fox Point, Milwaukee County",
                    "slug": "fox-point-milwaukee-county",
                },
                "Fond du Lac, Fond du Lac County (Town)": {
                    "id": 10772,
                    "name": "Fond du Lac, Fond du Lac County (Town)",
                    "slug": "fond-du-lac-fond-du-lac-county-2",
                },
                "Fennimore, Grant County": {
                    "id": 10771,
                    "name": "Fennimore, Grant County",
                    "slug": "fennimore-grant-county",
                },
                "Farmington, Washington County": {
                    "id": 10770,
                    "name": "Farmington, Washington County",
                    "slug": "farmington-washington-county",
                },
                "Farmington, Waupaca County": {
                    "id": 10769,
                    "name": "Farmington, Waupaca County",
                    "slug": "farmington-waupaca-county",
                },
                "Evansville, Rock County": {
                    "id": 10768,
                    "name": "Evansville, Rock County",
                    "slug": "evansville-rock-county",
                },
                "Erin, Washington County": {
                    "id": 10767,
                    "name": "Erin, Washington County",
                    "slug": "erin-washington-county",
                },
                "Empire, Fond du Lac County": {
                    "id": 10766,
                    "name": "Empire, Fond du Lac County",
                    "slug": "empire-fond-du-lac-county",
                },
                "Elm Grove, Waukesha County": {
                    "id": 10765,
                    "name": "Elm Grove, Waukesha County",
                    "slug": "elm-grove-waukesha-county",
                },
                "Ellsworth, Pierce County": {
                    "id": 10764,
                    "name": "Ellsworth, Pierce County",
                    "slug": "ellsworth-pierce-county",
                },
                "Ellington, Outagamie County": {
                    "id": 10763,
                    "name": "Ellington, Outagamie County",
                    "slug": "ellington-outagamie-county",
                },
                "Edgerton": {
                    "id": 10762,
                    "name": "Edgerton",
                    "slug": "edgerton",
                },
                "East Troy, Walworth County (Town)": {
                    "id": 10761,
                    "name": "East Troy, Walworth County (Town)",
                    "slug": "east-troy-walworth-county-2",
                },
                "East Troy, Walworth County (Village)": {
                    "id": 10760,
                    "name": "East Troy, Walworth County (Village)",
                    "slug": "east-troy-walworth-county",
                },
                "Eagle Point, Chippewa County": {
                    "id": 10759,
                    "name": "Eagle Point, Chippewa County",
                    "slug": "eagle-point-chippewa-county",
                },
                "Eagle, Waukesha County": {
                    "id": 10758,
                    "name": "Eagle, Waukesha County",
                    "slug": "eagle-waukesha-county",
                },
                "Dunn, Dane County": {
                    "id": 10757,
                    "name": "Dunn, Dane County",
                    "slug": "dunn-dane-county",
                },
                "Dover, Racine County": {
                    "id": 10756,
                    "name": "Dover, Racine County",
                    "slug": "dover-racine-county",
                },
                "Dodgeville, Iowa County": {
                    "id": 10755,
                    "name": "Dodgeville, Iowa County",
                    "slug": "dodgeville-iowa-county",
                },
                "Delavan, Walworth County (Town)": {
                    "id": 10754,
                    "name": "Delavan, Walworth County (Town)",
                    "slug": "delavan-walworth-county-2",
                },
                "Delafield, Waukesha County (City)": {
                    "id": 10753,
                    "name": "Delafield, Waukesha County (City)",
                    "slug": "delafield-waukesha-county-2",
                },
                "Dayton, Waupaca County": {
                    "id": 10752,
                    "name": "Dayton, Waupaca County",
                    "slug": "dayton-waupaca-county",
                },
                "Dale, Outagamie County": {
                    "id": 10751,
                    "name": "Dale, Outagamie County",
                    "slug": "dale-outagamie-county",
                },
                "Cross Plains, Dane County": {
                    "id": 10750,
                    "name": "Cross Plains, Dane County",
                    "slug": "cross-plains-dane-county",
                },
                "Cottage Grove, Dane County (Town)": {
                    "id": 10749,
                    "name": "Cottage Grove, Dane County (Town)",
                    "slug": "cottage-grove-dane-county-2",
                },
                "Cottage Grove, Dane County (Village)": {
                    "id": 10748,
                    "name": "Cottage Grove, Dane County (Village)",
                    "slug": "cottage-grove-dane-county",
                },
                "Combined Locks, Outagamie County": {
                    "id": 10747,
                    "name": "Combined Locks, Outagamie County",
                    "slug": "combined-locks-outagamie-county",
                },
                "Columbus": {
                    "id": 10746,
                    "name": "Columbus",
                    "slug": "columbus-2",
                },
                "Clintonville, Waupaca County": {
                    "id": 10745,
                    "name": "Clintonville, Waupaca County",
                    "slug": "clintonville-waupaca-county",
                },
                "Clayton, Winnebago County": {
                    "id": 10744,
                    "name": "Clayton, Winnebago County",
                    "slug": "clayton-winnebago-county",
                },
                "Chilton, Calumet County": {
                    "id": 10743,
                    "name": "Chilton, Calumet County",
                    "slug": "chilton-calumet-county",
                },
                "Chase, Oconto County": {
                    "id": 10742,
                    "name": "Chase, Oconto County",
                    "slug": "chase-oconto-county",
                },
                "Center, Outagamie County": {
                    "id": 10741,
                    "name": "Center, Outagamie County",
                    "slug": "center-outagamie-county",
                },
                "Cedarburg, Ozaukee County (Town)": {
                    "id": 10740,
                    "name": "Cedarburg, Ozaukee County (Town)",
                    "slug": "cedarburg-ozaukee-county-2",
                },
                "Campbell, La Crosse County": {
                    "id": 10739,
                    "name": "Campbell, La Crosse County",
                    "slug": "campbell-la-crosse-county",
                },
                "Burlington, Racine County": {
                    "id": 10738,
                    "name": "Burlington, Racine County",
                    "slug": "burlington-racine-county",
                },
                "Burke, Dane County": {
                    "id": 10737,
                    "name": "Burke, Dane County",
                    "slug": "burke-dane-county",
                },
                "Buchanan, Outagamie County": {
                    "id": 10736,
                    "name": "Buchanan, Outagamie County",
                    "slug": "buchanan-outagamie-county",
                },
                "Brookfield, Waukesha County (Town)": {
                    "id": 10735,
                    "name": "Brookfield, Waukesha County (Town)",
                    "slug": "brookfield-waukesha-county-2",
                },
                "Brodhead": {
                    "id": 10734,
                    "name": "Brodhead",
                    "slug": "brodhead",
                },
                "Brockway, Jackson County": {
                    "id": 10733,
                    "name": "Brockway, Jackson County",
                    "slug": "brockway-jackson-county",
                },
                "Bristol, Kenosha County": {
                    "id": 10732,
                    "name": "Bristol, Kenosha County",
                    "slug": "bristol-kenosha-county",
                },
                "Bristol, Dane County": {
                    "id": 10731,
                    "name": "Bristol, Dane County",
                    "slug": "bristol-dane-county",
                },
                "Brillion, Calumet County": {
                    "id": 10730,
                    "name": "Brillion, Calumet County",
                    "slug": "brillion-calumet-county",
                },
                "Boscobel, Grant County": {
                    "id": 10729,
                    "name": "Boscobel, Grant County",
                    "slug": "boscobel-grant-county",
                },
                "Bloomfield, Walworth County": {
                    "id": 10728,
                    "name": "Bloomfield, Walworth County",
                    "slug": "bloomfield-walworth-county",
                },
                "Bloomer, Chippewa County": {
                    "id": 10727,
                    "name": "Bloomer, Chippewa County",
                    "slug": "bloomer-chippewa-county",
                },
                "Black River Falls, Jackson County": {
                    "id": 10726,
                    "name": "Black River Falls, Jackson County",
                    "slug": "black-river-falls-jackson-county",
                },
                "Berlin": {
                    "id": 10725,
                    "name": "Berlin",
                    "slug": "berlin-5",
                },
                "Beaver Dam, Dodge County (Town)": {
                    "id": 10724,
                    "name": "Beaver Dam, Dodge County (Town)",
                    "slug": "beaver-dam-dodge-county-2",
                },
                "Bayside": {
                    "id": 10723,
                    "name": "Bayside",
                    "slug": "bayside",
                },
                "Barton, Washington County": {
                    "id": 10722,
                    "name": "Barton, Washington County",
                    "slug": "barton-washington-county",
                },
                "Barron, Barron County": {
                    "id": 10721,
                    "name": "Barron, Barron County",
                    "slug": "barron-barron-county",
                },
                "Baldwin, St. Croix County": {
                    "id": 10720,
                    "name": "Baldwin, St. Croix County",
                    "slug": "baldwin-st-croix-county",
                },
                "Ashippun, Dodge County": {
                    "id": 10719,
                    "name": "Ashippun, Dodge County",
                    "slug": "ashippun-dodge-county",
                },
                "Arcadia, Trempealeau County": {
                    "id": 10718,
                    "name": "Arcadia, Trempealeau County",
                    "slug": "arcadia-trempealeau-county",
                },
                "Arbor Vitae, Vilas County": {
                    "id": 10717,
                    "name": "Arbor Vitae, Vilas County",
                    "slug": "arbor-vitae-vilas-county",
                },
                "Amery, Polk County": {
                    "id": 10716,
                    "name": "Amery, Polk County",
                    "slug": "amery-polk-county",
                },
                "Algoma, Winnebago County": {
                    "id": 10715,
                    "name": "Algoma, Winnebago County",
                    "slug": "algoma-winnebago-county",
                },
                "Algoma, Kewaunee County": {
                    "id": 10714,
                    "name": "Algoma, Kewaunee County",
                    "slug": "algoma-kewaunee-county",
                },
                "Alden, Polk County": {
                    "id": 10713,
                    "name": "Alden, Polk County",
                    "slug": "alden-polk-county",
                },
                "Addison, Washington County": {
                    "id": 10712,
                    "name": "Addison, Washington County",
                    "slug": "addison-washington-county",
                },
                "Mukwonago": {
                    "id": 10711,
                    "name": "Mukwonago",
                    "slug": "mukwonago",
                },
                "Brookfield, Waukesha County (City)": {
                    "id": 10710,
                    "name": "Brookfield, Waukesha County (City)",
                    "slug": "brookfield-waukesha-county",
                },
                "Hobart, Brown County": {
                    "id": 10709,
                    "name": "Hobart, Brown County",
                    "slug": "hobart-brown-county",
                },
                "Ledgeview, Brown County": {
                    "id": 10708,
                    "name": "Ledgeview, Brown County",
                    "slug": "ledgeview-brown-county",
                },
                "Windsor, Dane County": {
                    "id": 10707,
                    "name": "Windsor, Dane County",
                    "slug": "windsor-dane-county",
                },
                "Kronenwetter, Marathon County": {
                    "id": 10706,
                    "name": "Kronenwetter, Marathon County",
                    "slug": "kronenwetter-marathon-county",
                },
                "Altoona, Eau Claire County": {
                    "id": 10705,
                    "name": "Altoona, Eau Claire County",
                    "slug": "altoona-eau-claire-county",
                },
                "Sheboygan, Sheboygan County (Town)": {
                    "id": 10704,
                    "name": "Sheboygan, Sheboygan County (Town)",
                    "slug": "sheboygan-sheboygan-county-2",
                },
                "Monona, Dane County": {
                    "id": 10703,
                    "name": "Monona, Dane County",
                    "slug": "monona-dane-county",
                },
                "Vernon, Waukesha County": {
                    "id": 10702,
                    "name": "Vernon, Waukesha County",
                    "slug": "vernon-waukesha-county",
                },
                "Grand Rapids, Wood County": {
                    "id": 10701,
                    "name": "Grand Rapids, Wood County",
                    "slug": "grand-rapids-wood-county",
                },
                "Lake Geneva, Walworth County": {
                    "id": 10700,
                    "name": "Lake Geneva, Walworth County",
                    "slug": "lake-geneva-walworth-county",
                },
                "Beloit, Rock County (Town)": {
                    "id": 10699,
                    "name": "Beloit, Rock County (Town)",
                    "slug": "beloit-rock-county-2",
                },
                "Hales Corners, Milwaukee County": {
                    "id": 10698,
                    "name": "Hales Corners, Milwaukee County",
                    "slug": "hales-corners-milwaukee-county",
                },
                "Ripon, Fond du Lac County": {
                    "id": 10697,
                    "name": "Ripon, Fond du Lac County",
                    "slug": "ripon-fond-du-lac-county",
                },
                "Sheboygan Falls, Sheboygan County": {
                    "id": 10696,
                    "name": "Sheboygan Falls, Sheboygan County",
                    "slug": "sheboygan-falls-sheboygan-county",
                },
                "Rhinelander, Oneida County": {
                    "id": 10695,
                    "name": "Rhinelander, Oneida County",
                    "slug": "rhinelander-oneida-county",
                },
                "McFarland, Dane County": {
                    "id": 10694,
                    "name": "McFarland, Dane County",
                    "slug": "mcfarland-dane-county",
                },
                "Norway, Racine County": {
                    "id": 10693,
                    "name": "Norway, Racine County",
                    "slug": "norway-racine-county",
                },
                "Mukwonago, Waukesha County": {
                    "id": 10692,
                    "name": "Mukwonago, Waukesha County",
                    "slug": "mukwonago-waukesha-county",
                },
                "Jefferson, Jefferson County": {
                    "id": 10691,
                    "name": "Jefferson, Jefferson County",
                    "slug": "jefferson-jefferson-county",
                },
                "Pewaukee, Waukesha County (Village)": {
                    "id": 10690,
                    "name": "Pewaukee, Waukesha County (Village)",
                    "slug": "pewaukee-waukesha-county-2",
                },
                "Ashland": {
                    "id": 10689,
                    "name": "Ashland",
                    "slug": "ashland-5",
                },
                "Antigo, Langlade County": {
                    "id": 10688,
                    "name": "Antigo, Langlade County",
                    "slug": "antigo-langlade-county",
                },
                "Merton, Waukesha County (Town)": {
                    "id": 10687,
                    "name": "Merton, Waukesha County (Town)",
                    "slug": "merton-waukesha-county",
                },
                "New Richmond, St. Croix County": {
                    "id": 10686,
                    "name": "New Richmond, St. Croix County",
                    "slug": "new-richmond-st-croix-county",
                },
                "Delafield, Waukesha County (Town)": {
                    "id": 10685,
                    "name": "Delafield, Waukesha County (Town)",
                    "slug": "delafield-waukesha-county",
                },
                "Oconomowoc, Waukesha County (Town)": {
                    "id": 10684,
                    "name": "Oconomowoc, Waukesha County (Town)",
                    "slug": "oconomowoc-waukesha-county-2",
                },
                "Rice Lake, Barron County (City)": {
                    "id": 10683,
                    "name": "Rice Lake, Barron County (City)",
                    "slug": "rice-lake-barron-county",
                },
                "Plymouth, Sheboygan County (City)": {
                    "id": 10682,
                    "name": "Plymouth, Sheboygan County (City)",
                    "slug": "plymouth-sheboygan-county",
                },
                "Hudson, St. Croix County (Town)": {
                    "id": 10681,
                    "name": "Hudson, St. Croix County (Town)",
                    "slug": "hudson-st-croix-county-2",
                },
                "Delavan, Walworth County (City)": {
                    "id": 10680,
                    "name": "Delavan, Walworth County (City)",
                    "slug": "delavan-walworth-county",
                },
                "DeForest, Dane County": {
                    "id": 10679,
                    "name": "DeForest, Dane County",
                    "slug": "deforest-dane-county",
                },
                "Holmen, La Crosse County": {
                    "id": 10678,
                    "name": "Holmen, La Crosse County",
                    "slug": "holmen-la-crosse-county",
                },
                "Tomah, Monroe County": {
                    "id": 10677,
                    "name": "Tomah, Monroe County",
                    "slug": "tomah-monroe-county",
                },
                "Hartland, Waukesha County": {
                    "id": 10676,
                    "name": "Hartland, Waukesha County",
                    "slug": "hartland-waukesha-county",
                },
                "Waukesha, Waukesha County (Village)": {
                    "id": 10675,
                    "name": "Waukesha, Waukesha County (Village)",
                    "slug": "waukesha-waukesha-county-2",
                },
                "Sturgeon Bay, Door County": {
                    "id": 10674,
                    "name": "Sturgeon Bay, Door County",
                    "slug": "sturgeon-bay-door-county",
                },
                "Reedsburg, Sauk County": {
                    "id": 10673,
                    "name": "Reedsburg, Sauk County",
                    "slug": "reedsburg-sauk-county",
                },
                "Oregon, Dane County (Village)": {
                    "id": 10672,
                    "name": "Oregon, Dane County (Village)",
                    "slug": "oregon-dane-county",
                },
                "Shawano, Shawano County": {
                    "id": 10671,
                    "name": "Shawano, Shawano County",
                    "slug": "shawano-shawano-county",
                },
                "St. Francis, Milwaukee County": {
                    "id": 10670,
                    "name": "St. Francis, Milwaukee County",
                    "slug": "st-francis-milwaukee-county",
                },
                "Sparta, Monroe County (City)": {
                    "id": 10669,
                    "name": "Sparta, Monroe County (City)",
                    "slug": "sparta-monroe-county",
                },
                "Somers, Kenosha County": {
                    "id": 10668,
                    "name": "Somers, Kenosha County",
                    "slug": "somers-kenosha-county",
                },
                "Merrill, Lincoln County (City)": {
                    "id": 10667,
                    "name": "Merrill, Lincoln County (City)",
                    "slug": "merrill-lincoln-county",
                },
                "Elkhorn, Walworth County": {
                    "id": 10666,
                    "name": "Elkhorn, Walworth County",
                    "slug": "elkhorn-walworth-county",
                },
                "Lisbon, Waukesha County": {
                    "id": 10665,
                    "name": "Lisbon, Waukesha County",
                    "slug": "lisbon-waukesha-county",
                },
                "Greenville, Outagamie County": {
                    "id": 10664,
                    "name": "Greenville, Outagamie County",
                    "slug": "greenville-outagamie-county",
                },
                "Portage, Columbia County": {
                    "id": 10663,
                    "name": "Portage, Columbia County",
                    "slug": "portage-columbia-county",
                },
                "Little Chute, Outagamie County": {
                    "id": 10662,
                    "name": "Little Chute, Outagamie County",
                    "slug": "little-chute-outagamie-county",
                },
                "Burlington": {
                    "id": 10661,
                    "name": "Burlington",
                    "slug": "burlington-5",
                },
                "Sussex, Waukesha County": {
                    "id": 10660,
                    "name": "Sussex, Waukesha County",
                    "slug": "sussex-waukesha-county",
                },
                "Verona, Dane County": {
                    "id": 10659,
                    "name": "Verona, Dane County",
                    "slug": "verona-dane-county",
                },
                "Monroe, Green County": {
                    "id": 10658,
                    "name": "Monroe, Green County",
                    "slug": "monroe-green-county",
                },
                "Harrison": {
                    "id": 10657,
                    "name": "Harrison",
                    "slug": "harrison-10",
                },
                "Marinette, Marinette County": {
                    "id": 10656,
                    "name": "Marinette, Marinette County",
                    "slug": "marinette-marinette-county",
                },
                "Platteville, Grant County": {
                    "id": 10655,
                    "name": "Platteville, Grant County",
                    "slug": "platteville-grant-county",
                },
                "Port Washington, Ozaukee County": {
                    "id": 10654,
                    "name": "Port Washington, Ozaukee County",
                    "slug": "port-washington-ozaukee-county",
                },
                "Richfield, Washington County": {
                    "id": 10653,
                    "name": "Richfield, Washington County",
                    "slug": "richfield-washington-county",
                },
                "Waupun": {
                    "id": 10652,
                    "name": "Waupun",
                    "slug": "waupun",
                },
                "Suamico, Brown County": {
                    "id": 10651,
                    "name": "Suamico, Brown County",
                    "slug": "suamico-brown-county",
                },
                "Cedarburg, Ozaukee County (City)": {
                    "id": 10650,
                    "name": "Cedarburg, Ozaukee County (City)",
                    "slug": "cedarburg-ozaukee-county",
                },
                "Grafton, Ozaukee County (Village)": {
                    "id": 10649,
                    "name": "Grafton, Ozaukee County (Village)",
                    "slug": "grafton-ozaukee-county",
                },
                "Two Rivers, Manitowoc County": {
                    "id": 10648,
                    "name": "Two Rivers, Manitowoc County",
                    "slug": "two-rivers-manitowoc-county",
                },
                "Brown Deer, Milwaukee County": {
                    "id": 10647,
                    "name": "Brown Deer, Milwaukee County",
                    "slug": "brown-deer-milwaukee-county",
                },
                "Baraboo, Sauk County": {
                    "id": 10646,
                    "name": "Baraboo, Sauk County",
                    "slug": "baraboo-sauk-county",
                },
                "Salem Lakes, Kenosha County": {
                    "id": 10645,
                    "name": "Salem Lakes, Kenosha County",
                    "slug": "salem-lakes-kenosha-county",
                },
                "Waunakee, Dane County": {
                    "id": 10644,
                    "name": "Waunakee, Dane County",
                    "slug": "waunakee-dane-county",
                },
                "Plover, Portage County": {
                    "id": 10643,
                    "name": "Plover, Portage County",
                    "slug": "plover-portage-county",
                },
                "Fort Atkinson, Jefferson County": {
                    "id": 10642,
                    "name": "Fort Atkinson, Jefferson County",
                    "slug": "fort-atkinson-jefferson-county",
                },
                "Stoughton, Dane County": {
                    "id": 10641,
                    "name": "Stoughton, Dane County",
                    "slug": "stoughton-dane-county",
                },
                "Hudson, St. Croix County (City)": {
                    "id": 10640,
                    "name": "Hudson, St. Croix County (City)",
                    "slug": "hudson-st-croix-county",
                },
                "Glendale, Milwaukee County": {
                    "id": 10639,
                    "name": "Glendale, Milwaukee County",
                    "slug": "glendale-milwaukee-county",
                },
                "Shorewood, Milwaukee County": {
                    "id": 10638,
                    "name": "Shorewood, Milwaukee County",
                    "slug": "shorewood-milwaukee-county",
                },
                "Pewaukee, Waukesha County (City)": {
                    "id": 10637,
                    "name": "Pewaukee, Waukesha County (City)",
                    "slug": "pewaukee-waukesha-county",
                },
                "Chippewa Falls, Chippewa County": {
                    "id": 10636,
                    "name": "Chippewa Falls, Chippewa County",
                    "slug": "chippewa-falls-chippewa-county",
                },
                "Allouez, Brown County": {
                    "id": 10635,
                    "name": "Allouez, Brown County",
                    "slug": "allouez-brown-county",
                },
                "Greendale, Milwaukee County": {
                    "id": 10634,
                    "name": "Greendale, Milwaukee County",
                    "slug": "greendale-milwaukee-county",
                },
                "Whitefish Bay, Milwaukee County": {
                    "id": 10633,
                    "name": "Whitefish Bay, Milwaukee County",
                    "slug": "whitefish-bay-milwaukee-county",
                },
                "Hartford": {
                    "id": 10632,
                    "name": "Hartford",
                    "slug": "hartford-4",
                },
                "Whitewater": {
                    "id": 10631,
                    "name": "Whitewater",
                    "slug": "whitewater",
                },
                "Bellevue, Brown County": {
                    "id": 10630,
                    "name": "Bellevue, Brown County",
                    "slug": "bellevue-brown-county",
                },
                "Weston, Marathon County": {
                    "id": 10629,
                    "name": "Weston, Marathon County",
                    "slug": "weston-marathon-county",
                },
                "River Falls": {
                    "id": 10628,
                    "name": "River Falls",
                    "slug": "river-falls",
                },
                "Kaukauna, Outagamie County": {
                    "id": 10627,
                    "name": "Kaukauna, Outagamie County",
                    "slug": "kaukauna-outagamie-county",
                },
                "Oconomowoc, Waukesha County (City)": {
                    "id": 10626,
                    "name": "Oconomowoc, Waukesha County (City)",
                    "slug": "oconomowoc-waukesha-county",
                },
                "Beaver Dam, Dodge County (City)": {
                    "id": 10625,
                    "name": "Beaver Dam, Dodge County (City)",
                    "slug": "beaver-dam-dodge-county",
                },
                "Menomonie, Dunn County (City)": {
                    "id": 10624,
                    "name": "Menomonie, Dunn County (City)",
                    "slug": "menomonie-dunn-county",
                },
                "Ashwaubenon, Brown County": {
                    "id": 10623,
                    "name": "Ashwaubenon, Brown County",
                    "slug": "ashwaubenon-brown-county",
                },
                "Menasha": {
                    "id": 10622,
                    "name": "Menasha",
                    "slug": "menasha",
                },
                "Howard": {
                    "id": 10621,
                    "name": "Howard",
                    "slug": "howard-8",
                },
                "Middleton, Dane County (City)": {
                    "id": 10620,
                    "name": "Middleton, Dane County (City)",
                    "slug": "middleton-dane-county",
                },
                "Onalaska, La Crosse County (City)": {
                    "id": 10619,
                    "name": "Onalaska, La Crosse County (City)",
                    "slug": "onalaska-la-crosse-county",
                },
                "Cudahy, Milwaukee County": {
                    "id": 10618,
                    "name": "Cudahy, Milwaukee County",
                    "slug": "cudahy-milwaukee-county",
                },
                "Wisconsin Rapids, Wood County": {
                    "id": 10617,
                    "name": "Wisconsin Rapids, Wood County",
                    "slug": "wisconsin-rapids-wood-county",
                },
                "Fox Crossing, Winnebago County": {
                    "id": 10616,
                    "name": "Fox Crossing, Winnebago County",
                    "slug": "fox-crossing-winnebago-county",
                },
                "Marshfield": {
                    "id": 10615,
                    "name": "Marshfield",
                    "slug": "marshfield-4",
                },
                "Pleasant Prairie, Kenosha County": {
                    "id": 10614,
                    "name": "Pleasant Prairie, Kenosha County",
                    "slug": "pleasant-prairie-kenosha-county",
                },
                "Germantown, Washington County": {
                    "id": 10613,
                    "name": "Germantown, Washington County",
                    "slug": "germantown-washington-county",
                },
                "Grand Chute, Outagamie County": {
                    "id": 10612,
                    "name": "Grand Chute, Outagamie County",
                    "slug": "grand-chute-outagamie-county",
                },
                "South Milwaukee, Milwaukee County": {
                    "id": 10611,
                    "name": "South Milwaukee, Milwaukee County",
                    "slug": "south-milwaukee-milwaukee-county",
                },
                "Mequon, Ozaukee County": {
                    "id": 10610,
                    "name": "Mequon, Ozaukee County",
                    "slug": "mequon-ozaukee-county",
                },
                "De Pere, Brown County": {
                    "id": 10609,
                    "name": "De Pere, Brown County",
                    "slug": "de-pere-brown-county",
                },
                "Watertown": {
                    "id": 10608,
                    "name": "Watertown",
                    "slug": "watertown-3",
                },
                "Muskego, Waukesha County": {
                    "id": 10607,
                    "name": "Muskego, Waukesha County",
                    "slug": "muskego-waukesha-county",
                },
                "Caledonia, Racine County": {
                    "id": 10606,
                    "name": "Caledonia, Racine County",
                    "slug": "caledonia-racine-county",
                },
                "Fitchburg, Dane County": {
                    "id": 10605,
                    "name": "Fitchburg, Dane County",
                    "slug": "fitchburg-dane-county",
                },
                "Neenah, Winnebago County (City)": {
                    "id": 10604,
                    "name": "Neenah, Winnebago County (City)",
                    "slug": "neenah-winnebago-county",
                },
                "Mount Pleasant, Racine County": {
                    "id": 10603,
                    "name": "Mount Pleasant, Racine County",
                    "slug": "mount-pleasant-racine-county",
                },
                "Stevens Point, Portage County": {
                    "id": 10602,
                    "name": "Stevens Point, Portage County",
                    "slug": "stevens-point-portage-county",
                },
                "Superior, Douglas County": {
                    "id": 10601,
                    "name": "Superior, Douglas County",
                    "slug": "superior-douglas-county",
                },
                "Sun Prairie, Dane County": {
                    "id": 10600,
                    "name": "Sun Prairie, Dane County",
                    "slug": "sun-prairie-dane-county",
                },
                "West Bend, Washington County (City)": {
                    "id": 10599,
                    "name": "West Bend, Washington County (City)",
                    "slug": "west-bend-washington-county",
                },
                "Manitowoc, Manitowoc County": {
                    "id": 10598,
                    "name": "Manitowoc, Manitowoc County",
                    "slug": "manitowoc-manitowoc-county",
                },
                "Oak Creek, Milwaukee County": {
                    "id": 10597,
                    "name": "Oak Creek, Milwaukee County",
                    "slug": "oak-creek-milwaukee-county",
                },
                "Franklin, Milwaukee County": {
                    "id": 10596,
                    "name": "Franklin, Milwaukee County",
                    "slug": "franklin-milwaukee-county",
                },
                "Menomonee Falls, Waukesha County": {
                    "id": 10595,
                    "name": "Menomonee Falls, Waukesha County",
                    "slug": "menomonee-falls-waukesha-county",
                },
                "Greenfield, Milwaukee County": {
                    "id": 10594,
                    "name": "Greenfield, Milwaukee County",
                    "slug": "greenfield-milwaukee-county",
                },
                "Beloit, Rock County (City)": {
                    "id": 10593,
                    "name": "Beloit, Rock County (City)",
                    "slug": "beloit-rock-county",
                },
                "Wausau, Marathon County": {
                    "id": 10592,
                    "name": "Wausau, Marathon County",
                    "slug": "wausau-marathon-county",
                },
                "New Berlin, Waukesha County": {
                    "id": 10591,
                    "name": "New Berlin, Waukesha County",
                    "slug": "new-berlin-waukesha-county",
                },
                "Fond du Lac, Fond du Lac County (City)": {
                    "id": 10590,
                    "name": "Fond du Lac, Fond du Lac County (City)",
                    "slug": "fond-du-lac-fond-du-lac-county",
                },
                "Wauwatosa, Milwaukee County": {
                    "id": 10589,
                    "name": "Wauwatosa, Milwaukee County",
                    "slug": "wauwatosa-milwaukee-county",
                },
                "Sheboygan, Sheboygan County (City)": {
                    "id": 10588,
                    "name": "Sheboygan, Sheboygan County (City)",
                    "slug": "sheboygan-sheboygan-county",
                },
                "La Crosse, La Crosse County": {
                    "id": 10587,
                    "name": "La Crosse, La Crosse County",
                    "slug": "la-crosse-la-crosse-county",
                },
                "West Allis, Milwaukee County": {
                    "id": 10586,
                    "name": "West Allis, Milwaukee County",
                    "slug": "west-allis-milwaukee-county",
                },
                "Janesville, Rock County (City)": {
                    "id": 10585,
                    "name": "Janesville, Rock County (City)",
                    "slug": "janesville-rock-county",
                },
                "Eau Claire": {
                    "id": 10584,
                    "name": "Eau Claire",
                    "slug": "eau-claire",
                },
                "Oshkosh, Winnebago County": {
                    "id": 10583,
                    "name": "Oshkosh, Winnebago County",
                    "slug": "oshkosh-winnebago-county",
                },
                "Waukesha, Waukesha County (City)": {
                    "id": 10582,
                    "name": "Waukesha, Waukesha County (City)",
                    "slug": "waukesha-waukesha-county",
                },
                "Appleton": {
                    "id": 10581,
                    "name": "Appleton",
                    "slug": "appleton-2",
                },
                "Racine, Racine County": {
                    "id": 10580,
                    "name": "Racine, Racine County",
                    "slug": "racine-racine-county",
                },
                "Kenosha, Kenosha County": {
                    "id": 10579,
                    "name": "Kenosha, Kenosha County",
                    "slug": "kenosha-kenosha-county",
                },
                "Green Bay, Brown County": {
                    "id": 10578,
                    "name": "Green Bay, Brown County",
                    "slug": "green-bay-brown-county",
                },
                "Madison, Dane County (City)": {
                    "id": 10577,
                    "name": "Madison, Dane County (City)",
                    "slug": "madison-dane-county",
                },
                "Milwaukee, Milwaukee County": {
                    "id": 10576,
                    "name": "Milwaukee, Milwaukee County",
                    "slug": "milwaukee-milwaukee-county",
                },
            },
            "counties": {},
        },
    },
    "WY": {
        "id": 80,
        "name": "Wyoming",
        "has_all_mail_elections": false,
        "subdivision_name": "County",
        "jurisdictions": {
            "cities": {},
            "counties": {
                "Albany": {
                    "id": 10959,
                    "name": "Albany",
                    "slug": "albany-4",
                },
                "Niobrara": {
                    "id": 10958,
                    "name": "Niobrara",
                    "slug": "niobrara",
                },
                "Laramie": {
                    "id": 10957,
                    "name": "Laramie",
                    "slug": "laramie",
                },
                "Converse": {
                    "id": 10956,
                    "name": "Converse",
                    "slug": "converse",
                },
                "Natrona": {
                    "id": 10955,
                    "name": "Natrona",
                    "slug": "natrona",
                },
                "Washakie": {
                    "id": 10954,
                    "name": "Washakie",
                    "slug": "washakie",
                },
                "Sweetwater": {
                    "id": 10953,
                    "name": "Sweetwater",
                    "slug": "sweetwater",
                },
                "Platte": {
                    "id": 10952,
                    "name": "Platte",
                    "slug": "platte-3",
                },
                "Lincoln": {
                    "id": 10951,
                    "name": "Lincoln",
                    "slug": "lincoln-27",
                },
                "Hot Springs": {
                    "id": 10950,
                    "name": "Hot Springs",
                    "slug": "hot-springs",
                },
                "Crook": {
                    "id": 10949,
                    "name": "Crook",
                    "slug": "crook-2",
                },
                "Carbon": {
                    "id": 10948,
                    "name": "Carbon",
                    "slug": "carbon-4",
                },
                "Weston": {
                    "id": 10947,
                    "name": "Weston",
                    "slug": "weston-4",
                },
                "Uinta": {
                    "id": 10946,
                    "name": "Uinta",
                    "slug": "uinta",
                },
                "Johnson": {
                    "id": 10945,
                    "name": "Johnson",
                    "slug": "johnson-13",
                },
                "Goshen": {
                    "id": 10944,
                    "name": "Goshen",
                    "slug": "goshen-5",
                },
                "Campbell": {
                    "id": 10943,
                    "name": "Campbell",
                    "slug": "campbell-5",
                },
                "Teton": {
                    "id": 10942,
                    "name": "Teton",
                    "slug": "teton-3",
                },
                "Sheridan": {
                    "id": 10941,
                    "name": "Sheridan",
                    "slug": "sheridan-5",
                },
                "Sublette": {
                    "id": 10940,
                    "name": "Sublette",
                    "slug": "sublette",
                },
                "Fremont": {
                    "id": 10939,
                    "name": "Fremont",
                    "slug": "fremont-5",
                },
                "Big Horn": {
                    "id": 10938,
                    "name": "Big Horn",
                    "slug": "big-horn-2",
                },
                "Park": {
                    "id": 10937,
                    "name": "Park",
                    "slug": "park-3",
                },
            },
        },
    },
};

export const Slugs: { [slug: string]: number } = Object.values(data).reduce(
    (comb: { [slug: string]: number }, {jurisdictions: {cities, counties}}: StateInfo) => {
        Object.values(cities).forEach(
            ({id, slug}: { id: number, slug: string }) => {
                if (slug) {
                    comb[slug] = id;
                }
            },
        );
        Object.values(counties).forEach(
            ({id, slug}: { id: number, slug: string }) => {
                if (slug) {
                    comb[slug] = id;
                }
            },
        );
        return comb;
    },
    {},
);
export default data;
