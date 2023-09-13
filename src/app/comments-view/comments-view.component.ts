import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/service/data-service.service';

@Component({
  selector: 'app-comments-view',
  templateUrl: './comments-view.component.html',
  styleUrls: ['./comments-view.component.css']
})
export class CommentsViewComponent implements OnInit {

  comments: any[];
  constructor(
    private service: DataServiceService
  ) { }

  ngOnInit(): void {
    this.service.getComments().subscribe((resp)=>{
      if (resp) {
        this.service.getCommentsData(resp).subscribe((x)=>{
          this.comments = x;
        });
      }
    });
  }



}
