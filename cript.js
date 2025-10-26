document.addEventListener('DOMContentLoaded', () => {
  const previewDiv = document.getElementById('image');
  const thumbs = document.querySelectorAll('.gallery img.thumb');
  const originalText = previewDiv.textContent;
  const originalBg = previewDiv.style.backgroundImage || '';

  thumbs.forEach((img) => {
    img.addEventListener('mouseenter', () => update(img, previewDiv));
    img.addEventListener('focus', () => update(img, previewDiv));
    img.addEventListener('mouseleave', () => undo(previewDiv, originalText, originalBg));
    img.addEventListener('blur', () => undo(previewDiv, originalText, originalBg));
  });

  const gallery = document.getElementById('gallery');
  gallery.addEventListener('mouseleave', () => undo(previewDiv, originalText, originalBg));
});

function update(previewPic, previewDiv) {
  console.log('update() called — event fired');
  console.log('previewPic alt:', previewPic.alt);
  console.log('previewPic src:', previewPic.src);
  previewDiv.style.backgroundImage = `url("${previewPic.src}")`;
  previewDiv.textContent = previewPic.alt || 'Ảnh không có mô tả';
}

function undo(previewDiv, originalText, originalBg) {
  console.log('undo() called — restore original state');
  previewDiv.style.backgroundImage = originalBg || '';
  previewDiv.textContent = originalText || 'Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.';
}
