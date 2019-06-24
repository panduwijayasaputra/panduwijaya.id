import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [fadeAnimation]
})
export class AppComponent {
  // title = 'bpjs-presentation';

}
