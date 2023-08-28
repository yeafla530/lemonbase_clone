# Emotionjs

> Emotion은 JS로 CSS스타일을작성하기 위한 라이브러리이다 (CSS-in-JS)



## setting

### install

```
$ npm i @emotion/react @emotion/styled
// css props를 위해 설치
$ npm i @emotion/babel-plugin
```



`.babelrc`

emotion을 사용하고 코드 상단에 /** @jsx jsx */ 사용하지 않아도 되도록 설정

```
{
    "presets": ["@babel/preset-env", "@babel/preset-react", "@emotion/babel-preset-css-prop"], 
    "plugins": ["emotion"]
}
```





### create file

`.babelrc`

> css props를 하기 위해서 `babelrc 파일을 만드는 방법`과 `jsx Pragma 를 설정하는 방법`이 있는데 babelrc를 만드는 방법이 대중적이라 하여 만들었다 

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": ["emotion"]
}
```





## Usage in react

React에서는 2가지 문법으로 구현이 가능하다.

**1) @emotion/styled 패키지를 통한 styled component 패턴 **

**2) @emotion/react 패키지를 통한 css Prop 패턴** 



### @emotion/styled

> styled-component와 glamorous에서 영향받음
>
> 복잡한 css스타일을 작성하는 경우에는 style 템플릿 리터럴 방식을 사용하는 것이 좋다 
>
> 일반적인 css스타일만 사용한다면 styled 함수 사용

```jsx
import styled from '@emotion/styled'

// style 함수 방식
let SomeComp = styled.div({
  color: 'hotpink',

})

// style 템플릿 리터럴 방식
let AnotherComp = styled.div`
  color: ${props => props.color};
`
const Home: React.FC = () => {
    return (
        <SomeComp>
            안녕하세요
            <AnotherComp color="green">안녕하세요</AnotherComp>
        </SomeComp>
    )
}

export default Home;


```



### @emotion/react

```jsx
import { jsx, css, Global, ClassNames } from '@emotion/react'

render(
  <div css={{ color: 'hotpink' }}>
    <div
      css={css`
        color: green;
      `}
    />
    <Global
      styles={{
        body: {
          margin: 0,
          padding: 0
        }
      }}
    />
    <ClassNames>
      {({ css, cx }) => (
        <div
          className={cx(
            'some-class',
            css`
              color: yellow;
            `
          )}
        />
      )}
    </ClassNames>
  </div>
)
```



### 반복되는 스타일 JavaScript 변수로 정의

emotion 공식문서를 확인해보니 색상 및 기타 스타일의 상수를 javaScript변수로 정의하여 사용하라고 되어있다

```
src
 ㄴ theme
 	  ㄴ theme.js  // 반복되는 스타일 저장
```







## 참조

* [tistory emotion.js ](https://abangpa1ace.tistory.com/entry/CSSSide-Lib-Emotionjs)

* [styled-component, emotionjs 차이](https://velog.io/@bepyan/styled-components-%EA%B3%BC-emotion-%EB%8F%84%EB%8C%80%EC%B2%B4-%EC%B0%A8%EC%9D%B4%EA%B0%80-%EB%AD%94%EA%B0%80)

* [emotion으로 react 컴포넌트스타일하기](https://www.daleseo.com/emotion/)

* [antd컴포넌트에 emotion 적용하기](https://velog.io/@e_juhee/react-library)