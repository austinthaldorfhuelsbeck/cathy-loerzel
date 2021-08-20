import { Route, Switch } from "react-router-dom"

import NavBar from "./Components/NavBar"

import Home from "./Home/Home"
import Blog from "./Blog/Blog"
import Coaching from "./Coaching/Coaching"
import RedeemingHeartache from "./RedeemingHeartache/RedeemingHeartache.jsx"
import Contact from "./Contact/Contact"

import NotFound from "./NotFound/NotFound"
import Footer from "./Footer/Footer"

export default function Layout() {
  return (
    <div className="contain">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blog/:category/:id">
          <Blog />
        </Route>
        <Route path="/blog/:category">
          <Blog />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/coaching">
          <Coaching />
        </Route>
        <Route path="/redeeming-heartache">
          <RedeemingHeartache />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}