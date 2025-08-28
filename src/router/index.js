import HomePage from '../pages/HomePage';
import MarketsPage from '../pages/MarketsPage';
import ServicesPage from '../pages/ServicesPage';
import BeginnersPage from '../pages/BeginnersPage';
import AccountPage from '../pages/AccountPage';
import WhyPage from '../pages/WhyPage';
import FAQsPage from '../pages/FAQsPage';

export const routes = [
  { path: '/:lang/', element: HomePage },
  { path: '/:lang/markets', element: MarketsPage },
  { path: '/:lang/services', element: ServicesPage },
  { path: '/:lang/beginners', element: BeginnersPage },
  { path: '/:lang/accounts', element: AccountPage },
  { path: '/:lang/why', element: WhyPage },
  { path: '/:lang/faq', element: FAQsPage },
];

export const headerRoutes = [
  { path: 'markets', text: 'header.markets' },
  { path: 'services', text: 'header.services' },
  { path: 'beginners', text: 'header.beginners' },
  { path: 'accounts', text: 'header.accounts' },
  { path: 'why', text: 'header.why' },
  { path: 'faq', text: 'header.faq' },
];