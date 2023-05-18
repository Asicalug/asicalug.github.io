$('.revealcontacts').click(function() {
    $(this).css( {
        'transform': 'rotate(90deg)',
        'transition': 'all 0.3s',
        'visibility': 'hidden'
    });
    $('.unrevealcontacts').css( {
        'visibility': 'visible',
        'transform': 'rotate(90deg)',
        'transition': 'all 0.3s'
    });
    $('.topbar').css( {
        'height': '250px'
    });
    $('.contacts').css( {
        'visibility': 'visible',
        'height': '75px',
        'bottom': '90px'
    });
    $('.discord').css( {
        'height': '24px',
        'width': '32px',
    });
    $('.acontact').css( {
        'visibility': 'visible',
        'height': '50px'
    });
    $('.scontact').css( {
        'visibility': 'visible',
        'height': '50px'
    });
    $('.github').css( {
        'height': '32px',
        'width': '32px',
    });
});
$('.unrevealcontacts').click(function() {
    $(this).css( {
        'transform': 'rotate(270deg)',
        'transition': 'all 0.3s',
        'visibility': 'hidden'
    });
    $('.revealcontacts').css( {
        'visibility': 'visible',
        'transform': 'rotate(270deg)',
        'transition': 'all 0.3s'
    });
    $('.topbar').css( {
        'height': '100px'
    });
    $('.contacts').css( {
        'visibility': 'hidden',
        'height': '0px',
        'bottom': '150px',
    });
    $('.discord').css( {
        'height': '0px',
        'width': '32px',
    });
    $('.acontact').css( {
        'visibility': 'hidden',
        'height': '0px'
    });
    $('.scontact').css( {
        'visibility': 'hidden',
        'height': '0px'
    });
    $('.github').css( {
        'height': '0px',
        'width': '32px',
    });
});
/*Discord*/
$('.discord').click(function() { 
    $('.discordcontact').css( {
        'align-items': 'center',
        'width': '75%',
        'height': '75%',
        'visibility': 'visible'
    });
    $('.blurd').css( {
        'visibility': 'visible'
    });
    $('.dcontact').css({ 
        'visibility': 'visible',
    });
    $('.dcontainer1').css( {
        'min-width': '470px',
        'min-height': '500px',
        'max-width': '470px',
        'max-height': '500px',
    });
});
$('.blurd').click(function() { 
    $('.discordcontact').css( {
        'height': '0px',
        'width': '0px',
        'visibility': 'hidden',
    });
    $(this).css({
        'visibility': 'hidden',
    });
    $('.dcontact').css({ 
        'visibility': 'hidden',
    });
    $('.dcontainer1').css( {
        'min-width': '0px',
        'min-height': '0px',
        'max-width': '0px',
        'max-height': '0px',
    });
});
$('#addmedisc').click(function() { 
    $(location).prop('href', 'https://discord.com/users/1080643375960707092')
});
$('.addmediscord').click(function() { 
    $(location).prop('href', 'https://discord.com/users/1080643375960707092')
});
/*Github*/
$('.github').click(function() { 
    $('.githubcontact').css( {
        'align-items': 'center',
        'width': '75%',
        'height': '75%',
        'visibility': 'visible'
    });
    $('.blurg').css( {
        'visibility': 'visible'
    });
    $('.gcontact').css({ 
        'visibility': 'visible',
    });
});
$('.blurg').click(function() { 
    $('.githubcontact').css( {
        'height': '0px',
        'width': '0px',
        'visibility': 'hidden',
    });
    $(this).css({
        'visibility': 'hidden',
    });
    $('.gcontact').css({ 
        'visibility': 'hidden',
    });
});
$('.followmegithub').click(function() { 
    $(location).prop('href', 'https://github.com/Asicalug')
});
