import React, { createContext, useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

type SelectGameContextData = {
    valueGame: string;
    changeValSelect: (props) => void;
};

export const SelectGameContext = createContext({} as SelectGameContextData);

export function SelectGameContextProvider({ children }) {

    const history = useHistory();

    const [valueGame, setValueGame] = useState('mega-sena');

    const changeValSelect = (props) => {
        setValueGame(props);
    };

    useEffect(() => {
        changeValSelect(history.location.pathname.substring(1));
    }, [history]);

    return (
        <SelectGameContext.Provider value={{ valueGame, changeValSelect }}>
            { children }
        </SelectGameContext.Provider>
    )
}

export const useSelectGame = () => {
    return useContext(SelectGameContext);
}