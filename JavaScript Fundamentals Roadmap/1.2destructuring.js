const apiResponse = {
  status: "success",
  data: {
    user: {
      id: 101,
      name: "Raiven",
      age: 27,
      contact: {
        email: "raiven@dev.com",
        phone: "0917-RAIVEN"
      },
      preferences: {
        theme: "dark",
        notifications: {
          email: true,
          sms: false
        }
      },
      hobbies: ["coding", "piano", "anime"]
    },
    timestamp: "2025-05-07T10:30:00Z"
  }
};



const {
  data: {
    user: {
      name,
      contact: { email, phone },
      preferences: {
        theme,
        notifications: { email: emailNotifs }
      },
      hobbies = []
    },
    timestamp
  }
} = apiResponse;

const [firstHobby, secondHobby, ...otherHobbies] = hobbies;

console.log(`Name: ${name}`);
console.log(`Email: ${email}`);
console.log(`Phone: ${phone}`);
console.log(`Theme: ${theme}`);
console.log(`Email Notifications: ${emailNotifs}`);
console.log(`Hobbies:`);
console.log(`  - ${firstHobby || "N/A"}`);
console.log(`  - ${secondHobby || "N/A"}`);
console.log(`  - Others: ${otherHobbies.length ? otherHobbies.join(", ") : "None"}`);
console.log(`Fetched at: ${timestamp}`);
