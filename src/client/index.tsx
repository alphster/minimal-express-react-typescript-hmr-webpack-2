import React, { createElement, FC } from 'react'
import ReactDOM from 'react-dom'

if (module.hot) {
  module.hot.accept();
}

const App: FC = () => {
    return <>{'Hello From React!'}</>
}

ReactDOM.render(createElement(App), document.getElementById('root'));