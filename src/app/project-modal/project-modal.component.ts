import { Component } from '@angular/core';
import { BsModalRef} from 'ngx-bootstrap/modal';
import { Project } from '../_models/Project';
import { HARDCODED_STRINGS } from '../_models/HardcodedStrings';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent {
  HARDCODED_STRINGS = HARDCODED_STRINGS;
  project = {} as Project;

  constructor (public bsModalReference: BsModalRef){

  }

}
