import { Component, OnInit, Output, EventEmitter } from '@angular/core'; //
import { FormBuilder, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})

export class BurgerComponent implements OnInit {
  burgerForm = this.fb.group({
    ketchup: new FormControl(false),
    mustard: new FormControl(false),
    letture: new FormControl(false),
    tomato: new FormControl(false),

    fos: new FormControl('fries'),
  });


  friesForm = this.fb.group({
    size: new FormControl('small'),
  });

  saladForm = this.fb.group({
    dressing: new FormControl('caesar'),
  });

  sizes: string[] = ['small', 'large'];
  dressings: string[] = ['caesar', 'balsamic'];
  burgers = '';
  foss: string[] = ['fries', 'salad'];

  @Output() parentFunction1: EventEmitter<any> = new EventEmitter<any>(); //


  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {}

  // check current fos (fries or salad)
  public currentfos = "fries";
  selectfos(val : any) {
    this.currentfos = val.target.value;
  }



  // add one burger
  onSubmit() {
    Swal.fire('Added one burger!');

    if (this.currentfos === "fries"){
      this.burgers += JSON.stringify(Object.assign(this.burgerForm.getRawValue(), this.friesForm.getRawValue()));
    }
    else if (this.currentfos === "salad"){
      console.log('salad');
      this.burgers += JSON.stringify(Object.assign(this.burgerForm.getRawValue(), this.saladForm.getRawValue()));
    }
    this.parentFunction1.emit(this.burgers); // pass data to parent
  }

}

