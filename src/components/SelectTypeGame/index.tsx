import { useSelectGame } from '../../context/SelectGame';
import Api from '../../services/api';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './custom.scss';

const SelectTypeGame = props => {

    const history = useHistory();

    const { valueGame, changeValSelect } = useSelectGame();

    const handleSelect = (event) => {
        const selected = parseInt(event.target.value);
        const routeSelect = loto.find(el => el.id === selected);
        if(routeSelect) {
            changeValSelect(routeSelect);
        }
    }
    
    const [loto, setLoto] = useState([]);
    
    useEffect(() => {
        Api.get('/loterias')
        .then(({ data }) => {
            setLoto(data);
        })
        .catch(() => { console.log('Ocorreu algum erro :( /loterias') })
    }, [valueGame]);

    useEffect(() => {
        const currentRoute = loto.find(el => el.nome === history.location.pathname.substring(1));
        if (currentRoute) {
            changeValSelect(currentRoute);
        }
    }, [changeValSelect, history.location.pathname, loto]);

    return (
        <div>
            <div className="select">
                <select name="select" value={valueGame} onChange={handleSelect}>
                    { loto.length ? (
                        loto.map((data) => <option key={data.id} value={data.id}> {data.nome} </option> )
                    ) : (
                        ''
                    ) }
                </select>
            </div>
        </div>
    );
}

export default SelectTypeGame;