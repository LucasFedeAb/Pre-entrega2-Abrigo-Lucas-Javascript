//Mensajes de Inicio
alert("Bienvenido a Q Play: Juego de preguntas y respuestas");
alert("Seleccione la categoria y comience a aprender de forma divertida");

//Creamos class Juego de Preguntas
class QuestionGame {
    constructor(categoria, pregunta, respuesta1, respuesta2, respuestaCorrecta) {
        this.categoria = categoria
        this.pregunta = pregunta
        this.respuesta1 = respuesta1
        this.respuesta2 = respuesta2
        this.respuestaCorrecta = respuestaCorrecta
    }
}

//Asignamos valores a cada categoria de juego almacenado en variables constantes
const geografia = new QuestionGame("Geografia", "Cual es la capital de Francia?", "Paris", "Marsella", 1);
const deportes = new QuestionGame("Deportes", "En que deporte se destacó Mike Tyson?", "MMA", "Boxeo", 2);
const historia = new QuestionGame("Historia", "En que año fue la segunda guerra mundial?", "1928", "1939", 2);
const matematica = new QuestionGame("Matematica", "Cual es la raiz cuadrada de 144?", "12", "14", 1);

//Variables
let answerCategory
let answerCategorySelect = false;
let categorySelect
let answerUser
let answerCorrect
let score = 0;


//Funcion Seleccionar categoria
const selectCategory = () => {
    answerCategory = parseInt(prompt(`Categorias: |1-Geografia | 2-Deportes | 3-Historia | 4-Matematica `));
    console.log(answerCategory)
    while (answerCategorySelect === false) {
      updateCategory(answerCategory);
      answerCategorySelect = true;
    }
}

//Funcion actualizar categoria
const updateCategory = (answerCategory) => {
    switch (answerCategory) {
      case 1:
        categorySelect=geografia;
        break;
      case 2:
        categorySelect = deportes;
        break;
      case 3:
        categorySelect = historia;
        break;
      case 4:
        categorySelect = matematica;
        break;
      default:
        alert("La categoria seleccionada no es correcta. Elija entre las 4 opciones la categoria numero:");
        answerCategory = parseInt(prompt("1- Geografia | 2-Deportes | 3-Historia | 4-Matematica"));
        updateCategory(answerCategory);
        break;
    }
}

//Funcion mostrar preguntas y respuestas
const showQuestion = (categorySelect) => {
    alert(`Categoria: ${categorySelect.categoria}. ¿ ${categorySelect.pregunta}`);
    answerUser = parseInt(prompt(`        | Opcion 1- ${categorySelect.respuesta1} |             |Opcion 2 - ${categorySelect.respuesta2} |`))
    answerCorrect = categorySelect.respuestaCorrecta;
    while (answerUser !== 1 && answerUser !== 2) {
        alert(`La respuesta ingresada no es valida. Elija entre las dos opciones validas.`)
        answerUser = parseInt(prompt(`        | Opcion 1- ${categorySelect.respuesta1} |             |Opcion 2 - ${categorySelect.respuesta2} |`))
        answerCorrect = categorySelect.respuestaCorrecta;
    }
}

//Funcion verificar respuesta correcta
const checkAnswer = (answerUser, answerCorrect) => {

    if (answerUser === answerCorrect) {
        score++
        alert(`Respuesta correcta :)`);
    } else {
        alert(`Respuesta Incorrecta :(`);
    }
}

//Funcion Iniciar juego
function startPlay() {
    selectCategory();
    while (answerCategorySelect) {
        showQuestion(categorySelect);
        checkAnswer(answerUser, answerCorrect);
        continua = parseInt(prompt(`Si desea continuar jugando ingrese 1, de lo contario presione cualquier tecla para finalizar el juego`));
        if (continua === 1) {
            answerCategorySelect = false;
            selectCategory();
        } else {
            answerCategorySelect = false;
            alert(`Su puntaje final es = ${score}`);
        }
    }
}
startPlay();
