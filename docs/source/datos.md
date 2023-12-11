# Datos

Estas son las entidades que han de insertarse para poder comenzar a tabular cualquier torneo:

* Salas

* Rondas

* Clubes

* Equipos

* Oradores

* Capitanes

* Jueces

* Incompatibilidades entre jueces

* Incompatibilidades entre jueces y equipos

<div class="tip">
💡
Puedes acceder a cada uno de ellas desde la barra lateral, expandiendo <span style="font-weight: bold;">datos del torneo.</span>

</div>


![Datos](_images/datos.png)


## Salas 🚪

Estas representan aquellos lugares donde se realizarán los debates. Pueden albergar valores tanto numéricos (1,2,3, ...) como alfanuméricos (Aula 1, Aula 2, ...). La elección de un tipo u otro dependerá de cada torneo en cuestión.

Además, cuentan con un campo `descripción`, el cual permite (en caso de considerarse necesario, ya que no es obligatorio rellenarlo) especificar detalles de la sala en sí (ubicación, accesibilidad a la misma, etc.).

![Ejemplo de sala](_images/ejemplo_sala.png)

<div class="caption">Ejemplo de sala</div>

<br>

![Salas](_images/salas.png)

<div class="caption">10 primeras salas del torneo de prueba</div>

<br>

<div class="tip">
💡
Puedes modificar la disponibilidad de cada sala mediante la última columna.

</div>

<br>

## Rondas 📅

Las cuales incluyen tanto las clasificatorias (1,2,3...) como las finales (octavos, cuartos, semis o final).

Debido a su naturaleza, la forma de insertarlas es de manera secuencial, comenzando con la ronda 1, luego la 2 y así sucesivamente hasta el número de rondas clasificatorias necesarias.

Y con respecto a las rondas finales, simplemente bastará con elegir la primera de ellas (que dependiendo del torneo pueden ser cuartos, semis, etc.) y del mismo modo que con las rondas clasificatorias, se podrá elegir la siguiente sucesivamente.


![Ejemplo de rondas](_images/rondas.png)

<div class="caption">Ejemplo de un torneo con 6 rondas clasificatorias y 4 rondas finales</div>

<br>

<div class="warning">

⚠️ Una vez se haya insertado la ronda final, no será posible introducir más rondas (ya que se presupone que es la última del torneo).


</div>

<div class="tip">
💡
Puedes eliminar una ronda utilizando la papelerita que se encuentra en la última columna, pero ten en cuenta que solo
podrá hacerse con la última de todas (ya que de lo contrario se perdería la secuencia que requiere la inserción de esta
entidad).

</div>

## Clubes

Esta entidad muestra todos los clubes presentes en el torneo, incluyendo además cuántos equipos y jueces están adscritos a cada uno de ellos.


![Ejemplo de clubes](_images/clubes.png)

<div class="caption">10 primeros clubes del torneo de prueba</div>

<br>

## Equipos

Para insertar un equipo basta con introducir el nombre del equipo y el club al que pertenece.

<div class="centered-image">

![Ejemplo de equipo](_images/equipo.png)

</div>

<div class="caption">Ejemplo de inserción de un nuevo equipo</div>

<br>


![Equipos](_images/equipos.png)

<div class="caption">10 primeros equipos del torneo de prueba</div>

<br>

<div class="tip">
💡
Como puede apreciarse en la última imagen, es posible cambiar la disponibilidad de cada equipo en todo momento (por defecto estarán todos disponibles hasta que se especifique lo contrario).
</div>

<br>

## Oradores 🗣️

Representan a los integrantes de los diferentes equipos. Por lo tanto, hay que insertar el equipo al que pertenecen (y marcar la casilla de capitán en caso de que el participante en cuestión lo sea).

![Orador](_images/orador.png)

<div class="caption">Ejemplo de orador</div>

<br>

<div class="warning">

⚠️ Únicamente el nombre del orador y el equipo de procedencia son obligatorios; el resto de campos pueden rellenarse o no a voluntad de los requisitos del torneo.


</div>

<br>

![Oradores](_images/oradores.png)

<div class="caption">Ejemplo de oradores</div>

<br>

<div class="tip">
💡
Nuevamente se puede cambiar a voluntad la disponibilidad de cada orador.

</div>

## Capitanes

Esta entidad, al igual que en el caso de los clubes, no puede ser insertada directamente, ya que únicamente muestra los capitanes de cada uno de los equipos insertados hasta ahora.

Su utilidad radica en que es posible ver directamente la información de contacto de cada capitán, lo cual puede ser especialmente útil por si se desea enviar un **correo al equipo** o se desea crear el clásico **grupo de capitanes** de Whatsapp.

![Capitanes](_images/capitanes.png)

<div class="caption">Ejemplo de capitanes</div>

<br>

## Jueces 🧑🏼‍⚖️

Esta entidad representa a todos los jueces que juzgarán al menos un debate a lo largo de todo el torneo. A continuación se presentarán los 3 principales datos con los que debe contar cada juez (además del nombre y el resto de información opcional similar a los oradores, claro está).

###  Clubes

Es posible indicar el club al que juez pertenece en la actualidad **(club actual)**, además de los clubes en los cuales estuvo en el pasado **(clubes antiguos)** (en caso de haber, claro está). Todo ello para poder controlar las incompatibilidades de tipo club.

### Disponibilidades

Para que Tabademic sepa con qué jueces cuenta en cada ronda, es necesario que a la hora de insertar un juez, se indice expresamente en qué rondas estará disponible.

Para ello, se cuenta con una serie de checkboxes con cada una de las rondas del torneo **(las cuales deberán estar previamente insertadas, ya que de lo contrario no aparecerá ninguna**).

<div class="centered-image">

![Ejemplo de disponibilidades](_images/disponibilidades.png)

</div>


<div class="caption" style="text-align:center;">Ejemplo de disponibilidades</div>

<br>

<div class="tip">
💡
Es posible modificar dichas disponibilidades en el futuro, así que no te preocupes si se trata únicamente de algo provisional.

</div>

### Puntuación

Como es bien sabido, cada debate lo juzga un juez principal y (en caso de haber) uno o más jueces secundarios. El criterio para determinar quién será principal o secundario se realiza a través de la puntuación.

Como su nombre indica, sirve para "valorar" (ya que es algo profundamente subjetivo) la calidad del juez. Cuanto más alto, más probable es que dicho juez sea principal en aquellas rondas en las que vaya a estar presente, y viceversa.

<div class="tip">
💡
No existe un rango mínimo ni máximo para la puntuación, ya que se deja a libre elección del equipo de organización. Aún así, lo recomendable es que este vaya del <span style="font-weight: bold;">1 al 10</span> ó del <span style="font-weight: bold;">1 al 100</span> (pudiendo incluir números decimales si se estima oportuno).

</div>

![Juez](_images/juez.png)

<div class="caption" style="text-align:center;">Ejemplo de juez</div>

<br>

## Incompatibilidades

Además de las incompatibilidades entre clubes (ya sean actual como antiguos), es posible especificar dos tipos de incompatibilidades extra:

* Entre jueces

* Entre jueces y equipos

### Entre jueces

Para añadir este tipo de incompatibilidad, simplemente basta con seleccionar en el primer desplegable el juez en cuestión, y en el segundo la incompatibilidad en sí.

![Incompatibilidad entre jueces](_images/incompatibilidad_jueces.png)

<div class="caption">Ejemplo de incompatibilidad entre dos jueces</div>

<br>

<div class="tip">
💡
No hay límite en cuanto al número de incompatibilidades que puede tener un mismo juez.

</div>

### Entre jueces y equipos


Similar a la entidad anterior, solo que esta vez el segundo desplegable se refiere al equipo en cuestión.

![Incompatibilidad entre jueces y equipos](_images/incompatibilidad_juez_equipo.png)

<div class="caption">Ejemplo de incompatibilidad entre un juez y un equipo</div>

<br>

<div class="warning">

⚠️ Aunque en el desplegable de equipos aparezcan tanto del club actual como del club antiguo del juez, <span style="font-weight: bold;">no es necesario incluirlos</span> ya que Tabademic los tiene directamente en cuenta de manera interna (de ahí el porqué de que cada juez tenga un club asignado).


</div>

## Registro de equipos y de oradores

Hasta ahora hemos visto cómo insertar de forma manual una gran cantidad de entidades. Sin embargo, es posible permitir que los propios equipos y jueces se registren automáticamente.

### Registro de equipos

Por regla general, para saber qué equipos se van a inscribir a un torneo, se recurre a un formulario de Google. Tabademic cuenta con su propio formulario de registro de equipos (y sus respectivos participantes).

Para ello, basta con publicar el siguiente link: **https://personal-4ude2rxh.outsystemscloud.com/NombreTorneo/RegistroEquipos**, y los equipos podrán registrarse satisfactoriamente.

El mismo contiene la misma información mostrada anteriormente (nombre del equipo, club, nombre de cada orador, etc.).

La novedad reside en que al final del mismo, el equipo en su conjunto podrá registrarse en la aplicación, de tal manera que pueda (en caso de desearlo) modificar el nombre del equipo o de alguno de sus integrantes.

<div class="centered-image">

![Equipo registrándose](_images/registro_equipo.png)

</div>

<div class="caption">Equipo registrándose (versión móvil)</div>

<br>

Una vez hecho el registro, tanto el equipo en cuestión como todos sus integrantes se encontrarán insertados en la aplicación.

![Equipo registrado](_images/equipo_registrado.png)

<div class="caption">Equipo insertado con sus respectivos oradores</div>

<br>

### Registro de jueces

De igual forma, existe un formulario para que los jueces puedan registrarse. Todos los campos son similares a los expuestos anteriormente (exceptuando la puntuación, claro está).

La URL es la siguiente: **https://personal-4ude2rxh.outsystemscloud.com/NombreTorneo/RegistroJueces**

<div class="centered-image">
    
![Juez registrándose](_images/registro_juez.png)

</div>

<div class="caption">Juez registrándose (versión móvil)</div>

<br>

<div class="centered-image">

![Juez registrado](_images/juez_registrado.png)

</div>


<div class="caption">Juez insertado satisfactoriamente</div>

<br>

<div class="tip">
💡
La puntuación por defecto de cualquier juez insertado de esta forma será 1.

</div>

Una vez vistos todas las entidades, ¡ya es hora de generar los enfrentamientos!