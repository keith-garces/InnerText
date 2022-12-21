let btnText = document.querySelector('#btnText');
let btnHtml = document.querySelector('#btnHtml');
let content = document.querySelector('.content');


let myString = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel luctus massa, non <strong>posuere lacus. Cras suscipit </strong>faucibus sapien, id mollis lectus egestas et. Vivamus gravida, sapien ut consectetur fringilla, dui tortor volutpat nulla, vitae mattis velit elit laoreet odio. Ut quis sodales dolor. Aliquam vel tellus lacus.</p> Maecenas vulputate ullamcorper commodo. Donec ac justo </p> 
<img src="https://source.unsplash.com/random/400x400" />
`; 


btnText.addEventListener('click', () => {
    content.innerText = myString;
});

btnHtml.addEventListener('click', () => {
    content.innerHTML = myString;
})