let tasks = [
    {
      number: 1,
      taskName: "SomeName",
      taskDescription: "SomeDescription",
    },
    {
      number: 2,
      taskName: "SomeName",
      taskDescription: "SomeDescription",
    },
    {
      number: 3,
      taskName: "SomeName",
      taskDescription: "SomeDescription",
    },
    {
      number: 4,
      taskName: "SomeName",
      taskDescription: "SomeDescription",
    },
  ];
  
  let testFunction = () => {
    return [
      1,
      () => {
        console.log("Rajnish");
      },
    ];
  };
  
  let [number, testName] = testFunction();
  // console.log(testName);
  testName()