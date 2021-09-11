import {
  createNavigationContainerRef,
  CommonActions,
  StackActions,
} from '@react-navigation/native';
import { COMPONENT_NAME as BOOK_DETAILS } from '../screens/BookDetails/BookDetails';
import { COMPONENT_NAME as EXPERIMENTAL } from '../screens/Experimental/Experimental';
import { COMPONENT_NAME as HOME } from '../screens/Home/Home';
import { COMPONENT_NAME as WELCOME } from '../screens/Welcome/Welcome';
import { COMPONENT_NAME as AUTH_STACK } from './AuthStack';
import { COMPONENT_NAME as TAB_NAVIGATOR } from './TabNavigator';

type ScreenNames =
  | typeof BOOK_DETAILS
  | typeof EXPERIMENTAL
  | typeof HOME
  | typeof WELCOME
  | typeof AUTH_STACK
  | typeof TAB_NAVIGATOR;

export const navigationRef = createNavigationContainerRef();

export function goToScreen(name: ScreenNames, params: object = {}) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.navigate(name, params));
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.goBack());
  }
}

export function replaceRoute(name: ScreenNames, params: object = {}) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
}

export function resetNavigation() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'AuthStack' }],
      }),
    );
  }
}
