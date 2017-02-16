import React from 'react';

export default React.createClass({

  getQuery: function() {
    return this.refs.search.value;
  },

  render: function() {
    return (
      <form onChange={this.props.search} className="search">
        <input type="text" ref="search" placeholder="Search" />
        <button>Search</button>
      </form>
    );
  }

});
