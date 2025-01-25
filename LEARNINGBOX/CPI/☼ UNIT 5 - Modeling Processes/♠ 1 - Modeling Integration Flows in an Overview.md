# ♠ 1 [MODELING INTEGRATION FLOWS IN AN OVERVIEW](https://learning.sap.com/learning-journeys/developing-with-sap-integration-suite/modeling-integration-flows-in-an-overview_d550da39-d693-48bc-b425-dbc135589328)

> :exclamation: Objectifs
>
> - [ ] Model Integration Flows in an overview

## INTEGRATION FLOWS MODELING

### INTEGRATION FLOW DESIGN GUIDELINES OVERVIEW

Les développeurs d'intégration doivent s'assurer que les `integration flows` sont conçus de manière `robuste` pour protéger les `company's mission-critical business processes` (processus métier critiques de leur entreprise). Comme chaque cas d’utilisation peut être unique, il existe autant de `integration flow models` que de cas d’utilisation. SAP fournit des solutions pour les exigences récurrentes via les `Integration Flow Design Guidelines` (directives de conception de `integration flows`), qui sont bien documentées et mises en œuvre. Ces exemples de `integration flows` peuvent être testés directement.

### THIS SECTION PROVIDES GUIDELINES FOR INTEGRATION DEVELOPERS COVERING THE FOLLOWING THRE MAIN ASPECTS:

- Learn the `Basics`.

- Guidelines to `Design Enterprise-Grade Integration Flows`.

- Guidelines to ` Implement Specific Integration Patterns`.

### THE INTEGRATION FLOWS ARE DESIGNED TO MEET THE FOLLOWING REQUIREMENTS:

- Une ligne directrice ou un `pattern` spécifique est qu'il est au centre de chaque `integration flows`, ce qui vous permet de comprendre facilement le sujet.

- Vous pouvez facilement déployer et exécuter chaque `integration flows` avec un minimum d'effort, ce qui vous permet de tester chaque ligne directrice ou `pattern` par vous-même.

- Chaque `integration flows` de référence peut servir de base au développement de scénarios plus complexes.

### IMPLEMENT THE SAMPLE PACKAGES

Les trois derniers exercices vous ont appris à implémenter et à utiliser un exemple de `integration flows` du package « Apprendre les bases ».

### LEARN THE BASICS

Ici, les sujets suivants sont abordés sur la base d'exemples d'implémentation :

- Start your integration flow design journey by getting familiar with a set of three simple integration flows that demonstrate the `basic features of message processing`. These flows progressively increase in complexity.

- Learn how to `access (and set) headers and properties`.

- Learn how to `design integration scenarios` with `integration flow` to integration `flow communication`.

- Learn how to `configure adapters`.

- Learn how to `transport integration content` from a `source` to a `target` tenant.

- Learn how to `implement different scenarios` to decouple `sender` and `integration flow` processing.

- Learn how to `retrieve only delta data` from the `source system` using the current date or the latest date in the `payload`.

- Learn how to `handle exceptions` with an `exception subprocess`.

- Learn how to `use the monitor application` to `analyze the behavior` of an `integration flow` at `runtime`.

- Learn how to `modify content` to use different `integration flow steps` (for example, the content modifier or the content enricher) to modify the message content:

  - Learn how to `convert data` from a source into a `target format`.

  - Learn how to `encode and decode content`.

  - Learn how to `handle message mappings`.

- Learn how to `use steps that store the message on the tenant database`.

- Learn how to `transfer files`.

### GUIDELINES TO DESIGN ENTERPRISE-GRADE INTEGRATION FLOWS

Ici, les sujets suivants sont abordés sur la base d'exemples d'implémentation :

- Learn to design with `high availability`.

- Learn to design with `resilience`.

- Learn to deal with `limited resources`.

- Learn to design `loose coupling`.

- Learn to handle `failures gracefully`.

- Learn to design `flows readability`.

- Learn to use `prepackaged integration content`.

### GUIDELINES TO IMPLEMENT SPECIFIC INTEGRATION PATTERNS

Sur la base d'exemples d'implémentation, les sujets suivants sont abordés ici :

- Learn to implement and use `anAggregator pattern`.

- Learn to implement and use a `Composed Message Processor pattern`.

- Learn to implement and use a `Content based routing pattern`.

- Learn to implement and use a `Content Enricher pattern`.

- Learn to implement and use a `Content Filter pattern`.

- Learn to implement and use a `Message Filter pattern`.

- Learn to implement and use a `Recipient List pattern`.

- Learn to implement and use a `Resequencer pattern`.

- Learn to implement and use a `Scatter-Gather pattern`.

- Learn to implement and use a `Splitter pattern`.

- Learn to implement and use a `Quality of Service pattern`.

### INTEGRATION DESIGN GUIDELINES CHECK

Dans le `integration flows`, vous pouvez désormais exécuter des `Execute Guidelines checks` (vérifications des directives) dans votre `integration flows` avec une vue d'analyse ou un `Report` des `violated components`.

![](./RESSOURCES/CLD900_U5_L1_01.png)

### RESOURCES

Lire la suite ici :

#### :small_red_triangle_down: About Designing Enterprise-Grade Integration Flows :

Description des `integration flows` sur : Lignes directrices pour concevoir des `integration flows` de niveau entreprise

#### :small_red_triangle_down: Basic Documentation :

Description des `integration flows` sur : Apprendre les bases

#### :small_red_triangle_down: Documentation About Guidelines to Design Enterprise-Grade Integration Flows :

Description des `integration flows` sur : Lignes directrices pour concevoir des `integration flows` de niveau entreprise

#### :small_red_triangle_down: Documentation About Guidelines to Implement Specific Integration Patterns :

Description du package, y compris des informations supplémentaires sur les liens vers les `pattern` s uniques : Lignes directrices pour la mise en œuvre de `pattern` s d'intégration spécifiques

### SUMMARY

SAP propose diverses solutions pour les `common technical requirements` (exigences techniques courantes) via de la `documentation` et des `implementation examples`. Ces domaines comprennent l'apprentissage des bases, les `Guidelines for Designing Enterprise-Grade Integration Flows` et les `Guidelines for Implementing Specific Integration Patterns`. Vous pouvez rechercher et utiliser ces exemples dans vos propres projets.

## CREATE AND CONFIGURE A GENERAL SPLITTER

[Exercices](https://learning.sap.com/learning-journeys/developing-with-sap-integration-suite/modeling-integration-flows-in-an-overview_d550da39-d693-48bc-b425-dbc135589328)
