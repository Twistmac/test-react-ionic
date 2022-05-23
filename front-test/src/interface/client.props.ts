export interface ClientProps {
    id: number;
    name: string;
    email: string;
    note: {id: number, value: number}[];
}