import React, { useState } from 'react';

const useArrayInput = (
    initialValue: string[],
    maxLen: number
): [
    string[],
    (e: React.ChangeEvent<HTMLInputElement>, index: number) => void,
    (newValue: string[]) => void,
    () => void
] => {
    const [value, setValue] = useState(initialValue);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        let newArr = [...value]; // copying the old array
        newArr[index] = e.target.value;
        setValue(newArr);
    };

    const addField = () => {
        if (value.length < maxLen) {
            setValue([...value, '']);
        } else {
            console.log('Cannot add more fields');
        }
    };

    return [value, onChange, setValue, addField];
};

export default useArrayInput