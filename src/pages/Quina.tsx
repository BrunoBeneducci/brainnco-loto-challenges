import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import SelectTypeGame from '../components/SelectTypeGame';
import ResultGame from '../components/ResultGame';
import FullLoader from '../components/FullLoader';
import imgLoterias from '../images/logo-loterias.svg';
import Api from '../services/api';
import './pages.scss';

const Quina = () => {

    const [concurso, setConcurso] = useState('');
    const [numerosConcurso, setNumerosConcurso] = useState([]);
    const [dataConcurso, setDataConcurso] = useState('');
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        Api.get('/loterias-concursos')
        .then(({ data }) => {
            setConcurso(data[1].concursoId);
            return data[1].concursoId;
        })
        .then(( data ) => {
            return Api.get(`/concursos/${data}`)
        })
        .then(({ data }) => {
            setNumerosConcurso(data.numeros);
            setDataConcurso(data.data);
            setLoader(false);
        })
        .catch(() => { console.log('Ocorreu algum erro :(') })
    }, []);

    return (
        <div className="page quina">

            <FullLoader status={loader}/>
                
            <div className="page-box page-box-left">
                <div className="page-box-select">
                    <SelectTypeGame currentValue="quina"/>
                </div>

                <div className="page-box-title">
                    <img src={imgLoterias} alt="Logo Loteriais" />
                    <h1>Quina</h1>
                </div>

                <div className="page-box-footer">
                    <h2>Concurso</h2>
                    <h3>{concurso ? concurso : '0000'} - { dataConcurso ? format(parseISO(dataConcurso), 'dd/MM/yy', { locale: ptBR }) : '00/00/0000' }</h3>
                </div>
            </div>

            <div className="page-box page-box-right">
                <div className="page-box-result">
                    <ResultGame numeros={numerosConcurso}/>
                </div>
            </div>

        </div>
    )
}

export default Quina;