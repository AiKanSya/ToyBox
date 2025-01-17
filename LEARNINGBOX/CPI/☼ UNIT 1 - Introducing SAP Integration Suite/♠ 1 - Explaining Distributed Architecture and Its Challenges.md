# ♠ 1 [EXPLAINING DISTRIBUTED ARCHITECTURE AND ITS CHALLENGES](https://learning.sap.com/learning-journeys/developing-with-sap-integration-suite/explaining-distributed-architecture-and-their-challenges_ebcaa544-f5ca-4351-b6b6-5eb471ec1464)

> :exclamation: Objectifs
>
> - [ ] Describe the distributed architecture
>
> - [ ] Describe the whole scenario

## DISTRIBUTED ARCHITECTURE AND ITS CHALLENGES

### QU'EST-CE QU'UNE ARCHITECTURE DISTRIBUEE ?

> #### :bookmark: [Distributed IT System](../☼%20UNIT%200%20-%20Lexicon/♠%20Distributed%20Architecture.md)
>
> "Un [Distributed IT System](../☼%20UNIT%200%20-%20Lexicon/♠%20Distributed%20Architecture.md) comprend des sous-systèmes (des composants au sens le plus large) qui sont couplés entre eux dans le cadre d'une architecture spécifique et gèrent les tâches de manière coopérative."
>
> En revanche, dans un système informatique monolithique, les fonctions d’un système sont regroupées (centralisées). La répartition logique des fonctions du système entre les composants peut s'accompagner d'une décentralisation physique coordonnée dans un réseau informatique.
>
> Nous considérons toutes les installations et services informatiques comme des composants. Par exemple, les applications ERP On-Premise, SAP S/4HANA On-Premise et/ou SaaS.
>
> Exemple de paysage client. Vous voyez que de nombreux systèmes techniques différents communiquent entre eux avec toutes leurs particularités techniques.

![](./RESSOURCES/CLD900_U1L1_001.png)

### QUELS DEFIS DOIVENT ETRE RESOLUS ?

En raison de l’hétérogénéité, des solutions coûteuses et complexes doivent être recherchées, trouvées et mises en œuvre pour relever les défis suivants :

- Many different transport and message protocols

- Release management

- Monitoring

- Error identification and correction

- Latency

- Quality of service

- Security

- Availability of implementations

- Observability

- Documentation

Une façon de surmonter ces défis consiste à utiliser une [API first approach](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20First%20Approach.md).

> #### :bookmark: [API first approach](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20First%20Approach.md)
>
> Une approche API first est une méthodologie de conception dans laquelle l'accent principal du processus de développement est mis sur la conception de l'interface de programmation d'application ([API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md)) avant tout autre aspect de la solution logicielle. Cette approche met l'accent sur la création d'une [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) bien définie et robuste qui répond aux besoins des développeurs et des intégrateurs qui l'utilisent pour créer des applications, des services ou des intégrations.

Les principaux aspects d’une [API first approach](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20First%20Approach.md) incluent :

- Design-Centric (Centré sur la conception) :

  la conception d'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) devient un élément central du cycle de vie du développement logiciel. Les décisions de conception donnent la priorité à la clarté, à la cohérence et à la convivialité pour garantir que les développeurs peuvent facilement comprendre et utiliser l'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md).

- Iterative Development (Développement itératif) :

  les développeurs itèrent sur la conception de l'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) en fonction des commentaires et de l'évolution des exigences avant de passer à l'implémentation backend ou à d'autres aspects de l'application.

- Facilitates Collaboration (Facilite la collaboration) :

  en définissant l'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) dès le début, différentes équipes (développeurs front-end, backend, mobiles, tiers) peuvent travailler simultanément et de manière synchronisée. Cela réduit les dépendances et accélère le développement.

- Ensures Scalability and Flexibility (Garantit l'évolutivité et la flexibilité) :

  une approche axée sur l'[API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) favorise l'évolutivité car elle encourage les composants modulaires et réutilisables. Il offre également la flexibilité nécessaire pour s’adapter aux exigences commerciales changeantes et aux avancées technologiques.

- Focus on Developer Experience (DX) (Focus sur l'expérience du développeur) :

  DX devient crucial, dans le but de fournir aux développeurs une documentation claire, des SDK (Software Development Kits), des exemples de code et des outils de test pour faciliter l'intégration et l'utilisation de l'API.

- Supports Ecosystems Growth (Prend en charge la croissance des écosystèmes) :

  les [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) conçues avec une [API first approach](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20First%20Approach.md) peuvent favoriser un écosystème autour de la plate-forme ou du service, permettant des intégrations tierces, des partenariats et l'innovation.

### SUMMARY

> Pour les processus techniques automatisés, de nombreux composants logiciels, installations, technologies et disponibilités spatiales différents sont souvent couplés via des réseaux avec des protocoles différents. Les fonctionnalités de ces implémentations sont appelées services. L'interface est fournie via des [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) (Application Programming Interfaces). Le type, l’emplacement et la mise en œuvre des [API](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) ne sont pas pertinents pour l’instant. Ces [APIs](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md) sont indépendantes du langage. C’est pourquoi on parle également d’une architecture ou d’une [API first approach](../☼%20UNIT%200%20-%20Lexicon/♠%20API%20First%20Approach.md). Les architectures cloud natives sont basées sur des [APIs](../☼%20UNIT%200%20-%20Lexicon/♠%20API.md). Cela s’accompagne de nouveaux défis.

## DECRIRE UN SCENARIO ENTIER

- [Exercices](hhttps://learning.sap.com/learning-journeys/developing-with-sap-integration-suite/explaining-distributed-architecture-and-their-challenges_ebcaa544-f5ca-4351-b6b6-5eb471ec1464)
