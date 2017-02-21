import { Component, OnInit, Input } from '@angular/core';
import { FeedService } from '../feed-service.service';
import { Feed } from '../model/feed';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {

  private rssUrl: string = environment.rss_mpfa_press;
  private feeds: any;

  constructor(private feedService: FeedService) {

  }

  ngOnInit() {
    this.getFeeds();
  }

  getFeeds() {
    this.feedService.getFeedContent(this.rssUrl)
      .subscribe(
      feed => this.feeds = feed.items,
      error => console.log(error));

  }
}
