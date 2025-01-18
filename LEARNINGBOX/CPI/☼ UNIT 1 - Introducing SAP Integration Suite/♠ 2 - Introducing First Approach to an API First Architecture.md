# ♠ 2 [INTRODUCING FIRST APPROACH TO AN API FIRST ARCHITECTURE](https://learning.sap.com/learning-journeys/developing-with-sap-integration-suite/undergoing-a-first-approach-with-an-api_ccfd23d7-c298-4606-9af8-3c4f2ac91824)

> :exclamation: Objectifs
>
> - [ ] What is an [API first approach](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20First%20Approach.md)?
>
> - [ ] What are [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md)?
>
> - [ ] Types of [APIs](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md).
>
> - [ ] Interface types mainly used in SAP.
>
> - [ ] How to design [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) with description languages.
>
> - [ ] Fulfill the contract between [API Provider](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20Provider.md) and [API Consumer](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20Consumer.md).

## :closed_book: WHAT IS AN API FIRST APPROACH

L'[API first approach](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20First%20Approach.md) est une approche de conception de logiciels qui se concentre sur l'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) pour créer des applications pouvant être facilement connectées les unes aux autres. API First crée des écosystèmes d'applications modulaires, réutilisables et extensibles, à l'image des briques Lego.

Une [API first approach](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20First%20Approach.md) signifie que vos [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) sont traitées comme des `first class citizens`. Tout tourne autour du produit final utilisé par les appareils mobiles et les applications client. Une [API first approach](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20First%20Approach.md) implique de développer des [APIs](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) cohérentes et réutilisables. Ceci est réalisé en utilisant un langage de description d’[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md).

![](./RESSOURCES/CLD900_20_U1L2_001.png)

Explication:

### :small_red_triangle_down: API PROVIDER (FOURNISSEUR D'API)

Un [API Provider](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20Provider.md) fournit une interface avec des fonctionnalités techniques (n°1). Symboliquement, cela est montré sur cette image avec la notation boule ou sucette. Cette interface peut être consommée par un service (n°5). La représentation correspond à la notation socket (n°2). Le service joue le rôle de [API Consumer](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20Consumer.md).

### :small_red_triangle_down: API CONSUMER (CONSOMMATEUR D'API)

Le [API Consumer](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20Consumer.md) nécessite une interface (n°3). La représentation correspond à la notation socket (n°4). Dans ce cas, le [API Provider](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20Provider.md)I est le service (n°5). La présentation est à nouveau faite avec la notation boule ou sucette.

### FOND MORE INFORMATION AT:

- [Understanding the API-First Approach to Building Products.](https://swagger.io/resources/articles/adopting-an-api-first-approach)

- [It is not Cloud first or API first but Strategy first. API Management Strategy in Multicloud Environments | SAP Blogs.](https://blogs.sap.com/2019/02/08/it-is-not-cloud-first-or-api-first-but-strategy-first-api-management-strategy-in-multicloud-environments/)

## :closed_book: WHAT ARE APIS?

[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) signifie Application Programming Interface. Une [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) spécifie les opérations ainsi que les entrées et sorties d'un composant logiciel. Il définit des fonctionnalités indépendantes de leurs implémentations respectives, afin que ces implémentations puissent varier sans affecter l'utilisateur de l'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md).

## :closed_book: TYPES OF APIS

Dans la littérature, il existe de nombreuses présentations de différents types d’[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md). Vous trouverez ci-dessous un simple aperçu des [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) que nous devons comprendre pour ce cours.

![](./RESSOURCES/CLD900_20_U1L2_002.png)

### 4 DIFFERENT APIS:

Ici, quatre [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) différentes sont définies sous le sur-ensemble d'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md), en fonction de leur utilisation.

#### :small_red_triangle_down: [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) basées sur une base de données :

Ceux-ci sont destinés à l’échange de fichiers entre systèmes. Les fichiers peuvent être, par exemple, des fichiers de configuration.

#### :small_red_triangle_down: [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) orientées objet :

Ceux-ci sont utilisés dans les langages de programmation orientés objet pour définir la communication des classes entre elles.

#### :small_red_triangle_down: [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) distantes (n°1) :

Cela inclut les [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) Web importantes d'aujourd'hui, telles que les API REST et SOAP. REST lui-même n'est pas un protocole mais un style architectural logiciel.

#### :small_red_triangle_down: [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) de messagerie (n°2) :

Ce sont des [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) asynchrones qui envoient des événements en fonction d'événements. Ceux-ci sont utilisés dans les architectures Event Driven.

## :closed_book: INTERFACE TYPES MAINLY USED IN SAP

Techniquement, quelques protocoles ont été convenus. La figure suivante montre les [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) et leurs relations les unes avec les autres.

![](./RESSOURCES/CLD900_20_U1L2_003.png)

Ceux-ci sont chez SAP :

- [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) REST, comme les [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) HTTP RESTful :

  - OData 2.0.

  - OData 4.0, tous deux comme SAP Graph.

- [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) distantes, comme les [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) SOAP.

- [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) de messagerie, comme les [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) d'événements.

Les formats de présentation sont soit JSON, soit XML.

## :closed_book: HOW TO DESIGN APIS WITH DESCRIPTION LANGUAGES

Les [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) SOAP sont décrites avec le` Web Services Description Language (WSDL)`. Il s'agit d'un langage de description d'interface basé sur XML utilisé pour décrire les fonctionnalités offertes par un service Web.

Vous trouverez plus d'informations sur WSDL ici : [Langage de description des services Web](https://en.wikipedia.org/wiki/Web_Services_Description_Language)

#### :small_red_triangle_down: Les [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) REST peuvent être créées avec les principaux langages de description suivants :

- `RAML`

- `OpenAPI`

#### :small_red_triangle_down: `RAML` :

langage basé sur YAML pour décrire les [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) RESTful.

Vous trouverez plus d’informations sur `RAML` ici : https://raml.org/

#### :small_red_triangle_down: OpenAPI :

Une spécification `OpenAPI`, anciennement connue sous le nom de spécification Swagger, est une spécification pour un langage de définition d'interface lisible par machine permettant de décrire, de produire, de consommer et de visualiser des services Web RESTful.

Vous trouverez plus d’informations sur `OpenAPI` ici : [openapis.org](https://www.``openapi``s.org/).

La spécification `OpenAPI` est utilisée dans la gestion des [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md).

## :closed_book: FULFILL THE CONTRACT BETWEEN PROVIDER AND API CONSUMER

La description dans `RAML` ou `OpenAPI` est le contrat entre l'[API Provider](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20Provider.md) et l'[API Consumer](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20Consumer.md). L'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) doit être implémentée dans le cadre de ce contrat.

Deux cas sont possibles :

#### :small_red_triangle_down: Implémentation – Première approche

L'implémentation est d'abord créée par le [API Provider](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20Provider.md). Le descriptif (contrat) est alors généré automatiquement. Ceci est utilisé par l’[API Consumer](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20Consumer.md).

#### :small_red_triangle_down: Contrat - Première approche.

La description de l'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) est d'abord créée avec `RAML` ou `OpenAPI`. Les générateurs créent automatiquement l'implémentation rudimentaire pour le [API Provider](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20Provider.md) et le [API Consumer](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20Consumer.md). Ces implémentations rudimentaires dans différents langages et concepts de programmation doivent ensuite être pleinement mises en œuvre.

## :closed_book: RESUME

> Dans une [API first approach](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20First%20Approach.md), seules les [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) fournies sont intéressantes. En utilisant des protocoles et des concepts de communication standardisés, tels que REST et OData, presque tous les cas d'utilisation peuvent être cartographiés au-delà des frontières. La communication a lieu entre un [API Provider](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20Provider.md) qui dispose de l'interface et le [API Consumer](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20Consumer.md) qui consomme cette interface.
>
> Les [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) sont décrites avec des langages de description standardisés, tels que `RAML` ou `OpenAPI`. L'implémentation peut être créée d'abord au niveau du [API Provider](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20Provider.md) puis au niveau de la description (implémentation - première approche basée sur celle-ci) ou inversement en créant d'abord la description puis en créant automatiquement des stubs de serveur et de client à partir de celle-ci (contrat - première approche). Nous constatons que les [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) SOAP, OData 2.0 et 4.0, ainsi que SAP Graph jouent le rôle de premier plan dans l'univers SAP.
