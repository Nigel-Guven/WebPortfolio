import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  // This is the array of photo objects that will populate the gallery.
  // The 'src' paths match the ones you provided.
  photos = [
    { src: 'assets/travel/dragon.jpg', title: 'Last of the Great Dragons', tag: 'Northern Ireland 2024' },
    { src: 'assets/travel/xativa.jpg', title: 'Corrupt popes lived in this mountain castle', tag: 'Xativa 2022' },
    { src: 'assets/travel/kerry.jpg', title: 'Carrauntoohil awaits', tag: 'Kerry 2025' },
    { src: 'assets/travel/porto.jpg', title: 'Bridge over the river Douro', tag: 'Porto 2024' },
    { src: 'assets/travel/flamengos.jpg', title: 'Flamboyance of Flamengos', tag: 'Valencia 2024' },
    { src: 'assets/travel/dubai.jpg', title: 'Dubai from the sea', tag: 'Dubai 2018' },
    { src: 'assets/travel/tomb.jpg', title: 'Tomb of the L\'Empereur', tag: 'Paris 2024' },
    { src: 'assets/travel/mourne.jpg', title: 'Incredible Storm Damage', tag: 'Mourne Mountains 2025' },
    { src: 'assets/travel/durmitor.jpg', title: 'Balkan Switzerland, Montenegro', tag: 'Durmitor 2024' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}