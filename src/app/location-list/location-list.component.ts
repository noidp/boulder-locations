import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_GYMS } from '../graphql/graphql.queries';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
})
export class LocationListComponent implements OnInit {
  boulderingGyms: any[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: GET_GYMS,
      })
      .valueChanges.subscribe((result: any) => {
        this.boulderingGyms = result.data.boulderingGyms;
        this.loading = result.loading;
        this.error = result.error;
      });
  }
}
