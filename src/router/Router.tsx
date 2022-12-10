import React from 'react'
import ComingSoon from '../pages/ComingSoon';
import Error from '../pages/Error';
import Main from '../pages/Main';

const Router = () => {
  const [ currentRoute, setCurrentRoute ] = React.useState(<Main />);

  const routes = [ <Main />, <Error />, <ComingSoon /> ]

  return (
    <div>
      {/* <div>
        <button onClick={() => setCurrentRoute(<Main />)}>Main</button>
        <button onClick={() => setCurrentRoute(<Error />)}>Error</button>
        <button onClick={() => setCurrentRoute(<ComingSoon />)}>ComingSoon</button>
      </div> */}
      { currentRoute ? currentRoute : <Error /> }
    </div>
  )
}

export default Router