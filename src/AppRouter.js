import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from './Welcome'
import ClickCounter from './ClickCounter'

function AppRouter() {

    return (

        <Routes>
            <Route path="/" element={<Welcome name="Jimmy" />} />
            <Route path="/counter" element={<ClickCounter />} />
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
