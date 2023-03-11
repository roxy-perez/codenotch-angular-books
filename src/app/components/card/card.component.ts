import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() book: Book;
  @Output() deleteBookEvent = new EventEmitter<number>();

  deleteBook(id: number) {
    this.deleteBookEvent.emit(id);
  }

}
