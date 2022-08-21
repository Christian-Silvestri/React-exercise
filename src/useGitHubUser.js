import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((response) => response.json())

function useGithubUser(username) {
    const { data, error, mutate} = useSWR( username ? `https://api.github.com/users/${username}` : null, fetcher)

    function handleRefetch() {
        mutate()
    }

    return {
        users: data,
        error,
        isLoading: !data && !error,
        onRefetch: handleRefetch
    }
}

export default useGithubUser



