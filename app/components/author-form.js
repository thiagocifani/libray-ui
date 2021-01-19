import Component from '@glimmer/component';
import { action} from '@ember/object'
import { tracked } from '@glimmer/tracking';

export default class AuthorFormComponent extends Component {
  @tracked first = this.args.author.first;
  @tracked last = this.args.author.last;

  @action
  submitChanges(ev) {
    ev.preventDefault();

    this.args.onsubmit({
      first: this.first,
      last: this.last
    })
  }
}
