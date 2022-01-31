<h1 align="center">
    💰 Savings Goal Plan Simulator    
</h1>
<h4 align="center">
  Find out how much you need to save per month! Let's plan!
</h4>

<p align="center">
  <img alt="MIT License" src="https://img.shields.io/github/license/Matheuslm10/savings-goal-plan-simulator?style=plastic">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Matheuslm10/savings-goal-plan-simulator?style=plastic">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Matheuslm10/savings-goal-plan-simulator?style=plastic">
  <img alt="Javascript percentage" src="https://img.shields.io/github/languages/top/Matheuslm10/savings-goal-plan-simulator?style=plastic">    
</p>

<p align="center">
 <a href="#sparkles-the-app">The App</a> •
 <a href="#bulb-requirements">Requirements</a> • 
 <a href="#mag-test-cases">Test Cases</a> • 
 <a href="#hammer_and_wrench-technologies">Technologies</a> • 
 <a href="#computer-how-to-run">How to run</a> • 
 <a href="#balance_scale-license">License</a> • 
 <a href="#man_technologist-author">Author</a>
</p>

## :sparkles: The App

This app consists of a page where you can simulate saving towards a saving goal, for example "Buy a house". Choose the amount you want to save, the date you plan to reach that goal and see how much you need to save each month and for how many months, until you reach your goal.

<p align="center">
  <img width="650" alt="Desktop" src="https://user-images.githubusercontent.com/17602947/151803234-78ee67eb-b721-40b7-bf36-a260511213e8.gif"> 
  <img width="295" alt="Mobile" src="https://user-images.githubusercontent.com/17602947/151803284-7e121a9a-f621-4850-bde3-590df158f0ee.gif">
</p>

## :bulb: Requirements

- :white_check_mark: The user should only be able to enter number on the total amout input;
- :white_check_mark: The user should only be able to enter positive values on the total amout input;
- :white_check_mark: The user should see the total amount displayed formatted following the american pattern;
- :white_check_mark: The user should only be able to select future months on the date input;
- :white_check_mark: The user should see the next month when clicking on the right arrow of the date input;
- :white_check_mark: The user should se the previous month when clicking on the left arrow of the date input;
- :white_check_mark: The user should be able to select the next month, of the date input, when typing the Right arrow key on the keyboard;
- :white_check_mark: The user should be able to select the previous month, of the date input, when typing the Left arrow key on the keyboard.

## :mag: Test Cases

| Test Case ID | Test Case Description | Test Steps | Test Data | Expected Results | Actual Results | Pass/Fail |
|:---:|---|---|---|---|---|:---:|
| #01 | The user should be able to see the correct monthly amount displayed depending on the total amount entered and the selected date. | 1. Enter totalAmount;<br>2. Select reachDate. | currentDate = January 2022;<br>totalAmout = 5,000;<br>reachDate =  June 2022;<br>totalMonthlyDeposits = 5; | monthlyAmout = 1,000; | monthlyAmout = 1,000; | Pass |
| #02 | The user should be able to see the correct monthly amount displayed depending on the total amount entered and the selected date. | 1. Enter totalAmount;<br>2. Select reachDate. | currentDate = January 2022;<br>totalAmout = 5,000;<br>reachDate =  February 2022;<br>totalMonthlyDeposits = 1; | monthlyAmout = 5,000; | monthlyAmout = 5,000; | Pass |
| #03 | The user should be able to see the correct monthly amount displayed depending on the total amount entered and the default date. | 1. Enter totalAmount. | currentDate = January 2022; | monthlyAmout = 5,000; | monthlyAmout = 5,000; | Pass |
| #04 | The user should be able to see the correct monthly amount displayed depending on the default total amount and the selected date. | 1. Select reachDate. | currentDate = January 2022;<br>[default] totalAmout = 0;<br>reachDate =  March 2022;<br>totalMonthlyDeposits = 2; | monthlyAmout = 0; | monthlyAmout = 0; | Pass |

## :hammer_and_wrench: Technologies

- [React JS](https://reactjs.org/)
  - [Custom Hooks](https://reactjs.org/docs/hooks-custom.html#extracting-a-custom-hook)
  - [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Styled Components](https://www.styled-components.com/)
- [React Currency Input Field Component](https://github.com/cchanxzy/react-currency-input-field)
- [Moment.js](https://momentjs.com/)


## :computer: How to run

Clone the repository:

```
$ git clone https://github.com/Matheuslm10/savings-goal-plan-simulator.git
```

Enter the directory:

```
$ cd savings-goal-plan-simulator
```

Install the dependencies:

```
$ yarn install
```

Run the application:

```
$ yarn start
```

Now you can access `http://localhost:3000` in your browser.

### Linting and Format

```
yarn lint
yarn format
```

### Testing

```
yarn test
```

### Linting and Format

```
yarn lint
yarn format
```

### Testing

```
yarn test
```

## :balance_scale: License

This repository is licensed by MIT LICENSE. For more detailed information, read the LICENSE file contained in that repository.

## :man_technologist: Author

[![Linkedin Badge](https://img.shields.io/badge/-Matheus_Machado-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/matheusmachado-dev/)  
:wave: Hire... Contact me!
