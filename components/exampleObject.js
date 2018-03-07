import PropTypes from 'prop-types';
const React = require('react');
const Component = require('react-pure-render/component');

class ExampleObject extends Component {

  static propTypes = {
    example: PropTypes.string.isRequired,
  };

  render() {
    const { example } = this.props;
    return (
      <div>
        <div>
          <h5>Example object</h5>
        </div>
        <div>
          <pre>{example}</pre>
        </div>
      </div>
    );
  }

}

module.exports = ExampleObject;
