import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from './Welcome'

function AppRouter() {

    return (

        <Routes>
            <Route path="/" element={<Welcome name="Jimmy" />} />
        </Routes>
    )

}

function Container() {

    return (

        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )

}

//Reinderizzo container all'interno del file index.js

export default Container