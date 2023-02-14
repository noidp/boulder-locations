import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { locations } from '../locations';
import { Apollo } from 'apollo-angular';
import { GET_GYMS } from '../graphql/graphql.queries';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
})
export class LocationListComponent implements OnInit, OnDestroy {
  locations = locations;

  loading: boolean;
  gyms: any;

  private querySubscription: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: GET_GYMS,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.gyms = data.gyms;
      });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
