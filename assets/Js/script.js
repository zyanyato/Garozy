document.addEventListener('DOMContentLoaded', function() {
  const modal = new bootstrap.Modal(document.getElementById('contentModal'));

  function updatePreview() {
        const cardText = document.getElementById('cardText').value.trim();
    const fontSelect = document.getElementById('fontSelect').value;
    const imageUrl = document.getElementById('imageUrl').value.trim();
    const authorName = document.getElementById('authorName').value.trim();
  
    
    // Card preview container:
    const previewContainer = document.getElementById('previewContent');
    previewContainer.innerHTML = ''; 
    if (cardText) {
      const textElement = document.createElement('p');
      textElement.textContent = cardText;
      textElement.style.fontFamily = fontSelect;
      previewContainer.appendChild(textElement);
    }
    
    if (imageUrl) {
      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;
      previewContainer.appendChild(imageElement);
    }
    
    if (authorName) {
      const authorElement = document.createElement('p');
      authorElement.textContent = `- ${authorName}`;
      previewContainer.appendChild(authorElement);
    }
  }
  
  window.createCard = function() {
    const cardText = document.getElementById('cardText').value.trim();
    const fontSelect = document.getElementById('fontSelect').value;
    const imageUrl = document.getElementById('imageUrl').value.trim();
    const authorName = document.getElementById('authorName').value.trim();
    
    // Check if all fields are filled
        if (!cardText || !imageUrl || !authorName) {
          modal.show();
            // alert("Hey there, artist! You missed a few spots on your card!");
            return;
        }
    
    const previewContainer = document.getElementById('previewContent');
    previewContainer.innerHTML = '';

    // Add card text with selected font
    const textElement = document.createElement('p');
    textElement.textContent = cardText;
    textElement.style.fontFamily = fontSelect; // Apply selected font, we have to add new fonts => Booststrap
    previewContainer.appendChild(textElement);
    previewContainer.style.backgroundImage = `url(${imageUrl})`;
  
  //   // Add image if uploaded or URL provided 
    if (imageUrl) {
      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;
      previewContainer.appendChild(imageElement);
    }
  
  //   // Add author name
    const authorElement = document.createElement('p');
    authorElement.textContent = `- ${authorName}`;
    previewContainer.appendChild(authorElement);
  }
  
  
  document.getElementById('cardText').addEventListener('input', updatePreview);
  document.getElementById('fontSelect').addEventListener('input', updatePreview);
  document.getElementById('imageUrl').addEventListener('input', updatePreview);
  document.getElementById('authorName').addEventListener('input', updatePreview);
  });
