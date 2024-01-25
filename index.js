// Food constructor
function Food(pName, pCalories) {
    this.name = pName;
    this.calories = parseInt(pCalories);
}

// Array to store food items
const foodArray = [];

// Function to add food to the array
function addFood() {
    const foodName = document.getElementById("foodName").value;
    const calories = document.getElementById("calories").value;

    if (foodName && calories) {
        const newFood = new Food(foodName, calories);
        foodArray.push(newFood);

        // Update display in the console
        console.log("Updated Food List:", foodArray);

        // Update display on the screen
        //displayFoodList();
        displayTotalCalories();
    }
}



// Function to display total calories on the screen
function displayTotalCalories() {
    const totalCaloriesDiv = document.getElementById("totalCalories");
    const totalCalories = foodArray.reduce((total, food) => total + food.calories, 0);
    totalCaloriesDiv.textContent = `Total Calories: ${totalCalories}`;
}

