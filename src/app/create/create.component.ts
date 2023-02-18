import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
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

  onSubmit(form: NgForm) {
    this.apollo
      .mutate<CreateGymResponse>({
        mutation: ADD_GYM,
        variables: {
          data: {
            name: this.name,
            city: this.city,
            score: Number(this.score),
          },
        },
      })
      .subscribe((response) => {});
  }
}
