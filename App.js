/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';

const App = () => (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
    </Provider>
);

export default App;
