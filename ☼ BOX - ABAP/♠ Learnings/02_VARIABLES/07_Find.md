# **PROGRAMMATION**

## **FIND**

```ABAP
FIND [ {FIRST OCCURRENCE} | {ALL OCCURRENCES} OF ] pattern  
     IN [section_of] dobj  
     [IN {BYTE|CHARACTER} MODE]  
     [ {RESPECTING | IGNORING} CASE]  
     [MATCH COUNT mcnt]  
     { { [MATCH OFFSET moff] [MATCH LENGTH mlen] } | [RESULTS result_tab|result_wa] }.
```

L’instruction **FIND** recherche une chaîne de caractères modèle (**pattern**) dans une chaîne de caractères source (**IN** dobj). Deux options sont possibles : 

+ soit chercher toutes les occurrences (**ALL OCCURRENCES**) et stocker le résultat dans une table interne (**RESULTS result_tab**)
+ soit uniquement la première (**FIRST OCCURRENCE**) et stocker le résultat dans une structure (**RESULTS result_wa**).

Paramètres supplémentaires optionnels :

+ De nouveau **IN BYTE MODE**/**IN CHARACTER MODE**.

+ **RESPECTING**/**IGNORING CASE** indique si la casse de la chaîne de caractères doit être respectée. Par défaut, si cette option n’est pas renseignée, **RESPECTING CASE** est automatiquement choisie.

+ **MATCH COUNT** compte le nombre d’occurrences trouvées et sera toujours égal à 1 si l’option **FIRST OCCURRENCE** est choisie.

+ **MATCH OFFSET** indique la dernière position du caractère modèle trouvée dans la chaîne source dans le cas du ALL OCCURRENCES, sinon ce sera la première position. La position des caractères commence à 0.

+ **MATCH LENGTH** retourne la longueur de la chaîne de caractères modèle. Utiliser le dernier exemple n’est pas très significatif car la longueur de ’A’ est de 1 mais s’il s’agit d’un cas complexe avec des variables dont les valeurs ne sont pas connues et attribuées dynamiquement, cette option serait utile.

+ **RESULTS** est soit une structure contenant le résultat du **REPLACE** (**FIRST OCCURRENCE**) soit une table (**ALL OCCURRENCES**). Elle est aussi de la forme **MATCH_RESULT** contenant les champs **OFFSET** et **LENGTH**.

```ABAP
DATA: v_text    TYPE string,
      v_count1  TYPE I,
      v_count2  TYPE I,
      v_offset1 TYPE I,
      v_offset2 TYPE I,
      v_length1 TYPE I,
      v_length2 TYPE I.

v_text = 'ABAAADAFAAXAAAA'.

FIND ALL OCCURRENCES OF 'AAAA'
IN v_text
MATCH COUNT v_count1
MATCH OFFSET v_offset1
MATCH LENGTH v_length1.

FIND FIRST OCCURRENCE OF 'AA'
IN v_text
MATCH COUNT v_count2
MATCH OFFSET v_offset2
MATCH LENGTH v_length2.

WRITE: / 'v_count1 = ', v_count1,
/ 'v_count2 = ', v_count2,
/ 'v_offset1 = ', v_offset1,
/ 'v_offset2 = ', v_offset2,
/ 'v_length1 = ', v_length1,
/ 'v_length2 = ', v_length2.
```