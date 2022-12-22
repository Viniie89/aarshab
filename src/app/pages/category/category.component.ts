import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
 categories=[
  {
    image:"assets/images/category-image1.jpg",
    title:"Everyday nuts - 250",
    cost:"₹ 699"
  },
  {
    image:"assets/images/category-image2.jpg",
    title:"Everyday nuts - 250",
    cost:"₹ 599"
  },
  
  {
    image:"assets/images/category-image1.jpg",
    title:"Everyday nuts - 250",
    cost:"₹ 799"
  },
  {
    image:"assets/images/category-image2.jpg",
    title:"Everyday nuts - 250",
    cost:"₹ 499"

  },
  {
    image:"assets/images/category-image1.jpg",
    title:"Everyday nuts - 250",
    cost:"₹ 699"
  },
  {
    image:"assets/images/category-image2.jpg",
    title:"Everyday nuts - 250",
    cost:"₹ 499"
  },
 ]
}
