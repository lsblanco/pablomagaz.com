import env from '../shared/Env';

const Author = 'Pablo Magaz';
const SiteTitle = Author; 
const SiteDescription = Author;
const BlogTitle = 'El Blog Isomórfico';
const BlogDescription = 'JavaScript, programaci&oacute;n y mas';
const numPosts = 10;
const blogImage = 'assets/images/postcover/blog.svg';
const postOpeningChars= 46;
const codeHighlightDelay = 350;
const postOpeningSplitChar = '</h2>';
const GoogleAnaliticsId = 'aaaaa';
const DisqusSettins = {
  shortName: 'el-blog-isomorfico'
};

const addThisUrl = 'http://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-59c0d1b1697ac737';

const socialLinks = {
  linkedIn: 'https://es.linkedin.com/in/pablo-magaz-05b46763',
  twitter: 'https://twitter.com/pablo_magaz',
  gmail: 'magazpablo@gmail.com',
  github: 'https://github.com/pmagaz'
};

let HostName;
let ServerUrl;
let SiteUrl;
let BlogUrl;
let GhostUrl;
let ImageUrl;
let BaseApiUrl;
let PostsApiUrl;
let clientSecret;
let PostApiUrl;
let PostsApi;
let PostApi;
let ContentPath;
let Ssl;
let Protocol;
let uniqueImagePath;

if (env === 'development') {
  Ssl = false;
  Protocol = Ssl ? 'https://' : 'http://';
  HostName = 'localhost:8000';
  ServerUrl = `http://${ HostName }`;
  SiteUrl = `${ ServerUrl }`;
  clientSecret = '8628165087ba';
  BlogUrl = `${ SiteUrl }/blog`;
  GhostUrl = 'http://localhost:2368'; 
  //BlogUrl = `${ SiteUrl }/blog/`;
  ImageUrl = GhostUrl;
  ContentPath = '/Users/Pablo/js/ghost/content';
  BaseApiUrl = `${ GhostUrl }/ghost/api/v0.1/`;
  PostApiUrl = `${Protocol}${ HostName }/api/post/`;
  PostsApiUrl = `${Protocol}${ HostName }/api/posts/`;
  PostsApi = `${ BaseApiUrl }posts/?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags&fields=id,uuid,title,slug,html,image,feature_image,tags,updated_at,updated_at,published_at&order=published_at desc&limit=${numPosts}`;
  PostApi = `${ BaseApiUrl }posts/slug/:slug/?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags`;
} else {
  Ssl = false;
  Protocol = Ssl ? 'https://' : 'http://';
  HostName = '172.104.136.180';
  ServerUrl = `http://${ HostName }`;
  SiteUrl = `${ ServerUrl }`;
  clientSecret = '113542417eed';
  BlogUrl = `${ SiteUrl }/blog`;
  GhostUrl = 'http://localhost:2369'; 
  ImageUrl = `${Protocol}${ HostName }`;
  ContentPath = '/var/www/ghost/content';
  BaseApiUrl = `${ GhostUrl }/ghost/api/v0.1/`;
  PostApiUrl = `${Protocol}${ HostName }/api/post/`;
  PostsApiUrl = `${Protocol}${ HostName }/api/posts/`;
  PostsApi = `${ BaseApiUrl }posts/?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags&fields=id,uuid,title,slug,html,image,feature_image,tags,updated_at,updated_at,published_at&order=published_at desc&limit=${numPosts}`;
  PostApi = `${ BaseApiUrl }posts/slug/:slug/?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags`;
  uniqueImagePath = '/assets/images/postcovers';
} 

export const SiteConf = { ServerUrl, Author, SiteTitle, SiteUrl, BlogDescription, BlogTitle, BlogUrl, blogImage, SiteDescription, ImageUrl, ContentPath, PostApi, PostsApi, PostApiUrl, PostsApiUrl, postOpeningChars, postOpeningSplitChar, codeHighlightDelay, GoogleAnaliticsId, Ssl, uniqueImagePath, socialLinks, DisqusSettins, addThisUrl };