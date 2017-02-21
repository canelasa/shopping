var Items = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.items.map(function(item) {
          return (
            <div>
              <h3>{item.name}</h3>
              <h3>{item.sku}</h3>
              <h3>{item.price}</h3>
              <h3>{item.quantity}</h3>
            </div>
          )
        })}
      </div>
    )
  }
});
