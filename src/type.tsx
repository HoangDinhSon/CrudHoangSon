type InputEditForm = {
    title: string,
    description: string,
    price: number,
    stock: number,
    id: number,
    status: boolean,
}
type InputAddForm ={
    title: string
    description: string
    price: number,
    stock: number,
    status: boolean,
}
type outputAddForm = {
    title: string
    description: string
    price: number,
    stock: number,
    status: boolean,
}
export type {InputEditForm ,InputAddForm,outputAddForm}