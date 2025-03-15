# ♠ REQUEST-DRIVEN ARCHITECTURE

## EN RESUME

> :boom: L’architecture Request-Driven est idéale pour des interactions ponctuelles, contrôlées et sensibles au temps réel. Bien qu’elle offre simplicité et contrôle direct, elle peut être limitée en termes de scalabilité et de flexibilité, surtout dans des environnements complexes nécessitant des interactions asynchrones. Pour ces derniers, une architecture event-driven est souvent plus appropriée.

## DEFINITION

> #### :bookmark: `Request-Driven Architecture`
>
> L’architecture Request-Driven est un modèle d'interaction où un système ou un service initie une demande (request) à un autre système ou service, qui répond avec les informations ou les actions demandées. C’est l’un des modèles les plus courants en informatique, utilisé notamment dans les architectures client-serveur ou RESTful. Dans ce modèle :
>
> - Le client est actif et initie la communication
>
> - Le serveur est passif et réagit en répondant à la demande.

## CARACTÉRISTIQUES PRINCIPALES D’UNE ARCHITECTURE REQUEST-DRIVEN

### :small_red_triangle_down: Centré sur les demandes :

Les actions et les interactions dans cette architecture sont toujours déclenchées par des requêtes explicites (demandes). Par exemple :

- Un utilisateur effectue une recherche sur une plateforme e-commerce.

- Une application interroge un service pour obtenir les données d’un utilisateur.

### :small_red_triangle_down: Réponse synchrone ou asynchrone

- Synchrone : La réponse est renvoyée immédiatement après la demande (modèle classique client-serveur).

- Asynchrone : La demande est enregistrée et la réponse est traitée plus tard, permettant au client de continuer ses activités en attendant la réponse (par ex., utilisation de files d'attente comme RabbitMQ).

### :small_red_triangle_down: Dépendance au temps réel

Les interactions sont souvent sensibles au temps réel. Si le service ne répond pas dans un délai acceptable, cela peut impacter l’expérience utilisateur ou les opérations métier.

### :small_red_triangle_down: Couplage étroit

Les services sont souvent directement dépendants les uns des autres, car le client a besoin de la réponse immédiate d’un service spécifique.

## EXEMPLE D’ARCHITECTURE REQUEST-DRIVEN

Imaginons une application de réservation de billets d’avion :

- L’utilisateur recherche des vols disponibles (requête envoyée au système de réservation).

- Le système de réservation interroge plusieurs services tiers (disponibilité des vols, tarification).

- Les résultats sont renvoyés à l’utilisateur comme réponse.

## AVANTAGES D’UNE ARCHITECTURE REQUEST-DRIVEN

### :small_red_triangle_down: Simplicité

Le modèle est intuitif et bien adapté aux interactions où un client a besoin d'une réponse spécifique et immédiate.

### :small_red_triangle_down: Contrôle direct

Le client a un contrôle total sur les requêtes qu'il envoie et sur ce qu'il attend en retour.

### :small_red_triangle_down: Prise en charge répandue

De nombreuses technologies supportent ce modèle, notamment les APIs RESTful, SOAP, ou GraphQL.

## LIMITATIONS D’UNE ARCHITECTURE REQUEST-DRIVEN

### :small_red_triangle_down: Dépendance au temps de réponse

Les performances peuvent être impactées si les services appelés sont lents ou indisponibles.

### :small_red_triangle_down: Couplage fort

Les interactions directes entre les services peuvent entraîner des dépendances difficiles à gérer ou à maintenir.

### :small_red_triangle_down: Pas adapté aux événements asynchrones

Ce modèle est moins performant lorsque les interactions nécessitent des mises à jour ou notifications automatiques (par exemple, une notification en cas de changement de statut).

## REQUEST-DRIVEN VS EVENT-DRIVEN

| `CARACTERISTIQUE`       | `REQUEST-DRIVEN`                            | `EVENT-DRIVEN`                               |
| ----------------------- | ------------------------------------------- | -------------------------------------------- |
| Déclenchement           | Par une requête explicite du client         | Par un événement généré dans le système      |
| Nature de l'interaction | Synchrone ou asynchrone                     | Principalement asynchrone                    |
| Couplage                | Étroit (client et serveur directement liés) | Faible (via un intermédiaire d'événements)   |
| Exemple                 | API REST pour récupérer des données         | Diffusion d'événements via Kafka ou RabbitMQ |

## UTILISATION DE L’ARCHITECTURE REQUEST-DRIVEN DANS LE CONTEXTE DE SAP

### :small_red_triangle_down: APIs REST DE SAP

SAP offre des APIs RESTful pour permettre aux systèmes tiers ou aux extensions d’interagir avec ses solutions, comme :

- Récupération des données client depuis SAP S/4HANA.

- Création de commandes via une API exposée par SAP CPI.

### :small_red_triangle_down: INTEGRATIONS BASÉES SUR DEMANDES

Dans SAP CPI, une architecture Request-Driven est utilisée pour :

- Appeler un service tiers et obtenir des informations spécifiques.

- Déclencher un flux d’intégration sur demande via un endpoint.
