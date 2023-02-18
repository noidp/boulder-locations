import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_GYM, EDIT_GYM, EditGymResponse } from '../graphql/graphql.queries';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  boulderingGym: any[];

  id: string = '';
  name: string = '';
  city: string = '';
  score: number;
  createdAt: Date;

  loading = true;
  error: any;

  namePlaceholder: string = '';
  cityPlaceholder: string = '';
  scorePlaceholder: number;
  numbers: Array<any>;

  constructor(private apollo: Apollo, private route: ActivatedRoute) {
    this.numbers = Array(11)
      .fill(11)
      .map((x, i) => i);
  }

  ngOnInit() {
    // First get the location from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const locationIdFromRoute = routeParams.get('locationId');

    this.id = locationIdFromRoute;
    // Apollo
    this.apollo
      .watchQuery({
        query: GET_GYM,
        variables: {
          id: locationIdFromRoute,
        },
      })
      .valueChanges.subscribe((result: any) => {
        this.boulderingGym = result.data.boulderingGym;
        this.namePlaceholder = result.data.boulderingGym.name;
        this.cityPlaceholder = result.data.boulderingGym.city;
        this.scorePlaceholder = result.data.boulderingGym.score;
        this.loading = result.loading;
        this.error = result.error;
      });
  }

  onSubmit(form: NgForm) {
    this.apollo
      .mutate<EditGymResponse>({
        mutation: EDIT_GYM,
        variables: {
          id: this.id,
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
