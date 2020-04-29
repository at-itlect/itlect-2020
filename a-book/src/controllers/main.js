const data = {}
const main = {
    title: "Главная",
    url: '/',
    path: '../views/layouts/default',
    content: "Главная",
    navigation: true,
    links: [
        { name: "Главная", href: '/', active: true  },
        { name: "Контакты", href: '/contacts', active: false  },
        { name: "О нас", href: '/about', active: false  }
    ],
    data: data
};

module.exports.index = function (req, res) {
    res.render(main.path, main);
}