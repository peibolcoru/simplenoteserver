<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">LIST TASK SERVER</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()

</div>

---

<p align="center">API RESTful para la creación de una lista de tareas.
    <br> 
</p>

## 📝 Indice

- [📝 Indice](#-indice)
- [🧐 About ](#-about-)
- [🏗️ Estructura del proyecto ](#️-estructura-del-proyecto-)
  - [_Diseño de la API_](#diseño-de-la-api)
  - [_Endpoints_](#endpoints)
  - [_Configuración y desarrollo_](#configuración-y-desarrollo)
- [🏁 Empecemos ](#-empecemos-)
  - [_Instalacion_](#instalacion)
- [🚀 Tests  ](#-tests--)
- [🚀 Despliegue  ](#-despliegue--)
- [✋ Autor ](#-autor-)

## 🧐 About <a name = "about"></a>

API RESTful para una prueba técnica, que consiste en la creación de una lista de tareas y que puedan ser clasificadas según su estado.

## 🏗️ Estructura del proyecto <a name = "estructura"></a>
### _Diseño de la API_
  Se ha diseñado una Base de Datos Sql llamada **list** que consta de la tabla **"tasks"** en la que se incluyen los siguientes campos:
  * id 
  * statusId 
  * title 
  * text 
  * createdAt
  * modifiedAt
  
  Y ota tabla **"status"** en la que establecemos los tres estados (completed, inprogress y pending), con los siguientes campos:
  * id
  * name
  

### _Endpoints_

 Uso de la metodología CRUD para la definifición de los endpoints necesarios para "tasks":

  Creacion: POST -- http://serverdirection/tasks/new   
  Lectura de una tarea: GET --- http://serverdirection/tasks/task/:taskId  
  Lectura de todas las tareas: GET --- http://serverdirection/tasks  
  Actualizado de la tarea: PUT --- http://serverdirection/tasks/update/:taskId  
  Borrado de la tarea: DELETE --- http://serverdirection/tasks/delete/:taskId

### _Configuración y desarrollo_

Se ha utilizado node.js basado en **Express** y **mysql2** para la interacción con la base de datos.

El enrutado de los endpoint están en la carpeta "routes" usando el Router de express.  
Los controladores, en la carpeta "controllers".  
Los modelos de interacción con la Base de Datos en la carpeta "models".

## 🏁 Empecemos <a name = "empecemos"></a>

### _Instalacion_
* Crea un archivo <span style="color:red">.ENV: 
  
  Define en el las variables de entorno para la conexión con la base de datos y el puerto de de escucha de la API, siguiendo la estructura .ENV.EXAMPLE:
  
    <span style="color:red">MYSQL_HOST=  
    MYSQL_USER=  
    MYSQL_PASS=  
    MYSQL_DB=  

    <span style="color:red">PORT=

* Instala las dependencias: 

  <span style="color:red">npm i </span>

* Crea la BD.

  <span style="color:red">npm run initD
  
* Lanza la API.

  <span style="color:red">npm run dev


## 🚀 Tests <a name = "tests"></a> </span>

Para la realización de los test se ha utilizado Potsman.  
Se ha añadido un archivo json a la **_carpeta "postman"_** con archivos .json para las peticiones a la API para poder realizar la pruebas.

* en local: task.local.postman_collection.json
* en el servidor desplegado: task.postman_collection.json

## 🚀 Despliegue <a name = "despliegue"></a> </span>

  * CREACCION DE LA BD CON AWS RDS:  

    Se ha creado una BD en AWS a través del servicio de RDS utilizando el motor MySQL Community. 
  El usuario, contraseña, nombre de la base de datos y el host o punto de acceso a la mismas, serán los usados posteriormente en las variables de entorno de la API.  (Recordar que la carpeta bd contien el archivo initDb.js para la inicialización o reseteo de la BD).

  * CREACION DEL SERVIDOR CON ELASTIC BEANSTALK:  
    Se crea una aplicación configurando el entorno de la misma en la plataforma de Node.js y subiendo un archivo.zip que contienen todos lo aechivos de la API.  
    Se crean un roles atraves de AWS IAM para EC2 y posteriormente otro rol para elastic Beanstalk. 
    Finalmente se añaden las variables de entorno que permiten una comunicación segura con la base de datos creada, además del puerto de comunicaión de la API.
    + MYSQL_HOST=  
    + MYSQL_USER=  
    + MYSQL_PASS=  
    + MYSQL_DB=  
    + PORT=
  
  De esta manera quedaria configurada la instancia:
  
  API desplegada: http://mylist-env.eba-gsf7r3rx.eu-north-1.elasticbeanstalk.com/



## ✋ Autor <a name = "autor"></a>

- GITHUB: [@peibolcoru](https://github.com/peibolcoru/list_task_server) 
- LINKEDIN: https://www.linkedin.com/in/pablo-ferreno-veiga/
- YOUTUBE: [@PabloFerreno](https://www.youtube.com/channel/UCayLZMzKTYX-B-qDRldXhRg)
- API desplegada: http://mylist-env.eba-gsf7r3rx.eu-north-1.elasticbeanstalk.com/
