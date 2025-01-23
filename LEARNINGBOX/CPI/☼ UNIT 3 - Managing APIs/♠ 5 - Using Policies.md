# ♠ 5 [USING POLICIES](https://learning.sap.com/learning-journeys/developing-with-sap-integration-suite/using-````policies````_cd5fde51-b3d2-40d3-bd71-3f2870c2b51b)

> :exclamation: Objectifs
>
> - [ ] Use `policies`

## USAGE OF POLICIES

## WHAT ARE POLICICES?

`SAP API Management` offre des fonctionnalités permettant de définir le comportement d'une [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) à l'aide de `Policies`. Une `Policy` (Stratégie) est un programme qui exécute une fonction spécifique au moment de l'exécution. Ils offrent la flexibilité d'ajouter des fonctionnalités communes sur une [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) sans avoir à les coder individuellement à chaque fois.

Les `Policies` fournissent des fonctionnalités pour `sécuriser` les [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md), `contrôler` le trafic des [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) et `transformer` les formats de message. Vous pouvez également personnaliser le comportement d'une [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) en ajoutant des `scripts` et en les attachant aux `Policies`.

Vous pouvez appliquer une `Policy` sur le flux de demande ou de réponse. Vous pouvez également spécifier si cela est applicable sur le point de terminaison (endpoint) proxy ou sur le point de terminaison (endpoint) cible. Pour plus d’informations sur les types de `Policies` prises en charge par `API Management`, consultez `sTypes de ``Policies```.

### YOU CAN USE THE FOLLOWING TYPES OF POLICIES:

- Modèles de `Policy` prédéfinis sur `SAP Business Accelerator Hub`.

- `Policies` prédéfinies dans le `Policy Editor`.

### POLICY TYPES

Voici la liste des `Policies` prédéfinies prises en charge par `API Management` :

- Access Control

- Access Entity

- Assign Message

- Basic Authentication

- Extract variables

- Invalidate Cache

- JavaScript

- JSON to XML

- Key Value Map Operations

- Lookup Cache

- Message Logging Policy

- OAuth v2.0

- OAuth v2.0 GET

- OAuth v2.0 SET

- Populate Cache

- Python Script

- Quota

- Raise Fault

- Reset Quota

- Service Callout

- Spike Arrest

- SAML Assertion Policy

- SOAP Message Validation Policy

- Verify API Key

- XML to JSON

- XSL Transform

- XML Threat Protection

- Regular Expression Protection

- JSON Threat Protection

- Response Cache

- Statistics Collector Policy

En savoir plus ici : [Types de Policies](https://help.sap.com/docs/SAP_CLOUD_PLATFORM_API_MANAGEMENT/66d066d903c2473f81ec33acfe2ccdb4/c918e2803dfd4fc487e86d0875e8462c.html?locale=en-US)

### APPLY PRE-BUILT POLICIES USING THE POLICY DESIGNER

Pour utiliser l’une des `Policies` disponibles, il faut d’abord déterminer où la `Policy` fonctionnera. L'éditeur de `Policy` propose les options suivantes dans la request et la response :

![](./RESSOURCES/CLD900_20_U3L5_001.png)

Les `Policies` peuvent également être utilisées pour tous les `calls` (`PostClientFlows`, `ressources`), vous ne sélectionnez alors pas de `PostClientFlow`. Dans l'exemple suivant, il existe deux `PostClientFlows` `CatalogCollection` et `ServiceCollection`. Les `Policies` sont utilisées pour tous les `PostClientFlows` car aucune n'a été spécialement sélectionnée.

![](./RESSOURCES/CLD900_20_U3L5_002_scr.png)

### SECURITY - POLICIES

`SAP BTP`, `API Management` propose de nombreuses `out-of-the-box API security policies` prêtes à l'emploi basées sur l'`Open Web Application Security Project` (OWASP). Les best practices de sécurité des [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) peuvent être personnalisées en fonction des besoins de votre entreprise.

Il existe une série de blogs qui présente les `Policies` de sécurité de `SAP BTP`, `API Management` pour sécuriser et protéger les [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) d'entreprise, comme le montre la figure suivante, `SAP Cloud Platform API Management`.

![](./RESSOURCES/CLD900_20_U3L5_003.png)

Vous trouverez la série de blogs ici : `SAP Cloud Platform API Management` – [​​Série de blogs sur les meilleures pratiques de sécurité des API](https://blogs.sap.com/2017/08/22/sap-cloud-platform-api-management-api-security-best-practices/)

### LOGGING AND MONITORING POLICIES

La `Policy Message Logging` vous permet d'envoyer des [Messages Syslog]() à des services de gestion de journaux tiers (`third-party log management services`), tels que `Splunk`, `SumoLogic`, `Loggly` ou des services de gestion de journaux similaires.

Un blog présentant la `Message Logging Policy` et `Splunk` peut être trouvé ici :
[Splunk – Partie 1 : Journalisation et surveillance SAP APIM | Blogues SAP](https://blogs.sap.com/2020/05/12/splunk-part-1-sap-apim-logging-monitoring/)

Un blog avec la `Message Logging Policy` et `Loggly` peut être trouvé ici :
[Partie 7 – Meilleures pratiques de sécurité des API – Consigner toutes les interactions API | Blogues SAP](https://blogs.sap.com/2017/08/21/sap-cloud-platform-api-management-log-all-api-interactions/)

### USE PREDEFINED POLICIES

Il existe des ensembles prédéfinis de `Policies` pour des applications spécifiques. Ils peuvent être trouvés dans le `SAP Business Accelerator Hub`.

Accédez à https://api.sap.com/ pour explorer → API.

![](./RESSOURCES/CLD900_20_U3L5_004_scr.png)

Sous l'onglet Modèle de politique SAP Business Accelerator Hub, vous trouverez 20 modèles de politique pour une utilisation immédiate.

![](./RESSOURCES/CLD900_20_U3L5_005_scr.png)

### IMPORT A POLICY TEMPLATE FRON SAP BUSINESS ACCELERATOR HUB

Recherchez et trouvez le `Performance_Traceability policy template` sur [SAP Business Accelerator Hub](https://api.sap.com/content-type/API/apis/policytemplate). Choisissez la vignette `Performance_Traceability`. Vous trouverez le contenu dans le `Flow Type`.

### THE FOLLOWING IS AN EXAMPLE WITH THESE TWO ITEMS:

- `Flow Type` : ProxyEndPoint PreFlow

- `Content` : JavaScript file

![](./RESSOURCES/CLD900_20_U3L5_006_scr.png)

Pour télécharger les `Policies` complètes, choisissez le bouton `Download` dans le coin supérieur droit et enregistrez le fichier `\*.zip` localement sur votre ordinateur.

![](./RESSOURCES/CLD900_20_U3L5_007_scr.png)

Basculez vers la vue `Develop` et choisissez l’onglet `Policy Templates`.

![](./RESSOURCES/CLD900_U3_L5_30.png)

Ensuite, importez le `policy template` précédent stocké localement via le bouton `Importer`.

À la fin, le modèle `Performance_Traceability` est désormais importé dans `SAP Business Accelerator Hub`.

Pour placer le `policy template`, accédez à l'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) dans laquelle vous souhaitez utiliser la `Policy`, puis accédez à l'éditeur de `Policy`. Choisissez Modifier pour que le bouton `Policy Template` devienne actif.

![](./RESSOURCES/CLD900_U3_L5_34.png)

Maintenant, choisissez le bouton `Apply` pour importer le `policy template`. Sélectionnez ensuite le `policy template` précédemment importé et choisissez Appliquer.

![](./RESSOURCES/CLD900_U3_L5_35.png)

![](./RESSOURCES/CLD900_20_U3L5_012_scr.png)

Le modèle de politique a été importé et inséré dans le flux correspondant.

![](./RESSOURCES/CLD900_20_U3L5_013_scr.png)

Après la mise à jour, l'enregistrement et le redéploiement, le `policy template` est actif.

### SUMMARY

`SAP API Management` offre des fonctionnalités permettant de définir le comportement d'une [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) à l'aide de `Policies`. Ces capacités peuvent être utilisées à la fois dans la `request` et dans la `response`. Il existe des `Policies` pour la transformation de la charge utile et des appels externes, par exemple pour se connecter à l'aide d'`OAuth 2.0` et bien plus encore. En particulier, les `Policies` de sécurité sont utiles. SAP propose `federal of policies and policy templates` pour certains cas d'utilisation. Ils peuvent être facilement importés.

## ADD POLICITES FOR BASIC AUTHENTICATION AGAINST THE ES5 DEMO SYSTEM

[Exercices](https://learning.sap.com/learning-journeys/developing-with-sap-integration-suite/using-````policies````_cd5fde51-b3d2-40d3-bd71-3f2870c2b51b)
