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
                :items="budgetedDepartments"
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
//   import TrackerService from '@/services/TrackerService'
    export default {
      name: 'HomeView',
      data: () => ({
        departmentHeaders: [
            { text: "id", value: "id" },
            { text: "Department", value: "departmentName" },
            { text: "Budget", value: "budget"}
        ],
        roleHeaders: [
            { text: "id", value: "id" },
            { text: "Job Title", value: "jobTitle" },
            { text: "Salary", value: "salary" },
            { text: "Department", value: "deptId" },
            { text: "Is Management", value: "isManagement" }
        ],
        employeeHeaders: [
            { text: "id", value: "id" },
            { text: "Employee Name", value: "employeeName" },
            { text: "Job Title", value: "jobTitle" },
            { text: "Salary", value: "salary" },
            { text: "Department", value: "department" },
            { text: "Manager Name", value: "managerName" },
        ],
        departments: [
            {
                "id": "6",
                "departmentName": "Administration"
            },
            {
                "id": "1",
                "departmentName": "Executive"
            },
            {
                "id": "4",
                "departmentName": "Finance"
            },
            {
                "id": "7",
                "departmentName": "Human Resources"
            },
            {
                "id": "3",
                "departmentName": "Info Tech"
            },
            {
                "id": "2",
                "departmentName": "Marketing"
            },
            {
                "id": "5",
                "departmentName": "Operations"
            },
            {
                "id": "8",
                "departmentName": "Public Relations"
            }
        ],
        roles: [
            {
                "id": "1",
                "jobTitle": "President",
                "salary": "70000",
                "deptId": "1",
                "isManagement": "1"
            },
            {
                "id": "2",
                "jobTitle": "Vice President",
                "salary": "60000",
                "deptId": "1",
                "isManagement": "1"
            },
            {
                "id": "3",
                "jobTitle": "Marketing Manager",
                "salary": "50000",
                "deptId": "2",
                "isManagement": "1"
            },
            {
                "id": "4",
                "jobTitle": "IT Manager",
                "salary": "55000",
                "deptId": "3",
                "isManagement": "1"
            },
            {
                "id": "5",
                "jobTitle": "Finance Manager",
                "salary": "50000",
                "deptId": "4",
                "isManagement": "1"
            },
            {
                "id": "6",
                "jobTitle": "Operations Manager",
                "salary": "50000",
                "deptId": "5",
                "isManagement": "1"
            },
            {
                "id": "7",
                "jobTitle": "Admin Assistant",
                "salary": "35000",
                "deptId": "6",
                "isManagement": "0"
            },
            {
                "id": "8",
                "jobTitle": "HR Rep",
                "salary": "35000",
                "deptId": "7",
                "isManagement": "0"
            },
            {
                "id": "9",
                "jobTitle": "PR Rep",
                "salary": "35000",
                "deptId": "8",
                "isManagement": "0"
            },
            {
                "id": "10",
                "jobTitle": "Marketing Rep",
                "salary": "35000",
                "deptId": "2",
                "isManagement": "0"
            },
            {
                "id": "11",
                "jobTitle": "Developer",
                "salary": "40000",
                "deptId": "3",
                "isManagement": "0"
            },
            {
                "id": "12",
                "jobTitle": "Accountant",
                "salary": "35000",
                "deptId": "4",
                "isManagement": "0"
            },
            {
                "id": "13",
                "jobTitle": "Data Clerk",
                "salary": "31000",
                "deptId": "5",
                "isManagement": "0"
            },
            {
                "id": "14",
                "jobTitle": "Customer Service",
                "salary": "31000",
                "deptId": "5",
                "isManagement": "0"
            },
            {
                "id": "15",
                "jobTitle": "Operations Attendant",
                "salary": "31000",
                "deptId": "5",
                "isManagement": "0"
            }
        ],
        employees: [
            {
                "id": "1",
                "firstName": "Steven",
                "lastName": "King",
                "roleId": "1",
                "managerId": "1"
            },
            {
                "id": "2",
                "firstName": "Lex",
                "lastName": "De Haan",
                "roleId": "2",
                "managerId": "1"
            },
            {
                "id": "3",
                "firstName": "Neena",
                "lastName": "Kochhar",
                "roleId": "2",
                "managerId": "1"
            },
            {
                "id": "4",
                "firstName": "Michael",
                "lastName": "Hartstein",
                "roleId": "3",
                "managerId": "1"
            },
            {
                "id": "5",
                "firstName": "Alexander",
                "lastName": "Hunold",
                "roleId": "4",
                "managerId": "2"
            },
            {
                "id": "6",
                "firstName": "Nancy",
                "lastName": "Greenberg",
                "roleId": "5",
                "managerId": "3"
            },
            {
                "id": "7",
                "firstName": "Matthew",
                "lastName": "Weiss",
                "roleId": "6",
                "managerId": "1"
            },
            {
                "id": "8",
                "firstName": "Adam",
                "lastName": "Fripp",
                "roleId": "6",
                "managerId": "1"
            },
            {
                "id": "9",
                "firstName": "Payam",
                "lastName": "Kaufling",
                "roleId": "6",
                "managerId": "1"
            },
            {
                "id": "10",
                "firstName": "Shanta",
                "lastName": "Vollman",
                "roleId": "6",
                "managerId": "1"
            },
            {
                "id": "11",
                "firstName": "Jennifer",
                "lastName": "Whalen",
                "roleId": "7",
                "managerId": "3"
            },
            {
                "id": "12",
                "firstName": "Susan",
                "lastName": "Mavris",
                "roleId": "8",
                "managerId": "3"
            },
            {
                "id": "13",
                "firstName": "Hermann",
                "lastName": "Baer",
                "roleId": "9",
                "managerId": "3"
            },
            {
                "id": "14",
                "firstName": "Pat",
                "lastName": "Fay",
                "roleId": "10",
                "managerId": "4"
            },
            {
                "id": "15",
                "firstName": "Bruce",
                "lastName": "Ernst",
                "roleId": "11",
                "managerId": "5"
            },
            {
                "id": "16",
                "firstName": "David",
                "lastName": "Austin",
                "roleId": "11",
                "managerId": "5"
            },
            {
                "id": "17",
                "firstName": "Valli",
                "lastName": "Pataballa",
                "roleId": "11",
                "managerId": "5"
            },
            {
                "id": "18",
                "firstName": "Diana",
                "lastName": "Lorentz",
                "roleId": "11",
                "managerId": "5"
            },
            {
                "id": "19",
                "firstName": "Daniel",
                "lastName": "Faviet",
                "roleId": "12",
                "managerId": "6"
            },
            {
                "id": "20",
                "firstName": "John",
                "lastName": "Chen",
                "roleId": "12",
                "managerId": "6"
            },
            {
                "id": "21",
                "firstName": "Ismael",
                "lastName": "Sciarra",
                "roleId": "12",
                "managerId": "6"
            },
            {
                "id": "22",
                "firstName": "Jose Manuel",
                "lastName": "Urman",
                "roleId": "12",
                "managerId": "6"
            },
            {
                "id": "23",
                "firstName": "Luis",
                "lastName": "Popp",
                "roleId": "12",
                "managerId": "6"
            },
            {
                "id": "24",
                "firstName": "Julia",
                "lastName": "Nayer",
                "roleId": "13",
                "managerId": "7"
            },
            {
                "id": "25",
                "firstName": "Irene",
                "lastName": "Mikkilineni",
                "roleId": "13",
                "managerId": "7"
            },
            {
                "id": "26",
                "firstName": "James",
                "lastName": "Landry",
                "roleId": "13",
                "managerId": "7"
            },
            {
                "id": "27",
                "firstName": "Steven",
                "lastName": "Markle",
                "roleId": "13",
                "managerId": "7"
            },
            {
                "id": "28",
                "firstName": "Laura",
                "lastName": "Bissot",
                "roleId": "14",
                "managerId": "8"
            },
            {
                "id": "29",
                "firstName": "Mozhe",
                "lastName": "Atkinson",
                "roleId": "14",
                "managerId": "8"
            },
            {
                "id": "30",
                "firstName": "James",
                "lastName": "Marlow",
                "roleId": "14",
                "managerId": "8"
            },
            {
                "id": "31",
                "firstName": "TJ",
                "lastName": "Olson",
                "roleId": "14",
                "managerId": "8"
            },
            {
                "id": "32",
                "firstName": "Jason",
                "lastName": "Mallin",
                "roleId": "15",
                "managerId": "9"
            },
            {
                "id": "33",
                "firstName": "Michael",
                "lastName": "Rogers",
                "roleId": "15",
                "managerId": "9"
            },
            {
                "id": "34",
                "firstName": "Ki",
                "lastName": "Gee",
                "roleId": "15",
                "managerId": "9"
            },
            {
                "id": "35",
                "firstName": "Hazel",
                "lastName": "Philtanker",
                "roleId": "15",
                "managerId": "9"
            },
            {
                "id": "36",
                "firstName": "Renske",
                "lastName": "Ladwig",
                "roleId": "15",
                "managerId": "10"
            },
            {
                "id": "37",
                "firstName": "Stephen",
                "lastName": "Stiles",
                "roleId": "15",
                "managerId": "10"
            },
            {
                "id": "38",
                "firstName": "John",
                "lastName": "Seo",
                "roleId": "15",
                "managerId": "10"
            },
            {
                "id": "39",
                "firstName": "Joshua",
                "lastName": "Patel",
                "roleId": "15",
                "managerId": "10"
            }
        ],
        budgetedDepartments: [],
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
            return department
        },
        findManager(mgrId) {
            let manager = this.employees.find(employee => employee.id === mgrId)
            return `${manager.lastName}, ${manager.firstName}`
        },
        findRole(roleId) {
            let position = this.roles.find(role => role.id === roleId)
            return position
        },
        findBudget(deptId) {
            let budget = []
            let deptEmp = this.employees.filter(employee => this.findRole(employee.roleId).deptId === deptId)
            deptEmp.forEach(emp => budget.push(parseInt(this.findRole(emp.roleId).salary)))
            return this.formatSalary(budget.reduce((a, cv) => a + cv, 0))
        },
        budgetDepartments(departments) {
            departments.forEach(department => {
                this.budgetedDepartments.push({
                    "id": department.id,
                    "departmentName": department.departmentName,
                    "budget": this.findBudget(department.id)
                })
            })
        },
        joinRoleTables(roles) {
            roles.forEach(role => {
                this.joinedRoles.push({
                    "id": role.id,
                    "jobTitle": role.jobTitle,
                    "salary": this.formatSalary(role.salary),
                    "deptId": this.findDepartment(role.deptId).departmentName,
                    "isManagement": this.isManagement(role.isManagement)
                })
            })
        },
        joinEmployeeTables(employees) {
            employees.forEach(employee => {
                this.joinedEmployees.push({
                    "id": employee.id,
                    "employeeName": `${employee.lastName}, ${employee.firstName}`,
                    "jobTitle": this.findRole(employee.roleId).jobTitle,
                    "salary": this.formatSalary(this.findRole(employee.roleId).salary),
                    "department": this.findDepartment(this.findRole(employee.roleId).deptId).departmentName,
                    "managerName": this.findManager(employee.managerId)
                })
            })
        }
      },
      async created() {
        // let departments = await TrackerService.getDepartments()
        // let roles = await TrackerService.getRoles()
        // let employees = await TrackerService.getEmployees()
        // console.log(departments)
        // console.log(roles)
        // console.log(employees)
        this.budgetDepartments(this.departments)
        this.joinRoleTables(this.roles)
        this.joinEmployeeTables(this.employees)
      }
    }
  </script>
  