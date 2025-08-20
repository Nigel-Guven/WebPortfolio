import { Component } from '@angular/core';
import { HARDCODED_STRINGS } from '../_models/HardcodedStrings';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  HARDCODED_STRINGS = HARDCODED_STRINGS;
}
