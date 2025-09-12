import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Img } from './components/img/img';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Img, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  imgParent='';
  
  onLoaded(img: string){
    console.log('log padre',img)
  }
}
