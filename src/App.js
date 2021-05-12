import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import BlogPost from './components/pages/BlogPost';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/resume' exact component={Resume} />
          <Route path='/blog' exact component={BlogPost} />
          <Route path='/projects' exact component={Projects} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
