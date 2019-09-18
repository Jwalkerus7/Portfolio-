import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {
  model: Message = new Message();
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Submit Successful: ', this.model);
  }
}
