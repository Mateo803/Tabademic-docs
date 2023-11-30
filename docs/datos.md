<style>

.caption {

    text-align: center;
    color: gray;
}

</style>

# Datos

Estas son las entidades con las que actualmente cuenta Tabademic:

* Salas

* Rondas

* Clubes

* Equipos

* Oradores

* Capitanes

* Formadores

* Jueces

* Incompatibilidades entre jueces

* Incompatibilidades entre jueces y equipos

<div class="tip">
💡
Puedes acceder a cada uno de ellos desde la barra lateral, expandiendo <span style="font-weight: bold;">datos del torneo.</span>

</div>


![Datos](screenshots/datos.png)


## Salas 🚪

Estas representan aquellos lugares donde se realizarán los debates. Pueden albergar valores tanto numéricos (1,2,3, ...) como alfanuméricos (Aula 1, Aula 2, ...). La elección de un tipo u otro dependerá de cada torneo en cuestión.

Además, cuentan con un campo `descripción`, el cual permite (en caso de considerarse necesario, ya que no es obligatorio rellenarlo) especificar detalles de la sala en sí (ubicación, accesibilidad a la misma, etc.).

![Ejemplo de sala](screenshots/ejemplo_sala.png)

<div class="caption">Ejemplo de sala</div>

<br>

## Rondas 📅

Las cuales incluyen tanto las clasificatorias (1,2,3...) como las finales (octavos, cuartos, semis o final).

Debido a su naturaleza, la forma de insertarlas es de manera secuencial, comenzando con la ronda 1, luego la 2 y así sucesivamente hasta el número de rondas clasificatorias necesarias.

Y con respecto a las rondas finales, simplemente bastará con elegir la primera de ellas (que dependiendo del torneo pueden ser cuartos, semis, etc.) y del mismo modo que con las rondas clasificatorias, se podrá elegir la siguiente sucesivamente.


![Ejemplo de rondas](screenshots/rondas.png)

<div class="caption">Ejemplo de un torneo con 6 rondas clasificatorias y 4 rondas finales</div>

<br>

<div class="warning">

⚠️

Una vez se haya insertado la ronda final, no será posible introducir más rondas (ya que se presupone que es la última del torneo).


</div>

<div class="tip">
💡
Puedes eliminar una ronda utilizando la papelerita que se encuentra en la última columna, pero ten en cuenta que solo
podrá hacerse con la última de todas (ya que de lo contrario se perdería la secuencia que requiere la inserción de esta
entidad).

</div>