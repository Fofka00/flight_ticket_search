import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTicketsThunk } from '../features/ticketsSlice';
import Filters from './Filters';
import TicketList from './TicketList';

const Main = () => {
  const dispatch = useDispatch();
  const { tickets, loading, error } = useSelector((state) => state.tickets);

  const [filters, setFilters] = useState({
    airlines: [],
    stops: [],
    sortBy: 'price',
  });

  const [filteredTickets, setFilteredTickets] = useState(tickets);
  const [page, setPage] = useState(1); 

  useEffect(() => {
    dispatch(fetchTicketsThunk());
  }, [dispatch]);

  useEffect(() => {
    let result = [...tickets];

    if (filters.airlines.length > 0) {
      result = result.filter((t) => filters.airlines.includes(t.airline));
    }

    if (filters.stops.length > 0) {
      result = result.filter((t) => filters.stops.includes(t.stops));
    }

    if (filters.sortBy === 'price') {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'duration') {
      result.sort((a, b) => a.duration - b.duration);
    } else if (filters.sortBy === 'stops') {
      result.sort((a, b) => a.stops - b.stops);
    }

    setFilteredTickets(result);
  }, [tickets, filters]);

  const handleLoadMore = () => {
    alert('Загрузка дополнительных билетов...');
  };

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className="main-container" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Filters filters={filters} setFilters={setFilters} />
        <TicketList tickets={filteredTickets} />
      </div>
      <button
        className="load-more"
        onClick={handleLoadMore}
        style={{
          padding: '15px 20px',
          backgroundColor: '#8e44ad',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer',
          width: '100%',
        }}
      >
        Загрузить еще билеты
      </button>
    </div>
  );
};

export default Main;