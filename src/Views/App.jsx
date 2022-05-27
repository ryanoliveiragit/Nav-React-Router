import './App.css'
import './index.css'
import React from 'react'
 
import { BrowserRouter } from  'react-router-dom' // essa importação mudou
import Menu from '../Components/Layout/Menu'
import Content from '../Components/Layout/Content'

const App = props => (
    <div className="App">
        <BrowserRouter>
            <Menu />
            <Content />
        </BrowserRouter>
    </div>
)
 
export default App