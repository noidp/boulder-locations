import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { v4 as uuid } from 'uuid';
import { ADD_GYM, CreateGymResponse } from '../graphql/graphql.queries';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  id: string = '';
  name: string = '';
  city: string = '';
  score: number;
  createdAt: Date;

  constructor(private apollo: Apollo) {}

  ngOnInit() {}

  createGym() {
    // ... you'll implement this in a bit
  }

  onSubmit(form: NgForm) {
    this.apollo
      .mutate<CreateGymResponse>({
        mutation: ADD_GYM,
        variables: {
          data: {
            name: this.name,
            city: this.city,
            score: this.score,
          },
        },
      })
      .subscribe((response) => {});
  }
}
