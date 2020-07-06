import { Component, Input, ViewChild, Output, EventEmitter, ElementRef} from '@angular/core';

@Component({
  selector: 'app-vg-pip',
  templateUrl: './vg-pip.component.html',
  styleUrls: ['./vg-pip.component.scss']
})
export class VgPipComponent{

  @Input()
  source:string=null;

  @Output() onCloseCam: EventEmitter<any> = new EventEmitter();

  constructor() { }

  onClickCam(){
    this.onCloseCam.next();
  }

}
