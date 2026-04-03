#include "boycottnet.h"
#include <iostream>
#include <limits>

using namespace std;

Produit::Produit(const string& nom, const string& codeBarre, const string& collaborations)
    : nom_(nom), codeBarre_(codeBarre), collaborations_(collaborations) {}

void Produit::setNom(const string& nom) { nom_ = nom; }
const string& Produit::getNom() const { return nom_; }

void Produit::setCodeBarre(const string& code) { codeBarre_ = code; }
const string& Produit::getCodeBarre() const { return codeBarre_; }

void Produit::setCollaborations(const string& collaborations) { collaborations_ = collaborations; }
const string& Produit::getCollaborations() const { return collaborations_; }

void Produit::afficher() {
    cout << "Nom Produit : " << getNom()
         << "\nCode-barres : " << getCodeBarre()
         << "\nExplications : " << getCollaborations()
         << "\n---------------------------\n";
}

void ProduitsBoycottes::ajouter() {
    string nom, code, collab;
    cout << "Nom produit : ";
    getline(cin, nom);
    cout << "Code-barres : ";
    getline(cin, code);
    cout << "Explication : ";
    getline(cin, collab);
    if (nom.empty() || code.empty() || collab.empty()) {
        cout << "Erreur : aucun champ ne doit etre vide !\nAjout impossible!\n";
        return;
    }
    for (const auto& p : PBoycottes_) {
        if (p.getNom() == nom ||p.getCodeBarre() == code) {
            cout << "Produit deja ajoute !\n";
            return;
        }
    }
    PBoycottes_.push_back(Produit(nom, code, collab));
}

void ProduitsBoycottes::ajouter(const Produit& p) {
    if (p.getNom().empty() || p.getCodeBarre().empty() || p.getCollaborations().empty()) {
        cout << "Erreur : produit invalide (attributs vides) !\nAjout impossible!\n";
        return;
    }
    for (const auto& existant : PBoycottes_) {
        if (existant.getNom() == p.getNom() || existant.getCodeBarre() == p.getCodeBarre()) {
            cout << " Produit deja ajoute !\n";
            return;
        }
    }
    PBoycottes_.push_back(p);
}

void ProduitsBoycottes::supprimer() {
    if (PBoycottes_.empty()) {
    cout << "Aucun site disponible a supprimer.\n";
    return;
    }
    string nom, code;
    cout << "Donner nom du produit a supprimer : ";
    getline(cin, nom);
    cout << "Donner code-barre du produit a supprimer : ";
    getline(cin, code);
    for (auto it = PBoycottes_.begin(); it != PBoycottes_.end(); ++it) {
        if (it->getNom() == nom && it->getCodeBarre() == code) {
            PBoycottes_.erase(it);
            cout << "Produit supprime.\n";
            return;
        }
    }
    cout << "Produit introuvable.\n";
}

void ProduitsBoycottes::afficher() {
    for (auto& s : PBoycottes_) s.afficher();
}

void ProduitsBoycottes::verif_code() {
    string code;
    cout << "Donner code-barre du produit a verifier : ";
    getline(cin, code);
    if (code.empty()) {
        cout << "Erreur : aucun champ ne doit etre vide !\n";
        return;
    }
    for (auto& p : PBoycottes_) {
        if (p.getCodeBarre() == code) {
            cout << "Produit est a boycotter !\n";
            p.afficher();
            return;
        }
    }
    cout << "Produit n'est pas a boycotter !\n";
}

void ProduitsBoycottes::verif_nom() {
    string nom;
    cout << "Donner nom du produit a verifier : ";
    getline(cin, nom);
    if (nom.empty()) {
        cout << "Erreur : aucun champ ne doit etre vide !\n";
        return;
    }
    for (auto& p : PBoycottes_) {
        if (p.getNom() == nom) {
            cout << "Produit est a boycotter !\n";
            p.afficher();
            return;
        }
    }
    cout << "Produit n'est pas a boycotter !\n";
}

void ProduitsAlternatifs::ajouter() {
    string nom, code, collab;

    cout << "Nom produit : ";
    getline(cin, nom);
    cout << "Code-barres : ";
    getline(cin, code);
    cout << "Explication : ";
    getline(cin, collab);
    if (nom.empty() || code.empty() || collab.empty()) {
        cout << "Erreur : aucun champ ne doit etre vide !\nAjout impossible!\n";
        return;
    }
    for (const auto& p : PAlternatifs_) {
        if (p.getNom() == nom ||p.getCodeBarre() == code) {
            cout << "Produit deja ajoute !\n";
            return;
        }
    }

    PAlternatifs_.push_back(Produit(nom, code, collab));
}


void ProduitsAlternatifs::ajouter(const Produit& p) {
    if (p.getNom().empty() || p.getCodeBarre().empty() || p.getCollaborations().empty()) {
        cout << "Erreur : produit invalide (attributs vides) !\nAjout impossible!\n";
        return;
    }
    for (const auto& existant : PAlternatifs_) {
        if (existant.getNom() == p.getNom() || existant.getCodeBarre() == p.getCodeBarre()) {
            cout << " Produit deja ajoute !\n";
            return;
        }
    }

    PAlternatifs_.push_back(p);

}


void ProduitsAlternatifs::supprimer() {
    if (PAlternatifs_.empty()) {
    cout << "Aucun site disponible a supprimer.\n";
    return;
    }
    string nom, code;
    cout << "Donner nom du produit a supprimer : ";
    getline(cin, nom);
    cout << "Donner code-barre du produit a supprimer : ";
    getline(cin, code);
    for (auto it = PAlternatifs_.begin(); it != PAlternatifs_.end(); ++it) {
        if (it->getNom() == nom && it->getCodeBarre() == code) {
            PAlternatifs_.erase(it);
            cout << "Produit supprime.\n";
            return;
        }
    }
    cout << "Produit introuvable.\n";
}

void ProduitsAlternatifs::afficher() {
    for (auto& s : PAlternatifs_) s.afficher();
}

Site::Site(const string& nom, const string& url, const string& infos)
    : nom_(nom), url_(url), infos_(infos) {}

void Site::setNom(const string& nom) { nom_ = nom; }
const string& Site::getNom() const { return nom_; }

void Site::setUrl(const string& url) { url_ = url; }
const string& Site::getUrl() const { return url_; }

void Site::setInfos(const string& infos) { infos_ = infos; }
const string& Site::getInfos() const { return infos_; }

void Site::afficher() {
    cout << "Nom Site : " << getNom()
         << "\nURL : " << getUrl()
         << "\nInformations : " << getInfos()
         << "\n---------------------------\n";
}

void SitesBoycotts::ajouter() {
    string nom, url, info;
    cout << "Nom site : ";
    getline(cin, nom);
    cout << "URL : ";
    getline(cin, url);
    cout << "Informations : ";
    getline(cin, info);
    if (nom.empty() || url.empty() || info.empty()) {
        cout << "Erreur : aucun champ ne doit etre vide !\nAjout impossible!\n";
        return;
    }
    for (const auto& p : SBoycottes_) {
        if (p.getNom() == nom ||p.getUrl() == url) {
            cout << "Site deja ajoute !\n";
            return;
        }
    }
    SBoycottes_.push_back(Site(nom, url, info));
}
void SitesBoycotts::ajouter(const Site& s) {
    if (s.getNom().empty() || s.getUrl().empty() || s.getInfos().empty()) {
        cout << "Erreur : site invalide (attributs vides) !\nAjout impossible!\n";
        return;
    }
    for (const auto& existant : SBoycottes_) {
        if (existant.getNom() == s.getNom() || existant.getUrl() == s.getUrl()) {
            cout << "Site deja ajoute !\n";
            return;
        }
    }
    SBoycottes_.push_back(s); }

void SitesBoycotts::supprimer() {
    if (SBoycottes_.empty()) {
    cout << "Aucun site disponible a supprimer.\n";
    return;
    }
    string nom, url;
    cout << "Donner nom du site a supprimer : ";
    getline(cin, nom);
    cout << "Donner url du site a supprimer : ";
    getline(cin, url);
    for (auto it = SBoycottes_.begin(); it != SBoycottes_.end(); ++it) {
        if (it->getNom() == nom && it->getUrl() == url) {
            SBoycottes_.erase(it);
            cout << "Site supprime.\n";
            return;
        }
    }
    cout << "Site introuvable.\n";
}

void SitesBoycotts::afficher() {
    for (auto& s : SBoycottes_) s.afficher();
}

void SitesBoycotts::verif_url() {
    string url;
    cout << "Donner url du site a verifier : ";
    getline(cin, url);
    if (url.empty()) {
        cout << "Erreur : aucun champ ne doit être vide !\n";
        return;
    }
    for (auto& s : SBoycottes_) {
        if (s.getUrl() == url) {
            cout << "Site est a boycotter !\n";
            s.afficher();
            return;
        }
    }
    cout << "Site n'est pas a boycotter !\n";
}

void SitesBoycotts::verif_nom() {
    string nom;
    cout << "Donner nom du site a verifier : ";
    getline(cin, nom);
    if (nom.empty()) {
        cout << "Erreur : aucun champ ne doit etre vide !\n";
        return;
    }
    for (auto& s : SBoycottes_) {
        if (s.getNom() == nom) {
            cout << "Site est a boycotter !\n";
            s.afficher();
            return;
        }
    }
    cout << "Site n'est pas a boycotter !\n";
}

void SitesAlternatifs::ajouter() {
    string nom, url, info;
    cout << "Nom site : ";
    getline(cin, nom);
    cout << "URL : ";
    getline(cin, url);
    cout << "Informations : ";
    getline(cin, info);
    if (nom.empty() || url.empty() || info.empty()) {
        cout << "Erreur : aucun champ ne doit être vide !\nAjout impossible!\n";
        return;
    }
    for (const auto& p : SAlternatifs_) {
        if (p.getNom() == nom ||p.getUrl() == url) {
            cout << "Site deja ajoute !\n";
            return;
        }
    }
    SAlternatifs_.push_back(Site(nom, url, info));
}

void SitesAlternatifs::ajouter(const Site& s) {
    if (s.getNom().empty() || s.getUrl().empty() || s.getInfos().empty()) {
        cout << "Erreur : site invalide (attributs vides) !\nAjout impossible!\n";
        return;
    }
    for (const auto& existant : SAlternatifs_) {
        if (existant.getNom() == s.getNom() || existant.getUrl() == s.getUrl()) {
            cout << " Site deja ajoute !\n";
            return;
        }
    }
    SAlternatifs_.push_back(s); }

void SitesAlternatifs::supprimer() {
    if (SAlternatifs_.empty()) {
    cout << "Aucun site disponible a supprimer.\n";
    return;
    }
    string nom, url;
    cout << "Donner nom du site a supprimer : ";
    getline(cin, nom);
    cout << "Donner url du site a supprimer : ";
    getline(cin, url);
    for (auto it = SAlternatifs_.begin(); it != SAlternatifs_.end(); ++it) {
        if (it->getNom() == nom && it->getUrl() == url) {
            SAlternatifs_.erase(it);
            cout << "Site supprime.\n";
            return;
        }
    }
    cout << "Site introuvable.\n";
}

void SitesAlternatifs::afficher() {
    for (auto& s : SAlternatifs_) s.afficher();
}
