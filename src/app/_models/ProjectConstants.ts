import { Project } from "./Project";
import { Tag } from "./tag";

export const PROJECTS_DATA: Project[] = [
    { 
        id: 0, 
        name: "Clever Carpooling", 
        summary: "A smart carpooling system to optimize ride-sharing in Ireland and Northern Ireland.", 
        description: "An Android application I developed in my final year as a contributory project. Frontend and Backend written in Java, with support from Python scripts to scrape vehicle information and Node.JS for sending notifications. Firebase infrastructure on the Blaze plan provided me with access to ML Kit for OCR and Database functionality aswell as Cloud Functions for sending mobile notifications.", 
        projectLink: "", 
        tags: [Tag.JAVA, Tag.NODEJS, Tag.PYTHON], 
        pictures: 
        [
          "../../assets/clever_carpool.png",
          "../../assets/android_ui.png",
          "../../assets/android_ui_2.png"
        ] 
    },
    { 
        id: 1, 
        name: "Scion Car Parts Helper", 
        summary: "A hobby application that I created to find the best price for GT86 car parts.", 
        description: "A tool to aid customers in purchasing car parts for the 86 Platform (Toyota GT86, Scion FRS, Subaru BRZ). Using Python Scripts to web scrape products from both EU and US e-commerce websites, SQL to store up-to-date information on pricing and availability. C# utilized for the backend alongside a simple website to display car parts from all sites in a single space.", 
        projectLink: "", 
        tags: [Tag.PYTHON, Tag.CSHARP, Tag.SQL], 
        pictures: [] 
    },
    { 
        id: 2, 
        name: "Microservice - Currency Converter", 
        summary: "A microservice for real-time currency conversion using real-time CurrencyFreaks Forex API.", 
        description: "This microservice fetches live exchange rates and allows seamless currency conversion through a REST API. I connected to the free CurrencyFreaks API's.", 
        projectLink: "", 
        tags: [Tag.JAVA], 
        pictures: [] 
      },
      { 
        id: 3, 
        name: "Irish Cinema Listings Mobile Application", 
        summary: "A web application for Irish cinema schedules.", 
        description: "This project aggregates cinema listings from multiple sources, providing users with up-to-date movie schedules and booking options. Java tools were used to scrape cinema listings information from all Irish cinemas and display them in a functional application, allowing users to view upcoming films.", 
        projectLink: "", 
        tags: [Tag.JAVA, Tag.PYTHON], 
        pictures: [] 
      },
      { 
        id: 4, 
        name: "Student Attendance Application", 
        summary: "An application for managing student attendance.", 
        description: "This application allows teachers to record and track student attendance efficiently, with automated report generation. It was to be designed as an aid for my mentor and lecturer in DCU who wished to have an application that could be used to enlist student attendance. Students would scan their cards on the lecturers mobile application which could be checked against the full list of students enrolled in a module. If students had attended without their cards, they could be logged in manually.", 
        projectLink: "", 
        tags: [Tag.JAVA, Tag.PYTHON, Tag.HTMLCSS], 
        pictures: [] 
      },
      { 
        id: 5, 
        name: "Eirloop", 
        summary: "A high-speed transportation project.", 
        description: "Eirloop is a Hyperloop competition project focused on developing efficient high-speed transport pods. I aided in the development of the UI for the hyperloop pod using JAVA and to configure our backend systems to communicate with pod, I gained some experience in C++.", 
        projectLink: "", 
        tags: [Tag.CPLUSPLUS, Tag.SHELL, Tag.JAVA], 
        pictures: [] 
      },
      { 
        id: 6, 
        name: "Etsy Project", 
        summary: "An Angular-based Etsy project, as part of an interview.", 
        description: "This project integrates Etsy’s API, allowing users to browse and manage their shop and product listings efficiently.", 
        projectLink: "", 
        tags: [Tag.ANGULAR, Tag.HTMLCSS, Tag.JAVA], 
        pictures: [] 
      },
      { 
        id: 7, 
        name: "Vehicle.DB", 
        summary: "A database system for vehicle records.", 
        description: "This application manages vehicle records. By using the Postman API, I could add a vehicle object via Postman to a SQL Server database to store records.", 
        projectLink: "", 
        tags: [Tag.JAVA, Tag.SQL, Tag.ANGULAR], 
        pictures: [] 
      },
      { 
        id: 8, 
        name: "Jenkins CICD Course", 
        summary: "A course on Jenkins and CI/CD practices.", 
        description: "This project was associated to a Udemy course I took part in, which is a structured learning resource for understanding Jenkins automation, pipelines, and CI/CD workflows.", 
        projectLink: "", 
        tags: [Tag.ANGULAR, Tag.GROOVY, Tag.SHELL], 
        pictures: [] 
      },
      { 
        id: 9, 
        name: "PhoneNumberFormatterIE", 
        summary: "A phone number formatting tool for Ireland.", 
        description: "This tool formats and validates Irish phone numbers to ensure compliance with national standards. I completed this as part of my initial interview for LetsGetChecked.", 
        projectLink: "", 
        tags: [Tag.CSHARP], 
        pictures: [] 
      },
      { 
        id: 10, 
        name: "Football League Table Calculator", 
        summary: "A tool for calculating football league tables.", 
        description: "This application takes match results from local JSON storage and generates up-to-date league tables with points, goal differences, and rankings.", 
        projectLink: "", 
        tags: [Tag.CSHARP], 
        pictures: [] 
      },
      { 
        id: 11, 
        name: "Microservice - Roman Numeral Calculator", 
        summary: "A microservice for Roman numeral calculations.", 
        description: "This REST API microservice converts between Roman numerals and standard numbers, supporting mathematical operations. I developed it to help me gain exposure to microservices architectures and algorithms with C#.", 
        projectLink: "", 
        tags: [Tag.CSHARP], 
        pictures: [] 
      },
      { 
        id: 12, 
        name: "College Coursework", 
        summary: "A collection of academic programming projects.", 
        description: "This repository includes various programming assignments and projects covering C++, Java, Python, and web development in my time at DCU enrolled in Computer Applications and Software Engineering.", 
        projectLink: "", 
        tags: [Tag.CPLUSPLUS, Tag.HTMLCSS, Tag.JAVA, Tag.PYTHON, Tag.SHELL], 
        pictures: [] 
      },
      { 
        id: 13, 
        name: "SOLID Principles", 
        summary: "A project demonstrating SOLID software principles.", 
        description: "This project showcases examples of how to implement SOLID object-oriented design principles in C#.", 
        projectLink: "", 
        tags: [Tag.CSHARP], 
        pictures: [] 
      },
      { 
        id: 14, 
        name: "Terraform Course", 
        summary: "A course on Terraform and infrastructure as code.", 
        description: "This structured course teaches how to use Terraform to provision cloud infrastructure, covering HCL, Groovy, Ruby, and Shell scripting. This was developed alongside my mentor in LetsGetChecked and following the Terraform: Up and Running guide.", 
        projectLink: "", 
        tags: [Tag.GOLANG, Tag.GROOVY, Tag.HCL, Tag.RUBY, Tag.SHELL], 
        pictures: [] 
      }

]