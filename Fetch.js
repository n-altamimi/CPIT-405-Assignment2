let btn = document.getElementById("btn");
let tilte = document.getElementById("title")
let image = document.getElementById("image");


btn.addEventListener("click", function(){
    fetchAPI().catch((e) => {
        console.error(e);
    });
});


async function fetchAPI(){
    var url = "https://meme-api.com/gimme";
    var requestOption = {
        method : "GET"
    };
    const response  = await fetch(url, requestOption);
    const data = await response.json();
    console.log(data);
    process(data)
}


function process (data){
    tilte.textContent = data.title;
    image.src= data.url;

}

