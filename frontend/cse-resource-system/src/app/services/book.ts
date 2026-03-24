import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Book {

  // ✅ Updated API URL (Render backend)
  api = "https://cse-resource-hub.onrender.com/books";

  constructor(private http: HttpClient){}

  books:any[]=[];

  Addbook(book:any)
  {
      return this.http.post(this.api, book);
  }

  Getbook()
  {
      return this.http.get(this.api);
  }

  Deletebook(id:any){
      return this.http.delete(this.api + "/" + id);
  }
}