# BoycottNet — Interface graphique (Qt / C++)

Version **interface graphique** de BoycottNet : application de bureau en **C++ / Qt Widgets**
pour gérer et consulter une base de produits et de sites à boycotter, ainsi que leurs alternatives.

## Fonctionnalités

- **Navigation multi-pages** (`QStackedWidget`) : accueil, connexion admin, panneau admin, espace utilisateur, espace culture.
- **Administration** (accès par mot de passe) : ajouter / supprimer des produits et des sites, boycottés ou alternatifs.
- **Utilisateur** : vérifier un produit (code-barres / nom) ou un site (URL / nom) et afficher les listes.
- **Espace culture** : articles, citations et titres de livres.
- Thème graphique « Palestine ».

## Compiler & lancer

Nécessite **Qt 5 / Qt 6** (module `widgets`).

```bash
qmake boycottnet.pro
make          # ou : mingw32-make / nmake
./boycottnet
```

## Structure

- `main.cpp` — point d'entrée
- `mainwindow.{h,cpp}` — fenêtre principale et logique d'interface
- `models.{h,cpp}` — structures de données (`Produit`, `Site`, `Article`) et base en mémoire
- `boycottnet.pro` — fichier projet qmake

## Stack

`C++17` · `Qt Widgets`

---

Projet étudiant — Ghassen Ben Nasr.
