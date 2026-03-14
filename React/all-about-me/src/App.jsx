import pic from "./assets/angelina.jpeg";
import "./App.css";

function App() {
  return (
    <>
      <h1 id="title">More about me ✨</h1>

      <div className="about">
        <p style={{ color: "deeppink" }}>
          Hi! I'm Angelina. I grew up in Manalapan, New Jersey. I love running,
          reading, playing guitar, and singing. I recently ran a marathon, which
          was one of the hardest but most rewarding things I've ever done. I'm
          also really interested in technology and enjoy building projects and
          learning new things. In my free time you can usually find me with a
          book, going for a run, practicing guitar, or hanging out with my cat.
          You can also check out my{" "}
          <a
            href="https://github.com/angelinaa-rodriguez"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </p>

        <img src={pic} alt="This is me!" />
      </div>
    </>
  );
}

export default App;
