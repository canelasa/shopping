var Lists = React.createClass({
  getInitialState: function() {
    return {
      appointments: this.props.lists,
      input_name: '',
      input_description: ''
    }
  },

  render: function() {
    return (
      <div>

      <ListForm input_name={this.state.input_name}
      input_description={this.state.input_description}/>
      <h1>My shopping lists</h1>
        {this.state.lists.map(function(list) {
          return (
            <div>
              <h3>{list.name}</h3>
              <i>{list.description}</i>

              <Items items={this.props.items} />
            </div>

          )
        })}
      </div>
    )
  }
});
