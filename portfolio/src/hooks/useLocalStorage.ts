import {useState}  from 'react';

export function useLocalStorage() {
    const[value, setValue] = useState<number>(1)
}

