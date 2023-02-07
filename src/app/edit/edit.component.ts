import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Locations, locations } from '../locations';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  location: Locations | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // First get the location from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const locationIdFromRoute = routeParams.get('locationId');

    // Find the location that correspond with the id provided in route.
    this.location = locations.find(
      (location) => location.id === locationIdFromRoute
    );
  }
}
