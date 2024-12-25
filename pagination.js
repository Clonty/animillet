// pagination.js
const products = {
    "category-a": [
        { name: "Product A1", description: "Description A1", img: "images/a1.jpg" },
        { name: "Product A2", description: "Description A2", img: "images/a2.jpg" },
        { name: "Product A3", description: "Description A3", img: "images/a3.jpg" },
        { name: "Product A4", description: "Description A4", img: "images/a4.jpg" },
    ],
    "category-b": [
        { name: "Product B1", description: "Description B1", img: "images/b1.jpg" },
        { name: "Product B2", description: "Description B2", img: "images/b2.jpg" },
        { name: "Product B3", description: "Description B3", img: "images/b3.jpg" },
        { name: "Product B4", description: "Description B4", img: "images/b4.jpg" },
    ],
    "category-c": [
        { name: "Product C1", description: "Description C1", img: "images/c1.jpg" },
        { name: "Product C2", description: "Description C2", img: "images/c2.jpg" },
        { name: "Product C3", description: "Description C3", img: "images/c3.jpg" },
        { name: "Product C4", description: "Description C4", img: "images/c4.jpg" },
    ],
    // more products...
};

function renderProducts(category, page = 1, itemsPerPage = 2) {
    const gallery = document.getElementById(`gallery-${category}`);
    const pagination = document.getElementById(`pagination-${category}`);
    const items = products[category] || []; // 确保分类存在

    if (!gallery || !pagination) return; // 检查DOM元素是否存在

    // 清空当前内容
    gallery.innerHTML = "";
    pagination.innerHTML = "";

    // 计算分页数据
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    // 渲染产品
    const pageItems = items.slice(start, end);
    pageItems.forEach((item) => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        `;
        gallery.appendChild(productCard);
    });

    // 渲染分页按钮
    if (totalPages > 1) {
        const prevButton = document.createElement("button");
        prevButton.textContent = "Previous";
        prevButton.disabled = page === 1;
        prevButton.onclick = () => renderProducts(category, page - 1, itemsPerPage);

        const nextButton = document.createElement("button");
        nextButton.textContent = "Next";
        nextButton.disabled = page === totalPages;
        nextButton.onclick = () => renderProducts(category, page + 1, itemsPerPage);

        pagination.appendChild(prevButton);
        pagination.appendChild(nextButton);
    }
}

// 初始化每个分类
Object.keys(products).forEach((category) => renderProducts(category));
