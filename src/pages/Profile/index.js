import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi';


import './styles.css';

import LogoImg from '../../assets/logo.svg';

export default function Profile() {

    const history = useHistory();

    useEffect(() => {
       
    }, []);

    async function handleDeleteIncident(id) {
  
    }

    function handleLogout(){
       localStorage.clear();

       history.push('/');
    }

   return (
       <div className="profile-container">
           <header>
            <img src={LogoImg} alt = "Be the hero"/>
            <span>Bem Vindo!</span>

            <Link className="button" to="/incidents/new">
                Cadastrar um novo caso
            </Link>
            <button onClick={handleLogout} type="button">
                <FiPower size={18} color="#E02041" />
            </button>
           </header>

           <h1>Casos cadastrados</h1>

           <ul>
              
                   <li>
                   <strong>CASO:</strong>
                   <p>Abrigo de animais carentes</p>

                   <strong>DESCRIÇÃO:</strong>
                   <p>Os animais estão necessitando de comida</p>

                   <strong>VALOR:</strong>
                   <p>min. R$ 20,00 </p>

                   <button onClick={() => handleDeleteIncident} type="button"> 
                   <FiTrash2 size={20} color="#a8a8b3" />
                   </button>
                   </li>

                   <li>
                   <strong>CASO:</strong>
                   <p>Animal necessitando de cirurgia</p>

                   <strong>DESCRIÇÃO:</strong>
                   <p>Um cachorro de nosso abrigo foi atropelado e necessita de cirurgia</p>

                   <strong>VALOR:</strong>
                   <p>R$ 800,00 </p>

                   <button onClick={() => handleDeleteIncident} type="button"> 
                   <FiTrash2 size={20} color="#a8a8b3" />
                   </button>
                   </li>
                
           </ul>
       </div>
   );
}