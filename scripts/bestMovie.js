function bestMovie(){
    fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score")
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(value) {
            console.log(value.results)
            document.getElementById("bestMovieImg").src = value.results[0].image_url;
            var titleDiv = document.getElementById('bestMovieTitle');
            titleDiv.innerHTML = value.results[0].title
            var descriptionDiv = document.getElementById('bestMovieDescription');
            descriptionDiv.innerHTML = value.results[0].description

            fetch("http://localhost:8000/api/v1/titles/1508669")
            .then(function(res) {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(function(value) {
                console.log(value)
                // Start of the modal get elements
                var titleLi = document.getElementById('title');
                titleLi.innerHTML = value.title
                var genderLi = document.getElementById('genres');
                genderLi.innerHTML = value.genres
                var datePublishedLi = document.getElementById('date_published');
                datePublishedLi.innerHTML = value.date_published
                var ratingLi = document.getElementById('rated');
                ratingLi.innerHTML = value.rated
                var directorLi = document.getElementById('directors');
                directorLi.innerHTML = value.directors
                var actorsLi = document.getElementById('actors');
                actorsLi.innerHTML = value.actors
                var scoreLi = document.getElementById('imdb_score');
                scoreLi.innerHTML = value.imdb_score
                var durationLi = document.getElementById('duration');
                durationLi.innerHTML = value.duration
                var countriesLi = document.getElementById('countries');
                countriesLi.innerHTML = value.countries
                var worldwide_gross_incomeLi = document.getElementById('worldwide_gross_income');
                worldwide_gross_incomeLi.innerHTML = value.worldwide_gross_income
                var descriptionLi = document.getElementById('description');
                descriptionLi.innerHTML = value.description
                document.getElementById("bestMovieImg1").src = value.image_url;
                
            })
        })
        .catch(function(err) {

        });
    }

bestMovie()