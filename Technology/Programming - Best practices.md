*Programming Best Practices: *

Keep components small. This way they are more testable. Easy to find a problem, and fix the problem without affecting other areas of the code base.
Prefer make component dynamic and reusable using props.
create separate files for utils, services, service utils, transformation logic.
Create react component with Controller-View architecture.
When creating UI layouts, make them adjust to the container or browser, so that they fit well, and look good on all browsers of different screen sizes.
Make pages Mobile and Tablet responsive.
Keep literals in a separate constant files.
Keep environment configuration in separate config files.
Use flags to easily enable or disable feature
Make the code readable - function names, variable names, file names
Keep component artifacts - styles, utils, helper functions etc. in single folder.
Always get code reviewed by other engineers. This opens up more perspective and ideas to problem solving and better solutions.
When using GraphQL services - prefer to use fragments.
Apply design patterns wherever possible.
Write unit tests for your code to make sure this works with all possible inputs.
Write integration tests to make sure it works in real time for the users.
Outsource code - wherever possible - make files small.
Apply lazy loading wherever possible
Optimise code for performance and smaller bundle size.
Apply debouncing and throttling for time consuming operations.