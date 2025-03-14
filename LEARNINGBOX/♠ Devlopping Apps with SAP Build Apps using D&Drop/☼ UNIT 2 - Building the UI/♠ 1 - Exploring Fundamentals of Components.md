# ♠ 1 [EXPLORING FUNDAMENTALS OF COMPONENTS](https://learning.sap.com/learning-journeys/develop-apps-with-sap-build-apps-using-drag-and-drop-simplicity/exploring-fundamentals-of-components_efef4fe8-6489-4a23-a0be-643f09f7c024)

> :exclamation: Objectifs
>
> - [ ] Define components.
>
> - [ ] Classify different groups of components.
>
> - [ ] Explain the use of layout components.

## :closed_book: DEFINE COMPONENTS

Quel est le rôle de l'interface utilisateur (UI) dans une application ?

L'UI définit ce que vous verrez et pourrez faire dans l'application. Elle définit non seulement les éléments visibles, mais aussi certaines interactions de base. Les environnements de développement sans code sont généralement équipés d'un ensemble d'outils pour créer une UI.

Dans SAP Build Apps, les composants sont essentiels pour créer facilement et rapidement des applications qui répondent aux besoins les plus variés des entreprises et enrichissent les processus de travail. En termes simples, les composants sont des éléments de code préfabriqués pouvant servir de blocs de construction avec des fonctions prédéfinies pour concevoir l'UI et permettre au pont d'utiliser la logique.

![](./RESSOURCES/U2_L1_Components.png)

Les composants peuvent être intégrés à tout type d'élément, comme des boutons, des champs de saisie, des zones de texte ou des images. Il n'existe aucune limite quant à leur taille. Les plus petits composants peuvent être une icône ou une ligne de séparation. Les plus grands composants peuvent être un composant cartographique pour la géolocalisation ou un lecteur vidéo. Leur préfabrication favorise une expérience intuitive dans le champ visuel du développement et, grâce aux fonctionnalités fournies, offre de nombreuses possibilités de développement. Cependant, si des exigences spécifiques sont requises, les composants peuvent également être adaptés et construits en fonction de leur apparence et de leurs fonctionnalités.

## :closed_book: IMAGE AND FORM COMPONENTS

![](./RESSOURCES/BTP150_04_U3L4C2_001.png)

Les composants de SAP Build Apps sont divisés en plusieurs sections sur la gauche. En haut, vous trouverez les composants d'image qui permettent d'ajouter les éléments de base d'une application. Les composants de titre et de texte sont toujours présents et combinés dans différents styles pour une présentation optimale des informations. Le composant de carte combine texte et titre et est mis en valeur par son format.

Grâce au style, les composants d'image et d'icône permettent de concevoir une application conviviale ou plus ciblée. Les composants de bouton sont destinés à stimuler les interactions et à lancer des processus logiques. Avec les composants de formulaire, l'exemple d'application présenté dans l'exercice suivant illustre également que la plupart des composants sont fréquents et, combinés les uns aux autres, constituent souvent la base d'une interface utilisateur intuitive et dynamique.

![](./RESSOURCES/U2_Example_Components_notfinal.png)

Les composants de formulaire permettent d'insérer des formes utiles dans l'application. Ils sont particulièrement utiles pour exploiter les informations utilisateur et permettre des interactions. Ils permettent à l'utilisateur de déclencher des actions simples ou plus complexes. Le composant le plus fréquemment utilisé est le bouton, prédestiné à déclencher une action en le sélectionnant, même si d'autres composants, connectés à la logique, peuvent également déclencher des actions en le sélectionnant.

Les champs de saisie et de mot de passe sont essentiels pour que les utilisateurs puissent saisir des informations qui peuvent être traitées ultérieurement, par exemple pour stocker et afficher un utilisateur ou l'authentifier.

De plus, les cases à cocher, les listes déroulantes et les curseurs offrent un moyen rapide et intuitif de sélectionner des valeurs prédéfinies dans ces composants. Ces informations peuvent ensuite être traitées ultérieurement par l'application.

## :closed_book: LIST COMPONENTS

![](./RESSOURCES/Lists_Examples1.png)

Créer des listes à l'aide de composants est une approche importante et fréquemment utilisée dans SAP Build Apps. Pour afficher certaines informations à l'aide de listes, les composants sont généralement connectés à une base de données (source) où sont stockées les données. Il est possible de lister des informations temporaires provenant de l'application, combinées à des saisies utilisateur ou à de nouvelles informations issues de fonctions et de formulaires. Il est également possible de se connecter via des interfaces à des données/informations provenant d'Internet ou d'autres solutions SAP ou tierces. Le type d'affichage des composants est varié : certains utilisent des listes classiques auxquelles plusieurs informations sont connectées, d'autres affichent également des images et des icônes. Pour les listes, en particulier, il est important d'utiliser le composant de propriétés, expliqué plus en détail dans la leçon suivante, pour un affichage dynamique ou ciblé.

## :closed_book: LAYOUT COMPONENTS

![](./RESSOURCES/Layout_Components.png)

Par défaut, SAP Build Apps propose trois composants de mise en page qui vous permettent de concevoir des options supplémentaires pour la mise en page de l'interface utilisateur et de structurer les éléments. Vous pouvez simplement regrouper des composants ou effectuer des actions plus complexes, comme rendre les composants d'un groupe invisibles ou visibles après un déclenchement, comme une seule section à la fois. Ainsi, les composants de mise en page offrent des avantages supplémentaires pour la conception d'applications, tels que :

- Plus de clarté, notamment grâce à l'arborescence de mise en page ;

- Affichage des sections de contenu côte à côte ;

- Proportionnement et regroupement faciles du contenu et des composants ;

- Saisie simultanée de plusieurs composants sous forme de groupe ;

- Affichage intuitif possible par défilement dans la zone définie, etc.

## :closed_book: LAYOUT TREE

Lisez la vidéo pour obtenir un aperçu de l'arborescence de mise en page et découvrez comment utiliser l'offre d'arborescence de mise en page des applications SAP Build.

[Link Video](https://learning.sap.com/learning-journeys/develop-apps-with-sap-build-apps-using-drag-and-drop-simplicity/exploring-fundamentals-of-components_efef4fe8-6489-4a23-a0be-643f09f7c024)

Les composants de mise en page sont utiles non seulement pour créer une structure claire, mais aussi, en combinaison avec eux, l'arborescence, située en bas à droite, qui offre une vue d'ensemble claire.

Dans l'arborescence, les conteneurs utilisés sont classés par ordre d'affichage de la mise en page. Il est ainsi avantageux de sélectionner des composants directement dans l'arborescence, car les noms des composants qui peuvent leur être attribués y sont également affichés.

Une autre méthode utile consiste à déplacer et restructurer les composants par glisser-déposer, grâce à une ligne d'aide qui apparaît.

![](./RESSOURCES/U2_Lesson1_Tree_Blue_Line.gif)

Si un composant de mise en page est utilisé, il s'affiche également dans l'arborescence. Cependant, il présente l'avantage de pouvoir utiliser d'autres composants subordonnés au composant de mise en page et de pouvoir les développer et les réduire dans la vue.

## :closed_book: ADD COMPONENTS TO YOUR UI

### BUSINESS SCENARIO

Créez la base de l'interface utilisateur en ajoutant divers composants sur les pages précédemment créées.

### EXERCISE OPTIONS

Pour démarrer l'exercice, sélectionnez « Démarrer l'exercice » dans la figure ci-dessous.

Une fenêtre contextuelle s'ouvre. Vous disposez des options suivantes :

- Démarrer : la simulation démarre. Suivez la simulation pour apprendre à ajouter des composants à votre interface utilisateur.

- Ouvrir le document PDF : un PDF s'ouvre. En suivant les étapes décrites dans ce document, vous pouvez réaliser les exercices dans votre environnement système.

[Link Exercise](https://learning.sap.com/learning-journeys/develop-apps-with-sap-build-apps-using-drag-and-drop-simplicity/using-properties_b8b8a508-77a7-4db8-b379-fb3435a0565b)
