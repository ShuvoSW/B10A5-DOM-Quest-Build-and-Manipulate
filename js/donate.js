// Token 1
document.getElementById('donate-now').addEventListener('click',function(){

   const inputValueFinal = getInputFiledValueById('money-input');
   const addMoney = document.getElementById('add-money').innerText;
   const addMoneyFinal =parseInt(addMoney);
   if (inputValueFinal < 0) {
      alert('Alert !');
   }
   const totalAmount = inputValueFinal + addMoneyFinal;
   document.getElementById('add-money').innerText=totalAmount;
   const mainAmount = document.getElementsByClassName('main-amount')[0].innerText;
   const mainAmountFinal =parseInt(mainAmount);
   const totalMainAmount = mainAmountFinal - inputValueFinal;

    const total =document.getElementsByClassName('main-amount')[0].innerText=totalMainAmount;
    document.getElementById("close-confirmation-modal")
    .addEventListener("click", function(){
        document.getElementById("confirmation-modal")
        .classList.add("hidden");
    })

    if (mainAmountFinal<inputValueFinal  ) {
      alert('Alert !');
      return 0;
   }
   const p = document.createElement('p');
   p.innerText = `  ${totalAmount} Taka is Donated for Flood at Noakhali ,Bangladesh `;
   const p1 = document.createElement('p');
   p1.innerText =new Date();
   document.getElementById('history').appendChild(p);
   document.getElementById('history').appendChild(p1);
   document.getElementById('confirmation-modal').classList.remove('hidden');
})
// Token 2
document.getElementById('donate-now-1').addEventListener('click',function(){

   const inputValueFinal = getInputFiledValueById('money-input-1');
   const addMoney = document.getElementById('add-money-1').innerText;
   const addMoneyFinal =parseInt(addMoney);
   if (inputValueFinal < 0 ) {
      alert('Alert !');
   }
   const totalAmount = inputValueFinal + addMoneyFinal;
   document.getElementById('add-money-1').innerText=totalAmount;
   const mainAmount = document.getElementsByClassName('main-amount')[0].innerText;
   const mainAmountFinal =parseInt(mainAmount);
   const totalMainAmount = mainAmountFinal - inputValueFinal;

    const total =document.getElementsByClassName('main-amount')[0].innerText=totalMainAmount;
    document.getElementById("close-confirmation-modal")
    .addEventListener("click", function(){
        document.getElementById("confirmation-modal")
        .classList.add("hidden");
    })

    if (mainAmountFinal<inputValueFinal  ) {
      alert('Alert !');
      return 0;
   }
   const p = document.createElement('p');
   p.innerText = `  ${totalAmount} Taka is Donated for food Reliet in Feni ,Bangladesh `;
   const p1 = document.createElement('p');
   p1.innerText =new Date();
   document.getElementById('history').appendChild(p);
   document.getElementById('history').appendChild(p1);
   document.getElementById('confirmation-modal').classList.remove('hidden');
})
// Token 3    
document.getElementById('donate-now-2').addEventListener('click',function(){

   const inputValueFinal = getInputFiledValueById('money-input-2');
   const addMoney = document.getElementById('add-money-2').innerText;
   const addMoneyFinal =parseInt(addMoney);
   if (inputValueFinal < 0 ) {
      alert('Alert !');
   }
   const totalAmount = inputValueFinal + addMoneyFinal;
   document.getElementById('add-money-2').innerText=totalAmount;
   const mainAmount = document.getElementsByClassName('main-amount')[0].innerText;
   const mainAmountFinal =parseInt(mainAmount);
   const totalMainAmount = mainAmountFinal - inputValueFinal;

    const total =document.getElementsByClassName('main-amount')[0].innerText=totalMainAmount;
    document.getElementById("close-confirmation-modal")
    .addEventListener("click", function(){
        document.getElementById("confirmation-modal")
        .classList.add("hidden");
    })

    if (mainAmountFinal<inputValueFinal  ) {
      alert('Alert !');
      return 0;
   }
   const p = document.createElement('p');
   p.innerText = `  ${totalAmount} Taka is Donated for aid for Injured in the Quota Movement `;
   const p1 = document.createElement('p');
   p1.innerText =new Date();
   document.getElementById('history').appendChild(p);
   document.getElementById('history').appendChild(p1);
   document.getElementById('confirmation-modal').classList.remove('hidden');
})
//  Donation & History button
 document.getElementById('button-2').addEventListener('click',function(){
      document.getElementById('main').classList.add('hidden');
      document.getElementById('history').classList.remove('hidden');
      document.getElementById('button-1').classList.remove('bg-lime-400');
      document.getElementById('button-2').classList.add('bg-lime-400');
 })
// Blog
      document.getElementById('blog-box').addEventListener('click',function(){
         document.getElementById('home-box').classList.remove('hidden');
         document.getElementById('blog-box').classList.add('hidden');
         document.getElementById('nav-button').classList.add('hidden');
         document.getElementById('main').classList.add('hidden');
         document.getElementById('history').classList.add('hidden');
         document.getElementById('blog').classList.remove('hidden');
      })
       

