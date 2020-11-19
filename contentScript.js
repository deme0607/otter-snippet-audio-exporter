window.onload = () => {
  addDownloadButtonToShareBar(5, 0);
}

const addDownloadButtonToShareBar = (maxRetry, currentRetry) => {
  let elements = document.getElementsByClassName('conversation-playback__share-bar');

  if (elements.length > 0) {
    addDownloadButton(elements[0]);
  } else if (currentRetry < maxRetry) {
    setTimeout(addDownloadButtonToShareBar, 100 * currentRetry, maxRetry, currentRetry + 1)
  } else {
    console.error('no element');
  }
}

const addDownloadButton = (shareBar) => {
  const button = document.createElement('button');
  button.className = 'mat-icon-button mat-button-base';
  button.addEventListener('click', (e) => {
    const id = e.view.location.pathname.replace('\/s\/', '');
    const url = 'https://otter.ai/forward/api/v1/speech_audio_public/' + id;
    e.view.location = url;
  });

  const span = document.createElement('span');
  span.className = 'mat-button-wrapper';

  const icon = document.createElement('mat-icon');
  icon.className = 'material-icons';
  icon.innerText = 'cloud_download';
  icon.style.color = '#003a7f';

  span.appendChild(icon);
  button.appendChild(span);
  shareBar.appendChild(button);
}
