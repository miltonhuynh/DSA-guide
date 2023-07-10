import './App.css';
import HeaderFooter from './Components/HeaderFooter';
import Page from './Components/Page';
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <HeaderFooter>
        <Page/>
      </HeaderFooter>
    </AnimatePresence>
  );
}

export default App;
