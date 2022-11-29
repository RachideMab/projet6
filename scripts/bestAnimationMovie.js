let slideIndex3 = 0;

function plusSlides3(m) {
  showSlides3(slideIndex3 += m);
}

const images3 = []

function paginated_fetch3(
  url,
  page = 1,
  previousResponse3 = []
) {
  return fetch(url)
    .then(response3 => response3.json())
    .then(newResponse3 => {
      const response3 = [...previousResponse3, ...newResponse3.results];

      if (newResponse3.results.length !== 0) {
        page++;
        if (page > 2) {
            response3.forEach(x => {
                images3.length < 7 && images3.push(
                    {
                        image_url: x.image_url,
                        title: x.title
                    }
                )
            });
            showSlides3(slideIndex3)
        } else {
            return paginated_fetch3(newResponse3.next, page, response3);
        }
      }

      return response3;
    });
}

paginated_fetch3('http://localhost:8000/api/v1/titles/?genre=animation&sort_by=-imdb_score')

function showSlides3(m) {
    // Get all the slides from the DOM
    let slides3 = document.querySelectorAll(".animation");

    // If the incoming index is larger than the total of the entries set it as 1
    if (m > images3.length) {slideIndex3 = 1}
    // If the incoming index is smaller than 1 the index is the last one
    if (m < 1) {slideIndex3 = images3.length}

    // Container for the images that will be displayed
    const displayImages3 = []

    // Iterate over all the images and push the correct one in the array
    for (let i = slideIndex3; i < slideIndex3 + 4; i++) {
        let pointer3 = i
        // Handler if the i is over the length
        if (pointer3 > (images3.length - 1)) {
           pointer3 = pointer3 - images3.length
        }
        displayImages3.push(images3[pointer3])
    }

    for (i = 0; i < slides3.length; i++) {
        slides3[i].getElementsByTagName('img')[0].src = displayImages3[i].image_url
        slides3[i].getElementsByClassName('title')[0].textContent = displayImages3[i].title
    }
}