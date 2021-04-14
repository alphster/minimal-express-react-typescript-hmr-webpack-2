import React, { createElement, FC, useState } from 'react'
import ReactDOM from 'react-dom'

if (module.hot) {
  module.hot.accept();
}

const App: FC = () => {
  const [val, setVal] = useState(1)

  return <>{'Hello From React!'}{val}
    <button onClick={() => setVal(val + 1)}>Button</button>
  </>
}

ReactDOM.render(createElement(App), document.getElementById('root'));

