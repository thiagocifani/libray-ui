import Controller from '@ember/controller';
import { action } from '@ember/object'

export default class BookCreateController extends Controller {
   @action
   async searchAuthor(query) {
    return await this.store.query('author', { filter: { query }});
  }

  @action
  async saveBook(attrs) {

    const book = this.store.createRecord('book', attrs);
    await book.save();

    this.transitionToRoute('book');
  }
}
