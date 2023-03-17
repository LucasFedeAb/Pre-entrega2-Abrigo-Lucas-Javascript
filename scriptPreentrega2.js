//Mensajes de Inicio
alert("Bienvenido a Q Play: Juego de preguntas y respuestas");
alert("Seleccione la categoria y comience a aprender de forma divertida");


//Arrays con objetos de preguntas y respuestas

//Geografia
const geography = [
    {
        question: "¿Cual es la capital de Francia?",
        answers: ["Brujas", "Marsella", "Paris", "Bruselas"],
        answerCorrect: 2,
    },
    {
        question: "¿Cuál es la capital de Brasil?",
        answers: ["Brasilia", "Rio de Janeiro", "Sao Paulo", "Buenos Aires"],
        answerCorrect: 0,
    }
    
];
//Deportes
const sports = [
    {
        question: "¿En que deporte se destacó Mike Tyson?",
        answers: ["Basquet ", "Boxeo", "MMA", "Ciclismo"],
        answerCorrect: 1,
    },
    {
        question: "¿Cuantos campeonatos del mundo tiene la Seleccion Argentina?",
        answers: ["1", "2", "3", "4"],
        answerCorrect: 2,
    }
];
//Historia
const history = [
    {
      question: "¿En qué año se produjo la Revolución Francesa?",
      answers: ["1789","1798","1812","1830"],
      answerCorrect: 0 
    },
    {
      question: "¿En qué año finalizó la Segunda Guerra Mundial?",
      answers: ["1940","1950","1945","1939"],
      answerCorrect: 2 
    }
];
  //Matematica
const math = [
    {
      question: "¿Cuánto es la raíz cuadrada de 144?",
      answers: ["6","8","10","12"],
      answerCorrect: 3 
    },
    {
      question: "¿Cuál es el resultado de la siguiente operación: 3 * 5 + 2?",
      answers: ["17","19","21","23"],
      answerCorrect: 0 
    },  
];

//Funcion agregar categoria con for of
const addCategory = (array,nameCategory) => {
    for (const elemento of array) {
        elemento.category = nameCategory;
    }
}
addCategory(geography,"Geografia");
addCategory(sports,"Deportes");
addCategory(history,"Historia");
addCategory(math,"Matematica");
//Creamos array todas las categorias
const allCategory = geography.concat(sports,history,math);


//Variables
let answerCategory
let answerCategorySelect = false;
let categorySelect
let answerUser
let correctOption
let score = 0;
let randomIndex
let removeIndex

// Función para obtener una pregunta aleatoria del array
const randomQuestion = (categoryArray) => {
    randomIndex = Math.floor(Math.random() * categoryArray.length);
    return categoryArray[randomIndex];
}

//Funcion Seleccionar categoria
const selectCategory = () => {
    answerCategory = parseInt(prompt(`Categorias: |1-Geografia | 2-Deportes | 3-Historia | 4-Matematica            | 5-Aleatoria`));
    while (answerCategorySelect === false) {
        checkEmpty(geography,answerCategory,1);
        checkEmpty(sports,answerCategory,2);
        checkEmpty(history,answerCategory,3);
        checkEmpty(math,answerCategory,4);
        checkEmpty(allCategory,answerCategory,5);
        updateCategory(answerCategory);
        answerCategorySelect = true;
    }
}

//Funcion actualizar categoria
const updateCategory = (answerCategory) => {
    switch (answerCategory) {
        case 1:
            categorySelect = randomQuestion(geography);
            break;
        case 2:
            categorySelect = randomQuestion(sports);
            break;
        case 3:
            categorySelect = randomQuestion(history);
            break;
        case 4:
            categorySelect = randomQuestion(math);
            break;
        case 5:
            categorySelect = randomQuestion(allCategory);
            break;
      default:
        alert("La categoria seleccionada no es correcta. Elija entre las 5 opciones la categoria numero:");
        selectCategory();
    }
}

//Funcion mostrar preguntas y respuestas
const showQuestion = (categorySelect) => {
    
    alert(`Categoria: ${categorySelect.category}.    ${categorySelect.question}`);
    answerUser = parseInt(prompt(`        | Opcion 1- ${categorySelect.answers[0]} |Opcion 2 - ${categorySelect.answers[1]} |Opcion 3 - ${categorySelect.answers[2]} |Opcion 4 - ${categorySelect.answers[3]}|`));
    correctOption = categorySelect.answerCorrect;
    while (answerUser !== 1 && answerUser !== 2 && answerUser !== 3 && answerUser !== 4) {
        alert(`La respuesta ingresada no es valida. Elija entre las cuatro opciones validas.`);
        answerUser = parseInt(prompt(`        | Opcion 1- ${categorySelect.answers[0]} |Opcion 2 - ${categorySelect.answers[1]} |Opcion 3 - ${categorySelect.answers[2]} |Opcion 4 - ${categorySelect.answers[3]}|`));
        correctOption = categorySelect.answerCorrect;
    }

    switch (categorySelect.category) {
        case "Geografia":
            removeQuest(geography,categorySelect)
            break;
        case "Deportes":
            removeQuest(sports,categorySelect)
            break;
        case "Historia":
            removeQuest(history,categorySelect)
            break;
        case "Matematica":
            removeQuest(math,categorySelect)
        break;
        
    }
    removeQuest(allCategory,categorySelect)
}


//Funcion remover preguntas
const removeQuest = (array,categorySelectUser) =>{
    removeIndex = array.findIndex((element) => element.question === categorySelectUser.question);
    array.splice(removeIndex, 1);
}

//Funcion Check array vacio
const checkEmpty = (array,answerCategory,option) =>{
    if (array.length === 0 && answerCategory === option) {
        alert("Has respondido todas las preguntas en esta categoría !!");
        answerCategorySelect = false;
        selectCategory();
    }
}

//Funcion verificar respuesta correcta y sumar puntaje
const checkAnswer = (answerUser, correctOption) => {

    if ((answerUser-1) === correctOption) {
        score++
        alert(`RESPUESTA CORRECTA :)`);
    } else {
        alert(`INCORRECTO :( .La respuesta correcta es ${categorySelect.answers[correctOption]}.`);
    }
}

//Funcion Iniciar juego
function startPlay() {
    selectCategory();
    while (answerCategorySelect) {
        showQuestion(categorySelect);
        checkAnswer(answerUser, correctOption);
        if(allCategory.length===0){
            answerCategorySelect = false;
            alert("Ha respondido todas las preguntas !! FIN DEL JUEGO");
            alert(`Su PUNTAJE FINAL es = ${score}`);
            break;
        }
        continua = parseInt(prompt(`Si desea CONTINUAR jugando INGRESE 1, de lo contrario presione CUALQUIER TECLA para FINALIZAR el juego`));
        if (continua === 1) {
            answerCategorySelect = false;
            selectCategory();
        } else {
            answerCategorySelect = false;
            alert(`GRACIAS POR VISITAR NUESTRO SITIO !! Su PUNTAJE FINAL es = ${score}`);
            break;
        }
    }
}
startPlay();