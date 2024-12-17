import React,{useState} from 'react'

const SearchForm = ({onSearch}) => {
    const [query,setQuery]= useState('');

    const handleSubmit =(event) => {
        event.preventDefault();
        if (query){
            onSearch(query);
            setQuery('');
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type='text' 
        placeholder='Enter Github Username' 
        value={query}
        onChange={(e) => setQuery(e.target.value)}/>
        <button type='submit'>Search </button>
    </form>
  )
}

export default SearchForm