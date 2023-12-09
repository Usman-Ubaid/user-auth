import { Link } from "react-router-dom";

const Navbar = () => {
  const linkItems = [
    { id: 1, link: "/signin", text: "Signin" },
    { id: 2, link: "/signup", text: "Signup" },
  ];

  return (
    <div>
      <ul>
        <li>
          {linkItems.map((item) => (
            <Link key={item.id} to={item.link}>
              {item.text}
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
