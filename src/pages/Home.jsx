
function Home() {
    return (
        <div className='container'>
            <div className="main-content">
                <div className="navbar">
                    <ul className='menu'>
                        <li className="menu-item">
                            <button>Logo/iniciar</button>
                        </li>
                        <li className="menu-item">
                            <button>!</button>
                        </li>
                        <li className="menu-item">
                            <a href="/">Inicio</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">TFT</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Clash</a>
                        </li>
                    </ul>

                    <div className="second-menu">
                        <ul className="icons-menu">
                            <li className="menu-item">
                                icone-user
                            </li>
                            <li className="menu-item">
                                icone-bag
                            </li>
                            <li className="menu-item">
                                icone-hammer
                            </li>
                            <li className="menu-item">
                                icone-coin
                            </li>
                        </ul>
                        <div className="rp-ea">
                            <div className="rp">
                                icone - 1200
                            </div>
                            <div className="ea">
                                icone - 22000
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content"></div>
            </div>
            <div className="sidebar">
                <div className="profile">
                    <div className="user-icon">
                    </div>
                    <div className="user-infos">
                        <h1>Nome</h1>
                        <h2>Status</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;