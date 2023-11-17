#Proyecto Administrador de clientes - React Router DOM, Tailwind y JSON Server.

#Clase 153.- Creando el proyecto e instalando dependencias
En esta clase se realizo la creación del proyeco en vite, se realizo la instalación de tailwind css y la configuración del archivo config de tailwind,
tambien de realizo  la vinculacion del proyecto a git.

#Clase 154.- que es el Routing
En esta clase realiza una introducción a lo que es el routing en react, sus caracteristicas, proposito y funcionamiento en comparación con otros frameworks.

#Clase 155.- Creando el router y definiendo las primeras rutas
- En esta clase se realiza la configuración del paquete react-router dom y se configuran los parametros basicos para routing.

#Clase 156.- Creando Páginas y Componentes y que es outlet
En esta clase se creo el layout del sitio, ademas se crearon los componentes Index y NuevoCliente, haciendo uso de la implementación de Outlets.

#Clase 157.- Creando el layout principal.
En esta clase se agregaron modificaciones en el componente layout, se dividio en un panel lateral derecho e izquierdo, se modifico el index.html y se quito el css por defecto.

#Clase 158.-Navegar entre Componentes con Link
En esta clase se implemento un nav menu sobre el componente layout, se hizo uso del objeto link para instanciar los enlaces href.

#Clase 159.- Resaltar la Página actual
En esta clase se hizo uso del hook useLocation para detectar el link activo, se aplicaron estilos en función de si el link esta activo o no.

#Clase 160.- Creando un Loader
En esta clase se creo un loader, de forma que cuando se cargue cada sección este loader sea ejecutado, esta clase contiene un 50% de la implementación del loader.

#Clase 161.- Obtener los datos del loader con useLoaderData
En esta clase se utilizo useLoaderData para recuperar datos despues de que una pagina sea cargado.

#Clase 162.- Iterando la información sobre los clientes
En esta clase se realizo la iteración de clientes sobre el componente index,  adicional a ello se creo un custom hook cliente para separarlo internamente.

#Clase 163.- Mostrando el resto de la información
En esta clase se iteraron todos los datos del cliente como nombre, empresa, email, telefono, id y se pintaron sobre la pantalla, se agregaron los estilos para estilizarlo.

#Clase 164.- Primeros pasos creando el formulario de Clientes.
En esta clase se agrego el boton regresar mediante la implementación del hook navigate de react, se aplico estilo el boton y se preparo el espacio para agregar un futuro formulario.

#Clase 165.- Agregando el formulario 
En esta clase se agrego el formulario para dar de alta un nuevo cliente.

#Clase 166.- Creando un action para el formulario
En esta clase se agrego un action que ejecuta una funcion exportable y se hizo uso del componente Form de React-router-dom.

#Clase 167.- Leer información ingresada a un formulario con formData
En esta clase se hizo uso del objeto Formdata para almacenar los valores del formulario nuevo cliente para posteriormente mostrarlo en consola.

#Clase 168.- Añadir validación al Formulario
En esta clase se creo el componente error, y se inicio la validación para el formulario nuevoCliente.

#Clase 169.- Diferencias de useLoaderData y useActionData y más validaciones.
En esta clase se analizaron cuando se utiliza los hooks useloaderdata y useactiondata, ademas de ello se implemento la validación del campo email mediante el uso de una expresion regular.

#Clase 170.- Introducción a JSON Server.
En esta clase se analizo el funcionamiento y finalidad de una API Rest, los tipos de operaciones posibles y la instación de un servidor json que tendra como proposito servir de fuente de datos para este proyecto.

-npm install -g json-server
-json-server --watch db.json

#Clase 171.- Conectando JSON Server a nuestro proyecto
En esta clase se configuro el servidor json, se obtuvo una url para obtener los recursos, ademas se hizo uso de la configuración, importación y uso de variables de entornos.

Para inicializar el servidor json hay que escribir dentro del proyecto.
json-server --watch db.json

#Clase 172.- Crear una pantalla de error
En esta clase se implemento una pagina de error personalizado, cuando se origino un error de tipo boundary, el manejo de error se implemento en  la sección de configuración de routes de la app.

#Clase 173.- Añadir nuevos clientes a nuestro formulario y JSON Server
En esta clase se utilizo JSON server para solicitar información, tambien para agregar nuevos registros, se realizo la modificacion del componente cliente para mostrar todos los registros y despues de insertar hiciera un redirect hacia la pagina principal.