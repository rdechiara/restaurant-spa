import renderHome from './home';
import renderWines from './vini';
import renderIceCream from './ice-cream';
import renderBeverage from './beverage';
import renderInfo from './info';
/*
** Keep the application state variables in an IIFE to avoid
** global scope pollution. To permit re-use of code the menu
** element and the container where the SPA is rendered must be
** specified through the setMenu and setContainer functions.
*/
const app = (function (){
    let menu = null;
    let container = null;

    /*
    ** Retrieve the element containing the menu list
    ** id: the id of the nav menu list element
    */
    function setMenu(id)
    {
        menu = document.getElementById(id);
    }
    /*
    ** Set the container where the dynamic content will be rendered
    ** id: the id of the container
    */
    function setContainer(id)
    {
       container = document.getElementById(id);
    }
    /*
    ** Remove all the container's children and highlight
    ** the selected menu item
    */
    function clearContainer()
    {
        if(container === null)
        {
            throw new Error('Container is null');
        }
        container.innerHTML = '';
    }
    /*
    ** Reset all menu links appearance to the default
    */
   const resetMenuLinksAppearence = () =>
   {
        const links =  [...menu.querySelectorAll('a')];
        links.forEach((link) =>
        {
            link.removeAttribute('class');
            link.classList.add('nav-link');
        });
   }
   /*
   ** Set the clicked link as active changing its style
   ** targertLink: the link element that must be set as active
   */
   const setMenuLinkActive = (targetLink) =>
   {
        targetLink.removeAttribute('class');
        targetLink.classList.add('nav-link-active');
   }
    /*
    ** When the user clicks on a menu item it 
    ** determines which page must be rendered and 
    ** call the appropriate function after removing
    ** all the container children
    */
    const renderPage = (event) =>
    {
        const itemClicked = event.target.id;

        clearContainer();
        resetMenuLinksAppearence();
        setMenuLinkActive(event.target);

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
        
    }

    function setupListeners()
    {
       const links = [...document.querySelectorAll('a')];

       links.forEach((link) =>{
        link.onclick = renderPage;
       });
    }

    setupListeners();
    return {setMenu, setContainer};
})();

app.setMenu('menu-list');
app.setContainer('main');