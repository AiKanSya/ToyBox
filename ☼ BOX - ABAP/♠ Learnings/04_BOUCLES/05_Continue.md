# **PROGRAMMATION**

## **EXIT**

Le mot clé **CONTINUE** en **SAP ABAP** est utilisé pour sauter une itération de boucle et passer directement à l'itération suivante.

Lorsque le programme **ABAP** rencontre l'instruction **CONTINUE** dans une boucle, il saute l'itération en cours d'exécution et passe directement à l'itération suivante sans exécuter le reste du code de l'itération en cours. Cela signifie que toutes les instructions après l'instruction **CONTINUE** dans cette itération ne seront pas exécutées, et la boucle passera à l'itération suivante.

L'instruction **CONTINUE** est utile lorsque vous avez besoin de sauter une itération de boucle en fonction de certaines conditions, sans sortir complètement de la boucle. Vous pouvez utiliser l'instruction **CONTINUE** avec une ou plusieurs conditions pour déterminer quand sauter l'itération en cours.

```ABAP
DATA: i TYPE i, ls_data TYPE STANDARD TABLE OF i.

DO 10 TIMES.
  i = sy-index.

  IF i MOD 2 = 0.
    CONTINUE. " Saute l'itération si i est pair
  ENDIF.

  WRITE: / 'Valeur de i:', i.
ENDDO.

WHILE i < 15.
  i = i + 1.

  IF i = 12.
    CONTINUE. " Saute l'itération si i est égal à 12
  ENDIF.

  WRITE: / 'Valeur de i:', i.
ENDWHILE.

LOOP AT lt_data INTO ls_data.
  IF ls_data = 0.
    CONTINUE. " Saute l'itération si ls_data est égal à 0
  ENDIF.

  WRITE: / ls_data.
ENDLOOP.
```