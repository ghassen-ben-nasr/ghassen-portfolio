\
#pragma once
#include <QMainWindow>
#include <QStackedWidget>
#include "models.h"

class QPushButton;
class QListWidget;
class QLineEdit;
class QTextEdit;
class QLabel;
class QTabWidget;
class QTextBrowser;
class MainWindow : public QMainWindow {
    Q_OBJECT
public:
    MainWindow(QWidget* parent = nullptr);
private slots:
    void showAdminLogin();
    void verifyAdminPassword();
    void showUserPanel();
    void showCulturePanel();
    void addProduitBoycotte();
    void addProduitAlt();
    void addSiteBoycotte();
    void addSiteAlt();
    void deleteSelectedProduitBoycotte();
    void deleteSelectedProduitAlt();
    void deleteSelectedSiteBoycotte();
    void deleteSelectedSiteAlt();
    void verifyProduitByCode();
    void verifyProduitByName();
    void verifySiteByUrl();
    void verifySiteByName();
    void refreshAllLists();

private:
    Database db;
    QStackedWidget* stack;

    // pages
    QWidget* pageHome;
    QWidget* pageAdminLogin;
    QWidget* pageAdminPanel;
    QWidget* pageUserPanel;
    QWidget* pageCulturePanel;

    // widgets references for admin
    QLineEdit* editPB_nom;
    QLineEdit* editPB_code;
    QLineEdit* editPB_collab;
    QListWidget* listPB;

    QLineEdit* editPA_nom;
    QLineEdit* editPA_code;
    QLineEdit* editPA_collab;
    QListWidget* listPA;

    QLineEdit* editSB_nom;
    QLineEdit* editSB_url;
    QLineEdit* editSB_infos;
    QListWidget* listSB;

    QLineEdit* editSA_nom;
    QLineEdit* editSA_url;
    QLineEdit* editSA_infos;
    QListWidget* listSA;

    // user widgets
    QLineEdit* user_search_input;
    QTextEdit* user_display_area;
    QTextBrowser *user_display_area1;
    // admin password input
    QLineEdit* admin_password_input;
    QLabel* linkLabel;

    void setupHomePage();
    void setupAdminLoginPage();
    void setupAdminPanel();
    void setupUserPanel();
    void setupCulturePanel();
    void applyPalestineTheme(QWidget* w);
    void showMessage(const QString& title, const QString& msg);
};
