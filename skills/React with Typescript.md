# React with Typescript



## Function Component

[React.FC는 더이상 사용하지 않는다!](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components)

```jsx
// props type 선언
type AppProps = {
  message: string;
};

// 함수 구성 요소를 선언하는 가장 쉬운 방법, 반환유형 유추 가능
const App = ({ message }: AppProps) => <div>{message}</div>;

// 실수로 다른 유형을 반환하는 경우 오류가 발생하도록 반환 유형에 주석을 달 수 있습니다.
const App = ({ message }: AppProps): JSX.Element => <div>{message}</div>;
```









## 참조

* [react-typescript cheastsheet](https://react-typescript-cheatsheet.netlify.app/)

* [React.FC에대하여](https://story.pxd.co.kr/1650)