import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  model: any = {};
  modelArray : any = [];
  index: number = 0;
  isSubmitted: boolean;
  
  onSubmit() {
    this.index = this.index + 1;
    this.model.id = this.index;
    console.log(this.model);
    let objCopy = Object.assign({}, this.model);    
    this.modelArray.push(objCopy);
    console.log(this.modelArray);
    this.isSubmitted = true;
  }
  delete(id) {
    this.modelArray = this.modelArray.filter(model => (model.id != id));
  }
}