import React, { Component } from 'react';
import './App.css'

class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="">Home</a>
                    </div>
                </nav>
                <div className="container">
                    <div className="text-center">
                        <h1>Task management</h1>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div className="panel panel-warning">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Add task
                                    <span className="text-right glyphicon glyphicon-remove" aria-hidden="true"></span>
                                    </h3>
                                </div>
                                <div className="panel-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Name:</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Status:</label>
                                            <select className="form-control">
                                                <option value="1">Active</option>
                                                <option value="0">Disable</option>
                                            </select>
                                        </div>
                                        <div className="text-center">
                                        <button type="submit" className="btn btn-warning">
                                        <span className="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>&nbsp; 
                                        Save</button>&nbsp; 
                                        <button type="button" className="btn btn-danger">
                                        <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>&nbsp;
                                        Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <button type="button" className="btn btn-primary"> 
                            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>&nbsp;
                            Add task</button>
                            <div className="row mt-15">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div className="input-group">
                                        <input type="search" className="form-control" />
                                        <span className="input-group-btn">
                                        <button className="btn btn-primary" type="button">
                                        <span className="glyphicon glyphicon-search" aria-hidden="true"></span>&nbsp;  
                                        Search</button>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div className="btn-group">
                                      <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                        
                                        Sort &nbsp;
                                        <span className="glyphicon glyphicon-collapse-down" aria-hidden="true"></span>
                                      </button>
                                      <ul className="dropdown-menu">
                                        <li><a href="">Action</a></li>
                                        <li><a href="">Another action</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="">Something else here</a></li>
                                        <li><a href="">Separated link</a></li>
                                      </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <table className="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Name</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td></td>
                                                <td><input type="search" className="form-control" /></td>
                                                <td>
                                                    <select className="form-control">
                                                        <option value="-1">All</option>
                                                        <option value="1">Active</option>
                                                        <option value="0">Disable</option>
                                                    </select>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Study ReactJS</td>
                                                <td>
                                                    <span class="label label-danger">Active</span>
                                                </td>
                                                <td>
                                                    <div className="text-center">
                                                    <button type="button" className="btn btn-warning">
                                                    <span className="glyphicon glyphicon-edit" aria-hidden="true"></span>&nbsp; 
                                                    Edit</button>&nbsp; 
                                                    <button type="button" className="btn btn-danger">
                                                    <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>&nbsp;
                                                    Delete</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
