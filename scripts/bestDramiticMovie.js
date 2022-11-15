function bestDramaticMovies(){
   fetch("http://localhost:8000/api/v1/titles/?genre=drama&sort_by=-imdb_score")
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })//to get all top rated movies 
    .then(function(value) {
        console.log(value.results)
        for (let i = 0; i < value.results.length; i++) {
            document.getElementById(`bestDramaticMovies${i + 1}`).src = value.results[i].image_url;
            document.getElementById(`titlebestDramaticMovies${i + 1}`).innerHTML = value.results[i].title;
        }
                
        // When the user want to get all 7 movies we get them from the second page. 
        fetch("http://localhost:8000/api/v1/titles/?genre=drama&page=2&sort_by=-imdb_score")
        .then(function(res) {
             if (res.ok) {
                 return res.json();
             }
         })
         .then(function(value) {
             console.log(value.results)
             for (let i = 0; i < value.results.length; i++) {
                document.getElementById(`bestDramaticMovies${i + 6}`).src = value.results[i].image_url;
                document.getElementById(`titlebestDramaticMovies${i + 6}`).innerHTML = value.results[i].title;
            }
            
         })
    })
    .catch(function(err) {

    });

}

bestDramaticMovies()
