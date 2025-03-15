# **PROGRAMMATION**

## **GESTION DES ORDRES DE TRANSPORT**

Le programme ayant été activé et testé, il serait intéressant de voir l’**ordre de transport** associé. Pour ce faire, la transaction **SE01** est exécutée.

[Schéma - Fenêtre Transort Organizer](https://drive.google.com/file/d/1zVW06lcBL5NQQNNrr4Wy7gjGytMG0HO1/view?usp=share_link)

L’écran est composé de cinq onglets, mais seulement les deux premiers vont être vus en détail. 

Le premier tout d’abord nommé **Aff. Individ.** (pour _affichage individuel_) permet de renseigner un **ordre de transport** connu pour l’afficher, voir son **log de transport** (bouton Journaux), utile lorsque l’ordre est transporté sur les autres systèmes de développement afin de vérifier que tout s’est passé normalement :

[Schéma - Fenêtre Synthèse de tous les journaux de transports](https://drive.google.com/file/d/1xi1qdg9wpdxAoviL0IweggiSQyeoCEea/view?usp=share_link)

Comme indiqué sur l’exemple ci-dessus, l’**ordre de transport** (**OT** en abrégé) est passé sur plusieurs systèmes avec, à chaque fois, les étapes nécessaires pour l’import de l’ordre, sa vérification et la génération des programmes et dynpro (écran). Ces étapes sont valables pour des ordres de workbench, et sont légèrement différentes pour des ordres de customizing.

Enfin **Journal opérations** qui, comme son nom l’indique, va lister toutes les opérations produites sur l’ordre.

Pour revenir sur les erreurs de transport, **SAP** en dénombre quatre sortes :

1. **Code retour 0** : tout s’est bien passé, aucune anomalie rencontrée et dans ce cas, aucune action n’est nécessaire.

2. **Code retour 4** : _warning_ (alerte), une anomalie est apparue, mais elle est sans danger, une petite vérification peut s’imposer pour voir si tout est OK.

3. **Code retour 8** : erreur durant le processus de transport, comme par exemple un objet peut être utilisé par le programme transporté alors qu’il n’existe pas sur le système de connexion cible. Dans ce cas-là, une action urgente du développeur est nécessaire, car ce genre d’erreur amène des **dumps** avec plus ou moins de sévérité ralentissant ou bloquant les utilisateurs dans leurs tests ou leurs tâches quotidiennes.

4. **Codes retour 12 et 16** : assez rares mais existants, il s’agit en général d’une **erreur système** (panne de serveur, problème de connexion entre systèmes...), ici c’est l’équipe **Basis** qui doit s’occuper de corriger le problème et de relancer l’opération.

Les écrans finaux étant sensiblement les mêmes, le deuxième onglet sera d’abord détaillé avant de passer à la suite. Celui-ci permet donc de lister tous les OT d’un utilisateur (par défaut, celui de la connexion comme figuré ci-dessous) avec quelques options de filtrage.

[Schéma - Fenêtre Transport Organizer](https://drive.google.com/file/d/1MUOw140I5Ok6X3OkB3tGbWE6hL_YYgT4/view?usp=share_link)

Il est possible de dénombrer trois parties principales :

1. **Type d’ordre** va filtrer sur les différentes catégories de transport, à savoir :

+ **Ordres du Customizing**.

+ **Ordres du Workbench** (cf. section Détail d’un mandant SAP de ce chapitre).

+ **Transports de copies** : ce type d’**OT** est une sorte de **workbench** mais légèrement différent. En effet, alors que ce dernier a pour vocation d’être transporté jusqu’au dernier système à savoir la production, le transport de copies quant à lui, contient la dernière version du programme et un seul système cible (comme la qualité par exemple, afin d’effectuer des tests avec une quantité de données plus significative que ceux du système de développement).

+ **Relogements** : utilisé en général si la classe de développement des objets transportés a été réaffectée.

2. **Statut de l’ordre** va filtrer le résultat avec les ordres dits **Modifiable** (en cours de traitement) et/ou **Validé** (le terme libéré est beaucoup plus utilisé) et/ou depuis une date choisie (Depuis hier, Depuis une semaine, Depuis un mois ou depuis une date choisie).

3. Une sous-partie composée de deux onglets : **Information globale** donnera un aperçu très rapide des **erreurs** (voyant rouge) ou des **warnings** (voyant jaune) qui se sont éventuellement produits pendant le transport des **OT** de l’utilisateur sur d’autres systèmes avec la possibilité d’en afficher le détail avec les boutons **Transferts** et **Réparations**.
Le deuxième sous-onglet **Demandes transport** permet (lorsque l’option est installée, ce qui est assez rare), comme son nom l’indique, de faire une demande de transport directement à l’équipe **Basis** et d’en assurer son suivi.

Pour la suite, les options ordres de **Customizing** et de **Workbench** seront cochées ainsi que **Modifiables** et **Validé**, et le bouton **Afficher** indiquera le résultat.

Une nouvelle fenêtre apparaît, listant donc tous les **ordres de transport**, organisés selon plusieurs critères : le **mandant** (200 ou 300), puis le **type d’ordre** (**Workbench** ou **Customizing**) et enfin le **statut** (**Modifiable** ou **Validé**).

[Schéma - Fenêtre Transport Organizer : ordres](https://drive.google.com/file/d/14F3Dm28mHgzEaCqwkiNBEQr89lKYvec7/view?usp=share_link)

Ainsi sous le **mandant 300**, **Workbench** et **Modifiable**, se trouve l’**ordre de transport** récemment créé. Lorsque son arborescence est développée, la tâche apparaît et lorsqu’elle-même est développée, la liste des objets contenus se révèle. Une tâche est donc une sorte de **sous-ordre** regroupant tous les éléments de l’**OT**. Un **ordre de transport** peut en contenir une à plusieurs.

[Schéma - Ordre et sous-ordres de transport](https://drive.google.com/file/d/1ZIQFZyR93GpGvQkAkqNxFVO2TzpLqsVW/view?usp=share_link)

Un double clic sur cette tâche en affichera le détail.

[Schéma - Fenêtre Afficher ordre/tâche DEVK123456](https://drive.google.com/file/d/1qqgHOFO_qbmAOmz8wkr8pBgfWPS1WKZu/view?usp=share_link)

Dans la partie principale de l’écran, on retrouve un onglet avec les propriétés de la tâche (date de création...) et un deuxième où se trouve la liste des objets contenus dans l’**OT** (**Objets**). On y retrouve pour chaque ligne :

+ Une **Description synthétique**

+ Une **identification de programme**, généralement égale à **R3TR** pour objet global ou **LIMU** pour sous-objet de développement.

| ID Prog. | Type d'objet | Description         |
|----------|--------------|---------------------|
| R3TR     | PROG         | Programme ABAP      |
| R3TR     | DOMA         | Domaine             |
| R3TR     | DTEL         | Elément de données  |
| LIMU     | TABD         | Structure et Tables |
| LIMU     | FINC         | Fonction            |
| R3TR     | CLAS         | Classe              |
| LIMU     | METH         | Méthode             |
| LIMU     | DYNP         | Dynpro              |
| ...      | ...          | ...                 |

+ Le **Type d’objet** (voir tableau ci-dessus).
Liste des différents types d’objets avec leur identification

+ La **Fonction**, qui pour un objet concernant le contenu d’une table de **customizing** par exemple, est représentée par un raccourci vers les données insérées, modifiées ou supprimées de ladite table.

+ Le **Statut de blocage/import** car chaque objet contenu dans l’ordre est bloqué dans celui-ci, ce qui signifie que si un deuxième développeur veut modifier un programme bloqué dans un ordre, il ne pourra pas créer son propre OT, mais devra utiliser l’ordre courant et donc créer une nouvelle tâche comme décrit un peu avant.

+ La **Langue** qui doit être utilisée pour l’objet (rarement renseignée).

+ L’**Activité IMG** : concerne la configuration de **SAP** et donc des ordres de customizing avec une référence de l’activité exécutée dans la transaction **SPRO**.

Le bouton **Modifier** donne la possibilité d’ajouter manuellement des objets à la liste, ce qui n’est pas vraiment recommandé ou sinon le faire avec beaucoup de précaution.

Pour terminer, l’onglet **Documentation** permet au développeur ou au fonctionnel d’insérer des commentaires propres à la tâche ou à l’**OT**.

Au niveau de l’ordre en lui-même, on retrouve principalement les mêmes fonctionnalités. La différence ici est que le bouton **Modifier** permet juste de modifier le titre de l’ordre.