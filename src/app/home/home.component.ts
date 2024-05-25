import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../projects.service';
import { Project } from '../project';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  featuredProjects: Project[] = [];
  constructor(
    private titleService: Title,
    private projectService: ProjectsService
  ) {
    this.titleService.setTitle('Xiaoyang Wei - Home');
  }
  ngOnInit(): void {
    this.featuredProjects = this.projectService.getProjects();
  }
}
