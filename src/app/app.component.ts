import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Planet } from './planet.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  results$: Planet[];
  hidden = [];
  isAnyItemClicked: boolean = false;
  clickedItem: string;

  constructor(private svc: DataService) { }

ngOnInit() {
  return this.svc.getPlanets()
    .subscribe(res => {
      this.results$ = res['results'];
      this.results$.sort((a,b) => a.name.localeCompare(b.name)); // sortowanie po nazwie planety
      console.log(this.results$);
    });

}
clickItem(){
     this.isAnyItemClicked = !this.isAnyItemClicked;
}


}
