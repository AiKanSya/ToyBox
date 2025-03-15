# **PROGRAMMATION**

## **SE38 - EDITEUR ABAP**

> [Schéma - Fenêtre : Création de programme](https://drive.google.com/file/d/1YHL8o3ReHJjVX4_F7HqaaImjkhQMA6v5/view?usp=share_link)

Sous la zone servant à insérer le nom de programme suivi du bouton **Créer** (**Programme - Créer [F5]**) se situe une liste de choix :

+ **Texte Source** pour modifier le code source.

+ **Variantes** pour modifier la ou les variantes associées au programme.

+ **Propriétés** (développé tout de suite après lors de la création du programme).

+ **Documentation**

+ **Éléments de texte** : regroupe tous les messages, textes... du programme.

Et pour chacune de ces options, la possibilité soit de les Afficher (**Programme - Afficher [F7]**, soit de les Modifier (**Programme - Modifier [F6]**)).

Pour les développements spécifiques **ABAP**, tous les objets doivent toujours commencer par **Z** ou **Y**. Le système **SAP** bloque toute tentative ne respectant pas cette règle.

### **CREATION PROGRAMME**

Le programme **ZHELLO** sera créé. Après avoir renseigné le nom dans la zone appropriée, puis vérifié que l’option **Texte source** a bien été choisie, il sera alors possible soit de cliquer sur le bouton **Créer**, soit d’utiliser la touche raccourci-clavier **[F5]** (soit bien sûr de se servir du menu de la liste déroulante).

Une fenêtre des propriétés du programme apparaît. Plusieurs éléments sont obligatoires, à commencer par le **titre** (quelconque, pour cet exemple, celui de ’**Hello World**’ sera choisi).

> [Schéma - Fenêtre de paramètre - Création d'un programme SE38](https://drive.google.com/file/d/17jUHx7i3Z0empSA9uydliYMLOukD3FpX/view?usp=share_link)

### **ATTRIBUTS**

Viennent ensuite les **attributs**, à commencer par le **Type** de programme. Il y en a bien évidemment plusieurs à savoir.

#### TYPES

+ **Programme exécutable (1)** : défini comme **’REPORT’** (voir écran suivant) qui peut être appelé directement à partir d’une transaction, via l’éditeur **ABAP** (**SE38**) ou par un programme externe.

+ **Programme Include (I)** : défini comme **’INCLUDE’**, contient les routines ou les déclarations des variables d’un programme principal. Il est utilisé une fois qu’il a été déclaré via la syntaxe **’INCLUDE’** (cf. chapitre Création d’un programme ABAP - Organisation finale du programme).

+ **Pool de Modules (M)** : définit **’PROGRAM’**, utilisé lorsqu’un programme peut être composé de plusieurs écrans complexes (un écran principal, un écran résultat, un sous-écran détail...) et ne peut être exécuté qu’à partir d’une transaction (impossible de l’éxécuter directement via l’éditeur **ABAP**, comme dans la majorité des cas).

+ **Groupe de fonctions (F)** : définit **’Groupe fonctions’**, permet de regrouper plusieurs modules de fonctions sous un programme principal.

+ **Pool de sous-programmes (S)** : définit **’Pool ss-progr.’**, contient des routines de programmes (**FORM**) pouvant être appelées par un programme externe.

+ **Pool d’interfaces (J)** : définit le programme comme **interface ABAP** (cf. chapitre Les classes - Introduction à l’**ABAP Objet**).

+ **Pool de classes (K)** : définit cette fois-ci le programme comme **classe ABAP** (cf. chapitre Les classes - Introduction à l’**ABAP Objet**).

+ **TYPE-POOL (T)** : contient des déclarations de variables de type **’TYPES’** (cf. chapitre Instructions basiques **ABAP - Variables et constantes**) pouvant être appelées par un programme externe.

+ **Transformation (Programme ST ou XSLT (X))** : permet de lire et/ou de créer des fichiers au format **XML**.

+ **Proxy de procédure de base de données (Q)**.

#### **STATUT, APPLICATION & GROUPE AUTORISATION**

N’étant pas obligatoires et assez peu utilisés, il n’est pas nécessaire de s’y attarder mais en résumé

+ le **statut** permet de définir de quel genre de programme il s’agit (programme test, système ou pour la production)

+ **application** permet de le catégoriser (gestion des articles, comptabilité analytique...)

+ le **groupe d’autorisations**, comme son nom l’indique, authentifie l’utilisateur exécutant le programme afin de vérifier qu’il ait bien les permissions requises pour effectuer cette tâche.

Comme le programme à créer est simple et vise à être exécuté directement via transaction ou éditeur ABAP, le type exécutable sera choisi.

#### **BD LOGIQUE & VERS**

Après avoir fait ce choix, deux autres options supplémentaires sont apparues : **BD logique** qui contient tout un groupe d’objets (allant de déclarations de variables, d’includes jusqu’aux écrans de sélection), et **Vers.** écran de sélection pour choisir celui de la **BD logique** à utiliser. Comme pour les options précédentes, elles seront laissées à blanc.

#### **BLOCAGE DE L'EDITEUR**

Ensuite, l’option **Blocage de l’éditeur** doit être décochée (sinon il serait impossible pour d’autres développeurs de modifier ce programme).

#### **CONTROLES UNICODE ACTIFS & ARITHMETIQUE A VIRGULE FIXE**

Enfin, **Contrôles Unicode actifs et Arithmétique à virgule fixe** doivent rester cochées (cette dernière option contraindrait le développeur à n’utiliser que des nombres entiers).

> [Schéma - Fenêtre final de création de programme avec paramétrage](https://drive.google.com/file/d/1MdWu-UuIb7FGp9VtBZXwmdtSXS0yhPQn/view?usp=share_link)

#### **LOCAL OU TRASNPORT DANS LES SYSTEMES DU PROJET**

Une fois toutes les propriétés du programme renseignées, et après avoir cliqué sur **Sauvegarder**, une nouvelle fenêtre apparaît. Cette fois-ci, il sera nécessaire de définir si le programme a pour vocation de rester en **local** ou s’il devra être **transporté** dans les systèmes du projet.

[Schéma - Fenêtre Créer entrée de catalogue d'objets](https://drive.google.com/file/d/1aMTmUCblPgdqhVu9IgGDsyq960_8rIp8/view?usp=share_link)