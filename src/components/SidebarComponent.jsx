import RightIcon from "../assets/RightIcon.png";
import DownIcon from "../assets/DownIcon.png";
import "../styles/SaidebarComponent.css";
import { useState } from "react";

export default function SidebarComponent() {
  const [openIndex, setOpenIndex] = useState(null);

  const categories = [
    { name: "Woman’s Fashion", sub: ["Dress", "Shoes", "Bags"] },
    { name: "Men’s Fashion", sub: ["Shirts", "Pants", "Watches"] },
    { name: "Kid's Fashion" },
    { name: "Baby’s & Toys" },
    { name: "Health & Beauty" },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <aside className="sidebar" aria-label="Sidebar navigation">
        <ul>
          {categories.map((item, index) => (
            <li key={index}>
              <div className="sidebar-item" onClick={() => handleToggle(index)}>
                {item.name}

                {item.sub && (
                  <span className="arrow">
                    {openIndex === index ? <img src={DownIcon} /> : <img src={RightIcon} />}
                  </span>
                )}
              </div>

              {openIndex === index && item.sub && (
                <ul className="submenu">
                  {item.sub.map((subItem, i) => (
                    <li key={i} className="submenu-item">
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
