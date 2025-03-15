# ♠ 1 [OVERVIEWING SAP BUILD GOVERNANCE CAPABILITIES](https://learning.sap.com/learning-journeys/compose-and-automate-with-sap-build-the-no-code-way/overviewing-sap-build-governance-capabilities)

> :exclamation: Objectifs
>
> - [ ] Explain the need for governance during citizen development
>
> - [ ] Describe the governance triad
>
> - [ ] Identify the governance capabilities of SAP Build

## :closed_book: GOVERNANCE AND CITIZEN DEVELOPMENT

Une bonne gouvernance du **citizen development** est essentielle à la réussite du **low-code**. Si les **outils low-code** révolutionnent le développement d'applications et de **Process**, ils introduisent également de nouveaux défis pour les responsables informatiques et métier. L'organisation informatique doit s'assurer qu'aucun **shadow-IT** ne surgit et que les **citizen developers** sont en mesure de créer des applications sécurisées, évolutives et conformes aux normes de l'entreprise.

Cette implication comprend non seulement l'implication précoce des parties prenantes, mais aussi des programmes de formation et de certification spécifiques destinés aux **citizen developers**, accompagnés d'une documentation et de directives solides et concises. Ce sont les éléments essentiels pour un **citizen development** réussi.

![](./RESSOURCES/BTP110_Col03_U1_L3_001)

Une bonne gouvernance du **citizen development** est essentielle à la réussite du **low-code**.

Le **shadow-IT** est un sujet bien connu des professionnels de l'informatique en entreprise. Il est fréquemment utilisé lorsque des employés, cherchant à répondre à des besoins spécifiques ou à améliorer leur efficacité, contournent les canaux officiels et utilisent des logiciels non homologués.

Le **shadow-IT** peut également survenir lorsque des **outils low-code** homologués sont utilisés sans aucune supervision. S'il est tentant de se lancer rapidement dans le développement **low-code** lorsqu'on réalise la rapidité avec laquelle il est possible de créer des solutions, un environnement non gouverné peut présenter plusieurs risques et défis, notamment :

- Risques de sécurité

- Compliance issues (Problèmes de conformité)

- Manque d'intégration

- Utilisation inefficace des ressources/risque de prolifération et de redondance

- Solutions non prises en charge

- Perte de contrôle

La gouvernance des **plateformes low-code** et le **citizen development** peuvent atténuer ces risques en établissant des politiques et des **Process** clairs pour l’utilisation de la technologie, les canaux de communication et en permettant aux utilisateurs de s’autonomiser.

## :closed_book: THE GOVERNANCE TRIAD AT A GLANCE

Voyons en quoi consiste la gouvernance en examinant la triade de la gouvernance :

![](./RESSOURCES/BTP110_03_U1_L3_002)

La triade de la gouvernance :

#### :small_red_triangle_down: People :

Cet élément représente les rôles et les profils impliqués dans votre organisation. Il inclut les professionnels de l'informatique, les contributeurs métier et les autres acteurs clés qui forment des équipes fusion. Ces équipes fusion sont généralement transversales et peuvent impliquer des membres techniques et non techniques, comme un développeur professionnel et un collaborateur souhaitant devenir **citizen developer**. Dans ce contexte, la création d'un **low-code Center of Excellence** (**Center of Excellence** (CoE) low-code) est essentielle. Ce **Center of Excellence** guide, supervise et accompagne les équipes qui développent avec des outils comme **SAP Build**. Il est responsable de la gouvernance globale, de la formation et du développement, de l'assurance qualité et de la gestion du cycle de vie des solutions. Il garantit l'adéquation de l'innovation **low-code** avec les besoins et les priorités de votre entreprise.

#### :small_red_triangle_down: Process :

L'élément **Process** de la Triade de Gouvernance implique la création d'un IT Trust Blueprint (Schéma Directeur de Confiance IT). Ce schéma directeur définit les règles, les **Process** et les lignes directrices pour l'utilisation des outils et méthodes **low-code**, garantissant ainsi l'alignement des efforts d'innovation avec les politiques et procédures IT. Il définit les **Process** de **sécurité** des données, de **conformité** et de **gouvernance**, et établit des **rôles** et **responsabilités** clairs pour les acteurs IT et métier. Par ailleurs, la découverte, le partage et la mise en œuvre des meilleures pratiques doivent faire partie intégrante de votre **Process**. Cela peut inclure la définition de normes pour l'architecture, les tests et le déploiement des solutions, et la garantie de leur application cohérente. La formation des **citizen developers** et professionnels sera également importante pour améliorer l'expérience de développement et gérer les cas d'utilisation plus complexes.

#### :small_red_triangle_down: Tools and Technologies :

Le dernier aspect de la triade englobe les outils et la technologie. Cet élément se concentre sur l'adoption de **pratiques DevOps extensibles**, la **curation des API**, la **gestion des accès** et des **autorisations**, la **gestion du cycle de vie**, les **tests** et la **surveillance**. Ces pratiques garantissent l'évolutivité, la sécurité et l'efficacité des solutions **low-code**. L'utilisation d'outils tels que l'**intégration** et la **livraison continues** (**continuous integration and delivery** - CI/CD), le **contrôle de version** et les **tests automatisés** permet un **prototypage**, des **tests** et un **déploiement** rapides, ainsi qu'une **gestion continue**. Pour une utilisation sécurisée et efficace des API, il est essentiel d'établir des normes claires de développement et d'utilisation des API. Pour respecter les exigences de confidentialité des données, la gestion des accès et des autorisations est rigoureusement appliquée. La gestion du cycle de vie implique la définition de règles et de **Process** clairs pour le développement, les tests, le déploiement et la maintenance des solutions. Pour identifier et résoudre rapidement les problèmes, des tests et une surveillance réguliers sont essentiels, grâce à des outils tels que la surveillance des journaux et l'analyse en temps réel qui améliorent les performances des solutions.

## :closed_book: GOVERNANCE IN SAP BUILD

Les trois éléments de la triade de gouvernance (**people**, **Process**, **technologie**) sont en définitive régis par l'organisation informatique. SAP estime qu'une mise à l'échelle réussie de **SAP Build** à l'échelle de l'entreprise peut être mieux soutenue par la mise en place d'un **Center of Excellence** (CoE) piloté par l'informatique.

![](./RESSOURCES/BTP110_03_U1_L3_003)

La mise à l'échelle de **SAP Build** à l'échelle de l'organisation ne peut se faire que par une approche gouvernée, et elle s'applique aussi bien aux **citizen developers** qu'aux développeurs professionnels. Le **SAP Build Center of Excellence** est responsable des tâches suivantes :

#### :small_red_triangle_down: Scale Development Safely :

Cet aspect implique la mise en œuvre de **guardrails** (garde-fous) avec sécurité intégrée, d'API personnalisées et de projets d'action, ainsi que l'utilisation d'artefacts prédéfinis et de packages de contenu pour cas d'usage. Il inclut également la configuration des politiques, des approbations et des **Process** de développement. Tous ces éléments sont essentiels pour un développement à grande échelle sécurisé au sein d'une organisation, tout en préservant la sécurité et l'efficacité.

#### :small_red_triangle_down: Low-Code DevOps :

Le **DevOps Low-Code** consiste à intégrer des **méthodes DevOps** de niveau entreprise à vos **Process**. Cela implique d'intégrer des fonctionnalités de gestion du cycle de vie des projets et de **CI/CD** adaptées à chaque cas d'usage à votre cycle de développement. Cette approche globale garantit un développement et un déploiement efficaces des solutions au sein de votre organisation.

#### :small_red_triangle_down: IT and LoB Collaboration (Fusion Development) :

Le **Fusion development** vise à favoriser une collaboration dynamique entre les différents acteurs de l'organisation. Cela implique la création de modèles et de fonctionnalités de cocréation favorisant la collaboration entre l'informatique, les développeurs métier et les **citizen developers**. Cette approche collaborative maximise l'utilité et l'applicabilité des solutions développées.

#### :small_red_triangle_down: Governance Operations :

Cette facette de la responsabilité du **Center of Excellence** (CoE) concerne l'opérationnalisation de la gouvernance. Elle implique la mise en place et l'exploitation de cadres du **CoE** et de la **Community of Practice** (CoP), ainsi que l'utilisation de méthodes et d'outils pour former efficacement les formateurs de tous niveaux. Cette approche garantit l'autonomie de tous les membres de l'organisation et la mise en œuvre efficace de la stratégie de gouvernance.

### INTRODUCTION THE PREBUILT DIGITAL CENTER OF EXCELLENCE TOOLKIT FOR SAP BUILD

Pour lancer rapidement un programme de gouvernance et un **Center of Excellence** **SAP Build**, SAP propose une boîte à outils pré-intégrée pour le **Center of Excellence** numérique. Cette boîte à outils est un ensemble d'**artefacts pré-intégrés** permettant de mettre en place rapidement un programme de gouvernance et un **Center of Excellence** **SAP Build**, en s'appuyant sur une **SAP Build Work Zone**. Cette boîte à outils aide les administrateurs informatiques à gérer et à collaborer avec les **citizen developers**, et à créer un point d'entrée pour tout ce dont les développeurs low-code ont besoin pour réussir.

### SUMMARY

La gouvernance est essentielle à la réussite du **citizen development**, car elle prévient l'essor du **shadow-IT** et garantit la sécurité, l'évolutivité et la conformité des applications aux normes de l'entreprise. Le modèle de gouvernance s'articule autour de la « triade de gouvernance », composée des personnes, des **Process** et de la technologie. La plateforme SAP Build prend en charge cette gouvernance grâce à des fonctionnalités telles que le **Center of Excellence** (CoE) piloté par l'IT, qui facilite la mise à l'échelle sécurisée du développement, l'intégration du DevOps Low-Code, le développement fusionné et la gouvernance opérationnelle. De plus, la boîte à outils Digital CoE pré-intégrée pour SAP Build facilite la mise en place rapide d'un programme de gouvernance et d'un CoE SAP Build, favorisant ainsi un développement low-code efficace et performant.

## :closed_book: FURTHER READING

Read more about the governance capabilities of SAP Build here:

- [SAP Build Roadmap](https://roadmaps.sap.com/board?range=CURRENT-LAST&PRODUCT=73554900100800003832&PRODUCT=73554900100800004334&PRODUCT=73555000100800002781#Q1%202023)

- [Video - Demo of current SAP Build Governance Capabilities Feb 2023](https://youtu.be/Me2uJiaUpS0)
