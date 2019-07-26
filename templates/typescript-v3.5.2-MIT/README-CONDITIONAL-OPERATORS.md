
# Conditional Operator   
This document describes the list of every conditional operator available in src/conditionalOperators.ts.
 
## Flags  
In this algorithm you can add some flag in the context (see example for applications) those flags are used to add a specific behavior to this variable.

### list
* 'i'  is no hard case
  
### example  
```js
const context = {  
 'name':'Unly',  
 'name__flags':['i']}  
```  
  
## Equal
 
### definition  
	 This operator compares two elements and return true if there are equal for the objects the equivalent is base on the content. it's also the default conditional operator.

### alias  
* equals  
* eq  
  
### example  
```js
const context = {  
 'school':{  
 'name':'Unly',  
 'city':'lyon',  
 'city__flags':['i'],  
 'Postal_code':69000,
 }  
};
check(context, 'school_name__eq', 'Unly'); //true  
check(context, 'school_name__equals', 'unly'); //false  
check(context, 'school_city__equals', 'LYON'); //true  
check(context, 'school', {'name':'Unly','Postal_code':69000,}); //true  
```  
  
## Not Equal  
  
### definition  
	 Check if two objects are different.
   
### alias  
* notEquals  
* ne  
  
### example  
```js
const context = {  
 'school':{  
 'name':'Unly',  
 'city':'lyon',  
 'city__flags':['i'],  
 'Postal_code':69000,
 }  
};
check(context, 'school_name__ne', 'Unly'); //false  
check(context, 'school_name__notEquals', 'unly'); //true  
check(context, 'school_city__notEquals', 'LYON'); //false  
check(context, 'school__ne', {'name':'Unly','Postal_code':69000,}); //false  
```  
  
## StartsWith  

### definition  
	 Check if a string start with another.
   
### alias  
* startsWith  
* sw  
  
### example  
```js
const context = {  
 'school':{  
 'name':'Unly',  
 'city':'lyon',  
 'city__flags':['i'],  
 'Postal_code':69000,  
 }  
};
check(context, 'school_name__sw', 'Un'); //true  
check(context, 'school_name__sw', 'un'); //false  
check(context, 'school_city__sw', 'LY'); //true  
```  
  
## EndWith  
  
### definition   
	 Check if a string finish by another.

### alias
 * endsWith  
* ew  
  
### example  
  
```js
const context = {  
 'school':{  
 'name':'Unly',  
 'city':'lyon',  
 'city__flags':['i'],  
 'Postal_code':69000,  
 }  
};
  
check(context, 'school_name__sw', 'ly'); //true  
check(context, 'school_name__sw', 'LY'); //false  
check(context, 'school_city__sw', 'ON'); //true  
```  
  
## Contains  
  
### definition   
	Check if a string contains a given string, if an array contained a specific element or if an object contained another object.

 ### alias  
* contains  
* includes  
* in

### example

```js
const context = {  
 "name":"Paul",  
 "location":{  
  "city":"lyon",  
  "post_code":69000  
 },  
 "campus":[42, "Unly"],
 "campus__flags":['i']  
};
check(context, 'school_name__in', 'aul'); //true  
check(context, 'school_location__in', {'city':"lyon"}); //true  
check(context, 'school_campus__in', 42); //true  
check(context, 'school_campus__in', 'Unly'); //true  
check(context, 'school_campus__in', 'unly'); //true  
```

## Contains  
  
### definition   
	The opposite of « contain » check if a string does not contain another given string, if an array don't contain a specific element or if an object doesn't contain another object. 

### alias  
* notContains  
* notIncludes  
* nin

### example

```js
const context = {  
 "name":"Paul",  
 "location":{  
  "city":"lyon",  
  "post_code":69000  
 },  
 "campus":[42, "Unly"],
 "campus__flags":['i']  
};
check(context, 'school_name__in', 'aul'); //flase  
check(context, 'school_location__in', {'city':"lyon"}); //false  
check(context, 'school_campus__in', 42); //false
check(context, 'school_campus__in', 'Unly'); //false
check(context, 'school_campus__in', 'unly'); //false 
```

## GreaterThan

### definition   
	Check if a value is greater than another.

### alias  
* greaterThan  
* gt

### example

```js
const context = {  
 "name":"Paul",
 'GPA':3,
};
check(context, 'GPA__gt', 2); //true
check(context, 'GPA__gt', '2'); //true
```

## GreaterThanEquals

## definition 
	Check if a value is greater or equal than another.


### alias  
* greaterThanEquals  
* gte

### example

```js
const context = {  
 "name":"Paul",
 'GPA':3,
};
check(context, 'GPA__gte', 3); //true
check(context, 'GPA__gte', '2'); //true
```

## LessThan

### definition   
	Check if a value is less than another.


### alias  
* lessThan  
* lt

### example

```js
const context = {  
 "name":"Paul",
 'GPA':3,
};
check(context, 'GPA__lt', 4); //true
check(context, 'GPA__lt', '4'); //true
```
## LessThanEquals

### definition 
    Check if a value is less or equal than another.

### alias  
* lessThanEquals  
* lte
### example

```js
const context = {  
  "name":"Paul",
 'GPA':3,
};  
check(context, 'GPA__lte', 3); //true
check(context, 'GPA__lte', '4'); //true
```

## Every

### definition
    This is a complex operator who's checking every occupancy match the given condition.
  
### alias
* every

### example

```js
const context = {
  'students':[
    {'name':'Roger', 'GPA':3, "promotion":2021},
    {'name':'Paul', 'GPA':1, "promotion":2021},
    {'name':'Robert', 'GPA':2, "promotion":2021}
  ]
}
check(context, 'students_promotion__every_eq', 2021); //true
check(context, 'students_promotion__every_gte', 1); //true
```


## Some

#### definition
    This is a complex operator who's  checking some occupancy match the given condition.
  
### alias
* some

### example

```js
const context = {
  'students':[
    {'name':'Roger', 'GPA':3, "promotion":2021},
    {'name':'Paul', 'GPA':1, "promotion":2021},
    {'name':'Robert', 'name__flags': ['i'], 'GPA':2, "promotion":2021}
  ]
}
check(context, 'students_name__some_eq', 'robert'); //true
check(context, 'students_promotion__some_eq', 2); //true
```

## None

#### definition
    This is a complex operator who's  checking none occupancy match the given condition.
  
### alias
* none

### example

```js
const context = {
  'students':[
    {'name':'Roger', 'GPA':3, "promotion":2021},
    {'name':'Paul', 'GPA':1, "promotion":2021},
    {'name':'Robert', 'name__flags': ['i'], 'GPA':2, "promotion":2021}
  ]
}
check(context, 'students_GPA__none_qte', '4'); //true
check(context, 'students_name__some_eq', 'Louis'); //true
```
