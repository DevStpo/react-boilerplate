import React from 'react'
import { hot } from 'react-hot-loader'

const Warning = React.lazy(() => import('./Warning'))

class App extends React.Component {
  state = {
    count: 0
  }

  render() {
    const { count } = this.state

    return (
      <div>
        <h1>Hello!!!!</h1>
        <img src="./logo.png" alt="Logo" />
        <h2 className={count > 3 ? 'warning' : null}>
          Count: {this.state.count}
        </h2>
        {count > 3 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
        <button
          onClick={() => this.setState(state => ({ count: state.count + 1 }))}
        >
          +
        </button>
      </div>
    )
  }
}

export default hot(module)(App)
