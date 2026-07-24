const signature = `${navigator.userAgentData?.platform || navigator.platform || ''} ${navigator.userAgent || ''}`.toLowerCase();
const platform = signature.includes('android') ? 'android'
  : signature.includes('win') ? 'windows'
  : signature.includes('mac') ? 'macos'
  : signature.includes('linux') || signature.includes('x11') ? 'linux'
  : '';

if (platform) {
  const card = document.querySelector(`[data-platform="${platform}"]`);
  card?.classList.add('recommended');
  const platformName = { windows: 'Windows', linux: 'Linux', android: 'Android', macos: 'macOS' }[platform];
  document.querySelector('#platform-note').textContent = `Recommended for this device: ${platformName}`;
  const firstDownload = card?.querySelector('a.button.primary, a.button.secondary');
  const recommended = document.querySelector('#recommended-download');
  if (firstDownload && recommended) {
    recommended.href = firstDownload.href;
    recommended.textContent = platform === 'macos' ? 'Open Krit for macOS' : `Download for ${platformName}`;
  }
}

document.querySelector('#copy-command')?.addEventListener('click', async event => {
  const value = document.querySelector('#install-command')?.textContent?.trim();
  if (!value) return;
  try {
    await navigator.clipboard.writeText(value);
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('#install-command'));
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
  }
  event.currentTarget.textContent = 'Copied';
  window.setTimeout(() => { event.currentTarget.textContent = 'Copy'; }, 1500);
});

document.querySelectorAll('[data-history-tab]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-history-tab]').forEach(item => item.classList.toggle('active', item === button));
    document.querySelectorAll('.timeline').forEach(item => item.classList.toggle('active', item.id === `${button.dataset.historyTab}-history`));
  });
});
