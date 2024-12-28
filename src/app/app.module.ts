import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'; // Importa el módulo de enrutamiento
import { AppComponent } from './app.component'; // Importa AppComponent

@NgModule({
  declarations: [
    // Asegúrate de declarar AppComponent aquí
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule, // Agrega el módulo de enrutamiento aquí
    AppComponent
  ],
  providers: [],
  bootstrap: [bootstrapApplication],
})
export class AppModule { }
