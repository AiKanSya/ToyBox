# **PROGRAMMATION**

## **CONDENSE**

```ABAP
CONDENSE text [NO-GAPS].
```

Cette instruction est très souvent utilisée avec le **CONCATENATE**, car elle sépare chaque chaîne de caractères par un espace, en supprimant tous ceux en trop.

Elle possède l’option **NO-GAPS** qui supprime absolument tous les espaces et va donc regrouper tous les mots de la chaîne de caractères.

```ABAP
CONSTANTS: c_txt1(20) TYPE c VALUE 'Hello    ',
           c_txt2(20) TYPE c VALUE '    World    ',
           c_txt3(20) TYPE c VALUE '    Bienvenue    ',
           c_txt4(20) TYPE c VALUE '    sur    ',
           c_txt5(20) TYPE c VALUE '    SAP    '.

DATA:      v_result(50)   TYPE c .

CONCATENATE c_txt1 c_txt2 c_txt3 c_txt4 c_txt5
  INTO v_result.

WRITE:/ 'Sans CONDENSE :         ', v_result.

CONDENSE v_result.
WRITE:/ 'Avec CONDENSE :         ', v_result.

CONDENSE v_result NO-GAPS.
WRITE:/ 'Avec CONDENSE NO GAPS : ', v_result.
```