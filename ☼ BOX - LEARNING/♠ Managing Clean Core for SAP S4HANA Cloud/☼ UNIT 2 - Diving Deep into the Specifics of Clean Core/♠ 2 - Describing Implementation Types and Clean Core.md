# ♠ 1 [DESCRIBING IMPLEMENTATION TYPES AND CLEAN CORE](https://learning.sap.com/learning-journeys/managing-clean-core-for-sap-s-4hana-cloud/describing-implementation-types-and-clean-core-1)

> :exclamation: Objectifs
>
> - [ ] Describe how implementation types and target architectures influence clean core strategies

## :closed_book: CLEAN CORE STRATEGIES

### INTRODUCTION

L'adoption de SAP S/4HANA Cloud implique un choix important pour les clients : opter pour une nouvelle implémentation (« greenfield ») ou une stratégie de conversion du système (« brownfield »). Une troisième option (transition sélective des données | conversion de l'environnement système) existe également. Examinons ces options dans le contexte des principes de base propres.

### UNDERSTANDING THE DIFFERENT TYPES OF IMPLEMENTATIONS

[Link Video](https://learning.sap.com/learning-journeys/managing-clean-core-for-sap-s-4hana-cloud/describing-implementation-types-and-clean-core-1)

> ![](./RESSOURCES/299361_sum_blue_small.png)
>
> L'édition publique de SAP S/4HANA Cloud est une solution clé en main. Les versions privées et sur site peuvent être considérées comme des solutions sur mesure pour les entreprises qui ont besoin de cette approche.

### THE IMPACT OF GREENFIELD OF BROWNFIELD ON CLEAN CORE STRATEGIES

Alors, comment le choix entre greenfield et brownfield affecte-t-il les stratégies de clean core des entreprises ? Dans la leçon précédente, nous avons vu qu'un clean core désigne un système à jour avec la dernière version. Ce système inclut des extensions et une intégration compatibles avec le cloud, avec une qualité optimale des données de base et une conception de processus parfaite. Il simplifie l'architecture système, augmentant ainsi l'efficacité et la rapidité des opérations.

Dans le premier scénario d'une entreprise manufacturière, imaginons que le système existant existe depuis des années et regorge de code personnalisé, de fonctions redondantes et de modules obsolètes. Adopter une approche greenfield nous permet de repartir de zéro et d'adopter un clean core dès le départ. Cette approche garantit l'efficacité et réduit la complexité. Comme nous l'avons mentionné, un nouveau système démarre par défaut avec un clean core.

À l'inverse, une approche brownfield, notre méthode privilégiée dans le deuxième scénario de gestion des stocks, permet à l'instance SAP S/4HANA Cloud cible (édition privée ou sur site) de conserver certaines des complexités du système précédent. Cette approche peut présenter un défi. En conservant le système existant, nous hériterons de complexités historiques et potentiellement de personnalisations indésirables. Cependant, malgré ce défi, SAP S/4HANA peut être « propre » en cas de conversion. Cela signifie que le système ne démarre pas propre, mais que nous engageons un processus de nettoyage systématique. En résumé, la stratégie de nettoyage consiste alors à identifier les aspects du système existant à conserver, supprimer ou transformer, puis à les mettre en œuvre. Cela nécessite une solide compréhension des fonctions de notre système actuel et une vision claire de la manière dont l'adoption de SAP S/4HANA Cloud peut apporter les changements souhaités. Il nous incite à concilier l'ancien et le nouveau, en transformant et en adaptant efficacement l'ensemble (y compris, mais sans s'y limiter, le code personnalisé) afin d'assurer la conformité du noyau SAP S/4HANA.

Dernier point à noter : bien que non explicitement évoquée, la transition sélective des données et la transformation de l'environnement système constituent une troisième option. Cette approche permet aux clients de consolider plusieurs systèmes ERP (suite à un historique de fusions et acquisitions, par exemple) en une seule édition privée ou une cible sur site.

> ![](./RESSOURCES/299361_sum_blue_small.png)
>
> Un noyau propre peut être obtenu avec toutes les approches de mise en œuvre. L'approche choisie par le client n'affecte que les modalités d'obtention de ce résultat.

### BUSINESS PROCESSES ARE AN IMPORTANT FACTOR TO CONSIDER

Plusieurs facteurs sont à prendre en compte pour choisir entre une approche greenfield et brownfield. Nous examinons ici un facteur : les considérations relatives aux processus métier. Pour une analyse complète de tous les facteurs à prendre en compte dans le choix de l'approche, consultez la leçon « [Évaluer entre une conversion de système et une nouvelle implémentation](https://learning.sap.com/learning-journeys/practicing-clean-core-extensibility-for-sap-s-4hana-cloud/evaluating-between-a-system-conversion-or-a-new-implementation_d8ae2a25-1a52-43fc-8977-51b2ac714026) » du parcours d'apprentissage « [Pratiquer l'extensibilité d'un noyau propre pour SAP S/4HANA Cloud](https://learning.sap.com/learning-journeys/practicing-clean-core-extensibility-for-sap-s-4hana-cloud) ».

Poursuivons avec notre premier scénario (greenfield), si l'entreprise manufacturière est disposée et capable d'adopter de nouveaux processus métier basés sur les meilleures pratiques actuelles et une approche d'adaptation aux normes, une approche greenfield devient viable. Grâce à cette stratégie, elle a la liberté de lancer une stratégie de noyau propre sans les contraintes du codage et de la conception existants.

Par ailleurs, poursuivons avec notre deuxième scénario (brownfield), si le système de gestion des stocks utilise des processus métier complexes, nécessaires et coûteux ou difficiles à repenser dès le départ, une approche brownfield devient viable. Un noyau propre, comme toujours, est possible et constitue l'objectif. Dans ce cas, les processus métier critiques sont préservés.

### BALANCING BUSINESS REQUIREMENTS AND CLEAN CORE STRATEGIES

La manière dont nous appliquons les principes de « clean core » lors de la migration vers SAP S/4HANA Cloud dépend en fin de compte de l'équilibre entre les exigences métier et les stratégies de mise en œuvre. Notre rôle de développeurs va au-delà de l'écriture de code. Nous devenons des intermédiaires essentiels pour garantir que le système mis à niveau soit à la fois conforme aux exigences métier et aux principes de « clean core ». Une stratégie « greenfield » constitue la voie la plus simple et la plus directe vers un « clean core », mais elle n'est pas toujours appropriée. Une stratégie « brownfield », si elle peut préserver une certaine complexité en raison d'exigences métier très spécifiques, offre néanmoins un moyen de transformer et de simplifier les codes existants tout en les respectant.

En fin de compte, le choix entre « greenfield » et « brownfield » est étroitement lié au contexte métier, à la disponibilité des ressources et à la tolérance aux changements profonds. En tant que développeurs, comprendre l'impact de ces stratégies sur les principes de « clean core » nous permet de prendre des décisions éclairées pour l'entreprise.

### CONCLUSION

En conclusion, les implémentations Greenfield et Brownfield ont toutes deux leur potentiel avec une configuration adaptée. En tant que développeur, comprendre ces implémentations et leur rôle dans le maintien d'un cœur propre peut influencer significativement la réussite de votre projet SAP S/4HANA Cloud. N'oubliez pas que, quelle que soit l'approche choisie, l'objectif est de promouvoir une stratégie de cœur propre. Une telle stratégie nécessite un système optimisé, simplifié et flexible, capable de soutenir efficacement les processus métier uniques de votre organisation tout en favorisant l'innovation et l'agilité.

> ![](./RESSOURCES/299361_sum_blue_small.png)
>
> Avec une stratégie ERP propre, vous pouvez garantir que votre organisation bénéficie de la dernière version avec un minimum de modifications et des extensions et personnalisations compatibles avec le cloud.
