# **PROGRAMMATION**

## **WHILE ... ENDWHILE**

```ABAP
WHILE log_exp.  
  [statement_block]  
ENDWHILE.
```

Le **WHILE** a le même comportement que le **DO** sauf que le paramètre de sortie est cette fois obligatoire (**WHILE** log_exp).

En reprenant le même exemple que le **DO**, à savoir, boucler cinq fois et afficher la variable système **SY-INDEX**, le programme ressemblera à ceci :

```ABAP
WHILE sy-index <= 5. 
  WRITE:/ sy-index. 
ENDWHILE.
```

WHILE pouvant être traduit par ’tant que’, ce code peut être littéralement traduit par « tant que la variable système SY-INDEX est inférieure ou égal à ’5’, afficher sa valeur ». Le résultat à l’écran sera le même que pour le DO.

### **EXIT**

```ABAP
DATA: v_month TYPE i. 
 
v_month = sy-datum+4(2). 
 
WHILE sy-index <= 12. 
  IF sy-index > v_month. 
    EXIT. 
  ENDIF. 
  WRITE:/'Mois ', sy-index. 
ENDWHILE.
```

### **CHECK**

```ABAP
WHILE sy-index <= 5. 
  CHECK sy-index < 3. 
  WRITE / sy-index. 
ENDWHILE.
```

### **CONTINUE**

```ABAP
WHILE sy-index <= 5. 
  IF sy-index < 3. 
    CONTINUE. 
  ENDIF. 
  WRITE / sy-index. 
ENDWHILE.
```