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
    clearInput();
    return mdp == "palestine";
}

void afficherArticles() {
    cout << "\n=== Articles sur la Palestine et le boycott ===\n\n";
    cout << "Article 1 :\n";
    cout << "En 2005, 172 organisations de la societe palestinienne lancaient un appel a \nune campagne de Boycott, Desinvestissement et de Sanctions contre Israel \nvisant a contraindre cet Etat a respecter le droit international. L'appel \nfixe trois objectifs a la campagne : la fin de l'occupation et de la \ncolonisation de la Palestine, l'egalite des droits pour les Palestiniens \nd'Israel et l'application du droit au retour pour les refugies\n\n";

    cout << "Article 2 :\n";
    cout << "Une vague mondiale de boycott s'est propagee du Moyen-Orient et de la \nTurkiye vers l'Europe, en passant par l'Asie et au-dela, visant des \nmarques multinationales accusees de soutenir Israel dans sa guerre \ncontre Gaza. Des chaines de cafe aux geants des biens de consommation,\ndes entreprises autrefois considerees comme intouchables sont desormais\nconfrontees a une baisse de leurs ventes et a des atteintes a leur \nreputation. Les partisans considerent le mouvement de boycott comme une\nresistance populaire et une protestation morale contre des societes \npercues comme complices des actions d'Israel a l'encontre des Palestiniens.\n\n";

    cout << "Article 3 :\n";
    cout << "La facture de la guerre a Gaza est estimee a plusieurs milliards de\ndollars depuis son declenchement en octobre 2023, suivie, en juin \n2025, d'affrontements avec l'Iran. En plus du cout enorme de la \nguerre, le boycott a lourdement pese sur l'economie israelienne. \nCes dernieres semaines, les informations concernant des \nmultinationales ayant decide de retirer leurs investissements\nou d'arreter leurs collaborations avec Israel ont largement \ncircule sur plusieurs comptes Facebook\n\n";

    cout << "Article 4 :\n";
    cout << "Les discours indignes ne suffisent plus. Il faut passer a l'action\net briser l'impunite. La seule strategie qui a prouve son efficacite\ncontre un regime colonial d'apartheid repose sur le boycott, le\ndesinvestissement et les sanctions. En trois lettres: BDS.\nCe mouvement s'inspire directement de la lutte victorieuse contre\nl'Afrique du Sud raciste et segregationniste. Comme a l'epoque, ce\nn'est pas un slogan: c'est une strategie globale, coherente, portee\npar celles et ceux qui subissent l'oppression.\n\n";
}

void afficherQuotes() {
    cout << "\n=== Citations de soutien a la Palestine ===\n\n";
    cout << "\"La liberte de la Palestine est une question de justice.\"\n";
    cout << "\"Chaque geste de solidarite compte.\"\n";
    cout << "\"Boycotter est un moyen pacifique de resistance.\"\n";
    cout << "\"Soutenir la Palestine, c'est soutenir les droits humains.\"\n";
    cout << "\"La Palestine vivra tant que nous refusons d'etre silencieux.\"\n";
    cout << "\"Un peuple prive de liberte merite la solidarite du monde.\"\n";
    cout << "\"Le boycott est la voix de ceux a qui l'on refuse d'etre entendus.\"\n";
    cout << "\"La dignite n'a pas de frontieres : elle s'etend jusqu'a Gaza.\"\n";
    cout << "\"Dire non a l'injustice, c'est deja soutenir la Palestine.\"\n";
    cout << "\"Un monde juste commence par la defense des opprimes.\"\n";
    cout << "\"La solidarite avec la Palestine est un devoir humain.\"\n";
    cout << "\"La paix ne peut naitre que de l'egalite et du respect des droits.\"\n";
    cout << "\"Resister pacifiquement, c'est boycotter l'injustice.\"\n";
    cout << "\"Tant qu'un enfant pleure a Gaza, le monde n'est pas en paix.\"\n";
    cout << "\"La liberte d'un peuple n'est jamais negociable.\"\n";
    cout << "\"Le boycott est une arme morale contre l'oppression.\"\n";
    cout << "\"La justice pour la Palestine est un combat universel.\"\n";
    cout << "\"Le monde change quand les consciences se reveillent.\"\n";
    cout << "\"Aucune occupation ne dure face a la solidarite des peuples.\"\n";
    cout << "\"Soutenir la Palestine, c'est elever la voix pour la justice.\"\n";
}

int main() {
    ProduitsBoycottes PB;
    ProduitsAlternatifs PA;
    SitesBoycotts SB;
    SitesAlternatifs SA;

    PB.ajouter(Produit("Nestle", "5901234123457", "Entreprise boycottee pour sa politique en Palestine"));
    PB.ajouter(Produit("Coca-Cola", "8456789012346", "Entreprise boycottee pour son soutien indirect"));
    PB.ajouter(Produit("Pepsi", "7612345678902", "Entreprise boycottee pour ses filiales"));
    PB.ajouter(Produit("McDonald's", "4215678932104", "Soutien conteste a certaines operations"));
    PB.ajouter(Produit("Kellogg's", "3309876543215", "Partenariat conteste"));
    PB.ajouter(Produit("Mars", "9781234567897", "Soutien indirect"));
    PB.ajouter(Produit("Unilever", "5012349987120", "Entreprise impliquee"));
    PB.ajouter(Produit("Cadbury", "8801122334459", "Filiale controversee"));
    PB.ajouter(Produit("Mondelez", "6928374651208", "Soutien indirect"));
    PB.ajouter(Produit("Danone", "4009871236549", "Partenaire conteste"));
    PB.ajouter(Produit("Tyson Foods", "7356001234581", "Entreprise boycottee"));
    PB.ajouter(Produit("Perdue Farms", "5609988776654", "Soutien indirect"));
    PB.ajouter(Produit("Hormel Foods", "4823490012783", "Collaboration controversee"));
    PB.ajouter(Produit("Nestle KitKat", "8012345678125", "Filiale impliquee"));
    PB.ajouter(Produit("Starbucks", "5207765432108", "Soutien indirect"));
    PB.ajouter(Produit("Heinz", "6931200456783", "Entreprise boycottee"));
    PB.ajouter(Produit("Chiquita", "9123456009875", "Soutien conteste"));
    PB.ajouter(Produit("Dole", "3256007891236", "Entreprise impliquee"));
    PB.ajouter(Produit("General Mills", "0701234567894", "Soutien indirect"));
    PB.ajouter(Produit("Nestle Nesquik", "9501122334468", "Filiale contestee"));

    SB.ajouter(Site("Facebook", "www.facebook.com", "Soutien indirect a certaines activites contestees"));
    SB.ajouter(Site("Instagram", "www.instagram.com", "Entreprise impliquee dans des pratiques controversees"));
    SB.ajouter(Site("WhatsApp", "www.whatsapp.com", "Soutien indirect a certaines politiques"));
    SB.ajouter(Site("YouTube", "www.youtube.com", "Partenariats contestes"));
    SB.ajouter(Site("Twitter ", "www.twitter.com", "Entreprise impliquee dans certaines controverses"));
    SB.ajouter(Site("Netflix", "www.netflix.com", "Contenu ou partenariat discute"));
    SB.ajouter(Site("Amazon", "www.amazon.com", "Pratiques commerciales contestees"));
    SB.ajouter(Site("Google", "www.google.com", "Entreprise impliquee indirectement"));
    SB.ajouter(Site("Microsoft", "www.microsoft.com", "Partenariats controverses"));
    SB.ajouter(Site("Airbnb", "www.airbnb.com", "Presence dans des zones contestees"));
    SB.ajouter(Site("Intel", "www.intel.com", "Soutien indirect"));
    SB.ajouter(Site("HP", "www.hp.com", "Entreprise impliquee dans certaines filiales"));
    SB.ajouter(Site("Coca-Cola", "www.coca-cola.com", "Soutien indirect ou filiales problematiques"));
    SB.ajouter(Site("Nestle", "www.nestle.com", "Entreprise boycottee pour sa politique en Palestine"));
    SB.ajouter(Site("Unilever", "www.unilever.com", "Filiales controversees"));
    SB.ajouter(Site("Disney", "www.disney.com", "Soutien indirect a certaines pratiques"));
    SB.ajouter(Site("McDonald's", "www.mcdonalds.com", "Presence contestee dans certaines zones"));
    SB.ajouter(Site("Starbucks", "www.starbucks.com", "Soutien indirect a certaines activites"));
    SB.ajouter(Site("Chiquita", "www.chiquita.com", "Entreprise impliquee"));
    SB.ajouter(Site("Dole", "www.dole.com", "Soutien indirect a certaines filiales"));
    SB.ajouter(Site("Adidas", "www.adidas.com", "Entreprise impliquee"));
    SB.ajouter(Site("Nike", "www.nike.com", "Soutien indirect"));


    PA.ajouter(Produit("Delice", "6191234000015", "Produit tunisien, marque locale"));
    PA.ajouter(Produit("SICAM", "6191234000022", "Entreprise tunisienne independante"));
    PA.ajouter(Produit("Nutrina", "6191234000039", "Produit naturel et local"));
    PA.ajouter(Produit("Napolis", "6191234000046", "Marque tunisienne ethique"));
    PA.ajouter(Produit("Boga", "6191234000053", "Entreprise tunisienne, fabrication locale"));
    PA.ajouter(Produit("Saida", "6191234000060", "Produit tunisien responsable"));
    PA.ajouter(Produit("Al Waha", "6191234000077", "Marque locale et independante"));
    PA.ajouter(Produit("Carthage", "6191234000084", "Production locale et durable"));
    PA.ajouter(Produit("Zitouna", "6191234000091", "Produit tunisien artisanal"));
    PA.ajouter(Produit("Maison du Miel", "6191234000107", "Apiculture locale et independante"));
    PA.ajouter(Produit("Sanebil", "6191234000114", "Produit tunisien bio"));
    PA.ajouter(Produit("Ben Yeder", "6191234000121", "Entreprise locale ethique"));
    PA.ajouter(Produit("Nebli", "6191234000138", "Produit tunisien artisanal"));
    PA.ajouter(Produit("Grain d'Or", "6191234000145", "Marque tunisienne independante"));
    PA.ajouter(Produit("Viva", "6190345829173", "Boisson tunisienne"));
    PA.ajouter(Produit("Sidi Saad", "6196782345012", "Marque locale"));
    PA.ajouter(Produit("Choco Délice", "6198534217960", "Chocolats tunisiens"));
    PA.ajouter(Produit("Fructis", "6199087345621", "Marque tunisienne"));
    PA.ajouter(Produit("El Kef Conserves", "6193487201958", "Conserves tunisiennes"));
    PA.ajouter(Produit("Caprera", "6199820154376", "Pâtes tunisiennes"));
    PA.ajouter(Produit("Grano Vita", "6194529081374", "Pâtes locales"));


    SA.ajouter(Site("Mosaique FM", "www.mosaiquefm.net", "Alternative tunisienne aux reseaux internationaux"));
    SA.ajouter(Site("Nessma TV", "www.nessma.tv", "Plateforme media tunisienne"));
    SA.ajouter(Site("Shems FM", "www.shemsfm.net", "Media tunisien populaire"));
    SA.ajouter(Site("Kapitalis", "www.kapitalis.com", "Actualites tunisiennes"));
    SA.ajouter(Site("Business News", "www.businessnews.com.tn", "Portail d'information tunisien"));
    SA.ajouter(Site("Watania Replay", "www.watania1.tn", "Streaming tunisien officiel"));
    SA.ajouter(Site("El Hiwar Ettounsi", "www.elhiwarettounsi.com", "Chaine tunisienne en ligne"));
    SA.ajouter(Site("Hannibal TV", "www.hannibaltv.com.tn", "Streaming et programmes tunisiens"));
    SA.ajouter(Site("Mosaique TV", "www.mosaiquefm.net/tv", "Videos et streaming tunisien"));
    SA.ajouter(Site("Jawhara FM", "www.jawharafm.net", "Radio tunisienne en ligne"));
    SA.ajouter(Site("Jumia Tunisie", "www.jumia.com.tn", "Alternative tunisienne a Amazon"));
    SA.ajouter(Site("MyTek", "www.mytek.tn", "E-commerce informatique tunisien"));
    SA.ajouter(Site("TunisieNet", "www.tunisianet.com.tn", "Boutique informatique tunisienne"));
    SA.ajouter(Site("Tdiscount", "www.tdiscount.tn", "Marketplace tunisienne"));
    SA.ajouter(Site("Founa", "www.founa.com", "E-commerce tunisien generaliste"));
    SA.ajouter(Site("Shoppex", "www.shoppex.tn", "Marketplace tunisienne variee"));
    SA.ajouter(Site("ClickToBuy", "www.clicktobuy.tn", "Boutique en ligne tunisienne"));
    SA.ajouter(Site("TechnoSoft", "www.technosoft.com.tn", "Boutique informatique locale"));
    SA.ajouter(Site("ZitounaPay", "www.zitounapay.com", "Service de paiement tunisien"));
    SA.ajouter(Site("TanitJobs", "www.tanitjobs.com", "Alternative tunisienne a LinkedIn"));

    int choix = -1;
    while (choix != 0) {
        cout << "\n=========== MENU PRINCIPAL ===========\n";
        cout << "1. Admin\n2. Utilisateur\n0. Quitter\n";
        cout << "Votre choix : ";
        cin >> choix;
        clearInput();

        switch (choix) {
            case 1: {
                if (!login()) {
                    cout << "Mot de passe incorrect.\n";
                    break;}
                int choixAdmin = -1;
                while (choixAdmin != 0) {
                    cout << "\n1. Ajouter\n2. Supprimer\n0. Quitter\nVotre choix : ";
                    cin >> choixAdmin;
                    clearInput();
                    switch (choixAdmin) {
                        case 1: {
                            int typeAjout;
                            cout << "1. Produit\n2. Site\nVotre choix : ";
                            cin >> typeAjout;
                            clearInput();
                            if (typeAjout == 1) {
                                int typeProd;
                                cout << "1. Boycott\n2. Alternatif\nVotre choix : ";
                                cin >> typeProd;
                                clearInput();
                                if (typeProd == 1) PB.ajouter();
                                else if (typeProd == 2) PA.ajouter();
                            } else if (typeAjout == 2) {
                                int typeSite;
                                cout << "1. Boycott\n2. Alternatif\nVotre choix : ";
                                cin >> typeSite;
                                clearInput();
                                if (typeSite == 1) SB.ajouter();
                                else if (typeSite == 2) SA.ajouter();
                            }
                            break;
                        }
                        case 2: {
                            int typeSupp;
                            cout << "1. Produit\n2. Site\nVotre choix : ";
                            cin >> typeSupp;
                            clearInput();
                            if (typeSupp == 1) {
                                int typeProd;
                                cout << "1. Boycott\n2. Alternatif\nVotre choix : ";
                                cin >> typeProd;
                                clearInput();
                                if (typeProd == 1) PB.supprimer();
                                else if (typeProd == 2) PA.supprimer();
                            } else if (typeSupp == 2) {
                                int typeSite;
                                cout << "1. Boycott\n2. Alternatif\nVotre choix : ";
                                cin >> typeSite;
                                clearInput();
                                if (typeSite == 1) SB.supprimer();
                                else if (typeSite == 2) SA.supprimer();
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
                    cout << "\n1. Verifier\n2. Afficher\n3. Se cultiver\n0. Quitter\nVotre choix : ";
                    cin >> choixUser;
                    clearInput();
                    switch (choixUser) {
                        case 1: {
                            int typeVerif;
                            cout << "1. Produit\n2. Site\nVotre choix : ";
                            cin >> typeVerif;
                            clearInput();
                            if (typeVerif == 1) {
                                int vp;
                                cout << "1. Code-barres\n2. Nom\nVotre choix : ";
                                cin >> vp;
                                clearInput();
                                if (vp == 1) PB.verif_code();
                                else if (vp == 2) PB.verif_nom();
                            } else if (typeVerif == 2) {
                                int vs;
                                cout << "1. URL\n2. Nom\nVotre choix : ";
                                cin >> vs;
                                clearInput();
                                if (vs == 1) SB.verif_url();
                                else if (vs == 2) SB.verif_nom();
                            }
                            break;
                        }
                        case 2: {
                            int typeAff;
                            cout << "1. Produits\n2. Sites\nVotre choix : ";
                            cin >> typeAff;
                            clearInput();
                            if (typeAff == 1) {
                                int ap;
                                cout << "1. Boycottes\n2. Alternatifs\nVotre choix : ";
                                cin >> ap;
                                clearInput();
                                if (ap == 1) PB.afficher();
                                else if (ap == 2) PA.afficher();
                            } else if (typeAff == 2) {
                                int as;
                                cout << "1. Boycottes\n2. Alternatifs\nVotre choix : ";
                                cin >> as;
                                clearInput();
                                if (as == 1) SB.afficher();
                                else if (as == 2) SA.afficher();
                            }
                            break;
                        }
                        case 3: {
                            int sc;
                            cout << "1. Articles\n2. Citations\nVotre choix : ";
                            cin >> sc;
                            clearInput();
                            if (sc == 1) afficherArticles();
                            else if (sc == 2) afficherQuotes();
                            break;
                        }
                    }
                }
                break;
            }
            case 0: cout << "Au revoir !\n"; break;
        }
    }
    return 0;
}
