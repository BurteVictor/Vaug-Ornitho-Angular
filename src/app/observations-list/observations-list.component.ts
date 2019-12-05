import { Component, OnInit } from '@angular/core';
import {Observation} from '../observation';
import {ObservationService} from '../service/observation.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-observations-list',
  templateUrl: './observations-list.component.html',
  styleUrls: ['./observations-list.component.css']
})
export class ObservationsListComponent implements OnInit {
  observations: Observation[];
  filter: string;
  constructor(private observationService: ObservationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    if (this.filter == null) {
      this.observationService.getObservationList()
        .subscribe(
          data => {
            this.observations = data;
          },
          e => console.log(e));
    }
  }
}
