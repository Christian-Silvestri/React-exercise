import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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

        <Router>
            <AppRouter />
        </Router>
    )

}

export default Container