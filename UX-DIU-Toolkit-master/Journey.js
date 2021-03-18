/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Pedro",
                Photo: "man.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "quiere preparar un viaje con sus amigos en Semana Santa",
                touch1: "agenda",
                feel1: "4",
                con1: "ver cuantos días puede tener libres para organizar lugar de viaje ",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en internet ofertas para esas fechas",
                touch2: "Movil",
                feel2: "2",
                con2: "hay demasiada información y pierde mucho tiempo, no hay precios 'baratos'",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide buscar un alojamiento rural  en plasencia, donde hay procesiones y parece que hará buen tiempo",
                touch3: "móvil (el tiempo)",
                feel3: "3",
                con3: "Está preocupado por el tiempo y el desplazamiento (coche y aparcamiento)",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Los amigos le recomiendan una página para escoger alojamientos",
                touch4: "ordenador",
                feel4: "4",
                con4: "Buscar opciones en el lugar que había seleccionado, viendo precios y distancias, tiene que ver si hay aparcamiento fácil",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Se encuentra 3 opciones que encajan en sus preferencias",
                touch5: "móvil (whatsapp)",
                feel5: "2",
                con5: "Llama a sus amigos (whatsapp no responen) para ver cual es su preferencia, tienen que reservar rápido por los precios",
                ima5: "cartoon-phoning.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue reservar, otro año se encarga otro!",
                touch6: "ordenador",
                feel6: "3",
                con6: "algunos amigos no confirmaron por lo que tuvo que seleccionar reserva con posibilidad de cancelación",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
                Id: 1,
                Name: "María Jimenez",
                Photo: "Melodie.jpg",
                
                 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje a Granada para verano, en vacaciones",
                touch1: "agenda",
                feel1: "5",
                con1: "Quiere descubrir sitios bonitos y costumbres de la ciudad",
                ima1: "cartoon-teamthinking.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Mirar en una página web de turismo de Granada",
                touch2: "Servicio (agencia)",
                feel2: "4",
                con2: "Tiene que familiarizarse con la página web, explorarla y sacarle partido",
                ima2: "cartoon-deciding.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Se dispone a reservar desde la página web un hotel en el que alojarse",
                touch3: "Móvil (llamada)",
                feel3: "3",
                con3: "Está emocionada pero a la misma vez asustada",
                ima3: "cartoon-PChard.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca sitios caros y baratos en los que comer o irse de compras",
                touch4: "Móvil (webapp)",
                feel4: "2",
                con4: "No terminan de convencerle los precios y esperar encontrar algo más asequible",
                ima4: "cartoon-PCangry.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Reserva a traves de la página web",
                touch5: "Móvil (webapp)",
                feel5: "3",
                con5: "Le pide muchos datos y le resulta complejo e innecesario completar formulario",
                ima5: "cartoon-phone-sitting.png",
 
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue reservar habitación para un hotel en Granada en verano",
                touch6: "Ordenador (reserva OK)",
                feel6: "5",
                con6: "Está emocionada porque va a visitar por fin la ciudad de sus sueños",
                ima6: "cartoon-PCSurprised.png",

                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



