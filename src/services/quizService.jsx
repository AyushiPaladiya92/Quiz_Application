const mockQuizzes = [
  {   
    id: 1, 
    title: 'General Knowledge', 
    description: 'Dive into a world of diverse topics! This quiz covers everything from history and science to pop culture and current events. Challenge yourself with questions that will test your broad understanding.',
    image: 'https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  { 
    id: 2, 
    title: 'Science Quiz', 
    description: 'Embark on a journey through the wonders of science! From the depths of the ocean to the far reaches of space, this quiz will challenge your understanding of biology, chemistry, and physics of science quize.',
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  { 
    id: 3, 
    title: 'History Trivia', 
    description: 'Travel through time with our history quiz! Explore ancient civilizations, world-changing events, and influential figures from the past. Test your knowledge of the events that shaped our world.',
    image: 'https://images.pexels.com/photos/28868175/pexels-photo-28868175/free-photo-of-ancient-architectural-temple-ruins-in-india.jpeg?auto=compress&cs=tinysrgb&w=600' 
  },
  { 
    id: 4, 
    title: 'Pop Culture Mania', 
    description: 'Lights, camera, action! Dive into the exciting world of pop culture. From blockbuster movies and chart-topping music to viral internet trends and celebrity gossip, test your knowledge of pop culuture mania.',
    image: 'https://images.pexels.com/photos/14575499/pexels-photo-14575499.jpeg?auto=compress&cs=tinysrgb&w=600' 
  },
  { 
    id: 5, 
    title: 'Geography Challenge', 
    description: 'Embark on a global adventure with our geography quiz! Navigate through continents, countries, and capitals. Test your knowledge of world landmarks, natural wonders, and cultural geography.',
    image: 'https://images.pexels.com/photos/8159115/pexels-photo-8159115.jpeg?auto=compress&cs=tinysrgb&w=600' 
  },
  { 
    id: 6, 
    title: 'Tech Savvy',
    description: 'Plug into the world of technology with this cutting-edge quiz! From the latest gadgets and software to the history of computing and future tech trends, test your digital knowledge of world of technology cutting-edge quiz of tech savvy.',
    image: 'https://images.pexels.com/photos/17767272/pexels-photo-17767272/free-photo-of-man-holding-hands-on-laptop.jpeg?auto=compress&cs=tinysrgb&w=600' 
  },
  {
    id: 7,
    title: 'Sports Spectacular',
    description: 'Get in the game with our sports quiz! From iconic athletes and legendary teams to record-breaking performances and major sporting events, test your knowledge of various sports of our sports quizez iconic record of sports spectacular.',
    image: 'https://images.pexels.com/photos/16008241/pexels-photo-16008241/free-photo-of-view-of-jockeys-riding-racehorses.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 8,
    title: 'Food and Cuisine',
    description: 'Embark on a culinary journey with our food and cuisine quiz! From international dishes and cooking techniques to famous chefs and food history, test your gastronomic knowledge culinary journey our food of food and cuisine.',
    image: 'https://images.pexels.com/photos/28841111/pexels-photo-28841111/free-photo-of-fresh-caprese-salad-with-mozzarella-and-tomato.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

  
  const mockQuizDetails = [
    {
      id: 1,
      title: 'General Knowledge',
      description: 'Test your general knowledge!',
      questions: [
        {
          id: 1,
          text: 'What is the capital of France?',
          options: ['London', 'Berlin', 'Paris', 'Madrid'],
          correctAnswer: 2,
        },
        {
          id: 2,
          text: 'Who painted the Mona Lisa?',
          options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Claude Monet'],
          correctAnswer: 1,
        },
        {
          id: 3,
          text: 'What is the largest planet in our solar system?',
          options: ['Mars', 'Saturn', 'Jupiter', 'Neptune'],
          correctAnswer: 2,
        },
        {
          id: 4,
          text: 'Which country is home to the kangaroo?',
          options: ['New Zealand', 'South Africa', 'Australia', 'Brazil'],
          correctAnswer: 2,
        },
        {
          id: 5,
          text: 'What is the chemical symbol for gold?',
          options: ['Go', 'Gd', 'Au', 'Ag'],
          correctAnswer: 2,
        },
      ],
    },
    {
      id: 2,
      title: 'Science Quiz',
      description: 'Explore the world of science!',
      questions: [
        {
          id: 1,
          text: 'What is the hardest natural substance on Earth?',
          options: ['Gold', 'Iron', 'Diamond', 'Platinum'],
          correctAnswer: 2,
        },
        {
          id: 2,
          text: 'What is the main function of white blood cells?',
          options: ['Transport oxygen', 'Fight infections', 'Produce hormones', 'Digest food'],
          correctAnswer: 1,
        },
        {
          id: 3,
          text: 'What is the speed of light?',
          options: ['299,792 kilometers per second', '150,000 kilometers per second', '199,792 kilometers per second', '249,792 kilometers per second'],
          correctAnswer: 0,
        },
        {
          id: 4,
          text: 'What is the chemical formula for water?',
          options: ['CO2', 'H2O', 'NaCl', 'CH4'],
          correctAnswer: 1,
        },
        {
          id: 5,
          text: 'Which planet is known as the Red Planet?',
          options: ['Venus', 'Jupiter', 'Mars', 'Saturn'],
          correctAnswer: 2,
        },
      ],
    },
    {
      id: 3,
      title: 'History Trivia',
      description: 'Journey through time with historical facts!',
      questions: [
        {
          id: 1,
          text: 'In which year did World War II end?',
          options: ['1943', '1945', '1947', '1950'],
          correctAnswer: 1,
        },
        {
          id: 2,
          text: 'Who was the first President of the United States?',
          options: ['Thomas Jefferson', 'John Adams', 'George Washington', 'Benjamin Franklin'],
          correctAnswer: 2,
        },
        {
          id: 3,
          text: 'In which year did the Berlin Wall fall?',
          options: ['1987', '1989', '1991', '1993'],
          correctAnswer: 1,
        },
        {
          id: 4,
          text: 'Who was the first woman to fly solo across the Atlantic?',
          options: ['Amelia Earhart', 'Bessie Coleman', 'Harriet Quimby', 'Jacqueline Cochran'],
          correctAnswer: 0,
        },
        {
          id: 5,
          text: 'Which ancient wonder was located in Alexandria?',
          options: ['Hanging Gardens', 'Colossus of Rhodes', 'Lighthouse', 'Temple of Artemis'],
          correctAnswer: 2,
        },
      ],
    },
    {
      id: 4,
      title: 'Pop Culture Mania',
      description: 'How well do you know modern entertainment?',
      questions: [
        {
          id: 1,
          text: 'Who played Iron Man in the Marvel Cinematic Universe?',
          options: ['Chris Evans', 'Chris Hemsworth', 'Robert Downey Jr.', 'Mark Ruffalo'],
          correctAnswer: 2,
        },
        {
          id: 2,
          text: 'Which TV series features dragons and is based on books by George R.R. Martin?',
          options: ['The Witcher', 'Game of Thrones', 'Lord of the Rings', 'Outlander'],
          correctAnswer: 1,
        },
        {
          id: 3,
          text: 'Who is the best-selling music artist of all time?',
          options: ['The Beatles', 'Elvis Presley', 'Michael Jackson', 'Madonna'],
          correctAnswer: 0,
        },
        {
          id: 4,
          text: 'Which animated movie features a character named Buzz Lightyear?',
          options: ['Shrek', 'Finding Nemo', 'Toy Story', 'The Lion King'],
          correctAnswer: 2,
        },
        {
          id: 5,
          text: 'Who wrote the Harry Potter book series?',
          options: ['J.R.R. Tolkien', 'C.S. Lewis', 'J.K. Rowling', 'Roald Dahl'],
          correctAnswer: 2,
        },
      ],
    },
    {
      id: 5,
      title: 'Geography Challenge',
      description: 'Navigate through world geography!',
      questions: [
        {
          id: 1,
          text: 'What is the largest country by land area?',
          options: ['China', 'United States', 'Canada', 'Russia'],
          correctAnswer: 3,
        },
        {
          id: 2,
          text: 'Which river is the longest in the world?',
          options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
          correctAnswer: 1,
        },
        {
          id: 3,
          text: 'What is the capital of Japan?',
          options: ['Seoul', 'Beijing', 'Tokyo', 'Bangkok'],
          correctAnswer: 2,
        },
        {
          id: 4,
          text: 'Which mountain range runs along the border of France and Spain?',
          options: ['Alps', 'Andes', 'Pyrenees', 'Carpathians'],
          correctAnswer: 2,
        },
        {
          id: 5,
          text: 'What is the largest desert in the world?',
          options: ['Gobi', 'Sahara', 'Arabian', 'Antarctic'],
          correctAnswer: 3,
        },
        
      ],
    },
    {
      id: 6,
      title: 'Tech Savvy',
      description: 'Plug into the world of technology with this cutting-edge quiz! From the latest gadgets and software to the history of computing and future tech trends, test your digital knowledge.',
      image: 'https://images.pexels.com/photos/17767272/pexels-photo-17767272/free-photo-of-man-holding-hands-on-laptop.jpeg?auto=compress&cs=tinysrgb&w=600',
      questions: [
        {
          id: 1,
          text: 'Who is often called the father of modern computer science?',
          options: ['Bill Gates', 'Steve Jobs', 'Alan Turing', 'Mark Zuckerberg'],
          correctAnswer: 2,
        },
        {
          id: 2,
          text: 'What does "HTTP" stand for in a website address?',
          options: ['HyperText Transfer Protocol', 'High Tech Transfer Process', 'Hyperlink and Text Transmission Procedure', 'Host Time Transfer Program'],
          correctAnswer: 0,
        },
        {
          id: 3,
          text: 'Which company developed the first commercially successful GUI (Graphical User Interface)?',
          options: ['Microsoft', 'Apple', 'IBM', 'Xerox'],
          correctAnswer: 3,
        },
        {
          id: 4,
          text: 'What is the name of the worlds first programmable computer?',
          options: ['ENIAC', 'UNIVAC', 'EDVAC', 'Z1'],
          correctAnswer: 3,
        },
        {
          id: 5,
          text: 'Which programming language is often used for artificial intelligence and machine learning?',
          options: ['Java', 'C++', 'Python', 'Ruby'],
          correctAnswer: 2,
        }
      ],
    },
    {
        id: 7,
        title: 'Sports Spectacular',
        description: 'Get in the game with our sports quiz! From iconic athletes and legendary teams to record-breaking performances and major sporting events, this quiz covers a wide range of sports from around the world.',
        image: 'https://images.pexels.com/photos/5095298/pexels-photo-5095298.jpeg?auto=compress&cs=tinysrgb&w=600',
        questions: [
          {
            id: 1,
            text: 'Which country won the FIFA World Cup in 2018?',
            options: ['Brazil', 'Germany', 'France', 'Argentina'],
            correctAnswer: 2,
          },
          {
            id: 2,
            text: 'In which sport would you perform a slam dunk?',
            options: ['Tennis', 'Basketball', 'Volleyball', 'Soccer'],
            correctAnswer: 1,
          },
          {
            id: 3,
            text: 'Who holds the record for the most Olympic gold medals?',
            options: ['Usain Bolt', 'Michael Phelps', 'Simone Biles', 'Nadia Comaneci'],
            correctAnswer: 1,
          },
          {
            id: 4,
            text: 'Which tennis player has won the most Grand Slam singles titles?',
            options: ['Roger Federer', 'Serena Williams', 'Rafael Nadal', 'Novak Djokovic'],
            correctAnswer: 3,
          },
          {
            id: 5,
            text: 'In which city were the 2020 Summer Olympics held (in 2021)?',
            options: ['Paris', 'Tokyo', 'Los Angeles', 'Beijing'],
            correctAnswer: 1,
          },
        ],
      },
      {
        id: 8,
        title: 'Food and Cuisine',
        description: 'Embark on a culinary journey with our food and cuisine quiz! From international dishes and cooking techniques to famous chefs and food history, this quiz will tantalize your taste buds and test your gastronomic knowledge.',
        image: 'https://images.pexels.com/photos/28841111/pexels-photo-28841111/free-photo-of-fresh-caprese-salad-with-mozzarella-and-tomato.jpeg?auto=compress&cs=tinysrgb&w=600',
        questions: [
          {
            id: 1,
            text: 'Which country is credited with inventing pizza?',
            options: ['United States', 'Greece', 'Italy', 'France'],
            correctAnswer: 2,
          },
          {
            id: 2,
            text: 'What is the main ingredient in traditional Japanese miso soup?',
            options: ['Seaweed', 'Tofu', 'Fermented soybean paste', 'Rice'],
            correctAnswer: 2,
          },
          {
            id: 3,
            text: 'Which spice is known as the "King of Spices"?',
            options: ['Cinnamon', 'Turmeric', 'Black Pepper', 'Saffron'],
            correctAnswer: 2,
          },
          {
            id: 4,
            text: 'What is the national dish of Spain?',
            options: ['Paella', 'Tapas', 'Gazpacho', 'Tortilla Española'],
            correctAnswer: 0,
          },
          {
            id: 5,
            text: 'Which chef is famous for his signature dish "Beef Wellington"?',
            options: ['Jamie Oliver', 'Gordon Ramsay', 'Alain Ducasse', 'Wolfgang Puck'],
            correctAnswer: 1,
          },
        ],
      },
  ];
  
  export const getQuizzes = () => {
    return Promise.resolve(mockQuizzes);
  };
  
  export const getQuizDetails = (id) => {
    const quiz = mockQuizDetails.find((q) => q.id === id);
    return quiz ? Promise.resolve(quiz) : Promise.reject(new Error('Quiz not found'));
  };