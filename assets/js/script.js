// Items data
const items = [
    { name: 'Spend bill gate\'s money', linkItem: './assets/Pages/SpendBillGatesMoney/index.html', imgSrc: './assets/img/items-pics/spend.svg' },
];

// Dynamically create item cards
const itemsContainer = document.getElementById('items-container');

// Function to create a new item
items.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    itemDiv.innerHTML = `
        <div class="item-wrapper" style="background: none;">
            <a href="${item.linkItem}" class="link">
                <img src="${item.imgSrc}" alt="${item.name}" loading="lazy" class="link-img" style="opacity: 1;">
            </a>
        </div>
    `;

    itemsContainer.appendChild(itemDiv);
});
