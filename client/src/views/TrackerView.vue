<template>
    <v-container>
      <v-row class="my-5">
        <v-col
          class="my-5"
          cols="12"
          md="6"
        >
            <h2 class="headline font-weight-bold mb-3">
                Departments
            </h2>
            <v-data-table
                :headers="departmentHeaders"
                :items="departments"
                :items-per-page="10"
                class="elevation-1"
            ></v-data-table>
        </v-col>
        <v-col
          class="my-5"
          cols="12"
          md="6"
        >
            <h2 class="headline font-weight-bold mb-3">
                Roles
            </h2>
            <v-data-table
                :headers="roleHeaders"
                :items="joinedRoles"
                :items-per-page="10"
                class="elevation-1"
            ></v-data-table>
        </v-col>
      </v-row>
      <v-row class="my-5">
        <v-col
          class="my-5"
          cols="12"
        >
            <h2 class="headline font-weight-bold mb-3">
                Employees
            </h2>
            <v-data-table
                :headers="employeeHeaders"
                :items="joinedEmployees"
                :items-per-page="10"
                class="elevation-1"
            ></v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
    export default {
      name: 'HomeView',
      data: () => ({
        departmentHeaders: [
            { text: "id", value: "id" },
            { text: "Department", value: "department_name" }
        ],
        roleHeaders: [
            { text: "id", value: "id" },
            { text: "Job Title", value: "job_title" },
            { text: "Salary", value: "salary" },
            { text: "Department", value: "dept_id" },
            { text: "Is Management", value: "is_management" }
        ],
        employeeHeaders: [
            { text: "id", value: "id" },
            { text: "Employee Name", value: "employee_name" },
            { text: "Job Title", value: "job_title" },
            { text: "Salary", value: "salary" },
            { text: "Department", value: "department" },
            { text: "Manager Name", value: "manager_name" },
        ],
        departments: [
            {
                "id": "6",
                "department_name": "Administration"
            },
            {
                "id": "1",
                "department_name": "Executive"
            },
            {
                "id": "4",
                "department_name": "Finance"
            },
            {
                "id": "7",
                "department_name": "Human Resources"
            },
            {
                "id": "3",
                "department_name": "Info Tech"
            },
            {
                "id": "2",
                "department_name": "Marketing"
            },
            {
                "id": "5",
                "department_name": "Operations"
            },
            {
                "id": "8",
                "department_name": "Public Relations"
            }
        ],
        roles: [
            {
                "id": "1",
                "job_title": "President",
                "salary": "70000",
                "dept_id": "1",
                "is_management": "1"
            },
            {
                "id": "2",
                "job_title": "Vice President",
                "salary": "60000",
                "dept_id": "1",
                "is_management": "1"
            },
            {
                "id": "3",
                "job_title": "Marketing Manager",
                "salary": "50000",
                "dept_id": "2",
                "is_management": "1"
            },
            {
                "id": "4",
                "job_title": "IT Manager",
                "salary": "55000",
                "dept_id": "3",
                "is_management": "1"
            },
            {
                "id": "5",
                "job_title": "Finance Manager",
                "salary": "50000",
                "dept_id": "4",
                "is_management": "1"
            },
            {
                "id": "6",
                "job_title": "Operations Manager",
                "salary": "50000",
                "dept_id": "5",
                "is_management": "1"
            },
            {
                "id": "7",
                "job_title": "Admin Assistant",
                "salary": "35000",
                "dept_id": "6",
                "is_management": "0"
            },
            {
                "id": "8",
                "job_title": "HR Rep",
                "salary": "35000",
                "dept_id": "7",
                "is_management": "0"
            },
            {
                "id": "9",
                "job_title": "PR Rep",
                "salary": "35000",
                "dept_id": "8",
                "is_management": "0"
            },
            {
                "id": "10",
                "job_title": "Marketing Rep",
                "salary": "35000",
                "dept_id": "2",
                "is_management": "0"
            },
            {
                "id": "11",
                "job_title": "Developer",
                "salary": "40000",
                "dept_id": "3",
                "is_management": "0"
            },
            {
                "id": "12",
                "job_title": "Accountant",
                "salary": "35000",
                "dept_id": "4",
                "is_management": "0"
            },
            {
                "id": "13",
                "job_title": "Data Clerk",
                "salary": "31000",
                "dept_id": "5",
                "is_management": "0"
            },
            {
                "id": "14",
                "job_title": "Customer Service",
                "salary": "31000",
                "dept_id": "5",
                "is_management": "0"
            },
            {
                "id": "15",
                "job_title": "Operations Attendant",
                "salary": "31000",
                "dept_id": "5",
                "is_management": "0"
            }
        ],
        employees: [
            {
                "id": "1",
                "first_name": "Steven",
                "last_name": "King",
                "role_id": "1",
                "manager_id": "1"
            },
            {
                "id": "2",
                "first_name": "Lex",
                "last_name": "De Haan",
                "role_id": "2",
                "manager_id": "1"
            },
            {
                "id": "3",
                "first_name": "Neena",
                "last_name": "Kochhar",
                "role_id": "2",
                "manager_id": "1"
            },
            {
                "id": "4",
                "first_name": "Michael",
                "last_name": "Hartstein",
                "role_id": "3",
                "manager_id": "1"
            },
            {
                "id": "5",
                "first_name": "Alexander",
                "last_name": "Hunold",
                "role_id": "4",
                "manager_id": "2"
            },
            {
                "id": "6",
                "first_name": "Nancy",
                "last_name": "Greenberg",
                "role_id": "5",
                "manager_id": "3"
            },
            {
                "id": "7",
                "first_name": "Matthew",
                "last_name": "Weiss",
                "role_id": "6",
                "manager_id": "1"
            },
            {
                "id": "8",
                "first_name": "Adam",
                "last_name": "Fripp",
                "role_id": "6",
                "manager_id": "1"
            },
            {
                "id": "9",
                "first_name": "Payam",
                "last_name": "Kaufling",
                "role_id": "6",
                "manager_id": "1"
            },
            {
                "id": "10",
                "first_name": "Shanta",
                "last_name": "Vollman",
                "role_id": "6",
                "manager_id": "1"
            },
            {
                "id": "11",
                "first_name": "Jennifer",
                "last_name": "Whalen",
                "role_id": "7",
                "manager_id": "3"
            },
            {
                "id": "12",
                "first_name": "Susan",
                "last_name": "Mavris",
                "role_id": "8",
                "manager_id": "3"
            },
            {
                "id": "13",
                "first_name": "Hermann",
                "last_name": "Baer",
                "role_id": "9",
                "manager_id": "3"
            },
            {
                "id": "14",
                "first_name": "Pat",
                "last_name": "Fay",
                "role_id": "10",
                "manager_id": "4"
            },
            {
                "id": "15",
                "first_name": "Bruce",
                "last_name": "Ernst",
                "role_id": "11",
                "manager_id": "5"
            },
            {
                "id": "16",
                "first_name": "David",
                "last_name": "Austin",
                "role_id": "11",
                "manager_id": "5"
            },
            {
                "id": "17",
                "first_name": "Valli",
                "last_name": "Pataballa",
                "role_id": "11",
                "manager_id": "5"
            },
            {
                "id": "18",
                "first_name": "Diana",
                "last_name": "Lorentz",
                "role_id": "11",
                "manager_id": "5"
            },
            {
                "id": "19",
                "first_name": "Daniel",
                "last_name": "Faviet",
                "role_id": "12",
                "manager_id": "6"
            },
            {
                "id": "20",
                "first_name": "John",
                "last_name": "Chen",
                "role_id": "12",
                "manager_id": "6"
            },
            {
                "id": "21",
                "first_name": "Ismael",
                "last_name": "Sciarra",
                "role_id": "12",
                "manager_id": "6"
            },
            {
                "id": "22",
                "first_name": "Jose Manuel",
                "last_name": "Urman",
                "role_id": "12",
                "manager_id": "6"
            },
            {
                "id": "23",
                "first_name": "Luis",
                "last_name": "Popp",
                "role_id": "12",
                "manager_id": "6"
            },
            {
                "id": "24",
                "first_name": "Julia",
                "last_name": "Nayer",
                "role_id": "13",
                "manager_id": "7"
            },
            {
                "id": "25",
                "first_name": "Irene",
                "last_name": "Mikkilineni",
                "role_id": "13",
                "manager_id": "7"
            },
            {
                "id": "26",
                "first_name": "James",
                "last_name": "Landry",
                "role_id": "13",
                "manager_id": "7"
            },
            {
                "id": "27",
                "first_name": "Steven",
                "last_name": "Markle",
                "role_id": "13",
                "manager_id": "7"
            },
            {
                "id": "28",
                "first_name": "Laura",
                "last_name": "Bissot",
                "role_id": "14",
                "manager_id": "8"
            },
            {
                "id": "29",
                "first_name": "Mozhe",
                "last_name": "Atkinson",
                "role_id": "14",
                "manager_id": "8"
            },
            {
                "id": "30",
                "first_name": "James",
                "last_name": "Marlow",
                "role_id": "14",
                "manager_id": "8"
            },
            {
                "id": "31",
                "first_name": "TJ",
                "last_name": "Olson",
                "role_id": "14",
                "manager_id": "8"
            },
            {
                "id": "32",
                "first_name": "Jason",
                "last_name": "Mallin",
                "role_id": "15",
                "manager_id": "9"
            },
            {
                "id": "33",
                "first_name": "Michael",
                "last_name": "Rogers",
                "role_id": "15",
                "manager_id": "9"
            },
            {
                "id": "34",
                "first_name": "Ki",
                "last_name": "Gee",
                "role_id": "15",
                "manager_id": "9"
            },
            {
                "id": "35",
                "first_name": "Hazel",
                "last_name": "Philtanker",
                "role_id": "15",
                "manager_id": "9"
            },
            {
                "id": "36",
                "first_name": "Renske",
                "last_name": "Ladwig",
                "role_id": "15",
                "manager_id": "10"
            },
            {
                "id": "37",
                "first_name": "Stephen",
                "last_name": "Stiles",
                "role_id": "15",
                "manager_id": "10"
            },
            {
                "id": "38",
                "first_name": "John",
                "last_name": "Seo",
                "role_id": "15",
                "manager_id": "10"
            },
            {
                "id": "39",
                "first_name": "Joshua",
                "last_name": "Patel",
                "role_id": "15",
                "manager_id": "10"
            }
        ],
        joinedRoles: [],
        joinedEmployees: [],
      }),
      methods: {
        isManagement(bool) {
            return bool === "1" ? "yes" : "no"
        },
        formatSalary(salary) {
            const dollarUSLocale = Intl.NumberFormat('en-US', {
                minimumFractionDigits: 2,
            });
            return `$${dollarUSLocale.format(salary)}`
        },
        findDepartment(deptId) {
            let department = this.departments.find(dept => dept.id === deptId)
            return department.department_name
        },
        findManager(mgrId) {
            let manager = this.employees.find(employee => employee.id === mgrId)
            return `${manager.last_name}, ${manager.first_name}`
        },
        findRole(roleId) {
            let position = this.roles.find(role => role.id === roleId)
            return position
        },
        joinRoleTables(roles) {
            roles.forEach(role => {
                this.joinedRoles.push({
                    "id": role.id,
                    "job_title": role.job_title,
                    "salary": this.formatSalary(role.salary),
                    "dept_id": this.findDepartment(role.dept_id),
                    "is_management": this.isManagement(role.is_management)
                })
            })
        },
        joinEmployeeTables(employees) {
            employees.forEach(employee => {
                this.joinedEmployees.push({
                    "id": employee.id,
                    "employee_name": `${employee.last_name}, ${employee.first_name}`,
                    "job_title": this.findRole(employee.role_id).job_title,
                    "salary": this.formatSalary(this.findRole(employee.role_id).salary),
                    "department": this.findDepartment(this.findRole(employee.role_id).dept_id),
                    "manager_name": this.findManager(employee.manager_id)
                })
            })
        }
      },
      async created() {
        this.joinRoleTables(this.roles)
        this.joinEmployeeTables(this.employees)
      }
    }
  </script>
  