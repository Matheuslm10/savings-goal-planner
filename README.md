<h1 align="center">
    💰 Savings Goal Planner    
</h1>
<h4 align="center">
  Find out how close you are to your goal! Let's plan!
</h4>

<p align="center">
  <img alt="MIT License" src="https://img.shields.io/github/license/Matheuslm10/savings-goal-planner?style=plastic">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Matheuslm10/savings-goal-planner?style=plastic">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Matheuslm10/savings-goal-planner?style=plastic">
  <img alt="Javascript percentage" src="https://img.shields.io/github/languages/top/Matheuslm10/savings-goal-planner?style=plastic">    
</p>

<p align="center">
 <a href="#sparkles-the-app">The App</a> •
 <a href="#bulb-business-requirements">Business Requirements</a> • 
 <a href="#mag-test-cases">Test Cases</a> • 
 <a href="#jigsaw-the-development-process">The Development Process</a> •   
 <a href="#hammer_and_wrench-technologies">Technologies</a> • 
 <a href="#atom_symbol-context-data">Context Data</a> •
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

## :bulb: Business Requirements

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

## :jigsaw: The Development Process

### Technical Decisions

Before starting the development, I meticulously analyzed the business rules, rewriting them so that I could understand what needed to be delivered, and I took some time to think about the most important test cases in order to validate the use cases. I also tried to anticipate some technical decisions (not all, as some will always come up in the middle of the process).

For this application I chose to use the Context API instead of Redux. The reasons that led me to this decision were:
The application has only one page, proving to be simple in terms of sharing state.
The application would not require complex management of state data, basic information sharing would be enough.
I would need to be able to perform the setup quickly (due to the short time to deliver) and this I knew the Context API would offer me.

An interesting convention that I adopted for this project was to keep the styles in separate files, and when importing use the letter “S”. The result is something like “<S.Component>”, which can help future code contributors to differentiate “styled components” from common components.

To perform operations between dates and for the masking of monetary values, I preferred to use libs, which helped to save me time.

### Methodology

Before start developing, I quickly created a TO-DO list so I could orient myself towards my progress. It also helped me prioritize the most important tasks, the ones that would add the most value to the end user.
I used TDD (Test Driven Development) to implement code related to business rules. In addition to guaranteeing quality for my commits, this technique helps me to think simple and not get stuck looking for crazy solutions.

### Next steps

If I had more time to work on the application and imagining a scenario in which I could contribute to the evolution of this product together with a team, I believe I could work on some improvements.

To improve the User Experience I would definitely review all the flows with a Screen Reader and make the necessary changes to ensure the application is accessible. Also, I would suggest to my team that we put some dialog on the screen to allow users to tell how their experience using the application is going. The feedback would certainly help to improve the experience offered by the product.

In terms of maintainability, it would be important to create more atomic components that could serve different parts of the application, such as Button, Text and Alert.
And also use variables for colors, facilitating future changes.

For a quality code I would propose to my team practices such as using a hook (with husky lib) that would execute the unit tests before a commit, and to increase the reliability of the team's deliveries, I would implement E2E tests using a tool called Cypress (which I already had the opportunity to use in a previous project) or even the Testing Library.

## :hammer_and_wrench: Technologies

- [React JS](https://reactjs.org/)
  - [Custom Hooks](https://reactjs.org/docs/hooks-custom.html#extracting-a-custom-hook)
  - [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Styled Components](https://www.styled-components.com/)
- [React Currency Input Field Component](https://github.com/cchanxzy/react-currency-input-field)
- [Moment.js](https://momentjs.com/)

## :atom_symbol: Context Data

This project uses the React Context API. The three main components (TotalAmountInput, ReachDateInput and MonthlyAmountSection) interact to the data provided by the context as follows:

<p align="center">
  <img alt="Context Data Flow Diagram" src="https://user-images.githubusercontent.com/17602947/151841881-5aecc7ed-bca7-41e4-b4ad-1d7124651409.png"> 
</p>

## :computer: How to run

Clone the repository:

```
$ git clone https://github.com/Matheuslm10/savings-goal-planner.git
```

Enter the directory:

```
$ cd savings-goal-planner
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

## :balance_scale: License

This repository is licensed by MIT LICENSE. For more detailed information, read the LICENSE file contained in that repository.

## :man_technologist: Author

[![Linkedin Badge](https://img.shields.io/badge/-Matheus_Machado-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/matheusmachado-dev/)  
:wave: Contact me!
