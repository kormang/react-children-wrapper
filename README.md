# react-children-wrapper

Resolve React Provider Hell

Turn this code:

```JavaScript
<AppContext.AppProvider
  value={{
  ...this.setStateData(AppContext.CONTEXT_ID, AppContext.stateData),
    userAgent: pageProps.userAgent
  }}
>
  <JssProvider
    registry={this.pageContext.sheetsRegistry}
    generateClassName={this.pageContext.generateClassName}
  >
    <SocketProvider>
      <MuiThemeProvider theme={this.pageContext.theme}>
        <ThemeProvider theme={theme}>
          <GeolocationProvider>
            <ShopProvider>
              <UserProvider user={pageProps.user}>
                <Component pageContext={this.pageContext} {...pageProps} />
              </UserProvider>
            </ShopProvider>
          </GeolocationProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </SocketProvider>
  </JssProvider>
</AppContext.AppProvider>
```

into this:

```JavaScript
<ChildrenWrapper>
  <CPAppContext.AppProvider
    value={{
      ...this.setStateData(CPAppContext.CONTEXT_ID, CPAppContext.stateData),
      userAgent: pageProps.userAgent
    }}
  />
  <JssProvider
    registry={this.pageContext.sheetsRegistry}
    generateClassName={this.pageContext.generateClassName}
  >
    .
  </JssProvider>
  <SocketProvider />
  <MuiThemeProvider theme={this.pageContext.theme}>.<MuiThemeProvider>
  <ThemeProvider theme={theme}>.</ThemeProvider>
  <GeolocationProvider />
  <CartProvider />
  <UserProvider user={pageProps.user}>
  <Component pageContext={this.pageContext} {...pageProps} />
</ChildrenWrapper>
```

_For privider that require some children you can provide simple dot (.) as child, it will be overriden by next sibiling anyway._

`ChildrenWrapper` turns converts flat hierarchy as if siblings had actually parent-child relations ship. Real children are disacred, except for last sibling, it retains its children. See the source code, it is simple.

# How to use it?

Copy the code from `src/index.ts` or install the package with `yarn add react-children-wrapper` or `npm install react-children-wrapper`.

Import the component.

```JavaScript
import ChildrenWrapper from 'react-children-wrapper'
```

Transform your code like this:
This...

```JavaScript
  <ChakraProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>
```

...into this

```JavaScript
    <ChildrenWrapper>
      <ChakraProvider />
      <Provider store={store}>.</Provider>
      <App />
    </ChildrenWrapper>
```
