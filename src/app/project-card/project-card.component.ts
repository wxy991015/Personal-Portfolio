import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../project';
import {
  BsModalRef,
  BsModalService,
  ModalModule,
  ModalOptions,
} from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, ModalModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  @Input() project = {} as Project;
  bsModalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openProjectModal() {
    const modalOptions: ModalOptions = {
      initialState: {
        project: this.project,
      },
    };
    this.bsModalRef = this.modalService.show(ModalComponent, modalOptions);
  }
}
