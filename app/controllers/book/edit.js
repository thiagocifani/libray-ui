import Controller from '@ember/controller';
import { action} from '@ember/object'

export default class BookEditController extends Controller {
  @action
  async saveBook(formValues) {

    console.log(formValues)
    this.model.setProperties(formValues);

    await this.model.save();
    this.transitionToRoute('book');
  }
}

