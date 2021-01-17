import Controller from '@ember/controller';
import { action} from '@ember/object'

export default class AuthorEditController extends Controller {

  @action
  async saveAuthor(formValues) {
    this.model.setProperties(formValues);

    await this.model.save();
    this.transitionToRoute('author');
  }
}
