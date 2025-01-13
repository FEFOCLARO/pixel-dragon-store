// Primeiro importamos o React, que é a base de tudo em nossa aplicação
import React from 'react';

// Agora importamos nosso componente Header
// O './' significa "comece a partir da pasta atual"
// Depois navegamos até a pasta components/Header
import Header from './components/Header/Header';

// Também importamos o CSS do App se você tiver um
import './App.css';

// Aqui definimos nosso componente App
function App() {
  return (
    // Esta div com className="App" é o container principal de toda nossa aplicação
    <div className="App">
      {/* Aqui colocamos nosso Header */}
      {/* Ele aparecerá no topo de todas as páginas */}
      <Header />
      
      {/* Todo o resto do conteúdo virá depois do Header */}
      <main className="app-content">
        {/* Aqui virá o resto do conteúdo da sua aplicação */}
        <h1>Bem-vindo aos Velociraptors do Rio</h1>
      </main>
    </div>
  );
}

// Finalmente, exportamos o App para ser usado em outros lugares
export default App;
export default Header;