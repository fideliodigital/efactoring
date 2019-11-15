

/**
 * Enviar formulario de contacto y mostrar respuesta
 */
function enviarForm()
{

   
        var nombre = $("#nombre").val(),
            email = $("#email").val(),
            telefono = $("#telefono").val();
           razon = $("#razonsocial").val();

            if (!nombre || !email || !telefono || !razon) //la función se llama sola al cargar la página con campos vacios
            {
                return false;

            }   
        //Desactiva el boton para que no se envie el form dos veces
        $("#botonEnviar").attr("disabled", true);

        $.ajax({
            type: "POST",
            url: 'https://h1iprt7feh.execute-api.us-east-1.amazonaws.com/Produccion',
            contentType: 'application/json',
            data: JSON.stringify({
                'nombre': nombre,
                'telefono': telefono,
                'email': email,
                'razon' : razon
            }),
            success: function(res)
            {
                alert("El formulario ha sido enviado exitosamente");
                return true;
            },
            error: function(res)
            {
                alert("Lo lamentamos mucho. Ha ocurrido un error");
                console.log(res);
                return true;
            }
        });

}