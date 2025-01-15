# `♠ 2 - INTRODUCING FIRST APPROACH TO AN API FIRST ARCHITECTURE`

> Objectifs
>
> - What is an API First Approach?
> - What are APIs?
> - Types of APIs.
> - Interface types mainly used in SAP.
> - How to design APIs with description languages.
> - Fulfill the contract between API Provider and API Consumer.

## WHAT IS AN API FIRST APPROACH

L'API First Approach est une approche de conception de logiciels qui se concentre sur l'API pour créer des applications pouvant être facilement connectées les unes aux autres. API First crée des écosystèmes d'applications modulaires, réutilisables et extensibles, à l'image des briques Lego.

Une approche API First signifie que vos API sont traitées comme des citoyens de première classe. Tout tourne autour du produit final utilisé par les appareils mobiles et les applications client. Une approche API First implique de développer des API cohérentes et réutilisables. Ceci est réalisé en utilisant un langage de description d’API.

![](./RESSOURCES/CLD900_20_U1L2_001.png)

Explication:

- API Provider (Fournisseur d'API)

  Un API Provider fournit une interface avec des fonctionnalités techniques (n°1). Symboliquement, cela est montré sur cette image avec la notation boule ou sucette. Cette interface peut être consommée par un service (n°5). La représentation correspond à la notation socket (n°2). Le service joue le rôle de consommateur d'API.

- API Consumer (Consommateur d'API)

  Le API Consumer nécessite une interface (n°3). La représentation correspond à la notation socket (n°4). Dans ce cas, le fournisseur d'API est le service (n°5). La présentation est à nouveau faite avec la notation boule ou sucette.

## WHAT ARE APIS ?

API signifie Application Programming Interface. Une API spécifie les opérations ainsi que les entrées et sorties d'un composant logiciel. Il définit des fonctionnalités indépendantes de leurs implémentations respectives, afin que ces implémentations puissent varier sans affecter l'utilisateur de l'API.

## TYPES OF APIS

Dans la littérature, il existe de nombreuses présentations de différents types d’API. Vous trouverez ci-dessous un simple aperçu des API que nous devons comprendre pour ce cours.

![](./RESSOURCES/CLD900_20_U1L2_002.png)

Ici, quatre API différentes sont définies sous le sur-ensemble d'API, en fonction de leur utilisation.

- API basées sur une base de données

  Ceux-ci sont destinés à l’échange de fichiers entre systèmes. Les fichiers peuvent être, par exemple, des fichiers de configuration.

- API orientées objet

  Ceux-ci sont utilisés dans les langages de programmation orientés objet pour définir la communication des classes entre elles.

- API distantes (n°1)

  Cela inclut les API Web importantes d'aujourd'hui, telles que les API REST et SOAP. REST lui-même n'est pas un protocole mais un style architectural logiciel.

- API de messagerie (n°2)

  Ce sont des API asynchrones qui envoient des événements en fonction d'événements. Ceux-ci sont utilisés dans les architectures Event Driven.

## INTERFACE TYPES MAINLY USED IN SAP

Techniquement, quelques protocoles ont été convenus. La figure suivante montre les API et leurs relations les unes avec les autres.

![](./RESSOURCES/CLD900_20_U1L2_003.png)

Ceux-ci sont chez SAP :

- API REST, comme les API HTTP RESTful :
  - OData 2.0.
  - OData 4.0, tous deux comme SAP Graph.
- API distantes, comme les API SOAP.
- API de messagerie, comme les API d'événements.

Les formats de présentation sont soit JSON, soit XML.

## HOW TO DESIGN APIS WITH DESCRIPTION LANGUAGES

- Les API SOAP sont décrites avec le langage WSDL (Web Services Description Language). Il s'agit d'un langage de description d'interface basé sur XML utilisé pour décrire les fonctionnalités offertes par un service Web.

  Vous trouverez plus d'informations sur WSDL ici : [Langage de description des services Web](https://en.wikipedia.org/wiki/Web_Services_Description_Language)

- Les API REST peuvent être créées avec les principaux langages de description suivants :

  - RAML
  - OpenAPI

RAML : langage basé sur YAML pour décrire les API RESTful. Vous trouverez plus d’informations sur RAML ici : https://raml.org/

OpenAPI : a spécification OpenAPI, anciennement connue sous le nom de spécification Swagger, est une spécification pour un langage de définition d'interface lisible par machine permettant de décrire, de produire, de consommer et de visualiser des services Web RESTful. Vous trouverez plus d’informations sur OpenAPI ici : [openapis.org](https://www.openapis.org/). La spécification OpenAPI est utilisée dans la gestion des API.

## FULFILL THE CONTRACT BETWEEN PROVIDER AND API CONSUMER

La description dans RAML ou OpenAPI est le contrat entre l'API Provider et l'API Consumer. L'API doit être implémentée dans le cadre de ce contrat.

Deux cas sont possibles :

Implémentation – Première approche

L'implémentation est d'abord créée par le fournisseur d'API. Le descriptif (contrat) est alors généré automatiquement. Ceci est utilisé par l’API consommateur.

Contrat - Première approche.

La description de l'API est d'abord créée avec RAML ou OpenAPI. Les générateurs créent automatiquement l'implémentation rudimentaire pour le fournisseur et le consommateur d'API. Ces implémentations rudimentaires dans différents langages et concepts de programmation doivent ensuite être pleinement mises en œuvre.

## RESUME

Dans une approche API First, seules les API fournies sont intéressantes. En utilisant des protocoles et des concepts de communication standardisés, tels que REST et OData, presque tous les cas d'utilisation peuvent être cartographiés au-delà des frontières. La communication a lieu entre un fournisseur d'API qui dispose de l'interface et le consommateur d'API qui consomme cette interface.

Les API sont décrites avec des langages de description standardisés, tels que RAML ou OpenAPI. L'implémentation peut être créée d'abord au niveau du fournisseur d'API puis au niveau de la description (implémentation - première approche basée sur celle-ci) ou inversement en créant d'abord la description puis en créant automatiquement des stubs de serveur et de client à partir de celle-ci (contrat - première approche). Nous constatons que les API SOAP, OData 2.0 et 4.0, ainsi que SAP Graph jouent le rôle de premier plan dans l'univers SAP.
