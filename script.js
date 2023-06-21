// Assignment Code
var generateBtn = document.querySelector("#generate");

 //pass word generator function
 function generatePassword(){

  // password criteria
   var criteria1 =window.confirm('lengeth of password between 7 & 129 ')
  var criteria2=window.confirm('password is conbination of uppercase,lowecase ,number,symbol')
  var criteria3= window.confirm ('at least you have to three of the combination list')

   
  // getting password length
  if ( criteria1 === true  && criteria2 && criteria3 === true ){
  var len = window.prompt('enter your password length between 8 to 128');
  if (len < 8 ){
    len = window.prompt('minmum pass word length should be 8')
    if (len > 128){
      len = window.prompt('minmum pass word length should be less than 128')
    }  
  
  } else if  (len >128) {
   len = window.prompt('minmum pass word length should be  less than 128')
   if (len < 8){
    len = window.prompt('minmum pass word length should be greatet than 8')
  }  
  
  } else  {
  var passwordlength = len;
  }

} else {
  return 'please accept the criteria'
}
 


//list of  password array 
var lowercase =['a','b','c','d','e','f','g','h','i','j','k','l','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numeric =[1,2,3,4,5,6,7,8,9,0];
var specialchar =['~','!','@','#','$','%','^','&','*','(',')','+','[',']'];
 // get conformation for pasowrd combination    
   var passtype1 = window.confirm('do you want lower case');
   var passtype2 = window.confirm('do you want upper case');
   var passtype3 = window.confirm('do you want number');
   var passtype4 = window.confirm('do you want special character');
   if (passtype1===false && passtype2===false && passtype3===false && passtype4===false){
    window.confirm('you have to choose at leat one character ')
   }else {
   
   // pass word collection
   var passwordcollection =" ";
 
    if(passtype1===true && passtype2===true && passtype3===true && passtype4===true ){
       passwordcollection = lowercase.concat(uppercase,numeric,specialchar)
    }else if (passtype1===false && passtype2===true && passtype3===true && passtype4===true)
    {
        passwordcollection = uppercase.concat(numeric,specialchar)
   }else if (passtype1===true && passtype2===false && passtype3===true && passtype4===true)
    {
     passwordcollection = lowercase.concat(numeric,specialchar)
    }else if (passtype1===true && passtype2===true && passtype3===false && passtype4===true)
    {
      passwordcollection = uppercase.concat(lowercase,specialchar)
    }else if (passtype1=== true && passtype2===true && passtype3===true && passtype4===false)
    {
     passwordcollection = uppercase.concat(numeric,lowercase)
    }
    else{ window.alert('at least three a conbination of three caractet')
           return  ' please select three combination'}
   }
    
   var retVal = ""
    if(passtype1&&passtype2&&passtype3===true || passtype2&&passtype3&&passtype4===true
        || passtype3&&passtype4&&passtype1==true || passtype1 && passtype2 && passtype3 && passtype4 === true){
   // creating password through for loop 
    for (var i = 0,  n = passwordcollection.length; i<len; i++){
    
      retVal +=  passwordcollection[(Math.floor(Math.random()*n))]
   }
  }  else{ window.alert('at least three a conbination of three caractet')
  return  ' please select three combination'}


  return retVal ;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
