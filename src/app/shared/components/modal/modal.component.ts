import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input()
  title: string = '';

  @Input()
  content: string[] = [];

  @Input()
  modalId: string = '';

  constructor() { }

}
