**Programming Best Practices: **

1. Keep components small. This way they are more testable. Easy to find a problem, and fix the problem without affecting other areas of the code base. 
2. Prefer make component dynamic and reusable using props.
3. create separate files for utils, services, service utils, transformation logic.
4. Create react component with Controller-View architecture. 
5. When creating UI layouts, make them adjust to the container or browser, so that they fit well, and look good on all browsers of different screen sizes. 
6. Make pages Mobile and Tablet responsive. 
7. Keep literals in a separate constant files.
8. Keep environment configuration in separate config files. 
9. Use flags to easily enable or disable feature
10. Make the code readable - function names, variable names, file names
11. Keep component artifacts - styles, utils, helper functions etc. in single folder. 
12. Always get code reviewed by other engineers. This opens up more perspective and ideas to problem solving and better solutions.
13. When using GraphQL services - prefer to use fragments. 
14. Apply design patterns wherever possible. 
15. Write unit tests for your code to make sure this works with all possible inputs. 
16. Write integration tests to make sure it works in real time for the users. 
17. Outsource code - wherever possible - make files small.
18. Apply lazy loading wherever possible
19. Optimise code for performance and smaller bundle size. 
20. Apply debouncing and throttling for time consuming operations.