import { Injectable } from '@angular/core';
import { PROJECTS_DATA } from '../_models/ProjectConstants';
import { Project } from '../_models/Project';
import { LanguageTag } from '../_models/LanguageTag';
import { FrameworkTag } from '../_models/FrameworkTag';

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

  GetProjectsByLanguageTags(filterLanguageTags: LanguageTag[]): Project [] {
    if (filterLanguageTags.length === 0) {
      return this.projects;
    } 

    console.log("Filter Language Tags:", filterLanguageTags);

    return this.projects.filter( project => 
      project.languageTags.some(projectTag => 
        filterLanguageTags.some(tag => projectTag.equals(tag))));  
  }

  GetProjectsByFrameworkTags(filterFrameworkTags: FrameworkTag[]): Project [] {
    if (filterFrameworkTags.length === 0) {
      return this.projects;
    } 

    console.log("Filter Framework Tags:", filterFrameworkTags);

    return this.projects.filter( project => 
      project.frameworkTags.some(projectTag => 
        filterFrameworkTags.some(frameworkTag => projectTag.equals(frameworkTag))));  
  }

}
