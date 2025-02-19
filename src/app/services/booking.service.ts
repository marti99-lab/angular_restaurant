import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private apiUrl = 'http://localhost:5000/api/bookings';

  constructor(private http: HttpClient) {}

  // Add a new booking
  addBooking(bookingData: any): Observable<any> {
    return this.http.post(this.apiUrl, bookingData);
  }

  // Get all bookings (for Admin Panel)
  getBookings(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Get bookings for a specific user (for User View)
  getUserBookings(customerName: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${customerName}`);
  }
}

