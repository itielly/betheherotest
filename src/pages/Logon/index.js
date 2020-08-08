import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon(){
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();


       history.push('/profile');
    }

    return(
        <div className="logon-container"> 
         <section className="form">
         <img src={logoImg} alt="Be the hero"/>

         <form onSubmit={handleLogin}>
             <h1>Faça seu logon</h1>
             <input 
             placeholder="Sua id"
             />
             <button className="button" type="submit">Entrar</button>
             <Link className="back-link" to="/register">
                 <FiLogIn size={16} color= "#E02041"/>
                 Não tenho cadastro
             </Link>
         </form>
         </section>
         <img src={heroesImg} alt= "Heroes"/>
        </div>
    );
}