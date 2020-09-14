const button = document.querySelector('button');
button.addEventListener('click', checkPalindrome)


function checkPalindrome(){
  const input = document.querySelector('input').value.toString().trim().replace(" ", "");
  if(input === ""){ //client verification
    document.getElementById('display').innerHTML = 'Type something'
  } else{
    fetch(`/api?reversedInput=${input}`) //How?
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      document.getElementById('display').innerHTML = data;
      })
    }
}



  // if(input === ""){ //client verification
  //   document.getElementById('display').innerHTML = 'Type something'
  // } else{
  //
  //   (input === reversedInput) ? answer = 'Palindrome' :  answer = 'Not a palindrome';
  //   console.log(answer)
  //   document.getElementById('display').innerHTML = answer;
  // }



 //if(input === reversedInput){
// return answer = "true"
// } else{
// answer = 'false'
// }
// console.log(answer)
