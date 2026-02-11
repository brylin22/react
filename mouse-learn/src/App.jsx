import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    console.log("efecto", { enabled });

    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log("hadleMove", { clientX, clientY });
    };

    window.addEventListener("pointermove", handleMove);
  }, [enabled]);

  return (
    <>
      <main>
        <h1>Mouse</h1>
        <button onClick={() => setEnabled(!enabled)}>
          {enabled ? "Desactivar" : "Activar"} : Buton
        </button>
      </main>
    </>
  );
}

export default App;
