
function view()
{
    let data = JSON.parse(localStorage.getItem('posts'));
    let posts = data.reverse();
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
        show.appendChild(card);
    }


}

const show = document.querySelector('.container-show');
view()