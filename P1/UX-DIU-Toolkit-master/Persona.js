/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */
/*          [DIU] UX Toolkit v1.0 2019    */
/*          ver 1.1 26/Feb/2020            */
/*******************************************/

/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function ($scope) {
		$scope.Grupo_ID = "DIU3.McDiu";
		$scope.Curso = "2020/21";
		$scope.Github_ID = "https://github.com/pablomarga/DIU";

		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{


				/*************************************/
				/**** PRIMERA PERSONA          *******/
				/*** Cambiar datos             *******/
				/*************************************/


				Id: 0,
				Name: "Jose Feliciano",
				Photo: "persona1.png",
				Quote: "Yo no soy rico pero soy feliz con lo poco que tengo",
				Age: 28,
				Occupation: "albañil",
				Family: "Novia desde hace 2 años",
				Location: "Almeria",
				Character: "Le gusta viajar y descubrir mundo",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				],
				Goals: ["Conocer mundo", "Cambiar de trabajo para así tener mas tiempo libre", "Mejorar en su uso de la tecnología"],
				Frustrations: ["No haber viajado", "Le gustaría tener más tiempo libre y viajar", "No suele hacer casi nunca uso de la tecnología"],
				Bio: "Siempre he sido un chico muy amable y respetuoso, pero que nunca se le han dado bien los estudios y, por lo tanto, no tengo mucha experiencia a nivel de informática ni uso de las tecnologías, ya que es algo a lo que no le tengo mucho respeto.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 3 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 1 }

				],
				Contextos: "Lleva demasiado tiempo sin salir de su ciudad y le gustaría ver mundo",
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 5 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			},
			{

				/*************************************/
				/**** SEGUNDA PERSONA          *******/
				/*** Cambiar datos             *******/
				/*************************************/


				Id: 2,
				Name: "Maria Jiménez",
				Photo: "melodie.jpg",
				Quote: "Si quieres cambiar el mundo, cámbiate a ti mismo",
				Age: 36,
				Occupation: "Trabaja en una empresa como recepcionista",
				Family: "Padres y una hermana más pequeña de 18 años",
				Location: "Galicia, España",
				Character: "Fuerte y muy segura, con entusiasmo por la vida",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 1 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				],
				Goals: ["Ser la mejor en mi trabajo", "Llevarme bien con todo el mundo", "Disfrutar con cada cosa que haga", "Que mis padres estén orgullosos"],
				Frustrations: ["Siempre he estado interesada en las tecnologías y, aunque estudié ADE, siempre he estado en contacto con ellas. Se me da bien y tengo muchas ganas de utilizar una página web que ofrezca facilidades y, sobre todo, una interfaz agradable para el usuario y que despierte esas sensaciones que una vez tuve cuando estuve trabajando en granada."],
				Bio: "Nací en Galicia. Desde pequeña sacaba muy buenas notas y decidí irme unos meses a trabajar a Granada. Por desgracia mi contrato se acabó y no pude disfrutar de la ciudad tanto como me hubiese gustado. La ciudad me enamoró tanto que decidí volver a ir alguna vez en mi vida.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Mobile", Value: 3 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 5 }

				],
				Contextos: "Ir a Granada y volverme a enamorar de la ciudad gracias a una buena página web que me haya ayudado a descubrir esta ciudad y a conocer sus mejores lugares y costumbres",
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 1 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])