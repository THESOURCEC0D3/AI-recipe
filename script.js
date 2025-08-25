const fileInput = document.getElementById("file-upload");
const preview = document.getElementById("preview");
const placeholder = document.getElementById("placeholder");
const removeBtn = document.getElementById("removeBtn");
const uploadBox = document.getElementById("uploadBox");

// When a file is chosen
fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = (e) => {
      preview.src = e.target.result; // show image
      preview.hidden = false; // unhide preview
      placeholder.style.display = "none"; // hide placeholder
      removeBtn.style.display = "inline-block"; // show remove button
    };

    reader.readAsDataURL(file);
  }
});

// Click upload box → trigger hidden input
uploadBox.addEventListener("click", () => {
  fileInput.click();
});

// Remove image
removeBtn.addEventListener("click", () => {
  fileInput.value = ""; // reset file input
  preview.src = ""; // clear preview src
  preview.hidden = true; // hide preview
  placeholder.style.display = "block"; // show placeholder back
  removeBtn.style.display = "none"; // hide remove button
});
