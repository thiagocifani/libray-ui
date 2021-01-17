import Route from '@ember/routing/route';

export default class AuthorRoute extends Route {
  queryParams =  {
    search: {
      refreshModel: true
    }
  }

  model({ search }) {
    if(search) {
      // /authors?filter[query]=J
      return this.store.query('author', {
        filter: {
          query: search
        }
      });
    }

    return this.store.findAll('author');
  }
}
