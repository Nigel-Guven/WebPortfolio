import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent {
  
  constructor(private titleService: Title) {
    this.titleService.setTitle("Nigel Guven - About Me");
  }
}
