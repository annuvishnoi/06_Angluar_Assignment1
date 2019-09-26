import { Component } from '@angular/core';

@Component({
  selector: 'app-personalSummary',
  templateUrl: './personalSummary.component.html',
  styleUrls: ['./personalSummary.component.css']
})
export class PersonalSummaryComponent {
  education_model: any = {};
  education_modelArray : any = [];
  education_index: number = 0;
  

  address_model: any = {};
  address_modelArray : any = [];
  address_index: number = 0;
  onEducationSubmit() {
    this.education_index = this.education_index + 1;
    this.education_model.id = this.education_index;
    console.log(this.education_model);
    let objCopy = Object.assign({}, this.education_model);    
    this.education_modelArray.push(objCopy);
    console.log(this.education_modelArray);
  }
  deleteEducation(id) {
    this.education_modelArray = this.education_modelArray.filter(model => (model.id != id));
  }
  onAddressSubmit() {
    this.address_index = this.address_index + 1;
    this.address_model.id = this.address_index;
    console.log(this.address_model);
    let objCopy = Object.assign({}, this.address_model);    
    this.address_modelArray.push(objCopy);
    console.log(this.address_modelArray);
  }
  deleteAddress(id) {
    this.address_modelArray = this.address_modelArray.filter(model => (model.id != id));
  }
}
