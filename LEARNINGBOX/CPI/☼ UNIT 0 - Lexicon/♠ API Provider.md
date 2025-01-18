# ♠ API PROVIDER

## EN RESUME

> :boom: Un API Provider est une plateforme ou un composant qui expose des [APIs](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) pour permettre à d'autres systèmes de consommer des données ou services. Dans SAP CPI, un API Provider joue un rôle clé dans l'intégration et la gestion des communications entre différents systèmes, tout en assurant la sécurité, la performance, et la supervision des interactions.

## DEFINITION

> #### :bookmark: `API Provider`
>
> Un API Provider est une entité ou un composant qui expose une [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) à des consommateurs externes (applications, services, ou utilisateurs). C'est le système ou la plateforme qui héberge l'implémentation de l'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) et gère son interaction avec les consommateurs.
>
> Dans le contexte de SAP CPI, l'API Provider est la plateforme (ou l'outil) qui permet de :
>
> - Concevoir, exposer et gérer des [APIs](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md).
>
> - Gérer la sécurité, la performance, et le suivi des appels [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md).
>
> - Fournir un point d'accès centralisé aux ressources ou services internes d'une organisation.

## FONCTIONNEMENT D'UN API PROVIDER

Un API Provider joue le rôle de facilitateur pour l'exposition d'[APIS](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md). Il remplit plusieurs fonctions clés :

### :small_red_triangle_down: Hébergement de l'API :

L'API Provider agit comme une "passerelle" pour accéder aux ressources sous-jacentes. Par exemple, un système SAP (comme S/4HANA) peut exposer des données via une [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) OData, et SAP CPI agit comme un API Provider.

### :small_red_triangle_down: Sécurisation des APIs :

L'API Provider garantit que seules les parties autorisées peuvent accéder à l'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) en utilisant des mécanismes comme OAuth2, des clés [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md), ou des certificats.

### :small_red_triangle_down: Gestion des performances :

Il contrôle le flux des requêtes, limite les abus grâce à des quotas ou des limites d'utilisation, et surveille la latence pour assurer une performance optimale.

### :small_red_triangle_down: Documentation des APIs :

L'API Provider offre souvent une interface ou une documentation (comme Swagger ou OpenAPI) pour permettre aux développeurs de comprendre et d’utiliser facilement l'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md).

### :small_red_triangle_down: Monitoring et analytics :

Les API Providers surveillent l'utilisation des [APIs](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md), collectent des métriques (nombre de requêtes, erreurs, temps de réponse, etc.) et fournissent des insights pour améliorer les performances.

## API PROVIDER DANS SAP CPI :

Dans le cadre de SAP Cloud Platform Integration (CPI), un API Provider est utilisé pour exposer des [APIs](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) qui connectent différents systèmes (SAP ou non-SAP). Cela peut inclure :

- Systèmes SAP exposant des [APIs](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) : Par exemple, SAP S/4HANA ou SAP SuccessFactors expose des données et des processus via des APIs OData ou SOAP.

- Consommation [APIs](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) tierces via CPI : SAP CPI peut consommer une [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) d'un système externe (par exemple, une [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) REST fournie par un CRM externe) tout en jouant le rôle de passerelle ou de middleware.

- Création et exposition d’APIs personnalisées : SAP CPI permet de concevoir des flux d’intégration qui peuvent être exposés sous forme d’APIs RESTful. Ces APIs permettent à d’autres systèmes de consommer les données ou services exposés.

## EXEMPLE D'UTILISATION D'UN API PROVIDER DANS SAP CPI :

Scénario :

Un système externe (par exemple, un portail client) doit récupérer des données de SAP S/4HANA via une API.

1. Définition de l'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) dans SAP CPI :

   Un API Provider est configuré dans SAP CPI pour exposer une [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) RESTful ou OData permettant d’accéder aux données des clients stockées dans SAP S/4HANA.

2. Configuration de la sécurité :

   SAP CPI met en place une authentification (par exemple, OAuth2) pour sécuriser les accès.

3. Documentation automatique :

   L'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) exposée est documentée via OpenAPI ou Swagger, fournissant des informations sur les endpoints, les paramètres, les formats de données (JSON, XML, etc.).

4. Utilisation par le système externe :

   - Le portail client envoie une requête [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) (par exemple, un GET pour récupérer un profil client) à l'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) exposée par SAP CPI.

   - SAP CPI agit comme un API Provider, reçoit la requête, interagit avec SAP S/4HANA pour obtenir les données, et retourne une réponse au portail client.

## AVANTAGE D'UN API PROVIDER DANS SAP CPI :

### :small_red_triangle_down: Centralisation :

L'API Provider dans SAP CPI agit comme un point d'accès centralisé pour toutes les intégrations, ce qui simplifie la gestion.

### :small_red_triangle_down: Flexibilité :

SAP CPI permet de transformer, enrichir ou sécuriser les données exposées via l'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) avant de les fournir aux consommateurs.

### :small_red_triangle_down: Interopérabilité :

L'utilisation d'un API Provider facilite la connexion entre des systèmes SAP (comme S/4HANA, SuccessFactors) et des applications tierces.

### :small_red_triangle_down: Sécurité renforcée :

SAP CPI offre des mécanismes de sécurisation avancés pour protéger les données exposées via les APIs.

### :small_red_triangle_down: Monitoring et analytics :

Les API Providers dans SAP CPI permettent de suivre les métriques des appels [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md), d'identifier les problèmes et d’optimiser les performances.

## EXEMPLE DE CONFIGURATION DANS SAP CPI :

Pour configurer un API Provider dans SAP CPI :

1. Créer un artefact d’intégration dans CPI.

2. Exposer l’artefact comme une [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) en utilisant un endpoint HTTP/HTTPS.

3. Configurer la sécurité pour restreindre l’accès à [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md).

4. Publier [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) dans un portail API comme SAP API Management, où elle sera disponible pour les consommateurs externes.
