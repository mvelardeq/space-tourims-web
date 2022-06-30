import {Routes,Route} from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { CrewPage } from './CrewPage'
import DestinationPage from './DestinationPage'
import { HomePage } from './HomePage'
import { TechnologyPage } from './TechnologyPage'

export const MainApp = () => {
  return (
    <>
      <NavBar />
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/destination' element={<DestinationPage />} />
          <Route path='/crew' element={<CrewPage />} />
          <Route path='/technology' element={<TechnologyPage />} />
      </Routes>
    </>
  )
}
