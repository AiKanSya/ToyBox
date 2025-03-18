# ♠ 1 [EXPLORING HOW TO MAKE LANDSCAPES CORE COMPLIANT](https://learning.sap.com/learning-journeys/managing-clean-core-for-sap-s-4hana-cloud/exploring-how-to-make-landscapes-core-compliant-1)

> :exclamation: Objectifs
>
> - [ ] Keep landscapes reliable and flexible in a clean core compliant way

## :closed_book: CLEAN LANDSCAPES

### INTRODUCTION

Jusqu'à présent, nous avons examiné trois dimensions : le cœur propre, les processus métier, les extensions et les données. Intéressons-nous maintenant à la dimension paysage. Par « paysage », nous désignons l'ensemble des différents systèmes utilisés par les entreprises à des fins diverses, ainsi que les intégrations inévitables entre eux. Le cœur propre est ici aussi important que dans les autres dimensions. « Garder le paysage flexible et fiable » est le mantra de la dimension paysage. Dans cette leçon, nous verrons comment y parvenir.

Regardez la vidéo pour un aperçu de la dimension : l'intégration.

[link Video](https://learning.sap.com/learning-journeys/managing-clean-core-for-sap-s-4hana-cloud/exploring-how-to-make-landscapes-core-compliant-1)

> ![](./RESSOURCES/299361_sum_blue_small.png)
>
> Goals for data:

### BASE INTEGRATIONS ON STANDARD APIS

Lors de l'intégration de systèmes SAP S/4HANA Cloud avec d'autres systèmes, il est important de baser autant que possible les intégrations sur des API OData et SOAP (Simple Object Access Protocol) standardisées. Ces API permettent la communication et l'échange de données entre les systèmes, garantissant des processus fluides et efficaces. Elles constituent un cadre robuste et flexible pour l'intégration de systèmes diversifiés, garantissant une communication et une interopérabilité fluides, ainsi que la sécurité et la fiabilité. Elles sont essentielles pour l'intégration avec SAP S/4HANA Cloud et les différentes solutions métier du portefeuille de produits SAP, comme SAP Ariba, SAP SuccessFactors ou SAP Fieldglass.

Le [SAP Business Accelerator Hub](https://api.sap.com/) est un excellent outil pour découvrir et explorer les API. Grâce à cet outil, les clients peuvent explorer les API par catégorie, produit, domaine ou même processus métier. Outre l'exploration de base, les clients peuvent tester les API OData dans un système sandbox fourni par SAP et dédié à cet effet.

### APPLY SAP INTEGRATION SUITE

[SAP Integration Suite](https://learning.sap.com/learning-journeys/developing-with-sap-integration-suite) est la plateforme d'intégration en tant que service (iPaaS) de SAP. Elle offre une solution complète pour la mise en œuvre de scénarios d'intégration basés sur des intergiciels (parfois appelés « médiatisés »). Solution complète, SAP Integration Suite détermine si les messages entrants d'un système cible doivent être transférés (routage). Si nécessaire, elle effectue un mappage des messages avant de les transférer (mappage). Elle utilise un vaste référentiel d'adaptateurs pour garantir que le message est dans un format compréhensible par le système cible (connectivité).

Évidemment, SAP Integration Suite est une solution d'intégration prête à l'emploi qui fonctionne avec les API standardisées décrites. Les adaptateurs OData et SOAP permettent aux développeurs d'établir rapidement et facilement une connectivité avec les systèmes cibles. Les scénarios d'intégration peuvent être configurés et, surtout, facilement testés.

### USE SAP EVENT MESH FOR EVENT-BASED SCENARIOS

[SAP Event Mesh](https://help.sap.com/docs/event-mesh/event-mesh/what-is-sap-event-mesh), un service proposé dans le cadre de SAP Business Technology Platform, permet aux applications de communiquer entre elles via des événements asynchrones. Ce type de communication permet la conception de processus métier pilotés par événements. Avec une architecture pilotée par événements, vous disposez d'un fournisseur d'événements qui déclenche un événement et d'un consommateur qui en est informé et réagit en conséquence. SAP Event Mesh fait office de lien entre le fournisseur et le consommateur.

Par exemple, une entreprise gère des partenaires commerciaux utilisant SAP Master Data Governance sur SAP S/4HANA Cloud et l'adresse postale d'un partenaire est modifiée (changement d'état). Un événement est déclenché. L'événement lui-même et, si nécessaire, certaines données contextuelles qui lui sont associées sont transférés vers SAP Event Mesh. Plusieurs applications personnalisées (telles qu'une application Node.js exécutée dans SAP BTP, Cloud Foundry Runtime) sont « abonnées » à cet événement. SAP Event Mesh les notifie de l'événement et des données contextuelles. Les applications personnalisées répondent ensuite à l'événement. Par exemple, chaque application peut demander les informations mises à jour sur les partenaires commerciaux à SAP S/4HANA Cloud ou lancer un workflow de notification pour les parties prenantes intéressées.

Ces conceptions « asynchrones » conviennent à certains types de scénarios d'intégration. Le SAP Business Accelerator Hub, tout comme les API OData et SOAP standardisées, offre aux clients la simplicité et la commodité d'explorer les objets d'événements utilisables dans les scénarios d'intégration.

### AVOIR LEGACY APIS AND THEIR LEGACY EXTENSION OPTIONS

Bien que les appels de fonction à distance (RFC) et les documents intermédiaires (IDoc) soient courants dans les systèmes SAP, ils ne sont recommandés pour les intégrations qu'en cas d'absolue nécessité. Ces technologies plus anciennes ne respectent pas les principes fondamentaux de fiabilité et de flexibilité de l'intégration. Il est préférable d'utiliser des technologies plus récentes et plus flexibles, comme OData et SOAP, pour les intégrations. En évitant les RFC et les IDoc, les entreprises peuvent adopter des approches d'intégration modernes, plus conformes aux principes fondamentaux de fiabilité et favorisant un environnement ERP plus agile et plus efficace.

### USE SAP APPLICATION INTERFACE FRAMEWORK

Traditionnellement, le personnel informatique gère les erreurs d'interface. Si cette approche est appropriée en cas d'erreur technique, elle est souvent d'ordre métier, comme des données erronées. Dans ce cas, il est logique qu'un utilisateur métier puisse surveiller et corriger les erreurs d'interface. SAP Application Interface Framework entre alors en jeu. Il permet aux utilisateurs métier de surveiller de manière centralisée les interfaces de différentes technologies, telles qu'OData et SOAP, de configurer des alertes et de corriger les erreurs sans intervention du service informatique. Les fonctionnalités de sécurité permettent de masquer aux utilisateurs métier les données sensibles jugées inutiles pour la surveillance et la résolution des erreurs. [SAP Application Interface Framework](https://training.sap.com/course/bit750-sap-application-interface-framework-remoteclassroom-002-us-en/) permet aux entreprises de simplifier leurs environnements, de réduire le temps nécessaire à la gestion des erreurs et d'améliorer la gouvernance de leurs systèmes.

> ![](./RESSOURCES/299361_sum_blue_small.png)
>
> Tools To Ensure Success:
>
> - SAP Integration Suite
>
> - SAP Event Mesh
>
> - SAP Application Interface Framework

### SAP INTEGRATION SOLUTION ADVISORY METHODOLOGY

Nous avons constaté, avec la dimension d'extension du noyau propre, que la méthodologie d'extension d'application SAP est disponible pour les clients. De même, avec la dimension données, la méthodologie de conseil SAP Data and Analytics est disponible. L'intégration ne fait pas exception. Les clients disposent de la [méthodologie de conseil SAP Integration Solution (ISA-M)](https://learning.sap.com/learning-journeys/getting-started-with-sap-integration-solution-advisory-methodology). ISA-M offre un cadre complet qui permet d'accélérer la conception de plateformes d'intégration hybrides, de sécuriser les projets d'intégration basés sur les meilleures pratiques SAP et de favoriser une intégration agile au sein de votre organisation. Grâce à cette méthodologie, les entreprises peuvent définir, documenter et appliquer une stratégie globale. Cette méthodologie offre un cadre comprenant :

- des modèles de cas d'utilisation d'intégration ;

- des plans d'architecture ;

- d'autres bonnes pratiques pour les environnements informatiques cloud et hybrides.

Son champ d'application ne se limite pas aux aspects techniques. Il couvre également la dimension organisationnelle de l'intégration d'entreprise, comme la mise en place d'un centre d'excellence d'intégration et la définition des rôles d'intégration, y compris leurs tâches. Il s'agit d'un cadre ouvert dont les concepts peuvent être appliqués aux technologies d'intégration de SAP ou d'autres fournisseurs. Vous pouvez également adapter et enrichir ses concepts et son contenu selon vos besoins. Un parcours d'adoption bien défini vous permet d'appliquer la méthodologie étape par étape au sein de votre organisation.

Les clients sont encouragés à utiliser ISA-M pour établir une stratégie d'intégration propre et conforme aux normes de base. Le moyen le plus simple d'y parvenir est d'utiliser SAP Integration Assessment. SAP Integration Assessment est inclus dans SAP Integration Suite et est également disponible en tant que service distinct, fonctionnant dans l'environnement SAP Business Technology Platform, Cloud Foundry. Il applique la méthodologie SAP Integration Solution Advisory de manière outillée.

### CONCLUSION

Il est essentiel pour les organisations souhaitant optimiser leur environnement ERP de garantir la conformité des intégrations SAP S/4HANA Cloud avec les principes de la « clean core ». Elles peuvent rationaliser leurs processus d'intégration et garantir la conformité avec les principes de la « clean core » en suivant les bonnes pratiques et en utilisant des outils adaptés, tels que :

- API OData

- API SOAP

- Suite d'intégration SAP

- Event Mesh

- Framework d'interface d'application SAP

Avec la bonne approche, les organisations peuvent créer des intégrations flexibles, évolutives et efficaces, conformes aux principes de la « clean core » et soutenant leurs objectifs ERP à long terme.

> ![](./RESSOURCES/299361_sum_blue_small.png)
>
> Goals:
>
> - Upgrade stable interfaces.
>
> - Proper monitoring and error resolution capabilities
>
> - Only actively used and well-documented integration
