import { HttpClient } from "@angular/common/http";
import { Product } from "../models/product";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ProductService {
    base = 'http://localhost:8080/api/products';
    products: any = [];

    constructor(private http: HttpClient) { }

    list() {
        this.products = this.http.get<Product[]>(this.base);
        return this.products;
    }

    create(prod: Product) {
        return this.http.post<Product>(this.base, prod);
    }

    update(id: number, prod: Product) {
        return this.http.put<Product>(`${this.base}/${id}`, prod);
    }

    delete(id: number) {
        return this.http.delete(`${this.base}/${id}`);
    }
}