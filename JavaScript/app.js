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
    if (event.key == "Enter") {
        var input = document.getElementById("itemInput");
        var item = input.value.trim();
        if (item != "") {
            var category = document.getElementById("category").value;
            addItem(category, item);
            console.log("Submitted item:", item);
            input.value = ""; // Clear the input box
        }
    }
}

function addItem(category, itemText) {
    var scrollBoxId = category == 'charity' ? 'charityScrollBox' : 'groupScrollBox';
    var scrollBox = document.getElementById(scrollBoxId);
    var newItem = document.createElement("div");
    newItem.classList.add("scroll-item");
    newItem.textContent = itemText;
    scrollBox.appendChild(newItem);
    // Scroll to the right to show the newly added item
    scrollBox.scrollLeft = scrollBox.scrollWidth;
}
