export interface OrderModel {
    id?: number;
    client: string;
    user_name: string;
    email: string;
    product: string;
    phone: string;
    date: string;
    status: string;
    price: number;
    payment_status: number;
}