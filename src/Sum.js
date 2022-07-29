function Sum({numbers = [1, 2, 3, 4, 5, 6]}) {
    
    return <h1>{numbers.reduce((acc, curr) => acc + curr, 0)}</h1>
}

export default Sum