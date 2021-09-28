import logo from './logo.svg';
import './App.css';
import React from "react";
import axios from 'axios';


class App extends React.Component {
  state = {
    user:{},
    followers: []
  }
  componentDidMount(){
   axios.get('https://api.github.com/users/cammeiners')
      .then(resp=> {
        this.setState({
          ...this.state,
          user: resp.data
        })
        
      })
      axios.get('https://api.github.com/users/cammeiners/followers')
      .then(resp=> {
        this.setState({
          ...this.state,
          followers: resp.data
        })
        
      })
  }

  
  render(){
    return(
      <div className="App">
        <h1>GitHub Usercards!</h1>
        <div className="user1">
        <h2>{this.state.user.login}</h2> 
        <div><img className="pfp" src={this.state.user.avatar_url}/>
          </div>
        <p>Public repositories: {this.state.user.public_repos}</p>
        Followers: {this.state.user.followers}
        </div>
        <h3>Followers</h3>
        {this.state.followers.map(follower => {
          return(<div className='friends'><h4>{follower.login}</h4><div><img className="pfp2" src={follower.avatar_url}/>
          </div></div>)
        })}
      </div>
    )
  }
}

export default App;
