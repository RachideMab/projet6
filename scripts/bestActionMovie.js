function bestActionMovies(){
    fetch("http://localhost:8000/api/v1/titles/?genre=action&sort_by=-imdb_score")
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })//to get all top rated movies 
    .then(function(value) {
        console.log(value.results)
        for (let i = 0; i < value.results.length; i++) {
            document.getElementById(`bestActionMovies${i + 1}`).src = value.results[i].image_url;
            document.getElementById(`titlebestActionMovies${i + 1}`).innerHTML = value.results[i].title;
        }
        // document.getElementById("bestActionMovies1").src = value.results[0].image_url;
        // var titleDiv1 = document.getElementById('titlebestActionMovies1');
        // titleDiv1.innerHTML = value.results[0].title
        // document.getElementById("bestActionMovies2").src = value.results[1].image_url;
        // var titleDiv2 = document.getElementById('titlebestActionMovies2');
        // titleDiv2.innerHTML = value.results[1].title
        // document.getElementById("bestActionMovies3").src = value.results[2].image_url;
        // var titleDiv3 = document.getElementById('titlebestActionMovies3');
        // titleDiv3.innerHTML = value.results[2].title
        // document.getElementById("bestActionMovies4").src = value.results[3].image_url;
        // var titleDiv4 = document.getElementById('titlebestActionMovies4');
        // titleDiv4.innerHTML = value.results[3].title
        // document.getElementById("bestActionMovies5").src = value.results[4].image_url;
        // var titleDiv5 = document.getElementById('titlebestActionMovies5');
        // titleDiv5.innerHTML = value.results[4].title
        
        // When the user want to get all 7 movies we get them from the second page. 
        fetch("http://localhost:8000/api/v1/titles/?genre=action&page=2&sort_by=-imdb_score")
        .then(function(res) {
             if (res.ok) {
                 return res.json();
             }
         })
         .then(function(value) {
             console.log(value.results)
             for (let i = 0; i < value.results.length; i++) {
                document.getElementById(`bestActionMovies${i + 6}`).src = value.results[i].image_url;
                document.getElementById(`titlebestActionMovies${i + 6}`).innerHTML = value.results[i].title;
            }
            //  document.getElementById("bestActionMovies6").src = value.results[0].image_url;
            //  var titleDiv6 = document.getElementById('titlebestActionMovies6');
            //  titleDiv6.innerHTML = value.results[0].title
            //  document.getElementById("bestActionMovies7").src = value.results[1].image_url;
            //  var titleDiv7 = document.getElementById('titlebestActionMovies7');
            //  titleDiv7.innerHTML = value.results[1].title
         })
    })
    .catch(function(err) {

    });

}

bestActionMovies()
