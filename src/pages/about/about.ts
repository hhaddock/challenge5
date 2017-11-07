import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  assignmentList: any[] = [];
  completedAssignmentList: any[] = [];
  assignment = {};

  getData(){
    if(localStorage.getItem('assignments') != null){
      this.assignmentList = JSON.parse(localStorage.getItem('assignments'));
    }
    if(localStorage.getItem('completedAssignments') != null){
      this.completedAssignmentList = JSON.parse(localStorage.getItem('completedAssignments'));
    }
  }

  delete(title: string, assignment_class: string, date: string){
    for(let i = 0; i < this.completedAssignmentList.length; i++){
      if(this.completedAssignmentList[i].title == title && this.completedAssignmentList[i].class == assignment_class
        && this.completedAssignmentList[i].date == date){
          this.completedAssignmentList.splice(i, 1);
      }
    }
    localStorage.setItem('completedAssignments', JSON.stringify(this.completedAssignmentList));
  }

  undo(title: string, assignment_class: string, date: string){
    this.assignment = {title: title, class: assignment_class, date: date, completed: false};
    this.assignmentList.push(this.assignment);
    localStorage.setItem('assignments', JSON.stringify(this.assignmentList));

    for(let i = 0; i < this.completedAssignmentList.length; i++){
      if(this.completedAssignmentList[i].title == title && this.completedAssignmentList[i].class == assignment_class
        && this.completedAssignmentList[i].date == date){
          this.completedAssignmentList.splice(i, 1);
      }
    }
    localStorage.setItem('completedAssignments', JSON.stringify(this.completedAssignmentList));
  }

  constructor(public navCtrl: NavController) {
    this.getData();
  }

}
