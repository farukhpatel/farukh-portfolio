interface NavbarOptions {
  name: string;
}

//common padding
// px-6 md:px-12 lg:px-20

export const navbarOptions: NavbarOptions[] = [
  { name: "Home" },
  { name: "About" },
  { name: "Projects" },
  { name: "Contact" },
];

export const tabOptions = ["about", "skills", "projects", "contact"];

export const colors = {
  background: "#000000",
  foreground: "#ffffff",
  highlight: "#a60a76",
  testColor: "#FFF",
};

export const mailToHref = "mailto:farukhpatel0804@gmail.com";
