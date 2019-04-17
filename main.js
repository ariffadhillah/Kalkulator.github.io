function inputnilai()
{

	var  nilai1='' , nilai2='' , nilai3 =''; 
	var input1,input2,input3;

	if (document.getElementById("angka1").checked)
	{
		input1=document.getElementById("angka1").value;
		nilai1=nilai1+parseInt(input1);
	}

	if (document.getElementById("angka2").checked)
	{
		nilai2=document.getElementById("angka2").value;
		input2=input2+parseInt(input2);
	}

	if (document.getElementById("angka3").checked)
	{
		input3=document.getElementById("angka3").value;
		nilai3=nilai3+parseInt(input3);
	}

	document.getElementById("tampilnilai1").value=nilai1;
	document.getElementById("tampilnilai2").value=nilai2;
	document.getElementById("tampilnilai3").value=nilai3;

// console.log(inputnilai);

}


 function cek()
 {
 	if( form.hitung1.value == "" || form.hitung2.value == "" || form.hitung3.value == ""  )
 	{
 		alert("data kosong"); 
 		exit;
 	}
 }

function tambah() 
{
	cek();	
	a=eval(form.hitung1.value); 
	b=eval(form.hitung2.value);
	c=eval(form.hitung3.value);  
	d=a+b+c
	form.total.value = d;	
}

function kali() 
{
	cek();
	a=eval(form.hitung1.value); 
	b=eval(form.hitung2.value);
	c=eval(form.hitung3.value); 
	d=a*b*c
	form.total.value = d;
}

function kurang()
{
	cek();
	a=eval(form.hitung1.value); 
	b=eval(form.hitung2.value);
	c=eval(form.hitung3.value); 
	d=a-b-c
	form.total.value = d;
}
function bagi()
{
	cek();
	a=eval(form.hitung1.value); 
	b=eval(form.hitung2.value);
	c=eval(form.hitung3.value); 
	d=a/b/c
	form.total.value = d;
}
function reset() {
 form.angka1.value="";
 form.angka2.value="";
 form.total.value = "";
 }