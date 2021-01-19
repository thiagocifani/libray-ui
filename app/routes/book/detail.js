import Route from '@ember/routing/route';

export default class BookDetailRoute extends Route {
  model({ id }) {
    console.log(id)
    return this.store.findRecord('book', id);
  }
}
