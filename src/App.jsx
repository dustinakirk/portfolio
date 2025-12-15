import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import PortfolioFresh from './components/PortfolioFresh'
import AiStoriesProject from './components/projects/AiStoriesProject'
import EmailProject from './components/projects/EmailProject'
import ScalingProject from './components/projects/ScalingProject'
import PatentProject from './components/projects/PatentProject'
import ArchitectureProject from './components/projects/ArchitectureProject'
import ChartsProject from './components/projects/ChartsProject'
import ColorProject from './components/projects/ColorProject'
import LoadOrderProject from './components/projects/LoadOrderProject'
import PillarsProject from './components/projects/PillarsProject'
import AppsProject from './components/projects/AppsProject'
import GenerativeUICanvasProject from './components/projects/GenerativeUICanvasProject'
import EventIntroProject from './components/projects/EventIntroProject'
import SalesforceAIHackathonProject from './components/projects/SalesforceAIHackathonProject'
import AgenticOverviewPage from './components/agentic/AgenticOverviewPage'
import PatternDetailPage from './components/agentic/PatternDetailPage'
import PatternLibraryHome from './components/agentic/PatternLibraryHome'
import DesignSystemShowcase from './components/DesignSystemShowcase'

const GA_MEASUREMENT_ID = 'G-W16VDWWV0S'

function AppRoutes() {
  const location = useLocation()

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      })
    }
  }, [location])

  return (
    <Routes>
        <Route path="/" element={<PortfolioFresh />} />
        <Route path="/projects/aistories" element={<AiStoriesProject />} />
        <Route path="/projects/email" element={<EmailProject />} />
        <Route path="/projects/scaling" element={<ScalingProject />} />
        <Route path="/projects/patent" element={<PatentProject />} />
        <Route path="/projects/architecture" element={<ArchitectureProject />} />
        <Route path="/projects/charts" element={<ChartsProject />} />
        <Route path="/projects/color" element={<ColorProject />} />
        <Route path="/projects/loadorder" element={<LoadOrderProject />} />
        <Route path="/projects/pillars" element={<PillarsProject />} />
        <Route path="/projects/apps" element={<AppsProject />} />
        <Route path="/projects/generativeuicanvas" element={<GenerativeUICanvasProject />} />
        <Route path="/projects/eventintro" element={<EventIntroProject />} />
        <Route path="/projects/salesforceaihackathon" element={<SalesforceAIHackathonProject />} />
        <Route path="/agentic_ai_patterns" element={<AgenticOverviewPage />} />
        <Route path="/agentic_ai_patterns/overview" element={<PatternLibraryHome />} />
        <Route path="/agentic_ai_patterns/:patternSlug" element={<PatternDetailPage />} />
        <Route path="/design_system" element={<DesignSystemShowcase />} />
      </Routes>
  )
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App
