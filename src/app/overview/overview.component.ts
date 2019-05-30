import { Component, OnInit , EventEmitter , Output } from '@angular/core';
import {Post} from './post.model'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  Posts : Post[] = [];

  @Output() postCreated = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  // Posts = [
  //   { title : 'First Post',  content : 'This is the first post content'},
  //   { title : 'Seconf Post', content : 'This is the 2 post content'},
  //   { title : 'Third Post',  content : 'This is the 3 post content'}
  // ]


  onAddPost(form : NgForm) {
    if(form.invalid){
      return null;
    }
    const post : Post = {
      title : form.value.title,
      content : form.value.content
    };
    this.Posts.push(post);
  }

}
