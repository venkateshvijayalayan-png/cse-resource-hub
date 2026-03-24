import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Book} from '../../services/book';



@Component({
  selector: 'app-books',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books {
    // books=[
    //   {title:'Introduction to Algorithms',author:'Venky',subject:'DAA'},
    //   {title:'Database System Concepts',author:'Nithish',subject:'DBMS'},
    //   {title:'Operating System Concepts',author:'Bharat',subject:'OS'}
    // ]
    books:any[]=[];
    constructor(private bookService:Book)
    {

    }
    ngOnInit()
    {
    this.bookService.Getbook().subscribe((data:any)=>
    {
      this.books=data;
      console.log(this.books)
    }
    );  
    }
    delete(id:any)
{
  if(confirm("Are you sure you want to delete this book?"))
  {
    this.bookService.Deletebook(id).subscribe(()=>{
      this.ngOnInit();   // refresh books
    });
  }
}
}

