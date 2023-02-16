import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // First get the location from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const locationIdFromRoute = routeParams.get('locationId');
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
