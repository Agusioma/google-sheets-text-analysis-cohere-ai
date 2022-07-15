function myFunction() {
    /*var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer iwXeHXJjhh5VyRlbj7i7hE2KxvrOz5l9SqMZZ8yM");*/
    var sheet = SpreadsheetApp.getActiveSheet();
    var data = sheet.getDataRange().getValues();
    const cars = [];
    for (var i = 1; i < data.length; i++) {
        cars[i - 1] = '{"text" : "' + data[i][0] + '"' + ', "label" : "' + data[i][1] + '"}';
    }
    // Logger.log(cars);
    // for (var i = 1; i < data.length; i++) {
    //   cars[i-1] = '{"text" : "'+ data[i][0]+'"'+', "label" : "'+ data[i][1]+'"}';
    //}
    var raw = JSON.stringify({
        "outputIndicator": "",
        "taskDescription": "",
        "inputs": [
            "It boasts a stellar ensemble cast of critically acclaimed actors and box office sensations. Half the fun is identifying them before their scene is over.",
            "I felt that there was an endless barrage of words coming at me for the entire movie and I couldn't possibly absorb or keep up with it, which resulted in my missing much of the subtle nuances, sarcasm, and usual verbal humor."
        ],
        "examples": [
            {
                "text": "The worst Wes Anderson movie ever ! It's undoubtedly a overstuffed showoff of his style and expertise. Not a die-hard Wes fan, but I adored Grand Budapest Hotel. However, this one is nowhere near as good as the Budapest. I didn't love it, wasn't quite an exciting nor an entertaining one for me, but I kinda enjoyed it to some extent",
                "label": "Negative"
            },
            {
                "text": "The French dispatch is not a film for everyone. It's not even a film for fans of Anderson. You think you love his works, his art? Think again",
                "label": "Negative"
            },
            {
                "text": "An impressive three part high-art romp that can, and does at times, morph into miniatures and cartoon illustration. ",
                "label": "Positive"
            },
            {
                "text": "Took my girlfriend and had an awesome time! She's not very familiar with Wes Anderson's work but I've shown her Grand Budapest and she really enjoyed that and this movie as well.",
                "label": "Positive"
            },
            {
                "text": "Loved it loved the style. I didn’t think I would love it. I didn’t love the trailer, but when I saw the whole movie, I was really impressed. I liked all the short stories, the mix of black and white, the humour, and comedy that was present in this movie.",
                "label": "Positive"
            },
            {
                "text": "I think the french dispatch is some of Wes Anderson's best work to date. I strongly believe it will stand the test if time and age extremely well just as his other work does. It is timeless while at the same time being very modern. ",
                "label": "Positive"
            },
            {
                "text": "I loved the obit and the first two stories but then the film sagged with the student portion. And after that, I only stuck it out till the end to watch the delightful visuals. Didn't like the rest of the stories, didn't like the rest of my movie apart from the picturesqueness.",
                "label": "Negative"
            },
            {
                "text": "This film has been called a sophisticated farce at a frenetic pace.  There's nothing sophisticated about it, it's incomprehensible psychobabble rubbish.  It is truly horrible and the fact that I was the only person in a giant cineplex theater shows you that other folks have figured it out too. ",
                "label": "Negative"
            },
            {
                "text": "A tour de force, with so many excellent 'bit parts'using big names and faces, it's a treat for the eyes and the soul! The storyline is unique and innovative,  with a different approach which is refreshing.  Bill Murray has always deadpannned like no other, love him dearly,  and Frances McDormand is a joy as ever.",
                "label": "Positive"
            },
            {
                "text": "The French Dispatch is different. The editor of the French Dispatch newsmagazine has died. They then produce a commemorative issue, including three of the more prominent pieces that were written for the magazine. The first one is very good. The second is where it fails. Wes Anderson gets too much into making it Wes Andersony and forgets the story. It is something about students protesting on a campus, but their reasoning either is never made clear or the story is not interesting enough for me to have caught it. The third story is pointless. ",
                "label": "Negative"
            },
            {
                "text": "A beautifully shot but incredibly disjointed movie, Anderson has really fumbled the ball here. ",
                "label": "Negative"
            },
            {
                "text": "I had high expectations of this movie, I’ve loved all of Wes’s previous work but this was overly complicated. I was taken in and absorbed by the beautiful and colourful symmetrical scenes but was overly confused by the storyline and narration. To say that I fell asleep twice on the first two attempts at watching the film may give a slight indication as to how good it is.",
                "label": "Negative"
            },
            {
                "text": "As a Wes Anderson enthusiast, this was a beautifully made film. the cinematography was spectacular and the stories shared were all wonderfully written and displayed. ",
                "label": "Positive"
            },
            {
                "text": "A beautiful collection of stories. The Cinematography is incredible.The music also gives a mood to each story. There is humour, warmth and nostalgia of places and times that don't exist anymore.",
                "label": "Positive"
            }]
    });
    var requestOptions = {
        'method': 'post',
        'muteHttpExceptions': true,
        'contentType': 'application/json',
        'headers': {
            'Authorization': 'Bearer iwXeHXJjhh5VyRlbj7i7hE2KxvrOz5l9SqMZZ8yM'
        },
        'payload': raw,
        redirect: 'follow'
    };

    var response = UrlFetchApp.fetch("https://api.cohere.ai/small/classify", requestOptions)
    Logger.log(response);
}
function logProductInfo() {
    var sheet = SpreadsheetApp.getActiveSheet();
    var data = sheet.getDataRange().getValues();
    const cars = [];
    for (var i = 1; i < data.length; i++) {
        cars[i - 1] = '\n{\n"text" : "' + data[i][0] + '"' + ',\n "label" : "' + data[i][1] + '"\n}';
    }
    //for (var i = 1; i < data.length; i++) {
    //  cars[i-1] = '{"text" : "'+ data[i][0]+'"'+', "label" : "'+ data[i][1]+'"}';
    //}
    Logger.log(cars)
}
function summarize() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer iwXeHXJjhh5VyRlbj7i7hE2KxvrOz5l9SqMZZ8yM");

    var raw = JSON.stringify({
        "prompt": "Passage: Is Wordle getting tougher to solve? Players seem to be convinced that the game has gotten harder in recent weeks ever since The New York Times bought it from developer Josh Wardle in late January. The Times has come forward and shared that this likely isn’t the case. That said, the NYT did mess with the back end code a bit, removing some offensive and sexual language, as well as some obscure words There is a viral thread claiming that a confirmation bias was at play. One Twitter user went so far as to claim the game has gone to “the dusty section of the dictionary” to find its latest words.\n\nTLDR: Wordle has not gotten more difficult to solve.\n--\nPassage: ArtificialIvan, a seven-year-old, London-based payment and expense management software company, has raised $190 million in Series C funding led by ARG Global, with participation from D9 Capital Group and Boulder Capital. Earlier backers also joined the round, including Hilton Group, Roxanne Capital, Paved Roads Ventures, Brook Partners, and Plato Capital.\n\nTLDR: ArtificialIvan has raised $190 million in Series C funding.\n--\nPassage: The National Weather Service announced Tuesday that a freeze warning is in effect for the Bay Area, with freezing temperatures expected in these areas overnight. Temperatures could fall into the mid-20s to low 30s in some areas. In anticipation of the hard freeze, the weather service warns people to take action now.\n\nTLDR:",
        "max_tokens": 50,
        "temperature": 0.8,
        "k": 0,
        "p": 1,
        "frequency_penalty": 0,
        "presence_penalty": 0,
        "stop_sequences": [
            "--"
        ],
        "return_likelihoods": "NONE"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://api.cohere.ai/small/generate", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}