import './sass/index.sass'

console.log('Сборка работает!')

const root = document.querySelector('#root')
const h1 = document.createElement('h1')
h1.textContent = 'Webpack Build'
h1.style.textAlign = 'center'
root.append(h1)
