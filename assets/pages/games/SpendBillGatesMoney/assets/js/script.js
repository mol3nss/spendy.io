// Starting money value
let totalMoney = 100000000000;

// Items data
const items = [
    { name: 'Big Mac', cost: 2, imgSrc: './img/items-pics/big-mac.jpg' },
    { name: 'Flip Flops', cost: 3, imgSrc: './img/items-pics/flip-flops.jpg' },
    { name: 'Coca-Cola Pack', cost: 5, imgSrc: './img/items-pics/coca-cola-pack.jpg' },
    { name: 'Movie Ticket', cost: 12, imgSrc: './img/items-pics/movie-ticket.jpg' },
    { name: 'Book', cost: 15, imgSrc: './img/items-pics/book.jpg' },
    { name: 'Lobster Dinner', cost: 45, imgSrc: './img/items-pics/lobster-dinner.jpg' },
    { name: 'Video Game', cost: 60, imgSrc: './img/items-pics/video-game.jpg' },
    { name: 'Amazon Echo', cost: 99, imgSrc: './img/items-pics/amazon-echo.jpg' },
    { name: 'Year of Netflix', cost: 100, imgSrc: './img/items-pics/year-of-netflix.jpg' },
    { name: 'Air Jordans', cost: 125, imgSrc: './img/items-pics/air-jordans.jpg' },
    { name: 'Airpods', cost: 199, imgSrc: './img/items-pics/airpods.jpg' },
    { name: 'Gaming Console', cost: 299, imgSrc: './img/items-pics/gaming-console.jpg' },
    { name: 'Drone', cost: 350, imgSrc: './img/items-pics/drone.jpg' },
    { name: 'Smartphone', cost: 699, imgSrc: './img/items-pics/smartphone.jpg' },
    { name: 'Bike', cost: 800, imgSrc: './img/items-pics/bike.jpg' },
    { name: 'Kitten', cost: 1500, imgSrc: './img/items-pics/kitten.jpg' },
    { name: 'Puppy', cost: 1500, imgSrc: './img/items-pics/puppy.jpg' },
    { name: 'Auto Rickshaw', cost: 2300, imgSrc: './img/items-pics/auto-rickshaw.jpg' },
    { name: 'Horse', cost: 2500, imgSrc: './img/items-pics/horse.jpg' },
    { name: 'Acre of Farmland', cost: 3000, imgSrc: './img/items-pics/acre-of-farmland.jpg' },
    { name: 'Designer Handbag', cost: 5500, imgSrc: './img/items-pics/designer-handbag.jpg' },
    { name: 'Hot Tub', cost: 6000, imgSrc: './img/items-pics/hot-tub.jpg' },
    { name: 'Luxury Wine', cost: 7000, imgSrc: './img/items-pics/luxury-wine.jpg' },
    { name: 'Diamond Ring', cost: 10000, imgSrc: './img/items-pics/diamond-ring.jpg' },
    { name: 'Jet Ski', cost: 12000, imgSrc: './img/items-pics/jet-ski.jpg' },
    { name: 'Rolex', cost: 15000, imgSrc: './img/items-pics/rolex.jpg' },
    { name: 'Ford F-150', cost: 30000, imgSrc: './img/items-pics/ford-f-150.jpg' },
    { name: 'Tesla', cost: 75000, imgSrc: './img/items-pics/tesla.jpg' },
    { name: 'Monster Truck', cost: 150000, imgSrc: './img/items-pics/monster-truck.jpg' },
    { name: 'Ferrari', cost: 250000, imgSrc: './img/items-pics/ferrari.jpg' },
    { name: 'Single Family Home', cost: 300000, imgSrc: './img/items-pics/single-family-home.jpg' },
    { name: 'Gold Bar', cost: 700000, imgSrc: './img/items-pics/gold-bar.jpg' },
    { name: 'McDonalds Franchise', cost: 1500000, imgSrc: './img/items-pics/mcdonalds-franchise.jpg' },
    { name: 'Superbowl Ad', cost: 5250000, imgSrc: './img/items-pics/superbowl-ad.jpg' },
    { name: 'Yacht', cost: 7500000, imgSrc: './img/items-pics/yacht.jpg' },
    { name: 'M1 Abrams', cost: 8000000, imgSrc: './img/items-pics/m1-abrams.jpg' },
    { name: 'Formula 1 Car', cost: 15000000, imgSrc: './img/items-pics/formula-1-car.jpg' },
    { name: 'Apache Helicopter', cost: 31000000, imgSrc: './img/items-pics/apache-helicopter.jpg' },
    { name: 'Mansion', cost: 45000000, imgSrc: './img/items-pics/mansion.jpg' },
    { name: 'Make a Movie', cost: 100000000, imgSrc: './img/items-pics/make-a-movie.jpg' },
    { name: 'Boeing 747', cost: 148000000, imgSrc: './img/items-pics/boeing-747.jpg' },
    { name: 'Mona Lisa', cost: 780000000, imgSrc: './img/items-pics/mona-lisa.jpg' },
    { name: 'Skyscraper', cost: 850000000, imgSrc: './img/items-pics/skyscraper.jpg' },
    { name: 'Titanic', cost: 930000000, imgSrc: './img/items-pics/titanic.jpg' },
    { name: 'NBA Team', cost: 2120000000, imgSrc: './img/items-pics/nba-team.jpg' },
];

// Dynamically create item cards
const itemsContainer = document.getElementById('items-container');
const moneyBox = document.getElementById('money-box');

// Function to smoothly change the money value
function animateMoneyChange(start, end, duration) {
    const range = end - start;
    const startTime = performance.now();

    function step(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1); // Ensure progress doesn't exceed 1
        const value = Math.floor(start + range * progress);
        moneyBox.textContent = `$${value.toLocaleString()}`;

        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}

// Function to update the money value
function updateMoneyDisplay(newTotalMoney) {
    animateMoneyChange(totalMoney, newTotalMoney, 500); // Smooth transition in 500ms
    totalMoney = newTotalMoney; // Update totalMoney after the animation completes
}

// Function to handle manual input change
function handleInputChange(inputField, itemCost, sellButton) {
    const newValue = parseInt(inputField.value) || 0;
    const oldValue = parseInt(inputField.getAttribute('data-old-value')) || 0;

    // Calculate the difference in value
    const difference = newValue - oldValue;

    // Adjust money based on whether the value increased or decreased
    const totalCostDifference = difference * itemCost;
    const newTotalMoney = totalMoney - totalCostDifference;

    if (newTotalMoney >= 0) {
        // Update the money display if valid
        updateMoneyDisplay(newTotalMoney);
        inputField.setAttribute('data-old-value', newValue); // Save the new value for future changes

        // Enable or disable the sell button based on the value
        sellButton.disabled = newValue <= 0;
    } else {
        // If not enough money, revert to the old value
        inputField.value = oldValue;
    }
}

// Function to create a new item
items.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    // Format the item cost with commas (using toLocaleString)
    const formattedCost = item.cost.toLocaleString();

    itemDiv.innerHTML = `
        <div class="item-wrapper">
            <img src="${item.imgSrc}" alt="${item.name}">
            <div class="item-name">${item.name}</div>
            <div class="item-cost">$${formattedCost}</div>
            <div class="item-controls">
                <button disabled class="item-sell">Sell</button>
                <input type="number" value="0" min="0" class="item-input" data-old-value="0">
                <button class="item-buy">Buy</button>
            </div>
        </div>
    `;

    // Add event listeners for Buy and Sell buttons
    const buyButton = itemDiv.querySelector('.item-buy');
    const sellButton = itemDiv.querySelector('.item-sell');
    const inputField = itemDiv.querySelector('.item-input');

    // Buy button event
    buyButton.addEventListener('click', () => {
        const currentValue = parseInt(inputField.value);
        if (totalMoney >= item.cost) {
            inputField.value = currentValue + 1;
            handleInputChange(inputField, item.cost, sellButton);
        }
    });

    // Sell button event
    sellButton.addEventListener('click', () => {
        const currentValue = parseInt(inputField.value);
        if (currentValue > 0) {
            inputField.value = currentValue - 1;
            handleInputChange(inputField, item.cost, sellButton);
        }
    });

    // Listen for direct input changes
    inputField.addEventListener('input', () => {
        handleInputChange(inputField, item.cost, sellButton);
    });

    itemsContainer.appendChild(itemDiv);
});

// Initialize the money display
moneyBox.textContent = `$${totalMoney.toLocaleString()}`;
