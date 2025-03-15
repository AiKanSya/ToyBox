# **PROGRAMMATION**

## **CLEAR**

```ABAP
CLEAR dobj.
```

Le **CLEAR**, instruction commune à tous les types de variables (chaîne de caractères, numérique...) qui permet tout simplement de supprimer leur contenu.

Cet exemple permet de faire un **CLEAR** sur des variables de différents types et de les afficher. Il permet de voir également les valeurs par défaut de chaque type.

```ABAP
DATA: v_result(50) TYPE c,
      v_int(5)     TYPE i,
      v_date       TYPE d,
      v_hour       TYPE t.

v_result = 'Hello World'.
v_int    = 5.
v_date   = sy-datum.
v_hour   = sy-uzeit.

WRITE:/ 'Avant le Clear'.
WRITE:/ 'Résultat  : ', v_result.
WRITE:/ 'Entier    : ', v_int.
WRITE:/ 'Date      : ', v_date.
WRITE:/ 'Heure     : ', v_hour.

CLEAR: v_result,
       v_int,
       v_date,
       v_hour.

WRITE:/.
WRITE:/ 'Après le Clear'.
WRITE:/ 'Résultat  : ', v_result.
WRITE:/ 'Entier    : ', v_int.
WRITE:/ 'Date      : ', v_date.
WRITE:/ 'Heure     : ', v_hour.
```

Le troisième translate va utiliser le masque ’ABBAabba’ sur la variable V_TEXT3. Le masque a la logique suivante (il est nécessaire pour comprendre de prendre par paquet de deux lettres) :

Lorsque la lettre ’A’ est rencontrée, la changer pour ’B’.

Lorsque la lettre ’B’ est rencontrée, la changer pour ’A’.

Lorsque la lettre ’a’ est rencontrée, la changer pour ’b’.

Lorsque la lettre ’b’ est rencontrée, la changer pour ’a’.

Ainsi, suivant cette logique, le texte V_TEXT3 aura comme valeur finale ’Abracadabra’.