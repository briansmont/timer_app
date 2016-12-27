var React = require('react');

var Clock = React.createClass({
  formatSeconds: function(totalSeconds) {
    var seconds = totalSeconds % 60;
    var minutes = Math.floor(totalSeconds / 60);
    if (seconds < 10) {
      return minutes + ':0' + seconds;
    } else {
      return minutes + ':' + seconds;
    }
  },
  
  render: function() {
    return (
      <div>
        
      </div>
    );
  }
});

module.exports = Clock;