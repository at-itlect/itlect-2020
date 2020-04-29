const data = {
    name: 'Abzal.Tankibayev',
    email: 'Abzal.Tankibayev@nitec.kz',
    phone: '+7-701-5-999-458',
    address: 'RK, Nur-Sultan, Silent street 20, 20'
}
const about = {
    title: "О нас",
    url: '/about',
    path: '../views/pages/about',
    content: "О нас",
    navigation: true,
    links: [
        { name: "Главная", href: '/', active: false  },
        { name: "Контакты", href: '/contacts', active: false  },
        { name: "О нас", href: '/about', active: true  }
    ],
    data: data,
};

module.exports.index = function (req, res) {
    res.render(about.path, about);
}