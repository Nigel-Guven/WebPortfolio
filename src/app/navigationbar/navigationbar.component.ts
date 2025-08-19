import { Component, OnInit } from '@angular/core';
import { HARDCODED_STRINGS } from '../_models/HardcodedStrings';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {

  HARDCODED_STRINGS = HARDCODED_STRINGS

  internalLinks = [
    { label: 'Projects', path: '/projects' }
  ];

  githubLink = 'https://github.com/Nigel-Guven';

  constructor() { }

  ngOnInit(): void { }
}
