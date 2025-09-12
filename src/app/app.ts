import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Img } from './components/img/img';
import { FormsModule } from '@angular/forms';
import {Suplement} from './models/suplement.model'
import { Product } from './components/product/product'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Img, FormsModule, Product],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  imgParent='';

  suplements: Suplement[] = [
    
  {
    id: "supl001",
    name: "Whey Protein Isolate",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400"
  },
  {
    id: "supl002", 
    name: "Creatine Monohydrate",
    price: 25.50,
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400"
  },
  {
    id: "supl003",
    name: "BCAA Complex",
    price: 32.75,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400"
  },
  {
    id: "supl004",
    name: "Pre-Workout Energy",
    price: 38.90,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400"
  },
  {
    id: "supl005",
    name: "Omega-3 Fish Oil",
    price: 22.30,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400"
  },
  {
    id: "supl006",
    name: "Multivitamin Complex",
    price: 28.45,
    image: "https://images.unsplash.com/photo-1550572017-edd951b72bdc?w=400"
  },
  {
    id: "supl007",
    name: "Casein Protein",
    price: 42.80,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400"
  },
  {
    id: "supl008",
    name: "Glutamine Powder",
    price: 26.65,
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400"
  },
  {
    id: "supl009",
    name: "Mass Gainer",
    price: 55.20,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400"
  },
  {
    id: "supl010",
    name: "Vitamin D3",
    price: 18.75,
    image: "https://images.unsplash.com/photo-1550572017-edd951b72bdc?w=400"
  }

  ]

  onLoaded(img: string){
    console.log('log padre',img)
  }
}
