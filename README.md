# AnticipaTest
El proyecto está planteado tal cuál se proponía en la presentación de la prueba, con lanzar el comando "npm i" será suficiente para ponerlo en marcha.
Lo he estructurado con un módulo en el cuál pongo ambos componentes cómo individuales pero pertenecientes al módulo "apartment".
Ambos estarán en la carpeta pages, para denominar tanto a la lista, cómo al detalle, cómo páginas independientes pero del mismo módulo.
En cuanto a los servicios llamé al endpoint "https://apiint.holapisos.com/es/api/node/inmuebles" para traer todos los datos y tratarlos en el propio servicio, añadiendo el botón de mostrar más con su funcionalidad desde el propio servicio.
También he tipado el la API con una interfaz llamada "InfoApartments" para evitar problemas de tipado.
En los respectivos componentes llamo al servicio oportuno para obtener los datos.
En cuanto al html del detalle, para evitar una imagen negativa en los tiempos de espera, si entramos en cualquier apartamento y tarda en mostrar los datos, se mostrará un spinner.
Cómo extra, en el componente del detalle, en lugar de usar un método para obtener el id, guardarlo en una variable y llamar al servicio pasándole este id, he usado SwitchMap de rxjs.