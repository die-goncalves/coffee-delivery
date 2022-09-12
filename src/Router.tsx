import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Success } from './pages/Success'
import { MapLocation } from './pages/MapLocation'
import { Session } from './pages/Session'
import { Register } from './pages/Register'
import { Dashboard } from './pages/Dashboard'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/location" element={<MapLocation />} />
        <Route path="/account/session" element={<Session />} />
        <Route path="/account/register" element={<Register />} />
        <Route path="/account/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
