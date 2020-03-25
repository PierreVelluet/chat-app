import React from 'react';
import Contact from './components/Contact'
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="App">
      <Contact
        online
        avatar='https://randomuser.me/api/portraits/men/87.jpg'
        name='Hunter Johnston'
      />
      <Contact
        avatar='https://randomuser.me/api/portraits/women/16.jpg'
        name='Kitty Day'
      />
      <Contact
        online
        avatar='https://randomuser.me/api/portraits/women/23.jpg'
        name='Brandy Chapman'
      />
    </div>
  );
}

Contact.propTypes = {
  online: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default App;
