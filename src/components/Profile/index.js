import React, { Component } from 'react';
import './Profile.css'

export class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profile: null
    }
  }

  fetchProfile() {
    return fetch('https://api.github.com/users/supreetsingh247').then(response => response.json())
  }

  componentDidMount() {
    this.fetchProfile().then(profileData => {
      this.setState({ profile: profileData });
    })
  }

  render() {
    const { profile } = this.state;
    return profile && (
      <>
        <div className="avatar">
          <img src={profile.avatar_url} alt="" />
        </div>
        <h3 className="name">{profile.name}</h3>
        <p><small>{profile.name}</small></p>
        <p className="bio">{profile.bio}</p>
        <button className='edit-bio'>Edit BIO</button>
        <p className="company">{profile.company}</p>
        <p className="location">{profile.location}</p>
      </>
    )
  }
}

export default Profile
