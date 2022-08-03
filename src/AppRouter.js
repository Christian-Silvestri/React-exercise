import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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

        <Router>
            <AppRouter />
        </Router>
    )

}

export default Container