import Controller from '@ember/controller';
import { action } from '@ember/object'

export default class BookCreateController extends Controller {
  @action
  selectAuthor(author) {
    console.log(author)
  }

   @action
   async searchAuthor(query) {
    console.log('test');
    return await this.store.query('author', { filter: { query }});
  }
}
