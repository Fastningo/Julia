import "./love.css";
import loveMonkey from '../../assets/love-monkey.gif'; 

const Love = () => {
  return (
    <div className="love-container">
      <div className="love-title">
        <h1>Julia,</h1>
      </div>
      <div className="love-text">
        <p>
          Happy stinking birthday. I am so blessed to have someone as amazing as
          you in my life. You deserve the whole world and more, but for now this
          is all I can give you. You'll say it's more than enough, and that's
          because it is for you, because you are the best kind of person. You
          light up a person's day with your laughter, and you lift people up
          when they cry. You are all the good things in my life, and the lives
          of many others. I can't wait to see what things you'll accomplish this
          year and what dreams you're gonna make into reality. Thank you for
          everything and everything you do to me. No website can describe how
          much I love you, but I hope this one can get pretty close. Infinite times over, 
        </p>
      </div>
      <div className="love-footer">
        <h1>I Love You!</h1>
      </div>
      <div className="love-image">
        <img src={loveMonkey} alt="Love Monkey" />
      </div>
    </div>
  );
};

export default Love;
