# **PROGRAMMATION**

## **OPERATIONS ARITHMETIQUES**

Comme dans tout langage de programmation, les variables de types numériques (entier, avec décimales...) peuvent être utilisées dans des opérations arithmétiques.

Tout d’abord, pour assigner une valeur à une variable, les instructions **MOVE** ou **égal** (=) sont utilisées.

```ABAP
DATA: v_a(2) TYPE i, 
      v_b(2) TYPE i, 
      v_c(2) TYPE i, 
      v_d(2) TYPE i. 
 
v_a = 3. 
v_b = v_a.

MOVE: 5   TO v_c, 
      v_c TO v_d.
```

## **OPERATIONS ELEMENTAIRES**

| **OPERATIONS**     | **SIGNE** | **MOTS-CLES**        |
|--------------------|-----------|----------------------|
| **EGAL**           | =         | MOVE                 |
| **ADDITION**       | +         | ADD... TO...         |
| **SOUSTRACTION**   | -         | SUBSTRACT... FROM... |
| **MULTIPLICATION** | *         | MULTIPLY... BY...    |
| **DIVISION**       | /         | DIVIDE... BY...      |

### **ADDITION**

```ABAP
DATA: v_a(2) TYPE I.

v_a = 5 + 2.

ADD 7 TO v_a.
```

### **SOUSTRACTION**

```ABAP
DATA: v_a(2) TYPE i,
      v_b(2) TYPE i.

v_a = 5 + 2. 
v_b = v_a - 3. 

SUBTRACT 3 FROM v_b.
```

### **MULTIPLICATION**

```ABAP
DATA: v_a(2) TYPE i,
      v_b(2) TYPE i,
      v_c(2) TYPE i.

v_a = 5 + 2.
v_b = v_a - 3.
v_c = v_a * v_b.

MULTIPLY v_c BY 2.
```

### **DIVISION**

```ABAP
DATA: v_a(2) TYPE i,
      v_b(2) TYPE i,
      v_c(2) TYPE i,
      v_d(2) TYPE i. 

v_a = 5 + 2.
v_b = v_a - 3.
v_c = v_a * v_b.
v_d = v_c / 2.

DIVIDE v_d BY 7.
```