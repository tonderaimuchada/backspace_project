import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Customer } from "../models/customer";

@Injectable({ providedIn: 'root' })
export class CustomerService {
    base = 'http://localhost:8080/api/customers';
    customers: Customer[] = [];
    
    constructor(private http: HttpClient) { }

    list() {
        return this.http.get<Customer[]>(this.base);
    }

    create(prod: Customer) {
        return this.http.post<Customer>(this.base, prod);
    }

    update(id: number, prod: Customer) {
        return this.http.put<Customer>(`${this.base}/${id}`, prod);
    }

    delete(id: number) {
        return this.http.delete(`${this.base}/${id}`);
    }
}