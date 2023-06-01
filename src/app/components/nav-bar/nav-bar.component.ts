import { Component} from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent{

  navState:boolean =false

  onClickNavState(){
    this.navState=!this.navState
  }
  onClickCloseNav(){
    this.navState=false
  }
}
