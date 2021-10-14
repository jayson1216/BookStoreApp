import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  id: number = 0;
  authorId: number = 0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParams();
  }

  getParams(): void {
    this.route.params.subscribe((params => {
      this.id = params.id;
      this.authorId = params.authorId;
      console.log(params);
    }));
  }

}
