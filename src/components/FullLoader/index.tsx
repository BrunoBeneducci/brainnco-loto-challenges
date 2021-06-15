import imgLoterias from '../../images/logo-loterias.svg';
import './custom.scss';

const ResultGame = props => {

    return (
        <div className={props.status ? 'full-loader active' : 'full-loader'}>
            <img src={imgLoterias} alt="Logo Loteriais" />
        </div>
    );
}

export default ResultGame;