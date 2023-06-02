import { Component } from '@angular/core';
import { Images } from 'src/app/models/assets.models';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  image:FormControl=new FormControl('');
  modalState=false;

  imageChoose:Images={
    id:0,
    url:""
  }
  sanDiegosimageList:Images[]=[
    {
      id:1,
      url:"../../../assets/image/image_1.jpeg"
    },
    {
      id:2,
      url:"../../../assets/image/image_2.jpeg"
    },
    {
      id:3,
      url:"../../../assets/image/image_3.jpeg"
    },
    {
      id:4,
      url:"../../../assets/image/image_4.jpeg"
    },
    {
      id:5,
      url:"../../../assets/image/image_5.jpeg"
    },
    {
      id:6,
      url:"../../../assets/image/image_6.jpeg"
    },
    {
      id:7,
      url:"../../../assets/image/image_7.jpeg"
    },
    {
      id:8,
      url:"../../../assets/image/image_8.jpeg"
    },
    {
      id:9,
      url:"../../../assets/image/image_9.jpeg"
    },
    {
      id:10,
      url:"../../../assets/image/image_10.jpeg"
    },
    {
      id:11,
      url:"../../../assets/image/image_11.jpeg"
    },
    {
      id:12,
      url:"../../../assets/image/image_12.jpeg"
    }
  ]

  onClickImage(item:Images){
    this.imageChoose=item;
    this.modalState=!this.modalState;
  }

  recivedEvent(event:Event){
    this.modalState=false;
    this.image.reset();
  }

}
