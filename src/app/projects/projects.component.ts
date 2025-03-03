import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/tag';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  
  projects: Project[] = [
    { id: 0, name: "Clever Carpooling", summary: "", description: "", projectLink: "", tags: [Tag.JAVA, Tag.NODEJS, Tag.PYTHON], pictures: [] },
    { id: 1, name: "Scion Car Parts Helper", summary: "", description: "", projectLink: "", tags: [Tag.PYTHON, Tag.CSHARP, Tag.SQL], pictures: [] },
    { id: 2, name: "Currency Converter Microservice", summary: "", description: "", projectLink: "", tags: [Tag.JAVA], pictures: [] },
    { id: 3, name: "Irish Cinema Listings Application", summary: "", description: "", projectLink: "", tags: [Tag.JAVA, Tag.PYTHON], pictures: [] },
    { id: 4, name: "Student Attendance Application", summary: "", description: "", projectLink: "", tags: [Tag.JAVA, Tag.PYTHON, Tag.HTMLCSS], pictures: [] },
    { id: 5, name: "Eirloop", summary: "", description: "", projectLink: "", tags: [Tag.CPLUSPLUS, Tag.SHELL], pictures: [] },
    { id: 6, name: "Etsy Project", summary: "", description: "", projectLink: "", tags: [Tag.ANGULAR, Tag.HTMLCSS, Tag.JAVA], pictures: [] },
    { id: 7, name: "Vehicle.DB", summary: "", description: "", projectLink: "", tags: [Tag.JAVA, Tag.SQL, Tag.ANGULAR], pictures: [] },
    { id: 8, name: "Jenkins CICD Course", summary: "", description: "", projectLink: "", tags: [Tag.ANGULAR, Tag.GROOVY, Tag.SHELL], pictures: [] },
    { id: 9, name: "PhoneNumberFormatterIE", summary: "", description: "", projectLink: "", tags: [Tag.CSHARP], pictures: [] },
    { id: 10, name: "Football League Table Calculator", summary: "", description: "", projectLink: "", tags: [Tag.CSHARP], pictures: [] },
    { id: 11, name: "Roman Numeral Calculator Microservice", summary: "", description: "", projectLink: "", tags: [Tag.CSHARP], pictures: [] },
    { id: 12, name: "College Coursework", summary: "", description: "", projectLink: "", tags: [Tag.CPLUSPLUS, Tag.HTMLCSS, Tag.JAVA, Tag.PYTHON, Tag.SHELL], pictures: [] },
    { id: 13, name: "SOLID Principles", summary: "", description: "", projectLink: "", tags: [Tag.CSHARP], pictures: [] },
    { id: 14, name: "Terraform Course", summary: "", description: "", projectLink: "", tags: [Tag.GOLANG, Tag.GROOVY, Tag.HCL, Tag.RUBY, Tag.SHELL], pictures: [] }

  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle("Nigel Guven - Projects");
  }
}
