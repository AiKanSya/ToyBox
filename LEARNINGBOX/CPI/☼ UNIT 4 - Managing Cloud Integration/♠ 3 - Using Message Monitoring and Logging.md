# ♠ 3 - [USING MESSAGE MONITORING AND LOGGING](https://learning.sap.com/learning-journeys/developing-with-sap-integration-suite/using-message-monitoring-and-logging_cbf56a9f-63f2-4fe2-af39-43cc48b490c8)

> :exclamation: Objectifs
>
> - [ ] Use message monitoring and loggin

## USING MESSAGE MONITORING AND LOGGING

### TYPES OF MONITORING

En plus du moniteur intégré standard, divers outils peuvent être utilisés avec Cloud Integration Monitoring. Il propose différentes catégories, notamment la surveillance des messages, la gestion de contenu et la gestion des alertes. Dans cette discussion, nous nous concentrons sur la surveillance des messages à l'aide du moniteur intégré pour les messages et de l'API SAP Cloud Integration pour l'API des journaux de traitement des messages.

Il existe une section de présentation utile qui met en évidence les points forts de chaque outil.

- SAP Cloud ALM
- Gestionnaire de solutions SAP
- Exécution axée sur SAP SAP Analytics Cloud
- Cadre d'interface d'application SAP
- API OData d'intégration cloud

### BUILD-IN MONITOR FOR MESSAGE MONITORING

La leçon s'applique à la collection de rôles PI_Integration_Developer, tandis que les exercices utilisent la collection de rôles PI_Administrator, ce qui peut entraîner des différences dans la présentation. Lors de la connexion via le menu du moniteur, le bureau suivant vous est présenté, où n'importe quelle vue peut être configurée individuellement en cliquant sur le signe plus.

![](./RESSOURCES/CLD900_20_U4L3_001_scr.png)

- N° 1 : Surveiller le traitement des messages,
- N° 2 : Gérer le contenu d'intégration,
- N° 3 : Gérer la sécurité - Admin Place,
- N° 4 : Gérer les magasins,
- N° 5 : Journal d'accès.

Ici, nous nous intéressons uniquement au passage à la surveillance des messages (n°1) et au journal d'accès (n°5). Tous les autres domaines concernent principalement les _administrateurs d'intégration_.

### MONITOR MESSAGE PROCESSING AREA

La vue d'ensemble affiche tous les messages traités dans tous les flux d'intégration déployés et peut être filtrée. Il permet également un accès direct au message traité.

### THE MESSAGE AT THE STATUS COLUMN CAN HAVE DIFFERENT VALUES

- Complété
- Traitement
- Réessayer
- Escaladé
- Échoué
- Annulé
- Écarté
- Abandonné

### SAMPLE WITH MESSAGE STATUS COMPLETED

1. Ouvrir Monitor Artifacts → Overview → Manage Integration Content

   ![](./RESSOURCES/CLD900_20_U4L3_002_scr.png)

   No. 1: the filter bar, No. 2: a message with status `complete`.

2. Choisissez le message avec le statut `complete` :

   ![](./RESSOURCES/CLD900_20_U4L3_003_scr.png)

   Sur le côté droit de la fenêtre se trouve une autre section qui fournit une multitude d'informations sur le traitement des messages. Lorsque le niveau de journalisation est défini sur info, cette section sert de moniteur principal.

   Cependant, si le niveau de journalisation est défini sur trace, vous pouvez accéder au mode débogage du flux de processus, que nous avons déjà rencontré dans l'exercice.

   ![](./RESSOURCES/CLD900_20_U4L3_004_scr.png)

### JUMP IN DIRECTLY FROM YOUR INTEGRATION FLOW

Une version plus concise pourrait être : "Vous pouvez naviguer du flux d'intégration à la section des artefacts du moniteur à l'aide du lien Naviguer vers la gestion du contenu d'intégration, qui ouvre le moniteur dans un nouvel onglet pour une navigation plus facile." Celui-ci est utilisé dans les exercices, et permet d'accéder à toutes les informations sur le traitement via différents onglets.

![](./RESSOURCES/CLD900_20_U4L3_005_scr.png)

Cette approche est utilisée dans les exercices de cette formation. Toutes les informations sur le traitement sont accessibles via les différents onglets.

### SYSTEM LOG FILES

La section Journaux d'accès du moniteur intégré fournit un accès direct aux fichiers journaux système via la vignette Fichiers journaux système. Ces fichiers incluent l'accès et la trace HTTP et sont conservés pendant 30 jours.

![](./RESSOURCES/CLD900_20_U4L3_006_scr.png)

Après avoir ouvert la vignette, vous avez accès aux journaux système.

![](./RESSOURCES/CLD900_20_U4L3_007_scr.png)

### SAP CLOUD INTEGRATION API FOR MESSAGE PROCESSING LOGS

Le moniteur lui-même est basé sur une API d'intégration cloud. Pour l'examiner, accédez à : [api.sap.com](https://api.sap.com/) et recherchez l'API SAP Cloud Integration. Retrouvez les API ici : [API.SAP.com](https://api.sap.com/).

![](./RESSOURCES/CLD900_20_U4L3_008_scr.png)

Ouvrez la vignette Journaux de traitement des messages → Référence API. Nous pouvons maintenant examiner l'API avec l'interface utilisateur Swagger.

![](./RESSOURCES/CLD900_20_U4L3_009_scr.png)

Essayez GET `/MessageProcessingLogs`.

![](./RESSOURCES/CLD900_20_U4L3_010_scr.png)

Au (n°1), vous retrouvez les métadonnées de ce message. Au (n°2), la navigation se fait à gauche pour examiner des informations spécifiques.

### CONFIGURE THE API ACCESS

Si un utilisateur se voit attribuer la collection de rôles PI_Administrator ou PI_Integration_Developer, il peut accéder directement à l'API à l'aide de ses informations d'identification.

- Le schéma d'URL est :

  `https://{{hôte}}/api/v1/`

- Exemple de fichiers journaux de ressources

  Appelez l'URL suivante avec votre propre sous-domaine et région : https://..hana.ondemand.com:443/api/v1/LogFiles

### EXTERNAL LOGGING

Pour être indépendant de la taille de la base de données SAP Cloud Integration et gérer un grand nombre de fichiers journaux, les clients peuvent utiliser la fonctionnalité de journalisation externe pour envoyer les journaux de traitement des messages à un système externe. Cette section fournit des instructions sur la façon d'activer cette fonctionnalité sur votre locataire.

### RESOURCES

En savoir plus:

- Types de surveillance

  Lisez l'intégralité de l'histoire : [Outils de surveillance pour la capacité d'intégration cloud de SAP Integration Suite | Blogues SAP](https://blogs.sap.com/2021/10/28/monitoring-tools-for-cloud-integration-capability-of-sap-integration-suite/)

- Moniteur intégré pour la surveillance des messages

  Voici un aperçu des sections de la page de démarrage du moniteur : [Surveillance](https://help.sap.com/docs/CLOUD_INTEGRATION/368c481cd6954bdfa5d0435479fd4eaf/05446d0616d44e1daf821c273b69fcc6.html?locale=en-US&q=Camel)

- Statut des messages

  Trouvez un aperçu complet et une description sur : [Statut du message](https://help.sap.com/docs/CLOUD_INTEGRATION/368c481cd6954bdfa5d0435479fd4eaf/733a57b10f504ac9b2b5aa7fda664dc5.html?locale=en-US&q=Camel)

- Journalisation externe

  [Journalisation externe](https://help.sap.com/docs/CLOUD_INTEGRATION/368c481cd6954bdfa5d0435479fd4eaf/ad719c1c2ecb48b6ba275d2b0ee2ba7a.html?locale=en-US)

### SUMMARY

SAP propose divers produits pour prendre en charge la surveillance des messages, tels que SAP Cloud ALM, SAP Solution Manager, SAP Focused Run, SAP Analytics Cloud, etc. De plus, SAP Cloud Integration fournit son propre moniteur graphique, qui offre une vue complète du traitement des messages. Le moniteur permet aux utilisateurs de lire les fichiers journaux du système et repose sur une API, qui peut être directement appelée. Cette API permet aux utilisateurs de créer leur propre moniteur personnalisé.

## CREATE A TIMER IN PLACE OF THE MESSAGE START EVENT

[Exercices](https://learning.sap.com/learning-journeys/developing-with-sap-integration-suite/using-message-monitoring-and-logging_cbf56a9f-63f2-4fe2-af39-43cc48b490c8)
