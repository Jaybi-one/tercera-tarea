$(document).ready(function () {
    $.get({
        url: 'https://reqres.in/api/users', //DIRECCIÓN SERVER
        //data: JSON, //Optativo y no pesca el cponsole.table por eso copmento el data: JSON para que funcione
        dataType: 'json', //Optativo
        success: function (respuesta) {
            console.log(respuesta);
        },
        error: function () {
            console.error("Sin Respuesta");
        }
    });

    alert('1.-Apretar el boton verde en colecciones para crear un nuevo registro' + '\n' + '2.-Para editar un termino apretar el boton verde' + '\n' + '3.-Para elimiar un termino apretar el boton rojo' + '\n' + '4.-Para ver informacion apretar boton azul');

    $.get("https://my-json-server.typicode.com/alaravena/ldp3101/usuarios",
        function (datos) { //los datos json lo guardamos en la variable datos y lo recorremos

            $.each(datos, function (index, item) { //posicion = index / item = el dato donde se almacenara el elemento json y tiene categorias con datos por ejemplo .nombre tiene el dato de juan perez, etc.

                $("#tabla").append("<tr><td>" + item.id + "</td><td>" + item.nombre +
                    "</td><td>" + item.email + "</td><td>" + "<button class='btn btn-success editar'><i class='fa-solid fa-pen-to-square'></i></button>" + "<button class='btn btn-danger eliminar'><i class='fa-solid fa-circle-minus'></i></button>" + "<button class='btn btn-primary info'><i class='fa-sharp fa-solid fa-circle-info'></i></button>" + "</td></tr>");

                // este codigo solo se ejecutara en los datos del ajax
                var eliminar = $('.eliminar');
                eliminar.click(function () {
                    $(this).parents('tr').remove(); //seleccionamos y hacemos referencia al boton que esta metido en un td con la clase .eliminar y seleccionamos a los elementos padres de este td que seria el tr
                });

                var informacion = $('.info');
                informacion.click(function () {
                    alert('Id='+item.id + '\n' +'Nombre='+ item.nombre + '\n' +'Email='+ item.email);



                });


            });


            var btn_agregar = $('.agregar');
            btn_agregar.click(function () {
                var id_td = parseInt(prompt('Ingrese ID'));
                var agregar_nombre = prompt('Ingrese Nombre');
                var agregar_email = prompt('Ingrese Email');

                $("#tabla").append("<tr><td>" + id_td + "</td><td>" + agregar_nombre +
                    "</td><td>" + agregar_email + "</td><td>" + "<button class='btn btn-success editar'><i class='fa-solid fa-pen-to-square'></i></button>" + "<button class='btn btn-danger eliminar'><i class='fa-solid fa-circle-minus'></i></button>" + "<button class='btn btn-primary info'><i class='fa-sharp fa-solid fa-circle-info'></i></button>" + "</td></tr>");


                var eliminar = $('.eliminar');
                eliminar.click(function () {

                    $(this).parents('tr').remove(); //seleccionamos y hacemos referencia al boton que esta metido en un td con la clase .eliminar y seleccionamos a los elementos padres de este td que seria el tr
                    alert('Estas seguro' + '\n' + 'No lo podras recuperar')
                });
                // al apretar el boton de editar, tendra todas estás instrucciones donde haremos nuestro registro
                var btn_editar = $('.editar');
                btn_editar.click(function () {
                    var id_td = parseInt(prompt('Editar tabla'));
                    var edit_nombre = prompt('Editar el nombre');
                    var edit_email = prompt('Editar el email');

                    $("#tabla").append("<tr><td>" + id_td + "</td><td>" + edit_nombre +
                        "</td><td>" + edit_email + "</td><td>" + "<button class='btn btn-success editar'><i class='fa-solid fa-pen-to-square'></i></button>" + "<button class='btn btn-danger eliminar'><i class='fa-solid fa-circle-minus'></i></button>" + "<button class='btn btn-primary info'><i class='fa-sharp fa-solid fa-circle-info'></i></button>" + "</td></tr>");

                    // los elementos creados son afectados con eliminar dentro de este bloque
                    var eliminar = $('.eliminar');
                    eliminar.click(function () {
                        $(this).parents('tr').remove(); //seleccionamos y hacemos referencia al boton que esta metido en un td con la clase .eliminar y seleccionamos a los elementos padres de este td que seria el tr
                    });



                });



            });

        });

});