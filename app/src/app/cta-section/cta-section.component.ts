import { Component } from '@angular/core';

@Component({
  selector: 'app-cta-section',
  templateUrl: './cta-section.component.html',
  styleUrls: ['./cta-section.component.css']
})
export class CtaSectionComponent {

  subscritor: string = 'Introduza o seu email';

  limpaTexto():void{
    this.subscritor = "";
  }

  ngOnChanges(){
    console.log("No ngOnChanges")
  }

  ngOnInit(){
    console.log("No ngOnInit")
  }
  ngDoCheck(){
    console.log("No ngDoCheck")
  }
  ngAfterContentInit(){
    console.log("No ngAfterContentInit")
  }
  ngAfterContentChecked(){
    console.log("No ngAfterContentChecked")
  }
  ngAfterViewInit(){
    console.log("No ngAfterViewInit")
  }
  ngAfterViewChecked(){
    console.log("No ngAfterViewChecked")
  }
  ngOnDestroy(){
    console.log("No ngOnDestroy")
  }
}