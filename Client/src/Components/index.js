import { Header, Fotter, AboutUs } from './Shared/index';
import { FAQPage } from './FAQ';
import { Error404 } from './Error';

import { NewsLetter, TermsAndConditions } from './Extras';

import { Notifications, GoUp, UploadFile } from './Shared';
import { SlideMasters } from './Master';
import { WriteUp, SlideWriteUps } from './WriteUp';
import { MarketPage } from './Market';
import { Home } from './Home';
import { Login, ForgotPassword } from './Login';
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
    static GoUp = GoUp;
    static UploadFile = UploadFile;

    static SlideMasters = SlideMasters;
    static SlideWriteUps = SlideWriteUps;
    static WriteUp = WriteUp;

    static Login = Login;
    static ForgotPassword = ForgotPassword;
    static Register = Register;
    static Profile = Profile;

    static MarketPage = MarketPage;
}