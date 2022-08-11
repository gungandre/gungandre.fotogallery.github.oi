const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");

container.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.className == "thumb") {
    //menentukan gambar yang seang di klik
    jumbo.src = e.target.src;

    jumbo.classList.add("fade");
    setTimeout(function () {
      jumbo.classList.remove("fade");
    }, 500);

    thumbs.forEach(function (thumb) {
      //   if (thumb.classList.contains("active")) {
      //     thumb.classList.remove("active");
      //   }

      //cara lebih simpel

      thumb.className = "thumb";
    });

    // d tarih di bawah agar di load dlu class untuk menghapusnya
    e.target.classList.add("active");
  }
});
