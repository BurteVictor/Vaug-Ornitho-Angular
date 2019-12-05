import { Component, OnInit } from '@angular/core';
import {Observation} from '../observation';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ObservationService} from '../service/observation.service';
@Component({
  selector: 'app-add-observation',
  templateUrl: './add-observation.component.html',
  styleUrls: ['./add-observation.component.css']
})
export class AddObservationComponent implements OnInit {
  observation: Observation = new Observation();
  uploadForm: FormGroup;
  private baseUrl = 'http://localhost:8080/api';

  constructor(public formBuilder: FormBuilder, private observationService: ObservationService,
              private router: Router, private httpClient: HttpClient) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      birdPicture: ['']
    });
  }
  onFileSelected(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('birdPicture').setValue(file);
    }
  }


  submitForm() {
    const formData = new FormData();

    formData.append('file', this.uploadForm.get('birdPicture').value);

    formData.append('vulgarName', this.observation.vulgarName);
    formData.append('genre', this.observation.genre);
    formData.append('species', this.observation.species);
    formData.append('description', this.observation.description);
    this.httpClient.post(this.baseUrl + '/observations/add', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  gotoList() {
    this.router.navigate(['/listobservations']);
  }
}
