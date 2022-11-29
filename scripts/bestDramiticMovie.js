let slideIndex2 = 0;

function plusSlides2(t) {
  showSlides2(slideIndex2 += t);
}

const images2 = []

function paginated_fetch2(
  url,
  page = 1,
  previousResponse2 = []
) {
  return fetch(url)
    .then(response2 => response2.json())
    .then(newResponse2 => {
      const response2 = [...previousResponse2, ...newResponse2.results];

      if (newResponse2.results.length !== 0) {
        page++;
        if (page > 2) {
            response2.forEach(x => {
                images2.length < 7 && images2.push(
                    {
                        image_url: x.image_url,
                        title: x.title
                    }
                )
            });
            showSlides2(slideIndex2)
        } else {
            return paginated_fetch2(newResponse2.next, page, response2);
        }
      }

      return response2;
    });
}

paginated_fetch2('http://localhost:8000/api/v1/titles/?genre=drama&sort_by=-imdb_score')

function showSlides2(t) {
    // Get all the slides from the DOM
    let slides2 = document.querySelectorAll(".dramatic");

    // If the incoming index is larger than the total of the entries set it as 1
    if (t > images2.length) {slideIndex2 = 1}
    // If the incoming index is smaller than 1 the index is the last one
    if (t < 1) {slideIndex2 = images2.length}

    // Container for the images that will be displayed
    const displayImages2 = []

    // Iterate over all the images and push the correct one in the array
    for (let i = slideIndex2; i < slideIndex2 + 4; i++) {
        let pointer2 = i
        // Handler if the i is over the length
        if (pointer2 > (images2.length - 1)) {
           pointer2 = pointer2 - images2.length
        }
        displayImages2.push(images2[pointer2])
    }

    for (i = 0; i < slides2.length; i++) {
        slides2[i].getElementsByTagName('img')[0].src = displayImages2[i].image_url
        slides2[i].getElementsByClassName('title')[0].textContent = displayImages2[i].title
    }
}