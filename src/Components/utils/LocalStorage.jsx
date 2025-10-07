import { PrinterIcon } from "lucide-react";

// ✅ Sample Default Data
const sampleData = {
  users: [
    {
      id: 1,
      name: "vikas",
      email: "admin@taskmanager.com",
      password: "1234",
      role: "admin",
    },
    {
      id: 2,
      name: "sahil",
      email: "alice@company.com",
      password: "1234",
      role: "client",
      tasks: [

      ]
    },
    {
      id: 3,
      name: "sagar",
      email: "bob@company.com",
      password: "1234",
      role: "client",
      tasks: [
       
      ]
    },
    {
      id: 4,
      name: "samar",
      email: "alice@comp.com",
      password: "1234",
      role: "client",
      tasks: [
        
      ]
    }, {
      id: 5,
      name: "sonam",
      email: "ali@company.com",
      password: "1234",
      role: "client",
      tasks: [
        
      ]
    }, {
      id: 6,
      name: "sahil",
      email: "ice@company.com",
      password: "1234",
      role: "client",
      tasks: [
         
      ]
    }, {
      id: 7,
      name: "sahil",
      email: "alice@coany.com",
      password: "1234",
      role: "client",
      tasks: [
      
      ]
    },
  ]
};

// ✅ Set data only once
export const setLocalStorage = () => {
  const existing = localStorage.getItem("taskManagerData");
  if (!existing) {
    localStorage.setItem("taskManagerData", JSON.stringify(sampleData));
  }
};

// ✅ Get stored data safely
export const getLocalStorage = () => {
  const data = localStorage.getItem("taskManagerData");
  return data ? JSON.parse(data) : null;
};
