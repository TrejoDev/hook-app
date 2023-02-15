import React from 'react'
import ReactDOM from 'react-dom/client'
//import { CounterApp } from './01-useState/CounterApp'
//import { CounterWhitCustomHook } from './01-useState/CounterWhitCustomHook'
//import { FormWhitCustomHook } from './02-useEffect/FormWhitCustomHook'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { HooksApp } from './HooksApp'
import { MultipleCustomHook } from './03-examples/MultipleCustomHook'



import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <MultipleCustomHook />
 // </React.StrictMode>,
)
