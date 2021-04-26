import {Component, OnInit, Input} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

  @Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
  })
export class ModalComponent implements OnInit  {
closeResult = '';

@Input() order: any;
@Input() burgers: any;
@Input() steaks: any;
@Input() request: any;

// Aburger='';

constructor(private modalService: NgbModal) {}
ngOnInit(): void {
	// this.Aburger = JSON.parse(this.burgers);
}

returnOrder(){
    this.order = this.burgers + this.steaks + ' ' + this.request;
    // alert(this.order);
	// window.location.reload(); //
  }

open(content: any) {
	this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', windowClass: 'myModal'}).result.then((result) => {
		this.closeResult = `Closed with: ${result}`;
	}, (reason) => {
		this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
	});
}

refreshPage(){
    window.location.reload(); 
}

private getDismissReason(reason: any): string {
	if (reason === ModalDismissReasons.ESC) {
		window.location.reload(); 
		return 'by pressing ESC';
	} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
		window.location.reload(); 
		return 'by clicking on a backdrop';
	} else {
		window.location.reload(); 
		return `with: ${reason}`;
	}

}

// filter JSON arrary
// {"ketchup":false,"mustard":false,"letture":false,"tomato":false,"fos":"fries","size":"small"}

}
