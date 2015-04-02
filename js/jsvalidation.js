//Generic Form Validation

function formGenericValidation(form)
{

 var x = document.forms[0].elements;   
 //var show = x.name + "error";

        for(var i=0;i<x.length;i++)
        {
              var funRegex = /^[A-Za-z0-9 ]/ ;
              var numRegex = /^[0-9]{1,10}$/ ;    
              var emailRegex= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              var pwdRegex =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/;                      
              var type = x[i].type;             
              var minLength=x[i].getAttribute("min");
              var maxLength=x[i].getAttribute("max");              
          
             if(type == "text") 
              { 
                if(minLength==null) minLength=5;
                if(maxLength==null) maxLength=15;
                if(x[i].value.length < minLength || x[i].value.length > maxLength) 
                  {
                    x[i].focus();
                    return false;
                  }               
                else if(x[i].value.length>minLength && x[i].value.length<maxLength && funRegex.test(x[i]).value==false)
                  {
                    x[i].focus();
                    return false;
                  }
                }  
              else if(type == "password")
              {
                if(minLength==null) minLength=6;
                if(maxLength==null) maxLength=12;
                if(x[i].value.length < minLength || x[i].value.length > maxLength) 
                  {
                    x[i].focus();
                    return false;
                  }               
                else if(x[i].value.length > minLength && x[i].value.length < maxLength && pwdRegex.test(x[i]).value == false)
                  {
                    x[i].focus();
                    return false;
                  }
              } 
              else if(type == "number")                                  
              {
                if(maxLength==null) maxLength=10;
                if(x[i].value.length == 0 || x[i].value.length > maxLength)
                {
                  x[i].focus();
                  return false;
                }                
                else if( x[i].value.length <= maxLength && numRegex.test(x[i]).value == false)
                  {
                    x[i].focus();
                    return false;
                  }               
              }
               
              else if(type == "email")
              {
                if(x[i].value.length == 0)
                {
                  x[i].focus();
                  return false;
                } 
                if(emailRegex.test(x[i].value) != true)           
                {
                  x[i].focus();
                  return false;
                }
              }
              else if(type == "radio")
              {
                var radiobtn=document.getElementsByName("sex"); 
                var z=0;                
                for(var k=0; k<radiobtn.length; k++)
                {
                  if(radiobtn[k].checked)
                  {
                    z++;
                  }
                }
                if( z == 0)
                {
                  radiobtn[0].focus();                  
                  return false;
                }
              }
              else if(type == "checkbox")
              {
                var checkbtn=document.getElementsByName("checkbox");
                var ch=0;
                for(var m=0 ;m<checkbtn.length; m++)
                {
                  if(checkbtn[m].checked)
                  {
                    ch++;
                  }
                }
                if(ch == 0)
                {
                  checkbtn[0].focus();                  
                  return false;
                }
              }         
            
        }// for loop close
        alert("Registration Successfully Completed");
        
}//function close

window.onload = function()
{
    var all = document.forms[0].elements;
    // var all = document[application].elements;
    var i;    

    for(i=0;i<all.length;i++)
    {
      // text validation
      if(all[i].type=="text")
      {
         all[i].onfocus = function()
         {
          myFocus(this);
         }        
         all[i].onkeyup = function()
          {
            validText(this);
          }
       }
       // password validation
       if(all[i].type=="password")
       {
        all[i].onfocus = function()
        {
          myFocus(this);
        }
        all[i].onkeyup = function()
        {
          validPassword(this);
        }
       }
       // mobile validation
       if(all[i].type=="number")
       {
        all[i].onfocus = function()
        {
          myFocus(this);
        }
        all[i].onkeyup = function()
        {
          validMobile(this);
        }
       }    
       // email validation
       if(all[i].type=="email")
       {
        all[i].onfocus = function()
        {
          myFocus(this);
        }
        all[i].onkeyup = function()
        {
          validEmail(this);
        }
       }    
         // date of birth validation
       if(all[i].type=="date")
       {
        all[i].onfocus = function()
        {
          myFocus(this);
        }
        all[i].onkeyup = function()
        {
          validDate(this);
        }
       } 
       // Submit validation
        else if(all[i].type=="submit")
        {
           all[i].onclick = function()
           {
            return formGenericValidation(all[i]);
           }
        }
       /* // reset validation
        else if(all[i].type=="reset")
        {
           all[i].onclick = function()
           {            
            alert("Please Re-enter your data!!!")
           }
        }*/

      }
}// window.load  fun close

//onfocus function
function myFocus(a)
{
  a.style.outline="none";
  var err=a.id + "error";
  if(a.value.length == 0 && !document.getElementById(err))
  {
    var errorMsg = document.createElement('p');
    errorMsg.id = err;
    errorMsg.textContent="Enter "+a.id+" ";
    a.parentNode.appendChild(errorMsg);
  }
}
function myBlur(aa)
{
  if(x.value.length==0)
    {
      x.style.border="1px solid red";x.style.outline="none";
    }
  else 
    {
      x.style.border="1px solid lightgrey";x.style.outline="1px";
    }
}

//validating input [type=text] 
function validText(b)
{   
      var type=b.getAttribute("type")
      var show=b.id + "error";
      var minLength=b.getAttribute("min");
      var maxLength=b.getAttribute("max");
      if(minLength==null) minLength=5;
      if(maxLength==null) maxLength=15;
     
      if(type=="text")         
        {
           var nameExp = /^[A-Za-z0-9 ]/ ;  //   /^[a-zA-Z ]{2,30}$/
           var l=b.value.length;
           if(l==0)
            { 
              document.getElementById(show).innerHTML = "&#10006;";            
              return false;
            }
           else if(l<minLength || l>maxLength)
            {
              document.getElementById(show).innerHTML = " Name "+minLength+" to "+maxLength+" char ";            
              return false;
            }    
           else if
            (l>=minLength && l<=maxLength && nameExp.test(b.value)==true)
            {
              document.getElementById(show).innerHTML = "&#10004;";              
              return true;
            }
       }
       
}

//validating input [type=password] 
function validPassword(c)
{
  var type=c.getAttribute("type");
  var show=c.name + "error";
  var minLength=c.getAttribute("min");
  var maxLength=c.getAttribute("max");    
  if(minLength==null) minLength=6;
  if(maxLength==null) maxLength=12;

  if(type=="password")         
        {
           // atleast 2 digits,letters,special chars
           var pwdRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/ ;
           var l=c.value.length;
           if(l==0)
            { 
              document.getElementById(show).innerHTML = "&#10006;";            
              return false;
            }
           else if(l<minLength || l>maxLength)
            {
              document.getElementById(show).innerHTML = ""+minLength+" to "+maxLength+" char,1 digits & 1 Special";            
              return false;
            }    
           else if
            (l>=minLength && l<=maxLength && pwdRegex.test(c.value)==true)
            {
              document.getElementById(show).innerHTML = "&#10004;";            
              return true;
            }

       }         
}
//validating input [type=number] 
function validMobile(d)
{
  var type=d.getAttribute("type");  
  var show=d.name + "error";  
  var length=d.getAttribute("max");    
  if(length==null) length=10;

  if(type=="number")
  {
    var numRegex = /^[0-9]{1,10}$/;
    var l=d.value.length;
    if(l==0 || l<10)
    {
      document.getElementById(show).innerHTML ="&#10006;";
      return false;
    }
    else if(l>10)
    {
      document.getElementById(show).innerHTML = "&#10006;";
      return false;
    }
    else if(l==10 && l<=10  && numRegex.test(d.value)==true)
    {
      document.getElementById(show).innerHTML = "&#10004;";                     
      return true;
    }

  }
}
//validating input [type=email] 
function validEmail(e)
{
  var type=e.getAttribute("type");
  var show=e.name + "error";
  if(type == "email")  
  {
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var l=e.value.length;
    if(l==0)
    { 
      document.getElementById(show).innerHTML = "&#10006;";            
      return false;
    }
    if(l>0 && emailRegex.test(e.value)==false)
    {
      document.getElementById(show).innerHTML = "&#10006;";            
      return false;
    }
    if(l>0 && emailRegex.test(e.value)==true)
    {
      document.getElementById(show).innerHTML = "&#10004;";          
      return true;
    }
  }
}



