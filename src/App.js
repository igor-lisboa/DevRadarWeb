import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {

    return (
        <>
            <div id="app">
                <aside>
                    <strong>Cadastrar</strong>
                    <form>
                        <div className="input-block">
                            <label htmlFor="github_username">Usuário do Github</label>
                            <input name="github_username" id="github_username" required />
                        </div>

                        <div className="input-block">
                            <label htmlFor="techs">Tecnologias</label>
                            <input name="techs" id="techs" required />
                        </div>

                        <div className="input-group">
                            <div className="input-block">
                                <label htmlFor="latitude">Latitude</label>
                                <input name="latitude" id="latitude" required />
                            </div>

                            <div className="input-block">
                                <label htmlFor="longitude">Longitude</label>
                                <input name="longitude" id="longitude" required />
                            </div>
                        </div>

                        <button type="submit">Salvar</button>
                    </form>
                </aside>
                <main>
                    <ul>
                        <li className="dev-item">
                            <header>
                                <img src="https://avatars3.githubusercontent.com/u/45468193?s=460&v=4" alt="Igor" />
                                <div className="user-info">
                                    <strong>Igor Lisboa</strong>
                                    <span>JavaScript, Java, TypeScript, REACT</span>
                                </div>
                            </header>
                            <p>Sempre caçando novas linguagens, frameworks e tentando evoluir como programador (back-end | front-end | dba | mobile)</p>
                            <a href="https://github.com/igor-lisboa">Acessar perfil no github</a>
                        </li>
                    </ul>
                </main>
            </div>
        </>
    );
}

export default App;