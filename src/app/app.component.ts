import { Component } from '@angular/core';

export interface ICamera{
    source: string;
    name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'videogular2-pip-ng';
  masterVideo: string = '../assets/NASA Rocket Launch.mp4';

  selectedCamera: string = null;
  cameras: Array <ICamera> = [
    {source: '../assets/NASA Rocket Launch.mp4', name: 'cam2'},
    {source: '../assets/NASA Rocket Launch.mp4', name: 'cam3'}
  ];

  constructor() {
    
  }

  onSelectCamera(camera:ICamera){
    this.selectedCamera = camera.source;
  }

}
