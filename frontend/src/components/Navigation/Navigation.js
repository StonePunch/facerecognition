import React from 'react';

const Navigation = (props) => {
  if (props.isSignedIn) {
    return (
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p className='f3 link dim black db pa3 pointer' onClick={() => props.onRouteChange('signout')}>
          Sign Out
        </p>
      </nav>
    );
  } 
  else {
    return (
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p className='f3 link dim black db pa3 pointer' onClick={() => props.onRouteChange('signin')}>
          Sign In
        </p>
        <p className='f3 link dim black db pa3 pointer' onClick={() => props.onRouteChange('register')}>
          Register
        </p>
      </nav>
    );
  }
}

export default Navigation;