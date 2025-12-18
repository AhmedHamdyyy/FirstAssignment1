import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {

 selectedItem: any = null;
  
  portfolioItems = [
    { id: 1, title: 'Sample 1', image: 'Sample.webp' },
    { id: 2, title: 'animal-eye-staring 2', image: 'animal-eye-staring.jpg' },
    { id: 3, title: 'lion 3', image: 'lion.jpg' },
    { id: 4, title: 'Sample 4', image: 'Sample.webp' },
    { id: 5, title: 'animal-eye-staring 2', image: 'animal-eye-staring.jpg' },
    { id: 6, title: 'lion 6', image: 'lion.jpg' }
  ];

  openModal(item: any): void {
    this.selectedItem = item;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedItem = null;
    document.body.style.overflow = 'auto';
  }
  
}