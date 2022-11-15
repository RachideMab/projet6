function bestComedyMovies(){
    fetch("http://localhost:8000/api/v1/titles/?genre=comedy&sort_by=-imdb_score")
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })//to get all top rated movies 
    .then(function(value) {
        console.log(value.results)
        for (let i = 0; i < value.results.length; i++) {
            document.getElementById(`BestComedyMovies${i + 1}`).src = value.results[i].image_url;
            document.getElementById(`titleBestComedyMovies${i + 1}`).innerHTML = value.results[i].title;
        }
        // document.getElementById("BestComedyMovies1").src = value.results[0].image_url;
        // var titleDiv1 = document.getElementById('titleBestComedyMovies1');
        // titleDiv1.innerHTML = value.results[0].title
        // document.getElementById("BestComedyMovies2").src = value.results[1].image_url;
        // var titleDiv2 = document.getElementById('titleBestComedyMovies2');
        // titleDiv2.innerHTML = value.results[1].title
        // document.getElementById("BestComedyMovies3").src = value.results[2].image_url;
        // var titleDiv3 = document.getElementById('titleBestComedyMovies3');
        // titleDiv3.innerHTML = value.results[2].title
        // document.getElementById("BestComedyMovies4").src = value.results[3].image_url;
        // var titleDiv4 = document.getElementById('titleBestComedyMovies4');
        // titleDiv4.innerHTML = value.results[3].title
        // document.getElementById("BestComedyMovies5").src = value.results[4].image_url;
        // var titleDiv5 = document.getElementById('titleBestComedyMovies5');
        // titleDiv5.innerHTML = value.results[4].title
        
        // When the user want to get all 7 movies we get them from the second page. 
        fetch("http://localhost:8000/api/v1/titles/?genre=comedy&page=2&sort_by=-imdb_score")
        .then(function(res) {
             if (res.ok) {
                 return res.json();
             }
         })
         .then(function(value) {
             console.log(value.results)
             for (let i = 0; i < value.results.length; i++) {
                document.getElementById(`BestComedyMovies${i + 6}`).src = value.results[i].image_url;
                document.getElementById(`titleBestComedyMovies${i + 6}`).innerHTML = value.results[i].title;
            }
            //  document.getElementById("BestComedyMovies6").src = value.results[0].image_url;
            //  var titleDiv6 = document.getElementById('titleBestComedyMovies6');
            //  titleDiv6.innerHTML = value.results[0].title
            //  document.getElementById("BestComedyMovies7").src = value.results[1].image_url;
            //  var titleDiv7 = document.getElementById('titleBestComedyMovies7');
            //  titleDiv7.innerHTML = value.results[1].title
         })
    })
    .catch(function(err) {

    });

}

bestComedyMovies()
