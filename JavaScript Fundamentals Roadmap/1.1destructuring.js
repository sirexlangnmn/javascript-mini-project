function UserProfile(props) {
    // 🔍 Destructuring props
    const {
      user: {
        name,
        age,
        contact: { email, phone },
        hobbies = [],
      },
      isOnline,
    } = props;
  
    // 🔍 Destructuring hobbies (array)
    const [firstHobby, secondHobby, ...otherHobbies] = hobbies;
  
    // 🧾 Simulated JSX output (plain string here)
    return `
      Name: ${name}
      Age: ${age}
      Email: ${email}
      Phone: ${phone}
      Online: ${isOnline ? "Yes" : "No"}
  
      Favorite Hobbies:
      - ${firstHobby || "None"}
      - ${secondHobby || "None"}
      - Others: ${otherHobbies.join(", ") || "None"}
    `;
  }
  
  
  const userData = {
    user: {
      name: "Raiven",
      age: 27,
      contact: {
        email: "raiven@example.com",
        phone: "0917-123-4567",
      },
      hobbies: ["Piano", "Anime", "Coding", "Outdoors"],
    },
    isOnline: true,
  };
  
  
  console.log(UserProfile(userData));
  