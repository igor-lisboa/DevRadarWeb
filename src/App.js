import React from 'react';
import Header from './Header';


// Componente: Bloco isolado de HTML, CSS e JS; o qual não interfere no restante da aplicação
// Propriedade: Informações que um componente pai passa para o componente filho
// Estado: 
function App() {
    return (
        <>
            <Header title="Meu Painel" />
            <Header title="2" />
            <Header title="4" />
        </>
    );
}

export default App;