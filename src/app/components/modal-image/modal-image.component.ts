import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Images } from 'src/app/models/assets.models';

@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.scss']
})
export class ModalImageComponent {
  @Input() modalState=true;
  @Input() imageChoose:Images={
    id:0,
    url:""
  }
  @Output() sendEvent= new EventEmitter();

  onClickModal(){
    this.modalState=false;
    this.sendEvent.emit(this.modalState);
  }
}

