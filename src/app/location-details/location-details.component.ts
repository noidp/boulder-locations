import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_GYM } from '../graphql/graphql.queries';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss'],
})
export class LocationDetailsComponent implements OnInit {
  boulderingGym: any[];
  loading = true;
  error: any;

  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    // First get the location from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const locationIdFromRoute = routeParams.get('locationId');

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
