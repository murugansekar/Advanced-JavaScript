/*
1) Watch uptill the 19th min and explain about how Execution context goes about executing callback function. Explain each step
Ans:- The callback function gets registered in Web API.When certain conditions are satisfied like timer expired or eventListener activated, the callBack function gets pushed into CallBack Queue. Event Loop keeps checking the CallStack unitll CallStack gets empty.  when all code got executed the GEC gets poped off the callStack and then functions present in callback queue gets opportunity to enter call Stack. The event Loop puts the callBack functions present in the callBack queue, into the CallStack one by one following FIFO concept.

2) When is the global execution context removed from the stack?
Ans:-GEC will be removed from callStack once all the code gets executed.

3)Continue watching uptill 25th min and explain how does the DOM APIs and how callback is encounter and stored in event loop and finally when is it executed
Ans:-DOM APIs is a ability given by WEB API (browser) to the JS. When Some dom functions are used in JS it gets calls window.DOM_API. Then DOM APi finds the element in html and returns to JS. The callback function and respective gets registered in WEB API and it will be present in web api untill manully removed or browser gets closed. When certain confitions like particular event is happened, the callback function executes after callStack gets emplty. 

4)Continue watching uptill 27min 30 sec and explain why do we need the callback queue
Ans:-When multiple callback functions are ready to be executed they need to executed in the FIFO order. And even though the callback functions are ready then can be executed only when GEC gets poped out of CallStack so as a waiting place and to ensure sequence we need callback queue.

5)Continue watching uptill 36th min. Explain how does fetch work when clubbed with cb.
Ans:-fetch is an Web APi which is used to make network calls to server. The fetch callback function waits untill data is returned from server. When fetch Callback function is ready to be executed it gets pushed into Microtask queue which has higher priority than callback queue to enter into CallStack via event loop
6) Complete the video What is microtask queue and how is it different
Microtask queue has higher priority than callback queue to enter into CallStack via event loop. when multiple functions are present in Microtask queue, the microtask queue gets emptied first before general callback queue. CallBack functions comig from promises and mutation observers will alone be queued in Multitask queue
7)What is starvation ?
When Multiple micro tasks or functions are created recursively in microtask queue, it never gets empty and the general callback queue never gets an opportunity to enter Callstack. This is called starvation
*/