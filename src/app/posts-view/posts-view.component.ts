import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/service/data-service.service';

@Component({
  selector: 'app-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.css']
})
export class PostsViewComponent implements OnInit {

  cardData : any[];

  constructor(
    private service: DataServiceService
    ) { }

  ngOnInit(): void {
    this.setUpData();
  }

  private setUpData() {
    this.service.getPostData().subscribe((resp) => {
      this.cardData = resp;
    })
  }

  cardClicked(x) {
    this.service.setComments(x.id);
  }



}
