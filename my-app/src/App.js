import React, { Component } from 'react';
import './App.css';
import ReactTable from "react-table"
import "react-table/react-table.css"
import data from './compare.json';

class App extends Component {

  constructor(props){
    super(props);

    this.state={
        posts:[]
    }

  }

  render() { 
    const columns=[
        {
            Header:"Hotel name",
            accessor:"hotel Name "
        },
        {
            Header :"Reservation",
            accessor:"url_restaurant "
        },
        {
            Header:"chef",
            accessor:"url du chef "
        },
        {
            Header:"hote",
            accessor:"url de l'hote"
        }
    ]


    return (



<ReactTable columns={columns}
    data={data}>
</ReactTable>

    );
  }
}

export default App;
