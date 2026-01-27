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
   "hello":"Hi! Welcome to Car Washing Management System. How can I help you?",
  "hi": "Hello! How can I assist you with car wash services?",
  "who are you": "I am AskBot, a virtual assistant designed to help you with car washing services and bookings.",
  "what is your name": "My name is AskBot. I am here to assist you with your queries.",
  
  "what services do you provide": "We provide professional car washing and cleaning services with multiple booking plans.",
  "how can i book a car wash": "Go to the Plans section, choose a suitable plan, fill the booking form and submit it.",
  "do i need to login to book": "No, you can book a car wash without login or registration.",
  "will i get a booking id": "Yes, after successful booking you will receive a unique booking ID.",
  "what is booking id used for": "The booking ID is used to identify and track your car wash booking.",
  
  "where are your washing locations": "You can view all available car washing locations in the Locations section.",
  "can i choose a washing location": "Yes, you can select an available washing point during booking.",
  "are washing locations fixed": "No, washing locations are dynamic and updated by the admin.",
  
  "how much does a car wash cost": "Car wash prices depend on the selected plan. Please check the Plans section for details.",
  "what are the available plans": "We offer multiple car washing plans based on different cleaning requirements.",
  
  "how can i contact you": "You can send your query using the Contact page available on the website.",
  "will someone respond to my query": "Yes, our admin team will review your query and respond via email.",
  
  "what is askbot": "AskBot is a chatbot that provides instant answers to frequently asked questions related to this web application.",
  "is askbot an ai chatbot": "No, AskBot is a rule-based chatbot designed to give fast and accurate responses.",
  
  "can i cancel my booking": "Currently, booking cancellation is not available. Please contact support for assistance.",
  "do you provide home service": "Service availability depends on the selected plan and location.",
  
  "thank you": "You're welcome! Happy to help you.",
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
        "can you explain your project": "The project is a web-based Car Washing Management System. It allows users to book car wash services, view plans and locations, submit queries, and interact with a rule-based chatbot. Admins can manage bookings, washing points, and respond to queries via a secure dashboard.",
  
  "what technologies you use": "We used MERN stack: ReactJS and Tailwind CSS for frontend, NodeJS and ExpressJS for backend, MongoDB for database, and JWT for secure admin authentication.",

  "how does the booking system work": "Users can select a plan, fill the booking form, and submit it. Upon successful submission, a unique booking ID is generated to track the booking.",

  "do users need to register or login": "No, users can book car wash services as guests. Only admins require login to access the dashboard.",

  "how is the admin dashboard designed": "The admin dashboard displays summarized data like total bookings, new bookings, completed bookings, enquiries, and washing points. The sidebar provides navigation to manage bookings, add washing points, and handle enquiries.",

  "what is JWT and how did you use it": "JWT stands for JSON Web Token. We used it to secure admin routes, ensuring only authorized admins can access the dashboard and perform CRUD operations.",

  "what features does the chatbot have": "The chatbot, AskBot, is rule-based and provides instant answers to common user queries related to plans, bookings, locations, and contact information. It uses predefined backend data and does not require any AI API.",

  "how did you manage user enquiries": "Users submit queries through the Contact page. Admins can view, update status as read or pending, delete queries, and respond via Gmail integration.",

  "can admin add new washing points": "Yes, the admin can add, update, and delete washing points dynamically through the admin dashboard.",

  "what is the role of MongoDB in your project": "MongoDB stores all data including bookings, washing points, user enquiries, and admin credentials in a NoSQL database structure.",

  "how did you implement booking id generation": "When a user submits a booking, the backend generates a unique booking ID using the booking record's ID from MongoDB for easy tracking.",

  "what are the future enhancements for this project": "Future enhancements include AI-based chatbot, online payment integration, mobile app, SMS notifications for bookings, and user login/registration system.",

  "what challenges did you face while building this project": "Some challenges included handling dynamic data for washing points, ensuring secure admin authentication, and designing the chatbot to provide instant responses without AI APIs.",

  "why did you choose this project": "We chose this project to solve the real-world problem of manual car wash booking management and improve customer experience by providing an automated and user-friendly system.",

  "how is the system secure": "Admin routes are secured using JWT authentication. MongoDB handles data securely and sensitive admin credentials are protected.",

  "did you implement any payment feature": "Currently, the system does not include online payments, but it can be added as a future enhancement.",

  "how does the system handle completed bookings": "The admin marks bookings as completed. Completed bookings are stored separately and can be viewed in the dashboard for tracking purposes.",

  "is this system scalable": "Yes, the system can be scaled to include multiple locations, mobile apps, payment integration, and AI-based support without major redesign.",

  "how can users contact admin": "Users can submit queries via the Contact page. Admins can reply via Gmail integration or check FAQs/AskBot for common answers."
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
