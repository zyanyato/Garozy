document.addEventListener('DOMContentLoaded', function() {
  const modal = new bootstrap.Modal(document.getElementById('contentModal'));

  function updatePreview() {
        const cardText = document.getElementById('cardText').value.trim();
    const fontSelect = document.querySelector('.font-option.active')?.value;
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
    const fontSelect = document.querySelector('.font-option.active')?.value;
    const imageUrl = document.getElementById('imageUrl').value.trim();
    const authorName = document.getElementById('authorName').value.trim();
    
    // Check if all fields are filled
        if (!cardText || !imageUrl || !authorName) {
          modal.show();
            return;
        }
    
       //localStorage
       const cardData = {
        cardText: cardText,
        fontSelect: fontSelect,
        imageUrl: imageUrl,
        authorName: authorName
      };
  
      localStorage.setItem('cardData', JSON.stringify(cardData));
  
       // previewContainer
    const previewContainer = document.getElementById('previewContent');
    previewContainer.innerHTML = '';

    // Add card text with selected font
    const textElement = document.createElement('p');
    textElement.textContent = cardText;
    textElement.style.fontFamily = fontSelect; // Apply selected font, we have to add new fonts => Booststrap
    previewContainer.appendChild(textElement);
    // previewContainer.style.backgroundImage = `url(${imageUrl})`;
  
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
  
  //Clear card button
  function clearCard() {
    document.getElementById('cardText').value = '';
    document.getElementById('imageUrl').value = '';
    document.getElementById('authorName').value = '';
    document.querySelectorAll('.font-option').forEach(btn => btn.classList.remove('active'));
    document.getElementById('previewContent').innerHTML = '';
    localStorage.removeItem('cardData');
  }

  // background button
  const buttonI = document.querySelector(".changeBackground");
  const backgrounds = [
    'https://github.com/zyanyato/portfolio-challenge/blob/main/assets/Christmas.png?raw=true',
    'https://github.com/zyanyato/portfolio-challenge/blob/main/assets/Wedding.jpg?raw=true',
    'https://github.com/zyanyato/portfolio-challenge/blob/main/assets/birthday.jpg?raw=true',
    'https://github.com/zyanyato/portfolio-challenge/blob/main/assets/prom.jpg?raw=true',
  ];
  let currentIndex = 0;
  window.changeBackground = function(event){
    const cardPreview = document.getElementById('previewContent');
    cardPreview.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
    currentIndex++;
    if(currentIndex >= backgrounds.length) {
      currentIndex = 0;
    }
  }

  // Retrieve and saved card data if available
  const savedCardData = JSON.parse(localStorage.getItem('cardData'));
  if (savedCardData) {
    document.getElementById('cardText').value = savedCardData.cardText;
    document.getElementById('imageUrl').value = savedCardData.imageUrl;
    document.getElementById('authorName').value = savedCardData.authorName;
    document.querySelectorAll('.font-option').forEach(button => {
      if (button.value === savedCardData.fontSelect) {
        button.classList.add('active');
      }
    });
    updatePreview();
  }

  document.getElementById('cardText').addEventListener('input', updatePreview);
  document.getElementById('fontSelect').addEventListener('input', updatePreview);
  document.getElementById('imageUrl').addEventListener('input', updatePreview);
  document.getElementById('authorName').addEventListener('input', updatePreview);
  document.querySelectorAll('.font-option').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.font-option').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        updatePreview();
    });
});

 document.getElementById('createCardButton').addEventListener('click', createCard);
  document.getElementById('clearCardButton').addEventListener('click', clearCard);
});
