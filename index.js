const handleCategory = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await response.json();

    const tabContainer = document.getElementById("tab-container");
    data.data.news_category.slice(0, 3).forEach((category) => {
        // console.log(category);
        const div = document.createElement("div");
        div.innerHTML = `
        <a onclick="handleLoadNews('${category.category_id}')" class="tab">${category.category_name}</a>
        `;
        tabContainer.appendChild(div);
    });
    console.log(data.data.news_category);
};

const handleLoadNews= async (categoryId)=>{
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);
    const data = await response.json();
    console.log(data);
};

handleCategory();