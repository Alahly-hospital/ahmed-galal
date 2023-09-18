
function news(category){
return `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>News Update</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background-color: #f1f1f1;
            padding: 10px;
            text-align: center;
          }
          h1 {
            color: #333;
            font-size: 24px;
            margin-bottom: 20px;
          }
          p {
            color: #555;
            font-size: 16px;
            line-height: 1.5;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Latest News Update</h1>
          </div>
          <div class="content">
             <p>category:${category}</p> 
            <a href="https://drahmedgalalcenter.com" style="text-decoration:none">Visit Us now</a>
          </div>
        </div>
      </body>
    </html>
    `
}

function reservation(date){
    console.log(date);
    return `<!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <title>News Update</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background-color: #f1f1f1;
                padding: 10px;
                text-align: center;
              }
              h1 {
                color: #333;
                font-size: 24px;
                margin-bottom: 20px;
              }
              p {
                color: #555;
                font-size: 16px;
                line-height: 1.5;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Latest reservation Update</h1>
              </div>
              <div class="content">
                 <p>Reservation date:${date}</p> 
                <a href="https://drahmedgalalcenter.com" style="text-decoration:none">Visit Us now</a>
              </div>
            </div>
          </body>
        </html>
        `
    }

module.exports ={
    news,
    reservation
}