import Component from '@glimmer/component';
import { action} from '@ember/object'
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';


export default class BookFormComponent extends Component {
  @service store;

  @tracked title = this.args.book.title;
  @tracked isbn = this.args.book.isbn;
  @tracked publishDate = this.args.book.publishDate;
  @tracked author = this.args.book.author;

  @action
  submitChanges(ev) {
    ev.preventDefault();

    this.args.onsubmit({
      title: this.title,
      isbn: this.isbn,
      publishDate: this.publishDate,
      author: this.author
    })
  }

  @action
  async searchAuthor(query) {
    return this.store.query('author', {filter: { query}});
  }
}
