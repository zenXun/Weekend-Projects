let reviseButton = document.getElementById('reviseButton');
reviseButton.onclick = function (element) {

  const inputBox = document.getElementById("inputText");
  const outputBox = document.getElementById("outputText");
  const text = inputBox.value;

  const prompt = `Please revise the following text: "${text}"`;

  fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer <API KEY>',
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ "role": "user", "content": prompt }]
    })
  })
    .then(response => response.json())
    .then(data => {
      outputBox.value = data.choices[0].message.content;
    })
    .catch(error => console.error(error));

};

let copyButton = document.getElementById("copyButton")
copyButton.onclick = function () {
  const outputText = document.getElementById("outputText").value;
  navigator.clipboard.writeText(outputText).then(function() {
    console.log("Copied to clipboard successfully");
  }, function() {
    console.error("Failed to copy to clipboard");
  });
}
