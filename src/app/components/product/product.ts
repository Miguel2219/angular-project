import { Component, Input} from '@angular/core';
import { Suplement } from '../../models/suplement.model'


@Component({
  selector: 'app-product',
  imports: [],
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
