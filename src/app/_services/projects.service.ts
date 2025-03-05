import { Injectable } from '@angular/core';
import { PROJECTS_DATA } from '../_models/ProjectConstants';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = PROJECTS_DATA;

  constructor() { }

  GetProjects(){
    return this.projects
  }

  GetFeaturedProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id === id)

    if (project === undefined)
    {
      throw new TypeError('There is no project that matches the id:' + id);
    }

    return project;
  }

}
