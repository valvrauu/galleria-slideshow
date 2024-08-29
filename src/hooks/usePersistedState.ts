import { useState, useEffect } from "react";

export const usePersistedState = (key: string, initialState: any) => {
    const [state, setState] = useState(() => {
        const storageValue = localStorage.getItem(key);

        if (storageValue) return JSON.parse(storageValue);
        return initialState;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [state]);

    return [state, setState];
};
