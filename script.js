// function appendAds() {
//     // Clear the previous ads
//     let adsDiv = document.getElementById('ads');
//     adsDiv.innerHTML = '';

//     // Create the first script element
//     let script1 = document.createElement('script');
//     script1.type = 'text/javascript';
//     script1.innerHTML = `
//         atOptions = {
//             'key' : 'a0122589f139336179decf33c0da3bcb',
//             'format' : 'iframe',
//             'height' : 50,
//             'width' : 320,
//             'params' : {}
//         };
//     `;

//     // Append the first script to the div with id 'ads'
//     adsDiv.appendChild(script1);

//     // Create the second script element
//     let script2 = document.createElement('script');
//     script2.type = 'text/javascript';
//     script2.src = '//www.topcreativeformat.com/a0122589f139336179decf33c0da3bcb/invoke.js';
//     script2.async = false; // Ensure synchronous execution

//     // Append the second script to the div with id 'ads'
//     adsDiv.appendChild(script2);
// }

// // Regenerate ads every 2 seconds
// setInterval(appendAds, 3000);

// // Initial call to append ads immediately
// appendAds();



function appendAds() {
  // Clear the previous ads
  let adsDiv = document.getElementById('ads');
  adsDiv.innerHTML = '';

  // Create the first script element
  let script1 = document.createElement('script');
  script1.type = 'text/javascript';
  script1.innerHTML = `
        atOptions = {
            'key' : '28a52def9a95aa662d6df374383bb6a1',
            'format' : 'iframe',
            'height' : 250,
            'width' : 300,
            'params' : {}
        };
    `;

  // Create the second script element
  let script2 = document.createElement('script');
  script2.type = 'text/javascript';
  script2.src = '//www.topcreativeformat.com/28a52def9a95aa662d6df374383bb6a1/invoke.js';
  script2.async = false; // Ensure synchronous execution

  // Append the scripts to the div with id 'ads'
  adsDiv.appendChild(script1);
  adsDiv.appendChild(script2);
}

// Regenerate ads every 2 seconds
setInterval(appendAds, 5000);

// Initial call to append ads immediately
appendAds();