import {
  createNavigationContainerRef,
  CommonActions,
  StackActions,
} from '@react-navigation/native';
import { COMPONENT_NAME as BOOK_DETAILS } from '../screens/BookDetails/BookDetails';
import { COMPONENT_NAME as HOME } from '../screens/Home/Home';
import { COMPONENT_NAME as HISTORY } from '../screens/History/History';
import { COMPONENT_NAME as TAB_NAVIGATOR } from './TabNavigator';

interface ScreenProps {
  [BOOK_DETAILS]: {
    id: number;
    title: string;
  };
  [HOME]: never;
  [TAB_NAVIGATOR]: never;
  [HISTORY]: never;
}

type ScreenNames = keyof ScreenProps;

export const navigationRef = createNavigationContainerRef();

export function goToScreen<T extends ScreenNames>(name: T, params?: ScreenProps[T]) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.navigate(name, params));
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.goBack());
  }
}

export function replaceRoute<T extends ScreenNames>(name: T, params?: ScreenProps[T]) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
}
