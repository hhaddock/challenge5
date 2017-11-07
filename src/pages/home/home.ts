import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  assignment = {};
  assignmentList: any[] = [];

  addAssignment() {
    this.assignmentList.push({title: this.assignment.title, class: this.assignment.class, date: this.assignment.date, completed: false});
    console.log(this.assignmentList);
    localStorage.setItem('assignments', JSON.stringify(this.assignmentList));
    alert("Assignment " + this.assignment.title + " has been added!");
    this.assignment.title = "";
    this.assignment.class = "";
    this.assignment.date = "";
    this.getData();
  }

  getData(){
    if(localStorage.getItem('assignments') != null){
      this.assignmentList = JSON.parse(localStorage.getItem('assignments'));
    }
    if(localStorage.getItem('completedAssignments') != null){
      this.completedAssignmentList = JSON.parse(localStorage.getItem('completedAssignments'));
    }
  }

  constructor(public navCtrl: NavController) {
    this.getData();
  }

}
