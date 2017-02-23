var Items = React.createClass({
    propTypes: {
      items: React.PropTypes.arrayOf(React.PropTypes.object),
      name: React.PropTypes.string.isRequired
    },

    getInitialState: function getInitialState() {
   return {
     items: this.props.items
   }
 },

 clickHandler: function clickHandler(item) {
   // destroy item
   // this.state.items << remove
 },

    render: function() {
      return (
        <div>
        <h1>{this.props.name}</h1>
        {this.state.items.map(function(item) {
        <Item onClick={clickHandler} {...item} />
          })}
        </div>
      )
    }
  });
