let xMax = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
let yMax = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

let fortuneTeller = null;
let fortuneTold = null;

let questions = [];
let toldFortunes = [];
let fortune = [
	"Fortune favors the bold",
	"But what if you just didn't?",
    "Just do it, maybe",
	"Maybe don’t",
	"Give up while you are ahead",
	"It’s all a simulation",
	"Go for it, you go this!",
	"You don’t got this",
	"The circle of life is beautiful, embrace it",
	"Not everything is as it seems, keep trying",
    "Edison failed hundreds of times before making a light bulb, you shall also fail hundreds of times.",
    "Shakira is bae, so are you",
    "Maybe next time",
    "Hips sometimes lie",
    "If a tree falls in the forest and no one is around to hear it, is that still deforestation?",
    "That’s got to be the greatest pirate I’ve ever seen",
    "Roses are red, violets are blue, my favorite angles are askew",
    "Roses are red, violets are blue, choo choo kachoo",
    "We all live in a yellow submarine, you just happen to be outside of it",
    "Sometimes inexperience is experience",
    "I am speed",
    "Good luck!",
    "Chapter 2: The boy is now a fish man",
    "Chapter 3: The world has descended into chaos and all humans have mysteriously become cars.",
    "Chapter 4: The chaos realm has descended.",
    "Chapter 5: We have reached universal death",
    "Nuclear meltdown is not reserved for you, only Chernobyl.",
    "Disney is only a facade, you have so much potential.",
    "There’s always someone higher up to pass the buck to.",
	"Are you sure you’re okay?",
	"I predict full system failure",
	"I sense the need for inebriation",
	"Have you considered seizing the means of- I mean, seizing the day?",
	"The person in the mirror is currently not listening.",
	"Nirvana is unobtainable, abandon ship",
	"Congrats, your hips don’t lie",
	"Your hips lie",
	"Consider that you are nothing more than a speck of dust in an infinite plane of matter",
	"Why run faster when you can trip your opponents?",
	"You must master the art of dodging your saboteurs",
	"Better yet, why is the tequila always gone?",
	"Your biggest enemy is still out there",
	"Ka-Chow [insert lightning bolt here]",
	"I used to be an adventurer like you, you know",
	"You are speed",
	"We are all speed",
	"Chapter 1: There once was a boy, West Philadelphia born and raised...",
	"DOOM IS COMING<play howie scream>",
	"I rate you average",
	"Slightly above-average, such that the average person will designate you as average",
	"Blame your spouse",
    "Ross will troll you!",
    "The path is not always hetero",
    "Humans are not the final Form",
    "The person in the mirror will always listen",
    "The future is not always lit.",
    "Try everything.",
    "Bunnies can be cops too.",
    "Maybe you should just stop.",
    "As long as you are faster than the person next to you the bear won’t eat you.",
    "Oblivion awaits!",
    "Never fight hungry!",
    "Why is the rum always gone?",
    "The simulation may be broken.",
    "I know what you did last summer.",
    "The world will burn and that is okay.",
    "All those years of academy training wasted.",
    "Winter is coming.",
    "Laugh it off, there is always another night.",
    "I drink and know things.",
    "What is your excuse now……",
    "Never look back.",
    "Hindsight is 20/20.",
    "Are survivors truly lucky? Please seek therapy.",
    "Time is the best teacher, but it will kill you.",
    "YES, we made these up ourselves.",
];








xMax -= 275;
yMax -= 420;

let xPos = 1;
let yPos = 1;

let reachedXMax = false;
let reachedYMax = false;

function moveFortune (){
    let elem = document.getElementById("fortuneTeller");
    if (elem) {
        if (xPos >= xMax) {
            reachedXMax = true;
        } else if (xPos <= 0) {
            reachedXMax = false;
        }
        
        if(yPos >= yMax) {
            reachedYMax = true;
        } else if (yPos <= 0) {
            reachedYMax = false;
        }
        
        if(!reachedYMax) {
            yPos += 1;
            elem.style.top = yPos + "px";
        } else if (reachedYMax) {
            yPos -= 1;
            elem.style.top = yPos + "px";
        }
        if(!reachedXMax) {
            xPos += 1;
            elem.style.left = xPos + "px";
        } else if (reachedYMax) {
            xPos -= 1;
            elem.style.left = xPos + "px";
        }
    }
        // error when reachedxMax = true reachedYMax = false
}
    
    function askFortune() {
        var tempNode = document.getElementById("fortuneTeller");
        fortuneTeller = tempNode.innerHTML;
        questions.push(document.getElementById("question").value);
        document.getElementById("fortuneTeller").innerHTML = "";
        
        document.getElementById("fortuneTold").innerHTML = 
        "<div class='fortunes'><p id='destiny'>" + fortune[Math.floor(Math.random()*fortune.length)] +
        "</p><div class='fortuneBtns'><button onclick='seeFortunes()' id='seeFortunesBtn'>See your past destinies</button><button onclick='askAgain()' id='againBtn'>Seek another destiny</button></div></div>";
    }

    function askAgain() {
        toldFortunes.push(document.getElementById("destiny").innerText);
        document.getElementById("fortuneTold").innerHTML = "";
        document.getElementById("seeFortunes").innerHTML = "";
        document.getElementById("fortuneTeller").innerHTML = fortuneTeller;
    }

    function seeFortunes() {
        // console.log(toldFortunes, document.getElementById("seeFortunes").innerText);
        // console.log(questions);
        let hasBeenClicked = false;
        if (document.getElementById("seeFortunes").innerText === "" && toldFortunes.length === 0){
            toldFortunes.push(document.getElementById("destiny").innerText);
            document.getElementById("seeFortunes").innerHTML = "<div class='allFortunes'><p class='fortunesP'>" + questions[0] + ": " +
            toldFortunes[0] + "</p></div>";
            console.log('here')
        } else if (toldFortunes.length > 0) {
            if (hasBeenClicked) {
                document.getElementById("fortunes").innerHTML = "";
                toldFortunes.push(document.getElementById("destiny").innerText);
                let output = "<div class='allFortunes'>";
                for (let i = toldFortunes.length; i > 0; i--) {
                    output += "<p class='fortunesP'>" + questions[i] + ": " + toldFortunes[i] + "</p>";
                }
                output += "</div>";
                document.getElementById("seeFortunes").innerHTML = output;
            }
            hasBeenClicked = true;
        }
    }
    
    window.addEventListener("resize", resizeWindow);
    
    function resizeWindow() {
        xMax = window.innerWidth || 
        document.documentElement.clientWidth || 
        document.body.clientWidth;
    yMax = window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
    xMax -= 280;
    yMax -= 420;
}

setInterval(moveFortune, 15);