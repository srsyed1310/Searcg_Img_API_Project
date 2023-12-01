let accessKey = "OQXMtjtOCc3NmwhXboUCmW1CUns-c-BrGm-bPlzOeOM";

const searchForm = document.getElementById('Search_Form');
const searchBox = document.getElementById('searchInput');
const searchResult = document.getElementById('search_Results');
const showBtn = document.getElementById('show_more_btn');

let keyword = "";
let page = 1;



async function SearchImage() {

    keyword = searchBox.value;

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=9`;

    const response = await fetch(url);

    const data = await response.json();

    // console.log(data);


    const results = data.results;

    results.map((result) => {

        const image = document.createElement('img');
        image.src = result.urls.small;

        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;

        imageLink.appendChild(image);

        searchResult.appendChild(imageLink);

    })

    showBtn.style.display = "block"
}



searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    SearchImage();
})


showBtn.addEventListener('click', () => {
    page++;

    SearchImage();
})
