import React from 'react';

function TicketCard({ ticket }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '10px',
      marginBottom: '10px',
      backgroundColor: '#fff',
      width: '300px',
    }}>
      <div style={{ fontSize: '1.2em', fontWeight: 'bold', marginBottom: '8px' }}>
        {ticket.price} ₽
      </div>
      <div>Авиакомпания: {ticket.airline}</div>
      <div>
        Время: {ticket.departureTime} - {ticket.arrivalTime}
      </div>
      <div>Длительность: {Math.floor(ticket.duration / 60)}ч {ticket.duration % 60}м</div>
      <div>Пересадки: {ticket.stops}</div>
    </div>
  );
}

export default TicketCard;