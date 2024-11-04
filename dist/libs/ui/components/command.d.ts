import { DialogProps } from '@radix-ui/react-dialog';
export declare const Command: import('react').ForwardRefExoticComponent<Omit<{
    children?: import('react').ReactNode;
} & Pick<Pick<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import('react').HTMLAttributes<HTMLDivElement>> & {
    ref?: import('react').Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "key" | keyof import('react').HTMLAttributes<HTMLDivElement> | "asChild"> & {
    label?: string;
    shouldFilter?: boolean;
    filter?: (value: string, search: string, keywords?: string[]) => number;
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    loop?: boolean;
    disablePointerSelection?: boolean;
    vimBindings?: boolean;
} & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
type CommandDialogProps = DialogProps;
export declare const CommandDialog: ({ children, ...props }: CommandDialogProps) => import("react/jsx-runtime").JSX.Element;
export declare const CommandInput: import('react').ForwardRefExoticComponent<Omit<Omit<Pick<Pick<import('react').DetailedHTMLProps<import('react').InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof import('react').InputHTMLAttributes<HTMLInputElement>> & {
    ref?: import('react').Ref<HTMLInputElement>;
} & {
    asChild?: boolean;
}, "key" | "asChild" | keyof import('react').InputHTMLAttributes<HTMLInputElement>>, "onChange" | "value" | "type"> & {
    value?: string;
    onValueChange?: (search: string) => void;
} & import('react').RefAttributes<HTMLInputElement>, "ref"> & import('react').RefAttributes<HTMLInputElement>>;
export declare const CommandList: import('react').ForwardRefExoticComponent<Omit<{
    children?: import('react').ReactNode;
} & Pick<Pick<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import('react').HTMLAttributes<HTMLDivElement>> & {
    ref?: import('react').Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "key" | keyof import('react').HTMLAttributes<HTMLDivElement> | "asChild"> & {
    label?: string;
} & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export declare const CommandEmpty: import('react').ForwardRefExoticComponent<Omit<{
    children?: import('react').ReactNode;
} & Pick<Pick<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import('react').HTMLAttributes<HTMLDivElement>> & {
    ref?: import('react').Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "key" | keyof import('react').HTMLAttributes<HTMLDivElement> | "asChild"> & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export declare const CommandGroup: import('react').ForwardRefExoticComponent<Omit<{
    children?: import('react').ReactNode;
} & Omit<Pick<Pick<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import('react').HTMLAttributes<HTMLDivElement>> & {
    ref?: import('react').Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "key" | keyof import('react').HTMLAttributes<HTMLDivElement> | "asChild">, "value" | "heading"> & {
    heading?: import('react').ReactNode;
    value?: string;
    forceMount?: boolean;
} & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export declare const CommandSeparator: import('react').ForwardRefExoticComponent<Omit<Pick<Pick<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import('react').HTMLAttributes<HTMLDivElement>> & {
    ref?: import('react').Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "key" | keyof import('react').HTMLAttributes<HTMLDivElement> | "asChild"> & {
    alwaysRender?: boolean;
} & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export declare const CommandItem: import('react').ForwardRefExoticComponent<Omit<{
    children?: import('react').ReactNode;
} & Omit<Pick<Pick<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import('react').HTMLAttributes<HTMLDivElement>> & {
    ref?: import('react').Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "key" | keyof import('react').HTMLAttributes<HTMLDivElement> | "asChild">, "onSelect" | "disabled" | "value"> & {
    disabled?: boolean;
    onSelect?: (value: string) => void;
    value?: string;
    keywords?: string[];
    forceMount?: boolean;
} & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export {};
