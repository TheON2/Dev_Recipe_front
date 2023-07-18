import { useState, ChangeEvent } from "react";

type UseArrayInputReturn = [
  string[],
  (e: ChangeEvent<HTMLInputElement>, index: number) => void,
  React.Dispatch<React.SetStateAction<string[]>>,
  () => void,
  () => void,
  (index: number) => void,
];

const useArrayInput = (
  initialValue: string[],
  maxLen: number
): UseArrayInputReturn => {
  const [value, setValue] = useState<string[]>(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>, index: number): void => {
    const newArr = [...value];
    newArr[index] = e.target.value;
    setValue(newArr);
  };

  const addField = (): void => {
    if (value.length < maxLen) {
      setValue([...value, ""]);
    } else {
      console.log("Cannot add more fields");
    }
  };

  const removeLastField = (): void => {
    if (value.length > 1) {
      setValue(value.slice(0, -1));
    } else {
      console.log("Cannot remove more fields");
    }
  };

  const removeFieldAtIndex = (index: number): void => {
    if (index >= 0 && index < value.length) {
      setValue([...value.slice(0, index), ...value.slice(index + 1)]);
    } else {
      console.log("Invalid index");
    }
  };

  return [
    value,
    onChange,
    setValue,
    addField,
    removeLastField,
    removeFieldAtIndex,
  ];
};

export default useArrayInput;
