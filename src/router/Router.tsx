import React from 'react'
import Error from '../pages/Error';
import Main from '../pages/Main';

const Router = () => {
  const [ currentRoute, setCurrentRoute ] = React.useState(<Main />);

  React.useEffect(() => {
    if (currentRoute == null) {
      setCurrentRoute(<Main />)  
    }
  }, [])
  

  return (
    <div>
      { currentRoute ? currentRoute : <Error /> }
    </div>
  )
}

export default Router