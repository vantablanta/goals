import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goals } from 'src/app/goals';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
  @Input () goaldetail! :Goals[]
  @Output () isComplete = new EventEmitter<boolean>()
     
  constructor() { 

  }
  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  ngOnInit(): void {
  }

}


