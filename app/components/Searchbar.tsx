import React, { useEffect, useState } from 'react';
import { Input } from './ui/input';
import { useNavigate, useLocation } from '@remix-run/react';
import { useDebounce } from '~/lib/useDebounce';

const Searchbar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const debouncedValue = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedValue) {
      navigate(`/discover?search=${debouncedValue}`);
    } else if (!debouncedValue && location.pathname === '/discover') {
      navigate('/discover');
    }
  }, [navigate, location.pathname, debouncedValue]);

  return (
    <div className="relative mt-8 block">
      <Input 
        className="input-class py-6 pl-12 focus-visible:ring-offset-orange-1"
        placeholder='Search for podcasts'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onLoad={() => setSearch('')}
      />
      <img 
        src="/icons/search.svg"
        alt="search"
        height={20}
        width={20}
        className="absolute left-4 top-3.5"
      />
    </div>
  );
}

export default Searchbar;
