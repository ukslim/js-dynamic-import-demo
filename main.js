console.log('Go');
const div=document.getElementById("main");
const lang=div.getAttribute('lang');
div.innerHTML=`Trying to use module: ${lang}`;

const moduleName = document.getElementById('lang');

async function doModule() {
    const module = await import(`./modules/${lang}.js`);
    const greeting = module.greet('John');
    document.getElementById('greet').innerHTML = greeting;
};

doModule();

