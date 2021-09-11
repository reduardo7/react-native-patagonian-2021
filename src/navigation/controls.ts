import {
  createNavigationContainerRef,
  CommonActions,
  StackActions,
} from '@react-navigation/native';

import { COMPONENT_NAME as BOOK_DETAILS } from '../screens/BookDetails/BookDetails';
import { COMPONENT_NAME as HOME } from '../screens/Home/Home';
import { COMPONENT_NAME as TAB_NAVIGATOR } from './TabNavigator';

type ScreenNames = typeof BOOK_DETAILS | typeof HOME | typeof TAB_NAVIGATOR;

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
