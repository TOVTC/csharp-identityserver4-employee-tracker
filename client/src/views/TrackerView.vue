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
  import TrackerService from '@/services/TrackerService.js'
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
        departments: [],
        roles: [],
        employees: [],
        budgetedDepartments: [],
        joinedRoles: [],
        joinedEmployees: [],
      }),
      methods: {
        isManagement(bool) {
            return parseInt(bool) === 1 ? "yes" : "no"
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
        let departments = await TrackerService.getDepartments()
        let roles = await TrackerService.getRoles()
        let employees = await TrackerService.getEmployees()
        this.departments = departments.data,
        this.roles = roles.data,
        this.employees = employees.data,
        this.budgetDepartments(departments.data)
        this.joinRoleTables(roles.data)
        this.joinEmployeeTables(employees.data)
      }
    }
  </script>
  