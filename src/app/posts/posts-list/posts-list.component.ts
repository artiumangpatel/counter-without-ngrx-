import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { appState } from 'src/app/store/app/app.state';
import { getPosts } from 'src/app/store/posts/posts.selector';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
 posts:Observable<Post[]>|undefined;
  constructor(private store:Store<appState>) { }

  ngOnInit(): void {
  this.posts = this.store.select(getPosts);
  }


}
