import { SiteConf } from 'base';

export default function post(params) {
  
  const post = params.state.Post;
  const state = JSON.stringify(params.state);
  const imageUrl = `${ SiteConf.ImageUrl }${ post.image }`; 
  const postUrl = `${ SiteConf.BlogUrl }/${ post.slug }`;
  
  return `
  <!doctype html>
	<html lang="utf-8">
    <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>${ post.title }</title>
    <meta name="HandheldFriendly" content="True" />
    <meta name="referrer" content="no-referrer-when-downgrade" />
    <meta name="description" content="${ SiteConf.SiteDescription }" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta property="article:modified_time" content="${ post.updated_at }" /> 
    <meta property="article:published_time" content="${ post.created_at }" />
    <link rel="icon" href="assets/images/favicon.ico"/>
    <link rel="canonical" href="${ postUrl }" />
    
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${ post.title }" />
    <meta property="og:site_name" content="${ SiteConf.BlogTitle }" />
    <meta property="og:url" content="${ postUrl }" />
    <meta property="og:image" content="${ imageUrl }" />
    <meta property="og:description" content="${ post.meta_description }" />
    
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${ post.title }" />
    <meta name="twitter:url" content="${ postUrl }" />
    <meta name="twitter:image" content="${ imageUrl }" />
    <meta name="twitter:description" content="${ post.meta_description  }" />
    <meta name="twitter:label1" content="Written by" />
    <meta name="twitter:data1" content="${ SiteConf.Author }" />
    ${ params.style }
    ${ params.vendorScript }
    </head>
    <body>
      <div id="root">${ params.container }</div>
      <script>window.$REACTBASE_STATE = ${ state }</script>
      ${ params.appScript }
    </body>
  </html>
  `;
}