function topRatedMovies(){
    fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score")
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })//to get all top rated movies 
    .then(function(value) {
        console.log(value.results)
        for (let i = 0; i < value.results.length; i++) {
            document.getElementById(`topRatedMovie${i + 1}`).src = value.results[i].image_url;
            document.getElementById(`titleTopRatedMovie${i + 1}`).innerHTML = value.results[i].title;
        }
        // document.getElementById("topRatedMovie1").src = value.results[0].image_url;
        // var titleDiv1 = document.getElementById('titleTopRatedMovie1');
        // titleDiv1.innerHTML = value.results[0].title
        // document.getElementById("topRatedMovie2").src = value.results[1].image_url;
        // var titleDiv2 = document.getElementById('titleTopRatedMovie2');
        // titleDiv2.innerHTML = value.results[1].title
        // document.getElementById("topRatedMovie3").src = value.results[2].image_url;
        // var titleDiv3 = document.getElementById('titleTopRatedMovie3');
        // titleDiv3.innerHTML = value.results[2].title
        // document.getElementById("topRatedMovie4").src = value.results[3].image_url;
        // var titleDiv4 = document.getElementById('titleTopRatedMovie4');
        // titleDiv4.innerHTML = value.results[3].title
        // document.getElementById("topRatedMovie5").src = value.results[4].image_url;
        // var titleDiv5 = document.getElementById('titleTopRatedMovie5');
        // titleDiv5.innerHTML = value.results[4].title
        
        // When the user want to get all 7 movies we get them from the second page. 
        fetch("http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score")
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(value) {
            console.log(value.results)
            for (let i = 0; i < value.results.length; i++) {
                document.getElementById(`topRatedMovie${i + 6}`).src = value.results[i].image_url;
                document.getElementById(`titleTopRatedMovie${i + 6}`).innerHTML = value.results[i].title;
            }
            // document.getElementById("topRatedMovie6").src = value.results[0].image_url;
            // var titleDiv6 = document.getElementById('titleTopRatedMovie6');
            // titleDiv6.innerHTML = value.results[0].title
            // document.getElementById("topRatedMovie7").src = value.results[1].image_url;
            // var titleDiv7 = document.getElementById('titleTopRatedMovie7');
            // titleDiv7.innerHTML = value.results[1].title
        })
    })
    .catch(function(err) {

    });

}

topRatedMovies()
