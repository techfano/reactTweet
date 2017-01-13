var React = require('react');
var ReactDOM = require('react-dom');

var ReactClass = React.createClass({
  render: function () {
    return  React.createElement('h1', {className: 'header'}, 'React Component');
  }
});

var reactComponentElement = React.createElement (ReactClass);
var selector = document.getElementById('react-application');
var reactComponent = ReactDOM.render(reactComponentElement, selector);
