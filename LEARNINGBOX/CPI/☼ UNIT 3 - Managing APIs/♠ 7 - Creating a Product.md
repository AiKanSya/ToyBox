# ♠ 7 [CREATING A PRODUCT](https://learning.sap.com/learning-journeys/developing-with-sap-integration-suite/creating-a-product_fc942de6-ff7b-4263-bd2b-f33fe481bc3d)

> :exclamation: Objectifs
>
> - [ ] Create a product

## PRODUCT CREATION

### WHAT ARE PRODUCTS IN THE CONTEXT OF SAP API MANAGEMENT?

Les `Products` sont des `artefacts` qui apparaissent sur le ` SAP API ``Business Hub Enterprise portal```. Le `SAP API `` Business Hub Enterprise portal``` est accessible à l'aide de sa propre  `URL`. Il est accessible dans le` SAP Integration Suite cockpit` via la navigation dans le coin supérieur droit de l'interface.

![](./RESSOURCES/CLD900_U3_L5_48.png)

Après avoir ouvert l'` API ``Business Hub Enterprise portal```, les produits sont affichés sous forme de  `tiles`. L'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) utilisée sous un produit correspond à l'`URL`du`proxy API` de l'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) correspondante.

### NEEDED ROLES (ROLE COLLECTION) TO USE TGE API BUSINESS HUB ENTERPRISE

Pour ouvrir l'`API ``Business Hub Enterprise portal```, l'un des groupes de rôles suivants est requis :

- `AuthGroup.API.Admin`

- `AuthGroup.API.ApplicationDeveloper`

Nous avons déjà attribué les deux groupes de rôles à l'utilisateur lors du provisionnement des fonctionnalités de `SAP Integration Suite`.

Si vous venez via _learning.sap.com_, vous devez alors attribuer votre compte utilisateur aux collections de rôles mentionnées.

### OPEN AN API `BUSINESS HUB ENTERPRISE PORTAL` WITH PUBLISHED PRODUCTS AS A SAMPLE

Dans cette capture d'écran, vous pouvez voir un `produit` déjà créé nommé `Product` basé sur l'`API GWSAMPLE_BASIC_v1`.

Cette page est vide, si vous n'avez pas encore créé de produit.

![](./RESSOURCES/CLD900_U3_L5_50.png)

Les produits peuvent ensuite être recherchés, trouvés et consommés par les développeurs.

### PROCEDURE FOR CREATING A PRODUCT

> :pushpin: Note:
>
> You perform in step in the` SAP Integration Suite Cockpit`

Les étapes suivantes doivent être effectuées dans l'ordre suivant :

1. Créez un `Product` à l'aide du bouton Créer

2. Ajoutez les entries sous l'onglet `Overview`

3. Ajouter une API sous l'onglet API

4. Choisissez le bouton Publier

5. Ouvrez le `API ``Business Hub Enterprise portal```

6. Découvrez votre `Product`

### CREATE AND PUBLISH A PRODUCT

Une condition préalable à la création d’un `Product` est une [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) fonctionnelle. La création est lancée à l'aide d'`Engage`. Ensuite, accédez à l'onglet `Product`.

![](./RESSOURCES/CLD900_U3_L5_42.png)

Choisissez le bouton Créer pour démarrer la procédure.

Au moins les entrées suivantes doivent être effectuées :

#### :small_red_triangle_down: TAB: Overview :

Le nom et lse `tiles` doivent être les mêmes. Le titre est l'en-tête de la `Tile`. La description est également affichée sur les `Tiles` et vise à donner à l'utilisateur les informations les plus importantes sur l'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md).

Exemple

     Nom : P_GWSAMPLE_BASIC_v1
     Titre : P_GWSAMPLE_BASIC_v1
     Description : Une API basée sur le modèle d'approvisionnement d'entreprise (EPM).

L'authentification se fait à l'aide de policies. Aucune authentification supplémentaire n'est requise.

Un exemple de paramètre est disponible ici : Créer un [Product](https://help.sap.com/docs/SAP_INTEGRATION_SUITE/51ab953548be4459bfe8539ecaeee98d/d7696221f36947a481b154335b89010d.html)

#### :small_red_triangle_down: TAB: APIs :

Ici, vous pouvez choisir votre `proxy API` précédemment créé, que vous pouvez ajouter à votre `API product`. Lorsque vous sélectionnez le bouton Ajouter, toutes les [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) disponibles sont affichées. Vous pouvez attribuer n'importe quelle combinaison des [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) affichées. Il est également possible de combiner des ressources individuelles.

Dans le cas suivant, l'intégralité (toutes les ressources) de l'`API GWSAMPLE_BASIC_v1` est ajoutée.

![](./RESSOURCES/CLD900_U3_L5_45.png)

Les entrées sous les onglets `Permissions`, `Rate plans` (Plans tarifaires) et `Custom Attributes` (Attributs personnalisés) sont facultatives.

Un exemple de paramètre d'attributs personnalisés est décrit ici : [Attributs personnalisés](https://help.sap.com/docs/SAP_INTEGRATION_SUITE/51ab953548be4459bfe8539ecaeee98d/90a5a6d2a75f4426964ec85c49faef88.html)

#### :small_red_triangle_down: PUBLISH YOUR PRODUCT

Une fois le `product` configuré, la mise en œuvre du `product` doit être publiée sur le `API Business Hub Enterprise portal`. Cela s’appelle `Publish`.

![](./RESSOURCES/CLD900_U3_L5_46.png)

#### :small_red_triangle_down: SHOW PRODUCT AT `API ``BUSINESS HUB ENTERPRISE PORTAL```

Le `API Business Hub Enterprise portal` est sa propre application. Cela a été fourni avec `SAP management`.

Le `API Business Hub Enterprise portal` est connecté à `API Management` via sa propre `URL`. Ceux-ci peuvent être vérifiés sous Paramètres → API si des problèmes surviennent.

Après avoir ouvert le `API Business Hub Enterprise portal`, comme décrit précédemment, tous les produits publiés s'affichent sous forme de `Tiles`.

![](./RESSOURCES/CLD900_U3_L5_50.png)

### NAVIGATE TO YOUR PRODUCT

Pour le moment, vous avez encore la possibilité de choisir entre deux représentations. Nous utilisons le nouveau `design`. Accédez à la `Tile` et vous êtes redirigé vers l'onglet `Test Environment`.

![](./RESSOURCES/CLD900_20_U3L7_010_scr.png)

Explications :

     N°1 : Voici votre description du produit
     N°2 : Voici les métadonnées du produit
     N°3 : La décision de conception
     N°4 : L'utilisateur connecté

Pour tester l'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md), accédez à l'onglet [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md). Ici, vous pouvez maintenant voir le titre de l'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) attribuée. Dans ce cas, il s'agit de `GWSAMPLE_BASIC`. Le nom de cette API est `GWSAMPLE_BASIC_v1`. Le nom du produit est `P_GWSAMPLE_BASIC_v1`.

![](./RESSOURCES/CLD900_20_U3L7_011_scr.png)

### NAVIGATE TO YOUR API

Lorsque vous sélectionnez la `Tile` avec le titre de l'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) associée, vous êtes dans l'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md). Sous l'onglet `API Reference`, vous trouverez l'interface utilisateur `Swagger` pour appeler les ressources attribuées.

![](./RESSOURCES/CLD900_20_U3L7_012_scr.png)

Si vous testez avec succès une ressource sélectionnée, ici `GET/ProductSet`, vous verrez l'`URL proxy` bien connue de `SAP API Management` en tant que `Request URL`.

![](./RESSOURCES/CLD900_20_U3L7_013_scr.png)

### `API ``BUSINESS HUB ENTERPRISE PORTAL``` AT GLANCE

L'`API Business Hub Enterprise portal` offre une plateforme pour déployer des `product` avec vos `API associées`, de manière `centralisée` dans votre entreprise. C'est le seul endroit où les développeurs recherchent, trouvent et testent les [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md), et utilisent finalement l'`URL proxy` correspondante dans leurs propres processus. A cet effet, le `API Business Hub Enterprise portal` propose les éléments suivants :

- Your own user management

- A role-based access to the products

- An additional authentication Layer with its own API key

- A self-registration Unknown developer

### RESOURCES

Des ressources sont disponibles dans l'aide SAP : [SAP Help Portal](https://help.sap.com/docs/SAP_CLOUD_PLATFORM_API_MANAGEMENT/66d066d903c2473f81ec33acfe2ccdb4/7d8514b4ab46455e8416723003b414d7.html?locale=en-US)

Des ressources sont également disponibles sur les blogs : [Protégez votre proxy API en ajoutant la vérification des clés d'application | Tutoriels pour les développeurs SAP](https://developers.sap.com/tutorials/hcp-apim-verify-api.html)

### SUMMARY

Un produit dans le contexte de `SAP API Management` est son propre `artefact` qui encapsule les [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) créées ou des parties d'entre elles (ressources). Le `product` est configuré et déployé (publié) sur l'`API Business Hub Enterprise portal`. Le `product` peut être testé sur l'`API Business Hub Enterprise portal`. L'accès aux produits est restreint par les `rôles`.

## CREATE A PRODUCT BASED ON YOUR CREATED API

[Exercices](https://learning.sap.com/learning-journeys/developing-with-sap-integration-suite/creating-a-product_fc942de6-ff7b-4263-bd2b-f33fe481bc3d)
