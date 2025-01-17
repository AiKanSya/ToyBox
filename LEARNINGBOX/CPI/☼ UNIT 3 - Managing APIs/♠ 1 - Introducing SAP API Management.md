# ♠ 1 [INTRODUCTION SAP API MANAGEMENT](https://learning.sap.com/learning-journeys/developing-with-sap-integration-suite/introducing-sap-api-management_dd668e10-08ab-4763-9342-3e6cc7e74c18)

> :exclamation: Objectifs
>
> - [ ] Describe the key features of SAP API Management

## WHAT IS SAP API MANAGEMENT?

SAP API Management est une solution qui cartographie l'ensemble du cycle de vie d'une API.

Il offre notamment les fonctionnalités suivantes :

#### BUILDING APIS

Le portail API est une application qui fournit une plate-forme commune permettant aux concepteurs d'API de définir et de publier des API. Chaque client API Management dispose de sa propre application de portail API dans le cloud. Le portail API offre des fonctionnalités pour configurer des systèmes, créer et publier des API, analyser et tester des API.

#### PUBLISHING APIS

Un produit est un ensemble d'API. Il contient des métadonnées spécifiques à votre entreprise à des fins de surveillance ou d'analyse. Par exemple, toutes les API liées au CRM peuvent être regroupées en un seul produit CRM. Au lieu de publier les API individuellement, il est plus facile de regrouper les API associées en tant que produit et de les publier. Après avoir inclus les API requises dans un produit, le produit est publié dans le catalogue, où le produit est disponible pour les développeurs d'applications.

#### AANALYSING APIS

API Management fournit des fonctionnalités d’analyse complètes pour comprendre les différents modèles de consommation des API. Le serveur API Analytics utilise les données d'exécution des API pour analyser les informations. Les données d'exécution sont collectées, analysées et affichées sous forme de graphiques, d'en-têtes et d'indicateurs de performance clés (KPI).

#### CONSUMING APIS

API Business Hub Enterprise est une application qui fournit une plate-forme commune permettant aux développeurs d'applications d'utiliser des API. Chaque client API Management dispose de sa propre application API Business Hub Enterprise dans le cloud. L'API Business Hub Enterprise offre des fonctionnalités permettant d'intégrer des développeurs d'applications, d'explorer et de tester des API, de créer et de s'abonner à des applications.

#### MONETIZING APIS

SAP API Management fournit une fonctionnalité de monétisation à tous les fournisseurs d'API pour générer des revenus sur l'utilisation des API. En tant qu'administrateur d'API, vous pouvez créer un plan tarifaire, attacher un plan tarifaire à un produit dans le portail API et publier le produit dans l'API Business Hub Enterprise.

Vous pouvez également afficher les détails de la facture de chaque développeur dans le portail API. En tant que développeur d'applications, dans API Business Hub Enterprise, vous pouvez créer une application et ajouter des produits à l'application. En fonction de l'utilisation du produit, vous pouvez afficher les détails de la facture correspondante.

#### DISCOVER API PACKAGES

Dans Gestion des API, vous pouvez découvrir les packages API pris en charge par la plateforme de gestion des API disponibles dans SAP Business Accelerator Hub sur le portail API.

#### API DESIGNER

Modélisez les API à l’aide du concepteur d’API. Le concepteur d'API est basé sur la norme OpenAPI Spécification (OAS), qui est un projet collaboratif open source. Le concepteur d'API vous permet de créer et de modifier des API de manière transparente, et d'afficher la documentation correspondante dans un seul cadre de fenêtre. Il possède de riches fonctionnalités intégrées, qui ne peuvent se limiter à la conversion d'API d'un format à un autre (par exemple, de RAML en YAML, JSON en YAML et vice versa), à générer des stubs de serveur et de client, à télécharger des spécifications d'API, etc. . La spécification OpenAPI, créée par le concepteur d'API, peut être publiée en tant qu'API sur SAP Business Accelerator Hub.

## TYPICAL USE CASES

![](./RESSOURCES/CLD900_20_U3L1_001_scr.png)

#### ENTERPRISE DIGITAL APPS

Créez des applications numériques d'entreprise pour les employés (ventes sur le terrain/services/assistance), les clients et les partenaires.

#### REAL-TIME API INTEGRATION

Partagez les données d'entreprise des lacs de données et des systèmes d'entreprise avec les fournisseurs, les partenaires et les clients. Exposez les transactions et les processus de l'entreprise sous forme d'API pour les fournisseurs et les clients.

#### ENTERPRISE MICROSERVICES

Créez et gérez des microservices axés sur l'API. Activez le DevOps des microservices.

### USER ROLES

Pour tous les travaux ultérieurs dans SAP API Management, vous avez besoin de la collection de rôles APIPortal.Administrator. Un aperçu du total des rôles disponibles peut être trouvé dans le deuxième lien sous Ressources.

### RESOURCES

Les ressources suivantes sont disponibles sur le portail d'aide SAP :

- [Page de présentation Gestion des API SAP](https://help.sap.com/docs/SAP_CLOUD_PLATFORM_API_MANAGEMENT?version=Cloud&locale=en-US)
- [Attribution des rôles d'utilisateur](https://help.sap.com/docs/SAP_CLOUD_PLATFORM_API_MANAGEMENT/66d066d903c2473f81ec33acfe2ccdb4/911ca5a620e94ab581fa159d76b3b108.html?locale=en-US)

### SUMMARY

Avec la gestion des API, l’intégralité du cycle de vie d’une API peut être cartographiée. Cela commence par la création, la publication et la maintenance sur toute la durée. Dans une architecture API first, la gestion des API est l’élément central et est utilisée dans chaque cas d’utilisation spécifique d’un client.
