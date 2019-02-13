import React, { Component } from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import '../../index.scss';
import Home from '../../containers/Home/Home';
import Display from '../../components/Display/Display';



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
        <nav className='nav-container'>
          <NavLink to='/profile' className='navigation'>Profile</NavLink>
          <NavLink to='/appointments' className='navigation'>Appointments</NavLink>
          <NavLink to='/providers' className='navigation'>Providers</NavLink>
          <NavLink to='/insurance' className='insurance'>Insurance</NavLink>
        </nav>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/profile' render={() => <Display type="profile" />} />
          <Route exact path='/appointments' render={() => <Display type="appointments" />} />
          <Route exact path='/providers' render={() => <Display type="providers" />} />
          <Route exact path='/insurance' render={() => <Display type="insurance" />} />   
          <Route render={() => (
            <div className='redirect'>
              <Link to='/' className='link-redirect'>
                <h2>Can't find that page</h2>
                <button className='home'> Click to Return Home</button>
              </Link>
            </div>
            )}  />     
        </Switch>
      </section>
    );
  }
}

export default App;
