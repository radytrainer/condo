

function createPost(event) 
{
    event.preventDefault();
    let post = {};
    post.title = title.value;
    post.price = price.value;

    for(let radio of statusPost) 
    {
        if (radio.checked) 
        {
            post.status = radio.value;
        }
    }

    posts.push(post);

    // save to localStorage
    savePost(posts);

    // display 
    displayPost();
}

function savePost(data) 
{
    localStorage.setItem('posts', JSON.stringify(data));
}

function displayPost()
{
    if (localStorage.length > 0)
    {
        posts = JSON.parse(localStorage.getItem('posts'));
        const cardContainer = document.querySelector('.card-container');
        cardContainer.remove();
        console.log(cardContainer)
        const newContainer = document.createElement('div');
        newContainer.className = 'card-container';
        container.appendChild(newContainer);

        for(let post of posts)
        {

            const card = document.createElement('div');
            card.classList.add('card');
        
            const title = document.createElement('p');
            const price = document.createElement('span');
        
            title.textContent = post.title;
            price.textContent = post.price;

            if (post.status === "sad") {
                card.classList.add('sad');
            }

            card.appendChild(title);
            card.appendChild(price);
            newContainer.appendChild(card);
        }
    }

}
// main

const title = document.querySelector('#title');
const price = document.querySelector('#price');
const statusPost = document.querySelectorAll('input[name="status"]');
const container = document.querySelector('.container');
let posts = [];
const btn = document.querySelector('.btn');
btn.addEventListener('click', createPost);
displayPost();