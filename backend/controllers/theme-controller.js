const setThemeCookie = (theme, res) => {
    res.cookie('themeCookie', theme, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'strict',
    });
};

const setTheme = (req, res) => {
    const { theme } = req.body;
    setThemeCookie(theme, res);
    res.json({ message: 'Theme set successfully' });
};

const getTheme = (req, res) => {
    const themeCookie = req.cookies.themeCookie;
    if (themeCookie) {
        res.json({ theme: themeCookie });
    } else {
        setThemeCookie("dark", res);
        res.json({ theme: "dark" });
    }
};

module.exports = {
    getTheme,
    setTheme,
};