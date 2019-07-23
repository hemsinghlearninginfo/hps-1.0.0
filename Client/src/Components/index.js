import { Header, Fotter } from './Shared/index';
import { FAQPage } from './FAQ/index'; 
import { Error404 } from './Error'; 

export default class MyComponent {
    static Header = Header;
    static Fotter = Fotter;


    static FAQPage = FAQPage;

    static Error404 = Error404;
}