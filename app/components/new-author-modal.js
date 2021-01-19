import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class NewAuthorModalComponent extends Component {
  @service store;
  author = {
    first: '',
    last: ''
  }
  @tracked showModal;

  @action
  toggleModal(value) {
    this.showModal = value;
  }

  @action
  async save(event) {
    event.preventDefault();

    let author = this.store.createRecord('author', this.author);
    await author.save();

    this.showModal = false;
    this.args.onsave(author);
  }
}
