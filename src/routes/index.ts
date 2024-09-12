import { BookPage } from '../pages/book';
import { BoilerRepaire } from '../pages/boiler/repair';
import { BoilerService } from '../pages/boiler/servicing';
import { BoilerInstall } from '../pages/boiler/installation';
import { PlumbingRepairReplace } from '../pages/plumbing/tap-repaire-replace';
import { MainsWaterStopcock } from '../pages/plumbing/mains-water-stopcock';
import { ToiletRepairs } from '../pages/plumbing/toilet-repairs';
import { BurstPipeRepairs } from '../pages/plumbing/burst-pipe-repair';
import { GasFireRepairs } from '../pages/gas-fire/repair';
import { GasFireService } from '../pages/gas-fire/service';
import { CookerOvenRepair } from '../pages/gas-cooker-oven/cooker-oven-repair';
import { CookerOvenInstallation } from '../pages/gas-cooker-oven/cooker-oven-install';
import { LandLordsCertificationServices } from '../pages/landlords/certification-service';
import { CentralHeatingRepair } from '../pages/central-heating/repair';
import { CentralHeatingRepairReplace } from '../pages/central-heating/repair-replace';
import { PowerFlushing } from '../pages/power-flushing';

const coreRoutes = [
  {
    path: '/boiler/repair',
    title: 'Boiler Repairs',
    component: BoilerRepaire,
  },
  {
    path: '/boiler/service',
    title: 'Boiler Services',
    component: BoilerService,
  },
  {
    path: '/boiler/install',
    title: 'Boiler Installation',
    component: BoilerInstall,
  },
  {
    path: '/plumbing/repair-replace',
    title: 'Tap Repaire & Replacements',
    component: PlumbingRepairReplace,
  },
  {
    path: '/plumbing/mains-water-stopcock',
    title: 'Mains Water Stopcock',
    component: MainsWaterStopcock,
  },
  {
    path: '/plumbing/toilet-repairs',
    title: 'Toilet Repairs',
    component: ToiletRepairs,
  },
  {
    path: '/plumbing/burst-pipe-repair',
    title: 'Burst Pipe Repairs',
    component: BurstPipeRepairs,
  },
  {
    path: '/gas-fire/repair',
    title: 'Gas Fire Repairs',
    component: GasFireRepairs,
  },
  {
    path: '/gas-fire/service',
    title: 'Gas Fire Services',
    component: GasFireService,
  },
  {
    path: '/gas-cooker-oven/cooker-oven-repair',
    title: 'Cooker & Oven Repairs',
    component: CookerOvenRepair,
  },
  {
    path: '/gas-cooker-oven/cooker-oven-install',
    title: 'Cooker & Oven Installations',
    component: CookerOvenInstallation,
  },
  {
    path: '/landlords/certification-service',
    title: 'Landlord Certification Services',
    component: LandLordsCertificationServices,
  },
  {
    path: '/central-heating/repair-replace',
    title: 'Radiator Repair & Replacement',
    component: CentralHeatingRepairReplace,
  },
  {
    path: '/central-heating/repair',
    title: 'Central Heating Repair',
    component: CentralHeatingRepair,
  },
  {
    path: '/power-flushing',
    title: 'Power Flushing',
    component: PowerFlushing,
  },
  {
    path: '/book',
    title: 'Book',
    component: BookPage,
  },
  {
    path: '/book/:postcode',
    title: 'Book',
    component: BookPage,
  },
];

const routes = [...coreRoutes];
export default routes;
