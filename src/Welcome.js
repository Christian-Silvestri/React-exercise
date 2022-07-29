import React from "react";
import { Age } from "./Age";


/* export class Welcome extends React.Component {
 
    render() {
        return (
            <div className='welcome'>
                <p>Welcome, {this.props.name} !</p>
                {this.props.age > 18 && this.props.age < 65 && this.props.name === 'Jhon' && <Age age = {this.props.age} />}
            </div>
        )
    }
} */

function Welcome(props) {
        return (
            <div className='welcome'>
                <p>Welcome, {props.name}!</p>
                {props.age > 18 && props.age < 65 && props.name === 'Jhon' && <Age age = {props.age} /> }
            </div>

        )
}

export default Welcome

 