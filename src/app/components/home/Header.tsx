import "../../styles/header.scss";


export const Header: React.FC<{}> = () => {
  return (
    <header>
      <h1>Introducing TakeCare AI</h1>
      <h2>It’s time to have the control on your health</h2>
      <div className="header-input">
        <input type="text" placeholder="Email address..." />
        <button>Join our beta</button>
      </div>
    </header>
  );
};
