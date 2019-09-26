import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  model: any = {};
  modelArray : any = [];
  index: number = 0;
  
  onSubmit() {
    this.index = this.index + 1;
    this.model.id = this.index;
    console.log(this.model);
    let objCopy = Object.assign({}, this.model);    
    this.modelArray.push(objCopy);
    console.log(this.modelArray);
  }
  delete(id) {
    this.modelArray = this.modelArray.filter(model => (model.id != id));
  }
}
