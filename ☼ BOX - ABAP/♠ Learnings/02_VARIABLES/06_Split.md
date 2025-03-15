# **PROGRAMMATION**

## **SPLIT**

```ABAP
SPLIT dobj 
  AT sep 
  INTO { {result1 result2 ...} | {TABLE itab} }  
  [IN {BYTE|CHARACTER} MODE].
```

Un **SPLIT** permet de faire l’inverse du **CONCATENATE** : il va séparer une chaîne de caractères dobj selon le code séparateur défini après le **AT**, et stocker le résultat dans des variables de sortie (result1, result2...) ou dans une **table interne** (TABLE **itab**).

Paramètres supplémentaires optionnels : **IN BYTE MODE** ou **IN CHARACTER MODE** ayant les mêmes caractéristiques que pour le **CONCATENATE**.

```ABAP
DATA: v_txt1(20) TYPE c,
      v_txt2(20) TYPE c,
      v_txt3(20) TYPE c,
      v_txt4(20) TYPE c,
      v_txt5(20) TYPE c.

CONSTANTS: c_string(50) TYPE c VALUE 'Hello World Bienvenue sur SAP'.

SPLIT c_string
  AT space
  INTO v_txt1 v_txt2 v_txt3 v_txt4 v_txt5.

WRITE:/ 'v_txt1 : ', v_txt1,
      / 'v_txt2 : ', v_txt2,
      / 'v_txt3 : ', v_txt3,
      / 'v_txt4 : ', v_txt4,
      / 'v_txt5 : ', v_txt5.
```