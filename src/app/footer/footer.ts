import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  @ViewChild('footer') footer !: ElementRef<HTMLDivElement>;
  @HostListener('window:scroll',['$event']) onScrolling(event:any){
  if(window.scrollY > 0){
        this.footer.nativeElement.classList.add('py-0');
        this.footer.nativeElement.classList.remove('pt-2');
  }else{
        this.footer.nativeElement.classList.add('pt-2');
        this.footer.nativeElement.classList.remove('py-0');
  }
}

}
