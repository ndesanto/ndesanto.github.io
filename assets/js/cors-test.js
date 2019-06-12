$.ajax({
    url: 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86nrdjkq5ageo3&redirect_uri=https%3A%2F%2Fdev.example.com%2Fauth%2Flinkedin%2Fcallback&state=fooobar&scope=r_liteprofile%20r_emailaddress%20w_member_social',
    type: 'get',
    code: 'r9OOaOwl9QyGHT5Z',
    success: function () {
      // Change URL to page you would like to send the user after form is submitted
      console.log('scs')
    }
  })