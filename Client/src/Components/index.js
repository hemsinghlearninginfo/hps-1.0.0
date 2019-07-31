import { Header, Fotter, AboutUs } from './Shared/index';
import { FAQPage } from './FAQ';
import { Error404 } from './Error';

import { NewsLetter } from './Extras/NewsLetter';

import { Notifications, Expire } from './Shared';
import { SlideMasters } from './Master';
import { SlideWriteUps, WriteUp } from './WriteUp';

export default class MyComponent {
    static Header = Header;
    static Fotter = Fotter;
    static AboutUs = AboutUs;


    static FAQPage = FAQPage;

    static Error404 = Error404;
    static NewsLetter = NewsLetter;

    static Notifications = Notifications;
    static Expire = Expire;

    static SlideMasters = SlideMasters;
    static SlideWriteUps = SlideWriteUps;
    static WriteUp = WriteUp;
}