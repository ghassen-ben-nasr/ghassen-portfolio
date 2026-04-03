#include <string>
#include <vector>
#include <fstream>
#include <iostream>

using namespace std;

class Produit {

private:
string nom_;
string codeBarre_;
string collaborations_;

public:
Produit(const string& nom,const string& codeBarre,const string& collaborations);

void afficher();

void setNom(const string& nom);
const string& getNom() const;


void setCodeBarre(const string& code);
const string& getCodeBarre() const;


void setCollaborations(const string& collaborations);
const string& getCollaborations() const;
};

class ProduitsBoycottes{

private:
    vector<Produit> PBoycottes_;

public:
    void ajouter();
    void supprimer();

    void afficher();

    void verif_code();
    void verif_nom();
};

class ProduitsAlternatifs{

private:
    vector<Produit> PAlternatifs_;

public:
    void ajouter();
    void supprimer();

    void afficher();
};

class Site {

private:
string nom_;
string url_;
string infos_;

public:
Site(const string& nom, const string& url,const string& infos);

void setNom(const string& nom);
const string& getNom() const;

void setURL(const string& url);
const string& getURL() const;

void setInfos(const string& infos);
const string& getInfos() const;
void afficher();
};

class SitesBoycotts{

private:
    vector<Site> SBoycottes_;

public:
    void ajouter();
    void supprimer();

    void afficher();

    void verif_url();
    void verif_nom();
};

class SitesAlternatifs{

private:
    vector<Site> SAlternatifs_;

public:
    void ajouter();
    void supprimer();

    void afficher();
};
