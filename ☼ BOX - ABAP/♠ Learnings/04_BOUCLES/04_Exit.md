# **PROGRAMMATION**

## **EXIT**

Le mot clé **EXIT** en **SAP ABAP** est utilisé pour indiquer la sortie prématurée d'une boucle, d'une fonction ou d'un programme.

Lorsqu'un programme **ABAP** rencontre l'instruction **EXIT**, il arrête immédiatement l'exécution de la section de code en cours d'exécution et sort de la boucle ou de la fonction. L'instruction **EXIT** peut être utilisée avec des conditions pour déterminer quand sortir d'une boucle ou d'une fonction.

Par exemple, si vous avez une boucle qui doit s'exécuter tant qu'une certaine condition est vraie, vous pouvez utiliser l'instruction **EXIT** pour sortir de la boucle si cette condition n'est plus vraie. De même, si vous avez une fonction qui doit s'exécuter jusqu'à ce qu'elle trouve une certaine valeur, vous pouvez utiliser l'instruction **EXIT** pour sortir de la fonction dès que cette valeur est trouvée.

En résumé, **EXIT** est un moyen utile de contrôler le flux d'exécution dans un programme ABAP et de sortir prématurément d'une boucle ou d'une fonction en fonction de certaines conditions.

```ABAP
DATA: i TYPE i.

DO 10 TIMES.
  i = sy-index.
  WRITE: / 'Iteration', i.

  IF i = 5.
    EXIT. " Sortie de la boucle DO prématurément
  ENDIF.
ENDDO.

WHILE i < 15.
  WRITE: / 'Valeur de i:', i.

  IF i = 12.
    EXIT. " Sortie de la boucle WHILE prématurément
  ENDIF.

  i = i + 1.
ENDWHILE.

LOOP AT lt_data INTO ls_data.
  WRITE: / ls_data-field1, ls_data-field2.

  IF ls_data-field2 = 'EXIT'.
    EXIT. " Sortie de la boucle LOOP prématurément
  ENDIF.
ENDLOOP.
```