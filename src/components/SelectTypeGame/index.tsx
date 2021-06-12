import { useSelectGame } from '../../context/SelectGame';
import { useHistory } from 'react-router-dom';
import './custom.scss';

export default function SelectTypeGame() {

    const history = useHistory();

    const { valueGame, changeValSelect } = useSelectGame();

    const handleSelect = (event) => {
        changeValSelect(event.target.value);
        history.push(`/${event.target.value}`);
    }

    return (
        <div className={valueGame ? valueGame : 'NAO'}>
            <div className="select">
                <select name="select" value={valueGame} onChange={handleSelect}>
                    <option value="megasena">Mega-Sena</option>
                    <option value="quina">Quina</option>
                    <option value="lotofacil">Lotofácil</option>
                    <option value="lotomania">Lotomania</option>
                    <option value="timemania">Timemania</option>
                    <option value="dia-de-sorte">Dia de Sorte</option>
                </select>
            </div>

        </div>
    );
}