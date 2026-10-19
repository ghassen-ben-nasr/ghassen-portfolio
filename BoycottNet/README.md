# BoycottNet (console C++)

Application console en **C++** qui aide à appliquer le **boycott (démarche BDS)** : elle recense
les produits et sites à boycotter et propose des **alternatives locales / tunisiennes**.

## Fonctionnalités

- **Produits** : liste des produits boycottés (nom, code-barres, motif) et des **alternatives** (marques tunisiennes : Délice, Boga, Caprera, Carthage, Zitouna…).
- **Sites** : liste des sites boycottés (nom, URL, motif) et des alternatives (Mosaïque FM, Mytek, Jumia Tunisie, TanitJobs…).
- **Mode Admin** (protégé par mot de passe) : ajouter / supprimer des produits et des sites.
- **Mode Utilisateur** :
  - vérifier un produit par **code-barres** ou par **nom** ;
  - vérifier un site par **URL** ou par **nom** ;
  - afficher les listes boycottées / alternatives ;
  - espace « Se cultiver » : articles et citations.

## Compiler & lancer

```bash
g++ main.cpp boycottnet.cpp -o boycottnet
./boycottnet
```

## Stack

`C++` (STL : `vector`, `string`) — fichiers `.h` / `.cpp`, aucune dépendance externe.

---

Projet étudiant — Ghassen Ben Nasr.
