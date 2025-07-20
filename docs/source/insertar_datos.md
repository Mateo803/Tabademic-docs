# Insertar datos

Una vez configurado el torneo, el siguiente paso es insertar los datos del mismo, en concreto:

* Salas

* Equipos

* Oradores

* Jueces

* Incompatibilidades entre jueces (en caso de haber)

* Incompatibilidades entre jueces y equipos (en caso de haber)

* Incompatibilidades entre jueces e instituciones (en caso de haber)

<div class="tip">
💡
Puedes acceder a cada uno desde la barra lateral, expandiendo <span class="bold">Datos.</span>

</div>

![Datos](_images/datos.png)

## Importar datos mediante un único fichero Excel

Para facilitar en la mayor medida de lo posible este procedimiento, Tabademic cuenta con la posibilidad de que los datos se inserten mediante un fichero éxcel, donde se podrá insertar de una vez salas, equipos, oradores y jueces (más adelante se verá en detalle cómo incluir las incompatibilidades).

El mismo debe contar con 3 hojas denominadas **Salas, Equipos y Jueces** respectivamente.


### Salas

Una única columna con todas las salas que vayas a disponer durante el torneo.

<div class="centered-image">

![Hoja de salas](_images/hoja_salas.png)

</div>


### Equipos

La cual cuenta con las siguientes columnas

* Nombre del equipo
* Institución al que pertenece (debe coincidir con alguno de [esta lista](lista_instituciones))
* Primer integrante
* Segundo integrante
* Tercer integrante
* Cuarto Integrante
* Quinto integrante

![Hoja de equipos](_images/hoja_equipos.png)

<div class="warning">

⚠️ Cada equipo tiene que estar **conformado por al menos 2 integrantes**, por lo que el tercer, cuarto y quinto pueden estar en blanco.

</div>

<br>

### Jueces

Del mismo modo que antes, podemos importar los jueces del torneo mediante otro éxcel. En este caso, las columnas que debe contener son las siguientes:

* Nombre del juez

* Institución a la que pertenece (también debe estar en [esta lista](lista_instituciones), excepto si es independiente, en cuyo caso puede dejarse en blanco)

* Correo electrónico (para agilizar el envío de URLs privadas, aunque puede dejarse en blanco si no se desea contar con ellas)

* Puntuación (cuanto más alto más probable que ese juez sea principal; puede estar en blanco, transformándose en un 0 posteriormente).

* Una columna por cada ronda del torneo (tanto clasificatoria como final), marcando con una X (o cualquier otra letra que se desee) la disponibilidad en cuestión.

![Hoja de jueces](_images/hoja_jueces.png)

<br>

<div class="tip">

💡 No te preocupes si las disponibilidades no son definitivas, ya que estas se podrán modificar yendo al juez en cuestión

</div>


### Cómo subir el fichero

Simplemente selecciona `Importar datos` desde la barra lateral. Allí verás un área en el que o bien puedes darle click y seleccionar el archivo, o arrastrarlo y soltarlo.

Una vez hecho eso, dale click a `Subir datos` y Tabademic se encargará del resto.

### Validaciones

Si ha habido algún tipo de error en los datos (ya sea porque la estructura del éxcel no es adecuada o porque hay datos incorrectos), aparecerá un popup indicando el error en cuestión, de tal forma que puedas corregirlo al instante y volver a subir el archivo.

![Popup estructura incorrecta](_images/popup_excel_estructura_incorrecta.png)


<div class="caption">Popup mostrando estructura incorrecta</div>

<br>

![Popup datos incorrectos](_images/popup_excel_datos_incorrectos.png)


<div class="caption">Popup mostrando datos incorrectos</div>

<br>

Una vez esté todo correcto, aparecerá un popup indicando que los datos se han insertado satisfactoriamente, ahorrándonos una gran cantidad de tiempo comparado con su subida manual.


<div class="warning">

<h3>⚠️ A tener en cuenta</h3>

Solamente se mostrarán las instituciones de los equipos insertados (de tal forma que no se pueda elegir uno que no tenga relación con ningún equipo del torneo)

* En caso de que ya hayas subido el éxcel y haya cambios de última hora, simplemente actualízalo en tu ordenador y vuélvelo a subir. Tabademic **reemplazará** todo lo que hubiera actualmente con los datos actualizados.

* Por lo anterior, no se aconseja que vuelvas a subir el éxcel de jueces una vez les hayas entregado sus URLs privadas, **ya que estas cambiarán y tendrás que volver a enviarlas**. Si los cambios son muy pequeños (como añadir un equipo o modificar el correo de un juez), hazlo de manera manual (es algo más engorroso, pero tampoco supondrá mucho problema al tratarse de modificaciones puntuales).

</div>

<br>

¡Ahora solo resta insertar las incompatibilidades!

### Incompatibilidades

Tabademic permite incluir los siguientes tipos de incompatibilidades:

* Entre jueces

* Entre jueces y equipos

* Entre jueces e instituciones

#### Entre jueces

Para incluir este tipo de incompatibilidad, simplemente basta con seleccionar en el primer desplegable el juez en cuestión, y en el segundo la incompatibilidad en sí.


<br>

<div class="tip">
💡
No hay límite en cuanto al número de incompatibilidades que puede tener un mismo juez

</div>

#### Entre jueces y equipos

Muy similar a la entidad anterior, solo que esta vez el segundo desplegable se refiere al equipo en cuestión.


<div class="tip">
💡
Solo aparecerán equipos distintos al de la institución del juez, ya que dicha incompatibilidad ya se tiene en cuenta automáticamente

</div>

<br>

#### Entre jueces e instituciones

Obviando a la propia institución (ya que Tabademic detecta este tipo de incompatibilidades automáticamente), es posible indicar para cada juez con qué otras instituciones tiene incompatibilidad, de tal forma que no pueda juzgar ningún equipo que pertenezca a dichas instituciones (aunque sí podrá juzgar con jueces que pertenezcan a las mismas).

La forma de insertarlos es similar a las dos anteriores, teniendo un desplegable con el juez en cuestión y otro con la institución.

<div class="warning">

⚠️ Solamente se mostrarán los clubes de los equipos insertados (de tal forma que no se pueda elegir uno que no tenga relación con ningún equipo del torneo)

</div>

<br>

## Inserción manual

Aunque se recomienda el método anterior para insertar los datos del torneo, también es posible realizarlo de manera manual. Para ello simplemente basta con irse a cada entidad e ir introduciendo la información poco a poco (los campos son los mismos vistos con anterioridad).