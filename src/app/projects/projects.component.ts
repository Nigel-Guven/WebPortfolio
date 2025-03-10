import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { PROJECTS_DATA } from '../_models/ProjectConstants';
import { ProjectsService } from '../_services/projects.service';
import { LanguageTag } from '../_models/LanguageTag';
import { FrameworkTag } from '../_models/FrameworkTag';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent  implements OnInit {

  allProjects: Project[] = PROJECTS_DATA;

  filteredProjects: Project[] = [];

  availableLanguageTags: LanguageTag[] = [];
  availableFrameworkTags: FrameworkTag[] = [];
  selectedLanguageTags: Set<LanguageTag> = new Set();
  selectedFrameworkTags: Set<FrameworkTag> = new Set();

  isCollapsed: boolean = true;
  isFilterActive: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle("Nigel Guven - Projects");
  }

  ngOnInit(): void {
    this.allProjects = this.projectService.GetProjects();
    this.extractAvailableTags();
  }

  extractAvailableTags() {
    let languageTagSet = new Set<LanguageTag>();
    let frameworkTagSet = new Set<FrameworkTag>();
    

    this.allProjects.forEach(project => {
      project.languageTags.forEach(languageTag => languageTagSet.add(languageTag));
    });

    this.allProjects.forEach(project => {
      project.frameworkTags.forEach(frameworkTag => frameworkTagSet.add(frameworkTag));
    });

    this.availableLanguageTags = Array.from(languageTagSet);
    this.availableFrameworkTags = Array.from(frameworkTagSet);
  }

  toggleLanguageTag(tag: LanguageTag) {
    if (this.selectedLanguageTags.has(tag)) {
      this.selectedLanguageTags.delete(tag);
    }
    else {
      this.selectedLanguageTags.add(tag);
    }

    this.applyFilter();
  }

  toggleFrameworkTag(tag: FrameworkTag) {
    if (this.selectedFrameworkTags.has(tag)) {
      this.selectedFrameworkTags.delete(tag);
    }
    else {
      this.selectedFrameworkTags.add(tag);
    }

    this.applyFilter();
  }

  applyFilter() {
    if (this.selectedLanguageTags.size === 0 && this.selectedFrameworkTags.size === 0) {
      this.filteredProjects = [...this.allProjects];
      this.isFilterActive = false;
    }
    else {
      let filteredByLanguage = this.projectService.GetProjectsByLanguageTags(
        Array.from(this.selectedLanguageTags));

      let filteredByFramework = this.projectService.GetProjectsByFrameworkTags(
        Array.from(this.selectedFrameworkTags));

      let combinedFilteredProjects = [...filteredByLanguage, ...filteredByFramework];

      this.filteredProjects = Array.from(new Set(combinedFilteredProjects.map(project => project.id)))
        .map(id => combinedFilteredProjects.find(project => project.id === id))
        .filter((project): project is Project => project !== undefined);

      console.log("Filtered Projects:", this.filteredProjects.map(p => p.name));
      this.isFilterActive = true;
    }
  }

  undoFilter() {
    this.selectedLanguageTags.clear();
    this.selectedFrameworkTags.clear();
    this.filteredProjects = [...this.allProjects];
    this.isFilterActive = false;
  }
}
