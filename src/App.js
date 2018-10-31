import React, { Component } from 'react';
import Nav from './Components/Nav';
import routes from './routes';
import EmailMe from './Components/EmailMe';
import Footer from './Components/Footer';

import './reset.scss';
import './Components/style.scss';

class App extends Component {
  render() {
    return (
      <div className='appContainer'>
        <nav className='navContainer'>
          <Nav />
        </nav>

        {routes}
        <section>
            <EmailMe></EmailMe>
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
