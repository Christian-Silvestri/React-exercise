import React from "react";
import ClickCounter from "./ClickCounter";
import { Counter } from "./Counter";

import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome name='Jhon'
                    age={20} />
                <Counter
                    initialValue={35}
                    incrementValue={5}
                    interval={2000} />
                <ClickCounter />

            </div>
        )
    }
}

