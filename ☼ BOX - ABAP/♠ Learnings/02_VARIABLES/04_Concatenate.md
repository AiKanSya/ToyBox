# **PROGRAMMATION**

## **CONCATENATE**

```ABAP
CONCATENATE [ {dobj1 dobj2 ...} | {LINES OF itab} ]
            INTO result  
            [IN {BYTE|CHARACTER} MODE]  
            [SEPARATED BY sep]  
            [RESPECTING BLANKS]. 
```

**CONCATENATE** permet comme son nom l’indique de concaténer plusieurs chaînes de caractères définies par dobj1, dobj2… ou les lignes d’une table interne (**LINES OF** _itab_ - _itab_ pour l’anglais _Internal Table_, soit table interne), et de stocker le résultat dans une variable cible définie après le **INTO**.

```ABAP
CONSTANTS: c_txt1(20) TYPE c VALUE 'Hello',
           c_txt2(20) TYPE c VALUE 'World',
           c_txt3(20) TYPE c VALUE 'Bienvenue',
           c_txt4(20) TYPE c VALUE 'sur',
           c_txt5(20) TYPE c VALUE 'SAP'.

DATA: v_result1(50)  TYPE c,
      v_result2(50)  TYPE c,
      v_result3(100) TYPE c.

CONCATENATE c_txt1 c_txt2 c_txt3 c_txt4 c_txt5
  INTO v_result1.

CONCATENATE c_txt1 c_txt2 c_txt3 c_txt4 c_txt5
  INTO v_result2
  SEPARATED BY ' '.

CONCATENATE c_txt1 c_txt2 c_txt3 c_txt4 c_txt5
  INTO v_result3
  RESPECTING BLANKS.

WRITE:/ 'Sans option :     ', v_result1,
      / 'SEPARATED BY:     ', v_result2,
      / 'RESPECTING BLANKS:', v_result3.
```