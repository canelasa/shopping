var Lists = React.createClass({
  render: function() {
    return (
      <div>
      <h1>My shopping lists</h1>
        {this.props.lists.map(function(list) {
          return (
            <div>
              <h3>{list.name}</h3>
              <i>{list.description}</i>
              <Items items = {list.items} />
            </div>

          )
        })}
      </div>
    )
  }
});
