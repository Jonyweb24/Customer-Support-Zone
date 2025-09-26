1. What is JSX, and why is it used?

	## JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript. <br/>JSX makes     it easier to create and visualize the structure of React components.<br/>
    It is compiled to standard JavaScript using tools like Babel.
	#It is used:
	-Makes code more readable by combining UI and logic in one place. <br/>
	-Enables React to efficiently update the DOM using its virtual DOM. <br/>
	-Allows embedding JavaScript expressions directly in the markup using {}. <br/>

3. What is the difference between State and Props?
    ### State: 
   -State is a local data storage that is mutable and managed within a component.<br/>
   -State Mutability	Can be changed using hooks like useState. <br/>
   -Its Scope	is Local to the component where it is defined.<br/>
   -Its Purpose	is to handle dynamic data that can change over time.    <br/>   
   ### Props :
   -Props (short for properties) are read-only data passed from parent to child components. <br/>  
   -Props Cannot be changed by the child component. <br/>  
   -Props Passed from parent to child components.<br/>  
   -Props are used to provide data from parent to child and configure child components.<br/>

4. What is the useState hook, and how does it work? 
	### The useState hook is a function in React that allows users to add state to functional components. <br/>
	-It returns an array with two items:
         i.  The current state value.<br/>
        ii. A function to update the state.<br/>
	 ##It works like:
	-When the state is updated using the setter function, React re-renders the component to reflect the new value. 
	
5. How can you share state between components in React?
	### State can be shared between components by:
	-Lifting State Up
	-Move the state to the nearest common parent component and pass it as props to child components. <br/>
	-Using Context API
	-Provides a way to pass data through the component tree without manually passing props at every level. <br/>
	- State Management Libraries
	-Use libraries like Redux, Zustand, or Recoil for global state management in larger applications.<br/>

6. How is event handling done in React?
    ### In React, events are handled using camelCase syntax and passing a function as the event handler.<br/>
     Unlike HTML, you do not use quotes around the function.
    # Key points:
     -Use onClick, onChange, onSubmit, etc.
     -Use functions to handle the events.
     -For class components, sometimes binding this is needed.
---------------------------------------------------------------------------------------------------------------------------------------------------	
   
	
	

	
