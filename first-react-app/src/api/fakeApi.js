export const fetchTickets = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          price: 5000,
          airline: 'Победа',
          departureTime: '10:00',
          arrivalTime: '12:00',
          duration: 120,
          stops: 0,
        },
        {
          id: '2',
          price: 7000,
          airline: 'S7 Airlines',
          departureTime: '14:00',
          arrivalTime: '16:30',
          duration: 150,
          stops: 1,
        },
        {
          id: '3',
          price: 6500,
          airline: 'Red Wings',
          departureTime: '09:00',
          arrivalTime: '11:00',
          duration: 120,
          stops: 0,
        },
        {
          id: '4',
          price: 8000,
          airline: 'Победа',
          departureTime: '18:00',
          arrivalTime: '20:00',
          duration: 120,
          stops: 2,
        },
      ]);
    }, 1000);
  });
};