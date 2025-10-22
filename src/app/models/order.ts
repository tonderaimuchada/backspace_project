export interface Order {
    id?: number;
    orderReferenceNumber: string;
    customerId: number;
    productId: number;
    quantity: number;
}