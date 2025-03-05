import SPA from "./core/spa.jsx";

import SignIn from "./pages/signin.jsx";

const app = new SPA("root");

app.add('/', SignIn);

// Renders the app along with the registered routes 👌✨
app.render();