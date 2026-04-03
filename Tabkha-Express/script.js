// CATEGORIES

let etudiantActive = false;
document.getElementById("etudiant").onclick = () => {
  const allBoxes = document.querySelectorAll(".box-item");
  if (!etudiantActive) {
    allBoxes.forEach(b => {
      if (
        b.dataset.name.includes("tajine") ||
        b.dataset.name.includes("mechouia") ||
        b.dataset.name.includes("tunisienne") ||
        b.dataset.name.includes("ojja") ||
        b.dataset.name.includes("pasta") ||
        b.dataset.name.includes("wrap") ||
        b.dataset.name.includes("couscous") ||
        b.dataset.name.includes("chapati") ||
        b.dataset.name.includes("rouz") ||
        b.dataset.name.includes("steak") ||
        b.dataset.name.includes("pizza") ||
        b.dataset.name.includes("escaloppe") ||
        b.dataset.name.includes("lablebi") ||
        b.dataset.name.includes("chakchouka") ||
        b.dataset.name.includes("marka") ||
        b.dataset.name.includes("lazania") ||
        b.dataset.name.includes("assida") ||
        b.dataset.name.includes("bsissa") ||
        b.dataset.name.includes("masfouf") ||
        b.dataset.name.includes("khobzethwe")
      ) {
        b.style.display = "block";
      } else {
        b.style.display = "none";
      }
    });
    etudiantActive = true;
  } else {
    allBoxes.forEach(b => b.style.display = "block");
    etudiantActive = false;
  }
};

let campingActive = false;
document.getElementById("camping").onclick = () => {
  const allBoxes = document.querySelectorAll(".box-item");
  if (!campingActive) {
    allBoxes.forEach(b => {
      if (
        b.dataset.name.includes("tunisienne") ||
        b.dataset.name.includes("ojja") ||
        b.dataset.name.includes("pasta") ||
        b.dataset.name.includes("wrap") ||
        b.dataset.name.includes("chapati") ||
        b.dataset.name.includes("rouz") ||
        b.dataset.name.includes("steak") ||
        b.dataset.name.includes("escaloppe") ||
        b.dataset.name.includes("chakchouka") ||
        b.dataset.name.includes("bsissa")
      ) {
        b.style.display = "block";
      } else {
        b.style.display = "none";
      }
    });
    campingActive = true;
  } else {
    allBoxes.forEach(b => b.style.display = "block");
    campingActive = false;
  }
};

let ramadanActive = false;
document.getElementById("ramadan").onclick = () => {
  const allBoxes = document.querySelectorAll(".box-item");
  if (!ramadanActive) {
    allBoxes.forEach(b => {
      if (
        b.dataset.name.includes("soupe") ||
        b.dataset.name.includes("brik") ||
        b.dataset.name.includes("tajine") ||
        b.dataset.name.includes("mechouia") ||
        b.dataset.name.includes("tunisienne") ||
        b.dataset.name.includes("ojja") ||
        b.dataset.name.includes("pasta") ||
        b.dataset.name.includes("wrap") ||
        b.dataset.name.includes("couscous") ||
        b.dataset.name.includes("chapati") ||
        b.dataset.name.includes("rouz") ||
        b.dataset.name.includes("pizza") ||
        b.dataset.name.includes("escaloppe") ||
        b.dataset.name.includes("chakchouka") ||
        b.dataset.name.includes("qleya") ||
        b.dataset.name.includes("marka") ||
        b.dataset.name.includes("lazania") ||
        b.dataset.name.includes("assida") ||
        b.dataset.name.includes("bsissa") ||
        b.dataset.name.includes("masfouf") ||
        b.dataset.name.includes("khobzethwe")
      ) {
        b.style.display = "block";
      } else {
        b.style.display = "none";
      }
    });
    ramadanActive = true;
  } else {
    allBoxes.forEach(b => b.style.display = "block");
    ramadanActive = false;
  }
};

let aidfitrActive = false;
document.getElementById("aidfitr").onclick = () => {
  const allBoxes = document.querySelectorAll(".box-item");
  if (!aidfitrActive) {
    allBoxes.forEach(b => {
      if (
        b.dataset.name.includes("tajine") ||
        b.dataset.name.includes("mechouia") ||
        b.dataset.name.includes("tunisienne") ||
        b.dataset.name.includes("pasta") ||
        b.dataset.name.includes("couscous") ||
        b.dataset.name.includes("rouz") ||
        b.dataset.name.includes("escaloppe") ||
        b.dataset.name.includes("mloukhia") ||
        b.dataset.name.includes("khobzethwe")
      ) {
        b.style.display = "block";
      } else {
        b.style.display = "none";
      }
    });
    aidfitrActive = true;
  } else {
    allBoxes.forEach(b => b.style.display = "block");
    aidfitrActive = false;
  }
};

let aidodhhaActive = false;
document.getElementById("aidodhha").onclick = () => {
  const allBoxes = document.querySelectorAll(".box-item");
  if (!aidodhhaActive) {
    allBoxes.forEach(b => {
      if (
        b.dataset.name.includes("tajine") ||
        b.dataset.name.includes("mechouia") ||
        b.dataset.name.includes("tunisienne") ||
        b.dataset.name.includes("pasta") ||
        b.dataset.name.includes("couscous") ||
        b.dataset.name.includes("rouz") ||
        b.dataset.name.includes("steak") ||
        b.dataset.name.includes("qleya") ||
        b.dataset.name.includes("marka")
      ) {
        b.style.display = "block";
      } else {
        b.style.display = "none";
      }
    });
    aidodhhaActive = true;
  } else {
    allBoxes.forEach(b => b.style.display = "block");
    aidodhhaActive = false;
  }
};

let mouledActive = false;
document.getElementById("mouled").onclick = () => {
  const allBoxes = document.querySelectorAll(".box-item");
  if (!mouledActive) {
    allBoxes.forEach(b => {
      if (
        b.dataset.name.includes("couscous") ||
        b.dataset.name.includes("rouz") ||
        b.dataset.name.includes("zgougou") ||
        b.dataset.name.includes("assida")
      ) {
        b.style.display = "block";
      } else {
        b.style.display = "none";
      }
    });
    mouledActive = true;
  } else {
    allBoxes.forEach(b => b.style.display = "block");
    mouledActive = false;
  }
};

let achouraActive = false;
document.getElementById("achoura").onclick = () => {
  const allBoxes = document.querySelectorAll(".box-item");
  if (!achouraActive) {
    allBoxes.forEach(b => {
      if (
        b.dataset.name.includes("mechouia") ||
        b.dataset.name.includes("tunisienne") ||
        b.dataset.name.includes("couscous") ||
        b.dataset.name.includes("rouz") ||
        b.dataset.name.includes("mloukhia") ||
        b.dataset.name.includes("qleya") ||
        b.dataset.name.includes("marka")
      ) {
        b.style.display = "block";
      } else {
        b.style.display = "none";
      }
    });
    achouraActive = true;
  } else {
    allBoxes.forEach(b => b.style.display = "block");
    achouraActive = false;
  }
};

let nouvneActive = false;
document.getElementById("nouvne").onclick = () => {
  const allBoxes = document.querySelectorAll(".box-item");
  if (!nouvneActive) {
    allBoxes.forEach(b => {
      if (
        b.dataset.name.includes("qolla") ||
        b.dataset.name.includes("zrir") ||
        b.dataset.name.includes("bsissa")
      ) {
        b.style.display = "block";
      } else {
        b.style.display = "none";
      }
    });
    nouvneActive = true;
  } else {
    allBoxes.forEach(b => b.style.display = "block");
    nouvneActive = false;
  }
};

let marriageActive = false;
document.getElementById("marriage").onclick = () => {
  const allBoxes = document.querySelectorAll(".box-item");
  if (!marriageActive) {
    allBoxes.forEach(b => {
      if (
        b.dataset.name.includes("tajine") ||
        b.dataset.name.includes("mechouia") ||
        b.dataset.name.includes("tunisienne") ||
        b.dataset.name.includes("couscous") ||
        b.dataset.name.includes("steak")
      ) {
        b.style.display = "block";
      } else {
        b.style.display = "none";
      }
    });
    marriageActive = true;
  } else {
    allBoxes.forEach(b => b.style.display = "block");
    marriageActive = false;
  }
};

document.getElementById("boxperso").onclick = () => {

  const allBoxes = document.querySelectorAll(".box-item");

  allBoxes.forEach(b => {

    if (
      b.dataset.name.includes("soupe") ||
      b.dataset.name.includes("brik") ||
      b.dataset.name.includes("tajine") ||
      b.dataset.name.includes("mechouia") ||
      b.dataset.name.includes("tunisienne") ||
      b.dataset.name.includes("ojja") ||
      b.dataset.name.includes("pasta") ||
      b.dataset.name.includes("wrap") ||
      b.dataset.name.includes("couscous") ||
      b.dataset.name.includes("chapati") ||
      b.dataset.name.includes("rouz") ||
      b.dataset.name.includes("steak") ||
      b.dataset.name.includes("pizza") ||
      b.dataset.name.includes("escaloppe") ||
      b.dataset.name.includes("lablebi") ||
      b.dataset.name.includes("chakchouka") ||
      b.dataset.name.includes("mloukhia") ||
      b.dataset.name.includes("qleya") ||
      b.dataset.name.includes("marka") ||
      b.dataset.name.includes("lazania") ||
      b.dataset.name.includes("qolla") ||
      b.dataset.name.includes("zrir") ||
      b.dataset.name.includes("zgougou") ||
      b.dataset.name.includes("assida") ||
      b.dataset.name.includes("bsissa") ||
      b.dataset.name.includes("masfouf") ||
      b.dataset.name.includes("khobzethwe")
    ) {
      b.style.display = "block";
    } else {
      b.style.display = "none";
    }

  });

};

const filtre = document.getElementById("filtre");
const type = document.getElementById("type");
const showall = document.getElementById("show-all");
const showentree = document.getElementById("show-entree");
const showplat = document.getElementById("show-plat");
const showdessert = document.getElementById("show-dessert");
const temps = document.getElementById("temps");
const t5 = document.getElementById("t5");
const t10 = document.getElementById("t10");
const t15 = document.getElementById("t15");
const t20 = document.getElementById("t20");
const t30 = document.getElementById("t30");

const help = document.getElementById("help");

const contact = document.getElementById("contact");
const contact2 = document.getElementById("contact2");
const closeContact = document.getElementById("closeContact");

const rech = document.getElementById("rech");

const log = document.getElementById("log");
const sign = document.getElementById("sign");

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

const etudiant = document.getElementById("etudiant");
const camping = document.getElementById("camping");
const ramadan = document.getElementById("ramadan");
const aidfit = document.getElementById("aidfitr");
const aidodhha = document.getElementById("aidodhha");
const mouled = document.getElementById("mouled");
const achoura = document.getElementById("achoura");
const nouvne = document.getElementById("nouvne");
const marriage = document.getElementById("marriage");
const boxperso = document.getElementById("boxperso");

const nosbox = document.getElementById("nosbox");

const soupe1 = document.getElementById("soupe1");
const soupe2 = document.getElementById("soupe2");
const soupevoir = document.getElementById("soupevoir");
const soupe3 = document.getElementById("soupe3");
const soupepoulet = document.getElementById("soupepoulet");
const soupeonion = document.getElementById("soupeonion");
const soupetomate = document.getElementById("soupetomate");
const soupehuile = document.getElementById("soupehuile");
const soupepoischiche = document.getElementById("soupepoischiche");
const soupesel = document.getElementById("soupesel");
const soupepoivre = document.getElementById("soupepoivre");
const soupekorkom = document.getElementById("soupekorkom");
const soupekarwia = document.getElementById("soupekarwia");
const soupefermer = document.getElementById("soupefermer");

const brik2 = document.getElementById("brik2");
const brikvoir = document.getElementById("brikvoir");
const brikoeuf = document.getElementById("brikoeuf");
const brikbatata = document.getElementById("brikbatata");
const brikfromage = document.getElementById("brikfromage");
const brikonion = document.getElementById("brikonion");
const brikpersil = document.getElementById("brikpersil");
const briksel = document.getElementById("briksel");
const brikpoivre = document.getElementById("brikpoivre");
const brikhuile = document.getElementById("brikhuile");
const brikfermer = document.getElementById("brikfermer");

const tajine1 = document.getElementById("tajine1");
const tajinevoir = document.getElementById("tajinevoir");
const tajinepoulet = document.getElementById("tajinepoulet");
const tajinevinde = document.getElementById("tajinevinde");
const tajineoeuf = document.getElementById("tajineoeuf");
const tajinebatata = document.getElementById("tajinebatata");
const tajinefromage = document.getElementById("tajinefromage");
const tajineonion = document.getElementById("tajineonion");
const tajinehuile = document.getElementById("tajinehuile");
const tajinesel = document.getElementById("tajinesel");
const tajinepoivre = document.getElementById("tajinepoivre");
const tajinekorkom = document.getElementById("tajinekorkom");
const tajinepersil = document.getElementById("tajinepersil");
const tajinefermer = document.getElementById("tajinefermer");

const salademch1 = document.getElementById("salademch1");
const salademch2 = document.getElementById("salademch2");
const salademchvoir = document.getElementById("salademchvoir");
const salademch3 = document.getElementById("salademch3");
const salademchpoivron = document.getElementById("salademchpoivron");
const salademchtomate = document.getElementById("salademchtomate");
const salademchail = document.getElementById("salademchail");
const salademchhuile = document.getElementById("salademchhuile");
const salademchoeuf = document.getElementById("salademchoeuf");
const salademcholive = document.getElementById("salademcholive");
const salademchsel = document.getElementById("salademchsel");
const salademchpoivre = document.getElementById("salademchpoivre");
const salademchpiment = document.getElementById("salademchpiment");
const salademchcitron = document.getElementById("salademchcitron");
const salademchfermer = document.getElementById("salademchfermer");

const saladetun1 = document.getElementById("saladetun1");
const saladetun2 = document.getElementById("saladetun2");
const saladetunvoir = document.getElementById("saladetunvoir");
const saladetun3 = document.getElementById("saladetun3");
const saladetuntomate = document.getElementById("saladetuntomate");
const saladetunfakous = document.getElementById("saladetunfakous");
const saladetunonion = document.getElementById("saladetunonion");
const saladetunoeuf = document.getElementById("saladetunoeuf");
const saladetunolive = document.getElementById("saladetunolive");
const saladetunhuile = document.getElementById("saladetunhuile");
const saladetuncitron = document.getElementById("saladetuncitron");
const saladetunsel = document.getElementById("saladetunsel");
const saladetunpoivre = document.getElementById("saladetunpoivre");
const saladetunfermer = document.getElementById("saladetunfermer");

const ojja1 = document.getElementById("ojja1");
const ojja2 = document.getElementById("ojja2");
const ojjavoir = document.getElementById("ojjavoir");
const ojja3 = document.getElementById("ojja3");
const ojjaoeuf = document.getElementById("ojjaoeuf");
const ojjatomate = document.getElementById("ojjatomate");
const ojjahuile = document.getElementById("ojjahuile");
const ojjaail = document.getElementById("ojjaail");
const ojjapiment = document.getElementById("ojjapiment");
const ojjaonion = document.getElementById("ojjaonion");
const ojjasel = document.getElementById("ojjasel");
const ojjapoivre = document.getElementById("ojjapoivre");
const ojjamerguez = document.getElementById("ojjamerguez");
const ojjafermer = document.getElementById("ojjafermer");

const pasta1 = document.getElementById("pasta1");
const pasta2 = document.getElementById("pasta2");
const pastavoir = document.getElementById("pastavoir");
const pasta3 = document.getElementById("pasta3");
const pastapate = document.getElementById("pastapate");
const pastatomate = document.getElementById("pastatomate");
const pastasel = document.getElementById("pastasel");
const pastapoivre = document.getElementById("pastapoivre");
const pastahuile = document.getElementById("pastahuile");
const pastaonion = document.getElementById("pastaonion");
const pastaail = document.getElementById("pastaail");
const pastalarwia = document.getElementById("pastalarwia");
const pastakorkom = document.getElementById("pastakorkom");
const pastaviande = document.getElementById("pastaviande");
const pastapoulet = document.getElementById("pastapoulet");
const pastafermer = document.getElementById("pastafermer");

const wrap2 = document.getElementById("wrap2");
const wrapvoir = document.getElementById("wrapvoir");
const wrapsalade = document.getElementById("wrapsalade");
const wrapsauce = document.getElementById("wrapsauce");
const wraptomate = document.getElementById("wraptomate");
const wrappoulet = document.getElementById("wrappoulet");
const wrapescalope = document.getElementById("wrapescalope");
const wrapformage = document.getElementById("wrapformage");
const wrapsel = document.getElementById("wrapsel");
const wrappoivre = document.getElementById("wrappoivre");
const wrapfermer = document.getElementById("wrapfermer");

const couscous1 = document.getElementById("couscous1");
const couscous2 = document.getElementById("couscous2");
const couscousvoir = document.getElementById("couscousvoir");
const couscous3 = document.getElementById("couscous3");
const couscoussemoule = document.getElementById("couscoussemoule");
const couscousbatata = document.getElementById("couscousbatata");
const couscouscarotte = document.getElementById("couscouscarotte");
const couscousonion = document.getElementById("couscousonion");
const couscoustomate = document.getElementById("couscoustomate");
const couscoushuile = document.getElementById("couscoushuile");
const couscouskorkom = document.getElementById("couscouskorkom");
const couscouskarwia = document.getElementById("couscouskarwia");
const couscoussel = document.getElementById("couscoussel");
const couscouspoivre = document.getElementById("couscouspoivre");
const couscouspoulet = document.getElementById("couscouspoulet");
const couscousviande = document.getElementById("couscousviande");
const couscouspiment = document.getElementById("couscouspiment");
const couscousfermer = document.getElementById("couscousfermer");

const chapati2 = document.getElementById("chapati2");
const chapativoir = document.getElementById("chapativoir");
const chapatisauce = document.getElementById("chapatisauce");
const chapatiformage = document.getElementById("chapatiformage");
const chapatisel = document.getElementById("chapatisel");
const chapatipoivre = document.getElementById("chapatipoivre");
const chapatioeuf = document.getElementById("chapatioeuf");
const chapatimaadnous = document.getElementById("chapatimaadnous");
const chapatifermer = document.getElementById("chapatifermer");

const rouz1 = document.getElementById("rouz1");
const rouz2 = document.getElementById("rouz2");
const rouzvoir = document.getElementById("rouzvoir");
const rouz3 = document.getElementById("rouz3");
const rouzriz = document.getElementById("rouzriz");
const rouzpoulet = document.getElementById("rouzpoulet");
const rouzviande = document.getElementById("rouzviande");
const rouzpoischiche = document.getElementById("rouzpoischiche");
const rouzbatata = document.getElementById("rouzbatata");
const rouzcarotte = document.getElementById("rouzcarotte");
const rouzonion = document.getElementById("rouzonion");
const rouztomate = document.getElementById("rouztomate");
const rouzhuile = document.getElementById("rouzhuile");
const rouzsel = document.getElementById("rouzsel");
const rouzpoivre = document.getElementById("rouzpoivre");
const rouzkorkom = document.getElementById("rouzkorkom");
const rouzkarwia = document.getElementById("rouzkarwia");
const rouzfermer = document.getElementById("rouzfermer");

const steak1 = document.getElementById("steak1");
const steak2 = document.getElementById("steak2");
const steakvoir = document.getElementById("steakvoir");
const steak3 = document.getElementById("steak3");
const steakviande = document.getElementById("steakviande");
const steaksel = document.getElementById("steaksel");
const steakpoivre = document.getElementById("steakpoivre");
const steakhuile = document.getElementById("steakhuile");
const steakbeurre = document.getElementById("steakbeurre");
const steakail = document.getElementById("steakail");
const steakfermer = document.getElementById("steakfermer");

const pizza = document.getElementById("pizza");
const pizzavoir = document.getElementById("pizzavoir");
const pizzapate = document.getElementById("pizzapate");
const pizzasauce = document.getElementById("pizzasauce");
const pizzafromage = document.getElementById("pizzafromage");
const pizzatomate = document.getElementById("pizzatomate");
const pizzapoivron = document.getElementById("pizzapoivron");
const pizzaonion = document.getElementById("pizzaonion");
const pizzaolive = document.getElementById("pizzaolive");
const pizzahuile = document.getElementById("pizzahuile");
const pizzasel = document.getElementById("pizzasel");
const pizzapoivre = document.getElementById("pizzapoivre");
const pizzafermer = document.getElementById("pizzafermer");

const escalope1 = document.getElementById("escalope1");
const escalope2 = document.getElementById("escalope2");
const escalopevoir = document.getElementById("escalopevoir");
const escalope3 = document.getElementById("escalope3");
const escalopeescalope = document.getElementById("escalopeescalope");
const escalopesel = document.getElementById("escalopesel");
const escalopepoivre = document.getElementById("escalopepoivre");
const escalopeail = document.getElementById("escalopeail");
const escalopehuile = document.getElementById("escalopehuile");
const escalopeoeuf = document.getElementById("escalopeoeuf");
const escalopechapelure = document.getElementById("escalopechapelure");
const escalopefarine = document.getElementById("escalopefarine");
const escalopecitron = document.getElementById("escalopecitron");
const escalopefermer = document.getElementById("escalopefermer");

const lablebi1 = document.getElementById("lablebi1");
const lablebivoir = document.getElementById("lablebivoir");
const lablebipoischiche = document.getElementById("lablebipoischiche");
const lablebiail = document.getElementById("lablebiail");
const lablebihuile = document.getElementById("lablebihuile");
const lablebisel = document.getElementById("lablebisel");
const lablebipoivre = document.getElementById("lablebipoivre");
const lablebipain = document.getElementById("lablebipain");
const lablebioeuf = document.getElementById("lablebioeuf");
const lablebicitron = document.getElementById("lablebicitron");
const lablebifermer = document.getElementById("lablebifermer");

const chakchouka1 = document.getElementById("chakchouka1");
const chakchoukavoir = document.getElementById("chakchoukavoir");
const chakchoukatomate = document.getElementById("chakchoukatomate");
const chakchoukapoivron = document.getElementById("chakchoukapoivron");
const chakchoukaonion = document.getElementById("chakchoukaonion");
const chakchoukaail = document.getElementById("chakchoukaail");
const chakchoukaoeuf = document.getElementById("chakchoukaoeuf");
const chakchoukahuile = document.getElementById("chakchoukahuile");
const chakchoukasel = document.getElementById("chakchoukasel");
const chakchoukapoivre = document.getElementById("chakchoukapoivre");
const chakchoukapiment = document.getElementById("chakchoukapiment");
const chakchoukafermer = document.getElementById("chakchoukafermer");

const mloukhia1 = document.getElementById("mloukhia1");
const mloukhiavoir = document.getElementById("mloukhiavoir");
const mloukhiaviande = document.getElementById("mloukhiaviande");
const mloukhiahuile = document.getElementById("mloukhiahuile");
const mloukhiaail = document.getElementById("mloukhiaail");
const mloukhiarand = document.getElementById("mloukhiarand");
const mloukhiasel = document.getElementById("mloukhiasel");
const mloukhiapoivre = document.getElementById("mloukhiapoivre");
const mloukhiakarwia = document.getElementById("mloukhiakarwia");
const mloukhiafermer = document.getElementById("mloukhiafermer");

const qleya1 = document.getElementById("qleya1");
const qleyavoir = document.getElementById("qleyavoir");
const qleyafoie = document.getElementById("qleyafoie");
const qleyaviande = document.getElementById("qleyaviande");
const qleyahuile = document.getElementById("qleyahuile");
const qleyaail = document.getElementById("qleyaail");
const qleyasel = document.getElementById("qleyasel");
const qleyapoivre = document.getElementById("qleyapoivre");
const qleyakorkom = document.getElementById("qleyakorkom");
const qleyapiment = document.getElementById("qleyapiment");
const qleyafermer = document.getElementById("qleyafermer");

const marka1 = document.getElementById("marka1");
const markavoir = document.getElementById("markavoir");
const markaviande = document.getElementById("markaviande");
const markapoulet = document.getElementById("markapoulet");
const markaonion = document.getElementById("markaonion");
const markatomate = document.getElementById("markatomate");
const markahuile = document.getElementById("markahuile");
const markabatata = document.getElementById("markabatata");
const markacarotte = document.getElementById("markacarotte");
const markapoischiche = document.getElementById("markapoischiche");
const markaail = document.getElementById("markaail");
const markasel = document.getElementById("markasel");
const markapoivre = document.getElementById("markapoivre");
const markakorkom = document.getElementById("markakorkom");
const markafermer = document.getElementById("markafermer");

const lazania1 = document.getElementById("lazania1");
const lazaniavoir = document.getElementById("lazaniavoir");
const lazaniaviande = document.getElementById("lazaniaviande");
const lazaniasauce = document.getElementById("lazaniasauce");
const lazaniaonion = document.getElementById("lazaniaonion");
const lazaniaail = document.getElementById("lazaniaail");
const lazaniafromage = document.getElementById("lazaniafromage");
const lazanialait = document.getElementById("lazanialait");
const lazaniabeurre = document.getElementById("lazaniabeurre");
const lazaniafarine = document.getElementById("lazaniafarine");
const lazaniahuile = document.getElementById("lazaniahuile");
const lazaniasel = document.getElementById("lazaniasel");
const lazaniapoivre = document.getElementById("lazaniapoivre");
const lazaniafermer = document.getElementById("lazaniafermer");

const qolla1 = document.getElementById("qolla1");
const qollavoir = document.getElementById("qollavoir");
const qollaamande = document.getElementById("qollaamande");
const qollanoisette = document.getElementById("qollanoisette");
const qollapistache = document.getElementById("qollapistache");
const qollamiel = document.getElementById("qollamiel");
const qollabonbon = document.getElementById("qollabonbon");
const qollafruitsec = document.getElementById("qollafruitsec");
const qollafermer = document.getElementById("qollafermer");

const zrir1 = document.getElementById("zrir1");
const zrirvoir = document.getElementById("zrirvoir");
const zrirsesame = document.getElementById("zrirsesame");
const zriramande = document.getElementById("zriramande");
const zrirnoisette = document.getElementById("zrirnoisette");
const zrirpistache = document.getElementById("zrirpistache");
const zrirmiel = document.getElementById("zrirmiel");
const zrirhuile = document.getElementById("zrirhuile");
const zrirsucre = document.getElementById("zrirsucre");
const zrirfermer = document.getElementById("zrirfermer");

const zgougou1 = document.getElementById("zgougou1");
const zgougouvoir = document.getElementById("zgougouvoir");
const zgougoufarine = document.getElementById("zgougoufarine");
const zgougousucre = document.getElementById("zgougousucre");
const zgougoulait = document.getElementById("zgougoulait");
const zgougoucreme = document.getElementById("zgougoucreme");
const zgougouamande = document.getElementById("zgougouamande");
const zgougounoisette = document.getElementById("zgougounoisette");
const zgougoupistache = document.getElementById("zgougoupistache");
const zgougoupignon = document.getElementById("zgougoupignon");
const zgougoufermer = document.getElementById("zgougoufermer");

const assida1 = document.getElementById("assida1");
const assidavoir = document.getElementById("assidavoir");
const assidasemoule = document.getElementById("assidasemoule");
const assidasel = document.getElementById("assidasel");
const assidahuile = document.getElementById("assidahuile");
const assidasucre = document.getElementById("assidasucre");
const assidamiel = document.getElementById("assidamiel");
const assidadatte = document.getElementById("assidadatte");
const assidafermer = document.getElementById("assidafermer");

const bsissa1 = document.getElementById("bsissa1");
const bsissavoir = document.getElementById("bsissavoir");
const bsissahuile = document.getElementById("bsissahuile");
const bsissasucre = document.getElementById("bsissasucre");
const bsissadatte = document.getElementById("bsissadatte");
const bsissaamande = document.getElementById("bsissaamande");
const bsissanoisette = document.getElementById("bsissanoisette");
const bsissafermer = document.getElementById("bsissafermer");

const masfouf1 = document.getElementById("masfouf1");
const masfoufvoir = document.getElementById("masfoufvoir");
const masfoufcouscous = document.getElementById("masfoufcouscous");
const masfoufhuile = document.getElementById("masfoufhuile");
const masfoufsucre = document.getElementById("masfoufsucre");
const masfoufdatte = document.getElementById("masfoufdatte");
const masfoufamande = document.getElementById("masfoufamande");
const masfouflait = document.getElementById("masfouflait");
const masfoufsel = document.getElementById("masfoufsel");
const masfouffermer = document.getElementById("masfouffermer");

const khobzethwe1 = document.getElementById("khobzethwe1");
const khobzethwevoir = document.getElementById("khobzethwevoir");
const khobzethwebiscuit = document.getElementById("khobzethwebiscuit");
const khobzethwecaffe = document.getElementById("khobzethwecaffe");
const khobzethwecreme = document.getElementById("khobzethwecreme");
const khobzethwelait = document.getElementById("khobzethwelait");
const khobzethwefruitsec = document.getElementById("khobzethwefruitsec");
const khobzethwefermer = document.getElementById("khobzethwefermer");

const com = document.getElementById("com");
const stp1 = document.getElementById("stp1");
const stp2 = document.getElementById("stp2");
const stp3 = document.getElementById("stp3");
const fin = document.getElementById("fin");

const fr = document.getElementById("lang-fr");
const en = document.getElementById("lang-en");
const dz = document.getElementById("lang-dz");
const currentFlag = document.getElementById("current-flag");
const currentText = document.getElementById("current-text");


// FR

fr.onclick = (e) => {
    e.preventDefault();
    currentFlag.src = "./assets/icons/fr.jfif";
    currentText.textContent = "FR";

  filtre.textContent = "Filtrer les Box";
  type.textContent = "Type";
  showall.textContent = "Tout";
  showentree.textContent = "Entrée";
  showplat.textContent = "Plat";
  showdessert.textContent = "Dessert";
  temps.textContent = "temps";
  t5.textContent = "5 min";
  t10.textContent = "10 min";
  t15.textContent = "15 min";
  t20.textContent = "20 min";
  t30.textContent = "30+ min";

  help.textContent = "Aide";

  contact.textContent = "Contactez nous";
  contact2.textContent = "Contactez-nous";
  closeContact.textContent = "Fermer";

  rech.textContent = "Rechercher une box..";

  log.textContent = "Log in";
  sign.textContent = "Sign up";

  title.textContent = "Cuisiner sans savoir cuisiner";
  subtitle.textContent = "Une box avec tous les ingrédients + une recette guidée. \n Aucun achat exterieur à faire.";

  etudiant.textContent = "Étudiant";
  camping.textContent = "Camping";
  ramadan.textContent = "Ramadan";
  aidfitr.textContent = "Aïd Fitr";
  aidodhha.textContent = "Aïd Odhha";
  mouled.textContent = "Mouled Nabaoui";
  achoura.textContent = "Achoura";
  nouvne.textContent = "Nouveau-né";
  marriage.textContent = "Mariage";
  boxperso.textContent = "Box personnalisée";

  nosbox.textContent = "Nos Box Repas";

  soupe1.textContent = "Soupe";
  soupe2.textContent = "15 min • Facile • 10 DT";
  soupevoir.textContent = "Voir la Box";
  soupe3.textContent = "Soupe";
  soupepoulet.textContent = "Poulet";
  soupeonion.textContent = "Oignon";
  soupetomate.textContent = "Tomates";
  soupehuile.textContent = "Huile";
  soupepoischiche.textContent = "Celeri";
  soupesel.textContent = "Sel";
  soupepoivre.textContent = "Poivre";
  soupekorkom.textContent = "curcuma";
  soupekarwia.textContent = "Carvi";
  soupefermer.textContent = "Fermer";

  brik2.textContent = "10 min • Facile • 10 DT";
  brikvoir.textContent = "Voir la Box";
  brikoeuf.textContent = "Oeuf";
  brikbatata.textContent = "Pomme de terre";
  brikfromage.textContent = "Fromage";
  brikonion.textContent = "Oignon";
  brikpersil.textContent = "Persil";
  briksel.textContent = "Sel";
  brikpoivre.textContent = "Poivre";
  brikhuile.textContent = "Huile";
  brikfermer.textContent = "Fermer";

  tajine1.textContent = "20 min • Moyen • 10 DT";
  tajinevoir.textContent = "Voir la Box";
  tajinepoulet.textContent = "Poulet";
  tajinevinde.textContent = "Viande";
  tajineoeuf.textContent = "Oeuf";
  tajinebatata.textContent = "Pomme de terre";
  tajinefromage.textContent = "Fromage";
  tajineonion.textContent = "Oignon";
  tajinehuile.textContent = "Huile";
  tajinesel.textContent = "Sel";
  tajinepoivre.textContent = "Poivre";
  tajinekorkom.textContent = "Curcuma";
  tajinepersil.textContent = "Persil";
  tajinefermer.textContent = "Fermer";

  salademch1.textContent = "Salade grillée";
  salademch2.textContent = "10 min • Facile • 10 DT";
  salademchvoir.textContent = "Voir la Box";
  salademch3.textContent = "Salade grillée";
  salademchpoivron.textContent = "Poivrons";
  salademchtomate.textContent = "Tomates";
  salademchail.textContent = "Ail";
  salademchhuile.textContent = "Huile";
  salademchoeuf.textContent = "Oeufs";
  salademcholive.textContent = "Olives";
  salademchsel.textContent = "Sel";
  salademchpoivre.textContent = "Poivre";
  salademchpiment.textContent = "Oignon";
  salademchcitron.textContent = "Carvi";
  salademchfermer.textContent = "Fermer";

  saladetun1.textContent = "Salade tunisienne";
  saladetun2.textContent = "10 min • Facile • 10 DT";
  saladetunvoir.textContent = "Voir la Box";
  saladetun3.textContent = "Salade tunisienne";
  saladetuntomate.textContent = "Tomates";
  saladetunfakous.textContent = "Concombre";
  saladetunonion.textContent = "Oignon";
  saladetunoeuf.textContent = "Oeufs";
  saladetunolive.textContent = "Olives";
  saladetunhuile.textContent = "Huile";
  saladetuncitron.textContent = "Citron";
  saladetunsel.textContent = "Sel";
  saladetunpoivre.textContent = "Poivre";
  saladetunfermer.textContent = "Fermer";

  ojja1.textContent = "Ojja";
  ojja2.textContent = "20 min • Facile • 10 DT";
  ojjavoir.textContent = "Voir la Box";
  ojja3.textContent = "Ojja";
  ojjaoeuf.textContent = "Oeufs";
  ojjatomate.textContent = "Tomate";
  ojjahuile.textContent = "Huile";
  ojjaail.textContent = "Ail";
  ojjapiment.textContent = "Piment";
  ojjaonion.textContent = "Oigon";
  ojjasel.textContent = "Sel";
  ojjapoivre.textContent = "Poivre";
  ojjamerguez.textContent = "Merguez";
  ojjafermer.textContent = "Fermer";

  pasta1.textContent = "Pates";
  pasta2.textContent = "25 min • Facile • 10 DT";
  pastavoir.textContent = "Voir la Box";
  pasta3.textContent = "Pates";
  pastapate.textContent = "Pates";
  pastatomate.textContent = "Tomate";
  pastasel.textContent = "Sel";
  pastapoivre.textContent = "Poivre";
  pastahuile.textContent = "Huile";
  pastaonion.textContent = "Piment";
  pastaail.textContent = "Ail";
  pastalarwia.textContent = "Carvi";
  pastakorkom.textContent = "Curcuma";
  pastaviande.textContent = "Viande";
  pastapoulet.textContent = "Poullet";
  pastafermer.textContent = "Fermer";

  wrap2.textContent = "15 min • Facile • 10 DT";
  wrapvoir.textContent = "Voir la Box";
  wrapsalade.textContent = "Salade";
  wrapsauce.textContent = "Sauce";
  wraptomate.textContent = "Tomate";
  wrappoulet.textContent = "Poulet";
  wrapescalope.textContent = "Escalope";
  wrapformage.textContent = "Formage";
  wrapsel.textContent = "Sel";
  wrappoivre.textContent = "Poivre";
  wrapfermer.textContent = "Fermer";

  couscous1.textContent = "Couscous";
  couscous2.textContent = "40 min • Difficile • 10 DT";
  couscousvoir.textContent = "Voir la Box";
  couscous3.textContent = "Couscous";
  couscoussemoule.textContent = "Semoule";
  couscousbatata.textContent = "Pomme de Terre";
  couscouscarotte.textContent = "Carotte";
  couscousonion.textContent = "Onion";
  couscoustomate.textContent = "Tomate";
  couscouspiment.textContent = "Piment";
  couscoushuile.textContent = "Huile";
  couscouskorkom.textContent = "Curcuma";
  couscouskarwia.textContent = "Carvi";
  couscoussel.textContent = "Sel";
  couscouspoivre.textContent = "Poivre";
  couscouspoulet.textContent = "Poulet";
  couscousviande.textContent = "Viande";
  couscousfermer.textContent = "Fermer";

  chapati2.textContent = "15 min • Facile • 10 DT";
  chapativoir.textContent = "Voir la Box";
  chapatisauce.textContent = "Sauce";
  chapatiformage.textContent = "Formage";
  chapatisel.textContent = "Sel";
  chapatipoivre.textContent = "Poivre";
  chapatioeuf.textContent = "Oeuf";
  chapatimaadnous.textContent = "Persil";
  chapatifermer.textContent = "Fermer";

  rouz1.textContent = "Riz Jerbien";
  rouz2.textContent = "35 min • Moyen • 10 DT";
  rouzvoir.textContent = "Voir la Box";
  rouz3.textContent = "Riz Jerbien";
  rouzriz.textContent = "Riz";
  rouzpoulet.textContent = "Poulet";
  rouzviande.textContent = "Viande";
  rouzpoischiche.textContent = "Pois chiches";
  rouzbatata.textContent = "Persil";
  rouzcarotte.textContent = "Carotte";
  rouzonion.textContent = "Oignon";
  rouztomate.textContent = "Tomate";
  rouzhuile.textContent = "Huile";
  rouzsel.textContent = "Sel";
  rouzpoivre.textContent = "Poivre";
  rouzkorkom.textContent = "Curcuma";
  rouzkarwia.textContent = "Carvi";
  rouzfermer.textContent = "Fermer";

  steak1.textContent = "Steak";
  steak2.textContent = "20 min • Facile • 10 DT";
  steakvoir.textContent = "Voir la Box";
  steak3.textContent = "Steak";
  steakviande.textContent = "Viande";
  steaksel.textContent = "Sel";
  steakpoivre.textContent = "Poivre";
  steakhuile.textContent = "Huile";
  steakbeurre.textContent = "Beurre";
  steakail.textContent = "Ail";
  steakfermer.textContent = "Fermer";

  pizza.textContent = "15 min • Facile • 10 DT";
  pizzavoir.textContent = "Voir la Box";
  pizzapate.textContent = "Pâte à pizza";
  pizzasauce.textContent = "Sauce tomate";
  pizzafromage.textContent = "Fromage";
  pizzatomate.textContent = "Tomate";
  pizzapoivron.textContent = "Poivron";
  pizzaonion.textContent = "Oignon";
  pizzaolive.textContent = "Olives";
  pizzahuile.textContent = "Huile";
  pizzasel.textContent = "Sel";
  pizzapoivre.textContent = "Poivre";
  pizzafermer.textContent = "Fermer";

  escalope1.textContent = "Escalope";
  escalope2.textContent = "15 min • Facile • 10 DT";
  escalopevoir.textContent = "Voir la Box";
  escalope3.textContent = "Escalope";
  escalopeescalope.textContent = "Escalope";
  escalopesel.textContent = "Sel";
  escalopepoivre.textContent = "Poivre";
  escalopeail.textContent = "Ail";
  escalopehuile.textContent = "Huile";
  escalopeoeuf.textContent = "Oeuf";
  escalopechapelure.textContent = "Chapelure";
  escalopefarine.textContent = "Farine";
  escalopecitron.textContent = "Citron";
  escalopefermer.textContent = "Fermer";

  lablebi1.textContent = "20 min • Moyen • 10 DT";
  lablebivoir.textContent = "Voir la Box";
  lablebipoischiche.textContent = "Pois chiches";
  lablebiail.textContent = "Ail";
  lablebihuile.textContent = "Huile";
  lablebisel.textContent = "Sel";
  lablebipoivre.textContent = "Poivre";
  lablebipain.textContent = "Pain";
  lablebioeuf.textContent = "Oeuf";
  lablebicitron.textContent = "Citron";
  lablebifermer.textContent = "Fermer";

  chakchouka1.textContent = "20 min • Facile • 10 DT";
  chakchoukavoir.textContent = "Voir la Box";
  chakchoukatomate.textContent = "Tomate";
  chakchoukapoivron.textContent = "Poivron";
  chakchoukaonion.textContent = "Oignon";
  chakchoukaail.textContent = "Ail";
  chakchoukaoeuf.textContent = "Oeufs";
  chakchoukahuile.textContent = "Huile";
  chakchoukasel.textContent = "Sel";
  chakchoukapoivre.textContent = "Poivre";
  chakchoukapiment.textContent = "Salk";
  chakchoukafermer.textContent = "Fermer";

  mloukhia1.textContent = "45 min • Difficile • 10 DT";
  mloukhiavoir.textContent = "Voir la Box";
  mloukhiaviande.textContent = "Viande";
  mloukhiahuile.textContent = "Huile";
  mloukhiaail.textContent = "Ail";
  mloukhiarand.textContent = "Feuille de laurier";
  mloukhiasel.textContent = "Sel";
  mloukhiapoivre.textContent = "Poivre";
  mloukhiakarwia.textContent = "Carvi";
  mloukhiafermer.textContent = "Fermer";

  qleya1.textContent = "15 min • Moyen • 10 DT";
  qleyavoir.textContent = "Voir la Box";
  qleyafoie.textContent = "Foie";
  qleyaviande.textContent = "Viande";
  qleyahuile.textContent = "Huile";
  qleyaail.textContent = "Ail";
  qleyasel.textContent = "Sel";
  qleyapoivre.textContent = "Poivre";
  qleyakorkom.textContent = "Curcuma";
  qleyapiment.textContent = "Piment";
  qleyapiment.textContent = "Oignon";
  qleyafermer.textContent = "Fermer";

  marka1.textContent = "20 min • Moyen • 10 DT";
  markavoir.textContent = "Voir la Box";
  markaviande.textContent = "Viande";
  markapoulet.textContent = "Poulet";
  markaonion.textContent = "Oignon";
  markatomate.textContent = "Tomate";
  markahuile.textContent = "Huile";
  markabatata.textContent = "Pomme de terre";
  markacarotte.textContent = "Carotte";
  markapoischiche.textContent = "Pois chiches";
  markaail.textContent = "Ail";
  markasel.textContent = "Sel";
  markapoivre.textContent = "Poivre";
  markakorkom.textContent = "Curcuma";
  markafermer.textContent = "Fermer";

  lazania1.textContent = "25 min • Difficile • 10 DT";
  lazaniavoir.textContent = "Voir la Box";
  lazaniaviande.textContent = "Viande hachée";
  lazaniasauce.textContent = "Sauce tomate";
  lazaniaonion.textContent = "Oignon";
  lazaniaail.textContent = "Ail";
  lazaniafromage.textContent = "Fromage râpé";
  lazanialait.textContent = "Lait";
  lazaniabeurre.textContent = "Beurre";
  lazaniafarine.textContent = "Farine";
  lazaniahuile.textContent = "Huile";
  lazaniasel.textContent = "Sel";
  lazaniapoivre.textContent = "Poivre";
  lazaniafermer.textContent = "Fermer";

  qolla1.textContent = "5 min • Facile • 10 DT";
  qollavoir.textContent = "Voir la Box";
  qollaamande.textContent = "Amandes";
  qollanoisette.textContent = "Noisettes";
  qollapistache.textContent = "Pistaches";
  qollamiel.textContent = "Miel";
  qollabonbon.textContent = "Bonbon";
  qollafruitsec.textContent = "Fruit sec";
  qollafermer.textContent = "Fermer";

  zrir1.textContent = "15 min • Moyen • 10 DT";
  zrirvoir.textContent = "Voir la Box";
  zrirsesame.textContent = "Graines de sésame";
  zriramande.textContent = "Amandes";
  zrirnoisette.textContent = "Noisettes";
  zrirpistache.textContent = "Pistaches";
  zrirmiel.textContent = "Miel";
  zrirhuile.textContent = "Huile";
  zrirsucre.textContent = "Sucre";
  zrirfermer.textContent = "Fermer";

  zgougou1.textContent = "20 min • Moyen • 10 DT";
  zgougouvoir.textContent = "Voir la Box";
  zgougoufarine.textContent = "Farine";
  zgougousucre.textContent = "Sucre";
  zgougoulait.textContent = "Lait";
  zgougoucreme.textContent = "Crème pâtissière";
  zgougouamande.textContent = "Amandes";
  zgougounoisette.textContent = "Noisettes";
  zgougoupistache.textContent = "Pistaches";
  zgougoupignon.textContent = "Pignons";
  zgougoufermer.textContent = "Fermer";

  assida1.textContent = "20 min • Moyen • 10 DT";
  assidavoir.textContent = "Voir la Box";
  assidasemoule.textContent = "Farine";
  assidasel.textContent = "Sel";
  assidahuile.textContent = "Huile";
  assidasucre.textContent = "Sucre";
  assidamiel.textContent = "Miel";
  assidadatte.textContent = "Dattes";
  assidafermer.textContent = "Fermer";

  bsissa1.textContent = "10 min • Facile • 10 DT";
  bsissavoir.textContent = "Voir la Box";
  bsissahuile.textContent = "Huile";
  bsissasucre.textContent = "Sucre";
  bsissadatte.textContent = "Dattes";
  bsissaamande.textContent = "Amandes";
  bsissanoisette.textContent = "Noisettes";
  bsissafermer.textContent = "Fermer";

  masfouf1.textContent = "15 min • Facile • 10 DT";
  masfoufvoir.textContent = "Voir la Box";
  masfoufcouscous.textContent = "Couscous";
  masfoufhuile.textContent = "Huile";
  masfoufsucre.textContent = "Sucre";
  masfoufdatte.textContent = "Dattes";
  masfoufamande.textContent = "Amandes";
  masfouflait.textContent = "Lait";
  masfoufsel.textContent = "Sel";
  masfouffermer.textContent = "Fermer";

  khobzethwe1.textContent = "10 min • Facile • 10 DT";
  khobzethwevoir.textContent = "Voir la Box";
  khobzethwebiscuit.textContent = "Biscuit";
  khobzethwecaffe.textContent = "Caffe";
  khobzethwecreme.textContent = "Creme chantille";
  khobzethwelait.textContent = "Lait";
  khobzethwefruitsec.textContent = "Fruit sec";
  khobzethwefermer.textContent ="Fermer";

  com.textContent = "Comment ça marche ?";
  stp1.textContent = "Ingrédients prêts";
  stp2.textContent = "Suivez les étapes";
  stp3.textContent = "Régalez-vous";
  fin.textContent = "© 2026 TabkhaExpress – Projet étudiant – Ghassen Ben Nasr";

currentFlag.src = "assets/icons/fr.jfif";
currentText.textContent = "FR";
};


// EN

en.onclick = (e) => {
    e.preventDefault();
    currentFlag.src = "./assets/icons/en.jfif";
    currentText.textContent = "EN";

  filtre.textContent = "Filter Boxes";
  type.textContent = "Type";
  showall.textContent = "All";
  showentree.textContent = "Starter";
  showplat.textContent = "Main dish";
  showdessert.textContent = "Dessert";
  temps.textContent = "time";
  t5.textContent = "5 min";
  t10.textContent = "10 min";
  t15.textContent = "15 min";
  t20.textContent = "20 min";
  t30.textContent = "30+ min";

  help.textContent = "Help";

  contact.textContent = "Contact us";
  contact2.textContent = "Contact us";
  closeContact.textContent = "Close";

  rech.textContent = "Search a box..";

  log.textContent = "Log in";
  sign.textContent = "Sign up";

  title.textContent = "Cook without knowing how to cook";
  subtitle.textContent = "A box with all ingredients + a guided recipe. \n No extra shopping needed.";

  etudiant.textContent = "Student";
  camping.textContent = "Camping";
  ramadan.textContent = "Ramadan";
  aidfitr.textContent = "Eid Fitr";
  aidodhha.textContent = "Eid Adha";
  mouled.textContent = "Mawlid";
  achoura.textContent = "Ashura";
  nouvne.textContent = "Newborn";
  marriage.textContent = "Wedding";
  boxperso.textContent = "Custom box";

  nosbox.textContent = "Our Meal Boxes";

  soupe1.textContent = "Soup";
  soupe2.textContent = "15 min • Easy • 10 DT";
  soupevoir.textContent = "View Box";
  soupe3.textContent = "Soup";
  soupepoulet.textContent = "Chicken";
  soupeonion.textContent = "Onion";
  soupetomate.textContent = "Tomatoes";
  soupehuile.textContent = "Oil";
  soupepoischiche.textContent = "Chickpeas";
  soupesel.textContent = "Salt";
  soupepoivre.textContent = "Pepper";
  soupekorkom.textContent = "Turmeric";
  soupekarwia.textContent = "Caraway";
  soupefermer.textContent = "Close";

  brik2.textContent = "10 min • Easy • 10 DT";
  brikvoir.textContent = "View Box";
  brikoeuf.textContent = "Egg";
  brikbatata.textContent = "Potato";
  brikfromage.textContent = "Cheese";
  brikonion.textContent = "Onion";
  brikpersil.textContent = "Parsley";
  briksel.textContent = "Salt";
  brikpoivre.textContent = "Pepper";
  brikhuile.textContent = "Oil";
  brikfermer.textContent = "Close";

  tajine1.textContent = "20 min • Middle • 10 DT";
  tajinevoir.textContent = "View Box";
  tajinepoulet.textContent = "Chicken";
  tajinevinde.textContent = "Meat";
  tajineoeuf.textContent = "Egg";
  tajinebatata.textContent = "Potato";
  tajinefromage.textContent = "Cheese";
  tajineonion.textContent = "Onion";
  tajinehuile.textContent = "Oil";
  tajinesel.textContent = "Salt";
  tajinepoivre.textContent = "Pepper";
  tajinekorkom.textContent = "Turmeric";
  tajinepersil.textContent = "Parsley";
  tajinefermer.textContent = "Close";

  salademch1.textContent = "Grilled salad";
  salademch2.textContent = "10 min • Easy • 10 DT";
  salademchvoir.textContent = "View Box";
  salademch3.textContent = "Grilled salad";
  salademchpoivron.textContent = "Peppers";
  salademchtomate.textContent = "Tomatoes";
  salademchail.textContent = "Garlic";
  salademchhuile.textContent = "Oil";
  salademchoeuf.textContent = "Eggs";
  salademcholive.textContent = "Olives";
  salademchsel.textContent = "Salt";
  salademchpoivre.textContent = "Pepper";
  salademchpiment.textContent = "Onion";
  salademchcitron.textContent = "Caraway";
  salademchfermer.textContent = "Close";

  saladetun1.textContent = "Tunisian salad";
  saladetun2.textContent = "10 min • Easy • 10 DT";
  saladetunvoir.textContent = "View Box";
  saladetun3.textContent = "Tunisian salad";
  saladetuntomate.textContent = "Tomatoes";
  saladetunfakous.textContent = "Cucumber";
  saladetunonion.textContent = "Onion";
  saladetunoeuf.textContent = "Eggs";
  saladetunolive.textContent = "Olives";
  saladetunhuile.textContent = "Oil";
  saladetuncitron.textContent = "Lemon";
  saladetunsel.textContent = "Salt";
  saladetunpoivre.textContent = "Pepper";
  saladetunfermer.textContent = "Close";

  ojja1.textContent = "Ojja";
  ojja2.textContent = "20 min • Easy • 10 DT";
  ojjavoir.textContent = "View Box";
  ojja3.textContent = "Ojja";
  ojjaoeuf.textContent = "Eggs";
  ojjatomate.textContent = "Tomato";
  ojjahuile.textContent = "Oil";
  ojjaail.textContent = "Garlic";
  ojjapiment.textContent = "Chili";
  ojjaonion.textContent = "Onion";
  ojjasel.textContent = "Salt";
  ojjapoivre.textContent = "Pepper";
  ojjamerguez.textContent = "Merguez";
  ojjafermer.textContent = "Close";

  pasta1.textContent = "Pasta";
  pasta2.textContent = "25 min • Easy • 10 DT";
  pastavoir.textContent = "View Box";
  pasta3.textContent = "Pasta";
  pastapate.textContent = "Pasta";
  pastatomate.textContent = "Tomato";
  pastasel.textContent = "Salt";
  pastapoivre.textContent = "Pepper";
  pastahuile.textContent = "Oil";
  pastaonion.textContent = "Pepper";
  pastaail.textContent = "Pepper";
  pastalarwia.textContent = "Caraway";
  pastakorkom.textContent = "Turmeric";
  pastaviande.textContent = "Meat";
  pastapoulet.textContent = "Chicken";
  pastafermer.textContent = "Close";

  wrap2.textContent = "15 min • Easy • 10 DT";
  wrapvoir.textContent = "View Box";
  wrapsalade.textContent = "Salad";
  wrapsauce.textContent = "Sauce";
  wraptomate.textContent = "Tomato";
  wrappoulet.textContent = "Chicken";
  wrapescalope.textContent = "Escalope";
  wrapformage.textContent = "Cheese";
  wrapsel.textContent = "Salt";
  wrappoivre.textContent = "Pepper";
  wrapfermer.textContent = "Close";

  couscous1.textContent = "Couscous";
  couscous2.textContent = "40 min • Hard • 10 DT";
  couscousvoir.textContent = "View Box";
  couscous3.textContent = "Couscous";
  couscoussemoule.textContent = "Semolina";
  couscousbatata.textContent = "Potato";
  couscouscarotte.textContent = "Carrot";
  couscousonion.textContent = "Onion";
  couscoustomate.textContent = "Tomato";
  couscouspiment.textContent = "Pepper";
  couscoushuile.textContent = "Oil";
  couscouskorkom.textContent = "Turmeric";
  couscouskarwia.textContent = "Caraway";
  couscoussel.textContent = "Salt";
  couscouspoivre.textContent = "Pepper";
  couscouspoulet.textContent = "Chicken";
  couscousviande.textContent = "Meat";
  couscousfermer.textContent = "Close";

  chapati2.textContent = "15 min • Easy • 10 DT";
  chapativoir.textContent = "View Box";
  chapatisauce.textContent = "Sauce";
  chapatiformage.textContent = "Cheese";
  chapatisel.textContent = "Salt";
  chapatipoivre.textContent = "Pepper";
  chapatioeuf.textContent = "Egg";
  chapatimaadnous.textContent = "Parsley";
  chapatifermer.textContent = "Close";

  rouz1.textContent = "Jerbian rice";
  rouz2.textContent = "35 min • Middle • 10 DT";
  rouzvoir.textContent = "View Box";
  rouz3.textContent = "Jerbian rice";
  rouzriz.textContent = "Rice";
  rouzpoulet.textContent = "Chicken";
  rouzviande.textContent = "Meat";
  rouzpoischiche.textContent = "Chickpeas";
  rouzbatata.textContent = "Parsley";
  rouzcarotte.textContent = "Carrot";
  rouzonion.textContent = "Onion";
  rouztomate.textContent = "Tomato";
  rouzhuile.textContent = "Oil";
  rouzsel.textContent = "Salt";
  rouzpoivre.textContent = "Pepper";
  rouzkorkom.textContent = "Turmeric";
  rouzkarwia.textContent = "Caraway";
  rouzfermer.textContent = "Close";

  steak1.textContent = "Steak";
  steak2.textContent = "20 min • Easy • 10 DT";
  steakvoir.textContent = "View Box";
  steak3.textContent = "Steak";
  steakviande.textContent = "Meat";
  steaksel.textContent = "Salt";
  steakpoivre.textContent = "Pepper";
  steakhuile.textContent = "Oil";
  steakbeurre.textContent = "Butter";
  steakail.textContent = "Garlic";
  steakfermer.textContent = "Close";

  pizza.textContent = "15 min • Easy • 10 DT";
  pizzavoir.textContent = "View Box";
  pizzapate.textContent = "Pizza dough";
  pizzasauce.textContent = "Tomato sauce";
  pizzafromage.textContent = "Cheese";
  pizzatomate.textContent = "Tomato";
  pizzapoivron.textContent = "Pepper";
  pizzaonion.textContent = "Onion";
  pizzaolive.textContent = "Olives";
  pizzahuile.textContent = "Oil";
  pizzasel.textContent = "Salt";
  pizzapoivre.textContent = "Pepper";
  pizzafermer.textContent = "Close";

  escalope1.textContent = "Escalope";
  escalope2.textContent = "15 min • Easy • 10 DT";
  escalopevoir.textContent = "View Box";
  escalope3.textContent = "Escalope";
  escalopeescalope.textContent = "Escalope";
  escalopesel.textContent = "Salt";
  escalopepoivre.textContent = "Pepper";
  escalopeail.textContent = "Garlic";
  escalopehuile.textContent = "Oil";
  escalopeoeuf.textContent = "Egg";
  escalopechapelure.textContent = "Breadcrumbs";
  escalopefarine.textContent = "Flour";
  escalopecitron.textContent = "Lemon";
  escalopefermer.textContent = "Close";

  lablebi1.textContent = "20 min • Middle • 10 DT";
  lablebivoir.textContent = "View Box";
  lablebipoischiche.textContent = "Chickpeas";
  lablebiail.textContent = "Garlic";
  lablebihuile.textContent = "Oil";
  lablebisel.textContent = "Salt";
  lablebipoivre.textContent = "Pepper";
  lablebipain.textContent = "Bread";
  lablebioeuf.textContent = "Egg";
  lablebicitron.textContent = "Lemon";
  lablebifermer.textContent = "Close";

  chakchouka1.textContent = "20 min • Easy • 10 DT";
  chakchoukavoir.textContent = "View Box";
  chakchoukatomate.textContent = "Tomato";
  chakchoukapoivron.textContent = "Pepper";
  chakchoukaonion.textContent = "Onion";
  chakchoukaail.textContent = "Garlic";
  chakchoukaoeuf.textContent = "Eggs";
  chakchoukahuile.textContent = "Oil";
  chakchoukasel.textContent = "Salt";
  chakchoukapoivre.textContent = "Pepper";
  chakchoukapiment.textContent = "Salk";
  chakchoukafermer.textContent = "Close";

  mloukhia1.textContent = "45 min • Hard • 10 DT";
  mloukhiavoir.textContent = "View Box";
  mloukhiaviande.textContent = "Meat";
  mloukhiahuile.textContent = "Oil";
  mloukhiaail.textContent = "Garlic";
  mloukhiarand.textContent = "Bay leaf";
  mloukhiasel.textContent = "Salt";
  mloukhiapoivre.textContent = "Pepper";
  mloukhiakarwia.textContent = "Caraway";
  mloukhiafermer.textContent = "Close";

  qleya1.textContent = "15 min • Middle • 10 DT";
  qleyavoir.textContent = "View Box";
  qleyafoie.textContent = "Liver";
  qleyaviande.textContent = "Meat";
  qleyahuile.textContent = "Oil";
  qleyaail.textContent = "Garlic";
  qleyasel.textContent = "Salt";
  qleyapoivre.textContent = "Pepper";
  qleyakorkom.textContent = "Turmeric";
  qleyapiment.textContent = "Chili";
  qleyapiment.textContent = "Onion";
  qleyafermer.textContent = "Close";

  marka1.textContent = "20 min • Middle • 10 DT";
  markavoir.textContent = "View Box";
  markaviande.textContent = "Meat";
  markapoulet.textContent = "Chicken";
  markaonion.textContent = "Onion";
  markatomate.textContent = "Tomato";
  markahuile.textContent = "Oil";
  markabatata.textContent = "Potato";
  markacarotte.textContent = "Carrot";
  markapoischiche.textContent = "Chickpeas";
  markaail.textContent = "Garlic";
  markasel.textContent = "Salt";
  markapoivre.textContent = "Pepper";
  markakorkom.textContent = "Turmeric";
  markafermer.textContent = "Close";

  lazania1.textContent = "25 min • Hard • 10 DT";
  lazaniavoir.textContent = "View Box";
  lazaniaviande.textContent = "Minced meat";
  lazaniasauce.textContent = "Tomato sauce";
  lazaniaonion.textContent = "Onion";
  lazaniaail.textContent = "Garlic";
  lazaniafromage.textContent = "Grated cheese";
  lazanialait.textContent = "Milk";
  lazaniabeurre.textContent = "Butter";
  lazaniafarine.textContent = "Flour";
  lazaniahuile.textContent = "Oil";
  lazaniasel.textContent = "Salt";
  lazaniapoivre.textContent = "Pepper";
  lazaniafermer.textContent = "Close";

  qolla1.textContent = "5 min • Easy • 10 DT";
  qollavoir.textContent = "View Box";
  qollaamande.textContent = "Almonds";
  qollanoisette.textContent = "Hazelnuts";
  qollapistache.textContent = "Pistachios";
  qollamiel.textContent = "Honey";
  qollabonbon.textContent = "Candy";
  qollafruitsec.textContent = "Dried fruits";
  qollafermer.textContent = "Close";

  zrir1.textContent = "15 min • Middle • 10 DT";
  zrirvoir.textContent = "View Box";
  zrirsesame.textContent = "Sesame seeds";
  zriramande.textContent = "Almonds";
  zrirnoisette.textContent = "Hazelnuts";
  zrirpistache.textContent = "Pistachios";
  zrirmiel.textContent = "Honey";
  zrirhuile.textContent = "Oil";
  zrirsucre.textContent = "Sugar";
  zrirfermer.textContent = "Close";

  zgougou1.textContent = "20 min • Middle • 10 DT";
  zgougouvoir.textContent = "View Box";
  zgougoufarine.textContent = "Flour";
  zgougousucre.textContent = "Sugar";
  zgougoulait.textContent = "Milk";
  zgougoucreme.textContent = "Custard cream";
  zgougouamande.textContent = "Almonds";
  zgougounoisette.textContent = "Hazelnuts";
  zgougoupistache.textContent = "Pistachios";
  zgougoupignon.textContent = "Pine nuts";
  zgougoufermer.textContent = "Close";

  assida1.textContent = "20 min • Middle • 10 DT";
  assidavoir.textContent = "Flour";
  assidasemoule.textContent = "Semolina";
  assidasel.textContent = "Salt";
  assidahuile.textContent = "Oil";
  assidasucre.textContent = "Sugar";
  assidamiel.textContent = "Honey";
  assidadatte.textContent = "Dates";
  assidafermer.textContent = "Close";

  bsissa1.textContent = "10 min • Easy • 10 DT";
  bsissavoir.textContent = "View Box";
  bsissahuile.textContent = "Oil";
  bsissasucre.textContent = "Sugar";
  bsissadatte.textContent = "Dates";
  bsissaamande.textContent = "Almonds";
  bsissanoisette.textContent = "Hazelnuts";
  bsissafermer.textContent = "Close";

  masfouf1.textContent = "15 min • Easy • 10 DT";
  masfoufvoir.textContent = "View Box";
  masfoufcouscous.textContent = "Couscous";
  masfoufhuile.textContent = "Oil";
  masfoufsucre.textContent = "Sugar";
  masfoufdatte.textContent = "Dates";
  masfoufamande.textContent = "Almonds";
  masfouflait.textContent = "Milk";
  masfoufsel.textContent = "Salt";
  masfouffermer.textContent = "Close";

  khobzethwe1.textContent = "10 min • Easy • 10 DT";
  khobzethwevoir.textContent = "View Box";
  khobzethwebiscuit.textContent = "Biscuit";
  khobzethwecaffe.textContent = "Coffee";
  khobzethwecreme.textContent = "Whipped cream";
  khobzethwelait.textContent = "Milk";
  khobzethwefruitsec.textContent = "Dried fruits";
  khobzethwefermer.textContent = "Close";

  com.textContent = "How does it work?";
  stp1.textContent = "Ingredients ready";
  stp2.textContent = "Follow the steps";
  stp3.textContent = "Enjoy your meal";
  fin.textContent = "© 2026 TabkhaExpress – Student project – Ghassen Ben Nasr";

currentFlag.src = "assets/icons/en.jfif";
currentText.textContent = "EN";
};


// DARJA

dz.onclick = (e) => {
    e.preventDefault();

    currentFlag.src = "./assets/icons/tn.jfif";
    currentText.textContent = "DRJ";

  filtre.textContent = "Saffi l boxet";
  type.textContent = "Naw3";
  showall.textContent = "Kol";
  showentree.textContent = "Entree";
  showplat.textContent = "Plat principal";
  showdessert.textContent = "Dessert";
  temps.textContent = "wa9t";
  t5.textContent = "5 d9aye9";
  t10.textContent = "10 d9aye9";
  t15.textContent = "15 d9aye9";
  t20.textContent = "20 d9aye9";
  t30.textContent = "30+ d9aye9";

  help.textContent = "Mosa3da";

  contact.textContent = "Etasel bina";
  contact2.textContent = "Etasel bina";
  closeContact.textContent = "Sakker";

  rech.textContent = "Lawwej 3la box..";

  log.textContent = "Dkhol";
  sign.textContent = "Sajel";

  title.textContent = "Tayeb bla ma ta3ref tayeb";
  subtitle.textContent = "Box fiha kol chay + recette bel mar7alet. \n ma fama hatta chay okhra tichrih.";

  etudiant.textContent = "Taleb";
  camping.textContent = "Camping";
  ramadan.textContent = "Ramadhan";
  aidfitr.textContent = "3id Sghir";
  aidodhha.textContent = "3id Kbir";
  mouled.textContent = "Mouled";
  achoura.textContent = "Achoura";
  nouvne.textContent = "Mawloud jdid";
  marriage.textContent = "3ers";
  boxperso.textContent = "Box 3la dhaw9ek";

  nosbox.textContent = "Boxet lmakla";
  soupe1.textContent = "Chorba";
  soupe2.textContent = "15 d9aye9 • Sehla • 10 DT";
  soupevoir.textContent = "Chouf lbox";
  soupe3.textContent = "Chorba";
  soupepoulet.textContent = "Djej";
  soupeonion.textContent = "Bsal";
  soupetomate.textContent = "Tmatim";
  soupehuile.textContent = "Zit";
  soupepoischiche.textContent = "Klafs";
  soupesel.textContent = "Melh";
  soupepoivre.textContent = "Felfel akhal";
  soupekorkom.textContent = "Korkom";
  soupekarwia.textContent = "Karwia";
  soupefermer.textContent = "Sakker";

  brik2.textContent = "10 d9aye9 • Sehla • 10 DT";
  brikvoir.textContent = "Chouf lbox";
  brikoeuf.textContent = "3dham";
  brikbatata.textContent = "Batata";
  brikfromage.textContent = "Fromaj";
  brikonion.textContent = "Bsal";
  brikpersil.textContent = "Maadnous";
  briksel.textContent = "Melh";
  brikpoivre.textContent = "Felfel akhal";
  brikhuile.textContent = "Zit";
  brikfermer.textContent = "Sakker";

  tajine1.textContent = "20 d9aye9 • Metwasta • 10 DT";
  tajinevoir.textContent = "Chouf lbox";
  tajinepoulet.textContent = "Djej";
  tajinevinde.textContent = "Lham";
  tajineoeuf.textContent = "3dham";
  tajinebatata.textContent = "Batata";
  tajinefromage.textContent = "Fromaj";
  tajineonion.textContent = "Bsal";
  tajinehuile.textContent = "Zit";
  tajinesel.textContent = "Melh";
  tajinepoivre.textContent = "Felfel akhal";
  tajinekorkom.textContent = "Korkom";
  tajinepersil.textContent = "Maadnous";
  tajinefermer.textContent = "Sakker";

  salademch1.textContent = "Slata mechouia";
  salademch2.textContent = "10 d9aye9 • Sehla • 10 DT";
  salademchvoir.textContent = "Chouf lbox";
  salademch3.textContent = "Slata mechouia";
  salademchpoivron.textContent = "Felfel";
  salademchtomate.textContent = "Tmatim";
  salademchail.textContent = "Thoum";
  salademchhuile.textContent = "Zit";
  salademchoeuf.textContent = "3dham";
  salademcholive.textContent = "Zitoun";
  salademchsel.textContent = "Melh";
  salademchpoivre.textContent = "Bsal";
  salademchcitron.textContent = "Karwia";
  salademchfermer.textContent = "Sakker";

  saladetun1.textContent = "Slata tounsiya";
  saladetun2.textContent = "10 d9aye9 • Sehla • 10 DT";
  saladetunvoir.textContent = "Chouf lbox";
  saladetun3.textContent = "Slata tounsiya";
  saladetuntomate.textContent = "Tmatim";
  saladetunfakous.textContent = "Fakous";
  saladetunonion.textContent = "Bsal";
  saladetunoeuf.textContent = "3dham";
  saladetunolive.textContent = "Zitoun";
  saladetunhuile.textContent = "Zit";
  saladetuncitron.textContent = "9ares";
  saladetunsel.textContent = "Melh";
  saladetunpoivre.textContent = "Felfel akhal";
  saladetunfermer.textContent = "Sakker";

  ojja1.textContent = "3jja";
  ojja2.textContent = "20 d9aye9 • Sehla • 10 DT";
  ojjavoir.textContent = "Chouf lbox";
  ojja3.textContent = "3jja";
  ojjaoeuf.textContent = "3dham";
  ojjatomate.textContent = "Tmatim";
  ojjahuile.textContent = "Zit";
  ojjaail.textContent = "Thoum";
  ojjapiment.textContent = "Felfel";
  ojjaonion.textContent = "Bsal";
  ojjasel.textContent = "Melh";
  ojjapoivre.textContent = "Felfel akhal";
  ojjamerguez.textContent = "Merguez";
  ojjafermer.textContent = "Sakker";

  pasta1.textContent = "Ma9rouna";
  pasta2.textContent = "25 d9aye9 • Sehla • 10 DT";
  pastavoir.textContent = "Chouf lbox";
  pasta3.textContent = "Ma9rouna";
  pastapate.textContent = "Ma9rouna";
  pastatomate.textContent = "Tmatim";
  pastasel.textContent = "Melh";
  pastapoivre.textContent = "Felfel akhal";
  pastahuile.textContent = "Zit";
  pastaonion.textContent = "Filfil";
  pastaail.textContent = "Thoum";
  pastalarwia.textContent = "Karwia";
  pastakorkom.textContent = "Korkom";
  pastaviande.textContent = "Lham";
  pastapoulet.textContent = "Djej";
  pastafermer.textContent = "Sakker";

  wrap2.textContent = "15 d9aye9 • Sehla • 10 DT";
  wrapvoir.textContent = "Chouf lbox";
  wrapsalade.textContent = "Slata";
  wrapsauce.textContent = "Sauce";
  wraptomate.textContent = "Tmatim";
  wrappoulet.textContent = "Djej";
  wrapescalope.textContent = "Escalope";
  wrapformage.textContent = "Fromaj";
  wrapsel.textContent = "Melh";
  wrappoivre.textContent = "Felfel akhal";
  wrapfermer.textContent = "Sakker";

  couscous1.textContent = "Kosksi";
  couscous2.textContent = "40 d9aye9 • S3iba • 10 DT";
  couscousvoir.textContent = "Chouf lbox";
  couscous3.textContent = "Kosksi";
  couscoussemoule.textContent = "Smid";
  couscousbatata.textContent = "Batata";
  couscouscarotte.textContent = "Sfineria";
  couscousonion.textContent = "Bsal";
  couscoustomate.textContent = "Tmatim";
  couscouspiment.textContent = "Felfel"
  couscoushuile.textContent = "Zit";
  couscouskorkom.textContent = "Korkom";
  couscouskarwia.textContent = "Karwia";
  couscoussel.textContent = "Melh";
  couscouspoivre.textContent = "Felfel akhal";
  couscouspoulet.textContent = "Djej";
  couscousviande.textContent = "Lham";
  couscousfermer.textContent = "Sakker";

  chapati2.textContent = "15 d9aye9 • Sehla • 10 DT";
  chapativoir.textContent = "Chouf lbox";
  chapatisauce.textContent = "Sauce";
  chapatiformage.textContent = "Fromaj";
  chapatisel.textContent = "Melh";
  chapatipoivre.textContent = "Felfel akhal";
  chapatioeuf.textContent = "3dham";
  chapatimaadnous.textContent = "Ma3dnous";
  chapatifermer.textContent = "Sakker";

  rouz1.textContent = "Rouz jerbi";
  rouz2.textContent = "35 d9aye9 • Metwasta • 10 DT";
  rouzvoir.textContent = "Chouf lbox";
  rouz3.textContent = "Rouz jerbi";
  rouzriz.textContent = "Rouz";
  rouzpoulet.textContent = "Djej";
  rouzviande.textContent = "Lham";
  rouzpoischiche.textContent = "Homs";
  rouzbatata.textContent = "Ma3dnous";
  rouzcarotte.textContent = "Sfineria";
  rouzonion.textContent = "Bsal";
  rouztomate.textContent = "Tmatim";
  rouzhuile.textContent = "Zit";
  rouzsel.textContent = "Melh";
  rouzpoivre.textContent = "Felfel akhal";
  rouzkorkom.textContent = "Korkom";
  rouzkarwia.textContent = "Karwia";
  rouzfermer.textContent = "Sakker";

  steak1.textContent = "Steak";
  steak2.textContent = "20 d9aye9 • Sehla • 10 DT";
  steakvoir.textContent = "Chouf lbox";
  steak3.textContent = "Steak";
  steakviande.textContent = "Lham";
  steaksel.textContent = "Melh";
  steakpoivre.textContent = "Felfel akhal";
  steakhuile.textContent = "Zit";
  steakbeurre.textContent = "Zibda";
  steakail.textContent = "Thoum";
  steakfermer.textContent = "Sakker";

  pizza.textContent = "15 d9aye9 • Sehla • 10 DT";
  pizzavoir.textContent = "Chouf lbox";
  pizzapate.textContent = "3jin pizza";
  pizzasauce.textContent = "Sauce tomate";
  pizzafromage.textContent = "Fromaj";
  pizzatomate.textContent = "Tmatim";
  pizzapoivron.textContent = "Felfel";
  pizzaonion.textContent = "Basal";
  pizzaolive.textContent = "Zitoun";
  pizzahuile.textContent = "Zit";
  pizzasel.textContent = "Melh";
  pizzapoivre.textContent = "Felfel akhal";
  pizzafermer.textContent = "Sakker";

  escalope1.textContent = "Escalope";
  escalope2.textContent = "15 d9aye9 • Sehla • 10 DT";
  escalopevoir.textContent = "Chouf lbox";
  escalope3.textContent = "Escalope";
  escalopeescalope.textContent = "Escalope";
  escalopesel.textContent = "Melh";
  escalopepoivre.textContent = "Felfel akhal";
  escalopeail.textContent = "Thoum";
  escalopehuile.textContent = "Zit";
  escalopeoeuf.textContent = "3dham";
  escalopechapelure.textContent = "Chapelure";
  escalopefarine.textContent = "Farina";
  escalopecitron.textContent = "9ares";
  escalopefermer.textContent = "Sakker";

  lablebi1.textContent = "20 d9aye9 • Metwasta • 10 DT";
  lablebivoir.textContent = "Chouf lbox";
  lablebipoischiche.textContent = "Homs";
  lablebiail.textContent = "Thoum";
  lablebihuile.textContent = "Zit";
  lablebisel.textContent = "Melh";
  lablebipoivre.textContent = "Felfel akhal";
  lablebipain.textContent = "Khobz";
  lablebioeuf.textContent = "3dham";
  lablebicitron.textContent = "9ares";
  lablebifermer.textContent = "Sakker";

  chakchouka1.textContent = "20 d9aye9 • Sehla • 10 DT";
  chakchoukavoir.textContent = "Chouf lbox";
  chakchoukatomate.textContent = "Tmatim";
  chakchoukapoivron.textContent = "Felfel";
  chakchoukaonion.textContent = "Basal";
  chakchoukaail.textContent = "Thoum";
  chakchoukaoeuf.textContent = "3dham";
  chakchoukahuile.textContent = "Zit";
  chakchoukasel.textContent = "Melh";
  chakchoukapoivre.textContent = "Felfel akhal";
  chakchoukapiment.textContent = "Salk"
  chakchoukafermer.textContent = "Sakker";

  mloukhia1.textContent = "45 d9aye9 • S3iba • 10 DT";
  mloukhiavoir.textContent = "Chouf lbox";
  mloukhiaviande.textContent = "Lham";
  mloukhiahuile.textContent = "Zit";
  mloukhiaail.textContent = "Thoum";
  mloukhiarand.textContent = "Rand";
  mloukhiasel.textContent = "Melh";
  mloukhiapoivre.textContent = "Felfel akhal";
  mloukhiakarwia.textContent = "Karwia";
  mloukhiafermer.textContent = "Sakker";

  qleya1.textContent = "15 d9aye9 • Metwasta • 10 DT";
  qleyavoir.textContent = "Chouf lbox";
  qleyafoie.textContent = "Kebda";
  qleyaviande.textContent = "Lham";
  qleyahuile.textContent = "Zit";
  qleyaail.textContent = "Thoum";
  qleyasel.textContent = "Melh";
  qleyapoivre.textContent = "Felfel akhal";
  qleyakorkom.textContent = "Korkom";
  qleyapiment.textContent = "Bsal";
  qleyafermer.textContent = "Sakker";

  marka1.textContent = "20 d9aye9 • Metwasta • 10 DT";
  markavoir.textContent = "Chouf lbox";
  markaviande.textContent = "Lham";
  markapoulet.textContent = "Djej";
  markaonion.textContent = "Bsal";
  markatomate.textContent = "Tmatim";
  markahuile.textContent = "Zit";
  markabatata.textContent = "Batata";
  markacarotte.textContent = "Sfineria";
  markapoischiche.textContent = "Homs";
  markaail.textContent = "Thoum";
  markasel.textContent = "Melh";
  markapoivre.textContent = "Felfel akhal";
  markakorkom.textContent = "Korkom";
  markafermer.textContent = "Sakker";

  lazania1.textContent = "25 d9aye9 • S3iba • 10 DT";
  lazaniavoir.textContent = "Chouf lbox";
  lazaniaviande.textContent = "Lham mafroum";
  lazaniasauce.textContent = "Sauce tomate";
  lazaniaonion.textContent = "Bsal";
  lazaniaail.textContent = "Thoum";
  lazaniafromage.textContent = "Fromaj";
  lazanialait.textContent = "7lib";
  lazaniabeurre.textContent = "Zibda";
  lazaniafarine.textContent = "Farina";
  lazaniahuile.textContent = "Zit";
  lazaniasel.textContent = "Melh";
  lazaniapoivre.textContent = "Felfel akhal";
  lazaniafermer.textContent = "Sakker";

  qolla1.textContent = "5 d9aye9 • Sehla • 10 DT";
  qollavoir.textContent = "Chouf lbox";
  qollaamande.textContent = "Louz";
  qollanoisette.textContent = "Noisette";
  qollapistache.textContent = "Fost9";
  qollamiel.textContent = "3ssel";
  qollabonbon.textContent = "7aloua";
  qollafruitsec.textContent = "Fwekeh jeffa";
  qollafermer.textContent = "Sakker";

  zrir1.textContent = "15 d9aye9 • Metwasta • 10 DT";
  zrirvoir.textContent = "Chouf lbox";
  zrirsesame.textContent = "Jeljlen";
  zriramande.textContent = "Louz";
  zrirnoisette.textContent = "Noisette";
  zrirpistache.textContent = "Fost9";
  zrirmiel.textContent = "3ssel";
  zrirhuile.textContent = "Zit";
  zrirsucre.textContent = "Sokkar";
  zrirfermer.textContent = "Sakker";

  zgougou1.textContent = "20 d9aye9 • Metwasta • 10 DT";
  zgougouvoir.textContent = "Chouf lbox";
  zgougoufarine.textContent = "Farina";
  zgougousucre.textContent = "Sokkar";
  zgougoulait.textContent = "7lib";
  zgougoucreme.textContent = "Creme";
  zgougouamande.textContent = "Louz";
  zgougounoisette.textContent = "Noisette";
  zgougoupistache.textContent = "Fost9";
  zgougoupignon.textContent = "Bond9";
  zgougoufermer.textContent = "Sakker";

  assida1.textContent = "20 d9aye9 • Metwasta • 10 DT";
  assidavoir.textContent = "Chouf lbox";
  assidasemoule.textContent = "Ferina";
  assidasel.textContent = "Melh";
  assidahuile.textContent = "Zit";
  assidasucre.textContent = "Sokkar";
  assidamiel.textContent = "3ssel";
  assidadatte.textContent = "Tmar";
  assidafermer.textContent = "Sakker";

  bsissa1.textContent = "10 d9aye9 • Sehla • 10 DT";
  bsissavoir.textContent = "Chouf lbox";
  bsissahuile.textContent = "Zit";
  bsissasucre.textContent = "Sokkar";
  bsissadatte.textContent = "Tmar";
  bsissaamande.textContent = "Louz";
  bsissanoisette.textContent = "Noisette";
  bsissafermer.textContent = "Sakker";

  masfouf1.textContent = "15 d9aye9 • Sehla • 10 DT";
  masfoufvoir.textContent = "Chouf lbox";
  masfoufcouscous.textContent = "Kosksi";
  masfoufhuile.textContent = "Zit";
  masfoufsucre.textContent = "Sokkar";
  masfoufdatte.textContent = "Tmar";
  masfoufamande.textContent = "Louz";
  masfouflait.textContent = "7lib";
  masfoufsel.textContent = "Melh";
  masfouffermer.textContent = "Sakker";

  khobzethwe1.textContent = "10 d9aye9 • Sehla • 10 DT";
  khobzethwevoir.textContent = "Chouf lbox";
  khobzethwebiscuit.textContent = "Biscuit";
  khobzethwecaffe.textContent = "9ahwa";
  khobzethwecreme.textContent = "Creme";
  khobzethwelait.textContent = "7lib";
  khobzethwefruitsec.textContent = "Fewekih jeffa";
  khobzethwefermer.textContent ="Sakker";

  com.textContent = "Kifeh tekhdem ?";
  stp1.textContent = "Ingrédients hadhrin";
  stp2.textContent = "Tab3 lmar7el";
  stp3.textContent = "Sahha w b chfee";
  fin.textContent = "© 2026 TabkhaExpress – projet taleb – Ghassen Ben Nasr";

currentFlag.src = "assets/icons/tn.jfif";
currentText.textContent = "DRJ";
};


let cart = [];
let total = 0;

const voirBtns = document.querySelectorAll(".voir-btn");
const closeBtns = document.querySelectorAll(".close-btn");
const addBtns = document.querySelectorAll(".cart-add");

const searchInput = document.getElementById("rech");
const boxes = document.querySelectorAll(".box-item");

const filtreBtn = document.getElementById("filtre");
const filtreMenu = document.getElementById("filtre-menu");
const showAll = document.getElementById("show-all");
const showEntree = document.getElementById("show-entree");
const showPlat = document.getElementById("show-plat");
const showDessert = document.getElementById("show-dessert");

const contactBtn = document.getElementById("contact");
const popup = document.getElementById("contact-popup");
const loginPopup = document.getElementById("login-popup");
const signupPopup = document.getElementById("signup-popup");
const closeLogin = document.getElementById("closeLogin");
const closeSignup = document.getElementById("closeSignup");

const goSignup = document.getElementById("go-signup");
const goLogin = document.getElementById("go-login");

const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");

const cartBtn = document.getElementById("cartBtn");
const closeCart = document.getElementById("closeCart");
const cartPopup = document.getElementById("cartPopup");
const cartItemsList = document.getElementById("cartItems");
const totalEl = document.getElementById("total");


// FLIP CARTES

voirBtns.forEach(btn => {
  btn.onclick = () => {
    const card = btn.closest(".card");
    card.classList.add("flip");
  };
});

closeBtns.forEach(btn => {
  btn.onclick = () => {
    const card = btn.closest(".card");
    card.classList.remove("flip");
  };
});


// RECHERCHE

searchInput.addEventListener("keyup", () => {
  const value = searchInput.value.toLowerCase().trim();
  boxes.forEach(box => {
    const name = box.dataset.name.toLowerCase();
    box.style.display = name.includes(value) ? "block" : "none";
  });
});


// FILTRE

filtreBtn.onclick = e => {
  e.preventDefault();
  filtreMenu.style.display = filtreMenu.style.display === "flex" ? "none" : "flex";
};

showAll.onclick = () => boxes.forEach(b => b.style.display = "block");
showEntree.onclick = () => boxes.forEach(b => b.style.display = (b.dataset.type === "entree") ? "block" : "none");
showPlat.onclick = () => boxes.forEach(b => b.style.display = (b.dataset.type === "plat") ? "block" : "none");
showDessert.onclick = () => boxes.forEach(b => b.style.display = (b.dataset.type === "dessert") ? "block" : "none");

t5.onclick = () => boxes.forEach(b => b.style.display = (b.dataset.time == 5) ? "block" : "none");
t10.onclick = () => boxes.forEach(b => b.style.display = (b.dataset.time == 10) ? "block" : "none");
t15.onclick = () => boxes.forEach(b => b.style.display = (b.dataset.time == 15) ? "block" : "none");
t20.onclick = () => boxes.forEach(b => b.style.display = (b.dataset.time == 20) ? "block" : "none");
t30.onclick = () => boxes.forEach(b => b.style.display = (b.dataset.time >= 30) ? "block" : "none");


// CONTACT

contactBtn.onclick = e => {
  e.preventDefault();
  popup.style.display = "flex";
};
closeContact.onclick = () => popup.style.display = "none";


// LOG/SIG

log.onclick = e => {
  const user = localStorage.getItem("user");
  if(user){
    e.preventDefault();
    if(confirm("Se déconnecter ?")){
      localStorage.removeItem("user");
      log.textContent = "Log in";
      log.classList.remove("connected");
    }
  } else {
    e.preventDefault();
    loginPopup.style.display = "flex";
  }
};

sign.onclick = e => { e.preventDefault(); signupPopup.style.display = "flex"; };
closeLogin.onclick = () => loginPopup.style.display = "none";
closeSignup.onclick = () => signupPopup.style.display = "none";

goSignup.onclick = e => {
  e.preventDefault();
  loginPopup.style.display = "none";
  signupPopup.style.display = "flex";
};
goLogin.onclick = e => {
  e.preventDefault();
  signupPopup.style.display = "none";
  loginPopup.style.display = "flex";
};

signupBtn.onclick = () => {
  const user = document.getElementById("signup-user").value.trim();
  const pass = document.getElementById("signup-pass").value;
  const pass2 = document.getElementById("signup-pass2").value;

  if(!user || !pass) return alert("Veuillez remplir tous les champs");
  if(pass !== pass2) return alert("Les mots de passe ne correspondent pas");

  let users = JSON.parse(localStorage.getItem("users") || "{}");
  if(users[user]) return alert("Nom d'utilisateur déjà utilisé");

  users[user] = pass;
  localStorage.setItem("users", JSON.stringify(users));
  alert("Compte créé avec succès !");
  signupPopup.style.display = "none";
  document.getElementById("login-user").value = user;
};

loginBtn.onclick = () => {
  const user = document.getElementById("login-user").value.trim();
  const pass = document.getElementById("login-pass").value;

  let users = JSON.parse(localStorage.getItem("users") || "{}");
  if(users[user] && users[user] === pass){
    localStorage.setItem("user", user);
    alert("Bienvenue " + user);
    log.textContent = "👤 " + user;
    log.classList.add("connected");
    loginPopup.style.display = "none";
  } else {
    alert("Utilisateur ou mot de passe incorrect");
  }
};

window.onload = () => {
  const user = localStorage.getItem("user");
  if(user){
    log.textContent = "👤 " + user;
    log.classList.add("connected");
  }
};


// PANIER

function updateCart() {
  cartItemsList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item + " - 10 dt";
    cartItemsList.appendChild(li);
  });
  totalEl.textContent = total;
}

addBtns.forEach(btn => {
  btn.onclick = () => {
    const box = btn.closest(".box-item");
    const name = box.querySelector("h3").innerText;

    const img = box.querySelector("img");
    const clone = img.cloneNode(true);
    const rect = img.getBoundingClientRect();
    clone.style.position = "fixed";
    clone.style.top = rect.top + "px";
    clone.style.left = rect.left + "px";
    clone.style.width = "100px";
    clone.style.transition = "all 0.8s ease";
    document.body.appendChild(clone);

    const cartRect = cartBtn.getBoundingClientRect();
    setTimeout(() => {
      clone.style.top = cartRect.top + "px";
      clone.style.left = cartRect.left + "px";
      clone.style.width = "20px";
      clone.style.opacity = "0.5";
    }, 50);
    setTimeout(() => clone.remove(), 800);

    cart.push(name);
    total += 10;
    updateCart();

    btn.classList.add("shake");
    setTimeout(() => btn.classList.remove("shake"), 300);
    cartBtn.classList.add("shake");
    setTimeout(() => cartBtn.classList.remove("shake"), 300);
  };
});

document.getElementById("buy").addEventListener("click", function() {
    alert("Commande passée avec succès ! Attendez un appel pour confirmer la commande.");
});

cartBtn.onclick = () => cartPopup.style.display = "flex";
closeCart.onclick = () => cartPopup.style.display = "none";


// AIDE

document.getElementById("help").onclick = () => {
  if (currentText.textContent == "FR") {
    alert(
      "Utilisation :\n\n" +
      "1. Choisir une box\n" +
      "2. Voir les ingrédients\n" +
      "3. Ajouter au panier\n" +
      "4. Utiliser filtre pour trouver plus vite"
    );
  }
  if (currentText.textContent == "EN") {
    alert(
      "Usage :\n\n" +
      "1. Select the box\n" +
      "2. See the ingredients\n" +
      "3. Add to cart\n" +
      "4. Use filters to get the box fast"
    );
  }
  if (currentText.textContent == "DRJ") {
    alert(
      "Isti3mel :\n\n" +
      "1. I5tar l box\n" +
      "2. Chouf les ingredients\n" +
      "3. Ziha lil pannier\n" +
      "4. Ista3mil filtrouet bch tal9a fisa3"
    );
  }

};
