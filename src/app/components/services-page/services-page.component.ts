import { Component} from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})

export class ServicesPageComponent {
  moreInfo=new FormControl()
}

