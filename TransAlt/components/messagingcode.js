
  componentDidMount() {

    firebase.messaging().hasPermission().then(enabled => {
      if (enabled) {
        // user has permissions

        this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification : Notification) => {
          // Process your notification as required
          // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
        });
        this.notificationListener = firebase.notifications().onNotification((notification : Notification) => {
          // Process your notification as required
        });

      } else {
        // user doesn't have permission

        firebase.messaging().requestPermission().then(() => {
          // User has authorised

          this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification : Notification) => {
            // Process your notification as required
            // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
          });
          this.notificationListener = firebase.notifications().onNotification((notification : Notification) => {
            // Process your notification as required
          });

        }).catch(error => {
          // User has rejected permissions
        });

      }
    });

    this.unsubscribe = this.ref.limit(this.state.page).onSnapshot(this.onCollectionUpdate)

    firebase.analytics().setCurrentScreen('BikeForecast');

  }

  componentWillUnmount() {
    this.unsubscribe();
    this.notificationDisplayedListener();
    this.notificationListener();
  }
