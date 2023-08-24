# Ant Design

## install

```
npm install antd --save
```



### ⚙설정

Note: You should import `react`、`react-dom`、`dayjs` before using `antd.js`.

`antd` provides a built-in ts definition, don't install `@types/antd`

```
npm install dayjs
```



## Usage

전체 파일을 로드하지 않고 일부 디자인만 가져와서 사용한다

```jsx
import React from 'react';
import { DatePicker } from 'antd';

const App = () => {  
    return <DatePicker />;
};

export default App;
```



## AntDesign + Emotionjs Example

```jsx
import './App.css';
import styled from '@emotion/styled'
import {Button} from 'antd'

const MyButton = styled(Button)`
  background-color: #fff;
  color: red;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyButton>click</MyButton>
      </header>
    </div>
  );
}

export default App;
```







## 참조

* [Ant Design Library Youbube](https://www.youtube.com/watch?v=03rzGKtEZmw&list=PL-JTnqZPF5z2qTGwNkYln3m0pA0qfgHFR&index=1&t=12s)
* [Ant Design 공식문서](https://ant.design/docs/react/use-with-create-react-app)

* [레몬베이스 홈페이지 목표관리 설명](https://www.lemonbase.team/e8ffd2d4-7c28-4357-8af8-ac58f5609fcc)

* [antd컴포넌트에 emotion 적용하기](https://velog.io/@e_juhee/react-library)