
function isJavaScriptFile(String){
    if (String[String.length - 1] === 's' && String[String.length - 2] === 'j' && String[String.length - 3] === "."){
        return true
    }
    else {
        console.log('please enter valid file name')
    }
    return false
  }
  
  console.log(isJavaScriptFile('app.js'));
  console.log(isJavaScriptFile('index.js'));
  console.log(isJavaScriptFile('index.png'));

 




