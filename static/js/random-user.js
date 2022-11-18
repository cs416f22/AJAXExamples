$(document).ready(function () {

    $('#getOneUser').click(getOneRandomUser);
    $('#getMultipleUsers').click(getMultipleUsers);

    function getOneRandomUser() {

        // Display the div that is initially hidden
        $('#single-user-container').show();
        $('#multiple-user-container').hide();

        // Make a AJAX request
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function(data) {
                //console.log(data);
                const result = data.results[0];
                const firstName = result.name['first'];
                const lastName = result.name.last;
                const email = result.email;
                const phone = result.phone;
                const picture = result.picture.large;


                console.log(firstName, lastName, email, picture);

                // Update the page with the information received from the API
                $('#name').text(firstName + ' ' + lastName);
                $('#email').text(email);
                $('#phone').text(phone);
                $('#profile-img').attr('src', picture);

            }
        });

    }

    function getMultipleUsers() {
        // Get the number of users from the textbox
        const numberOfUsers = $('#number-of-users').val();
        if (numberOfUsers < 1){
            return;
        }
        console.log(numberOfUsers);


        // Display the div that is initially hidden
        $('#multiple-user-container').show();
        $('#single-user-container').hide();

        // Make an AJAX request
        $.ajax({
            url: 'https://randomuser.me/api/',
            data: {results: numberOfUsers},
            dataType: 'json',
            success: function(data) {
                console.log(data);
                const results = data.results;
                //console.log(this.url);

                $('#multiple-user-container').empty();

                $.each(data.results, function(i, user) {
                    // Store each user's information in a variable
                    const firstName = user.name.first;
                    const lastName = user.name.last;
                    const email = user.email;
                    const phone = user.phone;
                    const picture = user.picture.large;

                    console.log(firstName, lastName, email, phone, picture);
                    // Append our result into our page
                    $('#multiple-user-container').append('' +
                        '<section class="shadow">' +
                        '   <div class="card mb-3">\n' +
                        '                <div class="row g-0 align-items-center">\n' +
                        '                    <div class="col-sm-4">\n' +
                        `                        <img class="card-img rounded p-1" src=${picture}  alt="profile-image">\n` +
                        '                    </div>\n' +
                        '                    <div class="col-sm-8">\n' +
                        '                        <div class="card-body">\n' +
                        `                            <h5 class="card-title">${firstName} ${lastName}</h5>\n` +
                        `                            <p class="card-text">Email: ${email}</p>\n` +
                        `                            <p class="card-text">Phone: ${phone}</p>\n` +
                        '                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\n' +
                        '                        </div>\n' +
                        '                    </div>\n' +
                        '                </div>\n' +
                        '     </div>\n' +
                        '</section>');

                });

            }
        });

    }
});