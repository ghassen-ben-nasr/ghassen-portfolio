#include <iostream>
#include <limits>
#include "boycottnet.h"

using namespace std;

void clearInput() {
    cin.clear();
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
}

bool login() {
    string mdp;
    cout << "Entrez le mot de passe : ";
    cin >> mdp;
    if (mdp == "palestine") return true;

    cout << "Mot de passe incorrect.\n";
    return false;
}

void afficherArticles() {
    cout << "\n=== Articles sur la Palestine et le boycott ===\n\n";
    cout << "Article 1 : Contexte du conflit israélo-palestinien\n";
    cout << "La Palestine est confrontee a une occupation...\n\n";
    cout << "Article 2 : Pourquoi boycotter certaines entreprises ?\n";
    cout << "Certaines entreprises financent ou collaborent...\n\n";
    cout << "Article 3 : Impact du boycott et soutien international\n";
    cout << "Le boycott economique est un moyen pacifique...\n\n";
}

void afficherQuotes() {
    cout << "\n=== Citations de soutien à la Palestine ===\n\n";
    cout << "\"La liberte de la Palestine est une question de justice.\"\n";
    cout << "\"Chaque geste de solidarite compte.\"\n";
    cout << "\"Boycotter est un moyen pacifique de resistance.\"\n";
    cout << "\"Soutenir la Palestine, c'est soutenir les droits humains.\"\n";
}

int main()
{
    ProduitsBoycottes PB;
    ProduitsAlternatifs PA;
    SitesBoycotts SB;
    SitesAlternatifs SA;

    // ======== PRODUITS À BOYCOTTER ========
    PB.PBoycottes_.push_back(Produit("ChocoDeluxe", "1234567890123", "Collaboration avec entreprises controversées"));
    PB.PBoycottes_.push_back(Produit("FreshCola", "5412398765432", "Soutien financier indirect"));
    PB.PBoycottes_.push_back(Produit("UltraSnack", "8901234567890", "Partenariats discutés"));
    PB.PBoycottes_.push_back(Produit("MilkUp", "2233445566778", "Approvisionnement contesté"));
    PB.PBoycottes_.push_back(Produit("SweetDrink", "3322114455667", "Filiale associée"));
    PB.PBoycottes_.push_back(Produit("MegaCrunch", "7654321098765", "Production liée"));
    PB.PBoycottes_.push_back(Produit("CaféPrime", "9988776655443", "Investisseurs impliqués"));
    PB.PBoycottes_.push_back(Produit("SparkWater", "1122334455667", "Groupe propriétaire controversé"));
    PB.PBoycottes_.push_back(Produit("GoldBar", "5566778899001", "Chaîne d’approvisionnement problématique"));
    PB.PBoycottes_.push_back(Produit("NutriBiscuit", "7788990011223", "Partenaire financier"));
    PB.PBoycottes_.push_back(Produit("ChocoMax", "6677889900112", "Implication indirecte"));
    PB.PBoycottes_.push_back(Produit("IceFresh", "8899001122334", "Relations commerciales"));
    PB.PBoycottes_.push_back(Produit("VitalJuice", "3344556677889", "Sous-traitant lié"));
    PB.PBoycottes_.push_back(Produit("CrispyBites", "4455667788990", "Participation d’un groupe contesté"));
    PB.PBoycottes_.push_back(Produit("QuickSoup", "9900112233445", "Investissement croisé"));
    PB.PBoycottes_.push_back(Produit("SuperTea", "5500112233445", "Holding avec implication"));
    PB.PBoycottes_.push_back(Produit("EnergyPlus", "7700112233446", "Réseau de distribution"));
    PB.PBoycottes_.push_back(Produit("FruityMix", "3300223344556", "Entreprise affiliée"));
    PB.PBoycottes_.push_back(Produit("HoneyCrunch", "4400334455667", "Capital partagé"));
    PB.PBoycottes_.push_back(Produit("PastaPrime", "1200345566778", "Fournisseur indirect impliqué"));
    // Produits boycotés
    PB.PBoycottes_.push_back(Produit("Coca-Cola", "5449000000996", "Entreprise accusée de soutenir des activités économiques dans des zones occupées."));
    PB.PBoycottes_.push_back(Produit("Starbucks", "7622210449283", "Ancien soutien déclaré à des structures pro-israéliennes."));
    PB.PBoycottes_.push_back(Produit("McDonald's", "735000000267", "Soutien logistique à l'armée israélienne."));
    PB.PBoycottes_.push_back(Produit("Nestlé", "7613032579335", "Investissements passés dans des entreprises impliquées en Israël."));
    PB.PBoycottes_.push_back(Produit("Kinder", "8000500037563", "Financements indirects selon des ONG."));

    // Produits alternatifs
    PA.PAlternatifs_.push_back(Produit("Mecca Cola", "6091023000015", "Marque engagée pour la Palestine."));
    PA.PAlternatifs_.push_back(Produit("ZamZam Cola", "896400009876", "Alternative éthique."));
    PA.PAlternatifs_.push_back(Produit("Hamoud Boualem", "6112345007893", "Entreprise maghrébine indépendante."));
    PA.PAlternatifs_.push_back(Produit("Ulker", "8680000201234", "Entreprise turque sans collaboration problématique."));
    PA.PAlternatifs_.push_back(Produit("Ifri", "6111203004559", "Produit algérien indépendant."));

    // Sites boycotés
    SB.SBoycottes_.push_back(Site("McDonald's Israel", "www.mcdonalds.co.il", "Soutien logistique à l'armée israélienne."));
    SB.SBoycottes_.push_back(Site("Starbucks Israel", "www.starbucks.co.il", "Collaboration économique problématique."));
    SB.SBoycottes_.push_back(Site("Nestlé Israel", "www.nestle.co.il", "Financement d'activités liées aux colonies."));
    SB.SBoycottes_.push_back(Site("Carrefour Israel", "www.carrefour.co.il", "Présence dans des colonies illégales."));

    // Sites alternatifs
    SA.SAlternatifs_.push_back(Site("BDS Movement", "www.bdsmovement.net", "Appel international au boycott."));
    SA.SAlternatifs_.push_back(Site("Palestine Chronicle", "www.palestinechronicle.com", "Informations indépendantes."));
    SA.SAlternatifs_.push_back(Site("Middle East Monitor", "www.middleeastmonitor.com", "Actualité détaillée sur la Palestine."));
    SA.SAlternatifs_.push_back(Site("Quds News", "www.qudsn.co", "Média palestinien indépendant."));


    // ======== PRODUITS ALTERNATIFS ========
    PA.PAlternatifs_.push_back(Produit("BioPure", "2011223344556", "Produit local et éthique"));
    PA.PAlternatifs_.push_back(Produit("GreenTeaNatural", "3011223344557", "Fabrication artisanale"));
    PA.PAlternatifs_.push_back(Produit("OasisBioJuice", "9011223344558", "Marque indépendante"));
    PA.PAlternatifs_.push_back(Produit("EcoSnack", "4112233445566", "Coopérative locale"));
    PA.PAlternatifs_.push_back(Produit("FreshFarmMilk", "5112233445567", "Ferme communautaire"));
    PA.PAlternatifs_.push_back(Produit("PureCrunch", "6112233445568", "Sans filiales problématiques"));
    PA.PAlternatifs_.push_back(Produit("NatureBiscuit", "7112233445569", "Production durable"));
    PA.PAlternatifs_.push_back(Produit("HerbalWater", "8112233445570", "Sans groupes controversés"));
    PA.PAlternatifs_.push_back(Produit("VitalCereal", "9112233445571", "Produit responsable"));
    PA.PAlternatifs_.push_back(Produit("SunnyHoney", "2211223344556", "Apiculteurs indépendants"));
    PA.PAlternatifs_.push_back(Produit("CocoSoft", "3311223344557", "Entreprise équitable"));
    PA.PAlternatifs_.push_back(Produit("EcoBar", "4411223344558", "Production transparente"));
    PA.PAlternatifs_.push_back(Produit("FruityJoy", "5511223344559", "Coopérative locale"));
    PA.PAlternatifs_.push_back(Produit("PastaBio", "6611223344560", "Agriculture biologique"));
    PA.PAlternatifs_.push_back(Produit("LocalTea", "7711223344561", "Fabrication artisanale"));
    PA.PAlternatifs_.push_back(Produit("NatureCola", "8811223344562", "100% indépendant"));
    PA.PAlternatifs_.push_back(Produit("FreeSnack", "9911223344563", "Petite entreprise locale"));
    PA.PAlternatifs_.push_back(Produit("MountainWater", "1122334455001", "Source naturelle"));
    PA.PAlternatifs_.push_back(Produit("OrganicMix", "1132334455002", "Label écologique"));
    PA.PAlternatifs_.push_back(Produit("SunnyChoco", "1142334455003", "Chocolaterie artisanale"));

    // ======== SITES À BOYCOTTER ========
    SB.SBoycottes_.push_back(Site("MegaMarket.com", "www.megamarket.com", "Plateforme appartenant à un groupe controversé"));
    SB.SBoycottes_.push_back(Site("FastShop.net", "www.fastshop.net", "Partenariats problématiques"));
    SB.SBoycottes_.push_back(Site("PrimeFoodStore.org", "www.primefoodstore.org", "Filiale contestée"));
    SB.SBoycottes_.push_back(Site("GlobalTecShop.com", "www.globaltecshop.com", "Investisseurs impliqués"));
    SB.SBoycottes_.push_back(Site("PowerElectro.net", "www.powerelectro.net", "Relations commerciales"));
    SB.SBoycottes_.push_back(Site("DailyDrinkStore.org", "www.dailydrinkstore.org", "Groupe financier lié"));
    SB.SBoycottes_.push_back(Site("SpeedyFashion.com", "www.speedyfashion.com", "Chaîne avec partenariats"));
    SB.SBoycottes_.push_back(Site("NovaElectronics.net", "www.novaelectronics.net", "Société mère controversée"));
    SB.SBoycottes_.push_back(Site("MegaStyle.org", "www.megastyle.org", "Production liée"));
    SB.SBoycottes_.push_back(Site("SuperMarket24.com", "www.supermarket24.com", "Collaboration indirecte"));
    SB.SBoycottes_.push_back(Site("ElectroPlus.net", "www.electroplus.net", "Relations d'investissement"));
    SB.SBoycottes_.push_back(Site("FreshOnlineShop.org", "www.freshonlineshop.org", "Filiale associée"));
    SB.SBoycottes_.push_back(Site("GoldTechShop.com", "www.goldtechshop.com", "Participation d’un groupe contesté"));
    SB.SBoycottes_.push_back(Site("SnackWorld.net", "www.snackworld.net", "Approvisionnement problématique"));
    SB.SBoycottes_.push_back(Site("HyperStore.org", "www.hyperstore.org", "Réseau de distribution"));
    SB.SBoycottes_.push_back(Site("TopMegaMarket.com", "www.topmegamarket.com", "Groupe propriétaire impliqué"));
    SB.SBoycottes_.push_back(Site("FoodLine.net", "www.foodline.net", "Sous-traitance liée"));
    SB.SBoycottes_.push_back(Site("WebDrinkStore.org", "www.webdrinkstore.org", "Affiliations commerciales"));
    SB.SBoycottes_.push_back(Site("TechZonePlus.com", "www.techzoneplus.com", "Holding problématique"));
    SB.SBoycottes_.push_back(Site("GlobalFashion.net", "www.globalfashion.net", "Participation indirecte"));

    // ======== SITES ALTERNATIFS ========
    SA.SAlternatifs_.push_back(Site("EthicalMarket.org", "www.ethicalmarket.org", "Marketplace éthique"));
    SA.SAlternatifs_.push_back(Site("LocalShop.tn", "www.localshop.tn", "Plateforme locale"));
    SA.SAlternatifs_.push_back(Site("BioStore.com", "www.biostore.com", "Produits responsables"));
    SA.SAlternatifs_.push_back(Site("GreenMarket.net", "www.greenmarket.net", "Entreprises durables"));
    SA.SAlternatifs_.push_back(Site("PureFoodOnline.org", "www.purefoodonline.org", "Produits locaux"));
    SA.SAlternatifs_.push_back(Site("ArtisanShop.tn", "www.artisanshop.tn", "Artisans indépendants"));
    SA.SAlternatifs_.push_back(Site("NaturalTech.org", "www.naturaltech.org", "Matériel éthique"));
    SA.SAlternatifs_.push_back(Site("CleanFashion.net", "www.cleanfashion.net", "Mode éthique"));
    SA.SAlternatifs_.push_back(Site("FreshFarmStore.com", "www.freshfarmstore.com", "Produits fermiers"));
    SA.SAlternatifs_.push_back(Site("EcoProducts.tn", "www.ecoproducts.tn", "Commerce responsable"));
    SA.SAlternatifs_.push_back(Site("HandmadeMarket.org", "www.handmademarket.org", "Production artisanale"));
    SA.SAlternatifs_.push_back(Site("FairTradeShop.net", "www.fairtradeshop.net", "Vente équitable"));
    SA.SAlternatifs_.push_back(Site("OrganicCenter.com", "www.organiccenter.com", "Produits bio"));
    SA.SAlternatifs_.push_back(Site("LocalMarketPlus.tn", "www.localmarketplus.tn", "Plateforme régionale"));
    SA.SAlternatifs_.push_back(Site("CraftStore.org", "www.craftstore.org", "Artisans locaux"));
    SA.SAlternatifs_.push_back(Site("BioCosmetics.net", "www.biocosmetics.net", "Cosmétiques naturels"));
    SA.SAlternatifs_.push_back(Site("EcoElectroStore.com", "www.ecoelectrostore.com", "Matériel indépendant"));
    SA.SAlternatifs_.push_back(Site("NatureShop.org", "www.natureshop.org", "Produits naturels"));
    SA.SAlternatifs_.push_back(Site("GreenLocalStore.tn", "www.greenlocalstore.tn", "Petite entreprise locale"));
    SA.SAlternatifs_.push_back(Site("PureLifeMarket.net", "www.purelifemarket.net", "Produits sains"));


    int choix = -1;

    while (choix != 0) {

        cout << "\n=========== MENU PRINCIPAL ===========\n";
        cout << "1. Admin\n";
        cout << "2. Utilisateur\n";
        cout << "0. Quitter\n";
        cout << "======================================\n";
        cout << "Votre choix : ";
        cin >> choix;
        clearInput(); // FIX : nettoie le buffer

        switch (choix) {

        case 1: {
            if (!login()) break;

            int choixAdmin = -1;
            while (choixAdmin != 0) {

                cout << "\n=============== ADMIN ===============\n";
                cout << "1. Ajouter\n";
                cout << "2. Supprimer\n";
                cout << "0. Quitter\n";
                cout << "=====================================\n";
                cout << "Votre choix : ";
                cin >> choixAdmin;
                clearInput(); // FIX

                switch (choixAdmin) {

                case 1: {
                    int typeAjout;
                    cout << "\n--- Ajouter ---\n";
                    cout << "1. Produit\n";
                    cout << "2. Site\n";
                    cout << "Votre choix : ";
                    cin >> typeAjout;
                    clearInput(); // FIX

                    switch (typeAjout) {

                    case 1: {
                        int typeProd;
                        cout << "1. Boycott\n";
                        cout << "2. Alternatif\n";
                        cout << "Votre choix : ";
                        cin >> typeProd;
                        clearInput(); // FIX

                        if (typeProd == 1) PB.ajouter();
                        else if (typeProd == 2) PA.ajouter();
                        else cout << "Choix invalide.\n";

                        break;
                    }

                    case 2: {
                        int typeSite;
                        cout << "1. Boycott\n";
                        cout << "2. Alternatif\n";
                        cout << "Votre choix : ";
                        cin >> typeSite;
                        clearInput(); // FIX

                        if (typeSite == 1) SB.ajouter();
                        else if (typeSite == 2) SA.ajouter();
                        else cout << "Choix invalide.\n";

                        break;
                    }

                    default: cout << "Choix invalide.\n";
                    }

                    break;
                }

                case 2: {
                    int typeSupp;
                    cout << "\n--- Supprimer ---\n";
                    cout << "1. Produit\n";
                    cout << "2. Site\n";
                    cout << "Votre choix : ";
                    cin >> typeSupp;
                    clearInput(); // FIX

                    switch (typeSupp) {

                    case 1: {
                        int typeProd;
                        cout << "1. Boycott\n";
                        cout << "2. Alternatif\n";
                        cout << "Votre choix : ";
                        cin >> typeProd;
                        clearInput(); // FIX

                        if (typeProd == 1) PB.supprimer();
                        else if (typeProd == 2) PA.supprimer();
                        else cout << "Choix invalide.\n";

                        break;
                    }

                    case 2: {
                        int typeSite;
                        cout << "1. Boycott\n";
                        cout << "2. Alternatif\n";
                        cout << "Votre choix : ";
                        cin >> typeSite;
                        clearInput(); // FIX

                        if (typeSite == 1) SB.supprimer();
                        else if (typeSite == 2) SA.supprimer();
                        else cout << "Choix invalide.\n";

                        break;
                    }

                    default: cout << "Choix invalide.\n";
                    }

                    break;
                }

                }
            }

            break;
        }

        case 2: {

            int choixUser = -1;
            while (choixUser != 0) {

                cout << "\n============== UTILISATEUR ==============\n";
                cout << "1. Vérifier\n";
                cout << "2. Afficher\n";
                cout << "3. Se cultiver\n";
                cout << "0. Quitter\n";
                cout << "=========================================\n";
                cout << "Votre choix : ";
                cin >> choixUser;
                clearInput(); // FIX

                switch (choixUser) {

                case 1: {
                    int typeVerif;
                    cout << "\n--- Vérifier ---\n";
                    cout << "1. Produit\n";
                    cout << "2. Site\n";
                    cout << "Votre choix : ";
                    cin >> typeVerif;
                    clearInput();

                    switch (typeVerif) {

                    case 1: {
                        int vp;
                        cout << "1. Code-barres\n";
                        cout << "2. Nom\n";
                        cout << "Votre choix : ";
                        cin >> vp;
                        clearInput();

                        if (vp == 1) PB.verif_code();
                        else if (vp == 2) PB.verif_nom();
                        else cout << "Choix invalide.\n";

                        break;
                    }

                    case 2: {
                        int vs;
                        cout << "1. URL\n";
                        cout << "2. Nom\n";
                        cout << "Votre choix : ";
                        cin >> vs;
                        clearInput();

                        if (vs == 1) SB.verif_url();
                        else if (vs == 2) SB.verif_nom();
                        else cout << "Choix invalide.\n";

                        break;
                    }

                    default: cout << "Choix invalide.\n";
                    }

                    break;
                }

                case 2: {
                    int typeAff;
                    cout << "\n--- Afficher ---\n";
                    cout << "1. Produits\n";
                    cout << "2. Sites\n";
                    cout << "Votre choix : ";
                    cin >> typeAff;
                    clearInput();

                    switch (typeAff) {

                    case 1: {
                        int ap;
                        cout << "1. Boycottés\n";
                        cout << "2. Alternatifs\n";
                        cout << "Votre choix : ";
                        cin >> ap;
                        clearInput();

                        if (ap == 1) PB.afficher();
                        else if (ap == 2) PA.afficher();
                        else cout << "Choix invalide.\n";

                        break;
                    }

                    case 2: {
                        int as;
                        cout << "1. Boycottés\n";
                        cout << "2. Alternatifs\n";
                        cout << "Votre choix : ";
                        cin >> as;
                        clearInput();

                        if (as == 1) SB.afficher();
                        else if (as == 2) SA.afficher();
                        else cout << "Choix invalide.\n";

                        break;
                    }

                    default: cout << "Choix invalide.\n";
                    }

                    break;
                }

                case 3: {
                    int sc;
                    cout << "\n--- Se cultiver ---\n";
                    cout << "1. Articles\n";
                    cout << "2. Citations\n";
                    cout << "Votre choix : ";
                    cin >> sc;
                    clearInput();

                    if (sc == 1) afficherArticles();
                    else if (sc == 2) afficherQuotes();
                    else cout << "Choix invalide.\n";

                    break;
                }

                default: cout << "Choix invalide.\n";
                }

            }
            break;
        }

        case 0:
            cout << "Au revoir !\n";
            break;

        default:
            cout << "Choix invalide !\n";
        }
    }

    return 0;
}
