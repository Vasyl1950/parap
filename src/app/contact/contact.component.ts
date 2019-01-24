import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {

  // google maps zoom level
  zoom: number = 15;

  // initial center position for the map
  lat: number =  48.63738826;
  lng: number = 24.57605509;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  markers: marker[] = [
	  {
		  lat:48.63738826,
		  lng: 24.57605509,
		  label: 'Y',
		  draggable: true,

	  }, 
  ]
}


interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
