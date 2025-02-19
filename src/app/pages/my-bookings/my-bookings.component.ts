import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class MyBookingsComponent implements OnInit {
  bookings: any[] = [];
  customerName = 'Test User';

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.getBookings();
  }

  getBookings() {
    this.bookingService.getUserBookings(this.customerName).subscribe(
      (data) => {
        this.bookings = data;
        console.log("User Bookings:", this.bookings);
      },
      (error) => {
        console.error("Error fetching bookings:", error);
      }
    );
  }
}
