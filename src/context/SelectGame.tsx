import React, { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

type SelectGameContextData = {
    valueGame: number;
    nameGame: string;
    changeValSelect: (props) => void;
};

export const SelectGameContext = createContext({} as SelectGameContextData);

export function SelectGameContextProvider({ children }) {

    const history = useHistory();

    const [valueGame, setValueGame] = useState(0);
    const [nameGame, setNameGame] = useState('');

    const changeValSelect = (props) => {
        setValueGame(props.id);
        setNameGame(props.nome);
        const handleName = props.nome.split(" ").join("-");
        history.push(`/${handleName}`);
    };
    
    return (
        <SelectGameContext.Provider value={{ valueGame, nameGame, changeValSelect }}>
            { children }
        </SelectGameContext.Provider>
    )
}

export const useSelectGame = () => {
    return useContext(SelectGameContext);
}
