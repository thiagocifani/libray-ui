import Model, { attr, belongsTo} from '@ember-data/model';

export default class BookModel extends Model {
  @attr() title;
  @attr() isbn;
  @attr() publishDate;

  @belongsTo('author') author;
}
