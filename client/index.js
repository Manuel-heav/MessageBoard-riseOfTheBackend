const container = document.querySelector('.card-header');
let elements;
fetch('http://localhost:2000/api/messages')
.then(res => res.json())
.then(data => (
    data.map((item) => (
      elements += `
      <main>
<div class="card mb-3">
<div class="card-body">
  <h5 class="card-title">${item.username}</h5>
</div>
<svg xmlns="http://www.w3.org/2000/svg" class="d-block user-select-none" width="100%" height="200" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style="font-size:1.125rem;text-anchor:middle">
  <rect width="100%" height="100%" fill="#868e96"></rect>
  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
</svg>
<div class="card-body">
  <p class="card-text">${item.description}</p>
</div>
</div>

</main>
      `
    ))
  ))

  console.log(elements)


{/* <main>
<div class="card mb-3">
<div class="card-body">
  <h5 class="card-title">Special title treatment</h5>
</div>
<svg xmlns="http://www.w3.org/2000/svg" class="d-block user-select-none" width="100%" height="200" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style="font-size:1.125rem;text-anchor:middle">
  <rect width="100%" height="100%" fill="#868e96"></rect>
  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
</svg>
<div class="card-body">
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>

</main> */}