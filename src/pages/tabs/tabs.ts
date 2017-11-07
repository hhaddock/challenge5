import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { ViewAssignments } from '../viewAssignments/viewAssignments';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab3Root = ViewAssignments;
  tab2Root = AboutPage;

  constructor() {

  }
}
