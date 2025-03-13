# ♠ CLEAN CORE

## EN RESUME

> :boom: Le Clean Core est une philosophie de conception qui vise à maintenir le noyau standard de SAP (comme SAP S/4HANA) propre et intact, tout en externalisant les personnalisations vers des plateformes comme SAP BTP. Cette approche offre une flexibilité accrue, simplifie les mises à jour, et permet une adoption rapide des innovations.

## DEFINITION

> #### :bookmark: `Clean Core`
>
> Le Clean Core est une approche stratégique qui vise à :
>
> - Minimiser les modifications au noyau standard du système ERP (comme SAP S/4HANA).
>
> - Isoler les extensions et personnalisations en dehors du système de base, en utilisant des outils et plateformes comme SAP BTP (Business Technology Platform).
>
> - Simplifier la maintenance et les mises à jour en évitant que des personnalisations bloquent ou compliquent les processus de mise à niveau.

## POURQUOI ADOPTER LE CLEAN CORE ?

Historiquement, les systèmes ERP on-premise (comme ECC) étaient souvent fortement personnalisés avec du code ABAP ou des ajustements spécifiques aux entreprises. Cela a engendré plusieurs problèmes :

### :small_red_triangle_down: Adopter le standard SAP :

Les mises à jour ou montées de version devenaient coûteuses et risquées en raison des conflits avec les personnalisations.

### :small_red_triangle_down: Rigidité :

Un système trop personnalisé est difficile à adapter aux nouveaux besoins métiers ou aux innovations technologiques.

### :small_red_triangle_down: Coûts élevés de maintenance :

Plus le système est personnalisé, plus son entretien demande du temps et des ressources.

## PRINCIPES DU CLEAN CORE

### :small_red_triangle_down: Rigidité :

- Utiliser les fonctionnalités standard de SAP autant que possible sans les modifier.

- Tirer parti des meilleures pratiques intégrées dans SAP S/4HANA.

### :small_red_triangle_down: Externaliser les extensions :

Plutôt que d'intégrer les personnalisations directement dans le noyau SAP, utiliser des plateformes comme SAP BTP pour les développer et les déployer.

### :small_red_triangle_down: Utiliser des APIs et des événements :

S'appuyer sur les APIs standard de SAP et les événements pour interagir avec le noyau sans le modifier.

### :small_red_triangle_down: Adopter des extensions "side-by-side" :

Implémenter des extensions en parallèle au système de base (et non dedans), via des technologies comme SAP Extension Suite, CAP (Cloud Application Programming Model), ou Node.js/Java sur SAP BTP.

### :small_red_triangle_down: Minimiser les développements ABAP custom :

Réduire l’utilisation de code ABAP personnalisé et le limiter aux cas indispensables qui ne peuvent pas être couverts autrement.

## AVANTAGES DU CLEAN CORE

### :small_red_triangle_down: Mises à jour simplifiées :

Le système reste compatible avec les nouvelles versions, ce qui réduit le temps et les coûts des mises à niveau.

### :small_red_triangle_down: Flexibilité accrue :

Les extensions peuvent être rapidement adaptées ou remplacées sans affecter le noyau SAP.

### :small_red_triangle_down: Adoption rapide des innovations :

Avec un Clean Core, les entreprises peuvent profiter rapidement des nouvelles fonctionnalités ou améliorations fournies par SAP.

### :small_red_triangle_down: Réduction des coûts de maintenance :

Moins de personnalisations signifie moins de complexité et moins de ressources nécessaires pour le support.

### :small_red_triangle_down: Conformité au cloud :

Le Clean Core est particulièrement adapté aux déploiements cloud, où les modifications au noyau ne sont pas autorisées.

## COMMENT METTRE EN OEUVRE UNE STRATEGIE CLEAN CORE ?

Étapes clés :

1. Évaluation des personnalisations existantes :

   - Identifier toutes les modifications et extensions actuelles.

   - Classer ces personnalisations : indispensables, optionnelles, ou obsolètes.

2. Migration des extensions vers SAP BTP :

   - Utiliser des outils comme SAP Extension Suite ou SAP Integration Suite pour déplacer les personnalisations hors du noyau.

3. Adoption des fonctionnalités standard :

   - Tirer parti des innovations standard de SAP S/4HANA pour remplacer les fonctionnalités personnalisées.

4. Formation et sensibilisation :

   - Former les équipes internes pour comprendre l'importance du Clean Core et apprendre à utiliser des approches modernes comme les APIs et les extensions side-by-side.

5. Mise en place d'une gouvernance stricte :

   - Établir des politiques pour empêcher les futures personnalisations dans le noyau.

## EXEMPLE CONCRET : CLEAN CORE AVEC SAP S/4HANA

> Cas :
>
> Une entreprise utilise SAP S/4HANA pour sa gestion des commandes. Elle a historiquement personnalisé le processus de validation des commandes directement dans le code ABAP.

> Problème :
>
> Lors des mises à jour, les conflits avec le code personnalisé ont entraîné des retards et des coûts supplémentaires.

Solution avec le Clean Core :

1. Suppression des personnalisations dans le noyau :

   - Les règles de validation des commandes sont externalisées sur SAP BTP.

2. Utilisation des APIs standard :

   - Le système S/4HANA expose une API pour envoyer les données de commande à une application hébergée sur SAP BTP.

3. Mise en œuvre d'une extension côté BTP :

   - Une application construite avec SAP CAP valide les commandes en fonction des règles métiers.

> Résultat :
>
> Le noyau SAP reste propre, et les mises à jour peuvent être effectuées sans interruption.

## LES OUTILS POUR UN CLEAN CORE AVEC SAP

### :small_red_triangle_down: SAP Business Technology Platform (BTP) :

Pour créer des extensions et des intégrations "side-by-side".

### :small_red_triangle_down: SAP Extension Suite :

Offre des outils pour développer des extensions sans modifier le noyau SAP.

### :small_red_triangle_down: SAP Integration Suite :

Facilite l’intégration entre SAP et des systèmes tiers via des APIs et des connecteurs.

### :small_red_triangle_down: SAP Cloud Application Programming Model (CAP) :

Un cadre pour construire des applications cloud en utilisant Node.js ou Java.
