# **PROGRAMMATION**

## **VARIABLES**

### **INTEGER**

```ABAP
DATA: lv_integer TYPE i.
* lv_integer = 10.
```

### **FLOAT**

```ABAP
DATA: lv_float TYPE f.
* lv_float = '3.14'.
```

### **PACKED DECIMAL**

```ABAP
DATA: lv_decimal TYPE p DECIMALS 2.
* lv_decimal = 1234.56.
```

### **STRING**

```ABAP
DATA: lv_string1 TYPE string.
* lv_string1 = 'Bonjour le monde'.
```

### **CHAR**

```ABAP
DATA: lv_char TYPE char255.
* lv_char = 'Frederic'.

DATA lv_name(10) TYPE c.
lv_name = 'Frederic GIUSTINI'.              "Reverra 'Frederic G' uniquement
```

### **BOOLEAN**

```ABAP
DATA: lv_bool TYPE boolean,
      lv_boolean TYPE abap_bool.
* lv_bool = abap_true.
* lv_boolean = abap_false.
```

### **DATE** - AAAAMMJJ

```ABAP
DATA: lv_date TYPE d.
* lv_date = sy-datum.
* lv_date = 19861102.
```

### **TIME** - HHMMSS

```ABAP
DATA: lv_time TYPE d.
* lv_time = sy-uzeit.
* lv_time = 183045.
```