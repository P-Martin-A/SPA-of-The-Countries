import Header from '../template/Header'
import Home from '../pages/Home'
import Country from '../pages/Country'
import Error404 from '../pages/Error404'
import getHash from '../assets/utils/getHash'
import resolveRoutes from '../assets/utils/resolveRoutes'

const ROUTES = {
  '/': Home,
  '/:id': Country
}

const ROUTE = async () => {
  try {
    const $HEADER = null || document.getElementById('header'),
          $MAIN   = null || document.getElementById('main')

    let hash = getHash(),
        route = await resolveRoutes(hash),
        render = ROUTES[route] ? ROUTES[route] : Error404

    $HEADER.innerHTML = Header()
    $MAIN.innerHTML = await render()
    
  } catch (error) {
    console.error('ERROR EN EL RENDER', error)  
  } 
}

export default ROUTE