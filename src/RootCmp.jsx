import { Route, Routes } from 'react-router-dom'
import { AnalyticsDetails } from './pages/AnalyticsDetails'
import { AppIndex } from './pages/AppIndex'
import { ChatDetails } from './pages/ChatDetails'
import { PromptManagement } from './pages/PromptManagement'
import { DataManagement } from './pages/DataManagement'

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppIndex />}>
          <Route path="/chat/:chatId" element={<ChatDetails />} />
          <Route path="/analytics" element={<AnalyticsDetails />} />
          <Route path="/prompts" element={<PromptManagement />} />
          <Route path="/data" element={<DataManagement />} />
        </Route>
      </Routes>
    </>
  )
}
