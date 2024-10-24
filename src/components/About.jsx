import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-purple-600">About QuizMaster</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <p className="text-lg mb-4">
          Welcome to QuizMaster, your go-to platform for engaging and educational quizzes! We're passionate about making learning fun and accessible to everyone.
        </p>
        <p className="text-lg mb-4">
          Our mission is to provide a diverse range of quizzes that challenge your knowledge, spark your curiosity, and help you discover new facts about the world around us.
        </p>
        <p className="text-lg mb-4">
          Whether you're a trivia enthusiast, a student looking to test your knowledge, or someone who simply enjoys learning new things, QuizMaster has something for you.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">Our Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Wide variety of quiz topics</li>
            <li>Engaging and interactive quiz format</li>
            <li>Instant results and explanations</li>
            <li>Track your progress over time</li>
            <li>Compete with friends and other users</li>
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">Our Team</h2>
          <p className="mb-4">
            QuizMaster is brought to you by a team of passionate educators, trivia enthusiasts, and tech experts. We're committed to creating the best possible quiz experience for our users.
          </p>
          <p>
            Have ideas for new quizzes or features? We'd love to hear from you! Check out our Contact page to get in touch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;