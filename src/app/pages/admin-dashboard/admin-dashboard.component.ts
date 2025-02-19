import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AdminDashboardComponent implements OnInit {
  bookings: any[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.getAllBookings();
  }

  getAllBookings() {
    this.bookingService.getBookings().subscribe(
      (data) => {
        this.bookings = data;
        console.log("📌 Admin View: All Bookings:", this.bookings);
      },
      (error) => {
        console.error("❌ Error fetching bookings:", error);
      }
    );
  }

  approveBooking(bookingId: string) {
    this.bookingService.updateBookingStatus(bookingId, 'approved').subscribe(() => {
      alert('Booking approved');
      this.getAllBookings(); // Refresh the list
    });
  }

  rejectBooking(bookingId: string) {
    this.bookingService.updateBookingStatus(bookingId, 'rejected').subscribe(() => {
      alert('Booking rejected');
      this.getAllBookings(); // Refresh the list
    });
  }

  deleteBooking(bookingId: string) {
    this.bookingService.deleteBooking(bookingId).subscribe(() => {
      alert('Booking deleted');
      this.getAllBookings(); // Refresh the list
    });
  }
}
