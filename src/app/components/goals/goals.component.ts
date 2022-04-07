import { Component, OnInit } from '@angular/core';
import { Goals } from 'src/app/goals';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
  
 
  
  goals: Goals[] = [
    new Goals(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son'),
    new Goals(2,'Buy Cookies','I have to buy cookies for the parrot'),
    new Goals(3,'Get new Phone Case','Diana has her birthday coming up soon'),
    new Goals(4,'Get Dog Food','Pupper likes expensive snacks'),
    new Goals(5,'Solve math homework','Damn Math'),
    new Goals(6,'Plot my world domination plan','Cause I am an evil overlord'),
  ];
  ngOnInit(): void {
  }
 

  index!: number
  // toggleDetails(index: number){
  //   this.goals[index].showDescription = !this.goals[index].showDescription;
  // }

  completeGoal(isComplete: any, index: number){
    if (isComplete) {
      this.goals.splice(index,1);
    }
  }

}
