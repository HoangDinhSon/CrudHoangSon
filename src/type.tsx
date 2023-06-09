type InputEditForm = {
    title: string;
    description: string;
    price: number;
    stock: number;
    id: number;
    status: boolean;
};
type InputAddForm = {
    title: string;
    description: string;
    price: number;
    stock: number;
    status: boolean;
};
type outputAddForm = {
    title: string;
    description: string;
    price: number;
    stock: number;
    status: boolean;
};
type PropsFooter = {
    pageNumber: (x: number) => void;
    rowPerPage: (x: number) => void;
};
type typeProduct = {
    title: string;
    description: string;
    price: number;
    stock: number;
    id: number;
    status: boolean;
};

export type { InputEditForm, InputAddForm, outputAddForm, PropsFooter, typeProduct };
