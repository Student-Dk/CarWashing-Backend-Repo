const Bot = require("../models/bot.model.js");
const Client = require("../models/user.model.js");

const Message = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text?.trim()) {
      return res.status(400).json({ error: "Text cannot be empty" });
    }

    // save user message
    const user = await Client.create({
      sender: "user",
      text,
    });

    // Bot responses
    const botResponses = {
      "hello": "Hi, How I can help you!!",
      "hi": "Hi, How I can help you!!",
      "who are you": "Hi,I am a chatbot , i am here to assist you",
      "what is your name": "I am a chatbot, How i can help you ",
      "can we become friend": "Yes",
      "how are you": "I'm just a bot, but I'm doing great! How about you?",
      "what is your name?": "I’m ChatBot, your virtual assistant.",
      "who made you": "I was created by developers to help answer your questions.",
      "tell me a joke": "Why don’t skeletons fight each other? They don’t have the guts!",
      "what is the time": "I can’t see a clock, but your device should know.",
      "bye": "Goodbye! Have a great day.",
      "thank you": "You’re welcome!",
      "i love you": "That’s sweet! I’m here to help you anytime.",
      "where are you from": "I live in the cloud — no rent, no bills!",
      "what can you do": "I can chat with you, answer questions, and keep you company.",
      "good morning": "Good morning! Hope you have a great day ahead.",
      "good evening": "Good evening! How can I help you today?",
      "how is your day": "My day is going great! Thanks for asking.",
      "are you human": "No, I am an AI chatbot created to assist you.",
      "can you help me learn": "Yes, I can help you learn step by step.",
      "what is your purpose": "My purpose is to help you with questions and learning.",
      "do you understand me": "Yes, I try my best to understand you.",
      "are you free to use": "Yes, you can chat with me freely.",
      "what languages do you know": "I understand English and many other languages.",
      "can you explain simply": "Yes, I always try to explain in a simple way.",
      "what is study": "Study means learning new knowledge and skills.",
      "what is learning": "Learning is the process of gaining knowledge or experience.",
      "what is success": "Success means achieving your goals through hard work.",
      "what is failure": "Failure is a lesson that helps us improve.",
      "why is practice important": "Practice helps you become better and more confident.",
      "what is technology": "Technology is the use of science to solve problems.",
      "what is programming language": "A programming language is used to give instructions to a computer.",
      "what is software developer": "A software developer builds and maintains applications.",
      "what is student life": "Student life is a time to learn, grow, and build your future.",
      "what should i learn first": "Start with basics and practice regularly.",
      "what is programming": "Programming is the process of giving instructions to a computer.",
      "what is c": "C is a programming language used for system and application development.",
      "what is c++": "C++ is an extension of C that supports object-oriented programming.",
      "what is java": "Java is an object-oriented programming language used to build applications.",
      "what is oops": "OOPS stands for Object-Oriented Programming System.",
      "what is object": "An object is a real-world entity that has data and behavior.",
      "what is class": "A class is a blueprint used to create objects.",
      "what is encapsulation": "Encapsulation means binding data and methods together.",
      "what is inheritance": "Inheritance allows one class to use properties of another class.",
      "what is polymorphism": "Polymorphism means one method can have many forms.",
      "what is abstraction": "Abstraction means hiding internal details and showing only necessary features.",
      "what is constructor": "A constructor is a special method used to initialize objects.",
      "what is function": "A function is a block of code that performs a specific task.",
      "what is method": "A method is a function written inside a class.",
      "what is variable": "A variable is used to store data values.",
      "what is data type": "A data type defines the type of data a variable can store.",
      "what is loop": "A loop is used to repeat a block of code.",
      "what is if else": "If-else is used to make decisions in a program.",
    };

    const normalizedText = text.toLowerCase().trim();
    const botResponse =
      botResponses[normalizedText] || "sorry, I don't understand that !!!";

    // save bot message
    const bot = await Bot.create({
      text: botResponse,
    });

    return res.status(200).json({
      userMessage: user.text,
      botMessage: bot.text,
    });
  } catch (error) {
    console.log("Error in Message Controller: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { Message };
