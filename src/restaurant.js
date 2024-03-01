//restaurant.js

const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //create and append image el
    const image = document.createElement('img');
    image.src = '../restaurant.jpg'
    image.height = '300';
    pageContent.appendChild(image);

    //create and append headline element
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to our restaurant';
    pageContent.appendChild(headline);

    //create and append copy element
    const copy = document.createElement('p');
    copy.textContent = 'We serve the best food everrrr'
    pageContent.appendChild(copy)
    content.appendChild(pageContent);
}

export default createRestaurantHomePage;