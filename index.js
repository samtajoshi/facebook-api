let token;

$(document).ready(()=>{


    token=prompt("please enter your token","");
	if(token==null||token=="")
	{
	 alert('no user token found');
	}
	else{
		getDetails();
	}



})



let getDetails=()=>{

	$.ajax({

		type:'GET',
		dataType:'json',
		async : true,
		url: 'http://graph.facebook.com/me?fields=id,name,picture{url},birthday,gender,email&access_token='+token,
		success : (response)=> {
			console.log(response);
			$('#profile').html(`<img  src="${response.picture.data.url}" class="uk-border-rounded img-fluid "style="margin: 1em 0 1em 0; height: 10vh">`);
			$('#name').append(response.name);
			$('#gender').append(response.gender);
			$('#email').append(response.email);
			$('#birthday').append(response.birthday);
		},

		error: (err)=>{
			alert(err.responseJSON.error.message);
		}


	})



}


