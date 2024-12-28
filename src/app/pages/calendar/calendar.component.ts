import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { startOfDay } from 'date-fns';
import { MatDatepickerModule, MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { WeatheService } from '../../services/weather.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  encapsulation: ViewEncapsulation.None, 
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  selectedDate: Date | null = null;

  onDateChange(date: Date | null): void {
   if (date) {
    this.selectedDate = date;
	this.selectedEvent = this.getEventTitle(date);
		}
  constructor(private rickAndMortyService: RickAndMortyService) {}
  
   getEventTitle(date: Date): string | null {
    const event = this.events.find(e => e.date.getTime() === date.getTime());
    return event ? event.title : null;
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const event = this.events.find(e => e.date.getTime() === cellDate.getTime());
      return event ? 'event-date' : '';
    }
    return '';
  };
}


}