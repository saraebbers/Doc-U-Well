import React, { Component } from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import '../../index.scss';
import Home from '../../containers/Home/Home';
import Display from '../../containers/Display/Display';



class App extends Component {
// <i class="fas fa-user-md"></i>
// <i class="far fa-address-card"></i>
// <i class="far fa-calendar-alt"></i>
// <i class="fas fa-user-circle"></i>
// <i class="fas fa-trash-alt"></i>
// <i class="fas fa-edit"></i>
// <i class="far fa-plus-square"></i>


  render() {
    return (
      <section className="main-container">
        <header className="header-container">
          <Link to='/' className='link-header'>
            <h1>My Health Navigator</h1>
          </Link>
        </header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/profile' render={() => <Display type="profile" />} />
          <Route exact path='/appointments' render={() => <Display type="appointments" />} />
          <Route exact path='/providers' render={() => <Display type="providers" />} />
          <Route exact path='/insurance' render={() => <Display type="insurance" />} />
          <Route render={() => (
            <div className='redirect'>
              <Link to='/' className='link-redirect'>
                <h2>Cannot find that page</h2>
                <button className='home'> Click to Return Home</button>
              </Link>
            </div>
            )}  />
        </Switch>
        <nav className='nav-container'>
          <NavLink to='/profile' className='navigation'>
            <div>
              <i className="fas fa-user-circle navigation"></i>
              <p>Profile</p>
            </div>
          </NavLink>
          <NavLink to='/appointments' className='navigation'>
            <div>
              <i className="far fa-calendar-alt navigation"></i>
              <p>Appointments</p>
            </div>
          </NavLink>
          <NavLink to='/providers' className='navigation'>
            <div>
              <i className="fas fa-user-md navigation"></i>
              <p>Providers</p>
            </div>
          </NavLink>
          <NavLink to='/insurance' className='navigation'>
            <div>
              <i className="far fa-address-card navigation"></i>
              <p>Insurance</p>
              </div>
          </NavLink>
          </nav>
      </section>
    );
  }
}

export default App;
