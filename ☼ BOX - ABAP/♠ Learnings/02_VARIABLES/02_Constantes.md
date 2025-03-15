# **PROGRAMMATION**

## **CONSTANTES**

### **INTEGER**

```ABAP
CONSTANTS: c_integer TYPE i VALUE 10.
```

### **FLOAT**

```ABAP
CONSTANTS: c_float TYPE f VALUE '3.14'.
```

### **DECIMAL**

```ABAP
CONSTANTS: c_decimal TYPE decfloat34 VALUE '1234567890123456789012345678901234'.
```

### **STRING**

```ABAP
CONSTANTS: c_string TYPE string VALUE 'Hello, World!'.
```

### **CHAR**

```ABAP
CONSTANTS: c_char TYPE C LENGTH 1 VALUE 'F'.
```

### **BOOLEAN**

```ABAP
CONSTANTS: c_bool TYPE boolean VALUE abap_true.
CONSTANTS: c_boolean TYPE abap_bool VALUE abap_false.
```

### **DATE** - AAAAMMJJ

```ABAP
CONSTANTS: c_date TYPE d VALUE sy-datum.
CONSTANTS: c_date TYPE d VALUE 1986110.
```

### **TIME** - HHMMSS

```ABAP
CONSTANTS: c_time TYPE t VALUE sy-uzeit.
CONSTANTS: c_time TYPE t VALUE 183045.
```