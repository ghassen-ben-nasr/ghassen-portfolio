#include "boycottnet.h"
#include <iostream>
#include <fstream>
#include <limits>

using namespace std;

Produit::Produit(const string& nom,const string& codeBarre,const string& collaborations)
    : nom_(nom), codeBarre_(codeBarre), collaborations_(collaborations) {}

void Produit::setNom(const string& nom) {
    nom_ = nom;
}
const string& Produit::getNom() const {
    return nom_;
}

void Produit::setCodeBarre(const string& code) {
    codeBarre_ = code;
}
const string& Produit::getCodeBarre() const {
    return codeBarre_;
}

void Produit::setCollaborations(const string& collaborations) {
    collaborations_ = collaborations;
}
const string& Produit::getCollaborations() const {
    return collaborations_;
}

void Produit::afficher(){
    cout << "Nom Produit : " << this->getNom()
         << "\nCode-barres : " << this->getCodeBarre()
         << "\nExplications : " << this->getCollaborations()
         << "\n---------------------------\n" << endl;
}

void ProduitsBoycottes::ajouter(){
    string nom, code, collab;

    cout << "Nom produit : ";
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    getline(cin, nom);

    cout << "Code-barres : ";
    getline(cin, code);

    cout << "Explication : ";
    getline(cin, collab);

    PBoycottes_.push_back(Produit(nom, code, collab));
}

void ProduitsBoycottes::supprimer(){
    string nom, code;

    cout << "Donner nom du produit a supprimer : ";
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    getline(cin, nom);

    cout << "Donner code-barre du produit a supprimer : ";
    getline(cin, code);

    for (auto it = PBoycottes_.begin(); it != PBoycottes_.end(); ++it)
    {
        if(it->getNom()==nom && it->getCodeBarre()==code) {
            PBoycottes_.erase(it);
            cout << "Produit supprime.\n";
            return;
        }
    }
    cout << "Produit introuvable.\n";
}

void ProduitsBoycottes::afficher(){
    for (auto& s : PBoycottes_) {
        cout << "Nom Produit : " << s.getNom()
             << "\nCode-barres : " << s.getCodeBarre()
             << "\nExplications : " << s.getCollaborations()
             << "\n---------------------------\n";
    }
}

void ProduitsBoycottes::verif_code(){
    string code;

    cout << "Donner code-barre du produit a verifier : ";
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    getline(cin, code);

    for (auto& p : PBoycottes_) {
        if(p.getCodeBarre()==code){
            cout << "Produit est a boycotter !\n";
            return;
        }
    }
    cout << "Produit introuvable.\n";
}

void ProduitsBoycottes::verif_nom(){
    string nom;

    cout << "Donner nom du produit a verifier : ";
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    getline(cin, nom);

    for (auto& p : PBoycottes_) {
        if(p.getNom()==nom){
            cout << "Produit est a boycotter !\n";
            return;
        }
    }
    cout << "Produit introuvable.\n";
}

void ProduitsAlternatifs::ajouter(){
    string nom, code, collab;

    cout << "Nom produit : ";
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    getline(cin, nom);

    cout << "Code-barres : ";
    getline(cin, code);

    cout << "Explication : ";
    getline(cin, collab);

    PAlternatifs_.push_back(Produit(nom, code, collab));
}

void ProduitsAlternatifs::supprimer(){
    string nom, code;

    cout << "Donner nom du produit a supprimer : ";
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    getline(cin, nom);

    cout << "Donner code-barre du produit a supprimer : ";
    getline(cin, code);

    for (auto it = PAlternatifs_.begin(); it != PAlternatifs_.end(); ++it)
    {
        if(it->getNom()==nom && it->getCodeBarre()==code){
            PAlternatifs_.erase(it);
            cout << "Produit supprime.\n";
            return;
        }
    }
    cout << "Produit introuvable.\n";
}

void ProduitsAlternatifs::afficher(){
    for (auto& s : PAlternatifs_) {
        cout << "Nom Produit : " << s.getNom()
             << "\nCode-barres : " << s.getCodeBarre()
             << "\nExplications : " << s.getCollaborations()
             << "\n---------------------------\n";
    }
}

Site::Site(const string& nom,const string& url,const string& infos)
    : nom_(nom), url_(url), infos_(infos) {}

void Site::setNom(const string& nom) { nom_ = nom; }
const string& Site::getNom() const { return nom_; }

void Site::setURL(const string& url) { url_ = url; }
const string& Site::getURL() const { return url_; }

void Site::setInfos(const string& infos) { infos_ = infos; }
const string& Site::getInfos() const { return infos_; }

void Site::afficher(){
    cout << "Nom Site : " << getNom()
         << "\nURL : " << getURL()
         << "\nInformations : " << getInfos()
         << "\n---------------------------\n" << endl;
}

void SitesBoycotts::ajouter(){
    string nom, url, info;

    cout << "Nom site : ";
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    getline(cin, nom);

    cout << "URL : ";
    getline(cin, url);

    cout << "Informations : ";
    getline(cin, info);

    SBoycottes_.push_back(Site(nom, url, info));
}

void SitesBoycotts::supprimer(){
    string nom, url;

    cout << "Donner nom du site a supprimer : ";
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    getline(cin, nom);

    cout << "Donner url du site a supprimer : ";
    getline(cin, url);

    for (auto it = SBoycottes_.begin(); it != SBoycottes_.end(); ++it) {
        if(it->getNom() == nom && it->getURL() == url){
            SBoycottes_.erase(it);
            cout << "Site supprime.\n";
            return;
        }
    }
    cout << "Site introuvable.\n";
}

void SitesBoycotts::afficher(){
    for (auto& s : SBoycottes_) {
        cout << "Nom site : " << s.getNom()
             << "\nurl : " << s.getURL()
             << "\nInformations : " << s.getInfos()
             << "\n---------------------------\n";
    }
}

void SitesBoycotts::verif_url(){
    string url;

    cout << "Donner url du site a verifier : ";
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    getline(cin, url);

    for (auto& s : SBoycottes_) {
        if(s.getURL()==url){
            cout << "Site est a boycotter !\n";
            return;
        }
    }
    cout << "Site introuvable.\n";
}

void SitesBoycotts::verif_nom(){
    string nom;

    cout << "Donner nom du site a verifier : ";
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    getline(cin, nom);

    for (auto& s : SBoycottes_) {
        if(s.getNom()==nom){
            cout << "Site est a boycotter !\n";
            return;
        }
    }
    cout << "Site introuvable.\n";
}

void SitesAlternatifs::ajouter(){
    string nom, url, info;

    cout << "Nom site : ";
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    getline(cin, nom);

    cout << "url : ";
    getline(cin, url);

    cout << "Informations : ";
    getline(cin, info);

    SAlternatifs_.push_back(Site(nom, url, info));
}

void SitesAlternatifs::supprimer(){
    string nom, url;

    cout << "Donner nom du site a supprimer : ";
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    getline(cin, nom);

    cout << "Donner url du site a supprimer : ";
    getline(cin, url);

    for (auto it = SAlternatifs_.begin(); it != SAlternatifs_.end(); ++it) {
        if(it->getNom()==nom && it->getURL()==url){
            SAlternatifs_.erase(it);
            cout << "Site supprime.\n";
            return;
        }
    }
    cout << "Site introuvable.\n";
}

void SitesAlternatifs::afficher(){
    for (auto& s : SAlternatifs_) {
        cout << "Nom site : " << s.getNom()
             << "\nurl : " << s.getURL()
             << "\nInformations : " << s.getInfos()
             << "\n---------------------------\n";
    }
}
