\
QT += widgets
CONFIG += c++17
TARGET = boycottnet
TEMPLATE = app

SOURCES += src/main.cpp \
           src/mainwindow.cpp \
           src/models.cpp

HEADERS += src/mainwindow.h \
           src/models.h

RESOURCES += resources.qrc


#DISTFILES += \ # images/palestine.jpg
