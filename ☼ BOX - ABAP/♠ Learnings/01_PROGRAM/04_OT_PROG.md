# **PROGRAMMATION**

## **ORDRE DE TRANSPORT**

Que signifie être transporté dans les systèmes du projet ? Il a été établi lors de la section sur le détail du mandant, qu’un projet pouvait avoir plusieurs systèmes : un de développement, qualité, pré-production, production... Tous les objets de **workbench** comme de **customizing** sont créés sur celui de développement. Afin qu’ils puissent exister sur un système différent, un **ordre de transport** est alors créé. Il commence par le **nom du système de développement** suivi par la lettre **’K’** puis par une chaîne de six caractères.

_Exemple_

DEVK987213, DEVKA43586

### **UTILISATION**

Un **ordre de transport** peut contenir plusieurs objets comme par exemple un développement complet d’une solution avec un programme principal, quatre includes, deux créations de tables, une modification de structure, et les objets de texte du programme principal.

Ainsi, avec la transaction **STMS** (utilisée par l’équipe **Basis**), il est possible de transporter toute cette solution sur les autres systèmes.

L’**ordre de transport**, après avoir été **libéré** (étape signifiant que toute la solution a été testée sur le **système DEV** et est prête pour le **transport**), est copié sur le **système de qualité QAL**. Les fonctionnels vont alors tester la solution puis donner leur validation pour le transport final en **production PRD**.

Ce cheminement est défini par le **package** (traduit par _classe de développement_) qui doit être renseigné. Chaque **classe de développement** spécifie une **route de transport**, mais est aussi utile pour organiser et regrouper les développements :

_Exemple_

+ **Classe de développement FI** pour tous les programmes standards **FI** ;

+ **Classe de développement ZFR** pour tous les programmes **Z** d’un pays en particulier ;

+ **Classe de développement ZX** regroupant tous les objets pour un **projet X** ;

Une fois la **classe de développement renseignée**, une nouvelle fenêtre nous invite à renseigner l’ordre de transport.

[Schéma - Fenêtre Demande : Ordre du Workbench transportable](https://drive.google.com/file/d/1_wHpL-Gtbqh-T7zMtvc7JXE1pctqHeRX/view?usp=share_link)

Ensuite, il suffira de cliquer sur l’icône **Créer ordre (F8)** (icône de la feuille blanche) pour en créer un nouveau, puis sur l’écran suivant, d’en renseigner le libellé sur soixante caractères.

[Schéma - Fenêtre Créer ordre](https://drive.google.com/file/d/1yurX3yiX2ONLRjbubM1XKbrO0jHScF-w/view?usp=share_link)

Une fois cette étape terminée, **SAP** va créer un **ordre de transport** avec la description renseignée qui sera finalement affecté au programme.

[Schéma - Demande: Ordre du Workbench transportable](https://drive.google.com/file/d/1eLznsTTrjYsbRcQv_1k3TxD9nxOJm_y5/view?usp=share_link)

Il aurait été possible également d’inclure ce programme dans un **ordre de transport** existant en cliquant sur le bouton **Ordres utilisateur** (écran de demande d’ordre transportable).

[Schéma - Demande : Ordre du workbench transportable - Ordres utilisateur](https://drive.google.com/file/d/1cz5E0JWi1uXC87C_l2yHLBUczRjuQLOo/view?usp=share_link)

Par un simple double clic, le programme aurait été assigné à un **ordre de transport** choisi.