let queryStrings = new URLSearchParams(window.location.search);
let parametrosGet = Object.fromEntries(queryStrings.entries());

console.log(typeof parametrosGet);  // 'object'
console.log(parametrosGet);

// 1. Si existe el parámetro tema, aplica el tema en el CSS
if ('tema' in parametrosGet) {
    let tema = parametrosGet.tema;
    document.getElementById('tema').setAttribute('href', `./css/${tema}.css`);
}

// 2. En páginas que no sean index.html, actualiza el link "atras" para mantener el tema
let url = window.location.href;
if (!url.includes('index.html') && 'tema' in parametrosGet) {
    let linkAtras = document.getElementById('atras');
    if (linkAtras) {
        linkAtras.setAttribute('href', `index.html?tema=${parametrosGet.tema}`);
    }
}

// 3. En index.html, si hay tema en parámetros, también aplica el tema (por si vuelves desde subpágina)
if (url.includes('index.html') && 'tema' in parametrosGet) {
    let tema = parametrosGet.tema;
    document.getElementById('tema').setAttribute('href', `./css/${tema}.css`);
}
