import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightTextDirective } from '../highlight-text';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, HighlightTextDirective],   // 👈 Added CommonModule
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList {
  products = [
    { name: 'Laptop', price: 1200 },
    { name: 'Phone', price: 800 },
    { name: 'Tablet', price: 1500 }
  ];
}
