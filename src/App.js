import React from "react";

import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome name = {<strong>Christian</strong>}
                age = {35}/>
                
            </div>
        )
    }
}

