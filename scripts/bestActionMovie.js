let slideIndex4 = 0;

function plusSlides4(m) {
  showSlides4(slideIndex4 += m);
}

const images4 = []

function paginated_fetch4(
  url,
  page = 1,
  previousResponse4 = []
) {
  return fetch(url)
    .then(response4 => response4.json())
    .then(newResponse4 => {
      const response4 = [...previousResponse4, ...newResponse4.results];

      if (newResponse4.results.length !== 0) {
        page++;
        if (page > 2) {
            response4.forEach(x => {
                images4.length < 7 && images4.push(
                    {
                        image_url: x.image_url,
                        title: x.title
                    }
                )
            });
            showSlides4(slideIndex4)
        } else {
            return paginated_fetch4(newResponse4.next, page, response4);
        }
      }

      return response4;
    });
}

paginated_fetch4('http://localhost:8000/api/v1/titles/?genre=action&sort_by=-imdb_score')

function showSlides4(m) {
    // Get all the slides from the DOM
    let slides4 = document.querySelectorAll(".action");

    // If the incoming index is larger than the total of the entries set it as 1
    if (m > images4.length) {slideIndex4 = 1}
    // If the incoming index is smaller than 1 the index is the last one
    if (m < 1) {slideIndex4 = images4.length}

    // Container for the images that will be displayed
    const displayImages4 = []

    // Iterate over all the images and push the correct one in the array
    for (let i = slideIndex4; i < slideIndex4 + 4; i++) {
        let pointer4 = i
        // Handler if the i is over the length
        if (pointer4 > (images4.length - 1)) {
           pointer4 = pointer4 - images4.length
        }
        displayImages4.push(images4[pointer4])
    }

    for (i = 0; i < slides4.length; i++) {
        slides4[i].getElementsByTagName('img')[0].src = displayImages4[i].image_url
        slides4[i].getElementsByClassName('title')[0].textContent = displayImages4[i].title
    }
}