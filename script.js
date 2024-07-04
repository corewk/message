// Log IP address when the page loads
fetch('http://68.178.170.129:3000/')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Error logging IP:', error));

var passwords = {
  "Jurassic park": {
    name: "Janasaurus Rex",
    message: "Jana, Janiela ko, I love how straight forward you are. You are so beautiful in my eyes I dont know why can't you see it?? I mean if I could lend my eyes for you to see how beautiful you are in my prospective i would. Jana I love how confident you are, even though you said that you have a lot of insecurities you never failed to be strong. I love how you admit your mistakes and proceed to change to be a better person. I admire you for being strong, for being the woman you are. But not because being strong is nice, you'll always act like it, you can feel vulnerable anytime you want, I'll never judge how you feel, I'll always understand you. Remember when i said that you look like a pearl?? Hahaha you actually do, because you always standout specially when the sun shines at you, you have this attitude that i always envy and love about you."
  },
  "cheese": {
    name: "Maxine Cheese",
    message: "Maxine, hey pretty i love you, even though i know you feel ashame being with us because you think you're being left out because of our academic achievements. I want you to always remember that our achievement can never make you worth less. You are worth it. Being a working student is really hard and we admire you for being able to handle it. For being able to conquer all of your problems, you didn't had the priviledge that we got. Thankyou for being a strong woman for yourself. Being a strong woman is such an achievement. We are so proud of you. Because you're trying even if it's hard you're still fighting."
  },
  "heart": {
    name: "Maylove",
    message: "May, our baby girl. I know you're facing a lot of problem specially with your family but i can see even though they've treated you badly i can still see that you love them. I love how loving you are. You are such a kind woman and a strong one too. Don't ever feel hesitated to say your problems to me if you have. I can always listen to you. If you need my help just tell me I'll reply as fast as i can. Despite a of the pressure you're carrying i hope you'll always remember that i'm always here at your side. Please don't ever feel insecure about your appearance as well, you're beautiful, your soul is beautiful, your hair is beautiful, your heart is beautiful, your face is beautiful, your body is beautiful, nothing can change that. Maganda ka. I also don't know what to do just to tell you how pretty you are, but everytime you feel insecure about your appearance you look like a cloud that grows rainbow after a rain."
  },
  "gold": {
    name: "Ricah Mae Gold",
    message: "Ricah, my mortal enemy. You'te beautiful i do not understand why you don't show your face to us more often, but i completely respect that as long as your comfortable. I love how such a strong woman you are even though you're tanga i can't imagine doing those things that you do for love, i admire how strong you are to do all of those. I wan't you to know that you're not replaceable, and you're enough. Never question your worth if a man broke your heart, no mans love can define your worth. You are more than a lover. I will love you with my whole heart. I will always be here ready to listen to all of your boy problem. If you need advice just ask me but please don't put yourself in shit. Treat yourself well. If you ever feel misunderstood or misinterpreted you can always talk to me. I wish for you, for us to be successful in life and all of your plans to come true. I might be rude sometimes or act that i don't love you, i may love teasing you and making u angry but i don't want you to got hurt, if someone break your heart (i hope for no one to break your heart) i am always here to help you heal. I will always love you."
  },
  "dinasour": {
    name: "Rorya",
    message: "Yuria, my love, so pogi, and my most gentleman friend 'In a world of boys youre the gentleman'. Thanks for being there for us for handling our kaartehan, and for the princess treatments. For carrying our bags, buying us lunch, tying our shoe laces, and those little things. I know youre facing a lot of problems specially with your family i assumed. Youre not a person that tells her problem because i know you want to keep a strong figure, being strong is nice but theres nothing wrong for being soft sometimes for being weak, whatever you are we love you. I want to tell you that me and the others are always here for you. I will understand you. Theres nothing wrong for asking us for help. Theres nothing wrong for being vulnerable, our love for you will never change."
  },
  "123Z": {
    name: "Zamantha",
    message: "Samantha, i really did not expected us to be friends at all. To be honest i've heard a lot of issues about you and your behavior i tried to stay away because i don't want to have a friend like that but after days i started to get to know you. You're not that bad at all. You are fun to be with. I trust you. Please don't break the trust that we gave you. I am really sorry for judging you and thinking that you are a bad person and tried to stay away from you. I want you to know that everybody makes mistake, theres no exception to you. What matters is we learn from our mistake and we won't do it again. I hope you've learned from your mistake sam. I wan't you to know that you're my friend if anythings happened and you need my help don't hesitate to ask me. I'll be here by your side."
  },
  "mang inasal": {
    name: "Anne Lee Rice",
    message: "Anne my Anne Lee Rice, my academic buddy. I love you, even though you're sometimes nonchalant about your feelings i know that you love me too😘. Why are you so pretty? Like effortlessly pretty? Coz even though i took bad pictures of you my opinion about you being the most prettiest girl i know never change. I love your style. I love how effortlessly kind you are. Girl thankyou for being there in my academic journey. For witnessing every breakdown i've been through because of my academic perfomance. Thankyou for handling my crybaby attitude. I hope our friendship to last forever. I love you. I love how comforting your presence is. You never told me about your problems but if something upsets you just tell me, if you need help, just call me. Anne I love you with my whole heart."
  }
};

var incorrectMessages = [
  "Engk engk, wrong password.",
  "I told you, wrong password!",
  "Oops, wrong password again.",
  "Try again, wrong password.",
  "Still not right, wrong password."
];

document.getElementById("passwordForm").addEventListener("submit", function(event) {
  event.preventDefault();
  checkPassword();
});

function checkPassword() {
  var password = document.getElementById("password").value;
  var incorrectPasswordContainer = document.getElementById("incorrectPasswordContainer");
  incorrectPasswordContainer.innerHTML = ''; // Clear any existing error messages

  if (password === "") {
    showIncorrectPassword("Please enter a password.");
  } else if (password in passwords) {
    document.getElementById("passwordForm").style.display = "none";
    var messageContainer = document.getElementById("messageContainer");
    var personalMessage = document.createElement("p");
    personalMessage.textContent = "Dear " + passwords[password].name + ",";
    messageContainer.appendChild(personalMessage);
    var userMessage = document.createElement("p");
    userMessage.textContent = passwords[password].message;
    messageContainer.appendChild(userMessage);
    messageContainer.style.display = "block";
    clearIncorrectPassword();
    // Trigger confetti
    confetti.start();
  } else {
    var randomMessage = incorrectMessages[Math.floor(Math.random() * incorrectMessages.length)];
    showIncorrectPassword(randomMessage);
  }
}

function showIncorrectPassword(message) {
  var incorrectPasswordContainer = document.getElementById("incorrectPasswordContainer");
  var incorrectPasswordDiv = document.createElement("div");
  incorrectPasswordDiv.className = "incorrectPasswordMessage";
  incorrectPasswordDiv.textContent = message;
  incorrectPasswordContainer.appendChild(incorrectPasswordDiv);
  setTimeout(function() {
    incorrectPasswordDiv.classList.add("exitAnimation"); // Trigger exit animation
    setTimeout(function() {
      incorrectPasswordContainer.removeChild(incorrectPasswordDiv);
    }, 500); // Animation duration
  }, 2000);
}

function clearIncorrectPassword() {
  var incorrectPasswordContainer = document.getElementById("incorrectPasswordContainer");
  incorrectPasswordContainer.innerHTML = ''; // Clear any existing error messages
}

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var showPasswordButton = document.getElementById("showPasswordButton");
  var passwordInputContainer = document.getElementById("passwordInputContainer");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordInputContainer.style.width = "auto"; // Set width to auto
    showPasswordButton.textContent = "Hide Password";
  } else {
    passwordInput.type = "password";
    passwordInputContainer.style.width = "100%"; // Set width back to 100%
    showPasswordButton.textContent = "Show Password";
  }
}
