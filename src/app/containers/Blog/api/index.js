import fetch from 'isomorphic-fetch';

import { getPostListWithOpening, SiteConf } from 'base';
import { PostListModel, PaginationModel } from '../models/';

export default {

  fetchPosts(params) {
    const query = params ? `&page=${params}` : `&page=1`;
    return fetch(`${SiteConf.postsApi}${query}`)
      .then(req => req.json())
      .then(payload => ({
        pagination: new PaginationModel(payload.meta.pagination),
        posts: getPostListWithOpening(payload.posts, PostListModel)
      }))
      .catch(err => console.log(err));
  },

};
