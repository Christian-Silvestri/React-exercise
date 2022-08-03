import { useState } from "react";

function CustomHooks_02() {
    const [data, setData] = useState({ username: '', password: '' })


    function handleInputChange(event) {
        const value = event.target.value

        setData((data) => {
            return {
                ...data,
                value
            }
        })
    }

    return {
        data: data,
        onInputChange: handleInputChange
    }
}

export default CustomHooks_02