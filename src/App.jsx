import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { Home, OnBoarding } from './pages'
import { useStateContext } from './context'
import { usePrivy } from '@privy-io/react-auth'
import Profile from './pages/Profile'
import MedicalRecords from './pages/records/MedicalRecords'
import SingleRecordsDetails from './pages/records/SingleRecordsDetails'
import ScreeningSchedules from './pages/ScreeningSchedule'

const App = () => {
  const { currentUser } = useStateContext();
  const { user, authenticated, ready, login } = usePrivy()
  const navigate = useNavigate();

  useEffect(() => {
    if (ready && !authenticated) {
      login();
    } else if (user && !currentUser) {
      navigate("/onboarding");
    }
  }, [ready, authenticated, currentUser]);

  return (
    <div className='relative flex min-h-screen flex-row bg-[#13131a] p-4 '>
      <div className='relative mr-10 hidden sm:flex'>
        <Sidebar />
      </div>
      <div className='mx-auto max-w-[1280px] flex-1 max-sm:w-full sm:pr-5 '>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/onboarding' element={<OnBoarding />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/medical-records' element={<MedicalRecords/>} />
          <Route path='/medical-records/:id' element={<SingleRecordsDetails />} />
          <Route path='/screening-schedules' element={<ScreeningSchedules />} />
        </Routes>
      </div>
    </div>
  )
}

export default App