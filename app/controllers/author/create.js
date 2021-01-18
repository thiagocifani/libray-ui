import Controller from '@ember/controller';
import {action} from '@ember/object'
export default class AuthorCreateController extends Controller {
  @action
  async save(event) {
    event.preventDefault();
    const author = this.store.createRecord('author', this.model);

    await author.save();
    this.transitionToRoute('author');
  }
}
