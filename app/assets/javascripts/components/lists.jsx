var Lists = React.createClass({
  getInitialState: function() {
    return {
      appointments: this.props.lists,
      input_name: '',
      input_description: '',
      input_price: '',
      input_quantity: ''
    }
  },

  render: function() {
    return (
      <div>

      {/*<ListForm input_name={this.state.input_name}
      input_description={this.state.input_description}/>*/}
      {/*<h1>My shopping list</h1>*/}
        {this.props.lists.map(function(list) {
          return (
            <div key={list.id}>
            {/*<table className="table table-hover">
              <thead>
                <tr>
                  <th>item</th>
                  <th>SKU#</th>
                  <th>price</th>
                  <th>quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{list.name}</td>
                  <td>{list.description}</td>
                  <td>{list.price}</td>
                  <td>{list.quantity}</td>
                </tr>
              </tbody>
            </table>*/}
            <h4>{list.name}  |
            <i> SKU#:  {list.description} </i> |
            <i> PRICE: ${list.price} </i> |
            <i> QUANTITY:  {list.quantity} </i>
            </h4>
            </div>

          )
        })}
      </div>
    )
  }
});
