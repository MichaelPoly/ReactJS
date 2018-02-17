import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './app/components/Menu';

const app = document.getElementById('app');

const items = [
    {href: '/', name: 'Главная'},
    {href: '/about', name: 'О нас'},
    {href: '/contacts', name: 'Контакты'},
];

ReactDOM.render(
    <Menu myTitle="Основное меню сайта" items={items}>Текст выводится под меню</Menu>,
app);