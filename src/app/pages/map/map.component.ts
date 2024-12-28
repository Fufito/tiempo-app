import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  implements OnInit {
    private map: L.Map | undefined;

    ngOnInit(): void {
      this.initMap();
    }

    private initMap(): void {
      this.map = L.map('map').setView([51.505, -0.09], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
      }).addTo(this.map);

      L.marker([51.505, -0.09]).addTo(this.map)
        .bindPopup('Default Location')
        .openPopup();
    }
  }
