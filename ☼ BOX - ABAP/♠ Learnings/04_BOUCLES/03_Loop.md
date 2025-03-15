# **PROGRAMMATION**

## **LOOP**

```ABAP
LOOP AT lt_table 
  { INTO ls_table | ASSIGNING <fs> | TRANSPORTING NO FIELDS }
  [FROM idx1] [TO idx2]  
  [WHERE log_exp] 
  ...  
  AT ...  
  ...  
  ENDAT.  
  ... 
ENDLOOP.
```

Un **LOOP** va lire ligne par ligne la table interne itab et comme pour le **READ TABLE**, le résultat peut être stocké dans une structure (**INTO ls_table**), ou dans un field symbol (**ASSIGNING <fs>**), mais il est également possible de ne pas le stocker afin de vérifier seulement si la ligne existe (**TRANSPORTING NO FIELDS**) en mettant à jour les variables système **SY-SUBRC** (code retour) et **SY-TABIX** (index de la table lue dans la boucle).

Aussi, deux paramètres optionnels sont disponibles comme pour le **DELETE** (Suppression de plusieurs lignes) : 

+ **FROM idx1** et/ou **TO idx2** permettant de restreindre la boucle à une sélection de lignes

+ **WHERE** permettant d’effectuer une sélection d’un ou plusieurs champs.

```ABAP
TYPES: BEGIN OF ty_citizen, 
         country TYPE char3, 
         name    TYPE char20, 
         age     TYPE numc2, 
       END OF ty_citizen. 
 
DATA: lt_citizen TYPE STANDARD TABLE OF ty_citizen, 
      ls_citizen TYPE ty_citizen. 

FIELD-SYMBOLS: <fs_citizen> TYPE ty_citizen.
 
ls_citizen-country = 'FR'. 
ls_citizen-name    = 'Thierry'. 
ls_citizen-age     = '24'. 
APPEND ls_citizen TO lt_citizen. 
 
ls_citizen-country = 'ES'. 
ls_citizen-name    = 'Luis'. 
ls_citizen-age     = '32'. 
APPEND ls_citizen TO lt_citizen. 
 
ls_citizen-country = 'BR'. 
ls_citizen-name    = 'Renata'. 
ls_citizen-age     = '27'. 
APPEND ls_citizen TO lt_citizen. 
 
ls_citizen-country = 'FR'. 
ls_citizen-name    = 'Floriane'. 
ls_citizen-age     = '32'. 
APPEND ls_citizen TO lt_citizen. 
 
LOOP AT lt_citizen ASSIGNING <fs_citizen> WHERE country = 'FR'. 
  WRITE: / <fs_citizen>-country, <fs_citizen>-name, <fs_citizen>-age. 
ENDLOOP.

LOOP AT lt_citizen ASSIGNING <fs_citizen>. 
  <fs_citizen>-country = 'IT'. 
ENDLOOP. 
 
LOOP AT lt_citizen ASSIGNING <fs_citizen>. 
  WRITE: / <fs_citizen>-country, <fs_citizen>-name, <fs_citizen>-age. 
ENDLOOP.
```

### **AT**

Concernant les paramètres AT, il en existe plusieurs :

```ABAP
LOOP AT lt_table.  
  [AT FIRST. 
    ... 
  ENDAT.] 
 
  [AT NEW comp1. 
    ...  
  ENDAT.  
   
  [AT NEW comp2. 
    ... 
  ENDAT.

  [...]

  [AT NEW compn. 
    ... 
  ENDAT. 
 
  [...] 
 
  [AT END OF compn. 
    ... 
  ENDAT.

  [...] 

  [AT END OF comp2. 
    ... 
  ENDAT.] 
 
  [AT END OF comp1. 
    ... 
  ENDAT.] 
 
  [AT LAST. 
    ... 
  ENDAT.] 
 
ENDLOOP.
```


Pour l’utilisation du **AT NEW / AT END OF**, il est recommandé de trier la table interne sauf s’il s’agit d’un type **SORTED**.

1. **AT FIRST**
Pour la première ligne lue de la table interne lt_table, un traitement spécifique peut être exécuté.

2. **AT NEW comp1 AT NEW comp2 ... AT NEW compn**
Pour un nouvel élément (comp1, comp2,... compn) de la table interne itab, un traitement spécifique peut être exécuté.
...

3. **AT END OF compn ... AT END OF comp2 AT END OF comp1**
Pour un dernier élément (comp1, comp2,... compn) de la table interne itab, un traitement spécifique peut être exécuté.

4. **AT LAST**
Pour la dernière ligne lue de la table interne lt_table, un traitement spécifique peut être exécuté.

```ABAP
TYPES: BEGIN OF ty_citizen, 
         country TYPE char3, 
         name    TYPE char20, 
         age     TYPE numc2, 
       END OF ty_citizen. 
 
DATA: lt_citizen TYPE STANDARD TABLE OF ty_citizen, 
      ls_citizen TYPE ty_citizen. 
 
FIELD-SYMBOLS: <fs_citizen> TYPE ty_citizen. 
 
ls_citizen-country = 'FR'. 
ls_citizen-name    = 'Thierry'. 
ls_citizen-age     = '24'. 
APPEND ls_citizen TO lt_citizen. 
 
ls_citizen-country = 'ES'. 
ls_citizen-name    = 'Luis'. 
ls_citizen-age     = '32'. 
APPEND ls_citizen TO lt_citizen. 
 
ls_citizen-country = 'BR'. 
ls_citizen-name    = 'Renata'. 
ls_citizen-age     = '27'. 
APPEND ls_citizen TO lt_citizen. 
 
ls_citizen-country = 'FR'. 
ls_citizen-name    = 'Floriane'. 
ls_citizen-age     = '32'. 
APPEND ls_citizen TO lt_citizen. 
 
SORT lt_citizen BY country.  
 
LOOP AT lt_citizen ASSIGNING <fs_citizen>. 
  AT FIRST. 
    WRITE: 'Début de la liste'. 
    ULINE. 
  ENDAT. 
 
  AT NEW country. 
    WRITE: / 'Début pays : ', <fs_citizen>-country. 
  ENDAT. 
 
  WRITE:/ 'Nom : ', <fs_citizen>-name, 'Age : ', <fs_citizen>-age. 
 
  AT END OF country. 
    WRITE: / 'Fin pays : ', <fs_citizen>-country. 
    ULINE. 
  ENDAT. 
 
  AT LAST. 
    WRITE: 'Fin de la liste'. 
  ENDAT. 
 
ENDLOOP.
```