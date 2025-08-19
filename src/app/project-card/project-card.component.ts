import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';
import { HARDCODED_STRINGS } from '../_models/HardcodedStrings';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {

  HARDCODED_STRINGS = HARDCODED_STRINGS;
  @Input() project = {} as Project;

  bsModalReference?: BsModalRef;
  
  constructor(private modalService: BsModalService){

  }

  OpenProjectModal() {

    const modalOptions: ModalOptions = {
      class: "modal-lg",
      initialState: {
        project: this.project
      }
    };

    this.bsModalReference = this.modalService.show(ProjectModalComponent, modalOptions);
  }

}
