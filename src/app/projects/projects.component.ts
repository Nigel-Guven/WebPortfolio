import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { PROJECTS_DATA } from '../_models/ProjectConstants';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent  implements OnInit {
  
  projects: Project[] = PROJECTS_DATA;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle("Nigel Guven - Projects");


  }

  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
}
