import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';
import { LanguageTag } from '../_models/LanguageTag';
import { FrameworkTag } from '../_models/FrameworkTag';
import { HARDCODED_STRINGS } from '../_models/HardcodedStrings';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  HARDCODED_STRINGS = HARDCODED_STRINGS;

  allProjects: Project[] = [];
  filteredProjects: Project[] = [];

  availableLanguageTags: LanguageTag[] = [];
  availableFrameworkTags: FrameworkTag[] = [];
  selectedLanguageTags: Set<LanguageTag> = new Set();
  selectedFrameworkTags: Set<FrameworkTag> = new Set();

  isCollapsed: boolean = true; // true = hidden
  isFilterActive: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle("Nigel Guven - Projects");
  }

  ngOnInit(): void {
    this.allProjects = this.projectService.GetProjects();
    this.extractAvailableTags();
    this.filteredProjects = [...this.allProjects];
  }

  extractAvailableTags() {
    const languageTagSet = new Set<LanguageTag>();
    const frameworkTagSet = new Set<FrameworkTag>();

    this.allProjects.forEach(project => {
      project.languageTags.forEach(tag => languageTagSet.add(tag));
      project.frameworkTags.forEach(tag => frameworkTagSet.add(tag));
    });

    this.availableLanguageTags = Array.from(languageTagSet);
    this.availableFrameworkTags = Array.from(frameworkTagSet);
  }

  toggleLanguageTag(tag: LanguageTag) {
    if (this.selectedLanguageTags.has(tag)) this.selectedLanguageTags.delete(tag);
    else this.selectedLanguageTags.add(tag);
    this.applyFilter();
  }

  toggleFrameworkTag(tag: FrameworkTag) {
    if (this.selectedFrameworkTags.has(tag)) this.selectedFrameworkTags.delete(tag);
    else this.selectedFrameworkTags.add(tag);
    this.applyFilter();
  }

  applyFilter() {
    if (this.selectedLanguageTags.size === 0 && this.selectedFrameworkTags.size === 0) {
      this.filteredProjects = [...this.allProjects];
      this.isFilterActive = false;
      return;
    }

    const filteredByLanguage = this.projectService.GetProjectsByLanguageTags(Array.from(this.selectedLanguageTags));
    const filteredByFramework = this.projectService.GetProjectsByFrameworkTags(Array.from(this.selectedFrameworkTags));

    const combined = [...filteredByLanguage, ...filteredByFramework];

    this.filteredProjects = Array.from(new Set(combined.map(p => p.id)))
      .map(id => combined.find(p => p.id === id))
      .filter((p): p is Project => p !== undefined);

    this.isFilterActive = true;
  }

  undoFilter() {
    this.selectedLanguageTags.clear();
    this.selectedFrameworkTags.clear();
    this.applyFilter();
  }
}
