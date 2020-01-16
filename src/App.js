import React, { useEffect, useState } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [github_username, setGitubUsername] = useState('');
    const [techs, setTechs] = useState('');


    // useEffect => RECEBE 2 PARAMETROS, primeiro eh a funcao a ser executada, segundo eh array de variaveis q ao mudarem fazem a funcao executar
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLatitude(latitude);
                setLongitude(longitude);
            },
            (err) => {
                console.log(err);
            },
            {
                timeout: 30000,
            }
        )
    }, []);

    async function handleAddDev(e) {

    }

    return (
        <>
            <div id="app">
                <aside>
                    <strong>Cadastrar</strong>
                    <form onSubmit={handleAddDev}>
                        <div className="input-block">
                            <label htmlFor="github_username">Usuário do Github</label>
                            <input
                                name="github_username"
                                id="github_username"
                                value={github_username}
                                onChange={e => setGitubUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="techs">Tecnologias</label>
                            <input
                                name="techs"
                                id="techs"
                                value={techs}
                                onChange={e => setTechs(e.target.value)}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <div className="input-block">
                                <label htmlFor="latitude">Latitude</label>
                                <input
                                    type="number"
                                    name="latitude"
                                    id="latitude"
                                    value={latitude}
                                    onChange={e => setLatitude(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="input-block">
                                <label htmlFor="longitude">Longitude</label>
                                <input
                                    type="number"
                                    name="longitude"
                                    id="longitude"
                                    value={longitude}
                                    onChange={e => setLongitude(e.target.value)}
                                    required
                                />
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