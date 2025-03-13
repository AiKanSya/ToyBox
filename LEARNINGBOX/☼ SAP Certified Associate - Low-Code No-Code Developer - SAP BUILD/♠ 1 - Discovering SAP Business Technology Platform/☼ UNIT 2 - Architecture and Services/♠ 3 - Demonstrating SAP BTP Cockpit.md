# ♠ 1 [DEMONSTRATING SAP BTP COCKPIT](https://learning.sap.com/learning-journeys/discover-sap-business-technology-platform/demonstrating-the-sap-btp-cockpit_ee7eb2fe-266e-431b-b8c1-bf1dd34f777c)

> :exclamation: Objectifs
>
> - [ ] Able to demonstrate the SAP BTP Cockpit.

## :closed_book: SAP BTP COCKPIT

![](./RESSOURCES/BTP%20CP%20Accessing.png)

Le cockpit SAP BTP est l'interface utilisateur centrale pour l'administration et la gestion de vos comptes SAP BTP en tant qu'utilisateur de la plateforme. Pour y accéder, ouvrez une URL spécifique : `https://<Region>.cockpit.btp.cloud.sap`. Vous pouvez remplacer la région par celle dans laquelle vous opérez (par exemple : eu10, us10, ap10) pour réduire le temps de réponse et la latence du cockpit. Après vous être connecté avec vos identifiants, une fenêtre contextuelle vous demandera peut-être de choisir le compte global auquel vous souhaitez accéder. Vous pouvez bien sûr basculer entre les comptes globaux selon vos besoins.

> Note
>
> Cet apprentissage concerne les derniers comptes SAP BTP avec l'ensemble de fonctionnalités B. Pour accéder aux comptes SAP BTP avec l'ensemble de fonctionnalités A ou Neo, le cockpit SAP BTP dispose d'une URL d'accès différente et son apparence est légèrement différente. Vous trouverez les informations nécessaires dans la documentation produit.

[Link Video](https://learning.sap.com/learning-journeys/discover-sap-business-technology-platform/demonstrating-the-sap-btp-cockpit_ee7eb2fe-266e-431b-b8c1-bf1dd34f777c)

L'accès au cockpit SAP BTP n'est pas obligatoire et généralement inapproprié pour les utilisateurs métier. Ils y accèdent en appelant des URL pointant directement vers les fonctionnalités.

Regardez cette démo pour en savoir plus sur le cockpit SAP BTP.

## :closed_book: ALTERNATIVES TO SAP BTP COCKPIT

Utiliser le cockpit SAP BTP est le moyen le plus simple de gérer et d'administrer vos comptes SAP BTP. Vous pouvez également utiliser la CLI SAP BTP, une interface de ligne de commande pour gérer les comptes SAP BTP ou les appels d'API.

Pour gérer l'environnement Kyma, utilisez le tableau de bord Kyma ou l'outil de ligne de commande Kubernetes : kubectl.

Pour gérer l'environnement Cloud Foundry, utilisez le cockpit SAP BTP ou l'interface de ligne de commande Cloud Foundry : cf cli.

Pour utiliser l'environnement ABAP, utilisez Kyma ou Cloud Foundry. Vous pouvez également souscrire au service d'accès Web pour ABAP afin d'obtenir un Launchpad d'administration SAP Fiori pour l'environnement ABAP.

## :closed_book: KEY TAKEWAYS OF THIS LESSON

Avec SAP BTP Cockpit, accédez à votre plateforme SAP Business Technology Platform via une interface utilisateur graphique. SAP BTP Cockpit est avant tout un outil destiné aux administrateurs et autres utilisateurs de la plateforme. L'explorateur de comptes est l'une de ses sections les plus importantes. Il affiche tous les répertoires et sous-comptes du compte global et vous permet de les parcourir, de les créer, de les supprimer ou de les modifier. De nombreuses autres fonctionnalités sont disponibles, telles que la configuration de la sécurité, l'administration des services et les analyses.
