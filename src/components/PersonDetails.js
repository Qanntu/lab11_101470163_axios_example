import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PersonDetails() {
    const { userid } = useParams();
    const [user, setUser] = useState(null);
  
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://randomuser.me/api/?results=10`);
        const users = response.data.results;
        setUser(users[userid - 1]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    useEffect(() => {
        fetchUser();
      }, [userid]);
    
      return (
        <div className="container mt-4">
          <h3 className="text-center">Person Details</h3>
          {user ? (
            <div className="card" style={{ backgroundColor: '#00BCD4' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={user.picture.large}
                    className="img-fluid rounded-start"
                    alt={`${user.name.first} ${user.name.last}`}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body text-white">
                    <h5 className="card-title">
                      {user.name.title} {user.name.first} {user.name.last}
                    </h5>
                    <p className="card-text">
                        
                      <strong>User Name:</strong> {user.login.username}<br />
                      <strong>Gender:</strong> {user.gender.toUpperCase()}<br />
                      <strong>Time Zone Description:</strong> {user.location.timezone.description}<br />
                      <strong>Address:</strong>{' '}
                             {`${user.location.street.number} 
                             ${user.location.street.name}, 
                             ${user.location.city}, 
                             ${user.location.state}, 
                             ${user.location.country} - 
                             ${user.location.postcode}`}<br />

                      <strong>Email:</strong> {user.email}<br />

                      <strong>Birth Date and Age:</strong>{' '}
                            {`${new Date(user.dob.date).toLocaleDateString()} (${user.dob.age} years)`}<br />

                      <strong>Phone:</strong> {user.phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center">Loading...</p>
          )}
        </div>
      );
    }