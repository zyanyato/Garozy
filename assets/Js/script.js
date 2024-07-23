function createCard() {
    const cardText = document.getElementById('cardText').value.trim();
    const fontSelect = document.getElementById('fontSelect').value;
    // imageUpload || imageUrl? or both? 
    const imageUpload = document.getElementById('imageUpload').files[0];
    const imageUrl = document.getElementById('imageUrl').value.trim();
    const authorName = document.getElementById('authorName').value.trim();
  
    // Check if all fields are filled
    const noContent (cardText, imageUpload, imageUrl, authorName) => {
        if (!cardText || (!imageUpload && !imageUrl) || !authorName) {
            alert("Hey there, artist! You missed a few spots on your card!");
            return;
        }
    }
  
    // Card preview container:
    const previewContainer = document.getElementById('previewContent');
    previewContainer.innerHTML = ''; 
  
    // Add card text with selected font
    const textElement = document.createElement('p');
    textElement.textContent = cardText;
    textElement.style.fontFamily = fontSelect; // Apply selected font, we have to add new fonts => Booststrap
    previewContainer.appendChild(textElement);
  
    // Add image if uploaded or URL provided 
    if (imageUpload) {
      const imageElement = document.createElement('img');
      imageElement.src = URL.createObjectURL(imageUpload);
      imageElement.onload = () => URL.revokeObjectURL(imageElement.src);
      previewContainer.appendChild(imageElement);
    } else if (imageUrl) {
      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;
      previewContainer.appendChild(imageElement);
    }
  
    // Add author name
    const authorElement = document.createElement('p');
    authorElement.textContent = `- ${authorName}`;
    previewContainer.appendChild(authorElement);
  }
  

//   function downloadCard() {
//     const cardForm = document.getElementById('cardForm');
//     const cardPreview = document.getElementById('cardPreview');
//     cardForm.classList.add('hidden');
  
    // html2canvas(cardPreview).then(canvas => {
    //   const imgData = canvas.toDataURL('image/png');
    //   const pdf = new jsPDF();
    //   pdf.addImage(imgData, 'PNG', 0, 0);
    //   pdf.save('greeting-card.pdf');
      
    //   // Restore form visibility after download
    //   cardForm.classList.remove('hidden');
    // });
  }