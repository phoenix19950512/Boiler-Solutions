import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { BodyComponent } from './layout/body';
import { BoilerRepaire } from './pages/boiler/repair';
import { BoilerService } from './pages/boiler/servicing';
import { BoilerInstall } from './pages/boiler/installation';
import { CentralHeatingRepairReplace } from './pages/central-heating/repair-replace';
import { CentralHeatingRepair } from './pages/central-heating/repair';
import { PlumbingRepairReplace } from './pages/plumbing/tap-repaire-replace';
import { NotFound } from './pages/404page';
import { MainsWaterStopcock } from './pages/plumbing/mains-water-stopcock';
import { PowerFlushing } from './pages/power-flushing';
import { GasFireRepairs } from './pages/gas-fire/repair';
import { GasFireService } from './pages/gas-fire/service';
import { BurstPipeRepairs } from './pages/plumbing/burst-pipe-repair';
import { ToiletRepairs } from './pages/plumbing/toilet-repairs';
import { CookerOvenRepair } from './pages/gas-cooker-oven/cooker-oven-repair';
import { CookerOvenInstallation } from './pages/gas-cooker-oven/cooker-oven-install';
import { HomePage } from './pages/home';

export const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BodyComponent><HomePage /></BodyComponent>} />
        <Route path='/boiler'>
          <Route index element={<Navigate to='repair' />} />
          <Route path='repair' element={<BodyComponent><BoilerRepaire /></BodyComponent>} />
          <Route path='service' element={<BodyComponent><BoilerService /></BodyComponent>} />
          <Route path='install' element={<BodyComponent><BoilerInstall /></BodyComponent>} />
        </Route>
        <Route path='/central-heating'>
          <Route index element={<Navigate to='repair-replace' />} />
          <Route path='repair-replace' element={<BodyComponent><CentralHeatingRepairReplace /></BodyComponent>} />
          <Route path='repair' element={<BodyComponent><CentralHeatingRepair /></BodyComponent>} />
        </Route>
        <Route path='/plumbing'>
          <Route index element={<Navigate to='repair-replace' />} />
          <Route path='repair-replace' element={<BodyComponent><PlumbingRepairReplace /></BodyComponent>} />
          <Route path='mains-water-stopcock' element={<BodyComponent><MainsWaterStopcock /></BodyComponent>} />
          <Route path='burst-pipe-repair' element={<BodyComponent><BurstPipeRepairs /></BodyComponent>} />
          <Route path='toilet-repairs' element={<BodyComponent><ToiletRepairs /></BodyComponent>} />
        </Route>
        <Route path='/power-flushing' element={<BodyComponent><PowerFlushing /></BodyComponent>} />
        <Route path='/gas-fire'>
          <Route index element={<Navigate to='repair' />} />
          <Route path='repair' element={<BodyComponent><GasFireRepairs /></BodyComponent>} />
          <Route path='service' element={<BodyComponent><GasFireService /></BodyComponent>} />
        </Route>
        <Route path='/landlords'>
          <Route index element={<Navigate to='certification-service' />} />
          <Route path='certification-service' element={<BodyComponent><PlumbingRepairReplace /></BodyComponent>} />
        </Route>
        <Route path='/gas-cooker-oven'>
          <Route index element={<Navigate to='cooker-oven-repair' />} />
          <Route path='cooker-oven-repair' element={<BodyComponent><CookerOvenRepair /></BodyComponent>} />
          <Route path='cooker-oven-install' element={<BodyComponent><CookerOvenInstallation /></BodyComponent>} />
        </Route>
        <Route path='*' element={<BodyComponent><NotFound /></BodyComponent>} />
      </Routes>
    </BrowserRouter>
  )
}