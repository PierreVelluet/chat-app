import React from 'react';
import Contact from './components/Contact'
import PropTypes from 'prop-types';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className="App">
      <ContactList />
    </div>
  );
}

Contact.propTypes = {
  online: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default App;
