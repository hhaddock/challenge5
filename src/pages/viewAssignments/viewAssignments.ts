import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-ViewAssignments',
  templateUrl: 'viewAssignments.html'
})
export class ViewAssignments {

  assignmentList: any[] = []
  completedAssignmentList: any[] = []
  completedAssignment = {}

  getData(){
    if(localStorage.getItem('assignments') != null){
      this.assignmentList = JSON.parse(localStorage.getItem('assignments'));
    }
    if(localStorage.getItem('completedAssignments') != null){
      this.completedAssignmentList = JSON.parse(localStorage.getItem('completedAssignments'));
    }
  }

  completeAssignment(title: string, assignment_class: string, date: string){
    this.completedAssignment = {title: title, class: assignment_class, date: date, completed: true};
    this.completedAssignmentList.push(this.completedAssignment);
    localStorage.setItem('completedAssignments', JSON.stringify(this.completedAssignmentList));

    for(let i = 0; i < this.assignmentList.length; i++){
      if(this.assignmentList[i].title == title && this.assignmentList[i].class == assignment_class
         && this.assignmentList[i].date == date){
        this.assignmentList.splice(i, 1);
      }
    }
    localStorage.setItem('assignments', JSON.stringify(this.assignmentList));
  }

  reloadData(refresher) {
    console.log('Begin async operation', refresher);
    this.getData();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  constructor(public navCtrl: NavController) {
    this.getData();
  }
}
