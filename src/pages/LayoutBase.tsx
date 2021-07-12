import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import SelectTypeGame from '../components/SelectTypeGame';
import ResultGame from '../components/ResultGame';
import FullLoader from '../components/FullLoader';
import imgLoterias from '../images/logo-loterias.svg';
import Api from '../services/api';
import { useSelectGame } from '../context/SelectGame';
import './pages.scss';

const LayoutBase = () => {

    const {valueGame, nameGame} = useSelectGame();
    const [contest, setContest] = useState('');
    const [contestNumbers, setContestNumbers] = useState([]);
    const [contestDate, setContestDate] = useState('');
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setLoader(true);

        Api.get('/loterias-concursos')
        .then(({ data }) => {
            return data[valueGame].concursoId;
        })
        .then(( data ) => {
            setContest(data);
            return Api.get(`/concursos/${data}`)
        })
        .then(({ data }) => {
            setContestNumbers(data.numeros);
            setContestDate(data.data);
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
                
            <div className="page-box page-box-left">
                <div className="page-box-select">
                    <SelectTypeGame currentValue={valueGame}/>
                </div>

                <div className="page-box-title">
                    <img src={imgLoterias} alt="Logo Loteriais" />
                    <h1>{nameGame.length ? nameGame : 'Mega-Sena'}</h1>
                </div>

                <div className="page-box-footer">
                    <h2>Concurso</h2>
                    <h3>{contest ? contest : '0000'} - { contestDate ? format(parseISO(contestDate), 'dd/MM/yy', { locale: ptBR }) : '00/00/0000' }</h3>
                </div>
            </div>

            <div className="page-box page-box-right">
                <div className="page-box-result">
                    <ResultGame numeros={contestNumbers}/>
                </div>
            </div>

        </div>
    )
}

export default LayoutBase;