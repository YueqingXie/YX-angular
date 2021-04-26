import { Component, OnInit, Output, EventEmitter } from '@angular/core'; //
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-steak',
  templateUrl: './steak.component.html',
  styleUrls: ['./steak.component.css']
})

export class SteakComponent implements OnInit {
  steakForm = this.fb.group({
    done: new FormControl('rare'),

    sop: new FormControl('salad'),
  });

  saladForm = this.fb.group({
    dressing: new FormControl('caesar'),
  });

  potatoForm = this.fb.group({
    nop: new FormControl('1', [Validators.required, Validators.pattern("^[1-5]*$")]),
  });

  doneness: string[] = ['rare', 'medium', 'well done'];
  dressings: string[] = ['caesar', 'balsamic'];
  steaks = '';
  sops: string[] = ['salad', 'baked potatoes'];

  @Output() parentFunction2: EventEmitter<any> = new EventEmitter<any>(); //

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {}

  // check current sop (salad or baked potatoes)
  public currentsop = "salad";
  selectsop(val : any) {
    this.currentsop = val.target.value;
  }

  // add one steak
  onSubmit() {
    Swal.fire('Added one steak!');
    console.log('steak', this.steakForm.value);
    // this.steaks += JSON.stringify(this.steakForm.getRawValue());
    if (this.currentsop === "salad"){
      this.steaks += JSON.stringify(Object.assign(this.steakForm.getRawValue(), this.saladForm.getRawValue()));
    }
    else if (this.currentsop === "baked potatoes"){
      this.steaks += JSON.stringify(Object.assign(this.steakForm.getRawValue(), this.potatoForm.getRawValue()));
    }
    this.parentFunction2.emit(this.steaks); //
  }

}
