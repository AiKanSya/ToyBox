# ♠ EVENT MESH

## EN RESUME

> :boom: L’Event Mesh est une solution puissante pour mettre en œuvre des architectures réactives et évolutives basées sur des événements. En facilitant la communication asynchrone entre les systèmes, il joue un rôle clé dans la modernisation des applications et des processus métiers. Avec SAP Event Mesh, les entreprises peuvent intégrer des environnements SAP et non-SAP tout en adoptant une architecture résiliente et orientée événements.

## DEFINITION

> #### :bookmark: `PI Migration Assessment`
>
> L'Event Mesh est un réseau dynamique qui connecte des applications, des services et des systèmes en temps réel à l'aide d'événements distribués.
> Il s’appuie sur des principes d’[Event-Driven Architecture](../☼%20UNIT%200%20-%20Lexicon/♠%20Event-Driven%20Architecture.md) (EDA) et permet la communication asynchrone entre des composants via des événements publiés et consommés de manière flexible.

## CARACTÉRISTIQUES PRINCIPALES DE L'EVENT MESH

### :small_red_triangle_down: communication asynchrone

Les messages (événements) sont échangés sans nécessiter de réponse immédiate ou un couplage direct entre l’émetteur et le récepteur.

### :small_red_triangle_down: architecture distribuée

L’Event Mesh fonctionne comme un réseau distribué qui relie des producteurs (publishers) et des consommateurs (subscribers) d’événements sur plusieurs environnements (cloud, on-premise, hybride).

### :small_red_triangle_down: routage intelligent

Les messages sont acheminés automatiquement vers les abonnés pertinents en fonction des règles de routage et des abonnements définis.

### :small_red_triangle_down: indépendance des systèmes

Les producteurs et les consommateurs d’événements n’ont pas besoin de se connaître directement. Cela permet un couplage faible et une meilleure scalabilité.

### :small_red_triangle_down: prise en charge multi-cloud et hybride

L’Event Mesh peut interconnecter des systèmes déployés dans plusieurs clouds ou sur des infrastructures locales.

## COMPOSANTS CLÉS D’UN EVENT MESH

### :small_red_triangle_down: producteurs d’événements (publishers)

Les systèmes ou applications qui génèrent des événements en réponse à des actions ou des changements (par ex., une commande client passée).

### :small_red_triangle_down: consommateurs d’événements (subscribers)

Les applications ou services qui s’abonnent pour recevoir et traiter des événements spécifiques.

### :small_red_triangle_down: brokers d’événements

Des composants (comme Kafka, RabbitMQ, ou Solace) qui gèrent la distribution des événements entre producteurs et consommateurs.

### :small_red_triangle_down: sujets (topics)

Les canaux ou catégories utilisés pour classer les événements. Les abonnés s’inscrivent à des topics spécifiques pour recevoir des types d’événements.

### :small_red_triangle_down: outils de gestion

Des interfaces ou API permettant de configurer, surveiller, et gérer le réseau d’événements.

## EXEMPLE D’UTILISATION DE L’EVENT MESH

### :small_red_triangle_down: scénario e-commerce

1. Lorsqu’un client passe une commande en ligne, un événement "Commande passée" est publié.

2. Plusieurs services s’abonnent à cet événement :

   - Service logistique : prépare l’expédition.

   - Service paiement : traite la transaction.

   - Service marketing : envoie un e-mail de confirmation.

3. Tous les services reçoivent l’information sans qu’ils soient directement connectés entre eux.

## AVANTAGES DE L’EVENT MESH

### :small_red_triangle_down: scalabilité

Les systèmes peuvent facilement s'étendre en ajoutant de nouveaux producteurs ou consommateurs d’événements sans modifier les connexions existantes.

### :small_red_triangle_down: résilience

Les applications continuent de fonctionner même si certains services sont indisponibles, car les événements peuvent être stockés dans des files d’attente temporaires.

### :small_red_triangle_down: réduction du couplage

Les producteurs et les consommateurs d’événements n’ont pas besoin de dépendances directes, ce qui rend les systèmes plus modulaires.

### :small_red_triangle_down: temps réel

Les événements sont distribués dès qu’ils se produisent, permettant une réaction immédiate des systèmes.

### :small_red_triangle_down: flexibilité multi-environnements

Il connecte des systèmes sur différents clouds ou infrastructures locales.

## DÉFIS DE L’EVENT MESH

### :small_red_triangle_down: complexité accrue

La gestion d’un réseau distribué d’événements peut devenir complexe, notamment pour surveiller et dépanner les flux.

### :small_red_triangle_down: fiabilité des brokers

Le bon fonctionnement de l’Event Mesh dépend de la fiabilité des brokers d’événements.

### :small_red_triangle_down: conception des événements

Une mauvaise conception des événements (trop génériques ou mal structurés) peut entraîner des inefficacités ou des difficultés de maintenance.

## SAP EVENT MESH

SAP propose une solution native appelée SAP Event Mesh, qui fait partie de la SAP Business Technology Platform (SAP BTP). Elle permet de :

- Gérer des événements entre les systèmes SAP (comme SAP S/4HANA) et non-SAP.

- Implémenter des architectures event-driven dans des environnements hybrides ou cloud.

### :small_red_triangle_down: cas d'utilisation

- Notifications clients : Envoi de mises à jour en temps réel sur le statut des commandes.

- Intégration SAP/non-SAP : Par exemple, déclencher une action dans Salesforce après un événement dans SAP S/4HANA.

- Automatisation des workflows : Réagir automatiquement à des événements métiers.

## EVENT MESH VS REQUEST-DRIVEN

| `CARACTERISTIQUE` | `EVENT MESH`                                       | `REQUEST DRIVEN`                          |
| ----------------- | -------------------------------------------------- | ----------------------------------------- |
| Déclenchement     | Par des événements asynchrones                     | Par des requêtes explicite                |
| Couplage          | Faible (producteurs et consommateurs indépendants) | Étroit (client et serveur connectés)      |
| Adapté pour       | Processus en temps réel et réactifs                | Intégrations avec des réponses immédiates |
