import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Img } from './components/img/img';
import { FormsModule } from '@angular/forms';
import {Products} from './components/products/products'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Img, FormsModule,Products],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  imgParent='';
  showImg=true;
  

  onLoaded(img: string){
    console.log('log padre',img)
  }
  toggleImg(){
    this.showImg=!this.showImg;
  }
}
