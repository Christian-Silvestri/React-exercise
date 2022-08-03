import { useEffect, useRef } from 'react'

function CarDetails({ initialValue }) {

    const formRef = useRef(null)

    useEffect(() => {

        formRef.current.reset()

    }, [initialValue])

    return (
        <form ref={formRef}>
            <input name="model" defaultValue={initialValue.model} />
            <input name="year" defaultValue={initialValue.year} />
            <input name="color" defaultValue={initialValue.color} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default CarDetails