import { Component, Input} from '@angular/core';
import { Suplement } from '../../models/suplement.model'
import {Img} from '../img/img'

@Component({
  selector: 'app-product',
  imports: [Img],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class Product {
  @Input() suplement: Suplement = {
    id:'',
    name: '',
    image: '',
    price : 0
  }
}
