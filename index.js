setInterval(() => {
    fetch("https://random.dog/woof.json")
.then(response => {
	console.log(response);
    return response.json();
}).then(json => {
    let dog =json;
    let dogImgUrl = dog.url;
    let dogElement = document.getElementById('dog-id');
    dogElement.src = dogImgUrl;
}).catch(err => {
	console.error(err);
});
}, 3000);