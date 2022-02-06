# Enunciado 3

> Implementar un método de verificación lógica de paréntesis. Es decir, implementar el método `parenthesisChecker(str)` que recibe un `string` como parámetro y devuelve un `boolean`. La respuesta del método debe ser `true` si la cadena de `string` es válida en términos de paréntesis (`( )`, `[ ]`, `{ }`), i.e. cada apertura de paréntesis se cierra correctamente. A continuación se muestran ejemplos de `string` válidos e inválidos.
> 
> **Ejemplos válidos**: la función debe devuelve `true`.
>
> - `parenthesisChecker('a * (b + c)')` → `true`
> - `parenthesisChecker('a * (b + c * [d])')` → `true`
> - `parenthesisChecker('[]{}()abc{([])}')` → `true`
>
> **Ejemplos válidos**: la función debe devuelve `false`.
>
> - `parenthesisChecker('(()')` → `false`
> - `parenthesisChecker('(([))')` → `false`
> - `parenthesisChecker('([)]')` → `false`

# Razonamiento

_Escribir aquí los supuestos asumidos, reflexiones y explicaciones de la solución_

- Primero creo un diccionario para chequear los parentesis abiertos con sus - respectivos cierres (linea 18 - 22)
- Creo un array donde voy a ir almacenando los parentesis abiertos (linea 23)
- Antes de empezar con la iteración, me aseguro de que el string contenga solo brackets y no otro tipo de caracter, por ejemplo letras o numeros (linea 24)
- Itero sobre el string (linea 25)
- Verifico si existe la propiedad, esto significa que es un parentesis abierto, por lo tanto lo guardo (linea 26-27)
- Si no existe, significa que es un parentesis cerrado. Verifico si corresponde con el último parentesis abierto. De no coincidir, retorna falso (linea 28-30)
- Finaliza la iteración y chequeo que no haya quedado nada en el arreglo (linea 32) 
