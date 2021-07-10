// add event listener on search button and fetch data
const search = document.getElementById('search-btn').addEventListener('click', function () {
    const input = document.getElementById('search-box');
    const inputValue = input.value;
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
        fetch(url)
        .then(res => res.json())
        .then(data => displayFoods(data));
    
})

// display searched food item
const displayFoods = foods => {
    const foodsDiv = document.getElementById('foodItems')
    const meals = foods.meals;
    for (let i = 0; i < meals.length; i++) {
        const meal = meals[i];
        const foodName = meal.strMeal;
        const foodDiv = document.createElement('div');
        foodDiv.className = 'food-items';
        const foodInfo = `
            <img onclick="displayFoodDetail('${foodName}')" src="${meal.strMealThumb}">
            <p onclick="displayFoodDetail('${foodName}')" class="food-name">${foodName}</p>
            
        `
        foodDiv.innerHTML = foodInfo;
        foodsDiv.appendChild(foodDiv);
        
        // console.log(meal);
    }
}

// display food details when click on the food
const displayFoodDetail = food => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderFoodDetail(data.meals[0]));
}

//render food details
const renderFoodDetail = foods => {
    const foodName = foods.strMeal;
    const foodImg = foods.strMealThumb;
    const foodDetailDiv = document.getElementById('food-detail');
    foodDetailDiv.innerHTML = `
        <img  src="${foodImg}">
        <h2>${foodName}</h2>
        <h3>Ingredients</h3>

        <p> <i class="fas fa-check-square"></i> ${foods.strIngredient1} ${foods.strMeasure1}</p>
        <p> <i class="fas fa-check-square"></i> ${foods.strIngredient2} ${foods.strMeasure2}</p>
        <p> <i class="fas fa-check-square"></i> ${foods.strIngredient3} ${foods.strMeasure3}</p>
        <p> <i class="fas fa-check-square"></i> ${foods.strIngredient4} ${foods.strMeasure4}</p>
        <p> <i class="fas fa-check-square"></i> ${foods.strIngredient5} ${foods.strMeasure5}</p>
        <p> <i class="fas fa-check-square"></i> ${foods.strIngredient6} ${foods.strMeasure6}</p>
        <p> <i class="fas fa-check-square"></i> ${foods.strIngredient7} ${foods.strMeasure7}</p>
        <p> <i class="fas fa-check-square"></i> ${foods.strIngredient8} ${foods.strMeasure8}</p>
        <p> <i class="fas fa-check-square"></i> ${foods.strIngredient9} ${foods.strMeasure9}</p>
        <p> <i class="fas fa-check-square"></i> ${foods.strIngredient10} ${foods.strMeasure10}</p>

    `
    foodDetailDiv.style.display = "block";
    document.getElementById('foodItems').style.display = 'none';
}