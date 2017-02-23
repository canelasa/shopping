var Item = React.createClass({

  render: function() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <h3>{this.props.sku}</h3>
        <h3>{this.props.price}</h3>
        <h3>{this.props.quantity}</h3>
      </div>
    )
  }
});
