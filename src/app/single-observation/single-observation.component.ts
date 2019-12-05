import { Component, OnInit } from '@angular/core';
import {Observation} from '../observation';
import {ObservationService} from '../service/observation.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-single-observation',
  templateUrl: './single-observation.component.html',
  styleUrls: ['./single-observation.component.css']
})
export class SingleObservationComponent implements OnInit {
  observation: Observation;
  id: number;
  constructor(private observationService: ObservationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.reloadData();
  }

  reloadData() {
    this.observationService.getSingleObs(this.id)
      .subscribe(
        data => {
          this.observation = data;
          console.log(data);
        },
        e => console.log(e));
  }

}
