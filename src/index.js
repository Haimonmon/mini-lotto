import SPA from "./core/spa.js";

import Home from "./pages/home.js";
import SignUp from "./pages/signup.js";
import SignIn from "./pages/signin.js";
import Profile from "./pages/profile.js";

import "../src/styles/public.css";

const app = new SPA("root");

app.add('/', SignIn);
app.add('/sign-in', SignIn);

app.add('/sign-up', SignUp);

app.add('/home', Home);

app.add('/profile', Profile);

// Renders the app along with the registered routes 👌✨
app.render();