const authGuard = (Component) => {
    return () => {
        const token = sessionStorage.getItem("token");
        if (!token) {
            window.location.href = "/sign-in";
            return null;
        }
        return Component();
    };
};
export default authGuard;