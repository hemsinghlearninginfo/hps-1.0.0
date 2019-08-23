import { Header, Fotter, AboutUs } from './Shared/index';
import { FAQPage } from 'Components/FAQ';
import { Error404 } from 'Components/Error';

import { NewsLetter, TermsAndConditions } from 'Components/Extras';

import { Notifications, GoUp, UploadFile } from 'Components/Shared';
import { SlideMasters } from 'Components/Master';
import { WriteUp, SlideWriteUps } from 'Components/WriteUp';
import { MarketPage } from 'Components/Market';
import { Home } from 'Components/Home';
import { Login, ForgotPassword } from 'Components/Login';
import { Register } from 'Components/Register';
import { Profile } from 'Components/UserProfile';
import { Messages } from 'Components/Messages'

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

    static Messages = Messages;
}