var React = require('react');
var Layout = require('./layout');

var Signup = React.createClass({
  render: function() {
    return(
      <Layout>
        <div className="signup">
          <div className="container">
            <h1>Signup</h1>
            <form action="/signup" method="POST">

              <div className="form-group">
                <label>User Name</label>
                <input type="email" class="form-control" name="userEmail" placeholder="Email"/>
              </div>

              <div className="form-group">
                <select name="userGender">
                  <option value="true">Male</option>
                  <option value="false">Female</option>
                </select>
              </div>

              <button type="submit" class="btn btn-default">Submit</button>

            </form>
           </div>
        </div>
      </Layout>
    )
  }
})

module.exports = Signup;
