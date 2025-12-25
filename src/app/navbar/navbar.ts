import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink , RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  @ViewChild('navbar') navbar !: ElementRef<HTMLDivElement>;
  @HostListener('window:scroll',['$event']) onScrolling(event:any){
  if(window.scrollY > 0){
        this.navbar.nativeElement.classList.add('py-0');
        this.navbar.nativeElement.classList.remove('py-4');
  }else{
        this.navbar.nativeElement.classList.add('py-4');
        this.navbar.nativeElement.classList.remove('py-0');
  }
}

}
