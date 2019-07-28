import { Header, Fotter } from './Shared/index';
import { FAQPage } from './FAQ'; 
import { Error404 } from './Error'; 

import NewsLetter  from './Extras/NewsLetter';

import {Notifications} from './Shared';

export default class MyComponent {
    static Header = Header;
    static Fotter = Fotter;


    static FAQPage = FAQPage;

    static Error404 = Error404;
    static NewsLetter = NewsLetter;

    static Notifications = Notifications;
}