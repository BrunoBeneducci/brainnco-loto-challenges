import { useSelectGame } from '../../context/SelectGame';
import Api from '../../services/api';
import { useEffect, useState } from 'react';
import './custom.scss';

const SelectTypeGame = props => {

    const { valueGame, changeValSelect } = useSelectGame();

    const handleSelect = (event) => {
        const selected = parseInt(event.target.value);
        const routeSelect = loto.find(el => el.id === selected);
        changeValSelect(routeSelect);
    }
    
    const [loto, setLoto] = useState([]);
    
    useEffect(() => {
        Api.get('/loterias')
        .then(({ data }) => {
            setLoto(data);
        })
        .catch(() => { console.log('Ocorreu algum erro :(') })
    }, [valueGame]);
    
    useEffect(() => {
        const routeSelect = loto.find(el => el.nome === props.currentValue);
        if (routeSelect) {
            changeValSelect(routeSelect);
        }
    }, [changeValSelect, loto, props.currentValue]);

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