$('.btn').click(function() {
    alert('Test');
    $.ajax("http://nephcurebetaapi.azurewebsites.net/api/v1/users/"+$('.txt').val).done(function(data) {
        alert('Got Data');
        console.log(data);
        var i, repo;
        $.each(data, function (i, repo) {
            $("#allRepos").append("<li><a href='repo-detail.html?owner=" + repo.firstName + "&name=" + repo.lastName + "'>"
            + "<h4>" + repo.firstName + "</h4>"
            + "<p>" + repo.lastName + "</p>"
            + "<p>" + repo.age + "</p></a></li>");
        });
        $('#allRepos').listview('refresh');
    });
});