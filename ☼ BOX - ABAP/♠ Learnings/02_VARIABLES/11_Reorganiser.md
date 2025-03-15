# **PROGRAMMATION**

## **REORGANISER**

```ABAP
Variable[+pos](nbre)
```

Afin de pouvoir **extraire** ou **réorganiser** une chaîne de caractères, cette instruction permet de faire une sélection à partir d’une position (**pos**) sur un nombre de caractères définis (**nbre**).

La date sur **SAP** adopte le format **’AAAAMMJJ’**. Comment faire afin qu’elle réponde au schéma **’JJ-MM-AAAA’**. Pour ceci, l’instruction **CONCATENATE** sera également utilisée.

```ABAP
DATA: v_date(10) TYPE c.

CONCATENATE sy-datum+6(2) sy-datum+4(2) sy-datum(4)
  INTO v_date
  SEPARATED BY '-'.

CONDENSE v_date NO-GAPS.

WRITE:/ sy-datum,
      / v_date.
```