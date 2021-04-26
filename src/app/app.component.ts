import { Component, ViewChild } from '@angular/core';

export type EditorType = 'burger' | 'steak';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yx-angular';
  
  burgers = ''; //
  steaks = '';
  request = '';
  order = '';

  editor: EditorType = 'burger';

  // pass modal.component.ts method to app.component.ts
  // @ViewChild('ch') ChildComponent: any;
  // getChildMethod(content: any) {
  //   this.ChildComponent.open(content);
  // }

  get showBurgerEditor() {
    return this.editor === 'burger';
  }

  get showSteakEditor() {
    return this.editor === 'steak';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }

  parentFunction1(data: any){
    console.log(data);
    this.burgers = data; //
  }
  parentFunction2(data: any){
    console.log(data);
    this.steaks = data; //
  }

  statusBurger: boolean = true;
  statusSteak: boolean = false;
  showBurger(){
    this.statusBurger = true; 
    this.statusSteak = false;   
  }
  showSteak(){  
    this.statusBurger = false;
    this.statusSteak = true;  
  }

  returnOrder(){
    this.order = this.burgers + this.steaks + ' ' + this.request;
    alert(this.order);
    // window.location.reload(); //
  }

}
