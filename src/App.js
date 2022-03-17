import Header from './Header';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewBlog from './NewBlog';
import BlogDetails from './BlogDetails';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/NewBlog">
              <NewBlog />
            </Route>
            <Route path="/blogs/:id">
            <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
