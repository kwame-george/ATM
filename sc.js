
   let totalAmount=20000;
  
  let withdarawalBtn=document.getElementById('withdarawal');
  let ballanceInquiryBtn=document.getElementById('ballanceInquiry');
  let ref=document.getElementById('ref');
  let btnReff=document.getElementById('btnReff');
  let otherTransaction=document.getElementById('otherTransaction');
  let firstText=document.getElementById('firstText');
  let firstText2=document.getElementById('firstText2');
  let Exit=document.getElementById('Exit');
  let btnOK=document.getElementById('btnOK');
  let btnOK2=document.getElementById('btnOK2');
  let amounts=document.getElementById('amounts');
  let secondText=document.getElementById('secondText');
  let secondText2=document.getElementById('secondText2');
  let amount=document.getElementById('amount');
  let amount2=document.getElementById('amount2');
  let doubleTransactions=document.getElementById('doubleTransactions');
  let amountIn=document.getElementById('amountIn').value;
  let back=document.getElementById('back');
  let lin1=document.getElementById('lin1');
  let lin2=document.getElementById('lin2');
  let transactions=document.getElementById('transactions');
  let btnsSecreen=document.getElementById('btnsSecreen');
  let pin1=document.getElementById('pin1').value;
  let btnEnter=document.getElementById('btnEnter');
  let pas=document.getElementById('pas');
  let num=document.getElementById('num');
  let pinMsg=document.getElementById('pinMsg');
  let pinDiv=document.getElementById('pinDiv');
  let pinHeading=document.getElementById('pinHeading');
  withdarawalBtn.onclick=withdarawal;
  
  function withdarawal(){
  
  btnsSecreen.style.display="none";
  transactions.style.display="block";
  firstText.innerHTML="Please Enter Your Amount ";
    
  }
  
  btnOK.onclick=OK;
  function OK(){
  let  amountIn=document.getElementById('amountIn').value;
  if(amountIn<totalAmount){
  secondText.innerHTML="Transaction Succesed GHc "+amountIn;
  amount.innerHTML="Remaining amount is GHc "+(totalAmount-amountIn);
  back.innerHTML="Back to main secreen";}
  else{
  secondText.innerHTML="You have't enough credit";
  amount.innerHTML="Your total ballance is GHc "+totalAmount;
  back.innerHTML="Back to main secreen";}
  
  }
  btnOK2.onclick=OK2;
  function OK2(){
  let  amountIn2=document.getElementById('amountIn2').value;
  if(amountIn2<totalAmount){
  secondText2.innerHTML="Transaction Succesed GHc "+amountIn2;
  amount2.innerHTML="Remaining amount is GHc "+(totalAmount-amountIn2);
  back.innerHTML="Back to main secreen";}
  else{
  secondText2.innerHTML="You have't enough credit";
  amount2.innerHTML="Your total ballance is GHc "+totalAmount;
  back.innerHTML="Back to main secreen";}
  
  }
  
  btnEnter.onclick=login;
  function login(){
  let pin1=document.getElementById('pin1').value;
  
   if(pin1==1234){
    pas.style.display="none";
    btnsSecreen.style.display="block";
   
   }
   else{
    pinMsg.innerHTML="**Password not matched";
   
   }
  }

  ballanceInquiry.onclick=billInquiry;
  function billInquiry(){
  btnsSecreen.style.display="none";
  transactions.style.display="block";
  ref.style.display="none";
  amounts.style.display="none";
  firstText.innerHTML="Ballance Inquiry";
  secondText.innerHTML="Your Total Ballance is GHc "+totalAmount;
  
  }
  
  Exit.onclick=exit;
  function exit(){
  btnsSecreen.style.display="none";
  pas.style.display="block";
  pinDiv.style.display="none";
  pinHeading.innerHTML="Thank You for chosing us :)";  
  }
  
back.onclick=Back;
  function Back(){
  location.reload();
  pas.style.display="block";
  }
  
  
