function showPage(page) {
    var content = document.getElementById('content');
    
    // Hide all content
    var pages = content.children;
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    
    // Show the selected page
    var selectedPage = document.getElementById(page);
    if (selectedPage) {
        selectedPage.style.display = 'block';
    }
}

function submitItem(event) {
    if (event.key === "Enter") {
        var input = document.getElementById("itemInput");
        var item = input.value.trim();
        if (item !== "") {
            // Do something with the submitted item (e.g., add to a list)
            addItem(input.value)
            console.log("Submitted item:", item);
            input.value = ""; // Clear the input box
        }
    }
}

function addItem(text) {
    var scrollBox = document.getElementById("scrollBox");
    var newItem = document.createElement("div");
    newItem.classList.add("button-container");

    // Create button content
    var buttonContent = document.createElement("div");
    buttonContent.classList.add("button-content");
    
    var buttonTitle = document.createElement("h3");
    buttonTitle.classList.add("button-title");
    buttonTitle.textContent = text;

    var buttonDescription = document.createElement("p1");
    buttonDescription.classList.add("button-description");
    buttonDescription.textContent = "About Button";

    buttonContent.appendChild(buttonTitle);
    buttonContent.appendChild(buttonDescription);

    // Create money bar
    var moneyBar = document.createElement("div");
    moneyBar.classList.add("money-bar");
    
    newItem.appendChild(buttonContent);
    newItem.appendChild(moneyBar);

    newItem.addEventListener("click", incrementBar);
    scrollBox.appendChild(newItem);
    // Scroll to the right to show the newly added item
    scrollBox.scrollLeft = scrollBox.scrollWidth;
}

function incrementBar() {
    var buttonContainer = event.currentTarget;
    var moneyBar = buttonContainer.querySelector('.money-bar');

    var currentWidth = parseFloat(moneyBar.style.width) || 0; // Get current width or default to 0
    var maxWidth = 300; // Maximum width of the bar (same as button width)
    var increment = 30; // Amount to increment by

    // Calculate new width (up to maximum)
    var newWidth = Math.min(currentWidth + increment, maxWidth);

    // Update the width of the money bar
    moneyBar.style.width = newWidth + 'px';
}