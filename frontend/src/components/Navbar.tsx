import { Link } from "react-router-dom";

const Navbar = () => {
  const linkItems = [
    { id: 1, link: "/signin", text: "Signin" },
    { id: 2, link: "/signup", text: "Signup" },
  ];

  return (
    <div>
      <ul>
        {linkItems.map((item) => (
          <li key={item.id}>
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
