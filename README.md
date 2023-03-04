# Training Test Task 

Основне завдання даного таску - реалізувати рендер картки юзера з відповідними інформаційними полями. За бажанням реалізувати галерею вказаних карток з логікою зміни кількості фоловерів.

Реалізовані компоненти відповідать технічному завданню. 
В той же час, особисто мною, внесені корестиви щодо наявності в картці інформаційного поля імені юзера, за яким планується спостерігати. 
Суть цього рішення заключається в тому, що в разі використання вказаних компонентів у реальному застосунку, користувач, який зайде на картку юзера буде бачити лише його фото (яке в принципі може бути відсутнім), кількість твітів та фоловерів. Логічно припустити також, що не всі юзери відоі нам в обличчя. То постає логічнее запитання за ким же ми будемо спостерігати у разі відсутності імені та фото юзера !?

# Технічне завдання:

1. Відповідно до макету (https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?node-id=0%3A1) потрібно реалізувати картку юзера.

2. При клікові на кнопку Follow - її текст змінюється на Following. Також змінюється колір кнопки. А до кількості фоловерів додається і ваш. Тобто,початкова кількість складає 100,500 фоловерів. При клікові на кнопку буде 100,501.

3. При оновлені сторінки має фіксуватись кінцевий результат дій юзера. Тобто,якщо клікнути по кнопці і оновити сторінку - то кнопка все рівно залишається в стані Following із відповідним кольором, а кількість фоловерів НЕ зменшується до початкового значення.

4. При повторному клікові на кнопку її текст та колір змінюються до початкового стану. Також змінюється і кількість фоловерів. Вона зменшується на 1 (100,500).

5. В коді цифра 100,500 має бути прописана одним значенням (100500). В UI - виведено через кому (100,500).

# Додатково

1. Можете створити локальну базу даних (окремий файл json) зі слідуючими полями: id, user, tweets, followers, avatar (див код нижче).

2. Зображення аватарів мають бути прописані окремими url у властивості“avatar”. Можете підібрати їх самостійно.

3. Має бути від 3 до 10 юзерів з різними даними (на ваш розсуд) в базі.

4. Відповідно до бази потрібно згенерувати відповідну кількість карток на фронт-частині застосунку.

5. Кожна картка має бути незалежною функціонально одна від одної.

6. Решта вимог аналогічні до вищеописаного технічного завдання.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
