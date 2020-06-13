import React, { Component } from 'react'
import './Repos.css';
import SingleRepo from '../SingleRepo';

class Repos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      repos: null,
      filterdRepos: null,
      type: 'all',
      language: 'all',
      searchString: ''
    }
  }

  fetchRepos() {
    return fetch('https://api.github.com/users/supreetsingh247/repos').then(response => response.json())
  }

  componentDidMount() {
    this.fetchRepos().then(repos => {
      this.setState({ repos, filterdRepos: repos });
    })
  }

  handleFilterChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    console.log(name, value);
    if (name === 'searchString') {
      if (value === '') {
        this.setFilterdRepos(this.state.repos);
        return;
      }
      console.log('Repo name filtering')
      const filterdRepos = this.state.repos.filter(repo => repo.name.toLocaleLowerCase().includes(value));
      console.log(filterdRepos)
      this.setFilterdRepos(filterdRepos);
    } else if (name === 'type') {
      if (value === 'all') {
        this.setFilterdRepos(this.state.repos);
        return;
      }
      const filterdRepos = this.state.repos.filter(repo => value === 'public' ? repo['private'] === false : repo[value] === true);
      this.setFilterdRepos(filterdRepos);
    } else if (name === 'language') {
      if (value === 'all') {
        this.setFilterdRepos(this.state.repos);
        return;
      }
      const filterdRepos = this.state.repos.filter(repo => repo['language'] === value);
      this.setFilterdRepos(filterdRepos);
    }
  }

  setFilterdRepos = (repos) => {
    this.setState({ filterdRepos: repos });
  }

  render() {
    const { repos, searchString, filterdRepos, type, language } = this.state;

    return repos && (
      <>
        <div className="filters">
          <input className='form-control' type="text" name='searchString' value={searchString} onChange={this.handleFilterChange} placeholder="Search Repos" />
          <select className='form-control' name="type" id="type" value={type} onChange={this.handleFilterChange}>
            <option value="all">All</option>
            <option value="public">Public</option>
            <option value="private">Private</option>
            <option value="fork">Fork</option>
          </select>
          <select className='form-control' name="language" value={language} id="language" onChange={this.handleFilterChange}>
            <option value="all">All</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
          </select>
          <button className='new-btn'>New</button>
        </div>
        {filterdRepos.map(repo => <SingleRepo key={repo.id} repo={repo} />)}
      </>
    )
  }
}

export default Repos
