# ♠ 1 [EXPLORING HOW TO MAKE DATA CORE COMPLIANT](https://learning.sap.com/learning-journeys/managing-clean-core-for-sap-s-4hana-cloud/exploring-how-to-make-data-core-compliant-1)

> :exclamation: Objectifs
>
> - [ ] Control data to the latest standards

## :closed_book: CLEAN DATA

### CONTROL DATA ACCORDING TO LATEST STANDARDS

Après avoir exploré les processus métier et leurs extensions, intéressons-nous maintenant aux données. Le leitmotiv est simple : « Maintenir la propreté des données ». À l'ère du numérique, l'information est l'outil le plus puissant à notre disposition. Avec l'essor de l'analyse du Big Data, les entreprises cherchent de plus en plus à optimiser, rationaliser et affiner leurs données. À cet égard, SAP S/4HANA Cloud offre une plateforme robuste pour gérer, traiter et exploiter les données plus efficacement. Cependant, l'efficacité des données dépend des principes fondamentaux qui régissent leur propreté. Dans cette troisième leçon de l'unité, nous nous intéressons à la manière de garantir la conformité des données aux normes de propreté.

### DEFINING "DATA"

Avant d'aborder les spécificités des données propres, il est important de définir clairement le terme « données » dans le contexte de SAP S/4HANA Cloud. Un système SAP S/4HANA Cloud stocke trois types de données :

- Configuration

- Données principales

- Transactionnelles

Les données de configuration définissent la structure de l'organisation. Par exemple : le code société, les usines ou les organisations d'achat. Les données principales sont un ensemble cohérent et uniforme d'identifiants et d'attributs étendus qui décrivent les entités clés de l'entreprise. Parmi les données principales utilisées par la quasi-totalité des organisations, on trouve les clients, les fournisseurs, les produits et les comptes du grand livre. Les données transactionnelles sont des informations directement dérivées des transactions. Par exemple, les commandes clients, les bons de commande ou les embauches. Ces données :

- ont toujours une dimension temporelle, comme la date de la commande client ;

- ont une valeur numérique, comme le montant de la commande client ;

- font référence à un ou plusieurs objets (données principales), comme le client auquel la commande est destinée.

### main aspects

[Link Video](https://learning.sap.com/learning-journeys/managing-clean-core-for-sap-s-4hana-cloud/exploring-how-to-make-data-core-compliant-1)

> ![](./RESSOURCES/299361_sum_blue_small.png)
>
> Mantra: "Keep the data clean".

### DATA QUALITY

Dans le contexte actuel axé sur les données, les principes de qualité des données ont évolué pour privilégier six aspects clés :

- Précision

- Exhaustivité

- Cohérence

- Actualité

- Validité

- Unicité

### ACCURACY

L'exactitude est une exigence fondamentale pour une conformité rigoureuse, car elle garantit que les données reflètent fidèlement la réalité de l'entreprise. Des données inexactes peuvent entraîner des prises de décision erronées, des processus inefficaces et une perte de confiance dans le système. Pour garantir l'exactitude des données, il est essentiel de mettre en œuvre des règles de validation, d'effectuer des contrôles réguliers de la qualité des données et d'établir des processus de gouvernance des données pour résoudre tout problème éventuel.

### COMPLETENESS

L'exhaustivité est tout aussi importante, car des données manquantes ou incomplètes peuvent entraver les opérations commerciales et la prise de décision. Pour garantir l'exhaustivité, il est essentiel de définir les exigences en matière de données et de s'assurer que toutes les données pertinentes sont saisies et conservées. Cela peut impliquer la mise en place de processus de collecte de données, la mise en œuvre de la validation des saisies et l'application de normes de saisie afin d'éviter l'entrée de données incomplètes dans le système.

### CONSISTENCY

La cohérence est essentielle pour une conformité optimale, car des données incohérentes peuvent engendrer confusion, erreurs et inefficacité. L'établissement de normes et de directives en matière de données, la réalisation d'activités de profilage et de nettoyage des données, ainsi que la mise en œuvre de processus d'intégration et de rapprochement des données sont essentiels pour maintenir la cohérence des données.

### TIMELINESS

La rapidité d'exécution est un autre aspect crucial des exigences modernes en matière de qualité des données, car des données obsolètes ou obsolètes peuvent avoir un impact négatif sur la prise de décision et les opérations commerciales. La mise en œuvre de processus de capture et d'intégration de données en temps réel, la définition de calendriers d'actualisation et de mise à jour des données, ainsi que la mise en place de mécanismes de surveillance et d'alerte des données sont essentielles pour garantir des données actualisées et à jour.

### VALIDITY

La validité garantit que les données sont conformes aux normes et règles métier définies, et qu'elles représentent fidèlement le scénario réel qu'elles sont censées représenter. Des données invalides peuvent induire en erreur et obscurcir les informations.

### UNIQUENESS

La validité garantit que les données sont conformes aux normes et règles métier définies, et qu'elles représentent fidèlement le scénario réel qu'elles sont censées représenter. Des données invalides peuvent induire en erreur et obscurcir les informations.

### ACHIEVING DATA QUALITY

Les clients disposent d'un large éventail d'outils pour garantir la qualité des données. [SAP Master Data Governance](https://training.sap.com/course/mdg100-sap-master-data-governance-on-sap-s4hana-classroom-019-us-en/?) offre une plateforme centralisée pour la gestion et la gouvernance des données de référence. Grâce à elle, les clients peuvent créer une source unique de données fiables en unifiant les sources de données SAP et tierces. De plus, différentes équipes peuvent gérer des attributs de données de référence uniques et appliquer des valeurs validées pour des points de données spécifiques grâce à un routage et des notifications de workflows collaboratifs. Enfin, les clients peuvent définir, valider et surveiller les règles métier établies pour confirmer la disponibilité des données de référence et analyser les performances de leur gestion. SAP Master Data Governance peut être déployé sur site (sur SAP S/4HANA), avec SAP S/4HANA Cloud (éditions publiques et privées) et sur SAP Business Technology Platform (SAP Master Data Governance, édition cloud).

Outre SAP Master Data Governance, les clients peuvent utiliser [SAP Information Steward](https://www.sap.com/products/technology-platform/data-profiling-steward.html) pour comprendre, analyser et quantifier l'impact des données sur leurs processus métier afin d'optimiser leurs initiatives opérationnelles, analytiques et de gouvernance des données. [SAP Datasphere](https://learning.sap.com/learning-journeys/explore-sap-datasphere) est également disponible. Cette solution complète offre des fonctionnalités de données telles que l'intégration, le catalogage, la modélisation sémantique, l'entreposage de données et la virtualisation. Les clients qui utilisent actuellement[ SAP Data Intelligence Cloud et SAP Data Warehouse Cloud](https://community.sap.com/t5/technology-blogs-by-sap/sap-datasphere-and-sap-data-intelligence-cloud-what-does-this-mean-for-me/ba-p/13603947) peuvent se référer à SAP Datasphere et SAP Data Intelligence Cloud - qu'est-ce que cela signifie pour moi ? pour plus d'informations sur la transition vers SAP Datasphere.

Enfin, les clients sont encouragés à adhérer au modèle SAP One Domain Model (ODM). Ce modèle définit un modèle de données commun et harmonisé pour faciliter l'échange et la réutilisation des données entre les applications métier de l'Intelligent Suite et son écosystème. Ils sont également encouragés à utiliser la [méthodologie SAP Data and Analytics Advisory](https://community.sap.com/t5/technology-blogs-by-sap/release-of-sap-data-and-analytics-advisory-methodology/ba-p/13549970), qui vise à fournir des conseils pour la conception et la validation d'architectures de solutions pour des innovations métier axées sur les données.

### DATA VOLUME EFFICIENCY (FROM CREATION TO RETIREMENT)

Intéressons-nous maintenant à l'efficacité du volume de données. Une étape majeure vers la conformité aux normes Clean Core Data consiste à supprimer les données redondantes, obsolètes ou inutilisées. Ce concept simple est essentiel pour préserver l'utilité et la pertinence de la base de données.

Les données ont une durée de vie limitée. Avec le temps, leur pertinence diminue, les transformant en « poids mort ». Ce poids mort alourdit le système, ralentit le traitement et encombre l'interface, rendant plus difficile la recherche d'informations pertinentes et actualisées. Il est donc impératif de purger régulièrement ces données du système. De même, la redondance et les données inutilisées posent de graves problèmes d'efficacité. Les données redondantes n'apportent aucune nouvelle perspective, mais occupent un espace et des ressources précieux. De plus, les données inutilisées représentent des opportunités manquées. Des audits réguliers des données peuvent aider à identifier et à éliminer ces informations inutiles.

### DATA PRIVACY COMPLIANCE

Le dernier pilier de la propreté des données est la conformité à la confidentialité des données. À mesure que les entreprises collectent et analysent davantage de données personnelles, les préoccupations concernant la confidentialité et l'utilisation abusive des données augmentent. Il est crucial que les données personnelles de référence ne soient stockées que lorsque cela est nécessaire et à des fins légitimes. La collecte de données personnelles inutiles peut entraîner des utilisations abusives ou des violations involontaires, nuire à la confiance et entraîner des conséquences juridiques potentielles. Il est essentiel de respecter les droits des utilisateurs, de ne collecter que les données nécessaires aux besoins opérationnels et de garantir la transparence sur leur utilisation.

La conformité à la confidentialité des données est mieux assurée par [SAP Information Lifecycle Management](https://training.sap.com/course/bit665-sap-information-lifecycle-management-ilm-classroom-012-us-en/), qui permet l'automatisation de l'archivage et de la conservation des données, ainsi que le démantèlement des systèmes existants, tout en équilibrant le coût total de possession, les risques et la conformité légale.

> ![](./RESSOURCES/299361_sum_blue_small.png)
>
> Goals for data:
>
> - Complete
>
> - Correct
>
> - Used and relevant

### BENEFITS OF CLEAN DATA

Les avantages de données propres sont nombreux. On obtient ainsi une « Data To Value » (définie comme la fiabilité des résultats lors de l'utilisation des données dans les processus et les applications). De plus, la stabilité et la qualité des étapes des processus métier (efficacité des processus métier) ainsi qu'un coût total de possession réduit grâce à une gestion efficace du volume de données deviennent possibles. Enfin, l'échange de données entre différentes solutions est amélioré, tout en réduisant le risque de violation des réglementations en matière de protection des données.

### CONCLUSION

La maîtrise des données propres dans SAP S/4HANA exige une compréhension approfondie des exigences modernes en matière de qualité des données, des stratégies visant à garantir l'efficacité du volume de données et une gestion responsable des données de référence personnelles. En adhérant à ces principes, les organisations peuvent améliorer la fiabilité, l'exactitude et la conformité de leurs données, et ainsi optimiser leurs résultats commerciaux.
