import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './PersonList.css';


export default class PersonList extends Component{

    constructor(props){
        super(props)
        this.state = {
            persons: [],

        };

    }

   
    componentDidMount() {
        axios
            .get(`https://randomuser.me/api/?results=10`)
            .then(res => {
                console.log(res.data);
                const persons = res.data.results;
                this.setState({ persons });
            })

    }



    render() {
        const { persons, error } = this.state;
    
        return (
          <div className="container">
            <h3 className="user-list-header">User List</h3>
            {persons.length > 0 ? (
              persons.map((person, index) => (
                <div className="card" key={index}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={person.picture.large}className="img-fluid"
                        alt={`${person.name.first} ${person.name.last}`}
                      />
                      <Link to={`/person/${index + 1}`} className="btn btn-primary">
                          Details
                        </Link>

                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">
                          {person.name.title} {person.name.first} {person.name.last}
                        </h5>

                        <p className="card-text">
                          <strong>User Name:</strong> {person.login.username}<br />
                          <strong>Gender:</strong> {person.gender.toUpperCase()}<br />
                          <strong>Time Zone Description:</strong> {person.location.timezone.description}<br />
                          
                          <strong>Address:</strong>{' '}
                                    {`${person.location.street.number} 
                                    ${person.location.street.name}, 
                                    ${person.location.city}, 
                                    ${person.location.state}, 
                                    ${person.location.country} - 
                                    ${person.location.postcode}`}<br />

                          <strong>Email:</strong> {person.email}<br />

                          <strong>Birth Date and Age:</strong>{' '}
                                    {`${new Date(person.dob.date).toLocaleDateString()} (${person.dob.age} years)`}<br />

                          <strong>Register Date:</strong>{' '}
                                    {`${new Date(person.registered.date).toLocaleDateString()} (${person.registered.age} years ago)`}<br />

                          <strong>Phone#:</strong> {person.phone}<br />
                          <strong>Cel#:</strong> {person.cell}
                          
                        </p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">Loading...</p>
            )}
          </div>
        );
      }
    }