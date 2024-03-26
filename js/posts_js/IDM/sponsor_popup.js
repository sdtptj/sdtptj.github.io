var popup;

function openSponsorPopup() {
    var width = 600;
    var height = 400;
    var left = (window.innerWidth - width) / 2;
    var top = (window.innerHeight - height) / 2;
    
    popup = window.open('../赞助码.png', 'sponsorPopup', 'width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
    
    popup.focus();
}
