# Redux를 이용한 TodoList 
#### 지난주에는 Redux 없이 props와 state로만 구현했었고, 이번주에는 Redux로 구현하였습니다.

# 기능
####  제목과 내용을 입력 후 추가버튼을 누르면 입력값이 담긴 TodoList가 추가됩니다.  
####  TodoList 안에는 완료하기 버튼과 삭제하기 버튼이 있습니다.  
####  완료하기 버튼을 누르게 되면 working section에서 done section으로 넘어가게 되며,</br>
####  삭제하기 버튼을 누르게 되면 페이지에서 해당 TodoList가 삭제됩니다.

# 지난 주와 비교하여 추가된 기능
#### 지난주와 비교했을 때, 세부정보를 눌러 자신이 입력한 정보를 더 자세히 볼 수 있는 기능을 추가했습니다.

# 폴더구조
```bash
📦src
 ┣ 📂components 
 ┃ ┣ 📜Detail.jsx
 ┃ ┣ 📜Form.jsx
 ┃ ┣ 📜Header.jsx
 ┃ ┣ 📜Layout.jsx
 ┃ ┣ 📜List.jsx
 ┃ ┗ 📜Todo.jsx
 ┣ 📂pages
 ┃ ┣ 📜TodoDetail.jsx  // TodoList의 세부사항을 클릭할 시 넘어가는 페이지 입니다.
 ┃ ┗ 📜TodoList.jsx    // 메인 페이지입니다.
 ┣ 📂redux
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜configStore.js
 ┃ ┗ 📂modules
 ┃ ┃ ┗ 📜todos.js
 ┣ 📂shared
 ┃ ┗ 📜Router.js
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜App.test.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┣ 📜logo.svg
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
```

## 컴포넌트 구조
#### Layout
컴포넌트들의 전체적인 틀입니다.
#### Header 
페이지 맨위를 장식하는 컴포넌트 입니다.
#### Form 
User에게 input값을 받아 추가하기 버튼을 누르면 이를 dispatch 시키는 컴포넌트 입니다.
#### List
TodoList가 뿌려질 section에 해당하는 컴포넌트 입니다. 처음 추가된 todoList는 isdone의 value값이
false인 채로 전달되어지고 isdone이 false인 TodoList들은 working section에, 그렇지 않은 TodoList들은 
Done section에 뿌려집니다.
#### Todo
추가하기 버튼을 누르면 이 box에 입력값이 담깁니다.
입력값 외에 세부사항, 완료하기, 삭제하기 버튼이 들어 있습니다.
#### Detail
Todo에서 세부사항을 누르면 넘어갈 컴포넌트 입니다.
이 안에서는 사용자의 입력값을 더 크게 보여주며, TodoList의 ID, 이전으로 버튼이 추가적으로 존재합니다.
이 컴포넌트는 page중 TodoDetail 페이지와 연결되어 있으며, 이전으로 버튼을 누르면 
다시 원래대로 TodoList 페이지로 돌아갑니다.

