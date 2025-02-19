import { CommonActions, StackActions } from '@react-navigation/native';

class NavigationService {
  private static navigator: any;

  public static setTopLevelNavigator(navigatorRef: any) {
    this.navigator = navigatorRef;
  }

  public static navigate(routeName: string, params?: any) {
    this.navigator.dispatch(
      CommonActions.navigate({
        name: routeName,
        params,
      }),
    );
  }

  public static setCustomParams(params: any, routeKey: string) {
    this.navigator.dispatch({
      ...CommonActions.setParams({ params }),
      source: routeKey,
    });
  }

  public static navigateToStack(stackName: string, action = {}) {
    const navigateAction = CommonActions.navigate(stackName, action);
    this.navigator.dispatch(navigateAction);
  }

  public static push(routeName: string, routeParams?: any) {
    const pushAction = StackActions.push(routeName, routeParams);
    this.navigator.dispatch(pushAction);
  }

  public static dispatch(action: any) {
    this.navigator.dispatch(action);
  }
}

export default NavigationService;
