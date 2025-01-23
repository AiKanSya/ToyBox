# ♠ 4 [CREATING AN [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) PROXY](<https://learning.sap.com/learning-journeys/developing-with-sap-integration-suite/creating-an-[api](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md)_b3973a9a-62ce-4a5e-b59a-c0ddf6924de5>)

> :exclamation: Objectifs
>
> - [ ] Create an [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) based on the [API provider](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20Provider.md)

## WHAT ARE THE POSSIBILITIES TO CREATE AN [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md)?

L'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) qui sera créée est importante pour les implémentations ultérieures. Il agit comme un proxy de l'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) de ressource réelle. Le nom précédent était `API Proxy`. Ce nom apparaît souvent dans les documents plus anciens.

Les options suivantes sont disponibles :

#### :small_red_triangle_down: Create an API using the Create button with the following options :

- [API provider](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20Provider.md) (n°1 au diagramme conceptuel)

- `URL` (n° 2 sur le diagramme conceptuel)

- [Proxy API]()

#### :small_red_triangle_down: Create an API using menu links with the following options :

- Créer dans [API Designer]() (n° 3 sur le diagramme conceptuel)

- Importer une [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) externe

  ![](./RESSOURCES/CLD900_20_U3L4_001.png)

  ![](./RESSOURCES/CLD900_20_U3L4_002.png)

### CREATE AN [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) USING THE CREATE BUTTON

C'est probablement le cas le plus courant. Avec cette option, vous pouvez créer une [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) avec un [API provider](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20Provider.md), une `URL` fournie ou une [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) existante.

### PROCEDURE

- Commencez par `Design` → [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) pour ouvrir le `Develop screen`.

- Démarrez l'assistant en choisissant le bouton Créer. Une nouvelle fenêtre s'ouvre.

  ![](./RESSOURCES/CLD900_U3_L4_02.png)

  Utiliser les options de l'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) Provider.

  ![](./RESSOURCES/CLD900_20_U3L4_005.png)

  Sélectionnez le bouton radio [API provider](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20Provider.md) et ouvrez la `selected box`. Tous les [API provider](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20Provider.md) s'affichent. Choisissez-en un, par exemple `SAPGatewayDemoSystemES5_Provider`.

  ![](./RESSOURCES/CLD900_20_U3L4_006_scr.png)

  Lorsque le [API provider](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20Provider.md) est choisi, une nouvelle zone de liste portant le nom `Discover` est disponible. Certaines données, comme l'hôte et le type d'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md), ont déjà été renseignées.

  Lorsque la `list box` est sélectionnée, tous les services disponibles répertoriés dans le `catalog service` sont affichés.

  Ce qui est exactement affiché ici dépend du type d'[API provider](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20Provider.md). Dans le cas d'`Open Connectors`, par exemple, toutes les instances sont affichées. Pour le type `Intégration Cloud`, les `Intégration flows` disponibles sont affichés.

  La figure suivante montre une liste des services disponibles, utilisables à partir du système backend SAP. L'[API provider](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20Provider.md) est défini en choisissant un service parmi les services du catalogue fourni.

  ![](./RESSOURCES/CLD900_20_U3L4_007_scr.png)

  Vous pouvez choisir exactement l’un des services proposés. Après cela, d'autres données sont ajoutées au masque.

  ![](./RESSOURCES/CLD900_20_U3L4_008_scr.png)

  Lorsque vous avez terminé de créer cette [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) (proxy), elle doit être déployée pour pouvoir être utilisée. Après cela, l'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) (proxy) est prête à être testée. Le `service type` est automatiquement défini. Dans ce cas, il s'agit d'OData.

### USE THE URL OPTION TO CREATE AN [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md)

Dans le cas où vous n'utilisez pas d'[API provider](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20Provider.md), vous pouvez directement spécifier l'`URL` de votre source.

![](./RESSOURCES/CLD900_20_U3L4_009.png)

Dans ce cas, vous devez saisir les données manuellement (marquées). Le type de service ne peut être que `REST` ou `SOAP`.

![](./RESSOURCES/CLD900_20_U3L4_010_scr.png)

Après avoir enregistré et déployé l’[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md), elle peut également être testée.

### USE THE [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) PROXY OPTION TO CREATE AN [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md)

Dans ce cas, vous pouvez copier l'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) existante.

![](./RESSOURCES/CLD900_20_U3L4_011_scr.png)

Dans ce cas, vous devez saisir les données manuellement (`marked`). Le type de service ne peut être que `REST` ou `SOAP`, même si la `spied API` est de type `OData`.

### CREATE AN [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) USING MENU LINKS

![](./RESSOURCES/CLD900_20_U3L4_012.png)

### USE THE CREATE IN [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) DESIGNER OPTION

Commencez à créer une [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) en choisissant le lien de menu `Create in API Designer`.

![](./RESSOURCES/CLD900_20_U3L4_013_scr.png)

Passez à l'`openAPI editor`. Vous pouvez y créer manuellement votre [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) via le langage `openAPI` en `YAML`. Dans ce cas, toutes les entrées doivent être créées manuellement. L'`URL` du serveur est automatiquement ajustée après l'enregistrement. Le type de service ne peut être que `REST`.

### BEFORE SAVING

![](./RESSOURCES/CLD900_20_U3L4_014_scr.png)

### AFTER SAVING

> :pushpin: Note:
>
> Be aware that the shown URL is a sample and will not work !

![](./RESSOURCES/CLD900_20_U3L4_015_scr.png)

### IMPORT AN EXTERNAL [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md)

![](./RESSOURCES/CLD900_20_U3L4_016.png)

Démarrez la création d’une [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) en choisissant le lien de menu Importer l’[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md).

![](./RESSOURCES/CLD900_20_U3L4_017_scr.png)

Le `Service Type` correspond à `Import API`.

### RESOURCE

Portail d'aide : [Créer un proxy [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md)](./RESSOURCES/https://help.sap.com/docs/SAP_INTEGRATION_SUITE/51ab953548be4459bfe8539ecaeee98d/4ac0431ddc80469ca31dcd938edc9076.html)

### SUMMARY

Il existe plusieurs façons de créer une [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md). Des [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) peuvent être créées :

- En utilisant le bouton `Create`.

- Basé sur un [API provider](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20Provider.md) existant.

- Directement via une `URL` fournie.

Enfin, vous pouvez également le définir avec une spécification `openAPI` via le bouton `Create` dans `API Designer`.

## CREATE AN [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) BASED ON A PREDEFINED [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) PROVIDER

[Exercices](<https://learning.sap.com/learning-journeys/developing-with-sap-integration-suite/creating-an-[api](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md)_b3973a9a-62ce-4a5e-b59a-c0ddf6924de5>)
