function displayImage(clickedImage) {
  let mainImageDiv = document.getElementById("image");

  mainImageDiv.style.backgroundImage = `url('${clickedImage.src}')`;
  
  mainImageDiv.innerText = clickedImage.alt;

  console.log("Đã hiển thị ảnh:", clickedImage.src);
  console.log("Mô tả:", clickedImage.alt);
}