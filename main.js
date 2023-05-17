import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `

    <h1> hello </h1>

`

setupCounter(document.querySelector('#counter'))
