import { SiFacebook, SiApple} from 'react-icons/si'
import { FcGoogle } from 'react-icons/fc';
import { FiArrowRight } from 'react-icons/fi';
import { FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import logo from '../assets/lol-logo.png';
import wallpaper from '../assets/tk-chef-splash.jpg';

import '../styles/login.css';

function Login(){
    return (
        <div className="container">
            <div className="container-form">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>

                <h1>Fazer login</h1>

                <form>
                    <input type="text" id='usuario' placeholder='Nome do usuario'/>
                    <input type="text" id='senha' placeholder='Senha'/>

                    <div className="opcoes-login">
                        <button type='button' style={{backgroundColor: '#4267B2'}}><SiFacebook/></button>
                        <button type='button' style={{backgroundColor: '#fff', border: '1.5px solid #e6e6e6'}}><FcGoogle/></button>
                        <button type='button' style={{backgroundColor: '#000'}}><SiApple/></button>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" name="manter-login" id="manter-login"/> <label htmlFor="manter-login">Mater login</label>
                    </div> 

                    <Link to="/home"><FiArrowRight/></Link>
                </form>

                <div className="links">
                    <a href="/">Não consegue iniciar sessão?</a>
                    <a href="/">Criar conta</a>
                </div>

            </div>
            <div className="container-wallpaper" style={{background: `url(${wallpaper}) no-repeat center / cover`}}>
                <button><FaCog/></button>
            </div>
        </div>
    )
}

export default Login;