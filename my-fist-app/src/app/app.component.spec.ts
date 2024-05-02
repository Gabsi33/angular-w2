import { Component, OnInit } from '@angular/core';

interface Book {
  title: string;
  authors: string[];
  rating: number;
  totalRating: number;
  numberOfRatings: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class BookRatingComponent implements OnInit {
  books: Book[] = [
    {
      title: 'Великият Гетсби',
      authors: ['Ф. Скот Фицджералд'],
      rating: 0,
      totalRating: 0,
      numberOfRatings: 0
    },
    {
      title: 'Тютюн',
      authors: ['Димитър Димов'],
      rating: 0,
      totalRating: 0,
      numberOfRatings: 0
    },
    {
      title: 'Шогун',
      authors: ['Джеймс Клавел'],
      rating: 0,
      totalRating: 0,
      numberOfRatings: 0
    },
    {
      title: 'Човекът в търсене на смисъл',
      authors: ['Виктор Франкъл'],
      rating: 0,
      totalRating: 0,
      numberOfRatings: 0
    },
    {
      title: 'Империя на омразата',
      authors: ['Рина Кент'],
      rating: 0,
      totalRating: 0,
      numberOfRatings: 0
    }
  ];
  currentBookIndex: number = 0;
  currentBook: Book | null = null;

  ngOnInit() {
    this.currentBook = this.books[this.currentBookIndex];
  }

  calculateAverageRating(book: Book): number {
    return book.numberOfRatings ? book.totalRating / book.numberOfRatings : 0;
  }

  rateBook(rating: number): void {
    if (this.currentBook) {
      this.currentBook.totalRating += rating;
      this.currentBook.numberOfRatings++;
      this.currentBook.rating = this.calculateAverageRating(this.currentBook);
      this.nextBook();
    }
  }

  nextBook(): void {
    if (this.currentBookIndex < this.books.length - 1) {
      this.currentBookIndex++;
    } else {
      this.currentBookIndex = 0;
    }
    this.currentBook = this.books[this.currentBookIndex];
  }

  startOver(): void {
    this.currentBookIndex = 0;
    this.currentBook = this.books[this.currentBookIndex];
  }

  finishRating(): void {
    this.currentBook = null;
    alert('Работата е свършена успешно.');
  }
}