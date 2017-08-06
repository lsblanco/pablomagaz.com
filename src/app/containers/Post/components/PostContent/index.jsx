import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames/bind';
import hljs from 'highlight.js/lib/highlight';
import ReactHtmlParser from 'html-react-parser';
import javascript from 'highlight.js/lib/languages/javascript';

import { SiteConf, context, getDate } from 'base';
import Loading from 'components/Loading';
import PostDate from 'components/PostDate';
import styles from './styles.css';

const propTypes= {
  post: PropTypes.object.isRequired
};

export class PostContent extends Component {

  static proopTypes = {
    post: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props);
  }
  
  componentDidMount() {
    const post = this.props.post;
    this.highlightCode();
  }

   highlightCode() {
    setTimeout(function(){
      hljs.initHighlighting.called = false;
      hljs.registerLanguage('javascript', javascript);
      hljs.initHighlighting();
    }, SiteConf.codeHighlightDelay);
  }

  isLoaded(){
    return !~this.props.post.id ? true : false; 
  }

  render () {
    const post = this.props.post;
    const postLoaded = this.isLoaded(post);
    const content = postLoaded ? <Loading /> : ReactHtmlParser(post.html); 

    const cx = classNames.bind(styles);
    const postContentStyle = cx({
      'postContent': true,
      'postContentAnim': context.client ? true : false
    });

    return (
      <div className={ styles.post }>
        <div className={ postContentStyle }>
          <h1>{ post.title }</h1>
          <span className={ styles.author } >
            { post.author }
          </span>
          <PostDate
            date={ getDate(post.published_at) }
          />
          { content }
        </div>
      </div>
    );
  };
}

export default PostContent;