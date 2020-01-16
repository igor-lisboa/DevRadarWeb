import React from 'react';


// Componente: Bloco isolado de HTML, CSS e JS; o qual não interfere no restante da aplicação
// Propriedade: Informações que um componente pai passa para o componente filho
// Estado: 
function App() {
    function incrementCounter() {
        alert('oi');
    }

    return (
        <>
            <h1>Contador: 0</h1>
            <button onClick={incrementCounter}>Incrementar</button>
        </>
    );
}

export default App;