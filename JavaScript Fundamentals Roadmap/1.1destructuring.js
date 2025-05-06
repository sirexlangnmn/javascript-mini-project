// ============================
// SAMPLE 1 : Nested Object
// ============================

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



function UserProfile1(props) {
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




console.log(`UserProfile1(userData) ==>>`, UserProfile1(userData));





const UserProfile2 = ({ user: { name, age, contact: { email, phone }, hobbies = [] }, isOnline }) => {
    const [firstHobby, secondHobby, ...otherHobbies] = hobbies;

    return (
        `<div>
            <h2>${name} (${isOnline ? "Online" : "Offline"})</h2>
            <p>Age: ${age}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>

            <h3>Hobbies</h3>
            <ul>
                <li>${firstHobby || "N/A"}</li>
                <li>${secondHobby || "N/A"}</li>
                <li>Others: ${otherHobbies.length ? otherHobbies.join(", ") : "None"}</li>
            </ul>
        </div>`
    );
};




console.log(`UserProfile2(userData) ==>>`, UserProfile2(userData));



// ============================
// SAMPLE 2 : Nested Object
// ============================

const response = {
    user: {
      id: 101,
      profile: {
        name: "Raiven",
        email: "raiven@dev.com"
      }
    }
  };
  
  const { user: { profile: { name, email } } } = response;
  
  console.log(`sample2 name ==> `, name);  // ?
  console.log(`sample2 email ==> `, email); // ?
  



// ============================
// SAMPLE 3 : Nested Object
// ============================
const props = {
    id: 10,
    data: {
      user: {
        nickName: "Rex",
        roles: ["admin", "editor", "moderator"]
      },
      isActive: true
    }
  };
  
  const {
    data: {
      user: { nickName, roles: [primaryRole, , thirdRole] },
      isActive
    }
  } = props;
  
  console.log(`sample3 nickName ==> `, nickName);    // ?
  console.log(`sample3 primaryRole ==> `, primaryRole); // ?
  console.log(`sample3 thirdRole ==> `, thirdRole);   // ?
  console.log(`sample2 isActive ==> `, isActive);    // ?
  