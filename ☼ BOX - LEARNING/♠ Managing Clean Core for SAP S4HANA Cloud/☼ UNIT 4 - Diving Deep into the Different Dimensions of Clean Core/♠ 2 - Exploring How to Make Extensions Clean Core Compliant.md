# ♠ 1 [EXPLORING HOW TO MAKE EXTENSIONS CLEAN CORE COMPLIANT](https://learning.sap.com/learning-journeys/managing-clean-core-for-sap-s-4hana-cloud/exploring-how-to-make-extensions-clean-core-compliant-1)

> :exclamation: Objectifs
>
> - [ ] Implement extensions in a clean core compliant way

## :closed_book: CLEAN EXTENSIONS

### DECOUPLE EXTENSIONS FROM STANDARD

Se lancer dans l'aventure SAP S/4HANA Cloud est passionnant, mais cela exige également une compréhension précise des principes de « clean core ». À mesure que les entreprises se développent et évoluent, elles ont souvent besoin d'extensions pour leurs systèmes ERP. Ces extensions offrent une valeur inestimable en permettant de personnaliser les applications pour répondre à des besoins spécifiques. Cependant, si elles ne sont pas réalisées conformément aux principes de « clean core », elles peuvent parfois entraîner des complications et des inefficacités. Dans cette leçon, nous abordons la deuxième dimension de « clean core », à savoir « l'extensibilité du clean core ». Comme nous l'avons vu dans la leçon précédente, chaque dimension a un objectif ou un mantra. Pour cette dimension, l'objectif est de « maintenir les extensions propres ». Le respect des principes d'extensibilité du clean core contribue à préserver l'intégrité du système, à améliorer l'efficacité et à faciliter les mises à niveau.

### GUIDING PRINCIPLES

[Link Video](https://learning.sap.com/learning-journeys/managing-clean-core-for-sap-s-4hana-cloud/exploring-how-to-make-extensions-clean-core-compliant-1)

> ![](./RESSOURCES/299361_sum_blue_small.png)
>
> Clean core mantra : "Keep the extensions clean".

> Note
>
> L'extensibilité du noyau propre est abordée en détail dans le parcours d'apprentissage « [Pratiquer l'extensibilité du noyau propre pour SAP S/4HANA Cloud](https://learning.sap.com/learning-journeys/practicing-clean-core-extensibility-for-sap-s-4hana-cloud) ». Cette leçon fournit un résumé détaillé des principes d'extensibilité du noyau propre. Pour plus d'informations, consultez le parcours d'apprentissage.

### EXTENSIONS MUST BE AVOIDED WHEN POSSIBLE

Le premier aspect de la conformité avec le noyau propre consiste à éviter autant que possible de créer des extensions. Avant de créer une extension, il est important d'évaluer minutieusement si la fonctionnalité souhaitée peut être obtenue via les fonctionnalités ou la configuration ERP standard. Cette évaluation est généralement effectuée lors de la mise en œuvre de la première dimension (processus métier). Une fois les processus métier conformes au noyau propre, il est facile de déterminer si les fonctionnalités prêtes à l'emploi de SAP S/4HANA Cloud les implémentent. Dans le cas contraire, un développement personnalisé et/ou le développement d'extensions sont nécessaires. En minimisant l'utilisation d'extensions, vous pouvez réduire la complexité et les frais de maintenance de votre système ERP.

En plus de cette exigence, pour approuver les extensions, les entreprises doivent mettre en place une structure de gouvernance propre et exigeante. La documentation justifiant la nécessité de l'extension doit être claire, tout comme la valeur proposée.

### EXTENSIONS DON'T BREAK UPGRADES AND UPGRADES DON'T BREAK EXTENSIONS

Lors de la création d'extensions, il est crucial de s'assurer qu'elles ne perturbent pas une mise à niveau. Une extension non conforme au « clean core » peut entraîner des problèmes allant de la corruption des données à une panne complète du système. Ce risque implique que les extensions doivent être conçues pour permettre des transitions fluides lors des mises à niveau de l'ERP. En suivant les principes du « clean core », vous pouvez créer des extensions qui s'adaptent aux nouvelles versions du système ERP, minimisant ainsi les interruptions et les temps d'arrêt.

Pour garantir que les extensions ne perturbent pas une mise à niveau (ou qu'une mise à niveau ne perturbe pas une extension), l'extension doit être clairement distincte du code SAP S/4HANA Cloud. Le modèle d'extensibilité de SAP S/4HANA Cloud a été créé en partie pour répondre à cet objectif. Ce modèle, lorsqu'il est suivi, garantit que les extensions ne causent pas de problèmes, car les clients bénéficient d'innovations continues de SAP. Il repose sur les principes suivants :

- Les extensions ne peuvent être implémentées qu'en interne dans SAP S/4HANA Cloud (extensions intégrées à la pile) ou en externe (extensions côte à côte exécutées sur SAP Business Technology Platform).

- Les extensions ne peuvent utiliser que les interfaces de programmation d'applications (API) et les BAdI SAP publics locaux ou distants, ainsi que les points d'extension d'objet métier (BO) du modèle de programmation d'applications RESTful ABAP.

- Les extensions ne peuvent être implémentées qu'à l'aide de technologies cloud et publiées.

Examinons maintenant les deux premiers, puis le troisième. Concernant le premier principe, il existe trois types d'extensions, divisés en deux catégories :

- **On-stack extensions**, créées dans SAP S/4HANA Cloud. Ces extensions peuvent être des extensions utilisateur clé (type 1) ou des extensions développeur (type 2).

- **Side-by-side extensions**, créées dans SAP Business Technology Platform (type 3).

En général, les extensions de type 1 ou 2 sont créées lorsqu'un couplage étroit avec SAP S/4HANA Cloud est nécessaire. Les extensions de type 3 sont créées lorsqu'un couplage plus lâche est acceptable.

Étroitement liée au premier principe, l'extensibilité propre du cœur nécessite l'utilisation d'API et de points d'extension « publiés » (BAdI ou points d'extension BO). Les objets non publiés ne peuvent pas être utilisés.

Combinés, ces deux principes offrent une transparence totale (une séparation claire) entre le code client et le code SAP.

### EXTENSIONS MUST BE CLOUD COMPLIANT

Nous abordons maintenant le troisième principe du modèle de développement cloud SAP S/4HANA : les technologies cloud disponibles et déployées. Les deux principaux principes directeurs que les clients doivent suivre pour mettre en œuvre ce principe sont :

- Modèle de développement cloud ABAP

- Modèle d'extensibilité à trois niveaux

### BAP CLOUD DEVELOPMENT MODEL

SAP a créé le modèle de développement ABAP Cloud (ABAP Cloud) pour répondre aux exigences du développement cloud natif. Il représente une évolution de l'ABAP classique, conservant les fonctionnalités et avantages habituels du langage ABAP, tout en supprimant les concepts incompatibles avec SAP S/4HANA Cloud. En résumé, ABAP Cloud repose sur les principes suivants :

- Seuls les types d'objets ABAP Cloud approuvés (artefacts de modèles de programmation d'applications ABAP RESTful, par exemple) peuvent être développés.

- Le langage ABAP Cloud est contrôlé par une vérification syntaxique.

- L'utilisation des API publiées est contrôlée par une vérification syntaxique.

- Les outils de développement ABAP pour Eclipse sont utilisés pour créer tous les objets de développement.

### THREE TIER EXTENSIBILITY MODEL

Nous avons mentionné dans une leçon précédente qu'il existe trois variantes de SAP S/4HANA que les clients pourraient potentiellement adopter :

- SAP S/4HANA Cloud Édition Publique

- SAP S/4HANA Cloud Édition Privée

- SAP S/4HANA (pour les clients souhaitant une approche sur site/hébergée)

Le parcours vers le cloud de chaque client est différent. Certains utilisent l'édition publique, tandis que d'autres préfèrent l'édition privée. Certains clients adoptent d'abord une solution sur site, puis migrent ensuite vers l'édition publique. Conscient de cette différence entre les clients, SAP a conçu un modèle d'extensibilité à trois niveaux pour répondre aux différents besoins des clients à chaque étape de leur transition vers le cloud. Ce modèle doit son nom aux trois niveaux (options) disponibles. Nous aborderons les deux premiers niveaux maintenant, et le troisième dans un instant.

Le niveau 1 est obligatoire pour les clients de l'édition publique et recommandé pour les clients de l'édition privée. Il est également recommandé pour les clients sur site, en particulier s'ils prévoient de migrer vers l'édition publique ou privée ultérieurement, car les artefacts développés conformément aux principes du niveau 1 migreront en douceur avec un minimum de perturbations. Cela signifie que les extensions sont développées exclusivement avec ABAP Cloud et le modèle d'extensibilité SAP S/4HANA Cloud. ABAP classique et les extensions classiques ne sont pas pris en charge.

Le niveau 2 a été créé pour les clients adoptant une édition privée/sur site. Pour ces clients, il peut y avoir un objet (un module de fonction, par exemple) qui n'a pas encore été publié par SAP, mais qui est néanmoins nécessaire au développement réussi d'une extension. L'objet non publié est « encapsulé » par un objet publié (par exemple, une classe ABAP publiée, dans l'une de ses méthodes, appelle un module de fonction ABAP non publié). Puisque l'objet d'encapsulation est publié, les règles d'ABAP Cloud sont respectées (seules les API publiées peuvent être utilisées). Les clients peuvent utiliser l'outil d'influence client pour demander à SAP de publier des API. Une fois l'API publiée par SAP, le wrapper peut être supprimé.

> ![](./RESSOURCES/299361_sum_blue_small.png)
>
> Créez des extensions compatibles avec le cloud, qui sont intégrées via des interfaces stables.

### PRECISELY UNDERSTAND THE REQUIREMENT BEFORE EXTENDING

Ce principe est lié au premier. Dans le premier, nous affirmons que les extensions doivent être évitées sauf si nécessaire. Cependant, nous affirmons ici que si des extensions sont nécessaires, les équipes projet doivent soigneusement réfléchir à leur mise en œuvre et anticiper les besoins futurs.

Cela implique deux choses. Premièrement, il convient de bien réfléchir à la création de l'extension en tant qu'extension on-stack ou side-by-side, conformément au modèle d'extensibilité SAP S/4HANA Cloud. Deuxièmement, applicable aux clients en édition privée et sur site, il convient de savoir s'il est préférable de créer une extension en utilisant les techniques d'extension classiques. Les extensions classiques constituent le troisième niveau du modèle d'extensibilité à trois niveaux. Les extensions créées de cette manière sont déconseillées en raison du risque élevé de perturbation, tant lors d'une mise à niveau du système que lors du passage à l'édition publique. Néanmoins, si les approches de niveau 1 ou 2 ne sont pas envisageables, les extensions classiques (à condition que le client en comprenne les implications) sont acceptables. Les extensions classiques constituent le troisième niveau du modèle d'extensibilité à trois niveaux.

Pour faciliter cette décision, les clients peuvent utiliser la [méthodologie d'extension d'application SAP](https://help.sap.com/doc/87e18fdb75fd42f8aee59e3c76de7cd7/Cloud/en-US/sap.application.extension.methodology.pdf). Cette méthodologie permet aux clients d'évaluer leurs cas d'utilisation d'extension et de définir une solution cible d'extension de manière structurée et formalisée.

### CONSLUSION

En conclusion, l'adhésion aux principes de conformité « clean core » est essentielle pour créer des extensions ERP durables et efficaces. Vous pouvez optimiser l'efficacité de votre système ERP tout en minimisant la complexité et les coûts de maintenance :

- minimiser l'utilisation des extensions ;

- s'assurer que les extensions ne compromettent pas les mises à niveau ;

- assurer la conformité des extensions au cloud ;

- comprendre les exigences des clients.

En suivant les directives décrites dans cette formation, les entreprises peuvent prendre des décisions éclairées lors de l'évaluation et de l'application des principes de conformité « clean core » à leurs extensions ERP. Cette approche permet de disposer d'un système ERP plus rationalisé et pérenne, adapté à l'évolution des besoins de l'organisation.

> ![](./RESSOURCES/299361_sum_blue_small.png)
>
> Les extensions ne doivent jamais dupliquer les fonctionnalités standard de SAP S/4HANA Cloud.
