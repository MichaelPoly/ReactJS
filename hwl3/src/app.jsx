import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './app/components/myBlog/Menu';
import Login from './app/components/myBlog/Login';
// import BlogBoard from './app/components/myBlog/BlogBoard';

const menu = document.getElementById('leftBar');
const app = document.getElementById('app');
let items = [
    {id: 'mainBtn', name: 'Главная'},
    {id: 'aboutBtn', name: 'О нас'},
    {id: 'contactsBtn', name: 'Контакты'},
    {id: 'enterBtn', name: 'Вход'},
];



ReactDOM.render(
    <Menu items={items}/>,
leftBar);
$(document).ready(function () {
  $('.center').hide();
  $('.menuBtn').on('click', function () {
    console.log(this.id);
    let $win = this.id;
    switch ($win) {
      case 'mainBtn':
          $('.centerAct').removeClass('centerAct').addClass('center').hide();
          $('#blog').removeClass('center').addClass('centerAct').show();
        break;
      case 'aboutBtn':
          $('.centerAct').removeClass('centerAct').addClass('center').hide();
          $('#about').removeClass('center').addClass('centerAct').show();
        break;
      case 'contactsBtn':
          $('.centerAct').removeClass('centerAct').addClass('center').hide();
          $('#contacts').removeClass('center').addClass('centerAct').show();
        break;
      case 'enterBtn':
        ReactDOM.render(
            <Login />,
        app);
        break;
      default:

    }

  });
});
// ReactDOM.render(
//     <KanbanBoard cards={cardList} />,
// app);
