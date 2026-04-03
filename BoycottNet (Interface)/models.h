\
#pragma once
#include <QString>
#include <QVector>

struct Produit {
    QString nom;
    QString codeBarre;
    QString collaborations;
    QString toString() const { return nom + " | " + codeBarre; }
};

struct Site {
    QString nom;
    QString url;
    QString infos;
    QString toString() const { return nom + " | " + url; }
};
struct Article{
    QString title;
    QString url;
};

class Database {
public:
    QVector<Produit> PBoycottes;
    QVector<Produit> PAlternatifs;
    QVector<Site> SBoycottes;
    QVector<Site> SAlternatifs;
    QVector<Article> Articles;
    QVector<QString> Quotes;
    QVector<QString> BooksTitle;
    Database();
};
