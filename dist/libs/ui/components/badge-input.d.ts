import { Dispatch, SetStateAction } from 'react';
import { InputProps } from './input';
export declare const BadgeInput: import('react').ForwardRefExoticComponent<Omit<InputProps, "onChange" | "value"> & {
    value: string[];
    onChange: (value: string[]) => void;
    setPendingKeyword?: Dispatch<SetStateAction<string>>;
} & import('react').RefAttributes<HTMLInputElement>>;
