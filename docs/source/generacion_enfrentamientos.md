# Generación de enfrentamientos

## Disponibilidad de jueces

Siempre que se vayan a generar los enfrentamientos de una ronda, es muy recomendable echarle un vistazo a la **disponibilidad de los jueces** (la cual se encuentra bajo la pestaña de `Debates`).

En dicha página será posible ver qué jueces estarán disponibles en cada ronda, facilitando así el saber quiénes juzgarán la siguiente.

<div class="centered-image">

![Jueces primera ronda](_images/disponibilidades.png)

</div>

<div class="caption">

Algunos jueces de la primera ronda

</div>

<br>

<div class="tip">
💡
Es posible que haya jueces que en principio dijesen que estarían disponibles para una determinada ronda, pero que al final por diversas circunstancias no hayan podido estar presente en la misma (o viceversa).

En tales casos, existe la posibilidad de  <span class="bold">eliminar o incluir</span> dicha disponibilidad desde esta misma entidad.

</div>


## Flujo

Cuando hablamos de generar enfrentamientos, nos referimos a los de la siguiente ronda. Esto se podrá hacer únicamente si hemos insertado todos los debates de la ronda actual (exceptuando el caso en el que acabemos de empezar el torneo, donde es posible generar directamente los de la primera ronda).

De manera resumida, estos son los pasos a seguir:

1. Insertar y confirmar las actas de los debates de la ronda actual.

2. Generar los enfrentamientos de la siguiente

3. Volver al paso 1.

Esto se realizará hasta que hayamos insertado la final, en cuyo caso ya habremos terminado.

<div class="tip">
💡
La ronda inicial será 0, por lo que cuando generemos los primeros enfrentamientos, estos corresponderán a los de la primera ronda.

</div>

## Cómo se calculan

Esto dependerá de la ronda en cuestión.

### Rondas clasificatorias

La primera de forma totalmente **aleatoria**, mientras que el resto mediante el **método suizo**.

#### Método suizo y criterios de clasificación

El método suizo que aplica Tabademic consiste en ordenar a los equipos de mejor a peor y hacer que se enfrenten el primero contra el segundo, el tercero contra el cuarto...

Dicho ordenamiento (es decir, la clasificación) se calcula atendiendo a los siguientes criterios:

* Número de victorias

* Enfrentamiento directo

* Votos (en caso de no haber se pasan a los ítems)

* Ítems

<div class="tip">
💡
Si tu torneo utiliza un criterio diferente, contacta por favor con el desarrollador.

</div>


### Rondas finales

En la primera ronda final, pasan N equipos (16 si son octavos, 8 si son cuartos, etc.), enfrentándose el primer clasificado contra el último, el segundo contra el penúltimo, y así sucesivamente.

En las siguientes, se enfrentan únicamente aquellos equipos que han ganado en la ronda anterior, quedando de esta forma cada vez menos equipos en la competición, hasta acabar únicamente con dos de ellos (los cuales debatirán la final).

<div class="warning"> 

⚠️ La generación de enfrentamientos únicamente tiene en cuenta qué equipos se enfrentarán en cada debate. Las posturas de cada uno vendrán determinadas por el número de debates AF y EC que haya debatido cada equipo hasta el momento, de tal manera que exista un equilibrio en dicho sentido (exceptuando en la primera ronda y en las rondas finales, donde las posturas se determinarán  <span class="bold">al azar</span>).

</div>

## Cómo se generan


Para comenzar, simplemente habrá que darle click a `Generar enfrentamientos`, la cual se encuentra bajo la pestaña `Debates`. Una vez hecho esto, el programa comenzará a comprobar que todos los datos están debidamente insertados (apareciendo un icono de espera mientras dura el proceso).

Si todo ha salido bien, aparecerá un breve mensaje de confirmación, seguido de la tabla con los enfrentamientos correspondientes a la siguiente ronda.

![Enfrentamientos](_images/enfrentamientos.png)

<div class="caption">Enfrentamientos de la primera ronda</div>

<br>

## Tabla de enfrentamientos

Esta contiene a todos los equipos y jueces marcados como disponibles para la siguiente ronda, indicándonos un enfrentamiento por cada fila con los siguientes detalles:

* La sala donde se desarrollará el debate

* El equipo a favor

* El equipo en contra

* El juez principal

* Los jueces secundarios (en caso de haber)


Cabe aclarar que estos enfrentamientos **no tienen por qué ser definitivos**, siendo únicamente los que Tabademic ha considerado más adecuados en base a su algoritmo de generación de enfrentamientos (el cual se explicó en dellate anteriormente) y a la puntuación asignada a cada juez (siendo los N mejores principales, y el resto secundarios). Es por tanto posible modificarlos mediante **drag and drop**.

## Drag and drop

La operación de drag and drop (o arrastrar y soltar en castellano) permite realizar un intercambio entre las distintas celdas de la tabla.

A continuación se detallarán sus principales usos.

### Modificar equipos

Podemos alterar qué equipos se enfrentan entre sí (o simplemente cambiar las posturas AF y EC).

<div class="warning"> 

⚠️ Se recomienda realizar esta acción <span class="bold">únicamente en casos muy concretos</span>, ya que se podría alterar tanto el sistema suizo como la generación de rondas finales.

</div>

### Modificar jueces


Tabademic asigna por defecto los jueces de cada sala de acuerdo a los siguientes criterios:

* Puntuación, siendo los mejores los principales, y el resto secundarios.

* Restricciones (entre los que se encuentran diversos tipos de incompatibilidades), tratando que no haya ninguna.

En caso de que deseemos modificar esta configuración, basta con arrastrar y soltar el juez deseado a la celda correspondiente.

<div class="tip">
💡
Puedes añadir todos los secundarios que quieras a una determinada sala. Simplemente debes arrastrarlo hasta el borde inferior de la celda en cuestión.

</div>

Cada vez que se arrastra un juez de una celda a otra, se comprueba si existe alguna restricción tanto en la sala de origen como de destino (en caso de un desplazamiento horizontal, ambos coincidirán).

En caso de haber una, aparecerá un icono en la última columna en el que, al posar el ratón sobre el mismo, mostrará la restricción en cuestión (o una lista en caso de tratarse de más de una). 

![Ejemplo de incompatibilidad](_images/incompatibilidad.png)

<div class="caption">Ejemplo de incompatibilidad de club</div>

<br>

<br>

#### Tipos de restricciones

La siguiente lista contiene todas las restricciones que Tabademic tiene en cuenta a la hora de generar los enfrentamientos (además del sistema suizo, como ya se comentó anteriormente):

* Que no haya un juez principal en una determinada sala.

* Que el juez principal no sea el que tenga mayor puntuación en su sala.

* Que un equipo haya sido juzgado anteriormente (ya sea en la última ronda del juez o en cualquier otra)

* Incompatibilidad de club, el cual puede darse ya sea porque el juez pertenece al mismo club del equipo, o porque se ha especificado en el apartado de `Incompatibilidades entre jueces y clubes`.

* Incompatibilidad entre jueces

* Incompatibilidad entre un juez y un equipo en específico


### Eliminar jueces

En caso de que hayamos pasado por alto alguna disponibilidad, también es posible eliminarla en esta página simplemente arrastrando el juez deseado a la pepelerita que se encuentra en la esquina superior derecha, impidiendo así que juzgue ningún enfrentamiento de la ronda actual.


## Confirmar enfrentamientos

Una vez estemos conformes con el resultado deseado, simplemente debemos darle click al botón que dice "Generar enfrentamientos". Una vez hecho esto, se descargará automáticamente un fichero éxcel con los enfrentamientos que acabamos de confirmar, de tal forma que los podamos tener a mano fácilmente de cara al anuncio de los mismos.


![Éxcel con los enfrentamientos de la primera ronda](_images/excel_primera_ronda.png)

<div class="caption">Éxcel con los enfrentamientos de la primera ronda</div>

<br>

<div class="warning"> 

⚠️ Si hay al menos una restricción, el botón estará en naranja en vez de azul. Aún así, es posible generarlos, así que no te preocupes.

Puede haber casos muy concretos en los que sí o sí haya restricciones (como cuando se trata de un torneo interno en el que no es posible evitar en alguna sala incompatibilidad de club). En dicho caso, simplemente intenta modificarlos hasta que consigas los enfrentamientos que más se adecúen a tus necesidades.

</div>

<div class="tip">
💡
Si ha habido un cambio de última hora que te fuerza a modificar los enfrentamientos de una ronda, no te preocupes. Simplemente vuelve a la anterior desde el menú de configuración y genéralos de nuevo.

</div>

¡Ahora que se han generado los enfrentamientos, simplemente queda esperar a que los debates terminen para poder insertar sus respectivas actas!