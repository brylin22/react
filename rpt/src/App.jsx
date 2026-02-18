import { useEffect, useState } from "react";

import "./App.css";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`;

function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  // el fetch en el use effect

  // el fact
  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data; //destructracion
        setFact(fact);
        //recuperar la primera palabra
        const firstWord = fact.split(" ")[0]; //split divive la cadena de texto a través del sweparador que le digamos. Split devuelve un array (con las palabras.)
        //si fuera las 3 primeras palabras, .slice(0, 3).join('')
        console.log(firstWord);
      });
  }, []);

  //recuperra la imgen
  useEffect(() => {
    if (!fact) return;
    const firstWord = fact.split(" ")[0]; //split divive la cadena de texto a través del sweparador que le digamos. Split devuelve un array (con las palabras.)
    //si fuera las 3 primeras palabras, .slice(0, 3).join('')
    console.log(firstWord);
    fetch(
      `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`,
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        setImageUrl(`${url}`);
      });
  }, [fact]);

  return (
    <>
      <main>
        <h1>App lomi</h1>
        {fact && <p>{fact}</p>}

        {imageUrl && <img src={imageUrl} alt="a" />}
      </main>
    </>
  );
}

export default App;
