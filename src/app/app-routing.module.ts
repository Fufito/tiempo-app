// filepath: /c:/Users/Jacky/Desktop/git-copilot/curs_git_copilot/tiempo-app/src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { MapComponent } from './pages/map/map.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'map', component: MapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



