import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {

  selectedDate: Date | null = null;

  onDateChange(date: Date | null): void {
    this.selectedDate = date;
  }
}
