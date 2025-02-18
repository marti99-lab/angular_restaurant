import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { BookingService } from '../../services/booking.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class BookingComponent {
  bookingForm = new FormGroup({
    customerName: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required, control => this.dateValidator(control)]),
    time: new FormControl('', Validators.required),
    guests: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(10)]),
  });


  dateValidator(control: AbstractControl) {
    if (!control.value) return { required: true };
    const selectedDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today ? null : { pastDate: true };
  }

  get customerName() { return this.bookingForm.get('customerName'); }  // ✅ Fix added
  get date() { return this.bookingForm.get('date'); }
  get time() { return this.bookingForm.get('time'); }
  get guests() { return this.bookingForm.get('guests'); }
  

  constructor(private bookingService: BookingService) {}

  handleSubmit() {
    console.log("🔍 Debug: handleSubmit() was triggered.");  
  
    if (!this.bookingForm.valid) {
      console.warn("⚠️ Form is invalid, submission blocked.");
  
      // ✅ Log each field's error state
      console.log("Customer Name Errors:", this.bookingForm.get('customerName')?.errors);
      console.log("Date Errors:", this.bookingForm.get('date')?.errors);
      console.log("Time Errors:", this.bookingForm.get('time')?.errors);
      console.log("Guests Errors:", this.bookingForm.get('guests')?.errors);
      
      alert("⚠️ Please fill in all fields correctly.");
      return;  // Stop execution if the form is invalid
    }
  
    console.log("✅ Form is valid, submitting...");
    console.log("📌 Form Data:", this.bookingForm.value);
  
    this.bookingService.addBooking(this.bookingForm.value).subscribe(response => {
      console.log("✅ Booking response:", response);
      alert('Booking Successful!');
      this.bookingForm.reset();
    }, error => {
      console.error("❌ Booking failed:", error);
      alert('Booking failed. Please try again.');
    });
  }  
}  
