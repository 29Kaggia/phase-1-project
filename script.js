 const searchForm = document.querySelector('form');
 const searchInput = document.querySelector('#search')
 const resultList = document.querySelector('#results');

 searchForm.addEventListener('submit', (e) => {
     e.preventDefault();
    document.getElementById("results").innerHTML = ""
     const query = e.target.search.value.trim();
     
    //  performSearch(query);
    //  searchRecipes();
    //  getDetails()
    fetchRecipe(query)
    e.target.search.value = ""


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




function fetchRecipe(food){

    console.log("let's roll kwa fetchrecipe")
    fetch(`https://api.api-ninjas.com/v1/recipe?query=${food}`,
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

    

 
    const hr = document.createElement('hr')
    const ultag = document.createElement('ul')

    const title = document.createElement("li")
    title.innerText = recipe.title
    ultag.append(title)

    const ingredient = document.createElement("li")
    ingredient.innerText = recipe.ingredients
    ultag.append(ingredient)

    const servings = document.createElement("li")
    servings.innerText = recipe.servings
    ultag.append(servings)

    const instructions = document.createElement("li")
    instructions.innerText = recipe.instructions
    ultag.append(instructions)
    ultag.append(hr)

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
        
   