import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '../modal.service';

import { Locations, locations } from '../locations';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss'],
})
export class LocationDetailsComponent implements OnInit {
  location: Locations | undefined;

  constructor(
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
  }

  open() {
    this.modalService.open();
  }
}
