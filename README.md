Analizador Sintáctico de Formularios - Legajo 53406

Este proyecto es un analizador léxico y sintáctico desarrollado con ANTLR4 y JavaScript (Node.js).
Su función es validar y procesar un lenguaje específico diseñado para la declaración de formularios y campos de datos.

Requisitos Previos

Para ejecutar este proyecto, es necesario tener instalado:
 - Java Runtime Environment (para el funcionamiento de ANTLR4).
 - Node.js.
 - Visual Studio Code con la extensión ANTLR4 instalada.

Instalación y Configuración


1. Clonar el repositorio: 
2. Navegar a la carpeta del proyecto: Por ejemplo: "D:\ParcialSSL\TareaAnalizador"
3. Abrir Visual Studio Code y crear un archivo "Formulario.g4" (cambiar el nombre del archivo al de su gramática)
4. Editar la gramática ANTLR que le han asignado.  
5. Crear un archivo llamado "input.txt", donde deberá colocar una entrada acorde a su gramática.
6. Ejecutar con F5 para generar el código en javascript.
7. Para poder ejecutar el proyecto, primero debe crear un archivo llamado "launch.json" creado en la carpeta ".vscode":
	Click en “crear un archivo launch.json” -> “Más opciones de node.json..”-> Click en la ruedita de herramientas al lado de “Terminal de depuración de javascript Formulario”
8. Crear un nuevo archivo llamado "index.js" el cuál debe obtener el código JavaScript que resuelva el enunciado.
9. Agregar al proyecto la carpeta “node_modules” que contiene la librería antlr4 para poder importarla desde index.js
10. Crear un archivo llamado "CustomFormularioVisitor.js" (cambiar el nombre del archivo al de su gramática).
11. Probar el analizador 

Ejecución

Para poner en marcha el analizador, utiliza el comando: npm start

El programa intentará leer automáticamente el contenido del archivo input.txt. Si el archivo no existe, el sistema te solicitará que ingreses el código manualmente por teclado.

Ejemplo de Uso

A continuación, se muestra un ejemplo de entrada válida que el analizador puede procesar:

formulario miRegistro {

    nombre : texto = "Bellatrix Lestrange";
    
    edad : numero = 43;
    
    activo : booleano = verdadero;
    
}



Archivos de prueba incluidos

El repositorio contiene 4 archivos de ejemplo para verificar el comportamiento del sistema:

 - Ejemplos con sintaxis válida, ya que al ejecutar se obtiene el árbol de derivación sin ningún error.

 - Ejemplos con errores para probar la detección y notificación de fallos. Se obtiene el árbol de derivación de estos ejemplos, pero con errores. 

Funcionalidades del Analizador

Al ejecutarse, el programa realiza las siguientes tareas:

 - Análisis Léxico y Sintáctico: Informa si la entrada es correcta o detalla la línea y causa de cualquier error.

 - Tabla de Tokens y Lexemas: Genera un listado con cada palabra reconocida y su categoría.

 - Árbol de Derivación: Muestra la estructura jerárquica de la gramática procesada.

 - Interpretación: Ejecuta el código como un intérprete básico para mostrar el resultado final.


--------------------------------------------------------------------------------
Autor: Milagros Lira

Materia: Sintaxis y Semántica de los Lenguajes - 2026
