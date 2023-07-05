 const searchForm = document.querySelector('form');
 const searchInput = document.querySelector('#search');
 const resultList = document.querySelector('#results');

 searchForm.addEventListener('submit', (e) => {
     e.preventDefault();
     const query = input.value.trim();
     performSearch(query);
     searchRecipes();
     getDetails()
 })


function searchchRecipe(query){

    console.log("let's roll kwa search")
    fetch('https://api.api-ninjas.com/v1/recipe?query=' + query,
    {
        method: "GET",
        headers: {
            'X-Api-Key': 'GY/B0iUO22W2UZ+7/EwOGQ==xEIFBGhlUlSatdqA',
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => getDetails(data))
}    



fetchRecipe ("chicken")
function fetchRecipe(){

    console.log("let's roll kwa fetchrecipe")
    fetch('https://api.api-ninjas.com/v1/recipe?query=cheese',
    {
        method: "GET",
        headers: {
            'X-Api-Key': 'GY/B0iUO22W2UZ+7/EwOGQ==xEIFBGhlUlSatdqA',
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        data.forEach(dtele =>{
            getDetails(dtele)
        })
    })
}


function getDetails (recipe) {
    const listDetails = document.getElementById("results")
    console.log(Object.values(recipe))

    const ultag = document.createElement('ul')

    const title = document.createElement("li")
    title.innerText = recipe.title
    ultag.append(title)

    const ingredient = document.createElement("li")
    ingredient.innerText = recipe.ingredient
    ultag.append(ingredient)

    const servings = document.createElement("li")
    servings.innerText = recipe.servings
    ultag.append(servings)

    const instructions = document.createElement("li")
    instructions.innerText = recipe.instructions
    ultag.append(instructions)

    listDetails.append(ultag)
    
    
}

function DisplayRecipe(data) {
    // Get the container element where the content will be displayed
    const container = document.getElementById('results');
    
    // Clear any existing content
    container.innerHTML = '';
    
    // Loop through the data and create HTML elements for each item
    data.forEach(item => {
        
        const itemDiv = document.createElement('div');
        itemDiv.textContent = item.title;
        container.appendChild(itemDiv);
    });
    }
        
    // function DisplayRecipe(){
    //     html += 
    //       `<div>
    //       <img src ="${recipe.recipe.image}" alt="${recipe.recipe.label}">
    //        <h3>${recipe.recipe.label}</h3>
    //        <ul>
    //           ${recipe.recipe.ingredientlines.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul> 
    //           <a href="${recipe.recipe.url}" target="_blank">View Recipe</a> 
    //           </div> `

    // }
    // resultList.innerHTML = html;

// fetchRecipe()


//      recipes.forEach((recipe) => {
//         html += 
//          `<div>
//          <img src ="${recipe.recipe.image}" alt="${recipe.recipe.label}">
//           <h3>${recipe.recipe.label}</h3>
//           <ul>
//              ${recipe.recipe.ingredientlines.map(ingredient => `<li>$(ingredient)</li>`).join('')}</ul> 
//              <a href="${recipe.recipe.url}" target="_blank">View Recipe</a> 
//              </div> `
//      })
//      resultList.innerHTML = html;
 


// function searchchRecipe(query){

//     console.log("let's roll")
//     fetch('https://api.api-ninjas.com/v1/recipe?query=' + query,
//     {
//         method: "GET",
//         headers: {
//             'X-Api-Key': 'GY/B0iUO22W2UZ+7/EwOGQ==xEIFBGhlUlSatdqA',
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

// fetchRecipe("chicken")

// function DisplayRecipe(){

//     console.log("let's roll")
//     fetch('https://api.api-ninjas.com/v1/recipe?query=chicken',
//     {
//         method: "GET",
//         headers: {
//             'X-Api-Key': 'GY/B0iUO22W2UZ+7/EwOGQ==xEIFBGhlUlSatdqA',
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

// fetchRecipe()


// function getDetails (recipe) {
//     const listDetails = document.getElementById("results")
//     console.log(Object.values(recipe))
//     const title = document.createElement("li")
//     title.innerText = recipe.title
//     const ingredient = document.createElement("li")
//     ingredient.innerText = recipe.ingredient
//     const servings = document.createElement("li")
//     servings.innerText = recipe.servings
//     const instructions = document.createElement("li")
//     instructions.innerText = recipe.instructions
    
// }

