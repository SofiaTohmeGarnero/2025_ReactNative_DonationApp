import { Category } from "../redux/reducers/Categories";

export const Routes = {
    Home: 'Home',
    Practice: 'Practice',
    SingleDonationItem: 'SingleDonationItem',
} as const;;

export type RootStackParamList = {
    Home: undefined;
    Practice: undefined;
    SingleDonationItem: {categoryInformation: Category};
};