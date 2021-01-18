import Route from '@ember/routing/route';
export default class BookRoute extends Route {
  model() {
    return this.store.findAll('author');
  }
}
