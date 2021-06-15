import React, { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

type SelectGameContextData = {
    valueGame: number;
    changeValSelect: (props) => void;
};

export const SelectGameContext = createContext({} as SelectGameContextData);

export function SelectGameContextProvider({ children }) {

    const history = useHistory();

    const [valueGame, setValueGame] = useState(0);

    const changeValSelect = (props) => {
        setValueGame(props.id);
        const handleName = props.nome.split(" ").join("-");
        history.push(`/${handleName}`);
    };
    
    return (
        <SelectGameContext.Provider value={{ valueGame, changeValSelect }}>
            { children }
        </SelectGameContext.Provider>
    )
}

export const useSelectGame = () => {
    return useContext(SelectGameContext);
}