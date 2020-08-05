import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css'
function TeacherItem(){
    return(
<article className="teacher-item">
<header>
    <img src="https://avatars2.githubusercontent.com/u/2475990?s=460&u=f62dd0dbad4b0901928652db79f7d2b891dccd11&v=4" alt="Daniel Ataydes" />
    <div>
        <strong> Daniel Ataydes</strong>
        <span>Química</span>
    </div>                        
</header>
<p>
    Entusiasta....
    <br /> <br />
    Apaixonado por coisas
</p>
<footer>
    <p>
        Preço/Hora
        <strong>R$80,00</strong>
    </p>
    <button type="button">
        <img src={whatsappIcon} alt="Whatsapp" />
        Entrar em contato
    </button>
</footer>
</article>
    )
}

export default TeacherItem;