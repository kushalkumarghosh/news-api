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

const handleLoadNews = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);
    const data = await response.json();

    const cardContainer = document.getElementById('card-container');
    data.data.forEach((news) => {
        console.log(news);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card w-96 bg-base-100">
            <figure>
                <img src=${news.image_url}>
            </figure>
            <div class="card-body">
                <h2 class="card-title">
                    Biden Pledges Nearly $3 Billion to Ukraine
                    <div class="badge badge-secondary p-5">Excellent</div>
                </h2>
                <p>
                    wednesday, August 24, 2022. Tag Cloud tags: Biden,
                    EU, EURO,
                    Europe
                </p>
                <div class="card-footer flex justify-between mt-8">
                    <div class="flex">
                        <div>
                            <div class="avartar-online">
                                <div class="w-14 rounded-full">
                                    <img src="" alt="">
                                </div>
                            </div>
                        </div>
                        <div>
                            <h6>Jimmy Dane</h6>
                            <small>2023-09-25 14:25:33</small>
                        </div>
                    </div>
                    <div class="card-detaild-btn">
                        <button
                            class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center
                        text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
                        
                        Details

                        </button>
                    </div>
                </div>
            </div>
        </div>
        `
        cardContainer.appendChild(div);



    });
};

handleCategory();