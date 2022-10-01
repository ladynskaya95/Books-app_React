import React from 'react'
import { FaSearch } from "react-icons/fa";


const Search = () => {
  return (
    <div className="search">
      <h2>Find Your Book Of Choice</h2>
      <div className="search-form">
        <div className="container">
          <div className="search-form-content">
            <form className="search-form" 
            // onSubmit={handleSubmit}
            >
              <div className="search-form-elem flex flex-sb bg-white">
                <input
                  type="text"
                  className="form-control"
                  placeholder="The Lost World ..."
                //   ref={searchText}
                />
                <button
                  type="submit"
                  className="flex flex-c"
                //   onClick={handleSubmit}
                >
                  <FaSearch className="text-purple" size={32} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search