import { useContext, createContext } from 'react'

const LanguageContext = createContext('en')

function DisplayLanguage() {
    const language = useContext(LanguageContext)
    return (
        <div>
            <h1>{language}</h1>
        </div>
    )
}
export default DisplayLanguage



