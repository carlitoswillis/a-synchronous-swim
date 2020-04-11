(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  // TODO: build the swim command fetcher here


  // var settings = {
  //   "url": "http://127.0.0.1:3000",
  //   "method": "GET",
  //   "timeout": 0,
  //   "success": function (response) {
  //     console.log(response);

  //   }
  // };

  // $.ajax(settings).done(function (response) {
  //   console.log(response);
  // });


  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("http://127.0.0.1:3000", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


  console.log('fetched!');
  //

  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: 'FILL_ME_IN',
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        // reload the page
        window.location = window.location.href;
      }
    });
  };

  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });

})();
