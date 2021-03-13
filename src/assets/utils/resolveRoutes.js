const RESOLVE_ROUTES = route => {
  console.log(route)
  if (route === '/') {
    return route
  } else if (route === 'about' || route === 'contact') {
    return `/${route}`       
  } else {
    return route = '/:id'
  }
}

export default RESOLVE_ROUTES