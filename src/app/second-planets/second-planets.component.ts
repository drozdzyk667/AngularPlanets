import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Planet } from './planet.module';

@Component({
  selector: 'app-second-planets',
  templateUrl: './second-planets.component.html',
  styleUrls: ['./second-planets.component.scss']
})
export class SecondPlanetsComponent implements OnInit {
  results$: Planet[];
  hidden = [];
  isAnyItemClicked = false;
  clickedItem: string;
  public search: any = '';
  locked: any[] = [];
  lockFilter;
  query;

  constructor(private svc: DataService) { }

ngOnInit() {
  return this.svc.getPlanets()
    .subscribe(res => {
      this.results$ = res['results'];
      this.results$.sort((a, b) => a.name.localeCompare(b.name)); // sortowanie po nazwie planety
      console.log(this.results$);
    });

}
clickItem(){
     this.isAnyItemClicked = !this.isAnyItemClicked;
}


}
