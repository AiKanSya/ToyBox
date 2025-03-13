# ♠ 1 [ILLUSTRATING THE ARCHITECTURE OF SAP BTP](https://learning.sap.com/learning-journeys/discover-sap-business-technology-platform/illustrating-the-architecture-of-sap-btp_dece8e77-4191-4452-8595-171fa1a4aae7)

> :exclamation: Objectifs
>
> - [ ] Able to illustrate the architecture of SAP BTP.

## :closed_book: ARCHITECTURE OF SAP BTP

![](./RESSOURCES/BTP%20Account%20Structure.png)

#### :small_red_triangle_down: Global Accounts :

Un compte global est la concrétisation d'un contrat conclu avec SAP. Il permet de gérer les répertoires, les sous-comptes, les membres, les droits et les quotas. Vous recevez des droits et des quotas pour utiliser les ressources de la plateforme par compte global, puis vous les distribuez au sous-compte pour une consommation réelle.

#### :small_red_triangle_down: Directory :

Les annuaires vous permettent d'organiser et de gérer vos sous-comptes en fonction de vos besoins techniques et métier.

Un annuaire peut contenir des annuaires et des sous-comptes pour créer une hiérarchie. L'utilisation d'annuaires pour regrouper d'autres annuaires et sous-comptes est facultative ; vous pouvez néanmoins créer des sous-comptes directement sous votre compte global. Vous pouvez créer une structure hiérarchique de 7 niveaux. Le niveau le plus élevé d'un chemin donné correspond toujours au compte global et le niveau le plus bas au sous-compte, ce qui signifie que vous pouvez avoir jusqu'à 5 niveaux d'annuaires.

#### :small_red_triangle_down: Subaccounts :

Les sous-comptes vous permettent de structurer un compte global selon les exigences de votre organisation et de votre projet en matière de membres, d'autorisations et de droits. Un compte global peut contenir un ou plusieurs sous-comptes dans lesquels vous déployez des applications, utilisez des services et gérez vos abonnements. Les sous-comptes d'un compte global sont indépendants les uns des autres. Ceci est important à prendre en compte pour la sécurité, la gestion des membres, la gestion des données, la migration des données, l'intégration, etc., lors de la planification de votre environnement et de votre architecture globale.

#### :small_red_triangle_down: Entitlements :

Un droit est votre droit de provisionner et d'utiliser une ressource. Autrement dit, les droits sont les plans de service que vous êtes autorisé à utiliser. On peut également dire qu'un droit est une option réservée ou les services réservés que vous pouvez utiliser dans votre compte global SAP BTP.

### SAP BTP: REGIONS

![](./RESSOURCES/BTP%20Region.png)

Vous pouvez déployer des applications dans différentes régions. Chaque région représente un emplacement géographique (par exemple, Europe, États-Unis Est) où sont hébergés des applications, des données ou des services. Le choix d'une région se fait au niveau du sous-compte. Pour chaque sous-compte, vous sélectionnez une seule région. Le choix d'une région dépend de nombreux facteurs : par exemple, les performances des applications (temps de réponse, latence) peuvent être optimisées en sélectionnant une région proche de l'utilisateur. Le compte global lui-même est également exécuté dans une région.

#### :small_red_triangle_down: Infrastructure :

La couche d'infrastructure d'une région est fournie soit par SAP, soit par l'un des partenaires d'infrastructure en tant que service (IaaS) de SAP : Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP) et Alibaba Cloud.

#### :small_red_triangle_down: Environments :

Les environnements constituent la plateforme SAP BTP, véritable offre de services permettant le développement et l'administration d'applications métier. Chaque environnement est équipé des outils, des technologies et des environnements d'exécution nécessaires à la création d'applications.

#### :small_red_triangle_down: Services :

Les services permettent, facilitent ou accélèrent le développement d'applications métier et d'autres services de plateforme sur SAP BTP. Retrouvez tous les services disponibles dans le SAP Discovery Center.

#### :small_red_triangle_down: Data :

Your business and application data is managed through services like the SAP HANA Cloud service or the SAP Datasphere service.

#### :small_red_triangle_down: Applications :

Les applications métier que vous déployez dans une région s'appuient sur les couches situées en dessous et les utilisent.

### SAP BTP: SUBACCOUNT

![](./RESSOURCES/BTP%20Subaccount.png)

Chaque sous-compte est associé à une région, c'est-à-dire l'emplacement physique où sont hébergés les applications, les données ou les services. La région spécifique est pertinente lorsque vous déployez des applications et accédez au cockpit SAP BTP via l'URL correspondante. La région attribuée à votre sous-compte n'est pas nécessairement directement liée à votre localisation. Vous pouvez par exemple être situé aux États-Unis, mais exploiter votre sous-compte en Europe.

Les droits et quotas achetés pour un compte global doivent être attribués aux sous-comptes individuels.

> Note
>
> Un quota représente la quantité numérique définissant la consommation maximale autorisée d'une ressource. Autrement dit, la quantité d'un forfait de service que vous êtes autorisé à utiliser.
>
> Un forfait de service représente les coûts et les avantages d'une variante donnée d'un service particulier. Par exemple, une base de données peut être configurée avec différentes tailles de t-shirts, chacune correspondant à un forfait de service différent.

Les termes comptes globaux et sous-comptes et leur signification dans le cadre de SAP BTP ne font pas référence aux comptes utilisateurs ou à la gestion des utilisateurs.

### SAP BTP: ENVIRONMENTS

![](./RESSOURCES/BTP%20Environment.png)

Les environnements constituent l'offre SAP BTP « Platform as a Service » (PAS) permettant le développement et l'administration d'applications métier. Ils sont ancrés dans SAP BTP au niveau des sous-comptes.

Chaque environnement est équipé des outils, technologies et environnements d'exécution spécifiques nécessaires au développement d'applications. Un sous-compte multi-environnements est donc votre adresse unique pour héberger diverses applications et offrir diverses options de développement. L'un des avantages de l'utilisation de différents environnements dans un même sous-compte est que vous ne gérez les utilisateurs, les autorisations et les droits qu'une seule fois par sous-compte, ce qui offre une plus grande flexibilité à vos développeurs.

### SAP BTP: ENVIRONMENTS FOR YOUR APPLICATIONS

![](./RESSOURCES/BTP%20Environment%20Differen.png)

La disponibilité de différents environnements offre une plus grande flexibilité dans votre processus de développement.

Les environnements suivants sont disponibles :

#### :small_red_triangle_down: Cloud Foundry Environment :

L'environnement Cloud Foundry vous permet de créer des applications cloud polyglottes. Cloud Foundry (CF) est une plateforme cloud native open source en tant que service (PaaS), qui comprend un ensemble de spécifications et d'outils couvrant l'ensemble du cycle de développement des applications. Cela inclut le déploiement, la gestion du cycle de vie des applications, la gestion des dépendances des services, la sécurité, etc. Pour l'interaction, Cloud Foundry propose une interface en ligne de commande (CF CLI), qui permet une automatisation poussée grâce aux scripts. Vous pouvez développer votre application sur des standards ouverts grâce aux packs de build Java, Node.js et Python fournis par SAP. Vous pouvez également intégrer d'autres langages grâce aux packs de build communautaires pour PHP, Ruby ou Go.

#### :small_red_triangle_down: KYMA Environment :

L'environnement Kyma fournit un environnement d'exécution Kubernetes entièrement géré, basé sur le projet open source « Kyma ». Kubernetes, similaire à Cloud Foundry, est une plateforme cloud native open source permettant de gérer le cycle de vie des applications. Contrairement à CF, elle met davantage l'accent sur les conteneurs, leur orchestration et leur évolutivité.

Kyma permet aux développeurs d'étendre les solutions SAP avec des fonctions sans serveur et de les combiner avec des microservices conteneurisés. Vous pouvez également utiliser l'environnement Kyma pour déployer des microservices ou même créer des applications full-stack.

#### :small_red_triangle_down: ABAP Environment :

L'environnement ABAP est principalement destiné à la création d'extensions pour les produits ABAP, tels que SAP S/4HANA Cloud, mais permet également de développer des applications cloud indépendantes. Techniquement, l'environnement ABAP est un environnement cloud intégré à Cloud Foundry ou à l'environnement Kyma. Il repose sur la dernière version cloud de la plateforme ABAP, également utilisée pour SAP S/4HANA Cloud. La pile logicielle intègre des composants technologiques standard, familiers du serveur d'applications ABAP autonome. L'environnement ABAP prend en charge le modèle de programmation d'applications RESTful (RAP) ABAP, notamment SAP Fiori et Core Data Services (CDS).

### ENTITY RELATIONSHIPS BETWEEN GLOBAL ACCOUNT, DIRECTORY AND SUBACCOUNTS

![](./RESSOURCES/BTP%20Structure%20Relationsh.png)

L'illustration « Relations d'entités entre compte global, répertoire et sous-comptes » illustre la relation entre un compte global, ses répertoires, sous-comptes, environnements, régions, droits et quotas pour l'ensemble de fonctionnalités B.

Un sous-compte est spécifié pour l'environnement Neo ou pour l'environnement Multi-environnement (environnements KYMA, ABAP et Cloud Foundry).

> Note
>
> L'environnement Neo de SAP BTP a été la première version commercialisée après le lancement du produit.
>
> L'environnement Neo permet de développer des applications HTML5, Java et SAP HANA Extended Application Services (SAP HANA XS). Vous pouvez également utiliser la boîte à outils de développement d'interface utilisateur pour HTML5 (SAPUI5) pour développer des interfaces utilisateur enrichies pour les applications métier web modernes.
>
> SAP se concentre sur le modèle de compte multi-environnement avec l'ensemble de fonctionnalités B.

## :closed_book: LEARN MORE

Si vous disposez toujours d'un environnement SAP BTP Neo, une migration pourrait vous convenir. Avant de commencer la migration, contactez nos experts en migration SAP BTP afin d'établir une feuille de route personnalisée pour votre transition. Pour plus d'informations, consultez : [Migration depuis Neo](https://help.sap.com/docs/btp/migrating-from-neo-environment-to-multi-cloud-foundation-cloud-foundry-and-kyma/migrating-from-neo-environment-to-multi-cloud-foundation-cloud-foundry-and-kyma).

En savoir plus : [SAP Business Technology Platform](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/6a2c1ab5a31b4ed9a2ce17a5329e1dd8.html)

## :closed_book: KEY TAKEWAYS OF THIS LESSON

Après avoir signé un contrat avec SAP, vous obtiendrez un compte global qui s'ajoutera à la structure de votre SAP BTP. Ce compte vous permettra de gérer vos répertoires et sous-comptes. Pour bénéficier d'une latence optimale, vous devrez choisir la région d'exécution d'un sous-compte. Ce choix implique également de choisir l'hyperscaler qui fournira ce sous-compte.
