# **PROGRAMMATION**

## **CHECK**

Le mot clé **CHECK** en **SAP ABAP** est utilisé pour vérifier si une condition est remplie et arrêter l'exécution du programme si la condition n'est pas remplie.

Lorsque le programme **ABAP** rencontre l'instruction **CHECK** avec une condition spécifiée, il vérifie si la condition est remplie. Si la condition est fausse, le programme s'arrête immédiatement et affiche un message d'erreur, indiquant que la condition n'est pas remplie. Si la condition est vraie, le programme continue à s'exécuter.

L'instruction **CHECK** est utile lorsque vous devez vous assurer qu'une condition est remplie avant de continuer à exécuter le reste du code. Si la condition n'est pas remplie, il n'est pas nécessaire d'exécuter le reste du code, car il ne produirait pas le résultat attendu.

```ABAP
DATA: i TYPE i, ls_data TYPE STANDARD TABLE OF i.

DO 10 TIMES.
  i = sy-index.

  CHECK i < 5. " Arrête la boucle si i est supérieur ou égal à 5

  WRITE: / 'Valeur de i:', i.
ENDDO.

WHILE i < 15.
  i = i + 1.

  CHECK i NE 12. " Arrête la boucle si i est égal à 12

  WRITE: / 'Valeur de i:', i.
ENDWHILE.

LOOP AT lt_data INTO ls_data.
  CHECK ls_data > 0. " Saute l'entrée si ls_data est inférieure ou égale à 0

  WRITE: / ls_data.
ENDLOOP.
```