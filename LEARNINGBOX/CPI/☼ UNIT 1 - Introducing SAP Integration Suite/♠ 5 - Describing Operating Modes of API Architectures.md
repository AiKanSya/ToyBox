# ♠ 5 [DESCRIBING OPERATING MODES OF API ARCHITECTURES](https://learning.sap.com/learning-journeys/developing-with-sap-integration-suite/describing-operating-modes-of-api-architectures_b47895bf-cd5c-45f0-8bef-11384e978629)

> :exclamation: Objectifs
>
> - [ ] Describe operating modes of API architectures

## :closed_book: OPERATING MODES OF API ARCHITECTURES

### WHAT IS A REQUEST-DRIVEN ARCHITECTURE ?

Une architecture basée sur les requêtes est basée sur une communication directe entre un fournisseur de services et un consommateur de services. Cette communication est synchrone.

![](./RESSOURCES/CLD900_U1_L5_01.png)

#### :small_red_triangle_down: Sample Request:

Un exemple de requête SOAP peut ressembler à ceci :

![](./RESSOURCES/CLD900_20_U1L3_001_scr.png)

#### :small_red_triangle_down: Sample Response:

Un exemple de réponse SOAP peut ressembler à ce qui suit :

![](./RESSOURCES/CLD900_20_U1L3_002_scr.png)

### EVENT-DRIVEN ARCHITECTURE

#### :small_red_triangle_down: What are Events?

D'un point de vue technique, un événement est un petit message qui fournit des informations sur un événement commercial. Un événement peut être, par exemple, la création d'une commande dans un système SAP S/4HANA. L'événement est déclenché via push (de manière asynchrone) vers un courtier.

Un événement peut ressembler à ceci :

![](./RESSOURCES/CLD900_20_U1L3_003_scr.png)

### EVENT PRODUCER AT SAP

SAP propose le module complémentaire Event Enablement dans ECC et SAP S/4HANA (Cloud et On-Premise) pour vous aider.

#### :small_red_triangle_down: What is an event-driven architecture?

> #### :bookmark: [event-driven architecture (EDA)]()
>
> Event-driven architecture (EDA) ou architecture basée sur les événements (en français) est un modèle de conception logicielle dans lequel des applications découplées peuvent publier et s'abonner de manière asynchrone à des événements via un courtier d'événements. Un courtier d'événements est un middleware moderne orienté message, par exemple Service Mesh chez SAP.

Pour en savoir plus, cliquez ici : [Qu'est-ce que l'EDA (Event-Driven Architecture)](https://aws.amazon.com/what-is/eda/) ?

### PULL VARIANT

![](./RESSOURCES/CLD900_20_U1L3_005.png)

L'event provider (fournisseur d'événements) (n° 1) déclenche un événement (n° 2) avec une désignation appelée Topic (n° 3). Un Topic peut être, par exemple, BusinessPartner_Changed. Il s'agit d'une communication asynchrone. Le Topic est abonné via une file d'attente (subscribe to topic). Dans ce cas, depuis la file d'attente A (n°4). Le message peut désormais être activement récupéré par l'event consumer (n° 5). À cet effet, Event Mesh fournit une API. La communication provient de l'event consumer, déclenchée par un pull on the queue. Il s'agit d'une communication synchrone.

### PUSH VARIANT

![](./RESSOURCES/CLD900_20_U1L3_006.png)

L'event provider (n° 1) déclenche un événement (n° 2) avec une désignation appelée Topic (n° 3). Un Topic peut être, par exemple, BusinessPartner_Changed. Il s'agit d'une communication asynchrone. Le Topic est abonné via une file d'attente (subscribe to topic). Dans ce cas, depuis la file d'attente B (n°4). Un webhook est désormais attribué à cette file d'attente. (N°5). Si un événement avec un Topic arrive dans la file d'attente correspondante, le webhook est appelé et l'événement est envoyé directement a l'event consumer (n°6) via push. La communication provient de l'Event Mesh, déclenchée par un événement entrant. Il s'agit également d'une communication asynchrone.

### WEBHOOKS

Un webhook est un rappel HTTP : un HTTP POST qui se produit lorsqu'un changement d'état est effectué, c'est-à-dire une notification d'événement via HTTP POST. Les webhooks sont utilisés pour les notifications en temps réel, afin que votre système puisse être mis à jour directement au moment de l'événement. En principe, un webhook est une simple URL que vous pouvez également appeler régulièrement dans le navigateur. Dans le cadre de SAP Service Mesh, l'URL du webhook est utilisée lors de l'abonnement. Cela permet au service de savoir où envoyer le message avec le sujet souscrit.

En combinaison avec l'Event Mesh, une URL de webhook est incluse dans l'abonnement d'un Topic à une file d'attente.

### COMBINATION OF REQUEST-DRIVEN AND EVENT-BASED ARCHITECTURE

En réalité, les demandes et événements classiques se combinent.

![](./RESSOURCES/CLD900_20_U1L3_007.png)

Les numéros 1 à 6 fonctionnent comme décrit dans une section précédente, mais ce qui est nouveau, c'est que l'event consumer (n° 7) soumet une demande à l'event provider (n° 1). Par exemple, pour lire les données du produit qui ont été modifiées. L'event consumer peut ensuite traiter l'ensemble de données.

### SUMMARY

Il existe deux types d’exploitation de l’[approche API First](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20First%20Approach.md). Celui, piloté par la demande, est basé sur une communication synchrone des partenaires impliqués. Le second, événementiel, fonctionne de manière asynchrone et découple l'émetteur du récepteur en termes de temps et de contenu. Cet accouplement libre offre de nombreux avantages. Les deux types sont souvent utilisés l’un après l’autre.
