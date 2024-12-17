import React,{ useState } from 'react';
import axios from 'axios';
import './App.css'
import SearchForm from './components/SearchForm';
import GithubCard from './components/GithubCard';

function App() {
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState('');

  const fetchUserData = async (username) => {
    setLoading(true);
    setError('');
    try{
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    }
    catch(err){
      setError('User not found!');
    }
    setLoading(false);
  }

  return (
    <div className='App'>
      <h1> Github Card List App</h1>
      <SearchForm onSearch={fetchUserData}/>
      {loading && <p> Loading</p>}
      {error && <p> {error}</p>}

      {user && <GithubCard user={user}/>}
    </div>
  );
}

export default App;
