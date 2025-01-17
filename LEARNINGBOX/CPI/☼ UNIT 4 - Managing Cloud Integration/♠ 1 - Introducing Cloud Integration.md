# ♠ 1 [INTRODUCTION CLOUD CONNECTOR](https://learning.sap.com/learning-journeys/developing-with-sap-integration-suite/introducing-cloud-integration_b3692797-cbf6-44ac-9b05-20b77411fa96)

> :exclamation: Objectifs
>
> - [ ] Describe the complete Integration Flow process which we will implement in the next exercises

## INTRODUCTION TO CLOUD CONNECTOR

### WHAT IS SAP CLOUD INTEGRATION?

Les affirmations suivantes tentent de répondre à la question :

- Il s'agit de l'une des fonctionnalités principales de SAP Integration Suite.
- Il est basé sur le framework open source Camel de l'Apache Software Foundation.
- SAP Cloud Integration prend en charge l'intégration des processus de bout en bout via l'échange de messages
- Le développement, le déploiement et la surveillance s'effectuent dans le navigateur avec des outils graphiques
- C'est l'un des outils Low Code/No Code

### KEY FEATURES

![](./RESSOURCES/CLD900_20_U4L1_001_scr.png)

Un flux d’intégration possède un adaptateur d’expéditeur 0-1. Le message est transmis via un point de terminaison si un adaptateur est configuré. Différents adaptateurs d'expéditeur sont disponibles du côté de l'expéditeur. (N°1) Après réception du message, le processus est lancé via un événement de démarrage Start. Viennent ensuite des étapes de traitement prédéfinies. (N° 2) Il existe un large éventail de capacités d'intégration qui définissent différentes manières de traiter les messages sur la plate-forme d'intégration. En fin de compte, les adaptateurs récepteurs peuvent être configurés pour compléter le processus métier. Le traitement des messages peut être effectué de manière synchrone ou asynchrone. Grâce à ce concept, de nombreux modèles d'intégration d'entreprise bien connus peuvent être cartographiés.

### CONNECTIVITY

Les adaptateurs émetteur et récepteur sont différents. Vous pouvez créer votre propre adaptateur. Pour ce faire, vous pouvez utiliser le kit de développement logiciel fourni.

Pour déterminer quels adaptateurs sont disponibles en fonction de votre licence, vous pouvez afficher les adaptateurs après avoir créé un modèle de projet vide, comme décrit dans l'exercice suivant. Effectuez les étapes suivantes :

1. Commencez avec un modèle de projet vide modifiable :

   ![](./RESSOURCES/CLD900_20_U4L1_002_scr.png)

2. Tracez une ligne entre le canal et l'événement Start. Les adaptateurs disponibles sont affichés :

   ![](./RESSOURCES/CLD900_20_U4L1_003_scr.png)

3. Procédez de la même manière du côté du destinataire :

   ![](./RESSOURCES/CLD900_20_U4L1_004_scr.png)

### INTEGRATION CAPABILITIES

Toutes les capacités d'intégration sont catégorisées. Parmi eux figurent les étapes de traitement prédéfinies. Un flux d'intégration combine désormais les capacités individuelles pour, par exemple, cartographier un processus technique. Il n'y a presque aucune limite aux possibilités de combinaison. Pour examiner toutes les fonctionnalités d'intégration disponibles avec les étapes individuelles affectées, vous pouvez à nouveau démarrer avec le modèle de processus vide. Vous trouverez la palette d'outils en haut de votre écran. Chaque icône décrit une fonctionnalité dans l'interface utilisateur de l'intégration cloud.

Dans le cas suivant, cela devient visible au niveau de la capacité de transformation.

![](./RESSOURCES/CLD900_20_U4L1_005_scr.png)

### PREDEFINED INTEGRATION CONTENT

Comme indiqué précédemment, l’art de combiner les capacités d’intégration de telle manière que cela devienne un processus professionnel. Les flux d’intégration peuvent être complexes. SAP propose plus de 400 flux d'intégration prédéfinis qui peuvent être consommés.

Il existe deux manières d'étudier le contenu d'intégration prédéfini. Un parcours directement via Integration Suite est présenté à la fin du cours. L'autre variante est décrite dans le paragraphe suivant.

### EXPLORE PREDEFINED INTEGRATION CONTENT IN SAP BUSINESS ACCELERATOR HUB

Tous les contenus d'intégration prédéfinis disponibles sont répertoriés dans SAP Business Accelerator Hub, en fonction des produits à intégrer.

### PROCEDURE

Les étapes suivantes doivent être effectuées dans l'ordre :

- Ouvrez le SAP Business Accelerator Hub sur : API.SAP.com
- Accédez à l'onglet Découvrir les intégrations
- Choisissez le premier produit
- Choisissez le deuxième produit qui sera intégré au premier
- Trouvez tous les contenus d'intégration prédéfinis disponibles sous forme de package d'intégration, en fonction de votre sélection
- Naviguez plus profondément dans un package d’intégration et trouvez tous les flux d’intégration disponibles
- Naviguez plus profondément dans un flux d’intégration pour découvrir la configuration complète

Plus de détails sur les étapes :

1. Découvrez l'onglet Intégrations :

   ![](./RESSOURCES/CLD900_20_U4L1_006_scr.png)

2. Choisissez le premier produit, par exemple, SAP S/4HANA :

   ![](./RESSOURCES/CLD900_20_U4L1_007_scr.png)

3. Choisissez le deuxième produit, par exemple SAP SuccessFactors :

   ![](./RESSOURCES/CLD900_20_U4L1_008_scr.png)

4. Accédez à un package d'intégration, par exemple, SAP SuccessFactors Employee Central Integration with SAP ERP ou SAP S/4HANA, Employee Data :

   ![](./RESSOURCES/CLD900_20_U4L1_009_scr.png)

5. Il n’existe qu’un seul flux d’intégration disponible. Accédez à ce flux d'intégration :

   ![](./RESSOURCES/CLD900_20_U4L1_010_scr.png)

Vous trouverez ici toutes les informations pour comprendre ce flux d’intégration :

- Les configurations de toutes les étapes
- Les documentations commerciales
- Et plus

Pour utiliser ce package d'intégration ou flux d'intégration, vous devez utiliser le menu Découvrir dans Integration Suite. Ceci est démontré par l’exemple des Exemples à la fin des exercices.

### SOURCES

En savoir plus:

- À propos des fonctionnalités clés :

  - Un aperçu complet des modèles d'intégration d'entreprise peut être trouvé ici : https://www.enterpriseintegrationpatterns.com/
  - [Accueil - Apache Camel](https://camel.apache.org/)

- À propos de la connectivité :

  - Un aperçu complet des adaptateurs actuellement disponibles peut être trouvé ici : [Connectivité (adaptateurs)](https://help.sap.com/docs/CLOUD_INTEGRATION/368c481cd6954bdfa5d0435479fd4eaf/55325f2a722c4f67bb7752b369b09ff8.html?locale=en-US)
  - Plus d'informations peuvent être trouvées ici : [Développement d'adaptateurs personnalisés](https://help.sap.com/docs/CLOUD_INTEGRATION/368c481cd6954bdfa5d0435479fd4eaf/7392cc44de7c4450a65b8cd8f1042420.html?locale=en-US)

- À propos des capacités d'intégration : l'aperçu complet peut être trouvé ici : [Capacités d'intégration](https://help.sap.com/docs/CLOUD_INTEGRATION/368c481cd6954bdfa5d0435479fd4eaf/e32cedef6e8c4af5816c446541c7f527.html?locale=en-US)

### SUMMARY

Les flux d'intégration individuels sont compilés via des étapes fonctionnelles prédéfinies. Ils sont divisés en catégories telles que le mappage, le routage et autres, et fournis sous forme de palette. Le processus est démarré via exactement un message entrant. Le contenu de ce message peut ensuite être manipulé de diverses manières au cours du processus lui-même. La connectivité et la flexibilité proviennent de nombreux adaptateurs émetteurs et récepteurs. En plus de créer le flux d'intégration individuel, SAP propose plus de 400 flux d'intégration prédéfinis, car ils sont souvent nécessaires dans l'environnement SAP.

## DESCRIBE THE IFLOW PROCESS CREATED IN THE NEXT EXERCICES

[Exercices](https://learning.sap.com/learning-journeys/developing-with-sap-integration-suite/introducing-cloud-integration_b3692797-cbf6-44ac-9b05-20b77411fa96)
