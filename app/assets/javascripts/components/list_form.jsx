var ListForm = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Create a new shopping list</h2>
        <form>
          <input name='name' placeholder='Shopping list name' value={this.props.input_name}/>
          <input name='description' placeholder='grocery list' value={this.props.input_description}/>
          <input type='submit' value='Create' />
        </form>
      </div>
    )
  }
});
