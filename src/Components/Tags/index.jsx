import React, { Component } from 'react';
import './Tags.css';

class Tags extends Component {
   render() {
      const { tags } = this.props;
      return tags.map((tag) => (
         <span key={tag} className="tag">
            {tag}
         </span>
      ));
   }
}

export default Tags;
