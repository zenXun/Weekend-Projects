let reviseButton = document.getElementById('reviseButton');
reviseButton.onclick = function (element) {

  const inputBox = document.getElementById("input");
  const outputBox = document.getElementById("output");
  const text = inputBox.value;

  const prompt = `Please revise the following text: "${text}"`;

  fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer <API KEY>',
    },
    body: JSON.stringify({
      prompt: prompt,
      max_tokens: 60,
      n: 1,
      stop: '\n',
    })
  })
    .then(response => response.json())
    .then(data => {
      outputBox.value = data.choices[0].text.trim();
    })
    .catch(error => console.error(error));

};
