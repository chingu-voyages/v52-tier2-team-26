const addressList = [
  {
    addressLine: "1769 N IVAR AVE",
    lat: "34.10369",
    lng: "-118.32831",
  },
  {
    addressLine: "260 S 6TH AVE",
    lat: "33.99944",
    lng: "-118.47219",
  },
  {
    addressLine: "8802 S BELFORD AVE",
    lat: "33.95675",
    lng: "-118.38381",
  },
  {
    addressLine: "4610 W MAUBERT AVE",
    lat: "34.0989",
    lng: "-118.29008",
  },
  {
    addressLine: "8802 S BELFORD AVE",
    lat: "33.95675",
    lng: "-118.38381",
  },
  {
    addressLine: "8320 N CHELSEA LANE",
    lat: "34.22081",
    lng: "-118.60988",
  },
  {
    addressLine: "2031 N CHEREMOYA AVE",
    lat: "34.10839",
    lng: "-118.32073",
  },
  {
    addressLine: "9039 W CRESTA DR",
    lat: "34.04616",
    lng: "-118.38767",
  },
  {
    addressLine: "5500 S FORTUNA ST",
    lat: "33.99288",
    lng: "-118.24543",
  },
  {
    addressLine: "5821 N YOLANDA AVE",
    lat: "34.17615",
    lng: "-118.54091",
  },
  {
    addressLine: "11103 N RENAISSANCE DR",
    lat: "34.27102",
    lng: "-118.29398",
  },
  {
    addressLine: "8484 W CRESCENT DR",
    lat: "34.11356",
    lng: "-118.38027",
  },
  {
    addressLine: "7140 N RANCHITO AVE",
    lat: "34.20055",
    lng: "-118.43553",
  },
  {
    addressLine: "11079 N RENAISSANCE DR",
    lat: "34.27064",
    lng: "-118.29406",
  },
  {
    addressLine: "7050 N ASMAN AVE",
    lat: "34.19914",
    lng: "-118.61707",
  },
  {
    addressLine: "7927 N ORION AVE",
    lat: "34.21508",
    lng: "-118.4708",
  },
  {
    addressLine: "10911 W LINDBROOK DR",
    lat: "34.05968",
    lng: "-118.44521",
  },
  {
    addressLine: "1477 N BLUE JAY WAY",
    lat: "34.09843",
    lng: "-118.38705",
  },
  {
    addressLine: "635 N ALMA REAL DR",
    lat: "34.03895",
    lng: "-118.52405",
  },
  {
    addressLine: "5390 S LINCOLN BLVD",
    lat: "33.97381",
    lng: "-118.43119",
  },
  {
    addressLine: "1222 W 2ND ST",
    lat: "34.05912",
    lng: "-118.25727999999999",
  },
  {
    addressLine: "1226 W 2ND ST",
    lat: "34.059220000000003",
    lng: "-118.2574",
  },
  {
    addressLine: "3118 N VERDUGO PL",
    lat: "34.10707",
    lng: "-118.23662",
  },
  {
    addressLine: "12401 N SUNRISE RIDGE ROAD",
    lat: "34.29562",
    lng: "-118.46352",
  },
  {
    addressLine: "1173 E 25TH ST",
    lat: "34.01887",
    lng: "-118.25218",
  },
  {
    addressLine: "20652 W PESARO WAY",
    lat: "34.27467",
    lng: "-118.58337",
  },
  {
    addressLine: "8213 S FIGUEROA ST",
    lat: "33.96387",
    lng: "-118.28295",
  },
  {
    addressLine: "16551 W SATICOY ST",
    lat: "34.20861",
    lng: "-118.4941",
  },
  {
    addressLine: "11401 W REDMESA DR",
    lat: "34.27478",
    lng: "-118.61337",
  },
  {
    addressLine: "20512 W PESARO WAY",
    lat: "34.27534",
    lng: "-118.57947",
  },
  {
    addressLine: "2144 W SUNSET BLVD",
    lat: "34.07723",
    lng: "-118.2653",
  },
  {
    addressLine: "24201 S FRAMPTON AVE",
    lat: "33.80424",
    lng: "-118.29921",
  },
  {
    addressLine: "5761 W VALLEY OAK DR",
    lat: "34.10942",
    lng: "-118.31533",
  },
  {
    addressLine: "13755 W VICTORY BLVD",
    lat: "34.18683",
    lng: "-118.43306",
  },
  {
    addressLine: "2128 E 4TH ST",
    lat: "34.04166",
    lng: "-118.21459",
  },
  {
    addressLine: "12216 W VIA SANTA LUCIA null",
    lat: "34.3172",
    lng: "-118.40022",
  },
  {
    addressLine: "3115 S CURTS AVE",
    lat: "34.03134",
    lng: "-118.38911",
  },
  {
    addressLine: "13970 N SADDLE RIDGE ROAD",
    lat: "34.32591",
    lng: "-118.4804",
  },
  {
    addressLine: "20334 W INGOMAR ST",
    lat: "34.21134",
    lng: "-118.57666",
  },
  {
    addressLine: "3872 N CAZADOR ST",
    lat: "34.11307",
    lng: "-118.22557",
  },
  {
    addressLine: "10406 N SANDLEWOOD LANE",
    lat: "34.25949",
    lng: "-118.54316",
  },
  {
    addressLine: "13416 W ALDERGROVE ST",
    lat: "34.3264",
    lng: "-118.42497",
  },
  {
    addressLine: "12929 W AZTEC ST",
    lat: "34.32291",
    lng: "-118.41513",
  },
  {
    addressLine: "16632 W CANTLAY ST",
    lat: "34.20205",
    lng: "-118.49592",
  },
  {
    addressLine: "13726 N MINDORA AVE",
    lat: "34.32152",
    lng: "-118.41404",
  },
  {
    addressLine: "13994 N WALLABI AVE",
    lat: "34.32649",
    lng: "-118.40885",
  },
  {
    addressLine: "13538 W POLK ST",
    lat: "34.32649",
    lng: "-118.42922",
  },
  {
    addressLine: "13950 N BERMAX AVE",
    lat: "34.32629",
    lng: "-118.43124",
  },
  {
    addressLine: "14110 N TUCKER AVE",
    lat: "34.32799",
    lng: "-118.41168",
  },
  {
    addressLine: "13911 N PICKADILLY PL",
    lat: "34.32573",
    lng: "-118.4064",
  },
  {
    addressLine: "1200 W 2ND ST",
    lat: "34.058900000000001",
    lng: "-118.25708",
  },
  {
    addressLine: "13445 W ALMETZ ST",
    lat: "34.32761",
    lng: "-118.42583",
  },
  {
    addressLine: "13457 W ALMETZ ST",
    lat: "34.32761",
    lng: "-118.42626",
  },
  {
    addressLine: "13497 W ASTORIA ST",
    lat: "34.32199",
    lng: "-118.42719",
  },
  {
    addressLine: "13063 W AZTEC ST",
    lat: "34.32047",
    lng: "-118.41739",
  },
  {
    addressLine: "12559 W TIBBETTS ST",
    lat: "34.31917",
    lng: "-118.40711",
  },
  {
    addressLine: "12679 W LAZARD ST",
    lat: "34.31832",
    lng: "-118.40952",
  },
  {
    addressLine: "13682 W POLK ST",
    lat: "34.32367",
    lng: "-118.43141",
  },
  {
    addressLine: "13056 W AZTEC ST",
    lat: "34.32029",
    lng: "-118.41703",
  },
  {
    addressLine: "627 S BROADWAY null",
    lat: "34.04609",
    lng: "-118.25286",
  },
  {
    addressLine: "1115 S GRAND AVE",
    lat: "33.73386",
    lng: "-118.29033",
  },
  {
    addressLine: "13190 W HERRON ST",
    lat: "34.32094",
    lng: "-118.42017",
  },
  {
    addressLine: "3714 W COLISEUM ST",
    lat: "34.018059999999998",
    lng: "-118.3369",
  },
  {
    addressLine: "13520 N DRONFIELD AVE",
    lat: "34.31814",
    lng: "-118.45027",
  },
  {
    addressLine: "11920 W GAGER ST",
    lat: "34.281140000000001",
    lng: "-118.39258",
  },
  {
    addressLine: "13750 N GLADSTONE AVE",
    lat: "34.32208",
    lng: "-118.44261",
  },
  {
    addressLine: "5047 N EAGLE ROCK BLVD",
    lat: "34.13832",
    lng: "-118.21463",
  },
  {
    addressLine: "1220 W LEIGHTON AVE",
    lat: "34.01305",
    lng: "-118.29803",
  },
  {
    addressLine: "1048 S SAN JULIAN ST",
    lat: "34.03613",
    lng: "-118.25279",
  },
  {
    addressLine: "10058 N VALLEY CIRCLE BLVD",
    lat: "34.25318",
    lng: "-118.61604",
  },
  {
    addressLine: "3137 W SAN FERNANDO ROAD",
    lat: "34.11591",
    lng: "-118.24668",
  },
  {
    addressLine: "5501 W GREEN OAK DR",
    lat: "34.11974",
    lng: "-118.31052",
  },
  {
    addressLine: "22123 W BURBANK BLVD",
    lat: "34.1721",
    lng: "-118.60906",
  },
  {
    addressLine: "1365 E 28TH ST",
    lat: "34.01437",
    lng: "-118.24964",
  },
  {
    addressLine: "11723 W VICTORY BLVD",
    lat: "34.18683",
    lng: "-118.38869",
  },
  {
    addressLine: "1953 N CUMMINGS DR",
    lat: "34.10651",
    lng: "-118.30148",
  },
  {
    addressLine: "14565 W LYLE ST",
    lat: "34.30527",
    lng: "-118.45097",
  },
  {
    addressLine: "15225 W EL CASCO ST",
    lat: "34.30283",
    lng: "-118.46549",
  },
  {
    addressLine: "14720 W POLK ST",
    lat: "34.30368",
    lng: "-118.4538",
  },
  {
    addressLine: "14510 W PADDOCK ST",
    lat: "34.30536",
    lng: "-118.44891",
  },
  {
    addressLine: "17235 W OROZCO ST",
    lat: "34.30818",
    lng: "-118.50758",
  },
  {
    addressLine: "617 S CENTRE ST",
    lat: "33.73818",
    lng: "-118.28372",
  },
  {
    addressLine: "15563 W SANDRA LANE",
    lat: "34.30697",
    lng: "-118.47206",
  },
  {
    addressLine: "12591 N HUNNEWELL AVE",
    lat: "34.29909",
    lng: "-118.41694",
  },
  {
    addressLine: "14703 W LAKESIDE ST",
    lat: "34.30762",
    lng: "-118.45329",
  },
  {
    addressLine: "17031 W NANETTE ST",
    lat: "34.30283",
    lng: "-118.50245",
  },
  {
    addressLine: "14709 W LAKESIDE ST",
    lat: "34.30753",
    lng: "-118.45339",
  },
  {
    addressLine: "12564 N RALSTON AVE",
    lat: "34.29862",
    lng: "-118.45412",
  },
  {
    addressLine: "15125 W NURMI ST",
    lat: "34.29862",
    lng: "-118.46238",
  },
  {
    addressLine: "12676 N COMETA AVE",
    lat: "34.30057",
    lng: "-118.42688",
  },
  {
    addressLine: "14992 W ORO GRANDE ST",
    lat: "34.29616",
    lng: "-118.45786",
  },
  {
    addressLine: "14606 W BLEDSOE ST",
    lat: "34.31803",
    lng: "-118.45083",
  },
  {
    addressLine: "15084 W FLORENTINE ST",
    lat: "34.29307",
    lng: "-118.46014",
  },
  {
    addressLine: "17528 W ORNA DR",
    lat: "34.2988",
    lng: "-118.51579",
  },
  {
    addressLine: "12520 N CASCADE CANYON DR",
    lat: "34.29692",
    lng: "-118.52148",
  },
  {
    addressLine: "12259 N LOUISE AVE",
    lat: "34.29363",
    lng: "-118.51701",
  },
  {
    addressLine: "12055 N SHADOW RIDGE WAY",
    lat: "34.29269",
    lng: "-118.55834",
  },
  {
    addressLine: "19829 W TURTLE SPRINGS WAY",
    lat: "34.29336",
    lng: "-118.5659",
  },
  {
    addressLine: "15070 W PADDOCK ST",
    lat: "34.29589",
    lng: "-118.46038",
  },
  {
    addressLine: "12431 N HENZIE PL",
    lat: "34.29739",
    lng: "-118.51161",
  },
  {
    addressLine: "13443 W GALEWOOD ST",
    lat: "34.142809999999997",
    lng: "-118.42538999999999",
  },
  {
    addressLine: "19917 W FALCON CREST LANE",
    lat: "34.29316",
    lng: "-118.56661",
  },
  {
    addressLine: "19515 W EAGLE RIDGE LANE",
    lat: "34.29645",
    lng: "-118.55888",
  },
  {
    addressLine: "12183 N CANYON HILL AVE",
    lat: "34.29204",
    lng: "-118.46639",
  },
  {
    addressLine: "12141 N BEAUFAIT AVE",
    lat: "34.29365",
    lng: "-118.53934",
  },
  {
    addressLine: "12019 N FALCON CREST WAY",
    lat: "34.29128",
    lng: "-118.56747",
  },
  {
    addressLine: "19661 W PINE VALLEY WAY",
    lat: "34.28895",
    lng: "-118.56238",
  },
  {
    addressLine: "17207 W LITHUANIA PL",
    lat: "34.29813",
    lng: "-118.50793",
  },
  {
    addressLine: "15089 W ROXFORD ST",
    lat: "34.3202",
    lng: "-118.46208",
  },
  {
    addressLine: "13001 W ARROYO ST",
    lat: "34.29166",
    lng: "-118.41629",
  },
  {
    addressLine: "11860 N EDGECLIFF AVE",
    lat: "34.28642",
    lng: "-118.45799",
  },
  {
    addressLine: "13840 N WOODCOCK AVE",
    lat: "34.31962",
    lng: "-118.47787",
  },
  {
    addressLine: "13469 N FENTON AVE",
    lat: "34.31626",
    lng: "-118.42927",
  },
  {
    addressLine: "16018 W CIRCLE DIAMOND ROAD",
    lat: "34.32385",
    lng: "-118.48026",
  },
  {
    addressLine: "14672 W TYLER ST",
    lat: "34.31062",
    lng: "-118.4526",
  },
  {
    addressLine: "15351 W LARKSPUR ST",
    lat: "34.31212",
    lng: "-118.46682",
  },
  {
    addressLine: "14922 W LA VALLE ST",
    lat: "34.31073",
    lng: "-118.4573",
  },
  {
    addressLine: "12112 N MEMPHIS AVE",
    lat: "34.2896",
    lng: "-118.45295",
  },
  {
    addressLine: "14625 W TYLER ST",
    lat: "34.31185",
    lng: "-118.45173",
  },
  {
    addressLine: "14174 W PADDOCK ST",
    lat: "34.31221",
    lng: "-118.44201",
  },
  {
    addressLine: "14428 W REX ST",
    lat: "34.31391",
    lng: "-118.44723",
  },
  {
    addressLine: "13600 N SAN FERNANDO ROAD",
    lat: "34.31427",
    lng: "-118.48334",
  },
  {
    addressLine: "8406 N WOODLEY PL",
    lat: "34.223239999999997",
    lng: "-118.48508",
  },
  {
    addressLine: "13371 N PHILLIPPI AVE",
    lat: "34.31485",
    lng: "-118.44955",
  },
  {
    addressLine: "14941 W YOUNGDALE PL",
    lat: "34.2896",
    lng: "-118.45747",
  },
  {
    addressLine: "12757 N COMETA AVE",
    lat: "34.3018",
    lng: "-118.42863",
  },
  {
    addressLine: "12109 N EL DORADO AVE",
    lat: "34.28969",
    lng: "-118.45111",
  },
  {
    addressLine: "13144 N BROMONT AVE",
    lat: "34.30979",
    lng: "-118.43629",
  },
  {
    addressLine: "14727 W BLEDSOE ST",
    lat: "34.31615",
    lng: "-118.45352",
  },
  {
    addressLine: "5255 N DENNY AVE",
    lat: "34.166449999999998",
    lng: "-118.36461",
  },
  {
    addressLine: "22996 W VENTURA BLVD",
    lat: "34.16469",
    lng: "-118.62678",
  },
  {
    addressLine: "11505 N HUNNEWELL AVE",
    lat: "34.27852",
    lng: "-118.39538",
  },
  {
    addressLine: "14673 W POLK ST",
    lat: "34.30462",
    lng: "-118.45338",
  },
  {
    addressLine: "14372 W ASTORIA ST",
    lat: "34.30444",
    lng: "-118.44649",
  },
  {
    addressLine: "11503 N GARRICK AVE",
    lat: "34.2789",
    lng: "-118.37768",
  },
  {
    addressLine: "11443 N ALBERNI AVE",
    lat: "34.27749",
    lng: "-118.35557",
  },
  {
    addressLine: "11462 N EHREN AVE",
    lat: "34.27834",
    lng: "-118.35861",
  },
  {
    addressLine: "10584 W KURT ST",
    lat: "34.27805",
    lng: "-118.36095",
  },
  {
    addressLine: "11406 N CHRISTY AVE",
    lat: "34.27675",
    lng: "-118.35812",
  },
  {
    addressLine: "11706 N LUANDA ST",
    lat: "34.28416",
    lng: "-118.38571",
  },
  {
    addressLine: "11377 N GLADSTONE AVE",
    lat: "34.27684",
    lng: "-118.39198",
  },
  {
    addressLine: "12030 W CARL ST",
    lat: "34.28369",
    lng: "-118.39478",
  },
  {
    addressLine: "11500 N BRUSSELS AVE",
    lat: "34.27899",
    lng: "-118.38065",
  },
  {
    addressLine: "11460 N GREENVALLEY TER",
    lat: "34.27852",
    lng: "-118.39984",
  },
  {
    addressLine: "11816 N BROMONT AVE",
    lat: "34.2836",
    lng: "-118.40742",
  },
  {
    addressLine: "11612 N HUNNEWELL AVE",
    lat: "34.28096",
    lng: "-118.39747",
  },
  {
    addressLine: "12912 W LOUVRE ST",
    lat: "34.27805",
    lng: "-118.41394",
  },
  {
    addressLine: "12641 W MONTFORD ST",
    lat: "34.28445",
    lng: "-118.40881",
  },
  {
    addressLine: "11719 N BORDEN AVE",
    lat: "34.28304",
    lng: "-118.416",
  },
  {
    addressLine: "14929 W SIMONDS ST",
    lat: "34.27769",
    lng: "-118.45836",
  },
  {
    addressLine: "11401 N GAVIOTA AVE",
    lat: "34.2774",
    lng: "-118.48282",
  },
  {
    addressLine: "11584 N ACALA AVE",
    lat: "34.28049",
    lng: "-118.45269",
  },
  {
    addressLine: "11626 N RUFFNER AVE",
    lat: "34.28181",
    lng: "-118.4978",
  },
  {
    addressLine: "16242 W BIRCHER ST",
    lat: "34.28078",
    lng: "-118.48624",
  },
  {
    addressLine: "16336 W KALISHER ST",
    lat: "34.27758",
    lng: "-118.48841",
  },
  {
    addressLine: "11458 N SWINTON AVE",
    lat: "34.27872",
    lng: "-118.48572",
  },
  {
    addressLine: "11465 N SWINTON AVE",
    lat: "34.2789",
    lng: "-118.48607",
  },
  {
    addressLine: "11324 N AMIGO AVE",
    lat: "34.27655",
    lng: "-118.53874",
  },
  {
    addressLine: "19006 W MERION DR",
    lat: "34.27787",
    lng: "-118.54814",
  },
  {
    addressLine: "11417 N CHIMINEAS AVE",
    lat: "34.27834",
    lng: "-118.53095",
  },
  {
    addressLine: "19643 W PINE VALLEY AVE",
    lat: "34.28342",
    lng: "-118.56156",
  },
  {
    addressLine: "19754 W BUCKEYE MEADOW LANE",
    lat: "34.28096",
    lng: "-118.56587",
  },
  {
    addressLine: "18311 W CHARLTON LANE",
    lat: "34.28257",
    lng: "-118.53236",
  },
  {
    addressLine: "19746 W MARIPOSA CREEK WAY",
    lat: "34.28201",
    lng: "-118.56589",
  },
  {
    addressLine: "11803 W SHERMAN WAY",
    lat: "34.20138",
    lng: "-118.39044",
  },
  {
    addressLine: "11548 N AMIGO AVE",
    lat: "34.28163",
    lng: "-118.54234",
  },
  {
    addressLine: "19445 W TWIN HILLS PL",
    lat: "34.28049",
    lng: "-118.55489",
  },
  {
    addressLine: "19516 W QUAIL CREEK PL",
    lat: "34.27778",
    lng: "-118.55829",
  },
  {
    addressLine: "18528 W BRASILIA DR",
    lat: "34.28248",
    lng: "-118.53594",
  },
  {
    addressLine: "11626 N AMIGO AVE",
    lat: "34.28257",
    lng: "-118.54328",
  },
  {
    addressLine: "11356 N QUAIL CREEK ROAD",
    lat: "34.27749",
    lng: "-118.5574",
  },
  {
    addressLine: "11729 N BAIRD AVE",
    lat: "34.28398",
    lng: "-118.54192",
  },
  {
    addressLine: "19920 W MARIPOSA CREEK WAY",
    lat: "34.28228",
    lng: "-118.56994",
  },
  {
    addressLine: "11012 N RHODESIA AVE",
    lat: "34.26923",
    lng: "-118.30779",
  },
  {
    addressLine: "10959 N MCVINE AVE",
    lat: "34.26867",
    lng: "-118.31162",
  },
  {
    addressLine: "11000 N FELLOWS AVE",
    lat: "34.2699",
    lng: "-118.40509",
  },
  {
    addressLine: "10948 N JAMIE AVE",
    lat: "34.26905",
    lng: "-118.40545",
  },
  {
    addressLine: "11437 W OSBORNE PL",
    lat: "34.27563",
    lng: "-118.38059",
  },
  {
    addressLine: "12205 N WOODLEY AVE",
    lat: "34.29119",
    lng: "-118.48938",
  },
  {
    addressLine: "11684 W SUNBURST ST",
    lat: "34.27149",
    lng: "-118.38736",
  },
  {
    addressLine: "11001 N FELLOWS AVE",
    lat: "34.26972",
    lng: "-118.4053",
  },
  {
    addressLine: "12002 N MONOGRAM AVE",
    lat: "34.28819",
    lng: "-118.49117",
  },
  {
    addressLine: "11857 N GERALD AVE",
    lat: "34.28613",
    lng: "-118.49334",
  },
  {
    addressLine: "16353 W BARNESTON ST",
    lat: "34.28519",
    lng: "-118.48824",
  },
  {
    addressLine: "11979 N WOOD RANCH ROAD",
    lat: "34.28913",
    lng: "-118.52264",
  },
  {
    addressLine: "16537 W MIDWOOD DR",
    lat: "34.28631",
    lng: "-118.49244",
  },
  {
    addressLine: "16401 W GOTHIC PL",
    lat: "34.28877",
    lng: "-118.48943",
  },
  {
    addressLine: "12048 N JEANETTE PL",
    lat: "34.28998",
    lng: "-118.50622",
  },
  {
    addressLine: "17900 W MAYERLING ST",
    lat: "34.28631",
    lng: "-118.5223",
  },
  {
    addressLine: "11900 N MALLOT PL",
    lat: "34.2866",
    lng: "-118.49534",
  },
  {
    addressLine: "13170 N BRADLEY AVE",
    lat: "34.30968",
    lng: "-118.46502",
  },
  {
    addressLine: "14605 W MACLAY ST",
    lat: "34.2761",
    lng: "-118.45114",
  },
  {
    addressLine: "4218 N VENTURA CANYON AVE",
    lat: "34.146949999999997",
    lng: "-118.42927",
  },
  {
    addressLine: "15710 W LUDLOW ST",
    lat: "34.27084",
    lng: "-118.47417",
  },
  {
    addressLine: "16035 W LUDLOW ST",
    lat: "34.27111",
    lng: "-118.48151",
  },
  {
    addressLine: "11016 N HASKELL AVE",
    lat: "34.27046",
    lng: "-118.47582",
  },
  {
    addressLine: "11367 N DRONFIELD TER",
    lat: "34.27711",
    lng: "-118.40275",
  },
  {
    addressLine: "12892 W LOUVRE ST",
    lat: "34.27825",
    lng: "-118.41365",
  },
  {
    addressLine: "16840 W MCKEEVER ST",
    lat: "34.27478",
    lng: "-118.4992",
  },
  {
    addressLine: "13481 W CORNELIUS ST",
    lat: "34.27778",
    lng: "-118.42658",
  },
  {
    addressLine: "16402 W LAHEY ST",
    lat: "34.27261",
    lng: "-118.48933",
  },
  {
    addressLine: "16220 W SAN FERNANDO MISSION BLVD",
    lat: "34.27178",
    lng: "-118.48571",
  },
  {
    addressLine: "16846 W INDEX ST",
    lat: "34.27552",
    lng: "-118.49951",
  },
  {
    addressLine: "11231 N WISH AVE",
    lat: "34.27469",
    lng: "-118.50622",
  },
  {
    addressLine: "13119 W DAVENTRY ST",
    lat: "34.27825",
    lng: "-118.4186",
  },
  {
    addressLine: "10922 N GERALD AVE",
    lat: "34.26905",
    lng: "-118.49437",
  },
  {
    addressLine: "16901 W HORACE ST",
    lat: "34.27028",
    lng: "-118.49959",
  },
  {
    addressLine: "11144 N GERALD AVE",
    lat: "34.27337",
    lng: "-118.49435",
  },
  {
    addressLine: "16417 W LAHEY ST",
    lat: "34.27299",
    lng: "-118.48958",
  },
  {
    addressLine: "11037 N BABBITT AVE",
    lat: "34.2712",
    lng: "-118.51006",
  },
  {
    addressLine: "17173 W INDEX ST",
    lat: "34.27572",
    lng: "-118.50747",
  },
  {
    addressLine: "17254 W LUDLOW ST",
    lat: "34.27075",
    lng: "-118.50963",
  },
  {
    addressLine: "10922 N RATHBURN AVE",
    lat: "34.26887",
    lng: "-118.53263",
  },
  {
    addressLine: "10923 N RATHBURN AVE",
    lat: "34.26887",
    lng: "-118.5329",
  },
  {
    addressLine: "10922 N YARMOUTH AVE",
    lat: "34.26923",
    lng: "-118.52136",
  },
  {
    addressLine: "19145 W LAHEY ST",
    lat: "34.2742",
    lng: "-118.54982",
  },
  {
    addressLine: "18644 W SAN FERNANDO MISSION BLVD",
    lat: "34.27328",
    lng: "-118.53962",
  },
  {
    addressLine: "19201 W SALT LAKE PL",
    lat: "34.27223",
    lng: "-118.55063",
  },
  {
    addressLine: "18933 W NASHVILLE ST",
    lat: "34.26831",
    lng: "-118.54625",
  },
  {
    addressLine: "10950 N BATON ROUGE AVE",
    lat: "34.26925",
    lng: "-118.55095",
  },
  {
    addressLine: "21026 W NASHVILLE ST",
    lat: "34.26887",
    lng: "-118.5916",
  },
  {
    addressLine: "19249 W KENYA ST",
    lat: "34.27167",
    lng: "-118.55252",
  },
  {
    addressLine: "3160 W ESTARA AVE",
    lat: "34.119239999999998",
    lng: "-118.24267",
  },
  {
    addressLine: "22234 W FRONTIER PL",
    lat: "34.27552",
    lng: "-118.61238",
  },
  {
    addressLine: "7839 W FORSYTHE ST",
    lat: "34.26643",
    lng: "-118.30398",
  },
  {
    addressLine: "7949 W WENTWORTH ST",
    lat: "34.26708",
    lng: "-118.30647",
  },
  {
    addressLine: "7820 W WENTWORTH ST",
    lat: "34.26679",
    lng: "-118.30345",
  },
  {
    addressLine: "7933 W WENTWORTH ST",
    lat: "34.26708",
    lng: "-118.30592",
  },
  {
    addressLine: "7287 W CHETWOOD DR",
    lat: "34.26614",
    lng: "-118.29061",
  },
  {
    addressLine: "10714 N FLORALITA AVE",
    lat: "34.2639",
    lng: "-118.31815",
  },
  {
    addressLine: "8647 W WENTWORTH ST",
    lat: "34.26717",
    lng: "-118.32168",
  },
  {
    addressLine: "8422 W WENTWORTH ST",
    lat: "34.26679",
    lng: "-118.31644",
  },
  {
    addressLine: "8618 W LE BERTHON ST",
    lat: "34.26764",
    lng: "-118.3207",
  },
  {
    addressLine: "7757 W GROVE ST",
    lat: "34.27037",
    lng: "-118.3021",
  },
  {
    addressLine: "10711 N ORO VISTA AVE",
    lat: "34.2637",
    lng: "-118.31591",
  },
  {
    addressLine: "10684 N HILLROSE CIR",
    lat: "34.26276",
    lng: "-118.32441",
  },
  {
    addressLine: "10847 N WESCOTT AVE",
    lat: "34.26614",
    lng: "-118.31766",
  },
  {
    addressLine: "8433 W HILLROSE ST",
    lat: "34.26352",
    lng: "-118.3169",
  },
  {
    addressLine: "10877 N DELIBAN AVE",
    lat: "34.26726",
    lng: "-118.28859",
  },
  {
    addressLine: "9437 W WENTWORTH ST",
    lat: "34.26397",
    lng: "-118.33779",
  },
  {
    addressLine: "9222 W FOOTHILL BLVD",
    lat: "34.26493",
    lng: "-118.33335",
  },
  {
    addressLine: "10710 N HIGHWAY PL",
    lat: "34.2639",
    lng: "-118.33134",
  },
  {
    addressLine: "9001 W RIDERWOOD DR",
    lat: "34.26491",
    lng: "-118.32812",
  },
  {
    addressLine: "10435 N KEWEN AVE",
    lat: "34.26003",
    lng: "-118.42497",
  },
  {
    addressLine: "6226 W DE LONGPRE AVE",
    lat: "34.09592",
    lng: "-118.32469",
  },
  {
    addressLine: "13256 W PIERCE ST",
    lat: "34.26135",
    lng: "-118.42116",
  },
  {
    addressLine: "13066 W FILMORE ST",
    lat: "34.27469",
    lng: "-118.41734",
  },
  {
    addressLine: "10361 W JIMENEZ PL",
    lat: "34.27496",
    lng: "-118.3552",
  },
  {
    addressLine: "12464 W GLAMIS ST",
    lat: "34.26549",
    lng: "-118.40491",
  },
  {
    addressLine: "13226 W PINNEY ST",
    lat: "34.26831",
    lng: "-118.42076",
  },
  {
    addressLine: "12822 W PIERCE ST",
    lat: "34.26802",
    lng: "-118.41201",
  },
  {
    addressLine: "11251 N HERRICK AVE",
    lat: "34.2746",
    lng: "-118.41869",
  },
  {
    addressLine: "12891 W VAN NUYS BLVD",
    lat: "34.27214",
    lng: "-118.41422",
  },
  {
    addressLine: "10922 N SUTTER AVE",
    lat: "34.26876",
    lng: "-118.42334",
  },
  {
    addressLine: "11020 N DE FOE AVE",
    lat: "34.26981",
    lng: "-118.41176",
  },
  {
    addressLine: "12967 W PINNEY ST",
    lat: "34.27252",
    lng: "-118.41539",
  },
  {
    addressLine: "11968 N BEAUFAIT AVE",
    lat: "34.29016",
    lng: "-118.53591",
  },
  {
    addressLine: "13875 W EUSTACE ST",
    lat: "34.2697",
    lng: "-118.43548",
  },
  {
    addressLine: "10941 N BARTEE AVE",
    lat: "34.26878",
    lng: "-118.45103",
  },
  {
    addressLine: "11262 N ILEX AVE",
    lat: "34.27458",
    lng: "-118.43298",
  },
  {
    addressLine: "13534 W WEIDNER ST",
    lat: "34.26972",
    lng: "-118.42777",
  },
  {
    addressLine: "19310 W WINGED FOOT CIR",
    lat: "34.28736",
    lng: "-118.5545",
  },
  {
    addressLine: "19761 W WINGED FOOT WAY",
    lat: "34.2879",
    lng: "-118.56448",
  },
  {
    addressLine: "11841 N LAUGHTON WAY",
    lat: "34.28895",
    lng: "-118.53362",
  },
  {
    addressLine: "15505 W CHATSWORTH ST",
    lat: "34.26473",
    lng: "-118.46973",
  },
  {
    addressLine: "11307 N TAMARACK AVE",
    lat: "34.27525",
    lng: "-118.43657",
  },
  {
    addressLine: "15935 W BERMUDA ST",
    lat: "34.26661",
    lng: "-118.47968",
  },
  {
    addressLine: "16545 W KINGSBURY ST",
    lat: "34.26399",
    lng: "-118.49242",
  },
  {
    addressLine: "10556 N GERALD AVE",
    lat: "34.26267",
    lng: "-118.49453",
  },
  {
    addressLine: "11752 W ARMINTA ST",
    lat: "34.213740000000001",
    lng: "-118.38951",
  },
  {
    addressLine: "10932 N WHITAKER AVE",
    lat: "34.26914",
    lng: "-118.49934",
  },
  {
    addressLine: "10620 N BALCOM AVE",
    lat: "34.26296",
    lng: "-118.52231",
  },
  {
    addressLine: "18531 W SAN JOSE ST",
    lat: "34.26117",
    lng: "-118.53746",
  },
  {
    addressLine: "6936 N COMANCHE AVE",
    lat: "34.196730000000002",
    lng: "-118.57194",
  },
  {
    addressLine: "10544 N SHOSHONE AVE",
    lat: "34.26249",
    lng: "-118.51738",
  },
  {
    addressLine: "10907 N SPRINGFIELD AVE",
    lat: "34.26773",
    lng: "-118.54647",
  },
  {
    addressLine: "18725 W TULSA ST",
    lat: "34.26764",
    lng: "-118.54015",
  },
  {
    addressLine: "13334 W HERRON ST",
    lat: "34.317839999999997",
    lng: "-118.42325",
  },
  {
    addressLine: "1611 N CAHUENGA BLVD",
    lat: "34.100110000000001",
    lng: "-118.32973",
  },
  {
    addressLine: "10910 N SPRINGFIELD AVE",
    lat: "34.26784",
    lng: "-118.54608",
  },
  {
    addressLine: "18904 W LOS ALIMOS ST",
    lat: "34.26641",
    lng: "-118.54521",
  },
  {
    addressLine: "10816 N YOLANDA AVE",
    lat: "34.2667",
    lng: "-118.54008",
  },
  {
    addressLine: "20000 W HIAWATHA ST",
    lat: "34.26041",
    lng: "-118.56903",
  },
  {
    addressLine: "20850 W KINGSBURY ST",
    lat: "34.26332",
    lng: "-118.5882",
  },
  {
    addressLine: "19506 W TRIBUNE ST",
    lat: "34.26652",
    lng: "-118.55781",
  },
  {
    addressLine: "20203 W GERMAIN ST",
    lat: "34.26285",
    lng: "-118.57454",
  },
  {
    addressLine: "10518 N DE SOTO AVE",
    lat: "34.26146",
    lng: "-118.58834",
  },
  {
    addressLine: "20753 W HORACE ST",
    lat: "34.26735",
    lng: "-118.58608",
  },
  {
    addressLine: "20827 W HORACE ST",
    lat: "34.26735",
    lng: "-118.58738",
  },
  {
    addressLine: "10558 N RHODESIA AVE",
    lat: "34.26135",
    lng: "-118.30776",
  },
  {
    addressLine: "7923 W FENWICK ST",
    lat: "34.26155",
    lng: "-118.30553",
  },
  {
    addressLine: "10644 N MT GLEASON AVE",
    lat: "34.26267",
    lng: "-118.30255",
  },
  {
    addressLine: "10521 N JARDINE AVE",
    lat: "34.26023",
    lng: "-118.30443",
  },
  {
    addressLine: "7058 W DAY ST",
    lat: "34.25461",
    lng: "-118.28507",
  },
  {
    addressLine: "10529 N JARDINE AVE",
    lat: "34.26052",
    lng: "-118.30441",
  },
  {
    addressLine: "10252 N HAINES CANYON AVE",
    lat: "34.25479",
    lng: "-118.27726",
  },
  {
    addressLine: "10106 N GISH AVE",
    lat: "34.25179",
    lng: "-118.27683",
  },
  {
    addressLine: "9100 W FOOTHILL BLVD",
    lat: "34.26343",
    lng: "-118.33037",
  },
  {
    addressLine: "7833 W BECKETT ST",
    lat: "34.25347",
    lng: "-118.3036",
  },
  {
    addressLine: "10400 null UNKNOWN STREET NAME null",
    lat: "34.25788",
    lng: "-118.2741",
  },
  {
    addressLine: "8109 W HILLROSE ST",
    lat: "34.26343",
    lng: "-118.30949",
  },
  {
    addressLine: "10053 N COMMERCE AVE",
    lat: "34.2517",
    lng: "-118.28878",
  },
  {
    addressLine: "10450 N HAINES CANYON AVE",
    lat: "34.259",
    lng: "-118.27794",
  },
  {
    addressLine: "10150 N MATHER AVE",
    lat: "34.25376",
    lng: "-118.30953",
  },
  {
    addressLine: "7656 W SUMMITROSE ST",
    lat: "34.25949",
    lng: "-118.29975",
  },
  {
    addressLine: "10378 N MATHER AVE",
    lat: "34.25808",
    lng: "-118.31057",
  },
  {
    addressLine: "10234 N MCVINE AVE",
    lat: "34.25526",
    lng: "-118.31125",
  },
  {
    addressLine: "13537 W LOUVRE ST",
    lat: "34.26896",
    lng: "-118.42783",
  },
  {
    addressLine: "13717 W LOUVRE ST",
    lat: "34.26585",
    lng: "-118.43177",
  },
  {
    addressLine: "3409 N BLAIR DR",
    lat: "34.13449",
    lng: "-118.3462",
  },
  {
    addressLine: "14324 W GERMAIN ST",
    lat: "34.26493",
    lng: "-118.44543",
  },
  {
    addressLine: "13279 W VAN NUYS BLVD",
    lat: "34.26576",
    lng: "-118.42287",
  },
  {
    addressLine: "13773 W JUDD ST",
    lat: "34.26193",
    lng: "-118.43316",
  },
  {
    addressLine: "15264 W CLYMER ST",
    lat: "34.26249",
    lng: "-118.465",
  },
  {
    addressLine: "14720 W BRAND BLVD",
    lat: "34.27178",
    lng: "-118.45322",
  },
  {
    addressLine: "10448 N ORION AVE",
    lat: "34.26052",
    lng: "-118.47113",
  },
  {
    addressLine: "10431 N TELFAIR AVE",
    lat: "34.25947",
    lng: "-118.42146",
  },
  {
    addressLine: "14718 W KINGSBURY ST",
    lat: "34.26341",
    lng: "-118.45269",
  },
  {
    addressLine: "10835 N COLUMBUS AVE",
    lat: "34.26717",
    lng: "-118.46471",
  },
  {
    addressLine: "10840 N HASKELL AVE",
    lat: "34.26764",
    lng: "-118.47583",
  },
  {
    addressLine: "15715 W DEVONSHIRE ST",
    lat: "34.2575",
    lng: "-118.47465",
  },
  {
    addressLine: "15712 W ROMAR ST",
    lat: "34.2545",
    lng: "-118.47451",
  },
  {
    addressLine: "10341 N PATRICK AVE",
    lat: "34.25853",
    lng: "-118.44009",
  },
  {
    addressLine: "13777 W VAN NUYS BLVD",
    lat: "34.25808",
    lng: "-118.43343",
  },
  {
    addressLine: "15277 W TUBA ST",
    lat: "34.25638",
    lng: "-118.46562",
  },
  {
    addressLine: "9946 N MONTGOMERY AVE",
    lat: "34.2517",
    lng: "-118.48155",
  },
  {
    addressLine: "10109 N GLORIA AVE",
    lat: "34.25421",
    lng: "-118.48",
  },
  {
    addressLine: "10157 N RUFFNER AVE",
    lat: "34.25562",
    lng: "-118.49699",
  },
  {
    addressLine: "16452 W BLACKHAWK ST",
    lat: "34.25826",
    lng: "-118.49121",
  },
  {
    addressLine: "17257 W HIAWATHA ST",
    lat: "34.25949",
    lng: "-118.51061",
  },
  {
    addressLine: "16910 W DEVONSHIRE ST",
    lat: "34.25732",
    lng: "-118.50049",
  },
  {
    addressLine: "10048 N HASKELL AVE",
    lat: "34.25329",
    lng: "-118.47599",
  },
  {
    addressLine: "10020 N WOODLEY AVE",
    lat: "34.25264",
    lng: "-118.48469",
  },
  {
    addressLine: "10350 N SOPHIA AVE",
    lat: "34.259",
    lng: "-118.48734",
  },
  {
    addressLine: "10050 N GAVIOTA AVE",
    lat: "34.25347",
    lng: "-118.48257",
  },
  {
    addressLine: "10131 N JUMILLA AVE",
    lat: "34.2545",
    lng: "-118.56392",
  },
  {
    addressLine: "15700 W STARE ST",
    lat: "34.25271",
    lng: "-118.4742",
  },
  {
    addressLine: "9951 N OAK PARK AVE",
    lat: "34.25197",
    lng: "-118.50527",
  },
  {
    addressLine: "10110 N KEOKUK AVE",
    lat: "34.25423",
    lng: "-118.57408",
  },
  {
    addressLine: "19452 W ROMAR ST",
    lat: "34.25441",
    lng: "-118.55758",
  },
  {
    addressLine: "16811 W HIAWATHA ST",
    lat: "34.25947",
    lng: "-118.49842",
  },
  {
    addressLine: "18743 W TUBA ST",
    lat: "34.25611",
    lng: "-118.54209",
  },
  {
    addressLine: "10210 N LARAMIE AVE",
    lat: "34.25647",
    lng: "-118.57359",
  },
  {
    addressLine: "10421 N DE SOTO AVE",
    lat: "34.25958",
    lng: "-118.58882",
  },
  {
    addressLine: "10235 N LURLINE AVE",
    lat: "34.25591",
    lng: "-118.58431",
  },
  {
    addressLine: "20000 W LEMARSH ST",
    lat: "34.25508",
    lng: "-118.56927",
  },
  {
    addressLine: "10141 N LARAMIE AVE",
    lat: "34.25506",
    lng: "-118.57342",
  },
  {
    addressLine: "21751 W VINTAGE ST",
    lat: "34.25224",
    lng: "-118.60343",
  },
  {
    addressLine: "10338 N VARIEL AVE",
    lat: "34.25853",
    lng: "-118.59281",
  },
  {
    addressLine: "10061 N VANALDEN AVE",
    lat: "34.25329",
    lng: "-118.54935",
  },
  {
    addressLine: "10115 N REMMET AVE",
    lat: "34.25403",
    lng: "-118.6007",
  },
  {
    addressLine: "21958 W MERRIDY ST",
    lat: "34.25262",
    lng: "-118.60575",
  },
  {
    addressLine: "20622 W MERRIDY ST",
    lat: "34.25271",
    lng: "-118.58269",
  },
  {
    addressLine: "10221 N CANOGA AVE",
    lat: "34.25591",
    lng: "-118.59748",
  },
  {
    addressLine: "10200 N OWENSMOUTH AVE",
    lat: "34.25553",
    lng: "-118.60154",
  },
  {
    addressLine: "9716 W JOHANNA PL",
    lat: "34.25638",
    lng: "-118.34347",
  },
  {
    addressLine: "9645 W GREEN VERDUGO DR",
    lat: "34.25423",
    lng: "-118.34165",
  },
  {
    addressLine: "12270 W MONTAGUE ST",
    lat: "34.25544",
    lng: "-118.4003",
  },
  {
    addressLine: "10215 N VARIEL AVE",
    lat: "34.25573",
    lng: "-118.59308",
  },
  {
    addressLine: "10553 N KEWEN AVE",
    lat: "34.26164",
    lng: "-118.42667",
  },
  {
    addressLine: "11094 W MCBROOM ST",
    lat: "34.25517",
    lng: "-118.37231",
  },
  {
    addressLine: "5315 N RIVERTON AVE",
    lat: "34.167189999999998",
    lng: "-118.36559",
  },
  {
    addressLine: "13731 W JOUETT ST",
    lat: "34.25497",
    lng: "-118.43232",
  },
  {
    addressLine: "12181 W MONTAGUE ST",
    lat: "34.25703",
    lng: "-118.3986",
  },
  {
    addressLine: "13107 W GLAMIS ST",
    lat: "34.25544",
    lng: "-118.41888",
  },
  {
    addressLine: "11209 W SHELDON ST",
    lat: "34.25309",
    lng: "-118.37508",
  },
  {
    addressLine: "13562 W REMINGTON ST",
    lat: "34.25215",
    lng: "-118.42836",
  },
  {
    addressLine: "10409 N NEWHOME AVE",
    lat: "34.25808",
    lng: "-118.32182",
  },
  {
    addressLine: "14702 W GERMAIN ST",
    lat: "34.26164",
    lng: "-118.45197",
  },
  {
    addressLine: "10940 W MESETA DR",
    lat: "34.25423",
    lng: "-118.3681",
  },
  {
    addressLine: "10075 N LAUREL CANYON BLVD",
    lat: "34.25329",
    lng: "-118.42659",
  },
  {
    addressLine: "10038 N LEV AVE",
    lat: "34.253",
    lng: "-118.43597",
  },
  {
    addressLine: "10052 N WOODMAN AVE",
    lat: "34.253",
    lng: "-118.45272",
  },
  {
    addressLine: "19557 W TULSA ST",
    lat: "34.268909999999998",
    lng: "-118.55952000000001",
  },
  {
    addressLine: "10359 N O'MELVENY AVE",
    lat: "34.25873",
    lng: "-118.42795",
  },
  {
    addressLine: "15220 W KINGSBURY ST",
    lat: "34.26323",
    lng: "-118.46366",
  },
  {
    addressLine: "10103 N TELFAIR AVE",
    lat: "34.25394",
    lng: "-118.4156",
  },
  {
    addressLine: "12715 W OSBORNE ST",
    lat: "34.25394",
    lng: "-118.41018",
  },
  {
    addressLine: "10157 N BEVIS AVE",
    lat: "34.25535",
    lng: "-118.45553",
  },
  {
    addressLine: "10336 N WOODMAN AVE",
    lat: "34.25853",
    lng: "-118.45406",
  },
  {
    addressLine: "14743 W VINTAGE ST",
    lat: "34.25235",
    lng: "-118.45311",
  },
  {
    addressLine: "10157 N NOBLE AVE",
    lat: "34.25526",
    lng: "-118.46106",
  },
  {
    addressLine: "9955 N WOODWARD AVE",
    lat: "34.24982",
    lng: "-118.30656",
  },
  {
    addressLine: "9901 N HELEN AVE",
    lat: "34.2498",
    lng: "-118.36521",
  },
  {
    addressLine: "10427 N WOODMAN AVE",
    lat: "34.25985",
    lng: "-118.45446",
  },
  {
    addressLine: "11275 W PEORIA ST",
    lat: "34.24127",
    lng: "-118.37685",
  },
  {
    addressLine: "15520 W DEVONSHIRE ST",
    lat: "34.25714",
    lng: "-118.47031",
  },
  {
    addressLine: "10650 W WALNUT DR",
    lat: "34.24982",
    lng: "-118.36225",
  },
  {
    addressLine: "10321 W VALLEY GLOW DR",
    lat: "34.25076",
    lng: "-118.35545",
  },
  {
    addressLine: "9727 N STONEHURST AVE",
    lat: "34.24756",
    lng: "-118.3694",
  },
  {
    addressLine: "12948 W MONTAGUE ST",
    lat: "34.24532",
    lng: "-118.41418",
  },
  {
    addressLine: "7456 W VALAHO LANE",
    lat: "34.25132",
    lng: "-118.29513",
  },
  {
    addressLine: "9641 N WORNOM AVE",
    lat: "34.2453",
    lng: "-118.35208",
  },
  {
    addressLine: "9677 N LEV AVE",
    lat: "34.24577",
    lng: "-118.42876",
  },
  {
    addressLine: "12623 W DEBELL ST",
    lat: "34.2468",
    lng: "-118.40886",
  },
  {
    addressLine: "9683 N AMBOY AVE",
    lat: "34.24579",
    lng: "-118.4157",
  },
  {
    addressLine: "11654 W SHELDON ST",
    lat: "34.24474",
    lng: "-118.386",
  },
  {
    addressLine: "11455 null UNKNOWN STREET NAME null",
    lat: "34.2438",
    lng: "-118.38046",
  },
  {
    addressLine: "11145 W HERSHEY ST",
    lat: "34.24982",
    lng: "-118.37414",
  },
  {
    addressLine: "12941 W CORRENTI ST",
    lat: "34.24803",
    lng: "-118.41458",
  },
  {
    addressLine: "14284 W PIERCE ST",
    lat: "34.24456",
    lng: "-118.44416",
  },
  {
    addressLine: "11460 W SHELDON ST",
    lat: "34.2485",
    lng: "-118.38087",
  },
  {
    addressLine: "15503 W ROMAR ST",
    lat: "34.25468",
    lng: "-118.46992",
  },
  {
    addressLine: "9910 N TELFAIR AVE",
    lat: "34.25",
    lng: "-118.41101",
  },
  {
    addressLine: "9551 N VAN NUYS BLVD",
    lat: "34.24436",
    lng: "-118.45043",
  },
  {
    addressLine: "9536 N LEMONA AVE",
    lat: "34.24371",
    lng: "-118.45864",
  },
  {
    addressLine: "9701 N MERCEDES AVE",
    lat: "34.24689",
    lng: "-118.43593",
  },
  {
    addressLine: "9900 N LEV AVE",
    lat: "34.25056",
    lng: "-118.43335",
  },
  {
    addressLine: "9809 N SEPULVEDA BLVD",
    lat: "34.24868",
    lng: "-118.46775",
  },
  {
    addressLine: "14400 W VAN NUYS BLVD",
    lat: "34.24832",
    lng: "-118.44615",
  },
  {
    addressLine: "14747 W LABRADOR ST",
    lat: "34.24915",
    lng: "-118.45336",
  },
  {
    addressLine: "9730 N BURNET AVE",
    lat: "34.24729",
    lng: "-118.46296",
  },
  {
    addressLine: "9707 N CANTERBURY AVE",
    lat: "34.24644",
    lng: "-118.4425",
  },
  {
    addressLine: "17300 W BALLINGER ST",
    lat: "34.2438",
    lng: "-118.5117",
  },
  {
    addressLine: "1310 N ISABEL ST",
    lat: "34.09778",
    lng: "-118.22783",
  },
  {
    addressLine: "9740 N BABBITT AVE",
    lat: "34.24783",
    lng: "-118.51022",
  },
  {
    addressLine: "16656 W MARILLA ST",
    lat: "34.24765",
    lng: "-118.49558",
  },
  {
    addressLine: "13147 W ROSCOE BLVD",
    lat: "34.221820000000001",
    lng: "-118.42003",
  },
  {
    addressLine: "9555 N LINDLEY AVE",
    lat: "34.24409",
    lng: "-118.5275",
  },
  {
    addressLine: "9961 N COMANCHE AVE",
    lat: "34.25197",
    lng: "-118.57244",
  },
  {
    addressLine: "17350 W BALLINGER ST",
    lat: "34.24389",
    lng: "-118.51339",
  },
  {
    addressLine: "17809 W SUPERIOR ST",
    lat: "34.24689",
    lng: "-118.5219",
  },
  {
    addressLine: "18918 W CITRONIA ST",
    lat: "34.24541",
    lng: "-118.54575",
  },
  {
    addressLine: "9841 N JOVITA PL",
    lat: "34.24924",
    lng: "-118.57625",
  },
  {
    addressLine: "19520 W HALSTED ST",
    lat: "34.24427",
    lng: "-118.55865",
  },
  {
    addressLine: "9515 N GLADBECK AVE",
    lat: "34.24333",
    lng: "-118.53896",
  },
  {
    addressLine: "9701 N BELMAR AVE",
    lat: "34.24671",
    lng: "-118.55919",
  },
  {
    addressLine: "20731 W PLUMMER ST",
    lat: "34.24286",
    lng: "-118.58529",
  },
  {
    addressLine: "9659 N CALVIN AVE",
    lat: "34.24579",
    lng: "-118.55582",
  },
  {
    addressLine: "9716 N PENFIELD AVE",
    lat: "34.24671",
    lng: "-118.56945",
  },
  {
    addressLine: "9672 N OSO AVE",
    lat: "34.24606",
    lng: "-118.57526",
  },
  {
    addressLine: "9749 N KESSLER AVE",
    lat: "34.24747",
    lng: "-118.56792",
  },
  {
    addressLine: "19931 W LABRADOR ST",
    lat: "34.24924",
    lng: "-118.56769",
  },
  {
    addressLine: "9727 N KESSLER AVE",
    lat: "34.24689",
    lng: "-118.56791",
  },
  {
    addressLine: "22325 W DEVONSHIRE ST",
    lat: "34.2577",
    lng: "-118.61362",
  },
  {
    addressLine: "8766 W WYNGATE ST",
    lat: "34.25817",
    lng: "-118.32374",
  },
  {
    addressLine: "10441 N LARWIN AVE",
    lat: "34.25958",
    lng: "-118.61399",
  },
  {
    addressLine: "22327 W JAMES ALAN CIR",
    lat: "34.259",
    lng: "-118.61263",
  },
  {
    addressLine: "9734 N QUAKERTOWN AVE",
    lat: "34.24729",
    lng: "-118.57035",
  },
  {
    addressLine: "10344 N FARRALONE AVE",
    lat: "34.25855",
    lng: "-118.61028",
  },
  {
    addressLine: "7626 W FOOTHILL BLVD",
    lat: "34.25517",
    lng: "-118.29888",
  },
  {
    addressLine: "7665 W THOUSAND OAKS DR",
    lat: "34.25226",
    lng: "-118.30006",
  },
  {
    addressLine: "7523 W VALMONT ST",
    lat: "34.25244",
    lng: "-118.29619",
  },
  {
    addressLine: "7545 W FOOTHILL BLVD",
    lat: "34.25385",
    lng: "-118.29673",
  },
  {
    addressLine: "8766 W WYNGATE ST",
    lat: "34.25817",
    lng: "-118.32374",
  },
  {
    addressLine: "10028 N LEONA AVE",
    lat: "34.25029",
    lng: "-118.27566",
  },
  {
    addressLine: "6206 W GYRAL DR",
    lat: "34.25365",
    lng: "-118.26899",
  },
  {
    addressLine: "9890 N ESTABAN WAY",
    lat: "34.24823",
    lng: "-118.29194",
  },
  {
    addressLine: "6825 W QUINTON LANE",
    lat: "34.24823",
    lng: "-118.28022",
  },
  {
    addressLine: "7326 W VALAHO LANE",
    lat: "34.24973",
    lng: "-118.292",
  },
  {
    addressLine: "7032 W GREELEY ST",
    lat: "34.24879",
    lng: "-118.28437",
  },
  {
    addressLine: "7560 W VALMONT ST",
    lat: "34.25226",
    lng: "-118.29756",
  },
  {
    addressLine: "9844 N TUJUNGA CANYON PL",
    lat: "34.24588",
    lng: "-118.27198",
  },
  {
    addressLine: "10023 N GLORY AVE",
    lat: "34.25056",
    lng: "-118.28144",
  },
  {
    addressLine: "9946 N CABANAS AVE",
    lat: "34.2485",
    lng: "-118.2687",
  },
  {
    addressLine: "6401 W HAYWOOD ST",
    lat: "34.24727",
    lng: "-118.2705",
  },
  {
    addressLine: "9202 N ONEIDA AVE",
    lat: "34.23686",
    lng: "-118.40138",
  },
  {
    addressLine: "11335 W ALLEGHENY ST",
    lat: "34.2483",
    lng: "-118.37804",
  },
  {
    addressLine: "11755 W SHELDON ST",
    lat: "34.24295",
    lng: "-118.38906",
  },
  {
    addressLine: "9132 N GLENOAKS BLVD",
    lat: "34.23545",
    lng: "-118.37203",
  },
  {
    addressLine: "12909 W BROMWICH ST",
    lat: "34.24756",
    lng: "-118.41341",
  },
  {
    addressLine: "9386 N ILEX AVE",
    lat: "34.23968",
    lng: "-118.39545",
  },
  {
    addressLine: "9220 N BEACHY AVE",
    lat: "34.23724",
    lng: "-118.42661",
  },
  {
    addressLine: "13757 W RAYEN ST",
    lat: "34.23603",
    lng: "-118.43298",
  },
  {
    addressLine: "9262 N KEWEN AVE",
    lat: "34.23807",
    lng: "-118.40125",
  },
  {
    addressLine: "13712 W KAGEL CANYON ST",
    lat: "34.24295",
    lng: "-118.43191",
  },
  {
    addressLine: "13727 W RAYEN ST",
    lat: "34.23648",
    lng: "-118.43239",
  },
  {
    addressLine: "1202 W 2ND ST",
    lat: "34.058920000000001",
    lng: "-118.25711",
  },
  {
    addressLine: "13594 W WINGO ST",
    lat: "34.2376",
    lng: "-118.42896",
  },
  {
    addressLine: "9204 N LANGDON AVE",
    lat: "34.23751",
    lng: "-118.46965",
  },
  {
    addressLine: "9155 N NOBLE AVE",
    lat: "34.23706",
    lng: "-118.46119",
  },
  {
    addressLine: "9460 N VAN NUYS BLVD",
    lat: "34.2423",
    lng: "-118.45003",
  },
  {
    addressLine: "14620 W GLEDHILL ST",
    lat: "34.24127",
    lng: "-118.45126",
  },
  {
    addressLine: "15950 W NORDHOFF ST",
    lat: "34.23545",
    lng: "-118.48017",
  },
  {
    addressLine: "16444 W VINCENNES ST",
    lat: "34.24109",
    lng: "-118.49087",
  },
  {
    addressLine: "16401 W DEARBORN ST",
    lat: "34.23762",
    lng: "-118.4897",
  },
  {
    addressLine: "16625 W LIGGETT ST",
    lat: "34.24024",
    lng: "-118.49471",
  },
  {
    addressLine: "16115 W KNAPP ST",
    lat: "34.23845",
    lng: "-118.48339",
  },
  {
    addressLine: "9315 N SWINTON AVE",
    lat: "34.23977",
    lng: "-118.48625",
  },
  {
    addressLine: "16501 W KNAPP ST",
    lat: "34.23854",
    lng: "-118.49157",
  },
  {
    addressLine: "16320 W TUPPER ST",
    lat: "34.23921",
    lng: "-118.48812",
  },
  {
    addressLine: "9149 N MCLENNAN AVE",
    lat: "34.23715",
    lng: "-118.50116",
  },
  {
    addressLine: "17266 W MILLARD PL",
    lat: "34.24145",
    lng: "-118.5108",
  },
  {
    addressLine: "9102 N ENCINO AVE",
    lat: "34.23621",
    lng: "-118.5155",
  },
  {
    addressLine: "9254 N VANALDEN AVE",
    lat: "34.23883",
    lng: "-118.54906",
  },
  {
    addressLine: "17054 W CALAHAN ST",
    lat: "34.2363",
    lng: "-118.50473",
  },
  {
    addressLine: "9315 N DONNA AVE",
    lat: "34.23959",
    lng: "-118.54832",
  },
  {
    addressLine: "9335 N RESEDA BLVD",
    lat: "34.24004",
    lng: "-118.53628",
  },
  {
    addressLine: "9242 N WHITAKER AVE",
    lat: "34.23883",
    lng: "-118.4988",
  },
  {
    addressLine: "18438 W NORDHOFF ST",
    lat: "34.23527",
    lng: "-118.53524",
  },
  {
    addressLine: "18298 W NORDHOFF ST",
    lat: "34.23527",
    lng: "-118.53131",
  },
  {
    addressLine: "17074 W CALAHAN ST",
    lat: "34.2363",
    lng: "-118.50542",
  },
  {
    addressLine: "9354 N OSO AVE",
    lat: "34.24091",
    lng: "-118.57529",
  },
  {
    addressLine: "9439 N BIANCA AVE",
    lat: "34.2425",
    lng: "-118.51424",
  },
  {
    addressLine: "18727 W NORDHOFF ST",
    lat: "34.23565",
    lng: "-118.54149",
  },
  {
    addressLine: "9318 N OSO AVE",
    lat: "34.23977",
    lng: "-118.57529",
  },
  {
    addressLine: "19240 W BALLINGER ST",
    lat: "34.24333",
    lng: "-118.55309",
  },
  {
    addressLine: "18920 W PLUMMER ST",
    lat: "34.24259",
    lng: "-118.54558",
  },
  {
    addressLine: "6219 W MAYFIELD AVE",
    lat: "34.2346",
    lng: "-118.26725",
  },
  {
    addressLine: "22152 W GLEDHILL ST",
    lat: "34.24118",
    lng: "-118.60997",
  },
  {
    addressLine: "22448 W SOUTH SUMMIT RIDGE CIR",
    lat: "34.23995",
    lng: "-118.6163",
  },
  {
    addressLine: "7023 S ESTRELLA AVE",
    lat: "33.9754",
    lng: "-118.28505",
  },
  {
    addressLine: "8701 N VINEVALLEY DR",
    lat: "34.22757",
    lng: "-118.35927",
  },
  {
    addressLine: "10932 W PENROSE ST",
    lat: "34.23077",
    lng: "-118.36908",
  },
  {
    addressLine: "11168 W PENROSE ST",
    lat: "34.22701",
    lng: "-118.37414",
  },
  {
    addressLine: "9325 N FARRALONE AVE",
    lat: "34.23939",
    lng: "-118.60945",
  },
  {
    addressLine: "20978 W KNAPP ST",
    lat: "34.23847",
    lng: "-118.5912",
  },
  {
    addressLine: "10828 W GOSS ST",
    lat: "34.2301",
    lng: "-118.36809",
  },
  {
    addressLine: "9051 N WILDWOOD AVE",
    lat: "34.23366",
    lng: "-118.35405",
  },
  {
    addressLine: "9744 N MASON AVE",
    lat: "34.24756",
    lng: "-118.57964",
  },
  {
    addressLine: "9610 N RUDNICK AVE",
    lat: "34.24474",
    lng: "-118.61238",
  },
  {
    addressLine: "8936 N WHEATLAND AVE",
    lat: "34.23151",
    lng: "-118.36169",
  },
  {
    addressLine: "20552 W LASSEN ST",
    lat: "34.2498",
    lng: "-118.58158",
  },
  {
    addressLine: "9701 N DE SOTO AVE",
    lat: "34.24653",
    lng: "-118.58875",
  },
  {
    addressLine: "9709 N MARCUS AVE",
    lat: "34.24474",
    lng: "-118.28174",
  },
  {
    addressLine: "9944 N GIERSON AVE",
    lat: "34.25123",
    lng: "-118.61136",
  },
  {
    addressLine: "6226 W DE LONGPRE AVE",
    lat: "34.09592",
    lng: "-118.32469",
  },
  {
    addressLine: "9615 N HILLHAVEN AVE",
    lat: "34.24465",
    lng: "-118.29145",
  },
  {
    addressLine: "9554 N CREEMORE PL",
    lat: "34.24145",
    lng: "-118.27113",
  },
  {
    addressLine: "9530 N CREEMORE DR",
    lat: "34.24098",
    lng: "-118.27211",
  },
  {
    addressLine: "9601 N HILLHAVEN AVE",
    lat: "34.24465",
    lng: "-118.29195",
  },
  {
    addressLine: "6346 W HARMAN DR",
    lat: "34.23751",
    lng: "-118.26987",
  },
  {
    addressLine: "7135 W ESTEPA DR",
    lat: "34.24183",
    lng: "-118.28755",
  },
  {
    addressLine: "7443 W VERDUGO CRESTLINE DR",
    lat: "34.24624",
    lng: "-118.29544",
  },
  {
    addressLine: "7255 W TRANQUIL PL",
    lat: "34.24098",
    lng: "-118.29035",
  },
  {
    addressLine: "9511 N REVERIE ROAD",
    lat: "34.24268",
    lng: "-118.29315",
  },
  {
    addressLine: "8814 N MATILIJA AVE",
    lat: "34.2301",
    lng: "-118.43767",
  },
  {
    addressLine: "14308 W NORDHOFF ST",
    lat: "34.23518",
    lng: "-118.44405",
  },
  {
    addressLine: "8835 N ZEILER AVE",
    lat: "34.23021",
    lng: "-118.43254",
  },
  {
    addressLine: "9024 N SYLMAR AVE",
    lat: "34.23404",
    lng: "-118.4457",
  },
  {
    addressLine: "8924 N WOODMAN AVE",
    lat: "34.23207",
    lng: "-118.43776",
  },
  {
    addressLine: "8921 N SYLMAR AVE",
    lat: "34.23227",
    lng: "-118.44582",
  },
  {
    addressLine: "8736 N GLORIA AVE",
    lat: "34.22907",
    lng: "-118.4803",
  },
  {
    addressLine: "15949 W PARTHENIA ST",
    lat: "34.22851",
    lng: "-118.48013",
  },
  {
    addressLine: "15955 W ACRE ST",
    lat: "34.23028",
    lng: "-118.48044",
  },
  {
    addressLine: "16112 W PARTHENIA ST",
    lat: "34.22822",
    lng: "-118.48326",
  },
  {
    addressLine: "15838 W BAHAMA ST",
    lat: "34.23272",
    lng: "-118.47775",
  },
  {
    addressLine: "16320 W SUNBURST ST",
    lat: "34.23462",
    lng: "-118.488",
  },
  {
    addressLine: "9016 N DEBRA AVE",
    lat: "34.23433",
    lng: "-118.49043",
  },
  {
    addressLine: "4119 N VENTURA CANYON AVE",
    lat: "34.145240000000001",
    lng: "-118.42965",
  },
  {
    addressLine: "9019 N HASKELL AVE",
    lat: "34.23424",
    lng: "-118.47653",
  },
  {
    addressLine: "17240 W OSBORNE ST",
    lat: "34.2333",
    lng: "-118.51012",
  },
  {
    addressLine: "17170 W GRESHAM ST",
    lat: "34.23028",
    lng: "-118.50806",
  },
  {
    addressLine: "6407 W SELMA AVE",
    lat: "34.09986",
    lng: "-118.32992",
  },
  {
    addressLine: "8626 N JELLICO AVE",
    lat: "34.22766",
    lng: "-118.51854",
  },
  {
    addressLine: "8621 N PASO ROBLES AVE",
    lat: "34.2273",
    lng: "-118.50492",
  },
  {
    addressLine: "8940 N BAIRD AVE",
    lat: "34.2331",
    lng: "-118.53708",
  },
  {
    addressLine: "19711 W NORDHOFF ST",
    lat: "34.23216",
    lng: "-118.56267",
  },
  {
    addressLine: "1230 W 2ND ST",
    lat: "34.05932",
    lng: "-118.25748",
  },
  {
    addressLine: "8755 N PENFIELD AVE",
    lat: "34.22972",
    lng: "-118.56905",
  },
  {
    addressLine: "20552 W LONDELIUS ST",
    lat: "34.22898",
    lng: "-118.58152",
  },
  {
    addressLine: "20811 W BRYANT ST",
    lat: "34.2271",
    lng: "-118.58677",
  },
  {
    addressLine: "19915 W ACRE ST",
    lat: "34.2301",
    lng: "-118.56737",
  },
  {
    addressLine: "20620 W LONDELIUS ST",
    lat: "34.22898",
    lng: "-118.58268",
  },
  {
    addressLine: "2018 E PENNSYLVANIA AVE",
    lat: "34.045850000000002",
    lng: "-118.21387",
  },
  {
    addressLine: "10544 W CANTARA ST",
    lat: "34.21893",
    lng: "-118.36113",
  },
  {
    addressLine: "10803 W CANTARA ST",
    lat: "34.21942",
    lng: "-118.36516",
  },
  {
    addressLine: "21721 W PARTHENIA ST",
    lat: "34.22833",
    lng: "-118.60239",
  },
  {
    addressLine: "10544 W CANTARA ST",
    lat: "34.21893",
    lng: "-118.36113",
  },
  {
    addressLine: "21018 W GRESHAM ST",
    lat: "34.23048",
    lng: "-118.59142",
  },
  {
    addressLine: "8416 N BROADACRE DR",
    lat: "34.22307",
    lng: "-118.35363",
  },
  {
    addressLine: "10863 W PENROSE ST",
    lat: "34.23245",
    lng: "-118.36729",
  },
  {
    addressLine: "12036 W PEORIA ST",
    lat: "34.22757",
    lng: "-118.39509",
  },
  {
    addressLine: "8278 N MARMAY PL",
    lat: "34.22099",
    lng: "-118.37353",
  },
  {
    addressLine: "8400 N WHEATLAND AVE",
    lat: "34.22316",
    lng: "-118.36161",
  },
  {
    addressLine: "8461 N GLENCREST DR",
    lat: "34.22428",
    lng: "-118.3595",
  },
  {
    addressLine: "8721 N TAMARACK AVE",
    lat: "34.22795",
    lng: "-118.38647",
  },
  {
    addressLine: "13168 W REEDLEY ST",
    lat: "34.22822",
    lng: "-118.41919",
  },
  {
    addressLine: "13259 W WENTWORTH ST",
    lat: "34.22974",
    lng: "-118.42153",
  },
  {
    addressLine: "9060 N TELFAIR AVE",
    lat: "34.23424",
    lng: "-118.39431",
  },
  {
    addressLine: "13400 W RANGOON ST",
    lat: "34.22916",
    lng: "-118.42475",
  },
  {
    addressLine: "8635 N STANSBURY AVE",
    lat: "34.2271",
    lng: "-118.44286",
  },
  {
    addressLine: "9634 N TUJUNGA CANYON BLVD",
    lat: "34.24248",
    lng: "-118.27352",
  },
  {
    addressLine: "2355 E MEADOWVALE AVE",
    lat: "34.091090000000001",
    lng: "-118.23362",
  },
  {
    addressLine: "1328 W 3RD ST",
    lat: "34.0578",
    lng: "-118.26094000000001",
  },
  {
    addressLine: "13879 W RAYEN ST",
    lat: "34.23386",
    lng: "-118.43598",
  },
  {
    addressLine: "8954 N WOODALE AVE",
    lat: "34.23272",
    lng: "-118.41956",
  },
  {
    addressLine: "1212 W 2ND ST",
    lat: "34.058970000000002",
    lng: "-118.25715",
  },
  {
    addressLine: "8700 N WAKEFIELD AVE",
    lat: "34.22766",
    lng: "-118.44597",
  },
  {
    addressLine: "8960 N WOODALE AVE",
    lat: "34.23283",
    lng: "-118.41969",
  },
  {
    addressLine: "17610 W COMMUNITY ST",
    lat: "34.22269",
    lng: "-118.51756",
  },
  {
    addressLine: "8538 N PASO ROBLES AVE",
    lat: "34.22598",
    lng: "-118.50467",
  },
  {
    addressLine: "16641 W ROSCOE PL",
    lat: "34.22137",
    lng: "-118.49512",
  },
  {
    addressLine: "8306 N GLADBECK AVE",
    lat: "34.22101",
    lng: "-118.5384",
  },
  {
    addressLine: "18732 W MALDEN ST",
    lat: "34.22531",
    lng: "-118.54133",
  },
  {
    addressLine: "1206 W 2ND ST",
    lat: "34.058950000000003",
    lng: "-118.25713",
  },
  {
    addressLine: "1216 W 2ND ST",
    lat: "34.058999999999997",
    lng: "-118.25717",
  },
  {
    addressLine: "8513 N CORBIN AVE",
    lat: "34.22504",
    lng: "-118.56247",
  },
  {
    addressLine: "8845 N HAYVENHURST AVE",
    lat: "34.2316",
    lng: "-118.49401",
  },
  {
    addressLine: "8600 N JUMILLA AVE",
    lat: "34.22625",
    lng: "-118.56326",
  },
  {
    addressLine: "8335 N WINNETKA AVE",
    lat: "34.22137",
    lng: "-118.57123",
  },
  {
    addressLine: "22745 W BERDON ST",
    lat: "34.171140000000001",
    lng: "-118.62269000000001",
  },
  {
    addressLine: "1218 W 2ND ST",
    lat: "34.05903",
    lng: "-118.2572",
  },
  {
    addressLine: "8435 N LURLINE AVE",
    lat: "34.22334",
    lng: "-118.58427",
  },
  {
    addressLine: "20826 W COMMUNITY ST",
    lat: "34.22204",
    lng: "-118.58717",
  },
  {
    addressLine: "8401 N CAPISTRANO AVE",
    lat: "34.22289",
    lng: "-118.61726",
  },
  {
    addressLine: "8235 N OWENSMOUTH AVE",
    lat: "34.21866",
    lng: "-118.60175",
  },
  {
    addressLine: "8345 N LURLINE AVE",
    lat: "34.22137",
    lng: "-118.58427",
  },
  {
    addressLine: "19013 W COMMUNITY ST",
    lat: "34.22287",
    lng: "-118.5475",
  },
  {
    addressLine: "8433 N TUNNEY AVE",
    lat: "34.22343",
    lng: "-118.55696",
  },
  {
    addressLine: "8539 N MOORCROFT AVE",
    lat: "34.22607",
    lng: "-118.6123",
  },
  {
    addressLine: "8508 N CASABA AVE",
    lat: "34.22486",
    lng: "-118.57625",
  },
  {
    addressLine: "21838 W ECCLES ST",
    lat: "34.2226",
    lng: "-118.60426",
  },
  {
    addressLine: "22744 W ROSCOE BLVD",
    lat: "34.21922",
    lng: "-118.62266",
  },
  {
    addressLine: "6226 W DE LONGPRE AVE",
    lat: "34.09592",
    lng: "-118.32469",
  },
  {
    addressLine: "22735 W RODAX ST",
    lat: "34.22383",
    lng: "-118.62266",
  },
  {
    addressLine: "8419 N NATALIE LANE",
    lat: "34.22289",
    lng: "-118.63388",
  },
  {
    addressLine: "11384 W LUDDINGTON ST",
    lat: "34.22457",
    lng: "-118.37934",
  },
  {
    addressLine: "20450 W NAPA ST",
    lat: "34.22587",
    lng: "-118.57921",
  },
  {
    addressLine: "23135 W SCHOENBORN ST",
    lat: "34.22092",
    lng: "-118.63123",
  },
  {
    addressLine: "8408 N JASON AVE",
    lat: "34.22251",
    lng: "-118.6362",
  },
  {
    addressLine: "8428 N SAN FERNANDO ROAD",
    lat: "34.22325",
    lng: "-118.3741",
  },
  {
    addressLine: "8204 N VANTAGE AVE",
    lat: "34.21996",
    lng: "-118.39756",
  },
  {
    addressLine: "8308 N SALE AVE",
    lat: "34.21996",
    lng: "-118.61888",
  },
  {
    addressLine: "11238 W DORA ST",
    lat: "34.22242",
    lng: "-118.37617",
  },
  {
    addressLine: "8336 N CASTANO PL",
    lat: "34.22287",
    lng: "-118.39523",
  },
  {
    addressLine: "22355 W BURTON ST",
    lat: "34.21884",
    lng: "-118.61429",
  },
  {
    addressLine: "9502 W VIA VENEZIA null",
    lat: "34.21367",
    lng: "-118.33838",
  },
  {
    addressLine: "11970 W RIALTO ST",
    lat: "34.22466",
    lng: "-118.39367",
  },
  {
    addressLine: "8207 N SHADYGLADE AVE",
    lat: "34.22007",
    lng: "-118.4021",
  },
  {
    addressLine: "6415 W SELMA AVE",
    lat: "34.099879999999999",
    lng: "-118.33006",
  },
  {
    addressLine: "8172 N MATILIJA AVE",
    lat: "34.2196",
    lng: "-118.43455",
  },
  {
    addressLine: "8441 N WEBB AVE",
    lat: "34.22392",
    lng: "-118.39546",
  },
  {
    addressLine: "13656 W COMMUNITY ST",
    lat: "34.22251",
    lng: "-118.43075",
  },
  {
    addressLine: "9426 W VIA PATRICIA null",
    lat: "34.21454",
    lng: "-118.33794",
  },
  {
    addressLine: "8116 N REDBUSH LANE",
    lat: "34.21913",
    lng: "-118.43724",
  },
  {
    addressLine: "8030 N VIA LATINA null",
    lat: "34.21613",
    lng: "-118.33593",
  },
  {
    addressLine: "8506 N RANCHITO AVE",
    lat: "34.22531",
    lng: "-118.43675",
  },
  {
    addressLine: "13914 W ROSCOE BLVD",
    lat: "34.22148",
    lng: "-118.43615",
  },
  {
    addressLine: "22003 W TULSA ST",
    lat: "34.266399999999997",
    lng: "-118.60666999999999",
  },
  {
    addressLine: "8143 N ALCOVE AVE",
    lat: "34.21893",
    lng: "-118.41351",
  },
  {
    addressLine: "12808 W WILLARD ST",
    lat: "34.21904",
    lng: "-118.41238",
  },
  {
    addressLine: "8601 N NORWICH AVE",
    lat: "34.22654",
    lng: "-118.4603",
  },
  {
    addressLine: "13537 W WENTWORTH ST",
    lat: "34.22522",
    lng: "-118.42766",
  },
  {
    addressLine: "16159 W CHASE ST",
    lat: "34.22484",
    lng: "-118.48472",
  },
  {
    addressLine: "8629 N BURNET AVE",
    lat: "34.22739",
    lng: "-118.46343",
  },
  {
    addressLine: "8554 N NORWICH AVE",
    lat: "34.22627",
    lng: "-118.46007",
  },
  {
    addressLine: "16259 W COMMUNITY ST",
    lat: "34.22363",
    lng: "-118.48707",
  },
  {
    addressLine: "8360 N KATHERINE AVE",
    lat: "34.22334",
    lng: "-118.44246",
  },
  {
    addressLine: "1220 W 2ND ST",
    lat: "34.059049999999999",
    lng: "-118.25723000000001",
  },
  {
    addressLine: "8234 N COLUMBUS AVE",
    lat: "34.22081",
    lng: "-118.46498",
  },
  {
    addressLine: "8337 N HASKELL AVE",
    lat: "34.22242",
    lng: "-118.47662",
  },
  {
    addressLine: "6417 W SELMA AVE",
    lat: "34.099879999999999",
    lng: "-118.33008",
  },
  {
    addressLine: "8124 N ST CLAIR AVE",
    lat: "34.21846",
    lng: "-118.39968",
  },
  {
    addressLine: "8066 N ST CLAIR AVE",
    lat: "34.21763",
    lng: "-118.39968",
  },
  {
    addressLine: "17054 W COMMUNITY ST",
    lat: "34.22381",
    lng: "-118.50449",
  },
  {
    addressLine: "8113 N ALLOTT AVE",
    lat: "34.21828",
    lng: "-118.42783",
  },
  {
    addressLine: "8000 N GOSFORD AVE",
    lat: "34.21602",
    lng: "-118.4115",
  },
  {
    addressLine: "8321 N TOBIAS AVE",
    lat: "34.22222",
    lng: "-118.45177",
  },
  {
    addressLine: "13041 W LORNE ST",
    lat: "34.21752",
    lng: "-118.41792",
  },
  {
    addressLine: "7918 N BABCOCK AVE",
    lat: "34.21461",
    lng: "-118.40733",
  },
  {
    addressLine: "8118 N TEESDALE AVE",
    lat: "34.21846",
    lng: "-118.41019",
  },
  {
    addressLine: "13308 W WILLARD ST",
    lat: "34.21743",
    lng: "-118.42314",
  },
  {
    addressLine: "8070 N VENTURA CANYON AVE",
    lat: "34.2179",
    lng: "-118.42858",
  },
  {
    addressLine: "13967 W STROUD ST",
    lat: "34.21181",
    lng: "-118.43754",
  },
  {
    addressLine: "7852 N ALLOTT AVE",
    lat: "34.21369",
    lng: "-118.42751",
  },
  {
    addressLine: "7737 N VAN NUYS BLVD",
    lat: "34.21125",
    lng: "-118.44906",
  },
  {
    addressLine: "7941 N HAZELTINE AVE",
    lat: "34.21519",
    lng: "-118.43916",
  },
  {
    addressLine: "7965 N LLOYD AVE",
    lat: "34.21575",
    lng: "-118.42074",
  },
  {
    addressLine: "14556 W RAYMER ST",
    lat: "34.21172",
    lng: "-118.45058",
  },
  {
    addressLine: "23559 W MARIANO ST",
    lat: "34.168840000000003",
    lng: "-118.64058",
  },
  {
    addressLine: "15226 W MARSON ST",
    lat: "34.21557",
    lng: "-118.4645",
  },
  {
    addressLine: "15802 W ARMINTA ST",
    lat: "34.21378",
    lng: "-118.47704",
  },
  {
    addressLine: "8123 N WISNER AVE",
    lat: "34.21857",
    lng: "-118.46281",
  },
  {
    addressLine: "13918 W LA MAIDA ST",
    lat: "34.158340000000003",
    lng: "-118.43588",
  },
  {
    addressLine: "17112 W STRATHERN ST",
    lat: "34.21557",
    lng: "-118.5061",
  },
  {
    addressLine: "7837 N LOUISE AVE",
    lat: "34.21322",
    lng: "-118.51004",
  },
  {
    addressLine: "8149 N ANDASOL AVE",
    lat: "34.21848",
    lng: "-118.51107",
  },
  {
    addressLine: "7947 N LOUISE AVE",
    lat: "34.21528",
    lng: "-118.51004",
  },
  {
    addressLine: "6050 N CASE AVE",
    lat: "34.180819999999997",
    lng: "-118.37211000000001",
  },
  {
    addressLine: "11670 W TERRA BELLA ST",
    lat: "34.281350000000003",
    lng: "-118.3865",
  },
  {
    addressLine: "7900 N DRISCOLL AVE",
    lat: "34.21407",
    lng: "-118.50901",
  },
  {
    addressLine: "6619 N BEVIS AVE",
    lat: "34.191270000000003",
    lng: "-118.45617",
  },
  {
    addressLine: "7723 N BALBOA BLVD",
    lat: "34.210999999999999",
    lng: "-118.50152",
  },
  {
    addressLine: "8514 N DE SOTO AVE",
    lat: "34.22495",
    lng: "-118.58832",
  },
  {
    addressLine: "19545 W ARMINTA ST",
    lat: "34.213569999999997",
    lng: "-118.55971",
  },
  {
    addressLine: "7715 N MELVIN AVE",
    lat: "34.21049",
    lng: "-118.56047",
  },
  {
    addressLine: "7909 S CHASE AVE",
    lat: "33.968170000000001",
    lng: "-118.41224",
  },
  {
    addressLine: "7840 N WILBUR AVE",
    lat: "34.21313",
    lng: "-118.54463",
  },
  {
    addressLine: "8123 N PASO ROBLES AVE",
    lat: "34.21808",
    lng: "-118.50274",
  },
  {
    addressLine: "18808 W ARMINTA ST",
    lat: "34.21367",
    lng: "-118.54307",
  },
  {
    addressLine: "7807 N RHEA AVE",
    lat: "34.21228",
    lng: "-118.5416",
  },
  {
    addressLine: "17958 W PARTHENIA ST",
    lat: "34.228099999999998",
    lng: "-118.52502",
  },
  {
    addressLine: "7660 N PENFIELD AVE",
    lat: "34.21031",
    lng: "-118.56872",
  },
  {
    addressLine: "6338 N MONTEREY ROAD",
    lat: "34.108750000000001",
    lng: "-118.18046",
  },
  {
    addressLine: "19850 W BUTTONWILLOW DR",
    lat: "34.21152",
    lng: "-118.56604",
  },
  {
    addressLine: "3725 N BEVERLY RIDGE DR",
    lat: "34.138530000000003",
    lng: "-118.44734",
  },
  {
    addressLine: "7916 N BOTHWELL ROAD",
    lat: "34.21434",
    lng: "-118.56111",
  },
  {
    addressLine: "7765 N YOLANDA AVE",
    lat: "34.21199",
    lng: "-118.54056",
  },
  {
    addressLine: "19817 W BUTTONWILLOW DR",
    lat: "34.21172",
    lng: "-118.56482",
  },
  {
    addressLine: "10971 W ROSCOE BLVD",
    lat: "34.22157",
    lng: "-118.36954",
  },
  {
    addressLine: "19820 W INGOMAR ST",
    lat: "34.21219",
    lng: "-118.56506",
  },
  {
    addressLine: "14883 W BLEDSOE ST",
    lat: "34.312849999999997",
    lng: "-118.45715",
  },
  {
    addressLine: "8008 N DE GARMO AVE",
    lat: "34.2166",
    lng: "-118.35517",
  },
  {
    addressLine: "20400 W STRATHERN ST",
    lat: "34.21546",
    lng: "-118.57719",
  },
  {
    addressLine: "10346 W STRATHERN ST",
    lat: "34.21508",
    lng: "-118.3569",
  },
  {
    addressLine: "7719 N SHADYCOVE AVE",
    lat: "34.21123",
    lng: "-118.34479",
  },
  {
    addressLine: "10321 W STRATHERN ST",
    lat: "34.21528",
    lng: "-118.35605",
  },
  {
    addressLine: "8160 N POTTER AVE",
    lat: "34.21931",
    lng: "-118.40866",
  },
  {
    addressLine: "7727 N KLUMP AVE",
    lat: "34.21105",
    lng: "-118.3759",
  },
  {
    addressLine: "7919 N CRANER AVE",
    lat: "34.21443",
    lng: "-118.36937",
  },
  {
    addressLine: "7727 N ELMER AVE",
    lat: "34.21105",
    lng: "-118.37698",
  },
  {
    addressLine: "8024 N RHODES AVE",
    lat: "34.21649",
    lng: "-118.40294",
  },
  {
    addressLine: "7921 N COWPER AVE",
    lat: "34.21396",
    lng: "-118.64761",
  },
  {
    addressLine: "23729 W BALTAR ST",
    lat: "34.21584",
    lng: "-118.64462",
  },
  {
    addressLine: "7433 N VINELAND AVE",
    lat: "34.2057",
    lng: "-118.37052",
  },
  {
    addressLine: "7614 N SAN FERNANDO ROAD",
    lat: "34.21002",
    lng: "-118.35467",
  },
  {
    addressLine: "11136 W RUNNYMEDE ST",
    lat: "34.20561",
    lng: "-118.37376",
  },
  {
    addressLine: "7626 N DELIA AVE",
    lat: "34.20946",
    lng: "-118.35061",
  },
  {
    addressLine: "7616 N CLAYBECK AVE",
    lat: "34.20919",
    lng: "-118.34952",
  },
  {
    addressLine: "7406 N VINELAND AVE",
    lat: "34.20505",
    lng: "-118.37012",
  },
  {
    addressLine: "11830 W WYANDOTTE ST",
    lat: "34.2029",
    lng: "-118.39148",
  },
  {
    addressLine: "2016 E PENNSYLVANIA AVE",
    lat: "34.045839999999998",
    lng: "-118.21393",
  },
  {
    addressLine: "11051 W COHASSET ST",
    lat: "34.20675",
    lng: "-118.3721",
  },
  {
    addressLine: "11826 W WYANDOTTE ST",
    lat: "34.2029",
    lng: "-118.39133",
  },
  {
    addressLine: "11111 W LULL ST",
    lat: "34.20946",
    lng: "-118.37295",
  },
  {
    addressLine: "11135 W LULL ST",
    lat: "34.20946",
    lng: "-118.37378",
  },
  {
    addressLine: "7653 N KRAFT AVE",
    lat: "34.21002",
    lng: "-118.38028",
  },
  {
    addressLine: "7625 N BELLAIRE AVE",
    lat: "34.20919",
    lng: "-118.41033",
  },
  {
    addressLine: "7641 N RADFORD AVE",
    lat: "34.20966",
    lng: "-118.39228",
  },
  {
    addressLine: "7522 N FARMDALE AVE",
    lat: "34.20729",
    lng: "-118.3811",
  },
  {
    addressLine: "12730 W SATICOY ST",
    lat: "34.20561",
    lng: "-118.41006",
  },
  {
    addressLine: "7321 N WOODMAN AVE",
    lat: "34.20373",
    lng: "-118.43146",
  },
  {
    addressLine: "2123 S COLBY AVE",
    lat: "34.036709999999999",
    lng: "-118.44586",
  },
  {
    addressLine: "7460 N VARNA AVE",
    lat: "34.20637",
    lng: "-118.42455",
  },
  {
    addressLine: "13635 W RUNNYMEDE ST",
    lat: "34.20626",
    lng: "-118.43015",
  },
  {
    addressLine: "14855 W LULL ST",
    lat: "34.20946",
    lng: "-118.45699",
  },
  {
    addressLine: "14837 W COHASSET ST",
    lat: "34.20675",
    lng: "-118.45667",
  },
  {
    addressLine: "14851 W COHASSET ST",
    lat: "34.20675",
    lng: "-118.45699",
  },
  {
    addressLine: "15338 W WYANDOTTE ST",
    lat: "34.2029",
    lng: "-118.46762",
  },
  {
    addressLine: "15539 W COHASSET ST",
    lat: "34.20673",
    lng: "-118.47189",
  },
  {
    addressLine: "14830 W LULL ST",
    lat: "34.20926",
    lng: "-118.45618",
  },
  {
    addressLine: "14962 W WYANDOTTE ST",
    lat: "34.2029",
    lng: "-118.45948",
  },
  {
    addressLine: "7706 N KESTER AVE",
    lat: "34.2104",
    lng: "-118.45733",
  },
  {
    addressLine: "14560 W RUNNYMEDE ST",
    lat: "34.2057",
    lng: "-118.4509",
  },
  {
    addressLine: "16117 W COHASSET ST",
    lat: "34.20673",
    lng: "-118.48425",
  },
  {
    addressLine: "16142 W WYANDOTTE ST",
    lat: "34.20288",
    lng: "-118.48514",
  },
  {
    addressLine: "17202 W RAYMER ST",
    lat: "34.224110000000003",
    lng: "-118.50717",
  },
  {
    addressLine: "16655 W KELSLOAN ST",
    lat: "34.20561",
    lng: "-118.49647",
  },
  {
    addressLine: "6224 W DE LONGPRE AVE",
    lat: "34.09592",
    lng: "-118.3246",
  },
  {
    addressLine: "7447 N ZOMBAR AVE",
    lat: "34.20608",
    lng: "-118.46741",
  },
  {
    addressLine: "7412 N BALBOA BLVD",
    lat: "34.20514",
    lng: "-118.50093",
  },
  {
    addressLine: "7739 N WOODLEY AVE",
    lat: "34.21163",
    lng: "-118.48387",
  },
  {
    addressLine: "7519 N COLLETT AVE",
    lat: "34.20722",
    lng: "-118.48264",
  },
  {
    addressLine: "7501 N COLLETT AVE",
    lat: "34.20684",
    lng: "-118.48264",
  },
  {
    addressLine: "8020 N IRONDALE AVE",
    lat: "34.21602",
    lng: "-118.58449",
  },
  {
    addressLine: "7524 N WISH AVE",
    lat: "34.20729",
    lng: "-118.50666",
  },
  {
    addressLine: "6405 W SELMA AVE",
    lat: "34.09986",
    lng: "-118.32988",
  },
  {
    addressLine: "20038 W LANARK ST",
    lat: "34.2179",
    lng: "-118.57019",
  },
  {
    addressLine: "9550 N VIA STEFANO null",
    lat: "34.21454",
    lng: "-118.33989",
  },
  {
    addressLine: "7949 N MASON AVE",
    lat: "34.21508",
    lng: "-118.57993",
  },
  {
    addressLine: "14270 W MINNEHAHA ST",
    lat: "34.26238",
    lng: "-118.44475",
  },
  {
    addressLine: "8111 N FAIRCHILD AVE",
    lat: "34.21752",
    lng: "-118.58784",
  },
  {
    addressLine: "20442 W STRATHERN ST",
    lat: "34.21546",
    lng: "-118.57829",
  },
  {
    addressLine: "7757 N GLASSPORT AVE",
    lat: "34.21161",
    lng: "-118.59402",
  },
  {
    addressLine: "21315 W DEERING CT",
    lat: "34.21584",
    lng: "-118.59629",
  },
  {
    addressLine: "7742 N ETON AVE",
    lat: "34.21123",
    lng: "-118.5955",
  },
  {
    addressLine: "7940 N JORDAN AVE",
    lat: "34.2149",
    lng: "-118.60287",
  },
  {
    addressLine: "7800 N DE SOTO AVE",
    lat: "34.21217",
    lng: "-118.58829",
  },
  {
    addressLine: "8108 N SEDAN AVE",
    lat: "34.21743",
    lng: "-118.62985",
  },
  {
    addressLine: "7729 N VARIEL AVE",
    lat: "34.21078",
    lng: "-118.59302",
  },
  {
    addressLine: "22738 W INGOMAR ST",
    lat: "34.2117",
    lng: "-118.62293",
  },
  {
    addressLine: "22855 W BALTAR ST",
    lat: "34.2164",
    lng: "-118.62549",
  },
  {
    addressLine: "7835 N VASSAR AVE",
    lat: "34.21284",
    lng: "-118.60503",
  },
  {
    addressLine: "8208 N KENTLAND AVE",
    lat: "34.21808",
    lng: "-118.61787",
  },
  {
    addressLine: "23130 W JONATHAN ST",
    lat: "34.21801",
    lng: "-118.63056",
  },
  {
    addressLine: "8054 N JASON AVE",
    lat: "34.21696",
    lng: "-118.63502",
  },
  {
    addressLine: "7843 N LENA AVE",
    lat: "34.21313",
    lng: "-118.62545",
  },
  {
    addressLine: "8030 N MOORCROFT AVE",
    lat: "34.21631",
    lng: "-118.61131",
  },
  {
    addressLine: "7901 N FALLBROOK AVE",
    lat: "34.21378",
    lng: "-118.62371",
  },
  {
    addressLine: "7428 N COZYCROFT AVE",
    lat: "34.20552",
    lng: "-118.58179",
  },
  {
    addressLine: "6226 W DE LONGPRE AVE",
    lat: "34.09592",
    lng: "-118.32469",
  },
  {
    addressLine: "20645 W LEADWELL ST",
    lat: "34.20402",
    lng: "-118.58345",
  },
  {
    addressLine: "20410 W RUNNYMEDE ST",
    lat: "34.20579",
    lng: "-118.57777",
  },
  {
    addressLine: "19848 W LULL ST",
    lat: "34.20908",
    lng: "-118.56603",
  },
  {
    addressLine: "7421 N ASMAN AVE",
    lat: "34.20534",
    lng: "-118.61704",
  },
  {
    addressLine: "22915 W LEADWELL ST",
    lat: "34.20355",
    lng: "-118.6262",
  },
  {
    addressLine: "7528 N REMMET AVE",
    lat: "34.20722",
    lng: "-118.60016",
  },
  {
    addressLine: "7543 N OWENSMOUTH AVE",
    lat: "34.20767",
    lng: "-118.60175",
  },
  {
    addressLine: "7317 N MAYNARD AVE",
    lat: "34.20326",
    lng: "-118.62197",
  },
  {
    addressLine: "1536 W 92ND ST",
    lat: "33.952539999999999",
    lng: "-118.3038",
  },
  {
    addressLine: "22600 W COVELLO ST",
    lat: "34.20722",
    lng: "-118.61973",
  },
  {
    addressLine: "7542 N SHOUP AVE",
    lat: "34.20767",
    lng: "-118.61448",
  },
  {
    addressLine: "7458 N VASSAR AVE",
    lat: "34.20626",
    lng: "-118.60424",
  },
  {
    addressLine: "7631 N ALABAMA AVE",
    lat: "34.20928",
    lng: "-118.5996",
  },
  {
    addressLine: "23238 W VALERIO ST",
    lat: "34.20438",
    lng: "-118.6341",
  },
  {
    addressLine: "21321 W BLACKHAWK ST",
    lat: "34.258920000000003",
    lng: "-118.59599",
  },
  {
    addressLine: "23764 W DEL CERRO CIR",
    lat: "34.20664",
    lng: "-118.64377",
  },
  {
    addressLine: "23335 W VALERIO ST",
    lat: "34.20514",
    lng: "-118.63775",
  },
  {
    addressLine: "11485 W VANOWEN ST",
    lat: "34.19408",
    lng: "-118.38175",
  },
  {
    addressLine: "6800 N LANKERSHIM BLVD",
    lat: "34.19426",
    lng: "-118.38758",
  },
  {
    addressLine: "7551 N BOBBYBOYAR AVE",
    lat: "34.2074",
    lng: "-118.63305",
  },
  {
    addressLine: "11639 W VANOWEN ST",
    lat: "34.19408",
    lng: "-118.38579",
  },
  {
    addressLine: "7600 N CARMENITA LANE",
    lat: "34.20975",
    lng: "-118.65566",
  },
  {
    addressLine: "11813 W VANOWEN ST",
    lat: "34.19408",
    lng: "-118.39048",
  },
  {
    addressLine: "1310 N ISABEL ST",
    lat: "34.09778",
    lng: "-118.22783",
  },
  {
    addressLine: "6863 N MORELLA AVE",
    lat: "34.19567",
    lng: "-118.39023",
  },
  {
    addressLine: "6837 N FARMDALE AVE",
    lat: "34.195",
    lng: "-118.38137",
  },
  {
    addressLine: "11644 W HIGGINS ST",
    lat: "34.19502",
    lng: "-118.38579",
  },
  {
    addressLine: "6907 N TUJUNGA AVE",
    lat: "34.19632",
    lng: "-118.37921",
  },
  {
    addressLine: "5939 W CARLTON WAY",
    lat: "34.100569999999998",
    lng: "-118.31923999999999",
  },
  {
    addressLine: "11319 W VANOWEN ST",
    lat: "34.19408",
    lng: "-118.37751",
  },
  {
    addressLine: "6873 N FARMDALE AVE",
    lat: "34.19603",
    lng: "-118.38136",
  },
  {
    addressLine: "12019 W VANOWEN ST",
    lat: "34.19408",
    lng: "-118.39506",
  },
  {
    addressLine: "6263 N VINELAND AVE",
    lat: "34.184739999999998",
    lng: "-118.37062",
  },
  {
    addressLine: "6928 null RADFORD AVE",
    lat: "34.19659",
    lng: "-118.39201",
  },
  {
    addressLine: "6872 N BECK AVE",
    lat: "34.19605",
    lng: "-118.38327",
  },
  {
    addressLine: "6912 N BELLAIRE AVE",
    lat: "34.19603",
    lng: "-118.40931",
  },
  {
    addressLine: "4016 W 59TH PL",
    lat: "33.986040000000003",
    lng: "-118.3446",
  },
  {
    addressLine: "13500 W BASSETT ST",
    lat: "34.19567",
    lng: "-118.4272",
  },
  {
    addressLine: "13615 W HARTLAND ST",
    lat: "34.195",
    lng: "-118.42948",
  },
  {
    addressLine: "13629 W HARTLAND ST",
    lat: "34.195",
    lng: "-118.42984",
  },
  {
    addressLine: "11918 W HART ST",
    lat: "34.19746",
    lng: "-118.3929",
  },
  {
    addressLine: "7024 N VAN NOORD AVE",
    lat: "34.1982",
    lng: "-118.4148",
  },
  {
    addressLine: "12739 W VOSE ST",
    lat: "34.19858",
    lng: "-118.41069",
  },
  {
    addressLine: "14149 W VANOWEN ST",
    lat: "34.19408",
    lng: "-118.44171",
  },
  {
    addressLine: "10642 N STANWIN AVE",
    lat: "34.263219999999997",
    lng: "-118.44970000000001",
  },
  {
    addressLine: "17604 W CAPRINO PL",
    lat: "34.20534",
    lng: "-118.51653",
  },
  {
    addressLine: "2924 S BENTLEY AVE",
    lat: "34.028669999999998",
    lng: "-118.42783",
  },
  {
    addressLine: "18343 W SAN JOSE ST",
    lat: "34.261020000000002",
    lng: "-118.53321",
  },
  {
    addressLine: "17613 W COHASSET ST",
    lat: "34.20693",
    lng: "-118.51688",
  },
  {
    addressLine: "7126 N PARK MANOR AVE",
    lat: "34.19997",
    lng: "-118.42545",
  },
  {
    addressLine: "7357 N CALDUS AVE",
    lat: "34.20467",
    lng: "-118.51544",
  },
  {
    addressLine: "311 S SWALL DR",
    lat: "34.073239999999998",
    lng: "-118.38608000000001",
  },
  {
    addressLine: "7259 N CAPPS AVE",
    lat: "34.2029",
    lng: "-118.53981",
  },
  {
    addressLine: "7716 N KENTLAND AVE",
    lat: "34.21067",
    lng: "-118.61747",
  },
  {
    addressLine: "7446 N VANALDEN AVE",
    lat: "34.20617",
    lng: "-118.54902",
  },
  {
    addressLine: "19543 W LEADWELL ST",
    lat: "34.20364",
    lng: "-118.55936",
  },
  {
    addressLine: "19126 W LULL ST",
    lat: "34.20919",
    lng: "-118.55029",
  },
  {
    addressLine: "19061 W SATICOY ST",
    lat: "34.20852",
    lng: "-118.54876",
  },
  {
    addressLine: "7505 N WILBUR AVE",
    lat: "34.20684",
    lng: "-118.54496",
  },
  {
    addressLine: "18954 W WYANDOTTE ST",
    lat: "34.2029",
    lng: "-118.54679",
  },
  {
    addressLine: "7459 N VANALDEN AVE",
    lat: "34.20635",
    lng: "-118.54929",
  },
  {
    addressLine: "7264 N HATILLO AVE",
    lat: "34.20317",
    lng: "-118.56513",
  },
  {
    addressLine: "7701 N JUSTIN CT",
    lat: "34.2102",
    lng: "-118.63166",
  },
  {
    addressLine: "18754 W COHASSET ST",
    lat: "34.20646",
    lng: "-118.54241",
  },
  {
    addressLine: "19355 W VANOWEN ST",
    lat: "34.19397",
    lng: "-118.55546",
  },
  {
    addressLine: "19501 W VANOWEN ST",
    lat: "34.19397",
    lng: "-118.55808",
  },
  {
    addressLine: "2968 N GLENVIEW AVE",
    lat: "34.107610000000001",
    lng: "-118.249",
  },
  {
    addressLine: "6867 N SYLVIA AVE",
    lat: "34.19567",
    lng: "-118.55251",
  },
  {
    addressLine: "18622 W HART ST",
    lat: "34.19755",
    lng: "-118.5394",
  },
  {
    addressLine: "6918 N JUMILLA AVE",
    lat: "34.19614",
    lng: "-118.56318",
  },
  {
    addressLine: "17646 W CANTLAY ST",
    lat: "34.20205",
    lng: "-118.51826",
  },
  {
    addressLine: "19717 W SHERMAN WAY",
    lat: "34.20129",
    lng: "-118.56289",
  },
  {
    addressLine: "19445 W VANOWEN ST",
    lat: "34.19397",
    lng: "-118.55708",
  },
  {
    addressLine: "6839 N BELMAR AVE",
    lat: "34.195",
    lng: "-118.55883",
  },
  {
    addressLine: "18120 W SHERMAN WAY",
    lat: "34.20091",
    lng: "-118.5279",
  },
  {
    addressLine: "17428 W CANTLAY ST",
    lat: "34.20196",
    lng: "-118.51282",
  },
  {
    addressLine: "5939 W CARLTON WAY",
    lat: "34.100569999999998",
    lng: "-118.31923999999999",
  },
  {
    addressLine: "20448 W HARTLAND ST",
    lat: "34.19482",
    lng: "-118.57889",
  },
  {
    addressLine: "7219 N OSO AVE",
    lat: "34.20196",
    lng: "-118.57556",
  },
  {
    addressLine: "19007 W VOSE ST",
    lat: "34.19849",
    lng: "-118.54723",
  },
  {
    addressLine: "7041 N GEYSER AVE",
    lat: "34.19876",
    lng: "-118.54272",
  },
  {
    addressLine: "7048 N RHEA AVE",
    lat: "34.19905",
    lng: "-118.54137",
  },
  {
    addressLine: "6952 N TUNNEY AVE",
    lat: "34.19706",
    lng: "-118.55622",
  },
  {
    addressLine: "7100 N BECKFORD AVE",
    lat: "34.19941",
    lng: "-118.55116",
  },
  {
    addressLine: "7033 N QUARTZ AVE",
    lat: "34.19838",
    lng: "-118.56455",
  },
  {
    addressLine: "21301 W SHERMAN WAY",
    lat: "34.2012",
    lng: "-118.59569",
  },
  {
    addressLine: "7025 N TUNNEY AVE",
    lat: "34.1982",
    lng: "-118.55712",
  },
  {
    addressLine: "22509 W BASSETT ST",
    lat: "34.19547",
    lng: "-118.61707",
  },
  {
    addressLine: "7019 N MAYNARD AVE",
    lat: "34.19811",
    lng: "-118.62255",
  },
  {
    addressLine: "6960 N SEDAN AVE",
    lat: "34.19632",
    lng: "-118.6293",
  },
  {
    addressLine: "6958 N ROYER AVE",
    lat: "34.19623",
    lng: "-118.62781",
  },
  {
    addressLine: "23410 W BALMORAL LANE",
    lat: "34.19885",
    lng: "-118.63627",
  },
  {
    addressLine: "7056 N LURLINE AVE",
    lat: "34.19894",
    lng: "-118.58349",
  },
  {
    addressLine: "22936 W VOSE ST",
    lat: "34.19782",
    lng: "-118.62685",
  },
  {
    addressLine: "7121 N CANOGA AVE",
    lat: "34.19979",
    lng: "-118.59788",
  },
  {
    addressLine: "6955 N DANNYBOYAR AVE",
    lat: "34.19614",
    lng: "-118.63059",
  },
  {
    addressLine: "7226 N DENNIS LANE",
    lat: "34.20129",
    lng: "-118.63996",
  },
  {
    addressLine: "726 N KINGSLEY DR",
    lat: "34.084299999999999",
    lng: "-118.30264",
  },
  {
    addressLine: "22327 W MARLIN PL",
    lat: "34.19699",
    lng: "-118.61333",
  },
  {
    addressLine: "7101 N STANSBURY AVE",
    lat: "34.19961",
    lng: "-118.44121",
  },
  {
    addressLine: "14642 W HART ST",
    lat: "34.19744",
    lng: "-118.4524",
  },
  {
    addressLine: "14925 W VANOWEN ST",
    lat: "34.19406",
    lng: "-118.45858",
  },
  {
    addressLine: "7110 N LENNOX AVE",
    lat: "34.19979",
    lng: "-118.44526",
  },
  {
    addressLine: "7101 N COSTELLO AVE",
    lat: "34.1995",
    lng: "-118.43794",
  },
  {
    addressLine: "7032 N WILLIS AVE",
    lat: "34.19847",
    lng: "-118.45506",
  },
  {
    addressLine: "14150 W ENADIA WAY",
    lat: "34.20017",
    lng: "-118.44185",
  },
  {
    addressLine: "13537 W BASSETT ST",
    lat: "34.19594",
    lng: "-118.42805",
  },
  {
    addressLine: "15353 W VANOWEN ST",
    lat: "34.19406",
    lng: "-118.46813",
  },
  {
    addressLine: "15123 W VOSE ST",
    lat: "34.19858",
    lng: "-118.4627",
  },
  {
    addressLine: "16053 W HART ST",
    lat: "34.19764",
    lng: "-118.483",
  },
  {
    addressLine: "672 E 45TH ST",
    lat: "34.00235",
    lng: "-118.26382",
  },
  {
    addressLine: "7237 N HASKELL AVE",
    lat: "34.20232",
    lng: "-118.47505",
  },
  {
    addressLine: "16723 W VANOWEN ST",
    lat: "34.19406",
    lng: "-118.49768",
  },
  {
    addressLine: "7112 N WILLIS AVE",
    lat: "34.19961",
    lng: "-118.45506",
  },
  {
    addressLine: "17107 W VOSE ST",
    lat: "34.19858",
    lng: "-118.50581",
  },
  {
    addressLine: "16755 W VANOWEN ST",
    lat: "34.19406",
    lng: "-118.4983",
  },
  {
    addressLine: "7000 N LASAINE AVE",
    lat: "34.19773",
    lng: "-118.51085",
  },
  {
    addressLine: "6822 N FORBES AVE",
    lat: "34.19453",
    lng: "-118.49879",
  },
  {
    addressLine: "537 N HAWAIIAN AVE",
    lat: "33.7759",
    lng: "-118.27668",
  },
  {
    addressLine: "14941 W SHERMAN WAY",
    lat: "34.20147",
    lng: "-118.45891",
  },
  {
    addressLine: "7043 N ALDEA AVE",
    lat: "34.19876",
    lng: "-118.50891",
  },
  {
    addressLine: "14383 W FOOTHILL BLVD",
    lat: "34.320790000000002",
    lng: "-118.44722",
  },
  {
    addressLine: "6826 N LOUISE AVE",
    lat: "34.19482",
    lng: "-118.50968",
  },
  {
    addressLine: "17352 W KINGSBURY ST",
    lat: "34.263449999999999",
    lng: "-118.51281",
  },
  {
    addressLine: "10586 W PUTNEY ROAD",
    lat: "34.039070000000002",
    lng: "-118.41933",
  },
  {
    addressLine: "7050 N TEXHOMA AVE",
    lat: "34.19896",
    lng: "-118.51514",
  },
  {
    addressLine: "14737 W SHERMAN WAY",
    lat: "34.2014",
    lng: "-118.45421",
  },
  {
    addressLine: "17354 W CANTLAY ST",
    lat: "34.20196",
    lng: "-118.51167",
  },
  {
    addressLine: "951 S GRANVILLE AVE",
    lat: "34.05097",
    lng: "-118.46587",
  },
  {
    addressLine: "2926 S BENTLEY AVE",
    lat: "34.028599999999997",
    lng: "-118.42778",
  },
  {
    addressLine: "16137 W SHERMAN WAY",
    lat: "34.20138",
    lng: "-118.48499",
  },
  {
    addressLine: "17410 W SHERMAN WAY",
    lat: "34.20093",
    lng: "-118.51226",
  },
  {
    addressLine: "6912 N FORBES AVE",
    lat: "34.19623",
    lng: "-118.4988",
  },
  {
    addressLine: "13627 W VICTORY BLVD",
    lat: "34.18683",
    lng: "-118.43002",
  },
  {
    addressLine: "13527 W VICTORY BLVD",
    lat: "34.18683",
    lng: "-118.42782",
  },
  {
    addressLine: "12906 W VICTORY BLVD",
    lat: "34.18647",
    lng: "-118.41422",
  },
  {
    addressLine: "6664 N AMPERE AVE",
    lat: "34.19153",
    lng: "-118.41861",
  },
  {
    addressLine: "13627 W VICTORY BLVD",
    lat: "34.18683",
    lng: "-118.43002",
  },
  {
    addressLine: "6611 N MORSE AVE",
    lat: "34.19059",
    lng: "-118.41655",
  },
  {
    addressLine: "13441 W VICTORY BLVD",
    lat: "34.18683",
    lng: "-118.42652",
  },
  {
    addressLine: "6609 N TEESDALE AVE",
    lat: "34.19059",
    lng: "-118.40826",
  },
  {
    addressLine: "6349 N COLDWATER CANYON AVE",
    lat: "34.18609",
    lng: "-118.41398",
  },
  {
    addressLine: "6367 N WOODMAN AVE",
    lat: "34.18629",
    lng: "-118.43145",
  },
  {
    addressLine: "2225 S BURNSIDE AVE",
    lat: "34.036879999999996",
    lng: "-118.35894",
  },
  {
    addressLine: "14203 W KITTRIDGE ST",
    lat: "34.19079",
    lng: "-118.4422",
  },
  {
    addressLine: "14249 W VICTORY BLVD",
    lat: "34.18683",
    lng: "-118.44389",
  },
  {
    addressLine: "14237 W VICTORY BLVD",
    lat: "34.18683",
    lng: "-118.44345",
  },
  {
    addressLine: "7204 N CANBY AVE",
    lat: "34.20138",
    lng: "-118.53462",
  },
  {
    addressLine: "18313 W SHERMAN WAY",
    lat: "34.20129",
    lng: "-118.53223",
  },
  {
    addressLine: "14237 W VICTORY BLVD",
    lat: "34.18683",
    lng: "-118.44345",
  },
  {
    addressLine: "18507 W SHERMAN WAY",
    lat: "34.20129",
    lng: "-118.53634",
  },
  {
    addressLine: "14135 W KITTRIDGE ST",
    lat: "34.19079",
    lng: "-118.44144",
  },
  {
    addressLine: "14046 W VANOWEN ST",
    lat: "34.19379",
    lng: "-118.43915",
  },
  {
    addressLine: "14515 W FRIAR ST",
    lat: "34.18582",
    lng: "-118.44933",
  },
  {
    addressLine: "14122 W HAMLIN ST",
    lat: "34.18853",
    lng: "-118.44087",
  },
  {
    addressLine: "14222 W HAMLIN ST",
    lat: "34.18853",
    lng: "-118.44306",
  },
  {
    addressLine: "13823 W ARCHWOOD ST",
    lat: "34.19314",
    lng: "-118.43438",
  },
  {
    addressLine: "13988 W VANOWEN ST",
    lat: "34.19379",
    lng: "-118.43763",
  },
  {
    addressLine: "14060 W VANOWEN ST",
    lat: "34.19379",
    lng: "-118.43944",
  },
  {
    addressLine: "14655 W HAYNES ST",
    lat: "34.18985",
    lng: "-118.45273",
  },
  {
    addressLine: "6766 N TYRONE AVE",
    lat: "34.1935",
    lng: "-118.44422",
  },
  {
    addressLine: "14062 W VANOWEN ST",
    lat: "34.19379",
    lng: "-118.43947",
  },
  {
    addressLine: "14619 W HAYNES ST",
    lat: "34.18985",
    lng: "-118.45156",
  },
  {
    addressLine: "14348 W GILMORE ST",
    lat: "34.1875",
    lng: "-118.44601",
  },
  {
    addressLine: "14042 W VANOWEN ST",
    lat: "34.19379",
    lng: "-118.43908",
  },
  {
    addressLine: "14154 W VANOWEN ST",
    lat: "34.19379",
    lng: "-118.44197",
  },
  {
    addressLine: "13988 W VANOWEN ST",
    lat: "34.19379",
    lng: "-118.43763",
  },
  {
    addressLine: "13855 W ARCHWOOD ST",
    lat: "34.19314",
    lng: "-118.4353",
  },
  {
    addressLine: "6540 N DENSMORE AVE",
    lat: "34.18965",
    lng: "-118.47704",
  },
  {
    addressLine: "6412 N BECK AVE",
    lat: "34.187139999999999",
    lng: "-118.38328",
  },
  {
    addressLine: "6433 N GLORIA AVE",
    lat: "34.18759",
    lng: "-118.4795",
  },
  {
    addressLine: "15056 W VANOWEN ST",
    lat: "34.1937",
    lng: "-118.46171",
  },
  {
    addressLine: "15950 W VANOWEN ST",
    lat: "34.1937",
    lng: "-118.48119",
  },
  {
    addressLine: "6640 N DENSMORE AVE",
    lat: "34.19144",
    lng: "-118.47703",
  },
  {
    addressLine: "6706 N WOODLEY AVE",
    lat: "34.19218",
    lng: "-118.4834",
  },
  {
    addressLine: "6420 N BALBOA BLVD",
    lat: "34.18759",
    lng: "-118.50091",
  },
  {
    addressLine: "6705 N GERALD AVE",
    lat: "34.19209",
    lng: "-118.49355",
  },
  {
    addressLine: "6724 N WHITAKER AVE",
    lat: "34.19256",
    lng: "-118.49776",
  },
  {
    addressLine: "6706 N WHITAKER AVE",
    lat: "34.19211",
    lng: "-118.4978",
  },
  {
    addressLine: "6449 N GRAVES AVE",
    lat: "34.18826",
    lng: "-118.50896",
  },
  {
    addressLine: "6635 N HASKELL AVE",
    lat: "34.19117",
    lng: "-118.4752",
  },
  {
    addressLine: "22148 W SHERMAN WAY",
    lat: "34.20073",
    lng: "-118.60974",
  },
  {
    addressLine: "11541 W KELOWNA ST",
    lat: "34.277410000000003",
    lng: "-118.38338",
  },
  {
    addressLine: "6624 N MCLENNAN AVE",
    lat: "34.19106",
    lng: "-118.4999",
  },
  {
    addressLine: "23150 W CALIFA ST",
    lat: "34.177199999999999",
    lng: "-118.63160999999999",
  },
  {
    addressLine: "6453 N FORBES AVE",
    lat: "34.18835",
    lng: "-118.49925",
  },
  {
    addressLine: "16430 W VANOWEN ST",
    lat: "34.1937",
    lng: "-118.49137",
  },
  {
    addressLine: "19236 W LUDLOW ST",
    lat: "34.270519999999998",
    lng: "-118.55229",
  },
  {
    addressLine: "6351 N CREBS AVE",
    lat: "34.18627",
    lng: "-118.54393",
  },
  {
    addressLine: "325 E 62ND ST",
    lat: "33.983460000000001",
    lng: "-118.26861",
  },
  {
    addressLine: "19344 W KITTRIDGE ST",
    lat: "34.1905",
    lng: "-118.55508",
  },
  {
    addressLine: "6740 N WILBUR AVE",
    lat: "34.19314",
    lng: "-118.54458",
  },
  {
    addressLine: "18806 N LEMAY ST",
    lat: "34.19153",
    lng: "-118.54285",
  },
  {
    addressLine: "6333 N KRAFT AVE",
    lat: "34.18591",
    lng: "-118.38027",
  },
  {
    addressLine: "6640 N SIMPSON AVE",
    lat: "34.19164",
    lng: "-118.3888",
  },
  {
    addressLine: "24648 W GARDENSTONE LANE",
    lat: "34.20167",
    lng: "-118.66107",
  },
  {
    addressLine: "14971 W SHERMAN WAY",
    lat: "34.20147",
    lng: "-118.45947",
  },
  {
    addressLine: "6445 N CLEON AVE",
    lat: "34.18797",
    lng: "-118.36825",
  },
  {
    addressLine: "7010 N DEVERON RIDGE ROAD",
    lat: "34.19773",
    lng: "-118.64743",
  },
  {
    addressLine: "16059 W VANOWEN ST",
    lat: "34.19406",
    lng: "-118.48321",
  },
  {
    addressLine: "11112 W ARCHWOOD ST",
    lat: "34.19171",
    lng: "-118.37297",
  },
  {
    addressLine: "6633 N VINELAND AVE",
    lat: "34.19126",
    lng: "-118.37051",
  },
  {
    addressLine: "6445 N CLEON AVE",
    lat: "34.18797",
    lng: "-118.36825",
  },
  {
    addressLine: "6539 N FARMDALE AVE",
    lat: "34.18976",
    lng: "-118.38136",
  },
  {
    addressLine: "6332 N FARMDALE AVE",
    lat: "34.18591",
    lng: "-118.3811",
  },
  {
    addressLine: "10912 W KITTRIDGE ST",
    lat: "34.19021",
    lng: "-118.36865",
  },
  {
    addressLine: "13551 W VAN NUYS BLVD",
    lat: "34.261589999999998",
    lng: "-118.42865999999999",
  },
  {
    addressLine: "11731 W KITTRIDGE ST",
    lat: "34.19041",
    lng: "-118.38898",
  },
  {
    addressLine: "11123 W LEMAY ST",
    lat: "34.19117",
    lng: "-118.37331",
  },
  {
    addressLine: "6523 N LAUREL CANYON BLVD",
    lat: "34.1892",
    lng: "-118.39686",
  },
  {
    addressLine: "11724 W GILMORE ST",
    lat: "34.18741",
    lng: "-118.38879",
  },
  {
    addressLine: "11487 W VICTORY BLVD",
    lat: "34.18685",
    lng: "-118.38198",
  },
  {
    addressLine: "6702 N BECK AVE",
    lat: "34.19238",
    lng: "-118.38328",
  },
  {
    addressLine: "6603 N BELLINGHAM AVE",
    lat: "34.1905",
    lng: "-118.39886",
  },
  {
    addressLine: "11747 W WELBY WAY",
    lat: "34.19312",
    lng: "-118.38959",
  },
  {
    addressLine: "6732 N HINDS AVE",
    lat: "34.19314",
    lng: "-118.39094",
  },
  {
    addressLine: "6601 N LAUREL CANYON BLVD",
    lat: "34.1905",
    lng: "-118.39671",
  },
  {
    addressLine: "6426 N BABCOCK AVE",
    lat: "34.1875",
    lng: "-118.40621",
  },
  {
    addressLine: "6759 N LANKERSHIM BLVD",
    lat: "34.19359",
    lng: "-118.38798",
  },
  {
    addressLine: "6343 N BEEMAN AVE",
    lat: "34.186",
    lng: "-118.40749",
  },
  {
    addressLine: "6929 N LOUISE AVE",
    lat: "34.1965",
    lng: "-118.51002",
  },
  {
    addressLine: "7749 N WILBUR AVE",
    lat: "34.211530000000003",
    lng: "-118.54505",
  },
  {
    addressLine: "6717 N BEN AVE",
    lat: "34.19267",
    lng: "-118.39444",
  },
  {
    addressLine: "6639 N VESPER AVE",
    lat: "34.192",
    lng: "-118.45111",
  },
  {
    addressLine: "14540 W SYLVAN ST",
    lat: "34.1845",
    lng: "-118.45016",
  },
  {
    addressLine: "154 W AVENUE 27 null",
    lat: "34.078809999999997",
    lng: "-118.21698000000001",
  },
  {
    addressLine: "6334 N GOODLAND PL",
    lat: "34.1858",
    lng: "-118.41107",
  },
  {
    addressLine: "6726 N VALLEY CIRCLE BLVD",
    lat: "34.19341",
    lng: "-118.65665",
  },
];

export default addressList;
