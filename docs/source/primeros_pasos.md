# Primeros pasos

## Solicitar la creación del torneo

Tabademic no require de ningún tipo de instalación, ya que toda su funcionalidad se encuentra **alojada en la web**. Sin embargo, cada torneo debe
de ser creado de antemano por el desarrollador del programa. Sus datos de contacto los puedes encontrar [aquí](desarrollador.md).

Una vez se haya creado el torneo, recibirás la URL del mismo, un usuario y una contraseña, con los que podrás comenzar a utilizar la aplicación sin ningún tipo de conocimientos técnicos.

<div class="warning"> 

⚠️ El usuario previamente mencionado tiene  <span class="bold">rol de tabulador </span>, el cual tiene acceso de lectura/escritura a absolutamente todos los datos del torneo.
Asegúrate por favor de no compartir la contraseña con nadie.  <span class="bold">En caso de una brecha de seguridad, contacta inmediatamente con el desarollador.</span>
</div>

## Iniciar sesión 🔑

Una vez le des click a la URL del torneo, aparecerá la siguiente página de login.

![Login](_images/login.png)

Simplemente debes iniciar sesión con el usuario y contraseña obtenidos en el paso anterior. Después de ello, serás redirigido al menú de configuración.

![Ejemplo de configuración](_images/menu_configuracion.png)

## Configurar el torneo ⚙️

Tabademic cuenta con diversas opciones de configuración, de tal forma que pueda adaptarse a las necesidades de cada torneo en particular.

En ella podremos realizar las siguientes configuraciones:

### Datos del torneo

* Número de rondas clasificatorias y finales

* Valor mínimo y máximo de ítems

* Criterio de desempate en el caso de que dos o más equipos tengan el mismo número de victorias

* ¿Es un torneo interno?

* ¿Se enfrentan todos los equipos entre sí? Útil en torneos pequeños, como por ejemplo en internos

* ¿Se permite el que los jueces modifiquen sus propias disponibilidades a través de sus URLs privadas?

* ¿Permitir envío de feedbacks? En caso de que esta opción esté habilitada, los equipos dispondrán también de URLs privadas para que puedan enviarlas a sus jueces principales

<div class="warning"> 

⚠️ El número de rondas no se podrá cambiar una vez se hayan generado los enfrentamientos de la primera ronda
</div>

### Menciones

De tal forma que a la hora de rellenar actas solo aparezan las seleccionadas en este apartado.

### Ronda actual

* Liberarla, permitiendo de esta manera que los jueces de dicha ronda puedan enviar sus actas. Esto es especialmente útil en la primera ronda, de tal forma que no se "filtren" los enfrentamientos. Además, es posible deshacer la liberación volviéndole a dar click.

* Volver a la ronda anterior, eliminando todas las actas de la ronda actual. Se recomienda su uso únicamente en caso de que se hayan generado los enfrentamientos de una ronda de manera incorrecta, ya que estos se limpiarán y será posible volver a generarlos sin ningún problema.

<div class="warning"> 

⚠️ Pulsar de manera continuada el botón de reiniciar ronda actual hará que se vayan eliminando una ronda tras otra del torneo. <span class="bold">Utilizar con sumo cuidado.</span>
</div>

### Plantillas de emails

Todos los jueces cuentan con una URL privada para poder enviar las actas digitales y cambiar sus disponibilidades (en caso de que dicha opción esté habilitada, claro está).

Tabademic permite el envío de estas mediante correo electrónico, contando por tanto con una plantilla para que el mensaje sea a gusto de la organización del torneo.

Su configuración es sumamente sencilla ya que basta con especificar tanto el asunto como el mensaje. Para que en este último se refleje la URL privada y el nombre de cada juez, habrá que escribir **{{URLPrivada}}** y **{{Juez}}** respectivamente.


<div class="centered-image">

![Ejemplo de plantilla de jueces](_images/plantilla_jueces.png)

</div>

<div class="caption">Ejemplo de la plantilla de los jueces</div>

<br>

<div class="tip"> 

💡 Lo anterior aplica de la misma forma para los equipos (salvo que el botón de configuración solo aparecerá en caso de que la casilla de feedbacks esté activada). Para especificar el nombre del equipo en el cuerpo bastará con usar **{{Equipo}}**
</div>

<br>


Además, es posible encontrar los siguientes dos botones:

* **Guardar cambios** -> Guarda la configuración.

* **Eliminar todos los datos del torneo** --> Muy útil en caso de que hubiéramos estado jugando un poco con la aplicación antes de insertar los datos reales.