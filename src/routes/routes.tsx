import * as React from "react";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "../components/asyncComponent";
import PostForm from "../components/posts/PostForm";

const MainLayout = asyncComponent(() => import("../layouts/Main"));
const Home = asyncComponent(() => import("../components/Home"));
const Profile = asyncComponent(() => import("../components/users/Profile"));
const Login = asyncComponent(() => import("../components/users/Login"));
const GlerProfile = asyncComponent(() =>
  import("../components/glers/GlerProfile")
);

const Routes = (
  <MainLayout>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/newpost" exact component={PostForm} />
      <Route path="/login" exact component={Login} />
      <Route path="/glers/:id/profile" exact component={GlerProfile} />
      {/* <Route exact path="/signin-callback" component={SigninCallback} />
      <Route exact path="/signout-callback" component={SignoutCallback} />
      <Route exact path="/silent-renew" component={SilentRenew} />

      <PrivateRoute exact path="/" component={Dashboard} />
      
      <Route component={PageNotFound} /> */}
    </Switch>
  </MainLayout>
);

export default Routes;
