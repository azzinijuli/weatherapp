# WeatherApp Challenge - Desafío técnico de aplicación del clima || Frontend 

## Información general

El proyecto fue creado con create-react-app, cumpliendo así con lo solicitado al inicio de la consigna: desarrollar una app full client-side.

Al iniciar el proyecto se pueden ver cinco secciones principales: lugar y fecha, temperatura actual, estado del tiempo actual y el pronóstico extendido para los próximos cinco días. La quinta sección, ubicada a la derecha, permite al usuario elegir entre otras cinco ciudades diferentes.

Los datos que se cargan en un principio para cada sección corresponden a la Ciudad de Buenos Aires, mediante una función fetch() que solicita la información específicamente para esta ciudad. Todos estos datos son traídos desde la API, incluídos los íconos, que la misma API incluye en la respuesta del JSON en forma de string. Este string es un código alfanumérico y se encuentra concatenado a una URL que nos permite acceder a la imagen correspondiente.

Como ya se mencionó anteriormente, en la quinta sección el usuario puede elegir en un menú de cinco ciudades distintas. Estas ciudades se encuentran en un archivo JSON, el cual es un array de objetos. Dicho JSON es importado en la página principal y le pasa la data mediante props al componente "Dropdown". En un principio la idea era hacer un menú desplegable, pero finalmente opté por una lista, ya que de esta manera me resultaba más sencillo acceder al valor del string. Mediante una función onClick() se lee qué ciudad ha clickeado el usuario y, con un callback, se envía esta información a una URL distinta a la anterior. De esta manera obtenemos una URL dinámica, que fetchea los datos según la ciudad clickeada.

En conclusión, entonces, hay dos URL para el fetch: una estática para la Ciudad de Buenos Aires y una dinámica para elegir entre diversas ciudades.

Asimismo, hay una función fetch para el estado del tiempo actual y otra para el pronóstico de los próximos cinco días. Ya que el pronóstico devolvía un array de cuarenta objetos (porque retorna el estado del tiempo cada 3 horas), opté por reducirlo mediante una función que filtre aquellos cuya fecha y hora terminaran en "15:00:00". De esta manera obtengo un array de sólo cinco objetos, uno por cada día.

Para los estilos uticilé SASS, que me permite hacer el código más legible.

Con SASS incluí también una pequeña animación al principio, mientras la página espera los datos del fetch para mostrarlos en la pantalla. Es posible que no llegue a visualizarse ya que tarda microsegundos, pero considero importante que el usuario vea que la página le muestra algo, aunque sea una sencilla animación de carga, mientras llegan los datos.

## Detalles importantes 
Ya que la API solicita una key, por cuestiones de seguridad guardé la misma en un archivo .env, y éste fue incluído en el .gitignore.
En caso de querer montar el proyecto, es necesario crear un archivo .env que contenga lo siguiente:
REACT_APP_API_KEY=16ba8c1e1a7a57c8d5553241c75b77af

## Detalles menores 
El JSON fue pensado en un principio para que cada ciudad sea un objeto que contenga las propiedades "name" y "background". La idea original era que al hacer click en cada ciudad el fondo cambie dinámicamente, devolviendo un background acorde a lo seleccionado. Sin embargo, por cuestiones de tiempo, opté por fijar un fondo estático.
