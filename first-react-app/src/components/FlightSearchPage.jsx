import React, { useState } from 'react';
import './styles.css';

const initialTickets = [
  {
    id: 1,
    price: 12680,
    duration: 270,
    stops: 1,
    company: 'Победа',
    route: 'SVO - LED',
    time: '12:00 - 16:30',
  },
  {
    id: 2,
    price: 21500,
    duration: 120,
    stops: 0,
    company: 'Red Wings',
    route: 'SVO - LED',
    time: '14:00 - 16:00',
  },
  {
    id: 3,
    price: 23995,
    duration: 520,
    stops: 2,
    company: 'S7 Airlines',
    route: 'SVO - LED',
    time: '04:50 - 13:30',
  },
];

const newTickets = [
  {
    id: 4,
    price: 15000,
    duration: 200,
    stops: 1,
    company: 'Red Wings',
    route: 'SVO - LED',
    time: '10:00 - 13:20',
  },
  {
    id: 5,
    price: 18000,
    duration: 180,
    stops: 0,
    company: 'S7 Airlines',
    route: 'SVO - LED',
    time: '09:00 - 11:30',
  },
  {
    id: 6,
    price: 16000,
    duration: 240,
    stops: 2,
    company: 'Победа',
    route: 'SVO - LED',
    time: '15:00 - 19:00',
  },
];

const FlightSearchPage = () => {
  const [tickets, setTickets] = useState(initialTickets);
  const [filters, setFilters] = useState({ stops: [], companies: [] });
  const [sortType, setSortType] = useState('price');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isAllFiltersSame = () => {
    const stopsFilters = [0, 1, 2, 3].map(stop => filters.stops.includes(stop));
    const companiesFilters = ['Победа', 'Red Wings', 'S7 Airlines'].map(company => filters.companies.includes(company));

    const stopsAllSelected = stopsFilters.every(Boolean);
    const stopsNoneSelected = stopsFilters.every(s => !s);

    const companiesAllSelected = companiesFilters.every(Boolean);
    const companiesNoneSelected = companiesFilters.every(c => !c);

    return (
      (stopsAllSelected || stopsNoneSelected) &&
      (companiesAllSelected || companiesNoneSelected)
    );
  };

  const handleSortChange = (type) => {
    setSortType(type);
    let sortedTickets = [...tickets];

    if (type === 'price') {
      sortedTickets.sort((a, b) => a.price - b.price);
    } else if (type === 'duration') {
      sortedTickets.sort((a, b) => a.duration - b.duration);
    } else if (type === 'stops') {
      sortedTickets.sort((a, b) => a.stops - b.stops);
    } else if (type === 'company') {
      sortedTickets.sort((a, b) => a.company.localeCompare(b.company));
    }

    setTickets(sortedTickets);
  };

  const toggleStopFilter = (stopCount) => {
    setFilters((prev) => {
      const stops = prev.stops.includes(stopCount)
        ? prev.stops.filter((s) => s !== stopCount)
        : [...prev.stops, stopCount];
      return { ...prev, stops };
    });
  };

  const toggleCompanyFilter = (companyName) => {
    setFilters((prev) => {
      const companies = prev.companies.includes(companyName)
        ? prev.companies.filter((c) => c !== companyName)
        : [...prev.companies, companyName];
      return { ...prev, companies };
    });
  };

  function loadMoreTickets() {
    setTickets((prev) => [...prev, ...newTickets]);
  }

  const filteredTickets = tickets.filter((ticket) => {
    const stopMatch = filters.stops.length === 0 || filters.stops.includes(ticket.stops);
    const companyMatch = filters.companies.length === 0 || filters.companies.includes(ticket.company);
    return stopMatch && companyMatch;
  });

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };


  return (
    <div className="page">
      <header className="header">
        <img className="logo" src="Logo.png" alt="Logo" />
        <h1>Поиск авиабилетов</h1>
      </header>

      <div className="content" style={{ display: 'flex' }}>
        <aside className="filters" style={{ marginRight: '20px' }}>
          <div className="filtersCard">
            <h4>Количество пересадок</h4>
            <div className="filtersCardPanel">
              {[0, 1, 2, 3].map((stop) => (
                <label key={stop} style={{ display: 'block', marginBottom: '10px' }}>
                  <input
                    type="checkbox"
                    checked={filters.stops.includes(stop)}
                    onChange={() => toggleStopFilter(stop)}
                  />{' '}
                  {stop === 0 ? 'Без пересадок' : `${stop} пересадка(и)`}
                </label>
              ))}
            </div>
          </div>
          <div className="filtersCard">
            <h4>Компании</h4>
            <div className="filtersCardPanel">
              {['Победа', 'Red Wings', 'S7 Airlines'].map((company) => (
                <label key={company} style={{ display: 'block', marginBottom: '10px' }}>
                  <input
                    type="checkbox"
                    id='Checkbox'
                    checked={filters.companies.includes(company)}
                    onChange={() => {
                      if (filters.companies.includes(company)) {
                        setFilters(prev => ({
                          ...prev,
                          companies: prev.companies.filter(c => c !== company)
                        }));
                      } else {
                        setFilters(prev => ({
                          ...prev,
                          companies: [...prev.companies, company]
                        }));
                      }
                    }}
                  />{' '}
                  {company}
                </label>
               ))}
            </div>
          </div>
        </aside>

        <section className="tickets" style={{ flex: 1 }}>
          <div className="speedBtn" style={{ marginBottom: '20px' }}>
            <button
              className={`speedOne ${sortType === 'price' ? 'active' : ''}`}
              onClick={() => handleSortChange('price')}
            >
              Самый дешевый
            </button>
            <button
              className={`speed ${sortType === 'duration' ? 'active' : ''}`}
              onClick={() => handleSortChange('duration')}
            >
              Самый быстрый
            </button>
            <button
              className={`speedThree ${sortType === 'stops' ? 'active' : ''}`}
              onClick={() => handleSortChange('stops')}
            >
              Самый оптимальный
            </button>
          </div>
          <div className="asideMenu">
            <div className='pArrowCont'>
              <p className="pArrow">Любая авиакомпания, любое кол-во пересадок</p>
              <p className='pArrowTwo'>:0,1,2</p>
            </div>
            <div className="arrowCont">
              <p className="pMenu">Открыть настройки</p>
              <button className="Arrow" onClick={toggleModal}>
                <img className="arrowPng" src="Arrow.png" alt="Arrow" />
              </button>
            </div>
          </div>

          {isModalOpen && (
            <div className="modalOverlay">
              <div className="modalContent">
                <div className='containerAside'>
                  <h4 className='asideP'>Компании</h4>
                  {['Победа', 'Red Wings', 'S7 Airlines'].map((company) => (
                    <label key={company} style={{ display: 'block'}}>
                      <input
                        type="checkbox"
                        id='CheckboxModal'
                        checked={filters.companies.includes(company)}
                        onChange={() => {
                          if (filters.companies.includes(company)) {
                            setFilters(prev => ({
                             ...prev,
                              companies: prev.companies.filter(c => c !== company)
                            }));
                          } else {
                            setFilters(prev => ({
                              ...prev,
                              companies: [...prev.companies, company]
                            }));
                          }
                        }}
                      />{' '}
                      {company}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <div className='containerAside'>
                  <h4 className='asideP'>Количество пересадок</h4>
                  {[0, 1, 2, 3].map((stop) => (
                    <label key={stop} style={{ display: 'block'}}>
                      <input
                        type="checkbox"
                        checked={filters.stops.includes(stop)}
                        onChange={() => toggleStopFilter(stop)}
                      />{' '}
                      {stop === 0 ? 'Без пересадок' : `${stop} пересадка(и)`}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {filteredTickets.map((ticket) => (
            <div
              key={ticket.id}
              className="ticket"
              style={{
                backgroundColor: '#E8EBF2',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                display: 'flex',
                justifyContent: 'space-between',
                height: '124px',
                maxWidth: '677px',
                padding: '25px',
                marginBottom: '20px',
              }}
            >
              <div
                className="ticketOne"
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div className="price" style={{ fontSize: '32px', fontWeight: '700' }}>
                    {ticket.price} ₽
                  </div>
                </div>
                <div>
                  <p className="pLow" style={{ color: '#858AE3' }}>
                    SVO - LED
                  </p>
                  <p className="pPurp" style={{ color: '#4E148C', fontSize: '16px', fontWeight: '500' }}>
                    {ticket.time}
                  </p>
                </div>
              </div>
              <div
                className="ticketTwo"
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'end' }}
              >
                <p className="pLow" style={{ color: '#858AE3' }}>
                  В пути
                </p>
                <p className="pPurp" style={{ color: '#4E148C', fontSize: '16px', fontWeight: '500' }}>
                  {Math.floor(ticket.duration / 60)} ч {ticket.duration % 60} мин
                </p>
              </div>
              <div
                className="ticketThree"
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div className="company">
                  <img
                    className="LogoTicket"
                    src={
                      ticket.company === 'Победа'
                        ? '/Win.png'
                        : ticket.company === 'Red Wings'
                        ? 'Wings.png'
                        : 'Airlines.png'
                    }
                    alt="logo"
                    style={{ maxWidth: '180px' }}
                  />
                </div>
                <div>
                  <p className="pLow" style={{ color: '#858AE3' }}>
                    Пересадки
                  </p>
                  <p
                    className="pPurp"
                    style={{ color: '#4E148C', fontSize: '16px', fontWeight: '500' }}
                  >
                    {ticket.stops} пересадка(и)
                  </p>                  
                </div>

              </div>
            </div>
          ))}

          <button
          className="load-more"
          style={{
          width: '100%',
          padding: '15px 20px',
          backgroundColor: '#4E148C',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: isAllFiltersSame() ? 'pointer' : 'not-allowed',
          opacity: isAllFiltersSame() ? 1 : 0.5,
          marginTop: '20px',
        }}
        onClick={loadMoreTickets}
        disabled={!isAllFiltersSame()}
      >
        Загрузить еще билеты
      </button>
        </section>
      </div>
    </div>
  );
};

export default FlightSearchPage;