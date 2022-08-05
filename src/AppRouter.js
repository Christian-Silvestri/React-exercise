import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useParams, Link } from 'react-router-dom';
import Welcome from './Welcome'
import ClickCounter from './ClickCounter'
import GithubUser from './GitHubUser'
import GitHubUserList from './GitHubUserList'

function ShowGithubUser() {
    const { username } = useParams()
    return <GithubUser username={username} />
}

function AppRouter() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Welcome name="Jimmy" />} />
                <Route path="/counter" element={<ClickCounter />} />
                <Route path="/users" element={<GitHubUserList />}>
                    <Route path="/users/:username" element={<ShowGithubUser />} />
                    <Route index element={<p>Add user</p>} />
                </Route>
                <Route path="*" element={<p>Not Found</p>} />
            </Routes>
            <Link to="/"><p>Home page</p></Link>
            <Link to="/counter"><p>Counter</p></Link>
            <Link to="/users/christiansilvestri"><p>Christian Silvestri</p></Link>
        </div>
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


