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
		$scope.Grupo_ID ="DIU3.McDiu";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/pablomarga/DIU";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Jose Feliciano",
                Photo: "persona1.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Habla con un amigo para ver si querría hacer un viaje a Granada",
                touch1: "amigo",
                feel1: "4",
                con1: "ver cuantos días puede tener libres para organizar lugar de viaje ",
                ima1: "cartoon-shaking.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en foros para ver como puede ir",
                touch2: "Ordenador",
                feel2: "3",
                con2: "hay demasiada información y se empieza saturar porque no es muy afín a las tecnologías",
                ima2: "cartoon-PChappy.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide buscar transporte público para moverse por Granada",
                touch3: "móvil",
                feel3: "1",
                con3: "No termina de encontrar una combinación que le convenza",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Encuentra una página que te genera las combinaciones según el origen y el destino",
                touch4: "ordenador",
                feel4: "2",
                con4: "No sabe muy bien que es lo más importante que visitar",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Decide llamar por teléfono a una agencia de viajes para que le ayude",
                touch5: "móvil",
                feel5: "3",
                con5: "Llama a un amigo suyo para ver si quiere unirse pero no le contesta",
                ima5: "cartoon-phoning.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue organizar su viaje, solo que da que llegue el viernes",
                touch6: "ordenador",
                feel6: "4",
                con6: "Ve que puede que llueva pero no le importa, lo importante es viajar",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
                Id: 1,
                Name: "María Jimenez",
                Photo: "melodie.jpg",
                
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



