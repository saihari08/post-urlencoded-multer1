import TopNavigation from './TopNavigation'
import { Link, useLocation } from 'react-router-dom'

function Dashboard() {

  let loc=useLocation();
  console.log(loc);
  console.log(`inside dashboard component`)
  return (
    <div className='dashboard'>
      <TopNavigation></TopNavigation>
      <h2>{loc&& loc.state && loc.state.quote? loc.state.quote:""}</h2>
      </div>
  )
}

export default Dashboard
