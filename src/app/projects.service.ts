import { Injectable } from '@angular/core';
import { Project } from './project';
import { Tag } from './tag';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      name: 'OnlineOrder',
      summary: 'A Spring Boot based Online Food Ordering System',
      description:
        'This project is basically an online food ordering system. Users can basically search food items, add new food items into the shopping cart, and place their orders. For the backend, I utilized Spring Boot and Java hosted on AWS RDS. I connect with PostgresQL to store the data of different menus of restaurants. I created a couple of features, such as Registration, Login, LogOut, AddItems, and place orders. For the frontend, I used ReactJS and AntDesign to build main components of the application. We utilized Docker to containerize the database to avoid further configuration. The final application is deployed to AWS. For this project, I used Postman for self-testing, and I also completed unit tests for different functionalities in the application, making sure that all functions can handle different types of requests. This project is architectured with a clear separation of concerns into controller, service, and repository layers, utilizing dependency injection for enhanced maintainability. For this project, I do not connect with payment methods, such as credit card or Paypal that can really allow users to pay the bill.',
      tags: [Tag.SPRING, Tag.POSTGRESQL, Tag.REACT, Tag.AWS],
    },
    {
      id: 1,
      name: 'Around',
      summary: 'A Cloud and React based Social Network',
      description:
        'This project is basically a social network web application with ReactJS. For the backend, I launched a scalable web service in Golang, one of the most popular programming languages and has a very good balance of machine friendly and developer friendly, to handle user posts and utilize ElasticSearch to provide search functions for those posts. There are two main APIs for this web service, upload that enables users to upload a new post and search that enables users to search through existing posts by keywords. For the frontend, I utilized ReactJS and AntDesign to create my components, including Registration, Login, Logout, Upload, and Post. After the completion of the project, I deployed this project to Google Cloud (Google APP Engine).',
      tags: [Tag.JAVA, Tag.REACT, Tag.BOOTSTRAP, Tag.GCP],
    },
    {
      id: 2,
      name: 'NFT',
      summary: 'Price Visualization',
      description:
        'Designed and implemented a social network web application with ReactJS. Launched a scalable web service in Go to handle posts and deployed to Google Cloud (Google App Engine) and used Elasticsearch (deployed to GCP) to provide search functions such that users can search recent posts and list personal posts. Implemented features for users to create and browse posts and support search nearby posts and improved the authentication. Improved the authentication using token-based registration/login/logout flow with React Router v4 and server-side user authentication with JWT',
      tags: [Tag.REACT, Tag.NODEJS],
    },
    {
      id: 3,
      name: 'Personal Portfolio',
      summary: 'Self portfolio of Xiaoyang Wei',
      description: '',
      tags: [Tag.ANGULAR, Tag.BOOTSTRAP],
    },
    {
      id: 4,
      name: 'Spring Angular Full Stack Project',
      summary: 'The first project using both Angular and Spring',
      description: '',
      tags: [Tag.ANGULAR, Tag.SPRING, Tag.POSTGRESQL],
    },
  ];
  constructor() {}

  getProjects() {
    return this.projects;
  }

  getProjectById(id: number): Project {
    let project = this.projects.find((project) => project.id === id);
    if (project === undefined) {
      throw new TypeError('No such project exists');
    }
    return project;
  }
}
