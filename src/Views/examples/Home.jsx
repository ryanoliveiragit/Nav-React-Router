import React from 'react'
import './Home.css'
import imagem from '../../Components/Layout/assets/imagem.svg'

const Home = props => (
    <div className='Home'>
        <h1>Inicio</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laboriosam sed ut, exercitationem labore suscipit nemo facere. Suscipit, corporis pariatur a fugiat ut itaque quas quidem quibusdam harum ea quia!</p>
        <img className="imagemHome"src={imagem} alt="" />
    </div>
);

export default Home;