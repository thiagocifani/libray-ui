import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class BookDetailController extends Controller {

  @action
  async destroy(book) {
    await book.destroyRecord();
    this.transitionToRoute('book.index');
  }
}
