import { useEffect } from 'react';

export const Snowfall = () => {
  useEffect(() => {
    const container = document.querySelector('.snowfall');

    function createSnowflake() {
      if (!container) return;

      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');

      snowflake.style.left = Math.random() * window.innerWidth + 'px';
      snowflake.style.top = Math.random() * -50 + 'px';

      const size = Math.random() * 5 + 5;
      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;

      const fallDuration = Math.random() * 3 + 5;
      snowflake.style.animationDuration = `${fallDuration}s`;
      snowflake.style.animationDelay = `${Math.random() * 5}s`;

      container.appendChild(snowflake);

      setTimeout(() => {
        container.removeChild(snowflake);
      }, (fallDuration + 1) * 1000);
    }

    const interval = setInterval(createSnowflake, 50);

    return () => clearInterval(interval);
  }, []);

  return <div className="snowfall"></div>;
};
