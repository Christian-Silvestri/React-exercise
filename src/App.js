import React from "react";
import { DisplayLanguage, LanguageContext } from "./LanguageContext";

export class App extends React.Component {
    state = {
		language: 'en',
	}

	handleLanguageChange = (event) => {
		this.setState({
			language: event.target.value,
		})
	}

	render() {
		return (
			<div>
				<select name="language" value={this.state.language} onChange={this.handleLanguageChange}>
					<option value="en">ENGLISH</option>
					<option value="it">ITALIANO</option>
				</select>
				<LanguageContext.Provider value={this.state.language}>
					<DisplayLanguage />
				</LanguageContext.Provider>
			</div>
		)
	}
}

