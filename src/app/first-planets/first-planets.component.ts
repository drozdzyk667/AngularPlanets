import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Planet } from './planet.module';

@Component({
  selector: 'app-first-planets',
  templateUrl: './first-planets.component.html',
  styleUrls: ['./first-planets.component.scss']
})
export class FirstPlanetsComponent implements OnInit {
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
      // console.log(this.results$.length);
      this.results$.sort((a, b) => a.name.localeCompare(b.name)); // sortowanie po nazwie planety
      console.log(this.results$);
    });

}
clickItem(){
     this.isAnyItemClicked = !this.isAnyItemClicked;
}


}
