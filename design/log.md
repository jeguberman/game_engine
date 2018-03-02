# Preamble
This project is already basically underway. I am keeping a log because I find the solutions I am arriving at to be very interesting, and worth noting what I would do differently if I were to start again.

It's worth noting I will likely never look at this log again. I might, at least once, perhaps twice, but likely I won't. In fact I may never even update it again. I have short term memory challenges, and I have to solve problems differently than other people. So if you read my log, this will be for your benefit, not my own.

Maybe it will convince you to hire me! I certainly hope so, I think I have a lot to offer the right company, but the right company would have to recognize the talents I have.

# A little bit of history

This program is meant to be a game engine for me to build platform games. A platformer is a type of video game where characters have some kind of jump button, and must jump from raised sections of ground in order to acheive their goals. Super Mario Brothers is the quintessential "Platformer".

You'll notice the design documentation is lacking. That's because I'm not building this in order to pad out my portfolio. Conventional wisdom says I should start at design and build from design, and include that in my portfolio so companies looking to hire me can see how good at working from design I am.

Only I'm not good at design. I'm not awful, I just get distracted very quickly. I don't typically use wireframes, as they seem to be predictive of nothing. I don't tend to use design docs, as I find the amount of time it takes to write them is less than the amount of time to just do the thing I want to do. For what it's worth, I did create diagrams and charts while I conceptualized, but those aren't here. Not yet anyway. Finally there are no MVPs. The MVP is when it looks and plays better than my first game, collect the coins.

So I'm mostly building off of a vague idea I scribbled on a notebook page that I lost. When I started this project I wanted it to resemble the Redux single state model of React.js. All state would be kept in a single store, and entities would simply be functions that take the current state and return the data for it's particular slice at the next state.

What I ended up building is not very far off. But I would say that each game object (the hero, enemies, power ups) are going to be their own state and their own functions, basicaly OOP objects. And the "game" will continue to be the manager of how these objects interact with each other.

My other goal was to make the objects Component based instead of Class/Mix-in based. This seems to fit the model I have of how javascript works. Instead of creating a parent object which other objects inherit properties of, I instead of component objects (like animation and collision) which are combined into the object.

I don't know why I'm doing it this way. I am a leaf on the wind of reality. This just seems to be the way javascript is meant to work in my primitive ape brain.

There are three major tiers of activity. Tier Zero basically won't be discussed, that's your HTML, DOM code, a handful of jquery perhaps. I might write about it later, but it's very self explanatory, and doesn't really have much to do with anything I'm doing right now. Tier 1 is the game tier and tier 2 are the objects within the game.

# February 21, 2018

Thus far the Game Object and individual... er... gameObjects, work very similarly, but the interactive gameObjects are more developed, so I will discuss those.

Instead of using ES2015's classes, I'm simply creating JavaScript objects, sometimes called pojos but essentially hash-maps. Each object is eventually merged onto an aggregate object, which will eventually be the equivalent of a class.

At first I thought I wasn't going to need a separate object, but at the end of the day, it helps to have a manager. So each object starts with a base object, returned by the function baseObj. The base object has state and functions to allow it to add other objects I'm calling modules.

The base object has a function to add the instance of the module. If the module doesn't have a "name" property, the base throws an error and the program crashes. At first I did this because there was a time where I thought I needed a record of all modules that were added. I don't *need* this anymore, but it is the sort of thing which is helpful for debugging. I have no intention of removing this before I declare the project done, because again, this is for me, not for distribution or anything.

Modules also have the option of including a function called "moduleStep". The module step function is a function that should be called once per animation or physics step. For example the animation module should advance the frame of the object once per animation frame. The physics module should advance the velocity and position of the object once per physics frame.

Oh yeah! I'm doing physics and animation time separately. At first this was because I erroneously believed this would make collision easier. I later determined this was wrong, but I still wanted to do it. And I'm glad I did it because I'm always happy to pull concepts apart that previously seemed atomic.

When the module is added to the base, the moduleStep function is added to an array on the base object. When the game object is told to update, it calls each function in the array. This is something that would be a pain to do in ruby. I mean I could do it... but I wouldn't. Of course I wouldn't do a component based heiarchy in ruby either.

As of this writing, there is only one module, animations, and thus only one array. Don't worry! I'll fix it later. I hope.

The capital-G-Game-Object is largely the same in structure but less dynamic in implementation. The three primary components are the Time manager, the object Manager, and the Renderer, which I should change to animation manager for thematic cohesion. GameModules are CapitalizedCamelCase, as opposed to gameObjModules, which are lower-case camel cased, to distinguish importance and heiarchy. This is also why I chose to make the Game Module Manager in ES6 class syntax, to denote importance. Perhaps I will do the same with the baseObj. I haven't had to manipulate prototype pointers yet and I've only had minor bumps around the playful definition of "this".

The Time Manager, animation manager, and future physics manager are so deeply ingrained, they aren't really separate classes right now. The state managers need the time manager to tell them when to manipulate the state, and the time manager has nothing to command without the other modules. For this reason, I am thinking of splitting the game into two tiers.

Tier one would be the module manager, the game manager and the object manager. Tier two would be any other manager, time, physics, collision and controls. If you scale back and see the engine merely as a program, then the object manager is just the state manager, the module manager is the linker, and the time manager is just the thing that dispatches the functions. This is the core of a program though, isn't it? So all other managers which are brought in by module, and dispatched by time to manage the objects, would be lower tier. So I'll have to refactor, c'est la vie.

# February 22nd

While trying to implement debug information into a new DOM I realized my object manager is totally unprepared to handle anything that isn't a tangible game object. So I'm trying to implement what my mentor refers to as an "event bus".

Normally, what I would do is have higher order classes send function calls to lower order classes, but this means they have to know about each other.

Instead, there will be some kind of "event space". The higher order functions will send events as objects to this event space, and the lower order functions will watch the event space for the events. This way lower order and higher order classes needn't know about each other. I will try to implement this after the current version of the debugger.

---

the debugger is in. I made the debugger an ingame object with a standard step function which gets called once per animation frame. When the function is called, it adds a current time object to an array, then removes any elements of the array which are more than 1 second from the element just added. This way all elements of the array should represent all frames created in the last second. then I just return array length.

To keep time complexity lower, I unshift the now time object to the front of the array, and pop off the invalid entries from the end, since the number of pops is O(n) and the look up for pop is O(1). So while the push of now is O(n) (because unshifting might involve movement of every element, depending on implementation)there are only two O(n) time processes in the function.

# February 27th

I've given up on the event bus. The more I learn about it, the more I'm convinced it isn't appropriate for what I'm doing. The idea is sound, but I'm not willing to break my whole project trying to implement something I don't understand.

I'm adding the controller. Controller has it's own debug information, but now it's functionally different from my animation frames per second controller. Thinking of making a debug module for the Game Class Object, but not right now. Right now I want to get the controller working.

# March 1st

So many changes! And I didn't log any of them. Most fortuitously this log is for me and nobody else.

I implemented an event manager after all. I'm not calling it an event bus for fear of technical inaccuracy, which... I know, a manager is something different as well, but this is consistent with everything else I have.

The event manager at it's core is just an object literal called global events. When a new module is added to the module manager after the eventManager, the moduleManager checks the new module for it's own internal events, and adds it to the globalEvents.

The program has organically grown a relationship between the game and the internal objects. Because both the game and the internal objects are the same class at their core (module managers) each Game Module I add ends up with a corresponding Object Module. In a sense, each component can be thought of as a pair of components, which I like, because it feels like I'm correctly moving in the direction of component based modularity. My components are still interdependent, but less so than before. When the time comes, it will be easier to take it further away from the interdependency of the present.

I'm abandoning single state for all modules on the game object, and I'm instead giving each object it's own state. This means a considerable amount of refactoring, but again, modularity over interdependence.

Of course, with all this modularity, I've noticed a lot of repeating patterns. In the future, I will make a module class which the modules are built on top of, for the module manager to take hold of.

----
##BUG
I have managed to create a state where pressing a button changes an animation state. some problems
1: for some reason "space" isn't working in my input manager
2: holding a button triggers the effect once per frame
3: the spin animation continues from where it left off instead of starting fresh
4: there was.... something else.

1: probably involves just combing through the controller and determing exactly how I communicated space
2: I'm going to have to bear in my mind the different KINDS of button interactions there are
  a: tap
  b: long press
  c: hold
  d: multi-tap
  e: time-window-tap
I'd prefer to have an in-module way to deal with different kinds of button presses, rather than defining new functions with new states every single time I create a new verb.

3: this will likely mean refactoring the animation which is not a priority right now

looking at it more closely, I'm betting it would be smarter to have the gameControlManager bind the event handlers to the object rather than creating this mock of event space, but I'm keeping it as is for now. Truthfully I should be using the browser's event manager, I think that will help with problem number 2, so I'll tackle problem 1 first, then look into better ways of managing the event handlers

1: indeed, the only time the space bar event is "space" and not " " is in the feedback element of the controller.
