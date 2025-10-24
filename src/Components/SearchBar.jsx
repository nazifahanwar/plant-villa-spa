import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'; // Feather icon, install with: npm i react-icons

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex items-center max-w-md mx-auto mt-6"
    >
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search plant..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2.5 pl-10 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#344e41] transition-colors"
        />
        <button 
          type="submit" 
          className="absolute left-2 top-1/2 -translate-y-1/2 text-[#344e41] hover:text-green-500"
        >
          <FiSearch size={20} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
