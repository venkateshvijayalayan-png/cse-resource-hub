import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Book } from '../../services/book';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})

export class Admin {
   
  
  title = "";
  author = "";
  subject = "";

  books: any[] = [];

  constructor(private bookService: Book,private router:Router) {}
  ngOnInit()
  {
    const auth=localStorage.getItem("auth");
    if(!auth)
    {
      this.router.navigate(['/login'])
    }
  }

  addBook() {

    const book = {
      title: this.title,
      author: this.author,
      subject: this.subject
    };

    this.bookService.Addbook(book).subscribe();


    this.title = "";
    this.author = "";
    this.subject = "";
  }

}