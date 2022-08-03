import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {useParams} from 'react-router-dom';
import Welcome from './Welcome'
import ClickCounter from './ClickCounter'
import GithubUser from './GitHubUser'

function ShowGithubUser() {
	const { username } = useParams()
	return <GithubUser username={username} />
}

function AppRouter() {

    return (

        <Routes>
            <Route path="/" element={<Welcome name="Jimmy" />} />
            <Route path="/counter" element={<ClickCounter />} />
            <Route path="/users/:username" element={<ShowGithubUser />} />
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