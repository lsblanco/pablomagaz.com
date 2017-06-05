import { match } from 'react-router';

import { fetchRequiredActions } from 'base';
import routes from '../../src/base/routes';
import renderPage from '../lib/renderPage';
import postNotFound from '../lib/postNotFound';
import renderContainer from '../lib/renderContainer';
import configureServerStore from '../lib/configureStore';

const context = 'server';

export default function routingMiddleware(req, res, next) {

  const store = configureServerStore();

  match({ routes , location: req.url }, (error, redirectLocation, renderProps) => {

    if ( error ) return res.status(500).send( error.message );
    if ( redirectLocation ) return res.redirect( 302, redirectLocation.pathname + redirectLocation.search );
    if ( renderProps == null ) return res.status(404).send( 'Not found' );

    fetchRequiredActions(store.dispatch, renderProps.components, renderProps.params, context)
      .then(() => {
        if(postNotFound(renderProps, store)) return res.status(404).send( 'Not found' );
        const routeMatch = renderProps.location.pathname;
        const renderedContainer = renderContainer(store, renderProps);
        return renderPage(routeMatch, renderedContainer, store );
      })
      .then( page => res.status(200).send(page) )
      .catch( err => res.end(err.message) );
  });
}
