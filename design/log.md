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

# March 2nd

finally stabilized the controller. It actually somewhat resembles my obj animation component, previously called sprite. The object controller is a database of Verb objects.

Verb objects have two primary datapoints, an event to listen for called input and a function to call on that event called func.

So if the programmer wanted the player object to attack with a predefined function when the A key is pressed, it might look like this;

```
var attack = new Verb({
  name: "attack",
  func: function(){
      this.attack();
    }
  }
})
```

Notice how the verb function called this.attack instead of this.owner.attack, or some other pointer to the gameObject. I wanted "this" at function definition to point to the gameObj itself, so the user only ever has to worry about three things when creating verbs

  * A: what button do I press?
  * B: What happens?
  * C: What kind of verb is it? (rapidfire, cooldown, cancellable)

Point C is the rub. In order to respond to whatever sort of limitations a verb has, it needs to be reflexive in order to understand the definition of those limitations. That is, this would need to point to the verb, not to the player.

I hate boiler plate, so I can't just arbitrarily require that pointers be passed to the function for every new verb. I hate spaghetti code so I didn't want to have huge quantities of the player object dedicated to keeping track of what functions are eligible and what aren't. I will have to use the event Queue in the Game Level Event Manager. This isn't done yet, as of this writing. There will be two consequences of this.
A: The need to create individual constructors or options depending on the kind of verb reqired
B: The much needed overhaul of the event queue manager, and eventually all components (more on this later)

For the sake of brevity, let us assume that the verb correctly uses the event queue in order to know if it's restricted or not. All that's left is to integrate the function so that it points to the owner of the verb and not the verb itself. This is easily achieved at function integration and call:

```
objController.addVerb(newVerb){
  if(!this.verbs[newVerb.input]){
    this.verbs[newVerb.input] = newVerb;//.fullFunc//.bind(newVerb);
  }else{
    throw{
      message: `Game Object ${this.name} tried to overwrite action`,
      data: {newVerb: newVerb.name, input: newVerb.input}
      //make sure we aren't just clobbering some other preexisting action. this will likely get removed, one button push might have many effects after all
    };
  }
},
```

```
objController.moduleStep: function(){
  this.globalEvents.inputs.forEach(function(input){
    if(this.verbs[input]){
      this.verbs[input].func.call(this);
    }
  }, this);
},
```

Notice how the event listener is checking a specific slice of the event loop. This is likely to change. More on this later.

I don't think I've written about module step yet. But eventually I will. That feature will go into the readme, because it is an implementation of an abstract algorithm which is all over my program. It would be impossible to not discuss it. The basic idea is, whenever a component is added to an object, the object searches that component for functions of certain names, and stores them in an array. Then, once per specific event, it goes down the array calling all the functions. In the case of moduleStep, this is a function that each component of each object performs once per animation frame.

Very little of this ACTUALLY looks like this under the hood. It's just a bit more complicated, but part of that is because I was feeling my way through this process without much of a plan. So there's a lot of refactoring to do. I'm always asking myself what algorithms are popping up again and again, and can they be made into their own thing to be incorporated into the things that use them.

Let's look at a few other things implemented today!

```
ModuleManager.stepDebug = function(condition){
  if(eval(condition)){debugger};
}
```

To be placed at the beginning of moduleStep. Because moduleStep is called 60 times per second per object in memory, it can be bothersome if you want to activate the debugger under specific circumstances. For example, if a player can only call a magic carpet while they are jumping and have already unlocked the carpet, you could put this at the start of your module step definition

```
gameObj.moduleStep = function(){
  this.stepDebug("this.name === player && this.Airborne === true and this.upgrades.hasOwnProperty('magicCarpet')")
  //normal code here//
}
```

While trying to make the verb function respond to this as desired, I ran into some bugs which are so complex I wearied myself out trying to understand them. Hopefully I'll remember enough to write about this on sunday. For now the important thing is, I had a semi-complex network of objects pointing at each other, but nothing was pointing where it should be, and I had duplicates of objects that weren't in the game state just hanging out in memory.

I had to figure out what was what, what wasn't what I thought it was, where did one object suddenly become two objects, but I didn't want to constantly be adding and deleting break points everywhere, especially because breakpoints make it easier to inspect code in specific stack frames, but can be burdensome when you want to reference other frames. Or at least, it's burdensome to the ADHD mind, which forgets what it's doing the moment it ~~changes stack frames~~ does literally anything ever.


I wrote the following code which is executed when the DOM has finished loading.

```
window.dblist = new Set();

window.dbAdd = function(variable, pointer){
  dblist.add(variable);
  window[variable] = pointer;
};

window.dbEval = function(string){ eval(string); };
```
When dbAdd is called, it puts a variable on the window so I can access the object in any scope from the console. It also writes the name of the variable to dbList so I don't have to waste time trying to remember what variables I defined. I simply type

```
dblist
```

into the console to see what pieces of the puzzle I have to work with. Remember, the ADHD mind is constantly forgetting what it's doing while it's doing it. Not just it's goals, but the state it needs to reference to attain those goals.

The reason for the if statements is because

I want to be able to move on as soon as I find a problem, instead of removing half a dozen glorified debugger statements littered across my code. If I take the time to remove the debuggers, I'll forget what solution I came up with by the time I have to implement it.

If I implement the solution before removing the debuggers, then I have to content with debuggers in unnecessary places, and any that I forget to remove which were never called in that context. Chrome's deactive breakpoint buttons is a son of a bitch, so I don't want to wrestle with that either. I make the following changes.

```
debugMode = true;

window.dblist = debugMode ? new Set() : undefined;
function logWarning(){console.error "debuggers not removed"}

window.dbAdd = function(variable, pointer){
  if(debugMode){
    dblist.add(variable);
    window[variable] = pointer;
  }else{
    logWarning();
  }
};

window.dbEval = function(string){
  if(debugMode){
    eval(string);
  }else{
    logWarning();
  }
};
```


By switching debug mode to off, the browser will simply bypass the intent of the functions. It does however make a note in the console so I don't forget to remove these function calls before pushing to production.

I also began creating a base_module object. I noticed a lot of modules had a lot of similarities, so I decided to make a module manager for modules. I know this is not really technical talk but, it makes me very happy that I will have a module manager which manages module managers through the assistance of module managers that supply other module managers with modules. I suppose that might be what a library is. More on this later.

Finally I left myself breadcrumbs which I hope will provide insight into how I will recreate the event Queue. This is stream of consiousness, and none of this has been tested, but I'm proud of it:


from mock_controller.js
```

//alright buddy here's what you're doing next. Refactor the event queue. Currently it's broken up into slices, but it should be tuples, you hear me? Tuples. the first value is the KIND of event and the second is the payload. Anybody concerned with the events is looking at ALL the events.

//now how should an event be structured?
//a set of objects? {type, payload}
//a single key value pair? {type: payload}, this won't work, you could only have one of each type or you'd basically be doing slices again
//a parsable string? "type:[paylod]"
//should the event queue be an array? A set? Array makes the most sense to me
//because we're always going to be iterating, an array is best. the hash-tuple also seems to be what I want.
//maybe the game object should automatically filter events, modules could have "subscriptions". This way the ENTIRE event queue only needs to be iterated over once, though the sub event queues would be once per object
```

from base_module.js

```
//each Game Level Module should itself have modularity for interacting with other modules that are added to the trunk. For example, while all my modules will need to specify subscriptions to the event loop, someone else might not use the event loop.

//so instead of the new module having it's own subscription algorithms under the assumption that there will be an event queue, especially an event queue implemented THIS SPECIFIC WAY, the event manager should include module modules that it can give to new incoming moduleStep

//thusly, each module package or library I guess, shall be three components
//A: Game Level Top Tier Component
//B: Game Module Level Mid Tier Component
//C: Object Level Low Tier Component

// tier not actually representing importance or frequency, more like.... closeness to the base, which is the Game Level Module Manager
```

now it's 9:00 at night, I have 14 hours to learn GoLang.

Love Each Other;
Goomba.
