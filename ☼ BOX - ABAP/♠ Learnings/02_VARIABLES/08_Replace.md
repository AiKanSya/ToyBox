# **PROGRAMMATION**

## **REPLACE**

```ABAP
REPLACE [ {FIRST OCCURRENCE} | {ALL OCCURRENCES} OF] pattern 
        IN [section_of] dobj 
        WITH new  
        [IN {BYTE | CHARACTER} MODE]  
        [ {RESPECTING | IGNORING} CASE ]  
        [REPLACEMENT COUNT rcnt]  
        { { [REPLACEMENT OFFSET roff] [REPLACEMENT LENGTH rlen] } | [RESULTS result_tab|result_wa] }.
```

L’instruction **REPLACE** est identique au **FIND** sauf qu’au lieu de chercher uniquement une chaîne de caractères, elle va aussi la remplacer par une autre (**WITH** new). Elle possède aussi les options **FIRST OCCURRENCE** (chercher et remplacer la première occurrence trouvée), et **ALL OCCURRENCES** (chercher et remplacer toutes les occurrences trouvées).

Paramètres supplémentaires optionnels :

+ **IN section... of...** comme pour le **FIND**, permet de restreindre la chaîne de caractères cible dobj à une partie définie par l’option **OFFSET** (position de départ) et/ou **LENGTH** (longueur de la chaîne cible à partir de la gauche).

+ **IN BYTE MODE**/**IN CHARACTER MODE**.

+ **RESPECTING**/**IGNORING CASE**.

+ **REPLACEMENT COUNT** compteur du nombre de remplacements effectués.

+ **REPLACEMENT OFFSET** renvoie la dernière position modifiée par le **REPLACE** dans la chaîne de caractères source.

+ **REPLACEMENT LENGTH** : comme pour le **MATCH LENGTH** de l’instruction **FIND**, cette option retourne la longueur de la chaîne de caractères modèle.

+ **RESULTS** est soit une structure contenant le résultat du **REPLACE** (**FIRST OCCURRENCE**) soit une table (**ALL OCCURRENCES**). Elle est aussi de la forme **MATCH_RESULT** contenant les champs **OFFSET** et **LENGTH**.

```ABAP
DATA: v_text1 TYPE string,  
      v_text2 TYPE string. 
 
v_text1 = v_text2 = 'ABADAFAX'. 
  
REPLACE FIRST OCCURRENCE OF 'A' IN v_text1 WITH 'I'. 
REPLACE ALL OCCURRENCES  OF 'A' IN v_text2 WITH 'I'. 
 
WRITE: /'V_TEXT1 = ', v_text1, 
       /'V_TEXT2 = ', v_text2.
```