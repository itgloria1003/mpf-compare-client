import {FeedEntry} from './feed-entry';
import {FeedInfo} from './feed-info';
export interface Feed {
    items: FeedEntry[];
    info:FeedInfo;
}
