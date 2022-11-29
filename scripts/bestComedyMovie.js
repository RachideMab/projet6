let slideIndex1 = 0;

function plusSlides1(m) {
  showSlides1(slideIndex1 += m);
}

const images1 = []

function paginated_fetch1(
  url,
  page = 1,
  previousResponse1 = []
) {
  return fetch(url)
    .then(response1 => response1.json())
    .then(newResponse1 => {
      const response1 = [...previousResponse1, ...newResponse1.results];

      if (newResponse1.results.length !== 0) {
        page++;
        if (page > 2) {
            response1.forEach(x => {
                images1.length < 7 && images1.push(
                    {
                        image_url: x.image_url,
                        title: x.title
                    }
                )
            });
            showSlides1(slideIndex1)
        } else {
            return paginated_fetch1(newResponse1.next, page, response1);
        }
      }

      return response1;
    });
}

paginated_fetch1('http://localhost:8000/api/v1/titles/?genre=comedy&sort_by=-imdb_score')

function showSlides1(m) {
    // Get all the slides from the DOM
    let slides1 = document.querySelectorAll(".comedy");

    // If the incoming index is larger than the total of the entries set it as 1
    if (m > images1.length) {slideIndex1 = 1}
    // If the incoming index is smaller than 1 the index is the last one
    if (m < 1) {slideIndex1 = images1.length}

    // Container for the images that will be displayed
    const displayImages1 = []

    // Iterate over all the images and push the correct one in the array
    for (let i = slideIndex1; i < slideIndex1 + 4; i++) {
        let pointer1 = i
        // Handler if the i is over the length
        if (pointer1 > (images1.length - 1)) {
           pointer1 = pointer1 - images1.length
        }
        displayImages1.push(images1[pointer1])
    }

    for (i = 0; i < slides1.length; i++) {
        slides1[i].getElementsByTagName('img')[0].src = displayImages1[i].image_url
        slides1[i].getElementsByClassName('title')[0].textContent = displayImages1[i].title
    }
}