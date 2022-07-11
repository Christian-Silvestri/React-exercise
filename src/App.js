import React from "react";
import { Age } from "./Age";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome name = {<strong>Christian</strong>}/>
                <Age age = {35} />
            </div>
        )
    }
}

