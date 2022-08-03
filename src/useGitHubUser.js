import { useState } from 'react'

function useGithubUser({ username }) {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


     async function fetchGithubUser(username) {

        setIsLoading(true)

        return await fetch(`https://api.github.com/users/${username}`)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false));
    }

    return {
        data,
        error,
        isLoading,
        User: fetchGithubUser
    }
}

export default useGithubUser



