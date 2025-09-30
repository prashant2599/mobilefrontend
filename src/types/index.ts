export interface ExampleComponentProps {
    title: string;
    onPress: () => void;
}

export interface HomeScreenProps {
    navigation: any; // Replace 'any' with the specific type if using a navigation library
}

export interface NavigationParams {
    screen: string;
    params?: object; // Define more specific types as needed
}