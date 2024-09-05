# Primeros pasos

## Solicitar la creación del torneo

Tabademic no require de ningún tipo de instalación, ya que toda su funcionalidad se encuentra **alojada en la web**. Sin embargo, dado que cada torneo requiere de su propia base de datos, es necesario que el desarrollador la cree primero. Sus datos de contacto los puedes encontrar [aquí](desarrollador.md).

Una vez esté todo listo, recibirás un usuario y una contraseña con los que podrás comenzar a utilizar la aplicación sin ningún tipo de conocimientos técnicos.

<div class="warning"> 

⚠️ Con dichas credenciales tendrás <span class="bold">acceso de lectura/escritura a absolutamente todos los datos del torneo. </span>
Asegúrate por favor de no compartir la contraseña con nadie.  <span class="bold">En caso de una brecha de seguridad, contacta inmediatamente con el desarollador.</span>
</div>

## Iniciar sesión 🔑

Para ello accede a [la página principal](https://tabademic.com) e introduce el usuario y contraseña obtenidos en el paso anterior.

![Login](_images/login.png)

Si todo ha salido bien, saldrás al menú de configuración.


![Ejemplo de configuración](_images/menu_configuracion.png)

## Configurar el torneo ⚙️

Tabademic cuenta con diversas opciones de configuración, de tal forma que pueda adaptarse a las necesidades de cada torneo en particular.

En ella podremos realizar las siguientes configuraciones:

### Datos del torneo

* Número de rondas clasificatorias y finales

* Valor mínimo y máximo de ítems (además de su formato)

* Criterio de desempate en el caso de que dos o más equipos tengan el mismo número de victorias

* ¿Es un torneo interno? Esto es útil ya que no se tendrán en cuenta incompatibilidades de club al generar los enfrentamientos.

* ¿Es obligatorio poner mención a todos los oradores durante un debate, o por el contrario pueden dejarse en blanco a voluntad de los jueces?

<div class="warning"> 

⚠️ El número de rondas no se podrá cambiar una vez se hayan generado los enfrentamientos de la primera ronda
</div>


### Jueces

* ¿Los jueces se asignarán de manera automática o de forma manual?

* ¿Cada juez tendrá una URL privada para poder insertar sus actas? Si esta opción esta desactivada, el tabulador deberá encargarse de enviar todas las actas por su cuenta.


### Enfrentamientos

* ¿Formato suizo o se enfrentarán todos los equipos entre sí? Esta última opción es muy útil en torneos pequeños, como por ejemplo en internos

* En caso de ser formato suizo, ¿la primera ronda será aleatoria o dependerá del nivel estimado de los equipos?
En caso de que se seleccione esta opción, se le podrá asignar una puntuación a cada equipo por la cual se generará dicha primera ronda (el resto seguirá por formato suizo).


### Posturas

* ¿Estas serán por sorteo o calculadas automáticamente por Tabademic? En el apartado de generación de enfrentamientos se profundizará más acerca de dicho cálculo.

### Ronda actual

En la cual es posible:

* **Liberarla**, permitiendo de esta manera que los jueces de dicha ronda puedan enviar sus actas. Esto es especialmente útil en la primera ronda, de tal forma que no se "filtren" los enfrentamientos. Además, es posible deshacer la liberación volviéndole a dar click.

<div class="tip">
💡
Esta opción solo estará disponible si los jueces tienen URLs privadas

</div>

* **Volver a la ronda anterior**, eliminando todas las actas de la ronda actual. Se recomienda su uso únicamente en caso de que se hayan generado los enfrentamientos de una ronda de manera incorrecta, ya que será posible volver a modificarlos desde el punto donde se dejó (**siempre y cuando dichos enfrentamientos no se hayan borrado con anterioridad**) y volver a generar la ronda sin ningún problema.

<div class="warning"> 

⚠️ Seleccionar de manera continuada dicha opción hará que se vayan eliminando una ronda tras otra del torneo. <span class="bold">Utilizar con sumo cuidado, ya que si una ronda es eliminada esta no se podrá volver a recuperar.</span>
</div>

### Plantillas de emails

En caso de que los jueces de nuestro torneo cuenten con URLs privadas, Tabademic permite el envío de estas mediante correo electrónico, contando por tanto con una plantilla para que el mensaje sea a gusto de la organización del torneo.

Su configuración es sumamente sencilla ya que basta con especificar tanto el asunto como el mensaje. Para que en este último se refleje la URL privada y el nombre de cada juez, habrá que escribir **{{URLPrivada}}** y **{{Juez}}** respectivamente.


<div class="centered-image">

![Ejemplo de plantilla de jueces](_images/plantilla_jueces.png)

</div>

<div class="caption">Ejemplo de la plantilla de los jueces</div>

<br>

<br>


Además, es posible encontrar los siguientes dos botones:

* **Guardar cambios** -> Guarda la configuración.


<br>

* **Limpiar enfrentamientos guardados** -> Cada vez que se generen los enfrentamientos de una ronda, estos se guardarán de forma automática (para en caso de que tengamos que corregir algo, podamos reiniciarla y simplemente hacer los cambios oportunos). Al darle click y volver a generar los enfrentamientos de la ronda actual, Tabademic se encargará de los enfrentamientos (en función de cómo hayamos configurado el torneo, claro está).

<br>

* **Eliminar todos los datos del torneo** -> Muy útil en caso de que hubiéramos estado jugando un poco con la aplicación antes de insertar los datos reales.