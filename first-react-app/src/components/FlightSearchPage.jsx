import React, { useState } from 'react';
import './styles.css';

const FlightSearchPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortType, setSortType] = useState('price');

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSortChange = (type) => {
    setSortType(type);
  };

  return (
    <div className="page">
      <header className="header">
        <img className="logo" src="Logo.png" alt="Logo" />
        <h1>Поиск авиабилетов</h1>
      </header>

      <div className="content">
        {/* Оставляем aside без изменений */}
        <aside className="filters">
          <div className="filtersCard">
            <h4>Количество пересадок</h4>
            <div className="filtersCardPanel">
              <label>
                <input type="checkbox" /> Без пересадок
              </label>
              <label>
                <input type="checkbox" /> 1 пересадка
              </label>
              <label>
                <input type="checkbox" /> 2 пересадки
              </label>
              <label>
                <input type="checkbox" /> 3 пересадки
              </label>
            </div>
          </div>
          <div className="filtersCard">
            <h4>Компании</h4>
            <div className="filtersCardPanel">
              <label>
                <input type="radio" name="company" /> Победа
              </label>
              <label>
                <input type="radio" name="company" /> Red Wings
              </label>
              <label>
                <input type="radio" name="company" /> S7 Airlines
              </label>
            </div>
          </div>
        </aside>

        {/* Основной контент */}
        <section className="tickets">
          {/* Кнопки сортировки */}
          <div className="speedBtn">
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


          {/* Блок с настройками */}
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

                {/* Модальное окно с настройками */}
      {isModalOpen && (
        <div className="modalOverlay">
          <div className="modalContent">
            <div className='containerAside'>
              <h4 className='asideP'>Компании</h4> 
              <label>
                <input type="radio" name="company" /> Победа
              </label>
              <label>
                <input type="radio" name="company" /> Red Wings
              </label>
              <label>
                <input type="radio" name="company" /> S7 Airlines
              </label>              
            </div>

          </div>
          <div>
            <div className='containerAside'>
              <h4 className='asideP'>Количество пересадок</h4>
              <label>
                <input type="checkbox" /> Без пересадок
              </label>
              <label>
                <input type="checkbox" /> 1 пересадка
              </label>
              <label>
                <input type="checkbox" /> 2 пересадки
              </label>
              <label>
                <input type="checkbox" /> 3 пересадки
              </label>
            </div>


          </div>
        </div>
      )}

          <div className="ticket">
            <div className="ticketOne">
              <div>
                <div className="price">12 680 ₽</div>
              </div>
              <div>
                <div>
                  <p className="pLow">SVO - LED </p>
                  <p className="pPurp">12:00 - 16:30</p>
                </div>
              </div>
            </div>
            <div className="ticketTwo">
              <div></div>
              <div>
                <p className="pLow">В пути</p>
                <p className="pPurp">4 ч 30 мин</p>
              </div>
            </div>
            <div className="ticketThree">
              <div>
                <div className="company">
                  <img className="LogoTicket" src="/Win.png" alt="logo" />
                </div>
              </div>
              <div>
                <p className="pLow">Пересадки</p>
                <p className="pPurp">1 пересадка</p>
              </div>
            </div>
          </div>
          <div className="ticket">
            <div className="ticketOne">
              <div>
                <div className="price">21 500 ₽</div>
              </div>
              <div>
                <p className="pLow">SVO - LED </p>
                <p className="pPurp">14:00 - 16:00</p>
              </div>
            </div>

            <div className="ticketTwo">
              <div>
                <div></div>
              </div>
              <div>
                <p className="pLow">В пути</p>
                <p className="pPurp">2 ч 0 мин</p>
              </div>
            </div>

            <div className="ticketThree">
              <div>
                <div className="company"><img className="LogoTicket" src="Wings.png" alt="logo" /></div>
              </div>
              <div>
                <p className="pLow">Пересадки</p>
                <p className="pPurp">Без пересадок</p>
              </div>
            </div>
          </div>



          <div className="ticket">
            <div className="ticketOne">
              <div>
                <div className="price">23 995 ₽</div>
              </div>
              <div>
                <p className="pLow">SVO - LED</p>
                <p className="pPurp">04:50 - 13:30</p>
              </div>
            </div>

            <div className="ticketTwo">
              <div>
                <div></div>
              </div>
              <div>
                <p className="pLow">В пути</p>
                <p className="pPurp">8 ч 40 мин</p>
              </div>
            </div>

            <div className="ticketThree">
              <div>
                <div className="company"><img className="LogoTicket" src="Airlines.png" alt="logo" /></div>
              </div>
              <div>
                <p className="pLow">Пересадки</p>
                <p className="pPurp">2 пересадки</p>
              </div>
            </div>
          </div>
              <div>
                <button className="load-more">Загрузить еще билеты</button>
              </div>        
        </section>
      </div>
    </div>
  );
};

export default FlightSearchPage;