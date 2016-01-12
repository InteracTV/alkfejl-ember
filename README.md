# Családi feladatok dokumentáció
## Sós Krisztián Dávid, ED7Q9D

#### Követelményanalízis

##### Követelmények összegyűjtése

###### Funkcionális elvárások

Az alkalmazás segítségével a családtagok üzenni tudnak egymásnak, feladatot tudnak hagyni egymásra. A feladatokat megtekinteni, szerkeszteni és törölni lehet, továbbá új feladatot lehet hozzáadni a listához.

###### Nem funkcionális elvárások

Az alkalmazás legyen lényegre törő, felhasználóbarát, stabil, gyors és biztonságos.

##### Használatieset-modell

![](http://kepfeltoltes.hu/160111/hasznalatiesetmodell_www.kepfeltoltes.hu_.png)

#### Tervezés

##### Folyamatok meghatározása

![](http://kepfeltoltes.hu/160111/folyamatok_www.kepfeltoltes.hu_.png)

###### Oldaltérkép

- Főoldal
- Feladatok listája
    + új feladat
    + feladat megtekintése
    + feladat szerkesztése
    + feladat törlése

###### Végpontok

- GET /: főoldal
- GET /tasks/list: feladatok listája
- GET /tasks/new: új feladat felvitele (modal-ban megjelenítve)
- POST /tasks/new: új feladat felvitele, adatok küldése
- GET /tasks/id: feladat adatai

###### Adatmodell

![](http://kepfeltoltes.hu/160111/adatmodell_www.kepfeltoltes.hu_.png)

###### Adatbázisterv

![](http://kepfeltoltes.hu/160111/adatb_www.kepfeltoltes.hu_.png)

#### Implementáció

##### Fejlesztői környezet bemutatása

Fejlesztői környezet gyanánt a Cloud9 Web IDE-t használtam, egy account segítségével. A vastagkliens Ember.js keretrendszer segítségével készült.

Adatbázis:
- REST API
  + Express
  + Fortune
  + Fortune-nedb
  + Fortune-JSON API

##### Könyvtárstruktúrában lévő mappák funkiójának bemutatása

- app: az alkalmazás fájljai
  + pods: az alkalmazás objektumai
    - application: az alkalmazás adaptere, vezérlő egysége, útvonalválasztója, megjelenítésért felelős fájlja
    - components: komponensek
      + modal-dialog: a modal-ért felel
      + new-task-form: az űrlapért felel
      + task-detail: a feladat megtekintésért felel
      + task-list: a listázó oldalért felel
    - index: főoldal megjelenítése
    - new-task-modal: a modal kerete
    - task: a feladat modellje
    - tasks: a feladatok CRUD műveletei
      + edit: szerkesztés
      + list: listázás
      + new: hozzáadás
      + view: megtekintés
- bower_components: Bootstrap, Bootswatch, Ember.js, JQuery komponensek konfigurációi
- config: Az Ember.js konfigurációja
- node_modules: Ember.js telepített modulok
- tests: tesztek
- tmp: ideiglenes fájlok

#### Felhasználói dokumentáció

Szükségesek:

- modern böngésző
- Internet kapcsolat

A program célja, hogy feladatokat menedzseljen családok / társaságok számára. A Lista menüpontra kattintva a felhasználó láthatja az éppen aktív feladatokat, melyeket részletesen meg lehet tekinteni, szerkeszteni, illetve törölni. Új feladat bejegyzésére is van lehetőség.
