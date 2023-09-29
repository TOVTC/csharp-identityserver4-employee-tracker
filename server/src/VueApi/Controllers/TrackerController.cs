using VueApi.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace VueApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrackerController : ControllerBase
    {
        // GET: api/tracker/departments
        [HttpGet("departments")]
        public IEnumerable<Department> GetDepartments()
        {
            return new Department[] {
                new Department
                {
                    Id = 6,
                    DepartmentName = "Administration"
                },
                new Department
                {
                    Id = 1,
                    DepartmentName = "Executive"
                },
                new Department
                {
                    Id = 4,
                    DepartmentName = "Finance"
                },
                new Department
                {
                    Id = 7,
                    DepartmentName = "Human Resources"
                },
                new Department
                {
                    Id = 3,
                    DepartmentName = "Info Tech"
                },
                new Department
                {
                    Id = 2,
                    DepartmentName = "Marketing"
                },
                new Department
                {
                    Id = 5,
                    DepartmentName = "Operations"
                },
                new Department
                {
                    Id = 8,
                    DepartmentName = "Public Relations"
                }
            };
        }

        // GET: api/tracker/employees
        [HttpGet("roles")]
        public IEnumerable<Role> GetRoles()
        {
            return new Role[] {
                new Role {
                    Id = 1,
                    JobTitle = "President",
                    Salary = 70000,
                    DeptId = 1,
                    IsManagement = 1
                },
                new Role {
                    Id = 2,
                    JobTitle = "Vice President",
                    Salary = 60000,
                    DeptId = 1,
                    IsManagement = 1
                },
                new Role {
                    Id = 3,
                    JobTitle = "Marketing Manager",
                    Salary = 50000,
                    DeptId = 2,
                    IsManagement = 1
                },
                new Role {
                    Id = 4,
                    JobTitle = "IT Manager",
                    Salary = 55000,
                    DeptId = 3,
                    IsManagement = 1
                },
                new Role {
                    Id = 5,
                    JobTitle = "Finance Manager",
                    Salary = 50000,
                    DeptId = 4,
                    IsManagement = 1
                },
                new Role {
                    Id = 6,
                    JobTitle = "Operations Manager",
                    Salary = 50000,
                    DeptId = 5,
                    IsManagement = 1
                },
                new Role {
                    Id = 7,
                    JobTitle = "Admin Assistant",
                    Salary = 35000,
                    DeptId = 6,
                    IsManagement = 0
                },
                new Role {
                    Id = 8,
                    JobTitle = "HR Rep",
                    Salary = 35000,
                    DeptId = 7,
                    IsManagement = 0
                },
                new Role {
                    Id = 9,
                    JobTitle = "PR Rep",
                    Salary = 35000,
                    DeptId = 8,
                    IsManagement = 0
                },
                new Role {
                    Id = 10,
                    JobTitle = "Marketing Rep",
                    Salary = 35000,
                    DeptId = 2,
                    IsManagement = 0
                },
                new Role {
                    Id = 11,
                    JobTitle = "Developer",
                    Salary = 40000,
                    DeptId = 3,
                    IsManagement = 0
                },
                new Role {
                    Id = 12,
                    JobTitle = "Accountant",
                    Salary = 35000,
                    DeptId = 4,
                    IsManagement = 0
                },
                new Role {
                    Id = 13,
                    JobTitle = "Data Clerk",
                    Salary = 31000,
                    DeptId = 5,
                    IsManagement = 0
                },
                new Role {
                    Id = 14,
                    JobTitle = "Customer Service",
                    Salary = 31000,
                    DeptId = 5,
                    IsManagement = 0
                },
                new Role {
                    Id = 15,
                    JobTitle = "Operations Attendant",
                    Salary = 31000,
                    DeptId = 5,
                    IsManagement = 0
                }
            };
        }

        // GET: api/tracker/employees
        [HttpGet("employees")]
        public IEnumerable<Employee> GetEmployees()
        {
            return new Employee[] {
                new Employee {
                    Id = 1,
                    FirstName = "Steven",
                    LastName = "King",
                    RoleId = 1,
                    ManagerId = 1
                },
                new Employee {
                    Id = 2,
                    FirstName = "Lex",
                    LastName = "De Haan",
                    RoleId = 2,
                    ManagerId = 1
                },
                new Employee {
                    Id = 3,
                    FirstName = "Neena",
                    LastName = "Kochhar",
                    RoleId = 2,
                    ManagerId = 1
                },
                new Employee {
                    Id = 4,
                    FirstName = "Michael",
                    LastName = "Hartstein",
                    RoleId = 3,
                    ManagerId = 1
                },
                new Employee {
                    Id = 5,
                    FirstName = "Alexander",
                    LastName = "Hunold",
                    RoleId = 4,
                    ManagerId = 2
                },
                new Employee {
                    Id = 6,
                    FirstName = "Nancy",
                    LastName = "Greenberg",
                    RoleId = 5,
                    ManagerId = 3
                },
                new Employee {
                    Id = 7,
                    FirstName = "Matthew",
                    LastName = "Weiss",
                    RoleId = 6,
                    ManagerId = 1
                },
                new Employee {
                    Id = 8,
                    FirstName = "Adam",
                    LastName = "Fripp",
                    RoleId = 6,
                    ManagerId = 1
                },
                new Employee {
                    Id = 9,
                    FirstName = "Payam",
                    LastName = "Kaufling",
                    RoleId = 6,
                    ManagerId = 1
                },
                new Employee {
                    Id = 10,
                    FirstName = "Shanta",
                    LastName = "Vollman",
                    RoleId = 6,
                    ManagerId = 1
                },
                new Employee {
                    Id = 11,
                    FirstName = "Jennifer",
                    LastName = "Whalen",
                    RoleId = 7,
                    ManagerId = 3
                },
                new Employee {
                    Id = 12,
                    FirstName = "Susan",
                    LastName = "Mavris",
                    RoleId = 8,
                    ManagerId = 3
                },
                new Employee {
                    Id = 13,
                    FirstName = "Hermann",
                    LastName = "Baer",
                    RoleId = 9,
                    ManagerId = 3
                },
                new Employee {
                    Id = 14,
                    FirstName = "Pat",
                    LastName = "Fay",
                    RoleId = 1,
                    ManagerId = 4
                },
                new Employee {
                    Id = 15,
                    FirstName = "Bruce",
                    LastName = "Ernst",
                    RoleId = 1,
                    ManagerId = 5
                },
                new Employee {
                    Id = 16,
                    FirstName = "David",
                    LastName = "Austin",
                    RoleId = 1,
                    ManagerId = 5
                },
                new Employee {
                    Id = 17,
                    FirstName = "Valli",
                    LastName = "Pataballa",
                    RoleId = 1,
                    ManagerId = 5
                },
                new Employee {
                    Id = 18,
                    FirstName = "Diana",
                    LastName = "Lorentz",
                    RoleId = 1,
                    ManagerId = 5
                },
                new Employee {
                    Id = 19,
                    FirstName = "Daniel",
                    LastName = "Faviet",
                    RoleId = 1,
                    ManagerId = 6
                },
                new Employee {
                    Id = 20,
                    FirstName = "John",
                    LastName = "Chen",
                    RoleId = 1,
                    ManagerId = 6
                },
                new Employee {
                    Id = 21,
                    FirstName = "Ismael",
                    LastName = "Sciarra",
                    RoleId = 1,
                    ManagerId = 6
                },
                new Employee {
                    Id = 22,
                    FirstName = "Jose Manuel",
                    LastName = "Urman",
                    RoleId = 1,
                    ManagerId = 6
                },
                new Employee {
                    Id = 23,
                    FirstName = "Luis",
                    LastName = "Popp",
                    RoleId = 1,
                    ManagerId = 6
                },
                new Employee {
                    Id = 24,
                    FirstName = "Julia",
                    LastName = "Nayer",
                    RoleId = 1,
                    ManagerId = 7
                },
                new Employee {
                    Id = 25,
                    FirstName = "Irene",
                    LastName = "Mikkilineni",
                    RoleId = 1,
                    ManagerId = 7
                },
                new Employee {
                    Id = 26,
                    FirstName = "James",
                    LastName = "Landry",
                    RoleId = 1,
                    ManagerId = 7
                },
                new Employee {
                    Id = 27,
                    FirstName = "Steven",
                    LastName = "Markle",
                    RoleId = 1,
                    ManagerId = 7
                },
                new Employee {
                    Id = 28,
                    FirstName = "Laura",
                    LastName = "Bissot",
                    RoleId = 1,
                    ManagerId = 8
                },
                new Employee {
                    Id = 29,
                    FirstName = "Mozhe",
                    LastName = "Atkinson",
                    RoleId = 1,
                    ManagerId = 8
                },
                new Employee {
                    Id = 30,
                    FirstName = "James",
                    LastName = "Marlow",
                    RoleId = 1,
                    ManagerId = 8
                },
                new Employee {
                    Id = 31,
                    FirstName = "TJ",
                    LastName = "Olson",
                    RoleId = 1,
                    ManagerId = 8
                },
                new Employee {
                    Id = 32,
                    FirstName = "Jason",
                    LastName = "Mallin",
                    RoleId = 1,
                    ManagerId = 9
                },
                new Employee {
                    Id = 33,
                    FirstName = "Michael",
                    LastName = "Rogers",
                    RoleId = 1,
                    ManagerId = 9
                },
                new Employee {
                    Id = 34,
                    FirstName = "Ki",
                    LastName = "Gee",
                    RoleId = 1,
                    ManagerId = 9
                },
                new Employee {
                    Id = 35,
                    FirstName = "Hazel",
                    LastName = "Philtanker",
                    RoleId = 1,
                    ManagerId = 9
                },
                new Employee {
                    Id = 36,
                    FirstName = "Renske",
                    LastName = "Ladwig",
                    RoleId = 1,
                    ManagerId = 1
                },
                new Employee {
                    Id = 37,
                    FirstName = "Stephen",
                    LastName = "Stiles",
                    RoleId = 1,
                    ManagerId = 1
                },
                new Employee {
                    Id = 38,
                    FirstName = "John",
                    LastName = "Seo",
                    RoleId = 1,
                    ManagerId = 1
                },
                new Employee {
                    Id = 39,
                    FirstName = "Joshua",
                    LastName = "Patel",
                    RoleId = 1,
                    ManagerId = 1
                }
            };
        }
    }
}
