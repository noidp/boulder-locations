import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from '../modal.service';
import { Apollo } from 'apollo-angular';
import { DELETE_GYM, DeleteGymResponse } from '../graphql/graphql.queries';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  display$: Observable<'open' | 'close'>;
  id: string = '';
  url = window.location.href;

  constructor(private modalService: ModalService, private apollo: Apollo) {}

  onSubmit(form: NgForm) {
    this.apollo
      .mutate<DeleteGymResponse>({
        mutation: DELETE_GYM,
        variables: {
          id: this.url.split('/')[4],
        },
      })
      .subscribe((response) => {});
  }

  ngOnInit() {
    this.display$ = this.modalService.watch();
  }

  close() {
    this.modalService.close();
  }
}
