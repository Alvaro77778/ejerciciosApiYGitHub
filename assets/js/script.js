const consultarComida = () => {

    // extraer el nombre proporcionado
    let nombreParaConsultar = document.getElementById('nombreProporcionado').value;
    
    // configuramos el endpoint a consultar concatenando el endpoint original con el nombre proporcionado
    let endpoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+nombreParaConsultar;

    fetch(endpoint)
    .then(response => response.json())
    .then(datos =>{
        let infoTituloComida = datos.meals[0].strMeal;
        let infoCategoria = datos.meals[0].strCategory;
        let infoArea = datos.meals[0].strArea;
        let infoReceta = datos.meals[0].strInstructions;
        let imgComida = datos.meals[0].strMealThumb;

        
        let tituloComida = document.getElementById("tituloDeComida");
        tituloComida.innerHTML = infoTituloComida;

        let category = document.getElementById("categoria");
        category.innerHTML = infoCategoria;

        let infarea = document.getElementById("area");
        infarea.innerHTML = infoArea;

        let infReceta = document.getElementById("receta");
        infReceta.innerHTML = infoReceta;

        let imagen = document.getElementById("imagenComida");
        imagen.src = imgComida;
        
})
}