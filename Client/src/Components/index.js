import { Header, Fotter, AboutUs } from './Shared/index';
import { FAQPage } from './FAQ';
import { Error404 } from './Error';

import { NewsLetter, TermsAndConditions } from './Extras';

import { Notifications, Expire, GoUp, UploadFile } from './Shared';
import { SlideMasters } from './Master';
import { WriteUp, SlideWriteUps } from './WriteUp';
import { Home } from './Home';
import { Login } from './Login';
import { Register } from './Register';
import { Profile } from './UserProfile';

export default class MyComponent {
    static Header = Header;
    static Fotter = Fotter;
    static AboutUs = AboutUs;

    static Home = Home;
    static FAQPage = FAQPage;

    static Error404 = Error404;
    static NewsLetter = NewsLetter;
    static TermsAndConditions = TermsAndConditions;

    static Notifications = Notifications;
    static Expire = Expire;
    static GoUp = GoUp;
    static UploadFile = UploadFile;

    static SlideMasters = SlideMasters;
    static SlideWriteUps = SlideWriteUps;
    static WriteUp = WriteUp;

    static Login = Login;
    static Register = Register;
    static Profile = Profile;
}