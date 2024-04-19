import { LoginPage } from '../pages/Login';
import { HomePage } from '../pages/HomePage';

const loginPage = new LoginPage();
const homePage = new HomePage();

describe('Testowanie strony logowania', () => {
    it('Test 1: powinno zalogować i wylogować użytkownika z user888@gmail.com', () => {
        loginPage.visit();
        loginPage.login('user888@gmail.com', '1234567890');
        homePage.logout();
    });
});

describe('Testowanie strony logowania', () => {
    it('Test 2: powinno zalogować i wylogować użytkownika z testowyqa@qa.team', () => {
        loginPage.visit();
        loginPage.login('testowyqa@qa.team', 'QA!automation-1');
        homePage.logout();
    });
});