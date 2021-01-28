$(function() {
    $('#WAButton').floatingWhatsApp({
      phone: '+6282287831544',  
      headerTitle: 'Chat Kami di WhatsApp!', //Popup Title
      popupMessage: 'Halo, ada yang bisa kami bantu?', //Popup Message
      showPopup: true, //Enables popup display
      buttonImage: '<img src="assets/images/whatsapp_icon.svg" />', //Button Image
      //headerColor: 'crimson', //Custom header color
      backgroundColor: 'blue', //Custom background button color
      position: "right"    
    });
  });