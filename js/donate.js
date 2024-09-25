// document.getElementById('button-2').addEventListener('click',function(){
   
// })
// const green =document.getElementById('button-2');
// green.addEventListener('click', function makeGreen() {
//   document.getElementById('button-2').style.backgroundColor= 'green';
// //   document.getElementById('button-1').classList.remove('bg-lime-400');
// })



    // close confirmation modal
// document.getElementById("close-confirmation-modal")
// .addEventListener("click", function(){
//     document.getElementById("confirmation-modal")
//     .classList.add("hidden");
// })





    document.getElementById('Congrates').classList.remove('hidden');
document.getElementById('donate-now').addEventListener('click',function(){
   const inputValueFinal = getInputFiledValueById('money-input');
   const addMoney = document.getElementById('add-money').innerText;
   const addMoneyFinal =parseInt(addMoney);
   if (inputValueFinal < 0) {
      alert('Alert !');
   }
   const totalAmount = inputValueFinal + addMoneyFinal;
   document.getElementById('add-money').innerText=totalAmount;
   const mainAmount = document.getElementById('main-amount').innerText;
   const mainAmountFinal =parseInt(mainAmount);
   const totalMainAmount = mainAmountFinal - inputValueFinal;
    let total =document.getElementById('main-amount').innerText=totalMainAmount;

   const p = document.createElement('p');
   p.innerText = `  ${total} Taka is Donated for famine-2024 at Feni ,Bangladesh `;
   const p1 = document.createElement('p');
   // p1.innerText = new Date();
   document.getElementById('history').appendChild(p);
   if (inputValueFinal < 0) {
      alert( document.getElementById('Congrates').classList.remove('hidden'));
   }
   // document.getElementById('history').appendChild(p1);
})


