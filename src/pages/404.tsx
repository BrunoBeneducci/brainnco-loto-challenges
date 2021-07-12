import React, { useEffect, useState } from 'react';
import FullLoader from '../components/FullLoader';
import imgLoterias from '../images/logo-loterias.svg';
import Api from '../services/api';
import { useSelectGame } from '../context/SelectGame';
import './pages.scss';
import { Link } from 'react-router-dom';

const Page404 = () => {

    const {valueGame, nameGame} = useSelectGame();
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setLoader(true);

        Api.get('/loterias-concursos')
        .then(({ data }) => {
            return data[valueGame].concursoId;
        })
        .then(() => {
            setTimeout(() => {
                setLoader(false);
            }, 300);
        })
        .catch(() => { console.log('Ocorreu algum erro :(') })
    }, [valueGame, nameGame]);

    return (
        <div className={nameGame ? nameGame.split(" ").join("-").toLowerCase() + ' page' : 'page'}>

            <FullLoader status={loader}/>
                
            <div className="page-box page-box-404">

                <div className="page-box-title">
                    <img src={imgLoterias} alt="Logo Loteriais" />
                    <h1>Ops, página não encontrada :(</h1>
                    <p>A página que procurou não existe ou não está mais disponível.</p>
                    <Link to="/">Voltar para home</Link>
                </div>
            </div>

        </div>
    )
}

export default Page404;