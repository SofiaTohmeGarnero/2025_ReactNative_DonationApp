import { Category } from "../redux/reducers/Categories";

export const Routes = {
    Home: 'Home',
    Login: 'Login',
    Registration: 'Registration',
    Practice: 'Practice',
    SingleDonationItem: 'SingleDonationItem',
} as const;;

export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Registration: undefined;
    Practice: undefined;
    SingleDonationItem: {categoryInformation: Category};
};