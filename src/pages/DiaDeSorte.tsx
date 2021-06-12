import React from 'react';
import SelectTypeGame from '../components/SelectTypeGame';
import ResultGame from '../components/ResultGame';
import imgLoterias from '../images/logo-loterias.svg';
import './pages.scss';

const DiaDeSorte = () => {

    return (
        <div className="page diadesorte">
                
            <div className="page-box page-box-left">
                <div className="page-box-select">
                    <SelectTypeGame/>
                </div>

                <div className="page-box-title">
                    <img src={imgLoterias} alt="Logo Loteriais" />
                    <h1>Mega-Sena</h1>
                </div>

                <div className="page-box-footer">
                    <h2>Concurso</h2>
                    <h3>4531 - 07/04/2020</h3>
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

export default DiaDeSorte;