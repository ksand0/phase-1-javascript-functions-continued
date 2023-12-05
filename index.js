function saturdayFun(activity) {
    const innerFunc = function(insert = "roller-skate") {
      return `This Saturday, I want to ${insert}!`;
    };
    return innerFunc(activity);
  }
  
  function mondayWork(work){
    const innerFunc = function(insert = "go to the office") {
      return `This Monday, I will ${insert}.`;
    };
    return innerFunc(work);
  }
  
  function wrapAdjective(flair = "*"){
    const innerFunc = function (msg = "special") {
      return `You are ${flair}${msg}${flair}!`;
    };
    return innerFunc;
  }
  
  