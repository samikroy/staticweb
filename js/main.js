jQuery(document).ready(function( $ ) {

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Header fixed on scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Real view height for mobile devices
  //if (window.matchMedia("(max-width: 767px)").matches) {
//    $('#intro').css({ height: $(window).height() });
  //}

  // Initiate the wowjs animation library
  new WOW().init();

  // Initialize Venobox
  $('.venobox').venobox({
    bgcolor: '',
    overlayColor: 'rgba(6, 12, 34, 0.85)',
    closeBackground: '',
    closeColor: '#fff'
  });

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if( ! $('#header').hasClass('header-fixed') ) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Gallery carousel (uses the Owl Carousel library)
  $(".team-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    center:true,
    responsive: { 0: { items: 1 }, 768: { items: 3 }, 992: { items: 4 }, 1200: {items: 5}
    }
  });

 $(".services-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    center:true,
    responsive: { 0: { items: 1 }, 768: { items: 3 }, 992: { items: 4 }, 1200: {items: 5}
    }
  });

  // Buy tickets select the ticket type on click
  $('#buy-ticket-modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var ticketType = button.data('ticket-type');
    var modal = $(this);
    modal.find('#ticket-type').val(ticketType);
  })

// custom code
$('[data-type="adhaar-number"]').keyup(function() {
  var value = $(this).val();
  value = value.replace(/\D/g, "").split(/(?:([\d]{4}))/g).filter(s => s.length > 0).join(" ");
  $(this).val(value);
});

$('[data-type="adhaar-number"]').on("change, blur", function() {
  var value = $(this).val();
  var maxLength = $(this).attr("maxLength");
  if (value.length != maxLength) {
    $(this).addClass("highlight-error");
  } else {
    $(this).removeClass("highlight-error");
  }
});

$(".pre-condition").click(function(){
  var checkedVlaue = [];
  $('input[name="PreCondition"]:checked').each(function() {
    checkedVlaue.push($(this).val());
  });

  alert("My favourite programming languages are: " + test);
});

});
function SubmitAppointment() {
      var checkedVlaue = [];
      $('input[name="PreCondition"]:checked').each(function () {
        checkedVlaue.push($(this).val());
      });
      var data = {
        Name: $("#appointmentFormName").val(),
        Age: $("#appointmentFormAge").val(),
        PhoneNumber: $("#appointmentFormMobileNumber").val(),
        AlternativePhoneNumber: $("#appointmentFormAltMobileNumber").val(),
        Email: $("#appointmentFormEmail").val(),
        AadharNumber: $("#appointmentFormAadharNumber").val(),
        ResidentialAddress: $("#appointmentFormAddress").val(),
        ReasonForConsulation: $("#appointmentFormReason").val(),
        //TravelHistoryFrom: $("#appointmentFormHistoryFrom").val(),
        //TravelHistoryTo: $("#appointmentFormHistoryTo").val(),
        DurationOfSymptoms: $("#appointmentFormDuration").val(),
        //HistoryOfContactWithPositivePatient: $("#appointmentFormPatientHistory").val(),
           RequestedDate: $("#appointmentFormDatepicker").val(),
        PreConditionCheck: checkedVlaue.toString()
      }
      $.ajax({
        url: "https://d2dapi01.azurewebsites.net/api/patient/InsertPatientsAppointment",
        type: "POST",
        crossDomain: true,
        data: data,
        success: function (data) {
          console.log(data);
        }
      });

      swal({
        title: "Appointment requested !",
        text: "Our Medical team will give you a callback shortly.",
        type: "success"
      }).then(function () {
        window.location.reload(true);
      });
    }

    function SubmitRegistration() {
      var checkedVlaue = [];
      $('input[name="PreCondition"]:checked').each(function () {
        checkedVlaue.push($(this).val());
      });
      var data = {
        Name: $("#registrationFormName").val(),
        Age: $("#registrationFormAge").val(),
        PhoneNumber: $("#registrationFormPhoneNumber").val(),
        AlternativePhoneNumber: $("#registrationFormAltMobileNumber").val(),
        Email: $("#registrationFormEmail").val(),
        AadharNumber: $("#registrationFormAadharNumber").val(),
        ResidentialAddress: $("#registrationFormResidentialAddress").val(),
        PanNumber: $("#registrationFormPANNumber").val(),
        VoterID: $("#registrationFormVoterID").val(),
        TravelHistoryFrom: $("#registrationFormHistoryFrom").val(),
        TravelHistoryTo: $("#registrationFormHistoryTo").val(),
        DurationOfSymptoms: $("#registrationFormDuration").val(),
        HistoryOfContactWithPositivePatient: $("#registrationFormPatientHistory").val(),
        PreConditionCheck: checkedVlaue.toString()
      }

      $.ajax({
        url: "https://d2dapi01.azurewebsites.net/api/patient/InsertPatientsRegistration",
        type: "POST",
        crossDomain: true,
        data: data,
        success: function (data) {
          console.log(data);
        }
      });

      swal({
        title: "Registration successful!",
        text: "Our Medical team will give you a callback shortly.",
        type: "success"
      }).then(function () {
        window.location.reload(true);
      });
    }
    
    function DownloadResult(){
        swal({
        title: "Trying to get report!",
        text: "Report should start to download shortly.",
        type: "info"
      }).then(function () {
         $.ajax({
  type:     "GET",
  url:      "https://d2dapi01.azurewebsites.net/api/patient/circus?rfid="+ $("#resultFormSRFID").val(),
  success: (data) => {
    window.open("https://d2dapi01.azurewebsites.net/api/patient/circus?rfid="+ $("#resultFormSRFID").val(),"_blank"); 
        swal({
        title: "Report Downloading!",
        text: "You report download starts.",
        type: "success"
      }).then(function () {
        window.location.reload(true);
      });
  },
  error: (error) => {
        swal({
        title: "Report Not Found!",
        text: "Please try after sometime.",
        type: "error"
      }).then(function () {
        window.location.reload(true);
      });
    }
});
      });
      

    }

    const appointmentForm = document.getElementById("appointmentForm");
    appointmentForm.addEventListener('submit', function (e) {
      e.preventDefault();
      SubmitAppointment();
    });
    const registrationForm = document.getElementById("registrationForm");
    registrationForm.addEventListener('submit', function (e) {
      e.preventDefault();
      SubmitRegistration();
    });
    const resultForm = document.getElementById("resultForm");
    resultForm.addEventListener('submit', function (e) {
      e.preventDefault();
      DownloadResult();
    });
