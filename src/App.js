import './App.css';
// import HomeTest01 from './components/HomeTest01';
// import HomeTest07 from './components/HomeTest07';
// import HomeTest08 from './components/HomeTest08';

import Organazation from './pages/Organazation';
import User from './pages/User';
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <header>
        <nav class="container-fluid navbar navbar-expand-lg navbar-light bg-light shadow-lg">
          <div class="container">
            <a class="navbar-brand" href="#">Green Academy</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      
      <main>
        <div className="container my-4">
          {/* <HomeTest07 /> */}
          {/* <HomeTest08 /> */}
          <Link to="/">Organazation</Link> <br />
          <Link to="/user">User</Link>
          <Routes>
            <Route path="/" element={<Organazation />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </div>
      </main>

      <footer></footer>
    </div>
  )
}

export default App;