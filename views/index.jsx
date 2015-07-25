var React = require('react');
var Layout = require('./layout');

var Auth = React.createClass({
  render: function() {
    return (
      <Layout>
        <h1>Hello and welcome, { this.props.userEmail }</h1>
        <p><a href="/logout">Log Out</a></p>
      </Layout>
    );
  }
})

var Unauth = React.createClass({
  render: function() {
    return (
      <Layout>
        <h1>Welcome</h1>
        <p><a href="/login">Log In</a></p>
        <p>or</p>
        <p><a href="/signup">Sign Up</a></p>
      </Layout>
    );
  }
})

var Homepage = React.createClass({
  render: function() {
    if(this.props.userEmail) {
      return <Auth {...this.props} />
    } else {
      return <Unauth />
    }
  }
})

module.exports = Homepage;
