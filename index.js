function calculateLoveChance(){
    let dobInp= document.querySelector('#dob').value;
    let userDOB= new Date(dobInp)
    console.log(userDOB);
     //console.log(userDOB.getDate());
     let kingNo= singleDigi(userDOB.getDate())
     //console.log(kingNo);
     let myArray=breakingArray(userDOB)
     let queenNumber = singleDigi(myArray.reduce((acc, val) => acc + val, 0));
     //console.log(queenNumber);
     myArray.push(kingNo,queenNumber)
     displayChance( myArray);


   }





    function singleDigi(number){
      if(number<10){
        return number;
      }
      let sum=0;
      while (number>0) {
        sum+= number%10
        number= Math.floor(number/10)
      }
      return singleDigi(sum)

    }

    function breakingArray(date){
   let  myArray=[ Math.floor(date.getDate()/10),
     Math.floor(date.getDate()%10),
     Math.floor((date.getMonth() +1)/10),
     Math.floor((date.getMonth() +1)%10),
     Math.floor((date.getFullYear()/1000)),
     Math.floor((date.getFullYear()/100%10)),
     Math.floor((date.getFullYear()%100/10)),
     Math.floor((date.getFullYear()%10))]
     return myArray
    }


    function displayChance( myArray){
      let loveMarriageChance;
    let loveNumbers = [6, 4, 1, 2];
    let commonNumbers = loveNumbers.filter(number => myArray.includes(number));

      if (commonNumbers.length === 2) {
        loveMarriageChance = "Love marriage chance is 50%";
      } else if (commonNumbers.length === 3) {
        loveMarriageChance = "Love marriage chance is 75%";
      } else if (commonNumbers.length === 4) {
        loveMarriageChance = "Love marriage chance is 100%";
      } else {
        loveMarriageChance = "Arrange marriage";
      }

      // Display the result
      alert(loveMarriageChance);
    }
