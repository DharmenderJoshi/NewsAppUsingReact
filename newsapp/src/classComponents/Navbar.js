import React, { Component } from 'react'
import logo from './Logo.png'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
  } from "react-router-dom";
import Newspage from './Newspage';
export class Navbar extends Component {
  apikey=process.env.REACT_APP_NEWSAPI;
  constructor(){
    super();
    this.state=({queryString:""});
  }
  render() {
    return (
      <>
        <Router>
            <nav className={`navbar fixed-top navbar-expand-md bg-${this.bgColor}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand me-3 mb-3" to="/"><img src={logo} alt="" width="70px" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className=" navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                        <Link className="nav-link text-light fw-bold ps-2 pe-5" to="/Home"> General</Link>
                        </li>
                        <li className="nav-item ">
                        <Link className="nav-link text-light fw-bold ps-2 pe-5" to="/Entertainment">  Entertainment</Link>
                        </li>
                        <li className="nav-item ">
                        <Link className="nav-link text-light fw-bold ps-2 pe-5" to="/Football">  Football</Link>
                        </li>
                        <li className="nav-item ">
                        <Link className="nav-link text-light fw-bold ps-2 pe-5" to="/Cricket"> Cricket </Link>
                        </li>
                        <li className="nav-item ">
                        <Link className="nav-link text-light fw-bold ps-2 pe-5" to="/Politics"> Politics</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
                <Routes>
                <Route path="/" element={<Newspage pagesize={20}  apikey={this.apikey} category={'General'} />}>
                </Route>
                </Routes>
                <Routes>
                <Route path="/Home" element={<Newspage pagesize={20} apikey={this.apikey} category={'General'}/>}>
                </Route>
                </Routes>
                <Routes>
                <Route path="/Entertainment" element={<Newspage pagesize={20} apikey={this.apikey} category={'Entertainment'}/>}>
                </Route>
                </Routes>
                <Routes>
                <Route path="/Cricket" element={<Newspage pagesize={20} apikey={this.apikey} category={'Cricket'}/>}>
                </Route>
                </Routes>
                <Routes>
                <Route path="/Football" element={<Newspage pagesize={20} apikey={this.apikey} category={'Football'} />}>
                </Route>
                </Routes>
                <Routes>
                <Route path="/Politics" element={<Newspage pagesize={20} apikey={this.apikey} category={'Politics'} />}>
                </Route>
                </Routes>
            </Router>
      </>
    )
  }
}

export default Navbar

