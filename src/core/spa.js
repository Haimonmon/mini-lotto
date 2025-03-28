import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class SPA {
    /**
     * 
     * @param {*} root - root element on your HTML file 
     */
    constructor(root) {
        this.root = root
        this.routes = [];
    }

    /**
     * Add the route on a site 
     * @param {*} path - URL path for the specific site page 
     * @param {*} Call  - a callable function from the pages
     */
    add(path, Call) {
        this.routes.push({
            pathURL: path,
            element: <Call/>
        })
    }

    /**
     * Enables routes to be render when called
     * @returns 
     */
    route() {
        return (
            <Router>
                <Routes>
                    <Route/>
                    
                    {
                        this.routes.map((route, index) => (
                            <Route key={index} path={route.pathURL} element={route.element} />
                        ))
                    }
                </Routes>
            </Router>
        )
    }

    /**
     * Render the root element on the SPA 👌✨
     */
    render() {
        const rootElement = document.getElementById(this.root);
        if (rootElement) {
            const root = ReactDOM.createRoot(rootElement);
            root.render(
                <React.StrictMode>
                    {this.route()}
                </React.StrictMode>
            )
        } else {
            console.error('Uh oh something wrong for rendering the site . . . 🔴')
        }
    }
}

export default SPA;