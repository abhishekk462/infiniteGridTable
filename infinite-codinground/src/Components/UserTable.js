import React from 'react';
import MaterialTable from 'material-table';



class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
  }
  state = {
    loading:false,
    stats: [],
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch('https://reqres.in/api/users?page=1') //data source
        .then(response => response.json())
        .then(res => {
            this.setState({ stats: res.data,loading: false })
        })
        .catch(error => {
            console.log(error)
        })
}
  render() {
    const {stats}=this.state;
    return (
      <React.Fragment>
      <MaterialTable
      title="Infinite data-Grid"
      columns={[
       
        { title: 'Id', field: 'id', sorting: false,filtering: false  },
        { title: 'Email', field: 'email'},
        { title: 'First Name', field: 'first_name' },
        { title: 'Last Name', field: 'last_name',search:false, sorting: false,filtering: false },
        {
          title: 'Avatar',
          field: 'avatar',
          render: rowData => (
            <img
              style={{ height: 36, borderRadius: '50%' }}
              src={rowData.avatar}
            />
          ),
          filtering: false 
        },
      ]}
          data={this.state.stats}
         
          options={{
            filtering: true,
            search:false,
            headerStyle: {
              backgroundColor: 'white',
              color: 'red'
            }}
          }
          
        />
        <br/><br/><br/>
      </React.Fragment>
    )
  }
}
export default UserTable;