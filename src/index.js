import renderHome from './home';
import renderWines from './vini';
import renderIceCream from './ice-cream';
import renderBeverage from './beverage';
import renderInfo from './info';
const app = (function (){
    let menu = null;
    let target = null;

    function setTargetMenu(id)
    {
        menu = document.getElementById(id);
    }
    function setTarget(id)
    {
        target = document.getElementById(id);
    }
    const renderPage = (event) =>
    {
        const itemClicked = event.target.id;

        switch(itemClicked)
        {
            case 'home':
                renderHome();
                break;
            case 'wines':
                renderWines();
                break;
            case 'ice-cream':
                renderIceCream();
                break;
            case 'beverage':
                renderBeverage();
                break;
            case 'contact-info':
                renderInfo();
                break;
            default:
                console.log('Unexpected nav menu item selected!');
                break;
        }
        console.log(event.target);
        target.style.background = 'none';
        target.innerHTML = ``;
        target.textContent = `PAGE RENDERED!`;
        const links = [...document.querySelectorAll('a')];

       links.forEach((link) =>{
        link.classList.remove('nav-link-active');
       });
        event.target.classList.add('nav-link-active');
    }

    function setupListeners()
    {
       const links = [...document.querySelectorAll('a')];

       links.forEach((link) =>{
        link.onclick = renderPage;
       });
    }

    setupListeners();
    return {setTargetMenu, setTarget};
})();

app.setTargetMenu('menu-list');
app.setTarget('main');