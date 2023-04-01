// let tg = {
    const bot_id= "5831536215:AAFSHhZPXQg3wN1GtG60LEMf1eHU4qQ4OVI" // Your bot's token that got from @BotFather
    const chat_id= "651770430" // The user's(that you want to send a message) telegram chat id
// }

// function sendMessage(text)
// {
//     const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${text}`; // The url to request
//     const xht = new XMLHttpRequest();
//     xht.open("GET", url);
//     xht.send();
// }
const makePostRequest = async (url, details) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    });
    return await response.json();
  };
  
  const sendMessage = async (text, parse_mode) => {
    const endpoint = `https://api.telegram.org/bot${bot_id}/sendMessage`;
    await makePostRequest(endpoint, {
      text,
      parse_mode,
      chat_id,
    });
  };
// Now you can send any text(even a form data) by calling sendMessage function.
// For example if you want to send the 'hello', you can call that function like this:

