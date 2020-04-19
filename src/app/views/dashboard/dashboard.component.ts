import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;

  radioModel: string = 'Month';
  icon: { url: 'assets/rsz_favicon.jpg', };
  lat: number = -23.5842261;
  lng: number = -46.6448757;
  zoom: number = 15;

  markers = [
    {
      position: new google.maps.LatLng(-23.5865931, -46.6452203),
      map: this.map,
      icon: { url: 'assets/rsz_favicon.jpg', },
      title: 'Maria - Psicóloga'
    },
    {
      position: new google.maps.LatLng(-23.5865931,-46.6452203),
      map: this.map,
      icon: { url: 'assets/rsz_favicon.jpg', },
      title: 'Ana - Precisa ir a farmácia'
    },
    {
      position: new google.maps.LatLng(-23.5884551, -46.6499637),
      map: this.map,
      icon: { url: 'assets/rsz_favicon.jpg', },
      title: 'Fábio - Vai ao mercado por você'
    },
    {
      position: new google.maps.LatLng(-23.5890451,-46.6478497),
      map: this.map,
      icon: { url: 'assets/rsz_favicon.jpg', },
      title: 'João - Troca conhecimento'
    },
    {
      position: new google.maps.LatLng(-23.5893891, -46.6418847),
      map: this.map,
      icon: { url: 'assets/rsz_favicon.jpg', },
      title: 'João - Troca conhecimento'
    }
  ];

 // Coordinates to set the center of the map
  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 15
  };

 // Default Marker
  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
    title: 'Joana - Precisa que alguém pegue suas compras',
    icon: { url: 'assets/rsz_favicon.jpg', },
    
  });

  ngAfterViewInit(): void {
    this.mapInitializer();
  }

  mapInitializer(): void {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);

   // Adding Click event to default marker
    this.marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: this.marker.getTitle()
      });
      infoWindow.open(this.marker.getMap(), this.marker);
    });

   // Adding default marker to map
    this.marker.setMap(this.map);

   // Adding other markers
    this.loadAllMarkers();
  }

  loadAllMarkers(): void {
    this.markers.forEach(markerInfo => {
     // Creating a new marker object
      const marker = new google.maps.Marker({
        ...markerInfo
      });

     // creating a new info window with markers info
      const infoWindow = new google.maps.InfoWindow({
        content: marker.getTitle()
      });

     // Add click event to open info window on marker
      marker.addListener('click', () => {
        infoWindow.open(marker.getMap(), marker);
      });

     // Adding marker to google map
      marker.setMap(this.map);
    });
  }
}
