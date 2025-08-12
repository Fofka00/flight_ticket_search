import React from 'react';

const Filters = ({ filters, setFilters }) => {
  const handleAirlineChange = (airline) => {
    const newAirlines = filters.airlines.includes(airline)
      ? filters.airlines.filter(a => a !== airline)
      : [...filters.airlines, airline];
    setFilters({ ...filters, airlines: newAirlines });
  };

  const handleStopsChange = (stops) => {
    const newStops = filters.stops.includes(stops)
      ? filters.stops.filter(s => s !== stops)
      : [...filters.stops, stops];
    setFilters({ ...filters, stops: newStops });
  };

  const handleSortChange = (sortBy) => {
    setFilters({ ...filters, sortBy });
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: '250px' }}>
      <h3>Фильтры</h3>
      <div>
        <h4>Авиакомпании</h4>
        {['Победа', 'Red Wings', 'S7 Airlines'].map((airline) => (
          <label key={airline} style={{ display: 'block' }}>
            <input
              type="checkbox"
              checked={filters.airlines.includes(airline)}
              onChange={() => handleAirlineChange(airline)}
            />
            {airline}
          </label>
        ))}
      </div>
      <div style={{ marginTop: 10 }}>
        <h4>Кол-во пересадок</h4>
        {[0, 1, 2, 3].map((stop) => (
          <label key={stop} style={{ display: 'block' }}>
            <input
              type="checkbox"
              checked={filters.stops.includes(stop)}
              onChange={() => handleStopsChange(stop)}
            />
            {stop} пересадка{stop !== 1 ? 'и' : ''}
          </label>
        ))}
      </div>
      <div style={{ marginTop: 10 }}>
        <h4>Сортировать по</h4>
        <label style={{ display: 'block' }}>
          <input
            type="radio"
            name="sort"
            checked={filters.sortBy === 'price'}
            onChange={() => handleSortChange('price')}
          />
          Цена
        </label>
        <label style={{ display: 'block' }}>
          <input
            type="radio"
            name="sort"
            checked={filters.sortBy === 'duration'}
            onChange={() => handleSortChange('duration')}
          />
          Длительности
        </label>
        <label style={{ display: 'block' }}>
          <input
            type="radio"
            name="sort"
            checked={filters.sortBy === 'stops'}
            onChange={() => handleSortChange('stops')}
          />
          Кол-во пересадок
        </label>
      </div>
    </div>
  );
};

export default Filters;