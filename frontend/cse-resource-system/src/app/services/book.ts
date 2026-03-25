import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Book {

  // Base API URL
  private baseUrl = "https://cse-resource-hub.onrender.com";

  constructor(private http: HttpClient) {}

  // Add book
  Addbook(book: any) {
    return this.http.post(`${this.baseUrl}/books`, book);
  }

  // Get all books
  Getbooks() {
    return this.http.get(`${this.baseUrl}/books`);
  }

  // Delete book
  Deletebook(id: any) {
    return this.http.delete(`${this.baseUrl}/books/${id}`);
  }
}