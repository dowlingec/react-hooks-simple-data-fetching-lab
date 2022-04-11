// create your App component here
import { useEffect, useState } from 'react';
 
const App = () => {
    console.log("COCONUT")
    const [imageSrc, setImageSrc] = useState("")
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then(data => setImageSrc(data.message))
    }, [])

    if (!imageSrc) {
        return (<p>Loading</p>)
    }

    return (
        <div>
            <img src={imageSrc} alt="A Random Dog"/>
        </div>
    )
 }
 export default App;