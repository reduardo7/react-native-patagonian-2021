import {
  createNavigationContainerRef,
  CommonActions,
  StackActions,
} from '@react-navigation/native';
import {
  COMPONENT_NAME as BOOK_DETAILS,
  RouteParams as BookDetailsRouteParams,
} from '../screens/BookDetails/BookDetails';
import {
  COMPONENT_NAME as CHARACTER_DETAILS,
  RouteParams as CharacterDetailsRouteParams,
} from '../screens/BookDetails/BookDetails';
import { COMPONENT_NAME as HOME } from '../screens/Home/Home';
import { COMPONENT_NAME as CHARACTERS } from '../screens/Characters/Characters';
import { COMPONENT_NAME as HISTORY } from '../screens/History/History';
import { COMPONENT_NAME as TAB_NAVIGATOR } from './TabNavigator';

interface ScreenProps {
  [BOOK_DETAILS]: BookDetailsRouteParams;
  [HOME]: never;
  [TAB_NAVIGATOR]: never;
  [HISTORY]: never;
  [CHARACTERS]: never;
  [CHARACTER_DETAILS]: CharacterDetailsRouteParams;

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
