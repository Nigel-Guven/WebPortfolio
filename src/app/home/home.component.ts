import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';
import { HARDCODED_STRINGS } from '../_models/HardcodedStrings';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  HARDCODED_STRINGS = HARDCODED_STRINGS;

  featuredProject = {} as Project;

  constructor(private titleService: Title, private projectservice: ProjectsService) {
    this.titleService.setTitle("Nigel Guven - Home");
  }

  ngOnInit(): void {
    this.featuredProject = this.projectservice.GetFeaturedProjectById(15);
  }
}
