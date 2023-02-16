import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_GYM } from '../graphql/graphql.queries';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '../modal.service';

import { Locations, locations } from '../locations';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss'],
})
export class LocationDetailsComponent implements OnInit {
  boulderingGym: any[];
  loading = true;
  error: any;

  location: Locations | undefined;

  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    // First get the location from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const locationIdFromRoute = routeParams.get('locationId');

    // Find the location that correspond with the id provided in route.
    this.location = locations.find(
      (location) => location.id === locationIdFromRoute
    );

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
        this.loading = result.loading;
        this.error = result.error;
      });
  }

  open() {
    this.modalService.open();
  }
}
