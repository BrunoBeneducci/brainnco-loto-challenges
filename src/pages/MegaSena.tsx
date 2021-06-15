import React from 'react';
import SelectTypeGame from '../components/SelectTypeGame';
import ResultGame from '../components/ResultGame';
import imgLoterias from '../images/logo-loterias.svg';
import './pages.scss';

const MegaSena = () => {

    return (
        <div className="page megasena">
                
            <div className="page-box page-box-left">
                <div className="page-box-select">
                    <SelectTypeGame currentValue="mega-sena"/>
                </div>

                <div className="page-box-title">
                    <img src={imgLoterias} alt="Logo Loteriais" />
                    <h1>Mega-Sena</h1>
                </div>

                <div className="page-box-footer">
                    <h2>Concurso</h2>
                    <h3>0000 - 07/04/2020</h3>
                </div>
            </div>

            <div className="page-box page-box-right">
                <div className="page-box-result">
                    <ResultGame />
                </div>
            </div>

        </div>
    )
}

export default MegaSena;