const form = document.querySelector(".form");
const searchBox = document.querySelector("#input");
const searchResult = document.querySelector(".result");
const showMore = document.querySelector(".show-more");
const accessKey = "aPa1O_cPBks4j7BgLvexS54U1_nI5r06n6u3zOHIo1U";
let keyword = "";
let page = 1;
async function search() {

    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    if (page === 1) {
        searchResult.innerHTML = "";
    }
    const results = data.results;
    results.map((res) => {
        // searchResult.innerHTML = "";
        const img = document.createElement("img");
        img.src = res.urls.small; const imgLink = document.createElement("a");
        imgLink.href = res.links.html;
        imgLink.target = "_blank";
        imgLink.appendChild(img);
        searchResult.appendChild(imgLink);

    })
    showMore.style.display = "block";

}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    search();
})
showMore.addEventListener("click", () => {
    page++;
    search();
}) 