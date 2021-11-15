import { Component, OnInit } from '@angular/core';
import { Person } from './person.model';
import { Scene } from './scene.model';

@Component({
  selector: 'app-complex-forms',
  templateUrl: './complex-forms.component.html',
  styleUrls: ['./complex-forms.component.css']
})
export class ComplexFormsComponent implements OnInit {

  scene: Scene = new Scene
  editingPersonIndex: number = -1
  occupationOptions: string[] = ['Dentist','Post Office Worker','Cementer']


  constructor() { }

  ngOnInit(): void {
  }

  onAddPerson() {
    this.scene.people.push(new Person())
  }

  onEditPerson(pos:number) {
    this.editingPersonIndex = pos
    console.log(pos)
  }

  onFinishEditing() {
    this.editingPersonIndex = -1
  }

  onDeletePerson(pos:number) {
    this.scene.people.splice(pos, 1)
  }

}
