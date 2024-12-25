// 在页面加载时展示每个分类的产品
function loadCategoryProducts() {
    displayCategoryProducts("category-a", "gallery-category-a");
    displayCategoryProducts("category-b", "gallery-category-b");
    displayCategoryProducts("category-c", "gallery-category-c");
}

// 调用函数
loadCategoryProducts();

// Display products for each category
displayProducts("category-a", "gallery-category-a");
displayProducts("category-b", "gallery-category-b");
displayProducts("category-c", "gallery-category-c");


// Function to update pagination buttons
function updatePagination() {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
}

// Function to change pages (called on Previous/Next button click)
function changePage(direction) {
    // Fade out the gallery content first
    const gallery = document.getElementById("product-gallery");
    gallery.style.opacity = 0;

    // Wait for the fade-out effect to complete before changing the page
    setTimeout(() => {
        currentPage += direction;
        displayProducts();

        // Fade in the new content
        gallery.style.opacity = 1;
    }, 500); // Wait for the fade-out duration (500ms in this case)
}

document.addEventListener("DOMContentLoaded", () => {
    Object.keys(products).forEach((category) => {
        renderProducts(category); // 确保调用的函数存在于pagination.js
    });
});
