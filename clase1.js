// este curso se enfoca en los callbacks, las promesas, el async y el await

// el reto es hacer llamados a un api y mostrar los resultados que salen de ese api


// que es el asincronismo en js:

// es una acción que no ocurre al mismo tiempo.

// js es un lenguaje asincrono y no bloqueante, que tiene un event loop como manejador de eventos, implementado en un único hilo, para interfaces de entrada y salida.


// memory heap: espacio en memoria compartido por toda la aplicación

// call stack:  donde las funciones son puestas en ejecución

// task queue: es donde se agrupan las funciones que están esperando ejecución conforme se reciba el condicional para el call back. 

// cuando el event loop confirme que la call stack está vacía, se van a ejecutar las tareas del task queue hasta que o queden tareas por ejecutar pendientes. 

// siempre es importante que las funciones sean livianas y ejecutables para que no se bloquee el event loop y se queden encoladas las tareas que hay en call stack y en el task queue.


