# ♠ 1 [ANALYSING CLEAN CORE COMPONENTS](https://learning.sap.com/learning-journeys/managing-clean-core-for-sap-s-4hana-cloud/analyzing-clean-core-components-1)

> :exclamation: Objectifs
>
> - [ ] Describe the specific components that comprise clean core

## :closed_book: CLEAN CORE COMPONENTS

### INTRODUCTION

Dans l'unité précédente, nous avons examiné quelques-uns des défis auxquels les entreprises sont confrontées aujourd'hui. Nous avons vu comment SAP S/4HANA Cloud apporte une solution à ces défis. Il offre des fonctions essentielles pour la gestion de divers processus métier, notamment la finance, les achats, la chaîne d'approvisionnement, la gestion de la relation client, etc. Cependant, nous avons également constaté qu'en tant que solution cloud, les entreprises adoptant SAP S/4HANA Cloud doivent adopter une approche différente des extensions, des intégrations et des opérations, par rapport à ce qu'elles faisaient auparavant avec les systèmes SAP ERP sur site. Nous nous intéressons maintenant à cette approche. Elle peut se résumer en une expression facile à retenir : « noyau propre ». Dans cette leçon, nous explorons ce que nous entendons par « noyau propre » pour SAP S/4HANA Cloud.

### WHAT IS "CORE"?

Par « Core », nous entendons plusieurs « dimensions » (ou « piliers » si vous préférez), chacune représentant une approche différente permettant à un client d'envisager et d'analyser son système ERP. Ces dimensions (sans ordre particulier) sont les suivantes :

- Processus

- Extensions

- Données

- Intégrations

- Opérations

### WHAT IS "CLEAN"?

Par « propre », nous entendons que pour chaque dimension mentionnée ci-dessus, un ensemble de bonnes pratiques, de méthodologies et d'outils existe. Leur utilisation permet au client de considérer cette dimension comme « propre ». Ces bonnes pratiques, méthodologies et outils sont spécifiques à chaque dimension (et seront abordés ultérieurement).

> Note
>
> Each individual dimension, and the approach applicable to it is explored in detail in the Unit Diving Deep Into the Different Dimensions of Clean Core.

### CHAT IS CLEAN CORE?

Maintenant que nous comprenons les termes individuels, nous pouvons les regrouper :

Pour un noyau propre, le scénario idéal décrit un système à jour avec la dernière version, avec des extensions et une intégration compatibles avec le cloud, une excellente qualité des données de base et une conception de processus parfaite. Un système SAP S/4HANA Cloud nouvellement provisionné est propre par définition. L'objectif du client est alors de maintenir le noyau propre. Pour les clients qui optent pour une conversion de système ou une transformation de l'environnement système, l'objectif est d'obtenir (et de maintenir) le noyau propre. Les différences entre les nouvelles implémentations et les conversions de système et les transformations de l'environnement seront abordées en détail dans la prochaine leçon.

Regardez la vidéo pour un aperçu des composants d'un noyau propre.

[Link Video](https://learning.sap.com/learning-journeys/managing-clean-core-for-sap-s-4hana-cloud/analyzing-clean-core-components-1)

### SAP S/4HANA CLOUD AND CLEAN CORE

Nous avons expliqué comment SAP S/4HANA Cloud offre une solution complète aux problèmes rencontrés par les entreprises modernes. Nous pouvons désormais aller plus loin et affirmer que la mise en œuvre et l'exploitation de SAP S/4HANA Cloud avec un cœur propre constituent l'objectif des clients. Cet objectif est tellement fondamental que, même lorsque nous parlons de SAP S/4HANA Cloud, l'expression « avec un cœur propre » est implicite, que nous le disions explicitement ou non.

> ![](./RESSOURCES/299361_sum_blue_small.png)
>
> SAP S/4HANA Cloud avec un cœur propre permet aux clients d'adapter leurs systèmes aux exigences commerciales changeantes et d'adopter de nouvelles fonctionnalités.

Pour approfondir, voici quelques caractéristiques d'un noyau propre :

- Une version simplifiée et optimisée du logiciel SAP S/4HANA Cloud, axée uniquement sur les fonctionnalités essentielles et offrant une efficacité maximale ;

- La suppression des fonctionnalités, personnalisations et complexités inutiles afin de simplifier le code source du système ERP ;

- Une maintenabilité améliorée, une dette technique réduite et des performances globales du système améliorées.

### COMPONENTS OF A CLEAN CORE

À partir de ces caractéristiques, nous pouvons les conceptualiser en cinq points faciles à retenir :

- **Minimalisme**: Un noyau propre favorise la simplicité en identifiant et en éliminant les fonctionnalités redondantes ou obsolètes, garantissant ainsi que seuls les composants essentiels restent.

- **Modularity** : Elle facilite la division d'un système ERP complexe en composants modulaires faiblement couplés, facilitant ainsi la maintenance et l'adaptabilité.

- **Scalability** : Une architecture à noyau propre permet au système ERP de s'adapter à la croissance et aux changements sans compromettre les performances ni la stabilité.

- **Maintainability** : En supprimant les complexités inutiles, elle rationalise la base de code, facilitant ainsi la compréhension, la modification et l'amélioration du système ERP par les développeurs.

- **Stability and Reliability** : Un noyau propre favorise la stabilité en réduisant les dépendances et en réduisant la vulnérabilité aux bugs et aux incohérences, tout en améliorant la fiabilité du système.

> ![](./RESSOURCES/299361_sum_blue_small.png)
>
> L’objectif des entreprises est de « nettoyer » le cœur, puis de le « garder » propre.

### REAL-LIFE SCENARIO: THE BUSINESS NEED FOR A CLEAN CORE

Imaginez ABC Manufacturing, une entreprise manufacturière de taille moyenne, souhaitant mettre en œuvre un système ERP pour rationaliser ses opérations. L'entreprise a connu une croissance rapide et ses systèmes fragmentés sont devenus inefficaces et sujets aux erreurs. La direction prend conscience de la nécessité d'un système ERP robuste pour répondre à l'évolution de ses besoins, et le service informatique est chargé de la mise en œuvre. Voyons comment ABC Manufacturing peut tirer parti de Clean Core.

### EXISTING ERP IMPLEMENTATION CHALLENGES

Comme mentionné précédemment, voici quelques-uns des défis rencontrés par ABC Manufacturing :

- **Bloated System** (Système surchargé) : Le logiciel ERP actuel d'ABC Manufacturing est une version fortement personnalisée, dont de nombreuses fonctionnalités ne sont plus utiles ni pertinentes.

- **Performance Issues** (Problèmes de performances) : Le système subit des ralentissements fréquents, ce qui impacte la productivité et suscite l'insatisfaction des utilisateurs.

- **High Maintenance Cost** (Coût de maintenance élevé) : La base de code complexe nécessite des efforts et des ressources considérables pour une maintenance et un support réguliers.

### CLEAN CORE TO THE RESCUE

Pour relever les défis d'ABC Manufacturing, le service informatique décide d'évaluer et d'appliquer les principes du « noyau propre » à son système ERP. Il estime qu'en rationalisant les composants clés du logiciel, il peut obtenir les avantages à long terme suivants :

- **Minimalism and Efficiency** : En supprimant les fonctionnalités et personnalisations redondantes du système ERP, ABC Manufacturing peut optimiser ses performances, améliorant ainsi l'expérience utilisateur et la productivité.

- **Scalability and Adaptability** : Une architecture « noyau propre » permet au système ERP de s'adapter à la croissance future et à l'évolution des besoins de l'entreprise, minimisant ainsi les réimplémentations coûteuses.

- **Ease of Maintenance** : La base de code simplifiée d'un « noyau propre » permet des corrections de bugs plus rapides, des temps d'arrêt réduits et une personnalisation aisée, réduisant ainsi le coût global de maintenance.

### IMPLEMENTING A CLEAN CORE ERP SOLUTION

ABC Manufacturing opte pour une migration vers l'édition privée de SAP S/4HANA Cloud. Cette première étape sera suivie d'une transition vers l'édition publique de SAP S/4HANA Cloud, une nouvelle implémentation prévue à moyen terme (environ cinq ans).

> Note
>
> Les nouvelles implémentations par rapport aux conversions de système seront abordées dans la prochaine leçon.

- Pour la conversion du système, l'équipe informatique collabore étroitement avec les différents services afin d'identifier les fonctions essentielles à la rationalisation efficace des opérations d'ABC Manufacturing.

- Les personnalisations, modules complémentaires et intégrations tierces qui ne correspondent plus aux objectifs à long terme de l'entreprise sont supprimés, ce qui permet d'obtenir un système ERP plus performant et plus épuré.

- La stratégie de mise en œuvre de ce système repose sur une approche modulaire, permettant une meilleure évolutivité et une simplification des améliorations futures.

### RESULTS AFTER GETTING THE CLEAN CORE

Une fois la conversion du système terminée et déployée auprès des utilisateurs, ABC Manufacturing en récolte immédiatement les bénéfices :

- **Improved Performance** : Grâce à l’optimisation et au minimalisme, l’ERP (désormais propre) améliore les temps de réponse du système et la satisfaction des utilisateurs.

- **Simplified Development** : Les développeurs comprennent et travaillent désormais sur une base de code simplifiée, ce qui améliore la productivité et réduit les temps de développement.

- **Enhanced Stability and Reliability** : La suppression des complexités inutiles a minimisé les risques de bugs et d’erreurs, ce qui a permis d’obtenir un système ERP plus fiable et plus stable.

- **Cost Reduction** : Grâce à la réduction des efforts de maintenance, le noyau propre a permis de réduire les temps d’arrêt et les coûts globaux de maintenance.

### LESSONS LEARNED

Fort de son expérience réussie dans la mise en œuvre d'une conversion de système, ABC Manufacturing a appris les points suivants :

- Réaliser une analyse métier approfondie afin d'identifier les fonctionnalités critiques avant de se lancer dans un développement propre.

- Utiliser des cadres et des pratiques de développement modulaires pour garantir un couplage souple et une évolutivité optimale.

- Analyser et évaluer régulièrement les performances du système ERP afin d'identifier les opportunités d'optimisation et de nettoyage du code.

- Impliquer les parties prenantes de différents services afin de garantir l'adéquation avec les objectifs et les exigences de l'entreprise.

### SOME MISCONCEPTIONS ABOUT CLEAN CORE

Comme souvent, des idées fausses peuvent survenir, notamment sur des concepts relativement nouveaux. Examinons-en quelques-unes, notamment celles liées à la notion de « clean core ».

- SAP BTP est le seul moyen de rendre le cœur propre et de le maintenir. Si SAP BTP est nécessaire à la création d'extensions parallèles (la dimension d'extension de « clean core »), l'extensibilité pour les utilisateurs clés et les développeurs (qui permettent l'implémentation d'extensions sur la pile) est possible avec SAP S/4HANA Cloud.

- « Clean core » concerne uniquement le code personnalisé et l'extensibilité. Il affecte non seulement le code personnalisé et l'extensibilité, mais aussi les processus métier, les données, l'intégration et les opérations.

- « Clean core » concerne uniquement le coût total de possession (TCO). Certes, « clean core » contribue à la réduction du TCO, mais il permet également l'utilisation des dernières innovations et contribue à une évolution des mentalités, passant du « on premise » au « cloud ».

- « Fit-to-standard » est le seul moyen de rendre le cœur propre et de le maintenir. Bien qu'un système conforme aux normes soit probablement propre, l'utilisation d'options d'extensibilité de niveau 1 (à discuter dans une leçon ultérieure) rend et maintient également le noyau propre.

### CONCLUSION

Dans l'univers SAP S/4HANA Cloud, un noyau propre joue un rôle essentiel pour atteindre l'efficacité, l'évolutivité et la réduction de la dette technique. En éliminant les complexités inutiles et en se concentrant sur les fonctions essentielles, les développeurs peuvent rationaliser les systèmes ERP, améliorant ainsi les performances, la stabilité et la maintenabilité. Comprendre les besoins métier d'un noyau propre, illustré par le cas d'ABC Manufacturing, souligne son importance dans la mise en œuvre d'un ERP. En adoptant minimalisme, modularité, évolutivité et maintenabilité, les développeurs peuvent créer des systèmes ERP alignés sur les objectifs métier, optimiser la productivité et positionner les organisations sur un marché dynamique.

> Note
>
> Avoir un noyau propre permet aux entreprises d’être prêtes pour l’avenir et compétitives à tout moment.
