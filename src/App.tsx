import { Suspense, lazy } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import { MainLayout } from './components/layout/MainLayout';
import { Home } from './pages/Home';

const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then((m) => ({ default: m.Services })));
const ServiceDetailPage = lazy(() =>
  import('./pages/ServiceDetailPage').then((m) => ({ default: m.ServiceDetailPage }))
);
const Solutions = lazy(() => import('./pages/Solutions').then((m) => ({ default: m.Solutions })));
const IntelliFlow = lazy(() =>
  import('./pages/IntelliFlow').then((m) => ({ default: m.IntelliFlow }))
);
const Pricing = lazy(() => import('./pages/Pricing').then((m) => ({ default: m.Pricing })));
const Process = lazy(() => import('./pages/Process').then((m) => ({ default: m.Process })));
const Resources = lazy(() => import('./pages/Resources').then((m) => ({ default: m.Resources })));
const ResourceArticlePage = lazy(() =>
  import('./pages/ResourceArticlePage').then((m) => ({ default: m.ResourceArticlePage }))
);
const FAQ = lazy(() => import('./pages/FAQ').then((m) => ({ default: m.FAQ })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const Privacy = lazy(() => import('./pages/Privacy').then((m) => ({ default: m.Privacy })));
const Terms = lazy(() => import('./pages/Terms').then((m) => ({ default: m.Terms })));
const Accessibility = lazy(() =>
  import('./pages/Accessibility').then((m) => ({ default: m.Accessibility }))
);
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));

function PageLoader() {
  return (
    <div className="flex min-h-[45vh] items-center justify-center bg-[#FFF9F4] dark:bg-[#1E1510] text-sm text-[#6E5849] dark:text-[#D5C3B3]">
      Loading page...
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <MainLayout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/intelliflow" element={<IntelliFlow />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/process" element={<Process />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/:slug" element={<ResourceArticlePage />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </MainLayout>
      </HashRouter>
    </ThemeProvider>
  );
}
