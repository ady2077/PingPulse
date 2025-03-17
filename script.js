async function checkPulse() {
    const url = document.getElementById('urlInput').value;
    const resultDiv = document.getElementById('result');

    if (!url || !url.startsWith('http')) {
        resultDiv.innerHTML = '<span style="color: #ff6b6b;">Please enter a valid URL (e.g., https://example.com)</span>';
        return;
    }

    resultDiv.innerHTML = 'Pinging...';

    try {
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
        const response = await fetch(proxyUrl);
        
        if (response.ok) {
            resultDiv.innerHTML = `<span style="color: #00ff9f;">${url} is alive!</span>`;
        } else {
            resultDiv.innerHTML = `<span style="color: #ff6b6b;">${url} is down or unreachable.</span>`;
        }
    } catch (error) {
        resultDiv.innerHTML = `<span style="color: #ff6b6b;">Error: Could not ping ${url}.</span>`;
    }
}