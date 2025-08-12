import React from 'react';
import TicketCard from './TicketCard';

const TicketList = ({ tickets }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {tickets.length === 0 ? (
        <p>Билеты не найдены по текущим фильтрам</p>
      ) : (
        tickets.map((ticket) => <TicketCard key={ticket.id} ticket={ticket} />)
      )}
    </div>
  );
};

export default TicketList;