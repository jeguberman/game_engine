game_engine is a personal project with the goal of creating a means to build simple platformers in HTML canvas with vanilla javascript and jquery and minimal libraries. The objective is to have something component based, but flexible.

Phase 1: Create an engine capable of supporting a game with
  1: Animations
  2: Physics
  2.5: Inputs
  3: Collision Detection
  4: Menus
  5: An incremental Score
  6: A game over condition

  Basically to recreate my javascript project from my time at App Academy, but with cleaner, clearer code. game.johnguberman.com

Eventually it would be nice to have scrolling and save states and angular collision, but eventually it's like, just use a game engine like phaser, amirite?










```go
nameSpace = {
  this.= = open nameSpace(string arg1, any arg2){
    this[arg1] = arg2; //this.set
  };
  this._ = open nameSpace(string arg1){
    return this[arg1]; //this.get
  };
}//check proxies and handlers in es6, there might be operator overwriting, like in ruby


main = global_nameSpace(){
  main = this; //available to all sub namespaces, regardless of gatekeeping

  this.Thing = closed nameSpace(){
    this.property = string "this isn't a namespace. It's a fundamental.";
    this.getProperty = open nameSpace(){
      return this.property;
    };
    this.setProperty = open nameSpace(string arg){
      this.property = arg;
    };
    this.func = open nameSpace(){
      this.property = string "this will go up to the next closed gate it finds and search for definitions there";
    };
  };

  this.instanceOfThing = copy nameSpace this.Thing; //creates a new namespace with identical definitions.

//...
```

So that worked out kind of nicely. There's a load of boiler plate and assumptions on what will and won't work, but there are things I really like about it.

1. the distinction between space (variables) and time (functions) is resolved (namespace). There ARE no functions or variables here. There's just namespaces, which are procedurally generated, lexically bound, reflexive *things*.

2. the semantic meaning of this is clearer, it's THIS NAMESPACE. But it's still not totally clear where access begins and ends.

Notice that in the last line we haven't explicitly created a new namespace with internal semantics. That is to say, for the first time in our model, the code written in the editor doesn't accurately represent the code as it's organized in memory, more specifically our abstract representation of memory. To explicitly mirror that allocation, we would have to copy everything after 'this.Thing =' up to the this.Thing's closing delineator (an equally indented closing curly boi  };  )


```
  this.newThing = copy nameSpace this.Thing;
  this.sameThing = ref nameSpace this.newThing;
```

further complicating this explication is the reference. It's not REALLY a complication of course, this an abstract model of an abstract model. But would we represent this as anything called on sameThing is transported to newThing, do we copy newThing's name space and just have all the variables point to event listeners in newThing? We really don't need to specify the datatype being copied or ref'd do we?

```
  this.Array = closed nameSpace(){
    this.lastIndex = integer 0;
    this.push = open nameSpace(any arg){
      this[lastIndex] = (arg)
      this.lastIndex + 1;
    };
    this.pop = open nameSpace(){
      element =  copy nameSpace this[this.lastIndex];
      this[this.lastIndex] = null; //well.... remove the pointer, like delete this[arg]
      return element;
    };
  };//I"m deeply amused by the creation of an array in this model, since the only way I know to programmatically create this model is with a hash map, and the only way I know how to create a hash map is with hash functions and an array.
  this.collectionOfThings = copy nameSpace this.Array();
  this.collectionOfThings.push(copy nameSpace main.Thing); //puts a new copy of thing into our array
  this.collectionOfThings.push(copy nameSpace main.newThing);
  this.collectionOfThings.push(ref nameSpace main.newThing);
  this.collectionOfThings[this.collectionOfThings.lastIndex].property = "Can I change this property from here?";
  this.collectionOfThings.push(copy nameSpace main.newThing);
  this._ = global.isEqual(
    this.things[this.things.lastIndex].property, this.things[this.things.lastIndex - 2].property
  );
  };
  this.lastThingInCollection = this.collectionOfThings.pop();
};


//if I am correct, then declaration of the TYPE of variable (var, let, const) determines whether or not references to the variable are allowed to move past open and closed gates.


main = global_nameSpace(){
  main = this;
  this.topVar = var string "so who";
  this.topConst = const string "has access";
  this.topLet = let string "to what?";

  this.topFunc = open nameSpace(){
    this.VQT = ref string this.topVar
    this.VCT = ref string this.topConst
    this.VLT = ref string this.topLet

    this.VQB = ref string this.bottomVar
    this.VCB = ref string this.bottomConst
    this.VLB = ref string this.bottomLet

    this.bottomFunc = open nameSpace(){
      this.bottomVar = var string "and where";
      this.bottomConst = const string "is this";
      this.bottomLet = let string "resolved?";

      this.VQT = ref string this.topVar
      this.VCT = ref string this.topConst
      this.VLT = ref string this.topLet
    };
  };
};
