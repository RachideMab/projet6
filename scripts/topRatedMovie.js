let slideIndex = 0;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

const images = []

function paginated_fetch(
  url,
  page = 1,
  previousResponse = []
) {
  return fetch(url)
    .then(response => response.json())
    .then(newResponse => {
      const response = [...previousResponse, ...newResponse.results];

      if (newResponse.results.length !== 0) {
        page++;
        if (page > 2) {
            response.forEach(x => {
                images.length < 7 && images.push(
                    {
                        image_url: x.image_url,
                        title: x.title
                    }
                )
            });
            showSlides(slideIndex)
        } else {
            return paginated_fetch(newResponse.next, page, response);
        }
      }

      return response;
    });
}

paginated_fetch('http://localhost:8000/api/v1/titles/?sort_by=-imdb_score')

function showSlides(n) {
    // Get all the slides from the DOM
    let slides = document.querySelectorAll(".topRated");

    // If the incoming index is larger than the total of the entries set it as 1
    if (n > images.length) {slideIndex = 1}
    // If the incoming index is smaller than 1 the index is the last one
    if (n < 1) {slideIndex = images.length}

    // Container for the images that will be displayed
    const displayImages = []

    // Iterate over all the images and push the correct one in the array
    for (let i = slideIndex; i < slideIndex + 4; i++) {
        let pointer = i
        // Handler if the i is over the length
        if (pointer > (images.length - 1)) {
           pointer = pointer - images.length
        }
        displayImages.push(images[pointer])
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].getElementsByTagName('img')[0].src = displayImages[i].image_url
        slides[i].getElementsByClassName('title')[0].textContent = displayImages[i].title
    }
}