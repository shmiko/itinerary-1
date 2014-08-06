var create_src='nav';$(".btn-facebook").on("click",function(e){e.preventDefault();if(user_agent=='ios')
{window.location.href=base_url+'users/pre_login_fb_ios';}
else
{FB.login(function(response){if(response.authResponse){FB.api('/me?fields=first_name,last_name,email',function(response){var param={'action':'fbConnect','facebook_id':response.id,'first_name':response.first_name,'last_name':response.last_name,'email':response.email};if(typeof city_arr!=='undefined'&&city_arr.length>0)
{param.cities=JSON.stringify(city_arr);city_arr=[];}
sendPost(null,base_url+'users/fb_login',param,fbConnect);});}},{scope:'email,user_birthday,user_hometown,user_location,user_interests,user_checkins'})}});$('.logged-in').on("click","#logout",function(e){e.preventDefault();if($('.logged-in').data('logintype')==='facebook'){window.location.href=base_url+'users/logout';}else{window.location.href=base_url+'users/logout';}});function fbConnect(response){if(response.status==='Duplicate User'){errorText='You have an existing account registered with this email. Your account will now be connected to facebook';$('#modalBody').html(errorText);$('#modalDialog').modal('show');window.location.reload();}else if(response.status==='New User'){if(typeof response.id!='undefined'){var sgn_modal=$('#signup');if(sgn_modal.data('src')==='intro_modal'){link=location.href.split("?")[0]+'?user=new';}else if(sgn_modal.data('src')=='map_modal'){link=base_url+'user/'+response.slug+'?user=new';}else{link=base_url+'user/'+response.slug;}
var cb=mp_callback(link);mixpanel.alias('"'+response.id+'"');mixpanel.people.set({"$email":response.email,"$first_name":response.first_name,"$last_name":response.last_name,"$created":new Date()});mixpanel.track('New User Signup',{"id":response.id,"method":"facebook"});setTimeout(cb,450);}}else{if(typeof response.id!='undefined'){var cb=mp_callback(location.href.split("?")[0]);mixpanel.identify('"'+response.id+'"');mixpanel.people.set({"$last_login":new Date()});mixpanel.track("Login",{"id":response.id,"method":"facebook"});setTimeout(cb,450);}}}
function mp_callback(link){return function(){window.location.href=link;}}
var $container=$('.results');if(typeof $container.imagesLoaded!='undefined'){$container.imagesLoaded(function(){setTimeout(function(){$container.isotope({filter:filter_sel,resizable:false,animationOptions:{duration:400,easing:'linear',queue:false}});},50);});}
$(document).ready(function(){if(window.location.hash&&window.location.hash=='#_=_'){window.location.hash='';history.pushState('',document.title,window.location.pathname);}
updateContainer();addImageController();var boxes=$('.city_box');boxes.on('focus',function(){this.select();});boxes.on('mouseup',function(){boxes.onmouseup=null;return false;});var new_name=$('.js-input-toggle'),existing=$('.js-buttons-toggle.support .btn-list');new_name.focus(function(){if(new_name.val().length>0){existing.removeClass('active');}});new_name.on('keydown',function(){existing.removeClass('active');});existing.click(function(){new_name.val('');});$('.filterme a').click(function(e){e.preventDefault();var $this=$(this);if($this.hasClass('selected')){return;}
var $optionSet=$this.parents('.filter-set');$optionSet.find('.selected').removeClass('selected');if($this.hasClass('follow-filter')){$('.filter-set').find('.selected').removeClass('selected');}else{$('.follow-filter').removeClass('selected');}
$this.addClass('selected');var group=$optionSet.attr('data-filter-group');filters[group]=$this.attr('data-filter');if($this.attr('data-filter')=='.board-unit'){history.pushState({},null,$this.attr('href'));}
else if($this.attr('data-filter')=='.itinerary-unit'){history.pushState({},null,$this.attr('href'));}
var isoFilters=[];for(var prop in filters){isoFilters.push(filters[prop])}
var selector=isoFilters.join('');if(group==='type')
$('#toggle_type').dropdown('toggle');$container.isotope({filter:selector});return false;});if($('#navbar').hasClass('logged-in')){var nav=$('#navbar');if(typeof nav.data('uid')!='undefined'){mixpanel.identify('"'+nav.data('uid')+'"');}
mixpanel.register({"Authenticated":'true'});}else{mixpanel.register({"Authenticated":'false'});}});function addImageController(){$("#PreviewAvt").addClass('hide');$('#changeAvt').addClass('hide');$("#uploadPreview").addClass('hide');$('#changeImage').addClass('hide');$('#customImage').addClass('clearfix');}
$(window).resize(function(){updateContainer();});function updateContainer(){setTimeout(function(){MapHeightMatch();leftHeightMatch();if(typeof $container.isotope!='undefined'){$container.isotope();}
matchHeight();},250);squareMe($('.pin'));}
function squareMe(e){var width=0;e.each(function(){if($(this).width()>40){width=width>0?width:$(this).width();var w=width/4;$(this).css({'height':(w*3)+'px'});}});}
function MapHeightMatch(){var leftBar=$('.top-profile > .left').height(),mapHolder=$('.top-profile > .map');mapHolder.css({'height':leftBar+'px'});}
function leftHeightMatch(){var leftBar=$('.top-profile > .left'),mapHolder=$('.top-profile > .map');if(leftBar.height()<mapHolder.height()){leftBar.css('min-height',mapHolder.height());}}
$('.js-tooltip').hover(function(){$(this).tooltip('toggle');});$(document).on('click','.map-hover',function(e){$(this).toggleClass('active');$(this).parent().find('.imgbk').toggleClass('active');$(this).parent().find('.singleimgbk').toggleClass('active');});$(document).on('click','.sharer',function(e){$('.not-share').addClass('hidden');$('.shareMe').addClass('show');});$(document).on('click','.rate',function(e){$('.not-rate').addClass('hidden');$('.rater').addClass('show');});$(document).on('mouseleave','.share',function(e){$('.not-share').removeClass('hidden')
$('.not-rate').removeClass('hidden');$('.shareMe').removeClass('show');$('.rater').removeClass('show');});function matchHeight(){var rightSide=$('.bottom .right-rail');if(rightSide.length>0){var left_elem=$('.left-rail').children().last();var leftht=left_elem.offset().top-$('.map-holder').height()+left_elem.height();rightSide.css({'min-height':leftht+100+'px'});}}
jQuery(function($){$("#add-image").click(function(){$("#myfile").click();});});$(function(){setInterval(function(){$(".tips:not(.on_create)").delay(300).fadeIn("slow");},1500);$('.got-it').click(function(){$(this).parent().parent().fadeOut(1000,function(){var f=$(this).data('popup');var params={'field':f,'value':1};sendPost(null,base_url+'users/update_popup',params,function(){},null,'no')
$(this).remove('.tips');});});var promos=$('.small-modal');promos.on('hidden.bs.modal',function(){$('.modal-backdrop').removeClass('backdrop-transparent');$('.modal-backdrop.in').removeClass('glow');});$('.continue').click(function(){var intro=$(this).closest('.modal');intro.modal('hide');var f=intro.data('popup');var params={'field':f,'value':1};sendPost(null,base_url+'users/update_popup',params,function(){},null,'no')
mixpanel.track('Continue from intro modal');intro.on('hidden.bs.modal',function(){setTimeout(function(){intro.remove();},500)});});$('.intro_signup').click(function(e){e.preventDefault();var modal=$(this).closest('.modal');var type=$(this).hasClass('btn-facebook')?'facebook':'email';mixpanel.track('Signup from intro modal',{"type":type});var sgn=$('#signup');if(modal.attr('id')!='map_intro'){sgn.data('src','intro_modal');}else{sgn.data('src','map_modal');}
if(type==='email'){setTimeout(function(){$('#collapseOne').collapse('show')},250);}});$('.create').on('click',function(e){e.preventDefault();var source;if($('#navbar').hasClass('logged-in')){if($(this).attr('id')==='share-wrap'){source='icon';}else if($(this).hasClass('board-link')){source='blank_module';}else{source=create_src;}
if($(this).data('create')==='board'){$('#newBoard').modal('show');mixpanel.track("Create board modal open",{'source':source,'url':window.location.pathname});var popup=$('.on_create');if(popup.length>0){popup.fadeOut('fast');popup.remove();var f=popup.data('popup');var params={'field':f,'value':1};sendPost(null,base_url+'users/update_popup',params,function(){},null,'no')}}
else{$('#newItinerary').modal('show')
mixpanel.track("Create itinerary modal open",{'source':source,'url':window.location.pathname});}}else{$('#signin').modal('show');}});function cm_props(type){var title=type==='board'?'Please name your board':'Please name your itinerary';var props={onkeyup:false,onfocusout:false,onclick:false,ignore:"",rules:{title:"required",location:"required",gplace:"required"},messages:{title:title,location:"Please enter a valid city name",gplace:"Please choose a valid city from the dropdown"},errorClass:"error",errorElement:"span",highlight:function(element){},unhighlight:function(element){},submitHandler:function(form){createModule(type);}};return props;}
var cb_val=$('#cbForm').validate(cm_props('board'));var ci_val=$('#ciForm').validate(cm_props('itinerary'));$('#newBoard').on('hide.bs.modal',function(){cb_val.resetForm();create_src='nav';});$('#newItinerary').on('hide.bs.modal',function(){ci_val.resetForm();create_src='nav';});});var board_input=document.getElementById('board_location');var itinerary_input=document.getElementById('itinerary_location');var options={types:['(cities)']};var board_city=new google.maps.places.Autocomplete(board_input,options);var itinerary_city=new google.maps.places.Autocomplete(itinerary_input,options);google.maps.event.addListener(board_city,'place_changed',function(){$('#gplace_board').val(board_city);});google.maps.event.addListener(itinerary_city,'place_changed',function(){$('#gplace_itinerary').val(itinerary_city);});function createModule(type){if($('#navbar').hasClass('logged-in')){var city,title,action,post_utl,check,mod_type,privacy;if(type==='board'){city=board_city;title=$('#board_title').val();action='new_board';post_url=base_url+"boards/new_board";check=$('#newBoard').find('input:radio[name="type"]:checked');mod_type=check.length===0?1:check.val();privacy=mod_type==0?'private':'public';var nav=$('#navbar');if(typeof nav.data('uid')!='undefined'){mixpanel.identify('"'+nav.data('uid')+'"');}
mixpanel.track("Create board",{'privacy':privacy});mixpanel.people.increment("Create board")}else{city=itinerary_city;title=$('#itinerary_title').val();action='new_itinerary';post_url=base_url+"itineraries/new_itinerary";check=$('#newItinerary').find('input:radio[name="type"]:checked');mod_type=check.length===0?1:check.val();privacy=mod_type==0?'private':'public';var nav=$('#navbar');if(typeof nav.data('uid')!='undefined'){mixpanel.identify('"'+nav.data('uid')+'"');}
mixpanel.track("Create itinerary",{'privacy':privacy});mixpanel.people.increment("Create itinerary")}
var parameters=codeCity(city);parameters.action=action;parameters.title=title;parameters.type=mod_type;sendPost(null,post_url,parameters,newModule);}else{$('#signin').modal('show');}}
function codeCity(city){var it_place=city.getPlace();var details={};if(typeof it_place!='undefined'){if(typeof it_place.address_components!='undefined'){var length=it_place.address_components.length;details.name=it_place.address_components[0].long_name;details.state_name=it_place.address_components[length-2].long_name;details.countryName=it_place.address_components[length-1].types[0]==="country"?it_place.address_components[length-1].long_name:it_place.address_components[length-2].long_name;details.latitude=it_place.geometry.location.lat();details.longitude=it_place.geometry.location.lng();}}
return details;}
function newModule(response){if(response.status==='success'){window.location.href=base_url+response.link;}else{alert('Oops we encountered an error! Please try again');}}
$(function(){function getCityDetails(address){geocoder=new google.maps.Geocoder();geocoder.geocode({'address':address},function(results,status){if(status==google.maps.GeocoderStatus.OK){var citydetails={};var length=results[0].address_components.length;citydetails.name=results[0].address_components[0].long_name;citydetails.state_name=typeof results[0].address_components[length-2]!='undefined'?results[0].address_components[length-2].long_name:results[0].address_components[0].long_name;citydetails.countryName=results[0].address_components[length-1].types[0]==="country"?results[0].address_components[length-1].long_name:(typeof results[0].address_components[length-2]!='undefined'?results[0].address_components[length-2].long_name:results[0].address_components[0].long_name);citydetails.latitude=results[0].geometry.location.lat();citydetails.longitude=results[0].geometry.location.lng();city_parameters={action:'search_city',name:citydetails.name,countryName:citydetails.countryName,latitude:citydetails.latitude,longitude:citydetails.longitude};sendPost(null,base_url+"cities/search_city",city_parameters,function(response){if(response.status==='success'){$('#full_url').val(base_url+'city/'+response.link);window.location.href=$('#full_url').val();}},null,'no');}else{console.log("Geocode was not successful for the following reason: "+status);}});}
if($('#cityname').length>0){$("#cityname").autocomplete({minLength:3,source:function(request,response){$('.ui-autocomplete').addClass('city_autocomp');$this=$(this);var formatted=[];var service=new google.maps.places.AutocompleteService();var types_arr=new Array("(cities)");var city_name=''+$('#cityname').val()+'';var parameters={action:'search_user',name:city_name};sendPost(null,base_url+"users/search_user",parameters,function(data){if(data.status==='success'){for(var j=0,user;user=data.user[j];j++){formatted.push({label:data.user[j].User.first_name+' '+data.user[j].User.last_name,value:data.user[j].User.first_name+' '+data.user[j].User.last_name,url:base_url+'user/'+data.user[j].User.slug,photo:data.user[j].User.thumbnail_30,is_user:1})}
response(formatted);}},null,'no');service.getPlacePredictions({input:city_name,types:types_arr},function(predictions,status)
{if(status!=google.maps.places.PlacesServiceStatus.OK){console.log(status);return;}
for(var i=0,prediction;prediction=predictions[i];i++){formatted.push({label:prediction.description,value:prediction.description,url:prediction.description,photo:'https://d2syybhyc5a0lq.cloudfront.net/map_icons/place.png',is_user:0})}
response(formatted);});},messages:{noResults:'',results:function(){}},select:function(event,ui){console.log(ui.item.url);$('#cityname').val(ui.item.label);if(ui.item.is_user==0)
{getCityDetails(ui.item.label);}
else
{$('#full_url').val(ui.item.url);setLocation();}
return false;}}).data("ui-autocomplete")._renderItem=function(ul,item){return $("<li>").data("ui-autocomplete-item",item).append("<a>"+getAutocompleteText(item)+"</a>").appendTo(ul);};}});function getAutocompleteText(item){var text="<div>";text+="<div class='cityIconContainer'><img src='"+(item.photo==""?"":item.photo)+"' /></div>";text+="<div class='autocomplete-name'>"+item.label+"</div>";text+="</div>";return text;}
function setLocation()
{if($('#full_url').length>0)
window.location.href=$('#full_url').val();}
$(document).ready(function(){var signin_validator=$('#signinForm').validate({onkeyup:false,onfocusout:false,onclick:false,rules:{password:{'minlength':6,'maxlength':30,'required':true}},messages:{email:"Please enter a valid email address",password:"Password must be between 6 and 30 characters"},errorClass:"error",errorElement:"span",highlight:function(element){},unhighlight:function(element){},submitHandler:function(form){if(!sendAjax)
{var form=$('#signinForm').serialize();sendPost(null,base_url+"users/login",form,signIn);}}});$('#signin').on('hidden.bs.modal',function(){$('#signinForm')[0].reset();signin_validator.resetForm();});var signup_validator=$('#signupForm').validate({onkeyup:false,onfocusin:false,onfocusout:false,onclick:false,rules:{password:{'minlength':6,'maxlength':30,'required':true},passwordConf:{'equalTo':'#signupForm #password'}},messages:{email:"Please enter a valid email address",first_name:"Please enter a valid first name",password:"Password must be between 6 and 30 characters",passwordConf:"Passwords entered do not match"},errorClass:"error",errorElement:"span",highlight:function(element){},unhighlight:function(element){},submitHandler:function(form)
{if(!sendAjax)
{var parameters=$('#signupForm').serializeArray();if(typeof city_arr!=='undefined')
{parameters.push({name:'cities',value:JSON.stringify(city_arr)});city_arr=[];}
console.log(parameters);sendPost(null,base_url+"users/register",parameters,signUp);}}});$('#signup').on('hidden.bs.modal',function(){$('#signupForm')[0].reset();signup_validator.resetForm();});});function signIn(response)
{var form=$('#signinForm');if(response.status==='validationError')
{for(var key in response){if(response.hasOwnProperty(key)&&key!=='status')
{showValidationError(key,form);}}
$('input[type="password"]').val('');}
else if(response.status==='failure')
{var msg='Incorrect username or password';showFormError(msg,form);$('input[type="password"]').val('');}
else
{$('input[type="submit"]').attr('disabled',true);if(typeof response.id!='undefined'){var cb=mp_callback(location.href.split("?")[0]);mixpanel.identify('"'+response.id+'"');mixpanel.people.set({"$last_login":new Date()});mixpanel.track("Login",{"id":response.id,"method":"email"});setTimeout(cb,450);}}}
function signUp(response){var form=$('#signupForm');if(response.status==='validationError')
{for(var key in response)
{if(response.hasOwnProperty(key)&&key!=='status'&&key!=='id')
{showValidationError(key,form);}}
$('input[type="password"]').val('');}
else if(response.status==='Duplicate User')
{var msg='You already have an account registered with your Facebook account. Please log in with Facebook';showFormError(msg,form);form[0].reset();}
else if(response.status==='Existing User')
{var msg='You already have an existing account registered with this email address';showFormError(msg,form);}
else
{$('input[type="submit"]').attr('disabled',true);if(typeof response.id!='undefined'){var link;var sgn_modal=$('#signup');if(sgn_modal.data('src')==='intro_modal'){link=location.href.split("?")[0]+'?user=new';}else if(sgn_modal.data('src')=='map_modal'){link=base_url+'user/'+response.slug+'?user=new';}else{link=base_url+'users/sugg_followers';}
var cb=mp_callback(link);mixpanel.alias('"'+response.id+'"');mixpanel.people.set({"$email":response.email,"$first_name":response.first_name,"$last_name":response.last_name,"$created":new Date()});mixpanel.track("New User Signup",{"id":response.id,"method":"email"});setTimeout(cb,450);}}}
function defaultCallBack(response)
{console.log(response);}
var sendAjax=null;function sendPost(view,url,parameters,callBack,dataType,loader)
{if(callBack==null)
{callBack=defaultCallBack;}
if(dataType==null)
{dataType='json';}
if(loader==null){loader='yes';}
parameters.view=view;sendAjax=$.ajax({type:"POST",url:url,cache:false,data:parameters,success:callBack,dataType:dataType,beforeSend:function(){if(loader==='yes')
$('#dvloader').show();},error:function(request,status,errorThrown)
{console.log((request.responseText));alert('failure');},complete:function(response){if(loader==='yes'){$('#dvloader').hide();}
sendAjax=null;}})}
function sendGet(view,url,parameters,callBack,dataType,loader)
{if(callBack==null)
{callBack=defaultCallBack;}
if(dataType==null)
{dataType='json';}
if(loader==null){loader='yes';}
parameters.view=view;sendAjax=$.ajax({type:"GET",url:url,cache:false,data:parameters,success:callBack,dataType:dataType,beforeSend:function(){if(loader==='yes')
$('#dvloader').show();},error:function(request,status,errorThrown)
{alert('failure');},complete:function(response){if(loader==='yes'){$('#dvloader').hide();}
sendAjax=null;}})}
function showValidationError(key,form)
{var msg=validationErrors(key);var html='<span class="help-block" style="">'+msg+'</span';var elementId="#".concat(key);var element=form.find(elementId);element.parent().addClass("error");element.after(html);}
function showFormError(msg,form)
{var html='<span class="error">'+msg+'</span';var errorDiv=form.find('.message');errorDiv.addClass("control-group");errorDiv.append(html);}
function validationErrors(field){var error;switch(field){case'email':error='Please enter a valid email address';break;case'firstName':error='Please enter a valid first name';break;case'password':error='Password must be between 6 and 30 characters';break;case'passwordConf':error='Passwords entered do not match';break;default:error='Data entered is invalid';}
return error;}
function getFacebookImage(id){return"https://graph.facebook.com/"+id+"/picture?type=square";}
function displayError(request)
{if(request.statusText!="abort")
{var errorText='An error has occurred: '+request.status+': '+request.statusText+' -- '+request.responseText;alert(errorText);$('#modalLabel').html('Error');$('#modalBody').html(errorText);$('#modalDialog').modal('show');}}
function sendinvite()
{var name=$('#name');if(name.val().indexOf('@')>-1)
{var inv_parameters={name:name.val()};mixpanel.track('Invite',{"method":"email",'to':inv_parameters.name});sendPost(null,base_url+'users/send_invite',inv_parameters,invite_sucess);}
else
{FB.ui({method:'send',link:'https://36hrs.in',to:$('#fbuid').val()});mixpanel.track('Invite',{"method":"facebook"});update_points();}}
function update_points()
{var update_parameters='';sendPost(null,base_url+'users/update_user_points',update_parameters,function(){});}
function invite_sucess(response){$('#name').val('');update_points();}
function getImage(id){return"https://graph.facebook.com/"+id+"/picture?type=square";}
$(document).on('click','.follow-btn',function(e){e.preventDefault();if($('#navbar').hasClass('logged-in')){if(!($(this).hasClass('loading'))&&!($(this).hasClass('own'))){$(this).addClass('loading');$(this).find('.btn-img').show();$(this).find('span').hide();var url=$(this).hasClass('follower')?'users/unfollow':'users/follow';if($(this).attr('id')==='profile_follow'){var params={following:user_id};sendPost(null,base_url+url,params,new_follower,'json','no');}else{var params={following:$(this).data('fid')};var elem=$(this);sendPost(null,base_url+url,params,function(response){if(response.status=='success'){if(response.action=='follow')
{elem.find('.follow-icon').text('check');elem.addClass('follower');elem.find('span:eq(1)').text('Following');}
else
{elem.removeClass('follower');elem.find('span:eq(1)').text('Follow');elem.find('.follow-icon').text('user');}
elem.find('.btn-img').hide();elem.find('span').show();elem.removeClass('loading');$('#suggestedFollowing').modal('hide');}},'json','no')}}}
else{$('#signin').modal('show');}});function frndList(response){if(response.length>0){var list=$('#frnd_list');for(var i=0;i<response.length;i++){var img_path=response[i].User.thumbnail_50;var profile=base_url+'user/'+response[i].User.slug;var html='<a href="'+profile+'" class="btn btn-list">';html+="<img src='"+img_path+"'><span class='name'>"+response[i].User.first_name+" "+response[i].User.last_name+"</span>";html+='</a>';list.append(html);list.data('fr',1);}}}
function notify_success(response)
{if(response.status=='success')
{$('#notification_bar .pumpkin').text('');}}
$(document).ready(function(){var frmodal=$('#inviteFriends');frmodal.on('show.bs.modal',function(){$('.ui-autocomplete').addClass('frnd_autocomp');});frmodal.on('hide.bs.modal',function(){$('.ui-autocomplete').removeClass('frnd-autocomplete');});$('.invite').on('click',function(){var friends;if($('#navbar').data('logintype')==='facebook'){FB.getLoginStatus(function(response){console.log(response);if(response.status!='connected'){FB.login({scope:'email,user_birthday,user_hometown,user_location,user_interests,user_checkins'})}});var list=$('#frnd_list');if(!list.data('fr')){var params={action:'friends'};sendPost(null,base_url+'users/friends',params,frndList,null,'no');}
FB.api('/me?fields=friends',function(results){if(typeof results.friends!=='undefined'){friends=results.friends.data;}else{alert('Cannot get friends list, try again');}});$("#name").autocomplete({source:function(request,add){$this=$(this);var formatted=[];for(var i=0;i<friends.length;i++){if(friends[i].name.toLowerCase().indexOf($('#name').val().toLowerCase())>=0)
formatted.push({label:friends[i].name,value:friends[i].id})}
add(formatted);},messages:{noResults:'',results:function(){}},select:function(event,ui){$('#name').val(ui.item.label);$('#fbuid').val(ui.item.value);return false;},minLength:3}).data("ui-autocomplete")._renderItem=function(ul,item){return $("<li>").append("<a><img src="+getImage(item.value)+"></img>"+item.label+"</a>").appendTo(ul);};}});$("#notification_bar").on("click",function(){var params={action:'updateReadNotifications'};sendPost(null,base_url+'users/updateReadNotifications',params,notify_success,null,'no');})});