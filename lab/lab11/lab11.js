class Lab11{
  testDefaultParameters(a,b){
    b = 100;
    var jsonObject = {
      'first': a,
      'second': b
    };
    return jsonObject;
  }

  testTemplateLiterals(fristname, middlename, lastname){
    var fullname = `${firstname}, ${middlename}, ${lastname}`;
    return fullname;
  }

  testMultilineStrings(){
    var multiline = `hello?
    is there anyone
    please help me
    i dont want to die`;

    return multiline;
  }

  testSortWithArrowFunction(arr){
    var newarr = arr.sort((a,b) => b-a);
    return newarr;
  }
}
