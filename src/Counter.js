import { useState, useEffect} from "react";


/* export class Counter extends React.Component {
   state = {
    count: 0,
   }

   constructor(props) {
    super(props)

    setInterval(() => {
        this.setState((state) => {
            return {
                count: state.count + 1,
            }
        })
    }, 1000)
   }

   render() {
    return <h1>Count: {this.state.count}</h1>
   }
} */

export function Counter() {
	const [count, setCount] = useState(0)

	useEffect(() => {
		    setInterval(() => {
			setCount((count) => count + 1)
		}, 1000)

	}, [])

	return <h1>{count}</h1>
}