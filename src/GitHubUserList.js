import { useState } from 'react';
import GitHubUser from './GitHubUser';

function GithubUserList() {
    const [usernames, setUsernames] = useState([])

    function handleSubmit(event) {
        event.preventDefault()
        const element = event.target.elements.username.value
        setUsernames([...usernames, element])
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" />
                <button type="submit">Submit</button>
            </form>

            <ul>
                {usernames.map((username, key) => (
                    <li key={key}>
                        <GitHubUser username={username} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default GithubUserList