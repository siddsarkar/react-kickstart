import React from 'react'
import './app.scss'
import logo from '../assets/webpack.svg'

export default function App() {
    return (
        <div className="app">
            <div className="app-header">
                <img src={logo} alt="webpack_logo" />
            </div>

            <br />
            <h1>Features:</h1>
            <br />

            <ul>
                <li>React Fast-Refresh</li>
                <li>Fonts (loads with css)</li>
                <li>Files (assets)</li>
                <li>CSS/SCSS Support</li>
                <li>ES Lint | Prettier | Airbnb</li>
            </ul>
        </div>
    )
}
