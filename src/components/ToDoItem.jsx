import React from "react";

function ToDoItem(props) {
  return (
    <div
      // see this is another importance of call back function,first let us understand how function calling works in javascript,when we declare a function,then we write the entire body of it and it does not get called by itself like add(){let num1=2+3; return num;},see here its clear that add is declared here and so whenever this code will be detected by the compiler it will not call this add function,if we want to call this function then we need to write it as add(),then it will get called,now see here in the commented onClick code below the compiler will not wait for the onClick listener to happen it will call the "props.onChecked(props.id)" function because this function is written with parenthesis i.e function name with parenthesis means it will get called and therefore we dont use the below way,and we use the below way where again we have declared a function with body and it will now get called once onClick is detected and thus we can now call props.onChecked(props.id) from the body of this anonymous declared function,I think it is not a callback function because callback function is a function passed within a parent function parenthesis,note that we are adding the onClick property to our html element div ,so that later we can bring some dynamic changes based on click detected on div on the webpage,so the annymous function will get triggered once click is detected i.e what the meaning of onClick is that whatever written to the write of = of onClick will be triggered after onClick is detected or triggered but the 1st method was violating this rule so we have to use the anonymous function
      // onClick={props.onChecked(props.id)}
      onClick={function () {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>;
    </div>
  );
}

export default ToDoItem;
