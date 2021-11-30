### Programming Best Practices:

#### A. React
1. > Keep components small. This way these are more testable, easy to find where the problem is, and easy to fix a problem without affecting other areas of the codebase, and easy to refactor. 
2. > Prefer to make components dynamic and reusable using props.
3. > Create separate files for utils, services, service utils, transformation logic.
4. > Create React components with Controller-View architecture. 
5. > When creating UI layouts, make them adjust to the container or browser, so that they fit well, and look good on all browsers of different screen sizes. 
6. > Make pages Mobile and Tablet responsive. 
7. > Keep literals in separate constant files.
8. > Keep environment configuration in separate config files. 
9. > Use flags to easily enable or disable features
10. > Make the code readable - function names, variable names, file names
11. > Keep component artifacts - styles, utils, helper functions, etc. in a single folder. This way these are independent, reusable, and easily movable.
12. > Always get code reviewed by other engineers. This opens up more perspective and ideas for problem-solving and the solution and code quality gets better and stronger.
13. > When using GraphQL services - prefer to use fragments. 
14. > Apply design patterns wherever possible. 
15. > Write unit tests for your code to make sure this works with all possible inputs. 
16. > Write integration tests to make sure it works in real-time for the users. 
17. > Outsource code - wherever possible - make files small.
18. > Apply lazy loading wherever possible
19. > Optimise code for performance and smaller bundle size. 
20. > Apply debouncing and throttling for time-consuming operations.
21. > Use local variables, not global variables  - if this variable is of no use to other functions. A globally created variable will last longer in memory and overall the code will need more space. On the contrary, a localized variable gets destroyed when the function execution is complete.