function myFunction() {
    /*var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer iwXeHXJjhh5VyRlbj7i7hE2KxvrOz5l9SqMZZ8yM");*/
  
    var raw = JSON.stringify({
      "outputIndicator": "",
      "taskDescription": "",
      "inputs": [
        "This item was broken when it arrived",
        "This item broke after 3 weeks"
      ],
      "examples": [
        {
          "text": "The order came 5 days early",
          "label": "positive"
        },
        {
          "text": "The item exceeded my expectations",
          "label": "positive"
        },
        {
          "text": "I ordered more for my friends",
          "label": "positive"
        },
        {
          "text": "I would buy this again",
          "label": "positive"
        },
        {
          "text": "I would recommend this to others",
          "label": "positive"
        },
        {
          "text": "The package was damaged",
          "label": "negative"
        },
        {
          "text": "The order is 5 days late",
          "label": "negative"
        },
        {
          "text": "The order was incorrect",
          "label": "negative"
        },
        {
          "text": "I want to return my item",
          "label": "negative"
        },
        {
          "text": "The item's material feels low quality",
          "label": "negative"
        }
      ]
    });
    var requestOptions = {
      'method': 'post',
      'contentType': 'application/json',
      'headers': {
            'Authorization': 'Bearer iwXeHXJjhh5VyRlbj7i7hE2KxvrOz5l9SqMZZ8yM'
      },
      'payload': raw,
      redirect: 'follow'
    };
    
    var response = UrlFetchApp.fetch("https://api.cohere.ai/small/classify", requestOptions)
    Logger.log(response.getContentText());
  }
  function logProductInfo() {
    var sheet = SpreadsheetApp.getActiveSheet();
    var data = sheet.getDataRange().getValues();
    //for (var i = 1; i < data.length; i++) {
     // Logger.log('REVIEW: ' + data[i][0] + ' LABEL: ' + data[i][1]);
    //}
      const cars = [];
      for (var i = 1; i < data.length; i++) {
          cars[i-1] = '\n{\n"text" : '+ data[i][0]+''+',\n "label" : '+ data[i][1]+'\n}';
      }
      //for (var i = 1; i < data.length; i++) {
        //  entries.set('text : '+ data[i][0], 'label : '+ data[i][1]);
      //}
      Logger.log(cars)
  }