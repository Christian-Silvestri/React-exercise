import React, { createContext } from 'react'

export const LanguageContext = createContext('en')

export class DisplayLanguage extends React.Component {
    
    render() {

        return (
            <LanguageContext.Consumer>
                {(language) => <h1>{language}</h1>}
            </LanguageContext.Consumer>
        )
    }
}

