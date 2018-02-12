//import {message} from './message';
import * as lib from './message';
import emailFunc from './message';

lib.message('Модуль вызван из index.js');
lib.showUser();
emailFunc('1@2.ru');