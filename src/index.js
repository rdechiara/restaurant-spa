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