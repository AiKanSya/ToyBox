# ♠ API

## EN RESUME

> :boom: Une API est un intermédiaire qui permet aux systèmes et applications de communiquer entre eux. Dans le contexte de SAP CPI, les APIs sont utilisées pour connecter des systèmes SAP et non-SAP, pour automatiser les processus métiers, et pour exposer ou consommer des services. Les APIs offrent une flexibilité et une évolutivité cruciales dans les architectures modernes.

Exemple concret :

Quand tu utilises une application mobile pour vérifier la météo, cette application envoie une requête via une API vers un service qui fournit des données météorologiques. L’API retourne les informations (en général sous forme de données JSON ou XML) que l’application affiche ensuite.

## DEFINITION

> #### :bookmark: `API`
>
> Une API est un ensemble de règles, de protocoles et d’outils qui permettent à différentes applications ou systèmes de communiquer entre eux. Elle définit comment les données peuvent être demandées, envoyées, et reçues entre des logiciels, tout en masquant la complexité des systèmes sous-jacents.
>
> Concrètement, une API agit comme un intermédiaire qui permet à une application d'interagir avec une autre, sans qu'elles n’aient besoin de connaître leurs détails internes.

## PRINCIPAUX TYPES D'APIS

Les APIs peuvent être classées en fonction de leur utilisation ou de leur mode de communication :

### :small_red_triangle_down: APIs REST (Representational State Transfer) :

- Basées sur le protocole HTTP.

- Les données sont généralement échangées sous forme de JSON ou XML.

- Très populaires pour les intégrations modernes, y compris dans SAP CPI.

- Simples à utiliser, flexibles et légères.

### :small_red_triangle_down: APIs SOAP (Simple Object Access Protocol) :

- Basées sur XML et plus formelles que REST.

- Utilisées souvent dans les entreprises pour des scénarios nécessitant une sécurité élevée.

- Supportées dans SAP CPI pour interagir avec des systèmes hérités.

### :small_red_triangle_down: APIs GraphQL :

- Permettent aux clients de demander exactement les données dont ils ont besoin, rien de plus.

- Moins courantes dans le monde SAP mais utiles pour des besoins spécifiques.

### :small_red_triangle_down: APIs OData (Open Data Protocol) :

- Spécifiquement utilisées par SAP.

- Permettent de manipuler des ressources (par exemple, des données dans SAP S/4HANA) à l'aide d'URI et de requêtes HTTP standard.

## POURQUOI UTILISER UNE API ?

### :small_red_triangle_down: APIs GraphQL :

Ce sont les URL via lesquelles un client peut accéder à une ressource (par exemple, https://api.example.com/orders pour accéder aux commandes).

### :small_red_triangle_down: Méthodes HTTP :

Les APIs REST utilisent des verbes HTTP pour indiquer ce que l’on veut faire :

- GET : Récupérer une ressource.

- POST : Créer une ressource.

- PUT : Mettre à jour une ressource.

- DELETE : Supprimer une ressource.

### :small_red_triangle_down: Payload :

Les données envoyées dans une requête ou une réponse, souvent au format JSON ou XML.

### :small_red_triangle_down: Authentification et sécurité :

Les APIs utilisent des mécanismes comme OAuth2, des clés API, ou des certificats pour garantir que seules les parties autorisées peuvent y accéder.

### :small_red_triangle_down: Documentation :

Une bonne API est accompagnée d’une documentation détaillée expliquant comment l’utiliser (par exemple, Swagger pour les APIs REST).

## LES APIS DANS LE CONTEXTE DE SAP CPI :

Dans SAP Integration Suite (CPI), les APIs jouent un rôle crucial pour permettre l'intégration entre divers systèmes SAP et non-SAP. Voici quelques exemples d’utilisation :

### :small_red_triangle_down: Exposition d’APIs SAP :

Les systèmes SAP (comme SAP S/4HANA) exposent des APIs standard, comme des APIs OData ou REST, pour interagir avec leurs données (par exemple, récupérer des informations clients).

### :small_red_triangle_down: Consommation d’APIs tierces :

SAP CPI permet d’appeler des APIs externes pour intégrer des systèmes tiers (par exemple, des APIs de services cloud comme Salesforce ou Stripe)

### :small_red_triangle_down: Création de nouvelles APIs :

SAP CPI permet également de concevoir et d’héberger des APIs personnalisées, qui exposent des données ou des processus métiers spécifiques.

## EXEMPLE D'UTILISATION D'UNE API AVEC SAP CPI :

> Scénario :
>
> Un client utilise un site e-commerce (non-SAP) pour passer une commande, et le système SAP S/4HANA doit être informé de cette commande.

Étapes impliquant une API :

1. Le site e-commerce envoie une requête API :

   - Par exemple, une requête POST avec les détails de la commande au format JSON.

   - Endpoint API : https://sap-cpi.example.com/api/orders.

2. SAP CPI traite la requête :

   - CPI reçoit la requête, transforme les données (si nécessaire), et les envoie au système SAP S/4HANA via une API OData ou SOAP.

3. Réponse :

   - Une réponse est renvoyée au site e-commerce via l’API pour confirmer que la commande a été créée avec succès.

## AVANTAGES DES APIS DANS SAP CPI :

### :small_red_triangle_down: Flexibilité :

Les APIs permettent de connecter presque n'importe quel système ou application, quelle que soit leur technologie.

### :small_red_triangle_down: Efficacité :

Les données peuvent être échangées en temps réel, améliorant ainsi la réactivité des processus métier.

### :small_red_triangle_down: Scalabilité :

Les APIs permettent d'étendre facilement l'intégration pour inclure de nouveaux systèmes ou fonctionnalités.

### :small_red_triangle_down: Sécurité :

Les mécanismes d'authentification API assurent une intégration sécurisée.
