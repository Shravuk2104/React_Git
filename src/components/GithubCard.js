import React,{useState} from 'react'

const GithubCard = ({user}) => {
  return (
    <div className='github-card'>
        <img src={user.avatar_url} alt={user.login} className='github-avatar'/>
        <h2>{user.name || user.login}</h2>
        <a href={user.html_url} target='_blank'>View Profile</a>
    </div>
  )
}

export default GithubCard