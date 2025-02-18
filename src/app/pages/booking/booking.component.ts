import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  standalone: true
})
export class BookingComponent {
  handleSubmit(event: Event) {
    event.preventDefault();
    alert('Your reservation has been submitted!');
  }
}
