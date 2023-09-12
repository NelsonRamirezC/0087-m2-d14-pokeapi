$(()=> {

    /* CAPTURAR EL FORMULARIO */
    const formFindPokemon = $("#formFindPokemon");
    
    //ENCIENDO EVENTO SUBMIT DEL FORMULARIO
    formFindPokemon.on("submit", function(event){
        //QUITAMOS EL EVENTO POR DEFECTO DEL FORMULARIO (ACTUALIZAR PÁGINA)
        event.preventDefault();

        /* CAPTURAR ID O NOMBRE DEL POKEMON DESDE EL INPUT DEL FORMULARIO */
        let idOrName = $("#findPokemon").val();

        let rutaAPI = "https://pokeapi.co/api/v2/pokemon/"+idOrName;
        
        fetch(rutaAPI)
        .then(function(response){
            if(response.status == 404){
                /* SI EL SERVIDOR NOS RESPONDE CON UN 404 (NO ENCONTRADO)
                GENERAMOS UNA EXCEPCIÓN / ERROR QUE SE CAPTURA EN EL CATCH*/
                throw new Error("Pokémon no encontrado.");
            }
            //PERMITE RETORNAR LA DATA QUE DEVUELVE LA API (INFO DE POKÉMONES)
            return response.json();
        })
        .then(function(data){
            console.log(data);
        })
        .catch(function(error){
            //CAPTURAMOS ERROR Y LO MOSTRAMOS EN UNA VENTANA EMERGENTE
            console.log(error);
            alert(error);
        })
        



    })



})