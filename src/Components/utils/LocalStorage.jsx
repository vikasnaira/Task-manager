import { PrinterIcon } from "lucide-react";

// ✅ Sample Default Data
const sampleData = {
  users: [
    {
      id: 1,
      name: "vikas",
      position:"designer",
      email: "admin@taskmanager.com",
      password: "1234",
      role: "admin",
    },
    {
      id: 2,
      name: "sahil",
      position:"frontend",
      email: "alice@company.com",
      password: "1234",
      role: "client",
       tasks: [
          {
            title :"edit the frontpage",
            pending:"true",
            complete : "true",
          }
      ]
    },
    {
      id: 3,
      name: "sagar",
      position:"editior",
      email: "bob@company.com",
      password: "1234",
      role: "client",
     tasks: [
          {
            title :"edit the frontpage",
            pending:"true",
            complete : "true",
          }
      ]
    },    
    {
      id: 4,
      name: "samar",
      position:"script writer",
      email: "alice@comp.com",
      password: "1234",
      role: "client",
      tasks: [
          {
            title :"edit the frontpage",
            pending:"true",
            complete : "true",
          }
      ]
    }, {
      id: 5,
      name: "sonam",
      position:"backend",
      email: "ali@company.com",
      password: "1234",
      role: "client",
       tasks: [
          {
            title :"edit the frontpage",
            pending:"true",
            complete : "true",
          }
      ]
    }, {
      id: 6,
      name: "sahil",
      position:"editior",
      email: "ice@company.com",
      password: "1234",
      role: "client",
     tasks: [
          {
            title :"edit the frontpage",
            pending:true,
            complete :true,
          }
      ]
    }, {
      id: 7,
      name: "raghav",
      position:"helper",
      email: "alice@coany.com",
      password: "1234",
      role: "client",
      tasks: [
          {
            title :"edit the frontpage",
            pending:"true",
            complete:false,
          }
      ]
    },
  ]
};
export const setLocalStorage = () => {
  const existing = localStorage.getItem("taskManagerData");
  if (!existing) {
    localStorage.setItem("taskManagerData", JSON.stringify(sampleData));
  }
};

export const getLocalStorage = () => {
  const data = localStorage.getItem("taskManagerData");
  return data ? JSON.parse(data) : null;
};
