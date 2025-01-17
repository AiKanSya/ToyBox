# ♠ 3 [USING ADAPTERS](https://learning.sap.com/learning-journeys/developing-with-sap-integration-suite/using-adapters_f42fdb69-df78-4faf-bfd3-0a7b8c8beebd)

> :exclamation: Objectifs
>
> - [ ] Use adapters

## ADAPTERS

### ADAPTERS IN AN OVERVIEW

Une grande variété d'adaptateurs prédéfinis sont disponibles, avec une différenciation entre les adaptateurs d'entrée (émetteur) et de sortie (récepteur). Ces adaptateurs prennent en charge divers protocoles d'application et de transport, ainsi que des protocoles de message, et sont configurés en fonction de leur fonction prévue. Les adaptateurs peuvent être globalement classés en deux groupes :

Basé sur TCP.
Non basé sur TCP.
Souvent, ces adaptateurs sont simplement appelés : basés sur HTTP et non basés sur HTTP.

### EXAMPLE: ODATA ADAPTER

Détails d'un adapter OData

| DETAIL               | OUTCOME                                |
| -------------------- | -------------------------------------- |
| Category             | HTTP-based                             |
| Transport protocol   | TCP/IP                                 |
| Application protocol | HTTP/HTTPS                             |
| Message protocol     | Atom Pub as XML or JSON representation |

### OVERVIEW OF AVAILABLE ADAPTERS

Vous avez la possibilité de visiter la page d'aide ou d'afficher les adaptateurs disponibles sur un flux d'intégration, en fonction de votre licence, comme démontré précédemment avec la connectivité.

En lire plus : [Configure Adapter in Communication Channels](https://help.sap.com/docs/CLOUD_INTEGRATION/368c481cd6954bdfa5d0435479fd4eaf/1f066330e8314324bf3ebe3b6adc21b2.html)

### CUSTOM ADAPTER

Si les adaptateurs actuels ne répondent pas à vos besoins, il est possible d'importer des adaptateurs à partir de sources tierces.

Pour en savoir plus, cliquez ici : [Importation d'un adaptateur d'intégration personnalisé dans l'environnement Cloud Foundry](https://help.sap.com/docs/CLOUD_INTEGRATION/368c481cd6954bdfa5d0435479fd4eaf/482286e544014098874fde0da4bcca2c.html)

### DEVELOP YOUR OWN ADAPTER

Si aucune des sources mentionnées précédemment ne vous aide à trouver l'adaptateur souhaité, vous pouvez également créer votre propre adaptateur.

En savoir plus ici : [Développement d'adaptateurs personnalisés](https://help.sap.com/docs/CLOUD_INTEGRATION/368c481cd6954bdfa5d0435479fd4eaf/7392cc44de7c4450a65b8cd8f1042420.html)

### DIFFERENCE TO THE ADAPTERS IN PROCESS INTEGRATION

Au sein de PI, chaque format de message entrant est automatiquement transformé en protocole de message interne XI. Contrairement à l’intégration cloud, aucun format natif n’est disponible. Essentiellement, cela implique que si un format binaire est utilisé pour envoyer un message, il sera transmis tel quel au prochain composant du flux d'intégration sans aucune modification. C'est là que les convertisseurs entrent en jeu. L'utilisation du format de message XML permet de fournir une excellente prise en charge (XPATH) dans les composants de flux d'intégration individuels.

### SAMPLE ODATA RECEIVER ADAPTER

L'adaptateur OData est appliqué dans les exercices. Qu'est-ce qui distingue l'adaptateur OData et pourquoi est-il sélectionné pour être utilisé dans l'exercice ? Ceci est discuté dans les paragraphes suivants.

### THE QUERY WIZARD

L'adaptateur OData Sender comprend un assistant qui permet aux utilisateurs de naviguer vers l'interface accessible à l'aide d'un document de métadonnées. Cette approche permet de configurer l'adaptateur même si les détails de l'interface ne sont pas entièrement connus. Toutefois, cette procédure est limitée à OData V2.0 et ne convient que pour une petite structure hiérarchique.

![](./RESSOURCES/CLD900_20_U5L3_001_scr.png)

### THE PAGE PROCESSING MODE

Les interfaces OData transmettent des données sous la forme d'un flux à l'aide du protocole Atom Pub, avec des espaces de noms et leurs préfixes respectifs utilisés pour plus de clarté.

![](./RESSOURCES/CLD900_20_U5L3_002_scr.png)

Parfois, le nombre d'entrées dans le flux peut être important, ce qui peut entraîner des problèmes techniques dus aux limites de taille des messages. Pour surmonter ce défi, un traitement de pagination est utilisé. Il permet de lire la quantité totale d'entrées dans des paquets ou des pages, qui sont ensuite traitées séquentiellement. Néanmoins, cette procédure nécessite une décision de conception supplémentaire.

### SAMPLE WITH PAGE PROCESSING MODE

- No Page Processing

  Au n°1, le scénario comporte un appel de processus en boucle. Au n° 2, l’adaptateur OData appelle une API OData.

  ![](./RESSOURCES/CLD900_20_U5L3_003_scr.png)

  ![](./RESSOURCES/CLD900_20_U5L3_004_scr.png)

  Avec comme résultat :

  ![](./RESSOURCES/CLD900_20_U5L3_005_scr.png)

- With Page Processing

  Semblable au scénario précédent, la configuration OData se situe en dessous. Dans ce cas, chaque appel ne devrait livrer que 5 articles.

  ![](./RESSOURCES/CLD900_20_U5L3_006_scr.png)

  Avec comme résultat :

  ![](./RESSOURCES/CLD900_20_U5L3_007_scr.png)

### AUTOMATICALLY REMOVING OF THE NAME SPACES OF THE RESPONSE

Outre la possibilité de rassembler des données dans des packages, les espaces de noms et leurs préfixes sont également automatiquement éliminés. Il permet de traiter les données directement avec XPATH. Pendant la session d'exercices pratiques, l'adaptateur HTTP est utilisé pour les autres appels. Cependant, il ne supprime pas automatiquement les espaces de noms, ce qui nécessite un mappage supplémentaire.

En savoir plus ici : [Configurer l'adaptateur d'expéditeur OData](https://help.sap.com/docs/CLOUD_INTEGRATION/368c481cd6954bdfa5d0435479fd4eaf/de7aee5160134b74a949ac2b84cb7412.html)

### SUMMARY

SAP propose une gamme d'adaptateurs pour l'intégration cloud, qui varient en fonction de leur direction (entrant ou sortant) et des protocoles de transport, d'application et de message utilisés. D'une manière générale, ces adaptateurs peuvent être classés comme étant basés sur HTTP, basés sur TCP/IP ou non HTTP/non TCP/IP. Par exemple, l'adaptateur récepteur OData offre plusieurs fonctionnalités uniques, telles qu'un assistant qui facilite la configuration facile de l'API OData à appeler et la capacité de traitement de page pour gérer de gros volumes de données. En outre, l'adaptateur supprime les espaces de noms et leurs préfixes respectifs de la réponse, ce qui constitue un autre avantage important.

### CREATE A REQUEST AND REPLY TO AN EXTERNAL CALL (ODATA ADAPTER)

[Exercices](https://learning.sap.com/learning-journeys/developing-with-sap-integration-suite/using-adapters_f42fdb69-df78-4faf-bfd3-0a7b8c8beebd)
