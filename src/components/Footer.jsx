import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div>
        {/*Add the functionality to open the link in a new tab */}
        <a href="https://www.facebook.com/recodedofficial">
          <img
            src="https://drive.google.com/uc?id=1-yaPy5DZhbYsLxUP8YWjvlpIZdbzDXxl"
            alt=""
            class="socialIcon"
          />
        </a>
        <a href="https://www.instagram.com/recodedofficial/">
          <img
            src="https://drive.google.com/uc?id=18b8F06ADRb6oGVuWosRYnPPOImNt6iCI"
            alt=""
            class="socialIcon"
          />
        </a>
        <a href="https://twitter.com/recodedofficial">
          <img
            src="https://drive.google.com/uc?id=1vVXb5gSBxgwy1idaoPA6rDhc9leviMjx"
            alt=""
            class="socialIcon"
          />
        </a>
        <a href="https://www.linkedin.com/company/re-coded/">
          <img
            src="https://drive.google.com/uc?id=1Rzvd49x5LKeb8yVEGgGfuNBKqN9LXpWE"
            alt=""
            class="socialIcon"
          />
        </a>
      </div>
      <div class="align-right">
        <span>
          (&copy;) 2020. Re:Coded is a 501(&copy;)(3) non-profit corporation.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
