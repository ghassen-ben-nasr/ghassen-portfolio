\
#include "mainwindow.h"
#include <QtWidgets>
#include <QIcon>
#include <QTextBrowser>


MainWindow::MainWindow(QWidget* parent)
    : QMainWindow(parent)
{
    stack = new QStackedWidget(this);
    setCentralWidget(stack);
    QIcon icon("C:/Users/Fakher/Desktop/boycottNet/icon.png");
    if (icon.isNull()) {
        QMessageBox::critical(this, "Erreur", "Impossible de charger l'icône ! Vérifiez le chemin et le format.");}
    setWindowIcon(icon);
    setupHomePage();
    setupAdminLoginPage();
    setupAdminPanel();
    setupUserPanel();
    setupCulturePanel();

    stack->addWidget(pageHome);
    stack->addWidget(pageAdminLogin);
    stack->addWidget(pageAdminPanel);
    stack->addWidget(pageUserPanel);
    stack->addWidget(pageCulturePanel);

    stack->setCurrentWidget(pageHome);
    setWindowTitle("BoycottNet - ProPALESTINE");
    resize(900, 600);
}

void MainWindow::applyPalestineTheme(QWidget* w) {
    // simple stylesheet using Palestine colors: black, white, green, red
    QString s = R"(
        QWidget { background: qlineargradient(spread:pad, x1:0, y1:0, x2:1, y2:0, stop:0 #f7f7f7, stop:1 #ffffff); }
        QPushButton { background: #117a37; color: white; border-radius: 6px; padding:6px; }
        QPushButton#danger { background: #b71c1c; }
        QLineEdit, QTextEdit { background: white; border: 1px solid #cccccc; padding:4px; border-radius:4px; }
        QLabel#title { font-weight: bold; font-size: 18px; color: #0b3d1f; }
        QListWidget { background: #ffffff; border:1px solid #ddd; }
    )";
    w->setStyleSheet(s);
}

void MainWindow::setupHomePage() {
    pageHome = new QWidget;
    applyPalestineTheme(pageHome);
    auto layout = new QVBoxLayout(pageHome);
    auto title = new QLabel("Bienvenue sur BoycottNet");
    title->setObjectName("title");
    title->setAlignment(Qt::AlignCenter);
    title->setStyleSheet("font-size: 30pt; font-weight: bold; color: #DD4424;");
    layout->addWidget(title);

    layout->addSpacing(40);
    auto sub = new QLabel("Choisissez un mode : Admin ou Utilisateur");
    sub->setAlignment(Qt::AlignCenter);
    sub->setStyleSheet("font-size: 18pt; font-weight: bold; color: #0b3d1f;");
    layout->addWidget(sub);
    layout->addSpacing(20);
    auto btnAdmin = new QPushButton("Mode Admin");
    auto btnUser = new QPushButton("Mode Utilisateur");
    btnAdmin->setFixedSize(300, 60);  // largeur x hauteur
    btnUser->setFixedSize(300, 60);


    auto h = new QHBoxLayout;
    h->addStretch(); h->addWidget(btnAdmin); h->addSpacing(50); h->addWidget(btnUser); h->addStretch();
    layout->addLayout(h);


    connect(btnAdmin, &QPushButton::clicked, this, &MainWindow::showAdminLogin);
    connect(btnUser, &QPushButton::clicked, this, &MainWindow::showUserPanel);
    QPixmap pixmap("C:/Users/Fakher/Desktop/boycottNet/palestine.jpg");
    auto labelImage = new QLabel;
    if (pixmap.isNull())
        QMessageBox::information(this, "Debug", "FROM THE RIVER TO THE SEA , PALESTINE WILL BE FREE !");
    labelImage->setPixmap(pixmap.scaled(300, 300, Qt::KeepAspectRatio, Qt::SmoothTransformation)); // ajuster la taille si nécessaire

    QPixmap pixmap1("C:/Users/Fakher/Desktop/boycottNet/boycottes.jpeg");
    auto labelImage1 = new QLabel;
    if (pixmap1.isNull())
        QMessageBox::information(this, "Debug", "FROM THE RIVER TO THE SEA , PALESTINE WILL BE FREE !");
    labelImage1->setPixmap(pixmap1.scaled(pixmap1.width()*2, 300, Qt::KeepAspectRatio, Qt::SmoothTransformation)); // ajuster la taille si nécessaire
    auto hImages = new QHBoxLayout;
    hImages->addWidget(labelImage, 0, Qt::AlignRight | Qt::AlignBottom);
    hImages->addStretch();

    hImages->addWidget(labelImage1, 0, Qt::AlignLeft | Qt::AlignBottom);
    layout->addStretch(); // pousse tout vers le bas
    layout->addLayout(hImages);
}

void MainWindow::setupAdminLoginPage() {
    pageAdminLogin = new QWidget;
    applyPalestineTheme(pageAdminLogin);
    auto layout = new QVBoxLayout(pageAdminLogin);
    auto title = new QLabel("Login Administrateur");
    title->setObjectName("title");
    title->setAlignment(Qt::AlignCenter);
    title->setStyleSheet("font-size: 30pt; font-weight: bold; color: #DD4424;");
    layout->addWidget(title);
    layout->addSpacing(40);

    admin_password_input = new QLineEdit;
    admin_password_input->setFixedSize(200, 50);
    admin_password_input->move(50, 100);
    admin_password_input->setEchoMode(QLineEdit::Password);
    admin_password_input->setPlaceholderText("Entrez le mot de passe");

    auto btnVerify = new QPushButton("Valider");
    auto btnBack = new QPushButton("Retour");
    btnVerify->setFixedSize(100, 50);
    auto form = new QHBoxLayout;
    form->addStretch(); form->addWidget(admin_password_input); form->addWidget(btnVerify); form->addStretch();

    layout->addLayout(form);
    QPixmap pixmap("C:/Users/Fakher/Desktop/boycottNet/boycottesad.jpeg");
    QLabel* labelImage = new QLabel;
    labelImage->setPixmap(pixmap.scaled(300, 300, Qt::KeepAspectRatio, Qt::SmoothTransformation));
    labelImage->setAlignment(Qt::AlignCenter);
    layout->addWidget(labelImage);
    btnBack->setFixedSize(100, 50);
    layout->addWidget(btnBack, 0, Qt::AlignHCenter | Qt::AlignBottom);

    connect(btnVerify, &QPushButton::clicked, this, &MainWindow::verifyAdminPassword);
    connect(btnBack, &QPushButton::clicked, [this](){ stack->setCurrentWidget(pageHome); });
}

void MainWindow::setupAdminPanel() {
    pageAdminPanel = new QWidget;
    applyPalestineTheme(pageAdminPanel);
    auto mainLayout = new QVBoxLayout(pageAdminPanel);

    auto header = new QLabel("Panneau Administrateur");
    header->setObjectName("title");
    header->setAlignment(Qt::AlignCenter);
    header->setStyleSheet("font-size: 20pt; font-weight: bold; color: #DD4424;");
    mainLayout->addWidget(header);

    auto tabs = new QTabWidget;
    // Products Boycotted Tab
    QWidget* tabPB = new QWidget;
    auto layoutPB = new QVBoxLayout(tabPB);
    auto formPB = new QFormLayout;
    editPB_nom = new QLineEdit;
    editPB_code = new QLineEdit;
    editPB_collab = new QLineEdit;
    formPB->addRow("Nom :", editPB_nom);
    formPB->addRow("Code-barre :", editPB_code);
    formPB->addRow("Explication :", editPB_collab);
    layoutPB->addLayout(formPB);
    auto btnAddPB = new QPushButton("Ajouter Produit Boycotte");
    auto btnDelPB = new QPushButton("Supprimer Produit Selectionne");
    btnDelPB->setObjectName("danger");
    listPB = new QListWidget;
    layoutPB->addWidget(btnAddPB);
    layoutPB->addWidget(btnDelPB);
    layoutPB->addWidget(listPB);

    connect(btnAddPB, &QPushButton::clicked, this, &MainWindow::addProduitBoycotte);
    connect(btnDelPB, &QPushButton::clicked, this, &MainWindow::deleteSelectedProduitBoycotte);

    // Products Alternative Tab
    QWidget* tabPA = new QWidget;
    auto layoutPA = new QVBoxLayout(tabPA);
    auto formPA = new QFormLayout;
    editPA_nom = new QLineEdit;
    editPA_code = new QLineEdit;
    editPA_collab = new QLineEdit;
    formPA->addRow("Nom :", editPA_nom);
    formPA->addRow("Code-barre :", editPA_code);
    formPA->addRow("Explication :", editPA_collab);
    layoutPA->addLayout(formPA);
    auto btnAddPA = new QPushButton("Ajouter Produit Alternatif");
    auto btnDelPA = new QPushButton("Supprimer Produit Selectionne");
    btnDelPA->setObjectName("danger");
    listPA = new QListWidget;
    layoutPA->addWidget(btnAddPA);
    layoutPA->addWidget(btnDelPA);
    layoutPA->addWidget(listPA);

    connect(btnAddPA, &QPushButton::clicked, this, &MainWindow::addProduitAlt);
    connect(btnDelPA, &QPushButton::clicked, this, &MainWindow::deleteSelectedProduitAlt);

    // Sites Boycott Tab
    QWidget* tabSB = new QWidget;
    auto layoutSB = new QVBoxLayout(tabSB);
    auto formSB = new QFormLayout;
    editSB_nom = new QLineEdit;
    editSB_url = new QLineEdit;
    editSB_infos = new QLineEdit;
    formSB->addRow("Nom :", editSB_nom);
    formSB->addRow("URL :", editSB_url);
    formSB->addRow("Infos :", editSB_infos);
    layoutSB->addLayout(formSB);
    auto btnAddSB = new QPushButton("Ajouter Site Boycotte");
    auto btnDelSB = new QPushButton("Supprimer Site Selectionne");
    btnDelSB->setObjectName("danger");
    listSB = new QListWidget;
    layoutSB->addWidget(btnAddSB);
    layoutSB->addWidget(btnDelSB);
    layoutSB->addWidget(listSB);

    connect(btnAddSB, &QPushButton::clicked, this, &MainWindow::addSiteBoycotte);
    connect(btnDelSB, &QPushButton::clicked, this, &MainWindow::deleteSelectedSiteBoycotte);

    // Sites Alternatives Tab
    QWidget* tabSA = new QWidget;
    auto layoutSA = new QVBoxLayout(tabSA);
    auto formSA = new QFormLayout;
    editSA_nom = new QLineEdit;
    editSA_url = new QLineEdit;
    editSA_infos = new QLineEdit;
    formSA->addRow("Nom :", editSA_nom);
    formSA->addRow("URL :", editSA_url);
    formSA->addRow("Infos :", editSA_infos);
    layoutSA->addLayout(formSA);
    auto btnAddSA = new QPushButton("Ajouter Site Alternatif");
    auto btnDelSA = new QPushButton("Supprimer Site Selectionne");
    btnDelSA->setObjectName("danger");
    listSA = new QListWidget;
    layoutSA->addWidget(btnAddSA);
    layoutSA->addWidget(btnDelSA);
    layoutSA->addWidget(listSA);

    connect(btnAddSA, &QPushButton::clicked, this, &MainWindow::addSiteAlt);
    connect(btnDelSA, &QPushButton::clicked, this, &MainWindow::deleteSelectedSiteAlt);

    tabs->addTab(tabPB, "Produits Boycottés");
    tabs->addTab(tabPA, "Produits Alternatifs");
    tabs->addTab(tabSB, "Sites Boycottés");
    tabs->addTab(tabSA, "Sites Alternatifs");

    mainLayout->addWidget(tabs);

    auto btnBack = new QPushButton("Retour");
    mainLayout->addWidget(btnBack, 0, Qt::AlignCenter);
    connect(btnBack, &QPushButton::clicked, [this](){ stack->setCurrentWidget(pageHome); });

    refreshAllLists();
}

void MainWindow::setupUserPanel() {
    pageUserPanel = new QWidget;
    applyPalestineTheme(pageUserPanel);
    auto layout = new QVBoxLayout(pageUserPanel);

    auto header = new QLabel("Mode Utilisateur");
    header->setObjectName("title");
    header->setAlignment(Qt::AlignCenter);
    header->setStyleSheet("font-size: 20pt; font-weight: bold; color: #DD4424;");
    layout->addWidget(header);

    auto h = new QHBoxLayout;

    auto left = new QVBoxLayout;
    user_search_input = new QLineEdit;
    user_search_input->setPlaceholderText("Tapez nom ou code ou url selon le bouton choisi");
    auto btnVerifyProdCode = new QPushButton("Verifier Produit par Code");
    auto btnVerifyProdName = new QPushButton("Verifier Produit par Nom");
    auto btnVerifySiteUrl = new QPushButton("Verifier Site par URL");
    auto btnVerifySiteName = new QPushButton("Verifier Site par Nom");
    left->addWidget(user_search_input);
    left->addWidget(btnVerifyProdCode);
    left->addWidget(btnVerifyProdName);
    left->addWidget(btnVerifySiteUrl);
    left->addWidget(btnVerifySiteName);

    connect(btnVerifyProdCode, &QPushButton::clicked, this, &MainWindow::verifyProduitByCode);
    connect(btnVerifyProdName, &QPushButton::clicked, this, &MainWindow::verifyProduitByName);
    connect(btnVerifySiteUrl, &QPushButton::clicked, this, &MainWindow::verifySiteByUrl);
    connect(btnVerifySiteName, &QPushButton::clicked, this, &MainWindow::verifySiteByName);

    auto right = new QVBoxLayout;
    user_display_area = new QTextEdit;
    user_display_area->setReadOnly(true);
    right->addWidget(user_display_area);

    h->addLayout(left, 1);
    h->addLayout(right, 2);
    layout->addLayout(h);

    auto btnAffProd = new QPushButton("Afficher Produits Boycottés");
    btnAffProd->setObjectName("danger");
    auto btnAffSites = new QPushButton("Afficher Sites Boycottés");
    btnAffSites->setObjectName("danger");
    auto btnAffProda = new QPushButton("Afficher Produits Alternatifs");
    auto btnAffSitesa = new QPushButton("Afficher Sites Alternatifs");
    auto btnInfo = new QPushButton("Se Cultiver");
    layout->addWidget(btnAffProd);
    layout->addWidget(btnAffSites);
    layout->addWidget(btnAffProda);
    layout->addWidget(btnAffSitesa);
    layout->addWidget(btnInfo);

    connect(btnAffProd, &QPushButton::clicked, [this](){
        user_display_area->clear();
        for (auto &p : db.PBoycottes) {
            user_display_area->append(p.toString() + "\n" + p.collaborations + "\n-----------------");
        }
    });
    connect(btnAffSites, &QPushButton::clicked, [this](){
        user_display_area->clear();
        for (auto &s : db.SBoycottes) {
            user_display_area->append(s.toString() + "\n" + s.infos + "\n-----------------");
        }
    });
    connect(btnAffProda, &QPushButton::clicked, [this](){
        user_display_area->clear();
        for (auto &p : db.PAlternatifs) {
            user_display_area->append(p.toString() + "\n" + p.collaborations + "\n-----------------");
        }
    });
    connect(btnAffSitesa, &QPushButton::clicked, [this](){
        user_display_area->clear();
        for (auto &s : db.SAlternatifs) {
            user_display_area->append(s.toString() + "\n" + s.infos + "\n-----------------");
        }
    });
    connect(btnInfo, &QPushButton::clicked, this, &MainWindow::showCulturePanel);
    auto btnBack = new QPushButton("Retour");
    layout->addWidget(btnBack, 0, Qt::AlignCenter);
    connect(btnBack, &QPushButton::clicked, [this](){ stack->setCurrentWidget(pageHome); });
}

void MainWindow::showAdminLogin() {
    stack->setCurrentWidget(pageAdminLogin);
}
void MainWindow::setupCulturePanel() {
    pageCulturePanel = new QWidget;
    applyPalestineTheme(pageCulturePanel);
    auto layout = new QVBoxLayout(pageCulturePanel);

    auto header = new QLabel("Panel de Sensibilisation : Boycotts et Palestine");
    header->setObjectName("title");
    header->setAlignment(Qt::AlignCenter);
    header->setStyleSheet("font-size: 20pt; font-weight: bold; color: #DD4424;");
    layout->addWidget(header);

    auto h = new QHBoxLayout;

    auto left = new QVBoxLayout;
    QPixmap pixmap("C:/Users/Fakher/Desktop/boycottNet/bds.jpg");
    if (pixmap.isNull())
        QMessageBox::information(this, "Debug", "FROM THE RIVER TO THE SEA , PALESTINE WILL BE FREE !");

    auto labelImage = new QLabel;
    labelImage->setPixmap(pixmap.scaled(200, 100, Qt::KeepAspectRatio, Qt::SmoothTransformation));
    labelImage->setAlignment(Qt::AlignCenter);

    left->addWidget(labelImage, 0, Qt::AlignTop | Qt::AlignHCenter);
    layout->addSpacing(20);
    auto btnQuotes = new QPushButton("QUOTES");
    auto btnartcile = new QPushButton("DES ARCTICLES A VISITER");
    auto btnLivre =new QPushButton("DES LIVRES A LIRE ");
    left->addWidget(btnQuotes);
    left->addSpacing(20);
    left->addWidget(btnartcile);
    left->addSpacing(20);
    left->addWidget(btnLivre);
    left->addStretch();
    auto right = new QVBoxLayout;
    user_display_area1 = new QTextBrowser;
    user_display_area1->setReadOnly(true);
    user_display_area1->setReadOnly(true);
    user_display_area1->setOpenExternalLinks(true);
    right->addWidget(user_display_area1);

    h->addLayout(left, 1);
    h->addLayout(right, 2);
    layout->addLayout(h);
    connect(btnQuotes, &QPushButton::clicked, [this](){
        user_display_area1->clear();
        for (auto &p : db.Quotes) {
            user_display_area1->append(p.toHtmlEscaped());
            user_display_area1->append("-------------------------");
        }
    });
    connect(btnLivre, &QPushButton::clicked, [this](){
        user_display_area1->clear();
        for (auto &p : db.BooksTitle) {
            user_display_area1->append(p.toHtmlEscaped());
            user_display_area1->append("-------------------------");
        }
    });
    connect(btnartcile, &QPushButton::clicked, [this](){
        user_display_area1->clear();
        for (auto &p : db.Articles) {

            QString link = "<b>" + p.title + "</b><br>""<a href=\"" + p.url + "\">Voir l'article</a>";

            user_display_area1->append(link + "<br>-------------------------<br>");
        }
    });
    auto btnBack = new QPushButton("Retour");
    btnBack->setFixedSize(50, 50);
    layout->addWidget(btnBack, 0, Qt::AlignHCenter | Qt::AlignBottom);

    connect(btnBack, &QPushButton::clicked, [this](){ stack->setCurrentWidget(pageHome); });





}
void MainWindow::showCulturePanel() {
    stack->setCurrentWidget(pageCulturePanel);
}

void MainWindow::verifyAdminPassword() {
    QString pass = admin_password_input->text();
    if (pass == "palestine") {
        admin_password_input->clear();
        stack->setCurrentWidget(pageAdminPanel);
    } else {
        showMessage("Erreur", "Mot de passe incorrect.");
    }
}

void MainWindow::showUserPanel() {
    stack->setCurrentWidget(pageUserPanel);
}

void MainWindow::addProduitBoycotte() {
    QString n = editPB_nom->text().trimmed();
    QString c = editPB_code->text().trimmed();
    QString col = editPB_collab->text().trimmed();
    if (n.isEmpty() || c.isEmpty() || col.isEmpty()) {
        showMessage("Erreur", "Aucun champ ne doit etre vide.");
        return;
    }
    for (auto &p : db.PBoycottes) {
        if (p.nom == n || p.codeBarre == c) {
            showMessage("Erreur", "Produit deja ajoute.");
            return;
        }
    }
    db.PBoycottes.append({n,c,col});
    editPB_nom->clear(); editPB_code->clear(); editPB_collab->clear();
    refreshAllLists();
}

void MainWindow::addProduitAlt() {
    QString n = editPA_nom->text().trimmed();
    QString c = editPA_code->text().trimmed();
    QString col = editPA_collab->text().trimmed();
    if (n.isEmpty() || c.isEmpty() || col.isEmpty()) { showMessage("Erreur", "Aucun champ ne doit etre vide."); return; }
    for (auto &p : db.PAlternatifs) { if (p.nom == n || p.codeBarre == c) { showMessage("Erreur", "Produit deja ajoute."); return; } }
    db.PAlternatifs.append({n,c,col});
    editPA_nom->clear(); editPA_code->clear(); editPA_collab->clear();
    refreshAllLists();
}

void MainWindow::addSiteBoycotte() {
    QString n = editSB_nom->text().trimmed();
    QString u = editSB_url->text().trimmed();
    QString info = editSB_infos->text().trimmed();
    if (n.isEmpty() || u.isEmpty() || info.isEmpty()) { showMessage("Erreur", "Aucun champ ne doit etre vide."); return; }
    for (auto &s : db.SBoycottes) { if (s.nom == n || s.url == u) { showMessage("Erreur", "Site deja ajoute."); return; } }
    db.SBoycottes.append({n,u,info});
    editSB_nom->clear(); editSB_url->clear(); editSB_infos->clear();
    refreshAllLists();
}

void MainWindow::addSiteAlt() {
    QString n = editSA_nom->text().trimmed();
    QString u = editSA_url->text().trimmed();
    QString info = editSA_infos->text().trimmed();
    if (n.isEmpty() || u.isEmpty() || info.isEmpty()) { showMessage("Erreur", "Aucun champ ne doit etre vide."); return; }
    for (auto &s : db.SAlternatifs) { if (s.nom == n || s.url == u) { showMessage("Erreur", "Site deja ajoute."); return; } }
    db.SAlternatifs.append({n,u,info});
    editSA_nom->clear(); editSA_url->clear(); editSA_infos->clear();
    refreshAllLists();
}

void MainWindow::deleteSelectedProduitBoycotte() {
    auto it = listPB->currentRow();
    if (it < 0 || it >= db.PBoycottes.size()) { showMessage("Erreur","Aucune selection valide."); return; }
    db.PBoycottes.remove(it);
    refreshAllLists();
}

void MainWindow::deleteSelectedProduitAlt() {
    auto it = listPA->currentRow();
    if (it < 0 || it >= db.PAlternatifs.size()) { showMessage("Erreur","Aucune selection valide."); return; }
    db.PAlternatifs.remove(it);
    refreshAllLists();
}

void MainWindow::deleteSelectedSiteBoycotte() {
    auto it = listSB->currentRow();
    if (it < 0 || it >= db.SBoycottes.size()) { showMessage("Erreur","Aucune selection valide."); return; }
    db.SBoycottes.remove(it);
    refreshAllLists();
}

void MainWindow::deleteSelectedSiteAlt() {
    auto it = listSA->currentRow();
    if (it < 0 || it >= db.SAlternatifs.size()) { showMessage("Erreur","Aucune selection valide."); return; }
    db.SAlternatifs.remove(it);
    refreshAllLists();
}

void MainWindow::verifyProduitByCode() {
    QString v = user_search_input->text().trimmed();
    if (v.isEmpty()) { showMessage("Erreur","Champ vide."); return; }
    for (auto &p : db.PBoycottes) {
        if (p.codeBarre == v) {
            user_display_area->setText("Produit est a boycotter !\n" + p.toString() + "\n" + p.collaborations);
            return;
        }
    }
    user_display_area->setText("Produit n'est pas a boycotter !");
}

void MainWindow::verifyProduitByName() {
    QString v = user_search_input->text().trimmed();
    if (v.isEmpty()) { showMessage("Erreur","Champ vide."); return; }
    for (auto &p : db.PBoycottes) {
        if (p.nom == v) {
            user_display_area->setText("Produit est a boycotter !\n" + p.toString() + "\n" + p.collaborations);
            return;
        }
    }
    user_display_area->setText("Produit n'est pas a boycotter !");
}

void MainWindow::verifySiteByUrl() {
    QString v = user_search_input->text().trimmed();
    if (v.isEmpty()) { showMessage("Erreur","Champ vide."); return; }
    for (auto &s : db.SBoycottes) {
        if (s.url == v) {
            user_display_area->setText("Site est a boycotter !\n" + s.toString() + "\n" + s.infos);
            return;
        }
    }
    user_display_area->setText("Site n'est pas a boycotter !");
}

void MainWindow::verifySiteByName() {
    QString v = user_search_input->text().trimmed();
    if (v.isEmpty()) { showMessage("Erreur","Champ vide."); return; }
    for (auto &s : db.SBoycottes) {
        if (s.nom == v) {
            user_display_area->setText("Site est a boycotter !\n" + s.toString() + "\n" + s.infos);
            return;
        }
    }
    user_display_area->setText("Site n'est pas a boycotter !");
}

void MainWindow::refreshAllLists() {
    listPB->clear();
    for (auto &p : db.PBoycottes) listPB->addItem(p.toString());
    listPA->clear();
    for (auto &p : db.PAlternatifs) listPA->addItem(p.toString());
    listSB->clear();
    for (auto &s : db.SBoycottes) listSB->addItem(s.toString());
    listSA->clear();
    for (auto &s : db.SAlternatifs) listSA->addItem(s.toString());
}

void MainWindow::showMessage(const QString& title, const QString& msg) {
    QMessageBox::information(this, title, msg);
}
