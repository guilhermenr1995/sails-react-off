import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Table } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:1337/';

class App extends Component {

  constructor (props) {
		super(props);

		this.state = {
			pageTitle: ''
		};
  }
  
  setPageTitle = (pageTitle) => {
    this.setState({ pageTitle });
  }

  render() {
    return (
      <div className="App"> 
        <Router>
          <div>
            <div className="col-md-3">
              <ul className="nav">
                <li className="nav-item" key="1">
                  <Link to="/users">Usuários</Link>
                </li>
                <li className="nav-item" key="2">
                  <Link to="/providers">Fornecedores</Link>
                </li>
                <li className="nav-item" key="3">
                  <Link to="/products">Produtos</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-9">
              <Route path="/users" component={UsersPage} />
              <Route path="/providers" component={Providers} />
              <Route path="/products" component={Products} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

class CreateGrid extends Component {

  constructor(props) {
    super(props);

    this.state = {};
    this.moduleName = this.props.module;
    this.state[this.moduleName] = {
      objKeys: [],
      data: []
    };
  }

  componentDidMount() {

    let data = {};
    

    axios.get(API_URL + this.moduleName).then(res => {

      let objKeys = [];
        
      if (res.data.length > 0) {
        
        objKeys = Object.keys(res.data[0]);

        objKeys.splice(objKeys.indexOf("id") , 1);
        objKeys.splice(objKeys.indexOf("createdAt") , 1);
        objKeys.splice(objKeys.indexOf("updatedAt") , 1);

        objKeys.unshift("id");
        objKeys.push("createdAt");
        objKeys.push("updatedAt");
      }

      data[this.moduleName] = {
        objKeys: objKeys,
        data: res.data
      };

      this.setState(data);
    });
  }

  render() {
    return (
      <div>

        <h1>{this.props.modtitle}</h1>

        <CreateButton />

        <Table striped bordered condensed hover>
          <thead>
            <tr>
            {this.state[this.moduleName].objKeys.map((item, i) => {
              return (<th key={i}>{item}</th>)
            })}
            </tr>
          </thead>
          <tbody>
            {this.state[this.moduleName].data.map((item, i) => {
              return (
                <tr key={i}>
                  {this.state[this.moduleName].objKeys.map((propName, j) => {
                    return (<td key={j}>{item[propName]}</td>)
                  })}
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

class CreateButton extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/user/create" className="btn btn-primary pull-left" style={{ margin: "15px"}} >Criar Usuário</Link>
      </div>
    );
  }
}


class UsersPage extends Component {

  render() {
    return (
      <div>
        <CreateGrid module="users" modtitle="Usuários" />
      </div>
    );
  }
}

class Providers extends Component {
  render() {
    return (
      <div>
        <CreateGrid module="providers" modtitle="Fornecedores" />
      </div>
    );
  }
}

class Products extends Component {
  render() {
    return (
      <div>
        <CreateGrid module="products" modtitle="Produtos" />
      </div>
    );  
  }
}

export default App;
